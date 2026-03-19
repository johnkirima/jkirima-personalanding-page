# Working Notes — John Kirima Personal Landing Page

> **⚠️ Internal Document** — This file is not intended for a public audience. It is a developer and AI assistant reference document. Update this file at the end of every working session.

---

## How to Use This File (For AI Assistants)

1. **Read this entire file** before suggesting changes or writing code.
2. **Read README.md** for the public-facing project description.
3. **Do not change** the folder structure or conventions without discussion.
4. **Follow all conventions** listed below exactly.
5. **Do not suggest** approaches listed in "What Was Tried and Rejected."
6. **Ask clarifying questions** before making large structural changes.
7. **Note:** This project was AI-assisted (vibe coded). Refactor conservatively — do not introduce frameworks, build tools, or dependencies without explicit approval.

---

## Current State

**Last Updated:** 2026-03-19

The project is a complete, deployed personal landing page. All core sections are implemented and styled. The site is live on Azure Static Web Apps and the source code is hosted on GitHub.

### What Is Working

- [x] Hero section with animated blinking cursor and meta info
- [x] About section with headshot, bio text, and stats sidebar
- [x] Skills section with three-column grid layout
- [x] Projects section with four numbered project cards
- [x] Experience section with timeline-style layout
- [x] Contact section with social links (LinkedIn, GitHub, X, email)
- [x] Fixed bottom navigation bar with smooth scroll
- [x] Fully responsive layout (320px to desktop)
- [x] External stylesheet (`css/stylesheet.css`)
- [x] Vanilla JavaScript for smooth scroll (`js/scripts.js`)
- [x] Professional headshot integrated
- [x] Deployed to Azure Static Web Apps
- [x] Source code on GitHub

### What Is Partially Built

- [ ] Favicon and Open Graph meta tags — not yet added
- [ ] Print stylesheet — not yet created

### What Is Not Started

- [ ] Dark/light theme toggle
- [ ] Blog or writing section
- [ ] Page load animations or scroll-triggered reveals
- [ ] Analytics integration

---

## Current Task

**What I was working on when I last stopped:**
Finalizing the deployment pipeline. The landing page code was pushed to the `jkirima-personalanding-page` GitHub repository. Azure Static Web App deployment was configured. README.md and WORKING_NOTES.md were created and committed.

**The very next step is:**
Verify the Azure deployment is live and confirm the site renders correctly at the Azure URL. Then add favicon and Open Graph tags as a v1.1 enhancement.

---

## Architecture and Tech Stack

| Technology | Version | Why It Was Chosen |
|---|---|---|
| HTML5 | — | Semantic markup required by course; no framework allowed |
| CSS3 | — | Pure styling without preprocessors; course requirement |
| JavaScript (Vanilla ES6) | — | Minimal interactivity without library overhead |
| Google Fonts (Space Mono) | — | Monospace typeface essential for brutalist/terminal aesthetic |
| Git / GitHub | — | Version control and collaboration; course requirement |
| Azure Static Web Apps | — | Free hosting tier; university Azure account available |
| VS Code / DeepAgent | — | Development environment |

---

## Project Structure Notes

```
jkirima-personalanding-page/
├── index.html              # Single-page layout — all content sections
├── css/
│   └── stylesheet.css      # All styles — theme, layout, responsive breakpoints
├── js/
│   └── scripts.js          # Smooth scroll only — no other JS functionality
├── images/
│   └── headshot.jpg        # Professional headshot (rectangular, no border-radius)
├── PRD.md                  # Product Requirements Document (do not modify)
├── STANDARDS.md            # Technical and design standards (do not modify)
├── WORKING_NOTES.md        # This file
├── README.md               # Public-facing project documentation
└── .gitignore              # Git ignore rules
```

**Notes:**
- `PRD.md` and `STANDARDS.md` are reference documents and should not be modified without discussion.
- All styles must remain in a single `stylesheet.css` file — do not split into multiple CSS files.
- No images besides `headshot.jpg` are used. Do not add decorative images.
- The `.gitignore` excludes OS files and editor configs.

---

## Data / Database

This project has **no persistent data**. It is a fully static site with no database, no API calls, and no dynamic content. All content is hardcoded in `index.html`.

---

## Conventions

### Naming Conventions

- **Files:** lowercase with hyphens (e.g., `stylesheet.css`, `scripts.js`)
- **CSS classes:** lowercase with hyphens (e.g., `.hero-name`, `.project-item`, `.section-label`)
- **CSS custom properties:** `--short-name` format (e.g., `--bg`, `--fg`, `--muted`, `--divider`)
- **HTML IDs:** lowercase, single word where possible (e.g., `#hero`, `#about`, `#skills`)

### Code Style

- **Indentation:** 2 spaces in HTML and CSS, 2 spaces in JS
- **Quotes:** Double quotes in HTML attributes, single quotes in JS strings
- **Semicolons:** Always in JS
- **CSS:** Properties grouped by type (reset, layout, typography, color, transitions)

