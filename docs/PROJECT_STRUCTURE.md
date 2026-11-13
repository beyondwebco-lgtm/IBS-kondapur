# Project Structure & Directory Map — IBS

This document outlines the directory structure, file naming conventions, and file responsibilities of the **IBS – Innovative Business Solutions** repository.

---

## 1. Directory Tree

```text
language-no-bar/
├── public/                       # Static public assets served from web root
│   ├── favicon.svg               # Vector brand mark favicon (Speech bubble globe)
│   ├── ibs-logo.png              # Canonical primary brand logo (for SEO / Open Graph)
│   ├── ibs-logo-footer.png       # Complete high-contrast footer brand signature
│   ├── robots.txt                # Search engine crawler permissions & sitemap reference
│   └── sitemap.xml               # XML sitemap pointing to canonical production endpoints
│
├── src/                          # Application source code
│   ├── assets/                   # Bundled graphics imported into React components
│   │   ├── ibs-logo-header.png   # High-resolution header brand mark
│   │   └── ibs-logo-footer.png   # High-resolution footer brand mark
│   │
│   ├── components/               # Modular React UI components (18 components)
│   │   ├── AboutUs.jsx           # Company story, Hyderabad hub vector map, founder profile
│   │   ├── BackToTop.jsx         # Smooth scroll-to-top floating button
│   │   ├── BlogSection.jsx       # Industry insights & translation knowledge base
│   │   ├── CategoryBanners.jsx   # 5 core language service highlight banners
│   │   ├── ContactSection.jsx    # Contact cards, message form & embedded Google Maps
│   │   ├── Footer.jsx            # Master footer with brand lockup, links & certifications
│   │   ├── GetAQuote.jsx         # Interactive quote calculator & customized proposal form
│   │   ├── Hero.jsx              # Hero banner with animated language-pair carousel
│   │   ├── IBSLogo.jsx           # Brand logo component supporting header/footer variants
│   │   ├── IndustriesSection.jsx # 12 target industry sector cards
│   │   ├── LanguagesSection.jsx  # Regional language coverage explorer & search filter
│   │   ├── MainServices.jsx      # 14 major service categories with tab filters
│   │   ├── Modals.jsx            # Accessible modal dialogs for services, industries & blog
│   │   ├── Navbar.jsx            # Sticky navigation, service dropdown & mobile drawer
│   │   ├── QualityPolicy.jsx     # Quality assurance methodology & data security protocols
│   │   ├── TopContactBar.jsx     # Header utility bar (Hyderabad location & 24/7 availability)
│   │   ├── WhatsAppButton.jsx    # Direct WhatsApp click-to-chat floating trigger
│   │   └── WhyChooseIBS.jsx      # 6 core differentiators & value pillars
│   │
│   ├── data/                     # Decoupled business data models
│   │   ├── blogData.js           # Blog posts, reading times, tags & full articles
│   │   ├── industriesData.js     # 12 industry definitions & relevant service mappings
│   │   ├── languagesData.js      # Global language regions, native scripts & Hero pairs
│   │   └── servicesData.js       # 14 major services, 5 highlight banners & menu labels
│   │
│   ├── App.jsx                   # Application orchestrator, modal router & quote state
│   ├── index.css                 # Master Design System (Tokens, layouts, responsive styles)
│   └── main.jsx                  # React 19 application entry point
│
├── docs/                         # Technical & architectural documentation
│   ├── ARCHITECTURE.md           # Application design, component tree & data pipelines
│   ├── PROJECT_STRUCTURE.md      # This file: Directory map & organization rules
│   ├── SETUP.md                  # Developer installation, prerequisites & commands
│   ├── DEPLOYMENT.md             # Production build, static hosting & verification
│   ├── MAINTENANCE.md            # Maintenance guides, conventions & adding features
│   └── CLEANUP_REPORT.md         # Audit report and directory cleanup details
│
├── .gitignore                    # Git version control ignore rules
├── .oxlintrc.json                # Oxlint rules and linter settings
├── index.html                    # Root HTML document, SEO meta tags & Schema.org JSON-LD
├── package.json                  # Project manifest, dependencies & scripts
├── package-lock.json             # Locked dependency tree
├── vite.config.js                # Vite build and plugin configuration
└── README.md                     # Project overview and quick start guide
```

