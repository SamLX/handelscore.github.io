# Repository Guidelines

## Project Structure & Module Organization
This repository is a static marketing/documentation site for HandelScore.
- Root HTML pages: `index.html`, `funktionen.html`, `api.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`, `agb.html`
- Shared styling: `assets/styles.css`
- Static media: `static/img/...` (logo and image assets)
- Domain config: `CNAME`

Keep shared layout and visual rules in `assets/styles.css`; only page-specific markup should live in each HTML file.

## Build, Test, and Development Commands
No build pipeline is required; files are served as static assets.
- `python3 -m http.server 8000` - run a local static server from repo root
- `npx serve .` - optional Node-based static server
- `rg "TODO|FIXME"` - quick content quality sweep before opening a PR

Open `http://localhost:8000` to validate navigation and linked assets.

## Coding Style & Naming Conventions
- Use semantic HTML5 (`header`, `main`, `section`, `footer`) and keep pages in German unless a section is explicitly English (for technical API terms).
- Follow existing indentation: 4 spaces in HTML/CSS.
- Reuse CSS custom properties in `:root` and existing utility classes (`.container`, `.section`, `.btn`) before adding new variants.
- File names use lowercase, hyphen-free patterns already established (e.g., `kontakt.html`).

## Testing Guidelines
There is currently no automated test suite.
- Manually verify each changed page in desktop and mobile widths.
- Confirm all internal links, CTA buttons, and logo paths resolve.
- Validate that legal pages (`impressum.html`, `datenschutz.html`, `agb.html`) remain reachable from navigation/footer.

## Commit & Pull Request Guidelines
Recent commits use short, imperative messages (e.g., `Adaptivity fixed`, `Added font and color settings`). Keep this style.
- Commit subject: concise, action-oriented, <= 72 chars
- One logical change per commit
- PRs should include: purpose, changed files, before/after screenshots for UI changes, and manual test notes
- Link related issues/tasks when available

## Security & Configuration Tips
- Do not commit secrets, API keys, or customer data.
- Treat `CNAME` changes as production-impacting and mention them explicitly in PR descriptions.
