# STANDARDS.md

## BAIS:3300 — Digital Product Management · Module 8 | Personal Landing Page Project

_This file contains technical instructions for this project. Every time you
begin a coding session, ask your LLM to read this file before writing any code.
The LLM will follow these standards automatically without you needing to repeat
them in every prompt._

_To start a session, paste this into your LLM:_
_"Please read my STANDARDS.md file before we begin. I will be asking you to build
and modify my personal landing page."_

---

## 1. Project Overview

This is a personal professional landing page for John Kirima — a senior at the University of Iowa majoring in Business Analytics and Information Systems, graduating Spring 2026. The site targets technical recruiters, hiring managers, and collaborators in the data science space. A successful outcome is a fast-loading, responsive, single-page site that clearly communicates John's skills, projects (especially DataForge), and professional trajectory in under 60 seconds — driving recruiter outreach and serving as a portfolio anchor for job applications.

---

## 2. Technical Standards

These rules apply to every file in this project without exception.

**Languages and versions:**

- HTML5 — use semantic elements throughout: `<header>`, `<main>`, `<section>`,
  `<article>`, `<footer>`, `<nav>`
- CSS3 — all styles must be written in `css/stylesheet.css`; no inline `style=""`
  attributes; no `<style>` tags in any HTML file
- HTML5 and CSS3 code must pass W3C validation

**Folder structure:**

<pre>
/jkirima-webpage-assignment (Root Folder)
├── index.html
├── PRD.md
├── STANDARDS.md
├── README.md
├── /css
│    └── stylesheet.css
├── /js
│    └── scripts.js
├── /images
│    └── headshot.jpg
</pre>

**Framework:**

- No framework — vanilla CSS only

**Architecture:**

- Static site — minimal JavaScript (scroll behavior only), no server-side code, no database, no back-end
- Single `index.html` file in the project root
- External stylesheet: `stylesheet.css` in the `css/` folder and referenced by relative path
- All images stored in the `images/` subfolder and referenced by relative path
  (e.g., `src="images/headshot.jpg"`) — never link to external image URLs
- Do not link to or embed a resume anywhere on the site

**Responsiveness:**

- Fully responsive at all screen widths from 320px and wider
- No horizontal scrolling on any viewport
- Mobile-first approach: base styles for mobile, media queries for larger screens

**Accessibility — WCAG 2.2 Level AA (non-negotiable):**

- All `<img>` elements must have a descriptive `alt` attribute
- Color contrast ratio: minimum 4.5:1 for normal text, 3:1 for large text
- Heading hierarchy must be logical: `<h1>` → `<h2>` → `<h3>`, no levels skipped
- All link text must be descriptive — no "click here", "read more", or bare URLs
- Page `<title>` element must be descriptive (e.g., "John Kirima — Data Scientist")
- All interactive elements (links, buttons) must be keyboard navigable
- Use `aria-label` attributes where link context is not self-evident

**Compatibility:**

- Must render correctly on Chrome, Safari, and Firefox
- Must be mobile-responsive (works on screens 375px and wider)

**Security:**

- Links to external sites must open in a new tab (`target="_blank"` with `rel="noopener noreferrer"`)

---

## 3. Design Standards

These visual rules apply to the entire site. The LLM must follow them on every
build and every revision.

**Design Philosophy:**

German Brutalism meets terminal aesthetics. The design draws from developer tool interfaces, command-line environments, and monospaced print layouts. Every element earns its place — no decoration without purpose. The site should feel like it was built by someone who spends time in a terminal, not someone who downloaded a template.

**Color Palette:**

| Role                 | Hex Code  | Usage                                          |
|----------------------|-----------|-------------------------------------------------|
| Background           | `#050505` | Page background — near-black                    |
| Primary text         | `#FFFFFF` | Headings, hero text, emphasis                   |
| Secondary text       | `#CCCCCC` | Body copy, paragraphs, descriptions             |
| Muted text           | `#666666` | Labels, metadata, timestamps, section markers   |
| Accent               | `#CCCCCC` | Links on hover, subtle highlights               |
| Divider / Border     | `#222222` | Section dividers, card borders, separators      |
| Tag background       | `#1A1A1A` | Skill tags, project cards, code blocks          |

