#!/usr/bin/env python3
"""Validate the location and educational-page links of source PDFs."""

from __future__ import annotations

import posixpath
import re
import sys
from pathlib import Path, PurePosixPath
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
BASE_URL = "/markel/"
SITE_HOST = "oxidogit.github.io"
SLUG_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
PDF_LINK_RE = re.compile(
    r"""(?ix)
    (?:
        href \s*=\s* ["']
        |
        \] \( \s* <?
    )
    (?P<url> [^"'<>)]*? \.pdf (?:[?#][^"'<>)]*)? )
    """
)
IGNORED_DIRS = {".git", ".jekyll-cache", "_site", "node_modules", "vendor"}
NON_EDUCATIONAL_DIRS = {
    ".github",
    "_layouts",
    "admin",
    "migration",
    "scripts",
    "sources",
}
NON_EDUCATIONAL_FILES = {"AGENTS.md", "README.md"}


def repository_files() -> list[Path]:
    return [
        path
        for path in ROOT.rglob("*")
        if path.is_file() and not any(part in IGNORED_DIRS for part in path.parts)
    ]


def relative(path: Path) -> PurePosixPath:
    return PurePosixPath(path.relative_to(ROOT).as_posix())


def educational_pages(files: list[Path]) -> list[Path]:
    pages = []
    for path in files:
        rel = relative(path)
        if path.suffix.lower() not in {".html", ".md", ".markdown"}:
            continue
        if rel.name in NON_EDUCATIONAL_FILES or rel.parts[0] in NON_EDUCATIONAL_DIRS:
            continue
        pages.append(path)
    return pages


def normalize_pdf_link(page: Path, raw_url: str) -> PurePosixPath | None:
    url = urlsplit(raw_url.strip())
    if url.scheme or url.netloc:
        if url.scheme not in {"http", "https"} or url.netloc != SITE_HOST:
            return None

    path = unquote(url.path).replace("\\", "/")
    if not path.lower().endswith(".pdf"):
        return None

    if path.startswith(BASE_URL):
        path = path[len(BASE_URL) :]
    elif path.startswith("/"):
        path = path[1:]
    else:
        page_parent = relative(page).parent.as_posix()
        path = posixpath.join(page_parent, path)

    normalized = posixpath.normpath(path)
    if normalized == ".." or normalized.startswith("../"):
        return None
    return PurePosixPath(normalized)


def main() -> int:
    files = repository_files()
    pdfs = sorted(relative(path) for path in files if path.suffix.lower() == ".pdf")
    pages = educational_pages(files)
    linked_pdfs: set[PurePosixPath] = set()
    source_links: set[PurePosixPath] = set()

    for page in pages:
        text = page.read_text(encoding="utf-8")
        for match in PDF_LINK_RE.finditer(text):
            link = normalize_pdf_link(page, match.group("url"))
            if link is None:
                continue
            linked_pdfs.add(link)
            if link.parts and link.parts[0] == "sources":
                source_links.add(link)

    errors: list[str] = []
    for pdf in pdfs:
        if len(pdf.parts) < 4 or pdf.parts[0] != "sources":
            errors.append(
                f"PDF fuera de sources/<asignatura>/<tema>/: {pdf.as_posix()}"
            )
            continue
        subject, topic = pdf.parts[1], pdf.parts[2]
        if not SLUG_RE.fullmatch(subject) or not SLUG_RE.fullmatch(topic):
            errors.append(
                "Carpetas de asignatura/tema no validas "
                f"(usa minusculas, numeros y guiones): {pdf.as_posix()}"
            )
        if pdf not in linked_pdfs:
            errors.append(
                f"PDF sin enlace desde una pagina educativa: {pdf.as_posix()}"
            )

    existing_pdfs = set(pdfs)
    for link in sorted(source_links - existing_pdfs):
        errors.append(f"Enlace a PDF local inexistente: {link.as_posix()}")

    if errors:
        print("Comprobacion de fuentes educativas: ERROR")
        for error in errors:
            print(f"- {error}")
        return 1

    print(
        "Comprobacion de fuentes educativas: OK "
        f"({len(pdfs)} PDF, {len(source_links)} enlaces locales)"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