### Framework-Specific Patterns

- No frameworks. Vanilla only. Do not introduce any.

### Git Commit Message Style

- Format: `type: short description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`
- Example: `feat: add projects section with four cards`

---

## Decisions and Tradeoffs

- **Decision: Brutalist/terminal aesthetic over modern card-based design.** This was a deliberate choice to differentiate from typical portfolio sites. The monospace font, dark background, and ASCII-style decorations create a unique identity. Do not suggest reversing this.
- **Decision: Single-page layout instead of multi-page site.** Keeps the project simple and all content scannable. Do not suggest reversing this.
- **Decision: No CSS framework (Bootstrap, Tailwind, etc.).** Course requirement and personal choice for learning vanilla CSS. Do not suggest reversing this.
- **Decision: Fixed bottom navigation instead of top header.** Intentional design choice — the nav is always accessible without occluding content. Do not suggest reversing this.
- **Decision: Space Mono as the sole typeface.** Consistency with terminal aesthetic. No secondary fonts. Do not suggest reversing this.
- **Decision: No JavaScript beyond smooth scroll.** The site should work with JS disabled. Do not suggest adding JS-heavy features. Do not suggest reversing this.
- **Decision: Grayscale-only color palette.** Part of the brutalist design language. No accent colors. Do not suggest reversing this.

---

## What Was Tried and Rejected

- **Multi-page layout with separate HTML files for each section** — rejected because single-page is simpler and better suits a personal landing page.
- **Using a CSS framework (Bootstrap)** — rejected; does not align with course requirements or brutalist aesthetic.
- **Rounded profile photo with border-radius** — rejected; rectangular fits the brutalist design better.
- **Colorful accent colors for links and highlights** — rejected; grayscale palette is an intentional design constraint.
- **Using the `jkirima-webpage-assignment` repository** — rejected; this is a separate project and needs its own repo.

---

## Known Issues and Workarounds

- **No favicon:** The browser shows a default icon. Not critical but should be added in v1.1.
- **Google Fonts dependency:** If Google Fonts CDN is unavailable, the site falls back to `Courier New` / `Consolas`. This is acceptable degradation.
- **Nav bar overlap on very short viewports:** On screens shorter than ~500px, the fixed bottom nav may overlap the footer content. No workaround in place yet.

---

## Browser / Environment Compatibility

**Tested on:**
- Chrome 120+ (Windows, macOS)
- Firefox 120+ (Windows)
- Safari 17+ (macOS)
- Chrome mobile (Android)
- Safari mobile (iOS)

**Expected to work on:**
- Any modern browser supporting CSS Grid, Flexbox, and `scroll-behavior: smooth`

**Known incompatibilities:**
- Internet Explorer — not supported (no CSS Grid, no custom properties)
- `backdrop-filter` in the nav may not render in older Firefox versions (graceful degradation to solid background)

---

## Open Questions

- Should Open Graph images be generated or use the headshot?
- Should a custom domain be set up, or keep the `.azurestaticapps.net` URL?
- Should a blog section be added in v1.1 or deferred to v2.0?

---

## Session Log

### 2026-03-19

- **What was accomplished:**
  - Created PRD.md defining project requirements, target audience, and content specs
  - Created STANDARDS.md with detailed technical and design standards
  - Built the complete landing page (index.html, stylesheet.css, scripts.js)
  - Implemented all six sections: Hero, About, Skills, Projects, Experience, Contact
  - Applied brutalist/terminal design aesthetic with Space Mono, dark theme, ASCII elements
  - Made the site fully responsive (320px to desktop) with three breakpoints
  - Added professional headshot
  - Pushed code to GitHub repository (jkirima-personalanding-page)
  - Configured Azure Static Web App deployment
  - Created comprehensive README.md
  - Created this WORKING_NOTES.md file
- **What was left incomplete:**
  - Favicon and Open Graph meta tags
  - Print stylesheet
  - Verification of live Azure deployment URL
- **Decisions made:**
  - Used `jkirima-personalanding-page` as the GitHub repository name (separate from webpage assignment)
  - Chose brutalist/terminal aesthetic inspired by Yannick Gregoire and LiM designs
  - Single external stylesheet approach (no inline styles, no CSS splits)
  - Minimal JavaScript (smooth scroll only)
- **Next step when resuming:**
  - Verify Azure deployment is live
  - Add favicon and Open Graph tags
  - Run W3C HTML and CSS validators

---

## Useful References

- [Space Mono — Google Fonts](https://fonts.google.com/specimen/Space+Mono)
- [CSS Grid — MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [Azure Static Web Apps Documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/)
- [Yannick Gregoire Portfolio](https://yannickgregoire.nl/) — design inspiration
- **AI Tools Used:** Claude (via Abacus.AI DeepAgent) was used to assist with code generation, CSS styling, responsive design implementation, and documentation. All output was reviewed, tested, and modified by the author. The AI helped accelerate development but all design decisions were human-directed.