No bright accent colors. No gradients. No shadows. The palette is grayscale only — this is intentional and non-negotiable.

**Typography:**

- **Font:** Space Mono — imported from Google Fonts
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  ```
- **Body size:** 15px, line height: 1.7
- **H1 (name / hero):** 2.5rem, 700 weight, `#FFFFFF`, uppercase, letter-spacing: 0.15em
- **H2 (section headings):** 1.5rem, 700 weight, `#FFFFFF`, uppercase, letter-spacing: 0.1em
- **H3 (subsection / project titles):** 1.1rem, 700 weight, `#FFFFFF`
- **Body text:** 0.95rem, 400 weight, `#CCCCCC`
- **Labels and metadata:** 0.8rem, 400 weight, `#666666`, uppercase, letter-spacing: 0.08em
- **All text is monospaced.** No secondary font. Space Mono for everything.

**Imagery:**

- Professional headshot only — no stock photos, no clip art, no emojis, no icons (except minimal ASCII-style decorations)
- Headshot should be high contrast, works well on dark background

**Layout:**

- Maximum content width: 800px, centered on the page
- Navigation: Fixed/sticky top bar with anchor links to each section, monospace text, minimal styling
- Section spacing: 80px top padding, 60px bottom padding on each `<section>`
- Single column layout throughout — no multi-column grids
- Generous whitespace — let content breathe
- Sections separated by subtle `1px solid #222222` horizontal rules or equivalent spacing

**Component Styles:**

_Profile photo:_

- Rectangular crop, max-width 200px
- Subtle 1px border in `#333333`
- No rounded corners, no circular crop — brutalist aesthetic demands sharp edges
- Positioned in the hero or about section

_Skill tags:_

- Monospace text, 0.8rem, uppercase
- Background: `#1A1A1A`, text: `#CCCCCC`
- 1px solid `#333333` border
- Padding: 4px 12px
- No border-radius — sharp rectangular tags
- Arranged in a flex-wrap layout with 8px gaps

_Project cards:_

- Background: `#0A0A0A` or `#111111`
- 1px solid `#222222` border
- Project number prefix (e.g., `[01]`, `[02]`) in `#666666`
- Title in `#FFFFFF`, description in `#CCCCCC`
- Tools listed as inline tags
- External links styled as `→ VIEW PROJECT` in uppercase, `#CCCCCC`, with underline on hover

_Contact links:_

- Displayed as labeled text links (e.g., `LINKEDIN →`, `GITHUB →`, `EMAIL →`)
- Monospace, uppercase, `#CCCCCC`
- Underline on hover
- Each opens in a new tab

_Navigation links:_

- Monospace text, uppercase, 0.8rem
- Color: `#666666` default, `#FFFFFF` on hover
- No underline by default, underline on hover
- Letter-spacing: 0.05em
- Separated by ` / ` or `·` characters

_ASCII / Decorative elements:_

- Use bracket notation for section markers: `[ABOUT]`, `[PROJECTS]`, `[CONTACT]`
- Use `//` or `/*` comment-style prefixes for labels where appropriate
- Use `→` arrows for links and navigation cues
- Minimal use — decoration should feel like code comments, not graphic design

**Tone:**

- **Three words that describe the desired feel:** Technical, Intentional, Quiet
- Clean and stripped back. Professional but not corporate. The site should feel like a developer's workspace — organized, functional, no excess.
- **Writing tone:** First person, direct, and confident. Short sentences. No buzzwords like "passionate" or "synergy." Let the work speak.

**Reference Sites:**

- [yannickgregoire.com](https://yannickgregoire.com) — for terminal/monospace aesthetic and section structure
- [read.cv](https://read.cv) — for simplicity and whitespace
- The "LiM. Less is More" landing page — for dark background, bold typography, and restraint
- The "New Mentalities" poster aesthetic — for high-contrast dark imagery with monospaced typography overlay

---

_Remember: this document is a living artifact. Update it as you learn more._
