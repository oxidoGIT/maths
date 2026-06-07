#!/usr/bin/env python3
"""Ensure every HTML page and layout uses the shared site favicon."""

from __future__ import annotations

import sys
from html.parser import HTMLParser
from pathlib import Path, PurePosixPath


ROOT = Path(__file__).resolve().parents[1]
FAVICON = ROOT / "favicon.svg"
IGNORED_DIRS = {".git", ".jekyll-cache", "_site", "node_modules", "vendor"}


class FaviconParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.hrefs: list[str] = []

    def handle_starttag(
        self, tag: str, attrs: list[tuple[str, str | None]]
    ) -> None:
        if tag.lower() != "link":
            return
        attributes = {name.lower(): value for name, value in attrs}
        rel = (attributes.get("rel") or "").lower().split()
        href = attributes.get("href")
        if "icon" in rel and href:
            self.hrefs.append(href)


def html_files() -> list[Path]:
    return sorted(
        path
        for path in ROOT.rglob("*.html")
        if not any(part in IGNORED_DIRS for part in path.relative_to(ROOT).parts)
    )


def expected_href(path: Path) -> str:
    relative = PurePosixPath(path.relative_to(ROOT).as_posix())
    if relative.parts[:1] == ("_layouts",):
        return "favicon.svg"
    return "../" * (len(relative.parts) - 1) + "favicon.svg"


def main() -> int:
    errors: list[str] = []
    if not FAVICON.is_file():
        errors.append("Falta favicon.svg en la raiz del sitio")

    pages = html_files()
    for page in pages:
        parser = FaviconParser()
        parser.feed(page.read_text(encoding="utf-8"))
        expected = expected_href(page)
        if expected not in parser.hrefs:
            relative = page.relative_to(ROOT).as_posix()
            errors.append(f"{relative}: falta <link rel=\"icon\" href=\"{expected}\">")

    if errors:
        print("Comprobacion de favicon: ERROR")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"Comprobacion de favicon: OK ({len(pages)} paginas y plantillas)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
