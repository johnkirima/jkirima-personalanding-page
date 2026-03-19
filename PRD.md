# Product Requirement Document

**Project:** John Kirima — Personal Landing Page
**Author:** John Kirima
**Course:** BAIS:3300 · Digital Product Management · Module 8
**Date:** March 19, 2026
**Version:** 1.0

---

## 01 — Problem Statement

John Kirima is a senior at the University of Iowa's Tippie College of Business, majoring in Business Analytics and Information Systems, graduating in Spring 2026. He is targeting **Data Scientist** and **Data Analyst** roles in fast-paced, data-driven organizations — particularly in tech startups, analytics consultancies, and innovative mid-size companies.

A traditional resume cannot communicate the depth of John's technical projects, his experience building LLM-powered data science tools, or the trajectory of his growth from community college to building production-grade multi-agent systems. A personal landing page solves this by providing a curated, always-current digital presence that showcases not just credentials, but capability — giving recruiters and hiring managers an immediate sense of who John is and what he builds.

---

## 02 — Target Audience

| Audience | What They're Looking For |
|----------|-------------------------|
| **Technical recruiters** at mid-size tech companies and startups (Midwest and remote) | Quick assessment of technical skills, project quality, and role fit for data science / analytics positions |
| **Hiring managers** in data science and analytics teams | Evidence of real project work, problem-solving ability, and tools proficiency beyond what a resume bullet point conveys |
| **Professors and academic mentors** at University of Iowa | A professional digital presence that demonstrates initiative and readiness for industry |
| **Peers and collaborators** in the data science and analytics community | Shared interests, potential for collaboration, and a sense of John's technical range |
| **Potential startup co-founders or partners** | Entrepreneurial mindset, technical execution ability, and willingness to build |

The primary visitor is a **technical recruiter or hiring manager** screening candidates for entry-level data science or data analyst roles. They will spend 30–90 seconds on the page. They need to quickly understand: who John is, what he can do, and how to contact him.

---

## 03 — Goals & Success Metrics

| Goal | How We Measure It |
|------|-------------------|
| Establish a professional digital presence beyond LinkedIn and resume | Page is live, indexed, and shareable via a clean URL |
| Showcase technical projects with enough depth to impress hiring managers | At least 3 projects featured with descriptions, tools used, and outcomes |
| Drive recruiter outreach and interview opportunities | 2+ recruiter messages or interview requests within 60 days of launch |
| Demonstrate web development capability as a complementary skill | Site is hand-coded (HTML/CSS/JS), passes W3C validation, meets WCAG 2.2 AA |
| Increase LinkedIn profile views through cross-linking | 20% increase in LinkedIn profile views within 30 days of adding the landing page URL |
| Serve as a portfolio anchor for job applications | Landing page URL included in 100% of job applications submitted post-launch |

---

## 04 — Required Content

### Hero Section

- **[Must]** Full name: **John Kirima**
- **[Must]** Professional tagline — concise, specific to data science (e.g., "Data Scientist · Business Analytics · University of Iowa")
- **[Must]** Terminal/command-line inspired aesthetic consistent with the brutalist design direction
- **[Should]** Subtle ASCII or monospace decorative elements

### About / Bio

- **[Must]** Academic status: Senior at University of Iowa, Tippie College of Business
- **[Must]** Major: Business Analytics and Information Systems
- **[Must]** Graduation date: Spring 2026
- **[Must]** Career focus: Data Science / Data Analytics
- **[Must]** Brief narrative connecting community college origins → university → internship → building LLM tools → career goals
- **[Should]** Mention entrepreneurial interests and startup orientation

### Profile Photo

- **[Must]** Professional headshot stored locally in `images/` folder
- **[Must]** High quality, appropriate for professional context

### Skills

- **[Must]** Technical skills grouped by category:
  - **Programming:** Python, SQL
  - **Data & Visualization:** Power BI, Tableau, Microsoft Excel, Oracle APEX
  - **Data Science:** Machine Learning, Statistical Analysis, Data Mining, Data Cleaning, Data Visualization, SHAP
  - **Data Engineering:** ETL processes
  - **AI/LLM:** Multi-agent LLM systems (DeepSeek, Claude)