---

## 2. File Responsibilities by Folder

### 2.1 `public/`
Files in `public/` are served at the root URL path (`/`) without transformation by the build tool.
- **`favicon.svg`:** Multi-language globe speech bubble vector mark served as the browser tab icon.
- **`ibs-logo.png`:** Standard high-resolution raster image used by `index.html` for `og:image`, `twitter:image`, `apple-touch-icon`, and Schema.org `logo` / `image`.
- **`ibs-logo-footer.png`:** High-contrast full signature available at public root.
- **`robots.txt`:** Instructs web spiders (Googlebot, Bingbot) on indexing rules and specifies the XML sitemap location.
- **`sitemap.xml`:** Lists canonical landing page URLs and metadata for search engine indexing.

### 2.2 `src/assets/`
Images imported directly into React components through JavaScript ES modules (`import img from '../assets/...'`). Vite hashes, optimizes, and bundles these assets during production builds.
- **`ibs-logo-header.png`:** Compact brand mark used in `Navbar.jsx` via `IBSLogo.jsx`.
- **`ibs-logo-footer.png`:** Complete brand signature with tagline used in `Footer.jsx` via `IBSLogo.jsx`.

### 2.3 `src/components/`
Each component owns a specific visual section or interactive interface:
- **Layout & Navigation:** `TopContactBar.jsx`, `Navbar.jsx`, `Footer.jsx`, `IBSLogo.jsx`, `BackToTop.jsx`, `WhatsAppButton.jsx`.
- **Landing Sections:** `Hero.jsx`, `CategoryBanners.jsx`, `MainServices.jsx`, `WhyChooseIBS.jsx`, `IndustriesSection.jsx`, `LanguagesSection.jsx`, `AboutUs.jsx`, `QualityPolicy.jsx`, `GetAQuote.jsx`, `ContactSection.jsx`, `BlogSection.jsx`.
- **Overlays:** `Modals.jsx` (houses `ServiceModal`, `IndustryModal`, `LanguagesModal`, `BlogModal`).

### 2.4 `src/data/`
Separation of concerns: Content is isolated from rendering logic, making updates to copy, service offerings, industry sectors, or language lists straightforward and risk-free.

### 2.5 `src/index.css`
Contains the entire styling layer of the application:
- CSS Custom Properties (`--primary-blue`, `--accent-teal`, `--accent-yellow`, `--text-dark`, `--font-main`, etc.).
- Global resets, typography rules, container bounds, button components (`.btn-yellow`, `.btn-blue-outline`, `.btn-teal`).
- Section-specific CSS classes grouped by semantic sections.
- Media query breakpoints: Desktop (`>1080px`), Tablets/Laptops (`<=1080px`), Tablets (`<=840px`), Mobile devices (`<=640px`), Small mobile (`<=480px`, `<=360px`).

---

## 3. File Naming Conventions

To maintain a consistent, predictable repository:

| Entity Type | Convention | Examples |
| :--- | :--- | :--- |
| **React Components** | PascalCase with `.jsx` extension | `Navbar.jsx`, `AboutUs.jsx`, `CategoryBanners.jsx` |
| **Data & Utility Files** | camelCase with `.js` extension | `servicesData.js`, `languagesData.js`, `blogData.js` |
| **Asset Files** | kebab-case with descriptive extension | `ibs-logo-header.png`, `ibs-logo-footer.png`, `favicon.svg` |
| **Documentation Files** | UPPERCASE with `.md` extension | `README.md`, `ARCHITECTURE.md`, `SETUP.md` |
| **Configuration Files** | Standard tool conventions | `vite.config.js`, `package.json`, `.oxlintrc.json` |

