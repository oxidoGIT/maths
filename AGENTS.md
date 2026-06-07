# Project

This is the Jekyll source for the GitHub Pages site at
`https://oxidogit.github.io/markel/`.

- Subject index content lives in `_subjects/*.md`.
- Subject pages are generated with `_layouts/subject.html`.
- Shared site data lives in `_data/`.
- Standalone interactive lessons normally use sibling HTML, CSS, and JS files.
- Decap CMS configuration lives in `admin/`.
- GitHub Pages serves the site with the `/markel` base URL.

# Working Rules

- Start from an up-to-date local `main` branch and inspect `git status`.
- Make minimal, targeted edits and preserve existing project patterns.
- Do not add frameworks, dependencies, or a build system unless requested.
- Never commit macOS metadata such as `.DS_Store` or `._*` files.
- Do not create temporary GitHub Actions workflows to publish generated files.
  Publish normal reviewed Git commits instead.
- Preserve relative links and account for the `/markel` base URL.
- Every new HTML page and layout must reference the shared root `favicon.svg`
  using the correct relative path for its directory depth.
- For multi-file features, use a branch and keep HTML, CSS, JS, and links
  together until they have been checked.
- Do not push or merge until the requested change has been verified.
- Prefer one coherent commit per completed feature; avoid empty commits and
  commits that publish incomplete intermediate states.
- Use a simple local server for standalone HTML pages. Jekyll-generated
  Markdown, layouts, and navigation require a Jekyll-capable preview or a
  careful source review.
- Keep final summaries short. Do not print a full diff unless requested.

# Educational Content

- The primary audience is a student in 2nd year of ESO. Use clear,
  age-appropriate language and explain concepts without unnecessary complexity.
- Write each page in the language of its subject or source material. In
  particular, Catalan and Socials study content is normally written in Catalan.
- Treat supplied syllabi, rubrics, notes, and corrected transcriptions as the
  source of truth. Cover the requested material thoroughly, but do not introduce
  more advanced topics that are outside those sources.
- When a source summary and raw notes are both available, use the summary for
  structure and the raw notes for examples and clarification.
- Organize reusable source documents generically by site hierarchy:
  `sources/<subject>/<topic>/`. Derive filesystem-safe lowercase subject and
  topic slugs from the corresponding site section; do not maintain a fixed list
  of subjects because new subjects may be added later.
- Treat every scanned or supplied educational PDF as approved for publication.
  Copy each PDF into `sources/<subject>/<topic>/`, preserve the original source,
  publish it with the site, and link it from the relevant educational page.
- Do not leave an educational PDF only as a chat attachment or temporary
  external link. If an attachment cannot be accessed or copied into the
  repository, explicitly report that before considering the work complete.
- After adding a source PDF, confirm its repository path and its link from the
  relevant page in the final summary.
- For source-grounded quizzes, ensure the questions collectively cover the
  requested source material. When requested, show the relevant source fragment
  after a correct answer.

# Lesson And Exercise Design

- Follow the visual and interaction patterns of existing lesson pages before
  inventing a new design.
- Prefer a concise but complete theory section followed by practice for each
  section or subsection.
- Use a varied mix of multiple-choice, typed-answer, contextual, and visual
  exercises with progressive difficulty.
- Exercises should normally be interactive and individually autocorrectable.
  Include useful feedback, optional hints, and explanations.
- Do not reveal the formula or method directly in an exercise when applying it
  is part of the task. Put it in an optional hint when appropriate.
- Include clear, accurate diagrams when visual understanding matters. Check that
  labels, arrows, and shapes remain legible and correctly aligned.
- Preserve progress locally when the existing page pattern does so, and provide
  a reset-progress control for substantial exercise sets.
- Keep pages lively and friendly without sacrificing readability, correctness,
  or mobile usability.

# Navigation And Structure

- Every lesson page must fit the site's subject hierarchy.
- Provide a visible but unobtrusive breadcrumb near the top. Do not label the
  breadcrumb with the word `RUTA`.
- Provide a top back/parent link that points to the correct parent subject page,
  not merely browser history or the site root.
- Make it easy to move upward and downward through the relevant site hierarchy.
- When adding a new page, also add its link to the appropriate subject index and
  preserve the formatting used by neighboring sections.
- Prefer relative internal links that work correctly under the `/markel` GitHub
  Pages base URL.

# Sources And Migration

- When migrating an internal Google Sites index page, preserve its hierarchy
  and update `migration/inventory.json` when relevant.
- Keep final resources hosted on ChatGPT, including `/canvas/shared/` and `/s/`
  URLs, as external links unless the user explicitly requests a local version.
- Keep other destinations outside the migrated site tree as external links
  unless a static asset is required to represent an internal page.

# Verification

- Check that requested source topics are represented and that generated claims
  are supported by the supplied material.
- Verify internal links, parent navigation, interactive correction, progress
  reset, and responsive layout when they are affected.
- For broad visual changes, perform one focused browser check before publishing.
- Run `python3 scripts/check_sources.py` before committing or publishing any
  educational source change. Fix every misplaced, unlinked, or missing PDF it
  reports.
- Run `python3 scripts/check_favicon.py` before committing or publishing any
  HTML or layout change. Fix every page or layout it reports.
- Before committing, confirm that no unintended source documents, temporary
  files, macOS metadata, or unrelated changes are included.