- **[Should]** Soft skills presented separately or woven into the bio: Analytical Thinking, Problem Solving, Communication
- **[Should]** Skills displayed as tags or badges consistent with the monospace/brutalist aesthetic

### Projects

- **[Must]** **DataForge** — LLM-powered data science automation tool
  - 9-agent pipeline architecture
  - Python, DeepSeek V3.2, Claude Sonnet
  - Automates data ingestion through SHAP interpretability
  - Link to GitHub repo

- **[Must]** **Incident Report Data Analytics Dashboard** — Systems Unlimited internship
  - Interactive Power BI dashboard for disability services
  - User interview-driven requirements gathering
  - Automated SharePoint → Power BI data integration

- **[Must]** **Spotify Track Analysis Database Application**
  - Oracle APEX relational database + web analytics app
  - Advanced SQL for music feature analysis
  - Link to live application

- **[Should]** **Multi-Ownership Model in European Soccer** — Data analytics study
  - Tableau visualizations, Kaggle data extraction
  - Data mining and analysis of ownership structures

### Experience

- **[Should]** Data Analyst Intern — Systems Unlimited, Inc. (Feb 2025 – Jun 2025)
- **[Should]** Direct Support Professional — Systems Unlimited, Inc. (Sep 2023 – Present)
- **[Should]** Brief descriptions focusing on data-relevant accomplishments

### Education

- **[Must]** University of Iowa — Tippie College of Business, B.S. Business Analytics & IS (2024–2026)
- **[Should]** Kirkwood Community College — AAS Business Administration (2021–2024)
- **[Should]** Dean's List Honor 2023
- **[Should]** Google Data Analytics Certifications

### Contact

- **[Must]** LinkedIn: [linkedin.com/in/john-kirima](https://www.linkedin.com/in/john-kirima/)
- **[Must]** GitHub: [github.com/johnkirima](https://github.com/johnkirima)
- **[Must]** Email: kirimajohn81@gmail.com
- **[Should]** X (Twitter): [x.com/JtKirima](https://x.com/JtKirima)
- **[Must]** All external links open in new tabs

---

## 05 — Scope

| In Scope This Week | Out of Scope |
|--------------------|--------------|
| Single-page landing page (`index.html`) | Blog or writing section |
| Hero, About, Skills, Projects, Experience, Education, Contact sections | Multi-page site architecture |
| Responsive layout (mobile + desktop) | Contact form with backend |
| Brutalist/minimal design with monospace typography | CMS or dynamic content |
| Static HTML/CSS/JS — no frameworks | Animations or complex JavaScript interactions |
| Deployment to Azure Static Web Apps | Custom domain name |
| GitHub version control | Analytics/tracking integration |
| W3C validation (HTML + CSS) | Dark/light mode toggle |
| WCAG 2.2 Level AA compliance | Resume download link |
| Profile photo in `images/` folder | Testimonials or recommendations section |
| PRD.md and STANDARDS.md in repo root | |

---

## 06 — Assumptions & Constraints

### Assumptions

- John has a professional headshot available for the `images/` folder
- GitHub repository (`jkirima-webpage-assignment`) is already created and connected to Azure Static Web Apps
- John has working knowledge of HTML and CSS from BAIS:3300 coursework
- The landing page will be the primary URL shared on job applications and LinkedIn
- Content (project descriptions, skills, bio) is finalized based on LinkedIn and resume data

### Constraints

- **Time:** Must be completed within the Module 8 assignment window
- **Tools:** HTML5, CSS3, minimal vanilla JavaScript only — no frameworks, no build tools
- **Hosting:** Azure Static Web Apps (already configured via GitHub Actions CI/CD)
- **Skill level:** Intermediate HTML/CSS; this is a learning project, not a production portfolio
- **Budget:** $0 — free hosting, free fonts (Google Fonts), no paid assets
- **Design:** Must follow the approved brutalist/minimal aesthetic — black background, monospace fonts, terminal-inspired elements, generous negative space
- **No resume link:** The landing page is a curated professional presence, not a resume mirror. Resumes go stale quickly and a live URL pointing to an outdated resume does more harm than good.

---

> **Next step:** Save this file as `PRD.md` in your GitHub repo root. Then open your `STANDARDS.md` template and use your PRD to fill in Section 1 (Project Overview) and Section 3 (Design Standards). Both files must be in your repository root before your first coding session.
