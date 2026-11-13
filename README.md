# IBS – Innovative Business Solutions

> **"Bridging Languages. Empowering Businesses."**  
> Established in February 2021 | 15+ Years of Industry Expertise | 5+ Years of Business Excellence  
> Corporate Office: Hyderabad, Telangana, India – 500084

---

## Overview

**Innovative Business Solutions (IBS)** is a premier language translation, localization, interpretation, transcription, and business outsourcing provider based in Hyderabad, India. 

Led by founder **Abburi Tanuja**, who brings over 15 years of industry leadership in language services and business solutions, IBS delivers high-accuracy multilingual communication and streamlined operational support to enterprises, institutions, and global organizations worldwide.

This repository contains the complete, production-ready single-page web application for IBS, built with modern React, Vite, and an SLA-driven, responsive design system.

---

## Technology Stack

- **Core Framework:** [React 19](https://react.dev/) (`^19.3.1`)
- **Build Tool & Bundler:** [Vite 8](https://vite.dev/) (`^8.3.5`) with `@vitejs/plugin-react`
- **Iconography:** [Lucide React](https://lucide.dev/) (`^1.67.0`)
- **Linter & Code Quality:** [Oxlint](https://oxc.rs/) (`^1.89.0`)
- **Styling:** Custom Vanilla CSS3 Design System with CSS Custom Properties, flexbox/grid architecture, smooth animations, and comprehensive responsive breakpoints (down to 360px mobile).
- **SEO & Structured Data:** Semantic HTML5, Schema.org JSON-LD (`LocalBusiness`, `ProfessionalService`, `OfferCatalog`), Open Graph, Twitter Cards, `robots.txt`, and XML Sitemap.

---

## Key Features

1. **Top Contact & Availability Bar:** Live Hyderabad location reference and 24/7 support availability.
2. **Dynamic Header & Sticky Navbar:** Responsive desktop navigation with a 14-service category dropdown, mobile drawer menu, and smooth-scrolling section spy.
3. **Hero Section:** Animated global language-pair carousel showcase, dual primary/secondary CTAs, and quick service pill badges.
4. **Core Service Highlights:** 5 prominent visual highlight cards positioned directly below the Hero for immediate service discovery.
5. **14 Major Service Categories:** Interactive services catalog with dynamic category filter tabs (`All`, `Language & Localization`, `Audio, Video & DTP`, `QA, AI & Research`, `Outsourcing & Consulting`) and modal deep-dives.
6. **Industry Solutions:** 12 industry sectors with tailored service mappings and direct quote pre-fill actions.
7. **Global Language Coverage Explorer:** Interactive regional language browser with search filtering across European, Asian, Middle Eastern, and African languages.
8. **Integrated Company & Leadership Story:** Company milestones (Feb 2021), Hyderabad operational hub with an interactive SVG communication network map, and executive founder profile featuring Abburi Tanuja.
9. **Interactive Quote Estimator:** Dynamic proposal generator allowing clients to select services, source/target languages, industry verticals, and project timelines.
10. **Quality Policy & SLA Framework:** Multi-stage linguistic quality assurance workflow, confidentiality protocols, and data security guarantees.
11. **Blog & Industry Insights:** Thought leadership articles covering AI post-editing (MTPE), website localization, clinical back-translation, and multilingual customer support.
12. **Corporate Navy Footer:** Comprehensive brand summary, quick links, contact info, certifications, and smooth anchor scrolling.

---

## Getting Started

### Prerequisites

- **Node.js:** `v18.0.0` or higher (Node `v20+` or `v22+` recommended)
- **Package Manager:** `npm` (`v9+` or `v10+`)

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/your-username/language-no-bar.git
cd language-no-bar

# Install dependencies
npm install
```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at: [http://localhost:5173/](http://localhost:5173/)

### Code Quality & Linting

Run Oxlint to verify code quality across the codebase:

```bash
npm run lint
```

### Production Build

Compile and bundle the production-ready application into the `dist/` folder:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure Overview

```text
language-no-bar/
├── public/                  # Static assets served at web root
│   ├── favicon.svg          # Official brand favicon (SVG)
│   ├── ibs-logo.png         # Canonical brand logo for SEO / Social Cards
│   ├── ibs-logo-footer.png  # High-contrast footer brand signature
│   ├── robots.txt           # Search crawler directives
│   └── sitemap.xml          # XML sitemap for search engines
│
├── src/
│   ├── assets/              # Bundled image assets imported in components
│   │   ├── ibs-logo-header.png
│   │   └── ibs-logo-footer.png
│   │
│   ├── components/          # Modular React UI components
│   │   ├── AboutUs.jsx
│   │   ├── BackToTop.jsx
│   │   ├── BlogSection.jsx
│   │   ├── CategoryBanners.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── GetAQuote.jsx
│   │   ├── Hero.jsx
│   │   ├── IBSLogo.jsx
│   │   ├── IndustriesSection.jsx
│   │   ├── LanguagesSection.jsx
│   │   ├── MainServices.jsx
│   │   ├── Modals.jsx
│   │   ├── Navbar.jsx
│   │   ├── QualityPolicy.jsx
│   │   ├── TopContactBar.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── WhyChooseIBS.jsx
│   │
│   ├── data/                # Centralized structured business data
│   │   ├── blogData.js
│   │   ├── industriesData.js
│   │   ├── languagesData.js
│   │   └── servicesData.js
│   │
│   ├── App.jsx              # Main layout, quote prefill state & modal router
│   ├── index.css            # Central design system, CSS variables & layouts
│   └── main.jsx             # React 19 application entry point
│
├── docs/                    # Technical & operational documentation
│   ├── ARCHITECTURE.md      # Architecture, component flow & data pipeline
│   ├── PROJECT_STRUCTURE.md # Directory tree & file responsibility map
│   ├── SETUP.md             # Developer setup, prerequisites & commands
│   ├── DEPLOYMENT.md        # Production build, hosting & verification guide
│   ├── MAINTENANCE.md       # Guides for adding content, services & features
│   └── CLEANUP_REPORT.md    # Repository audit and directory cleanup report
│
├── index.html               # Main HTML entry with Schema.org JSON-LD metadata
├── package.json             # NPM package manifest & scripts
├── vite.config.js           # Vite build & plugin configuration
└── .oxlintrc.json           # Oxlint rules configuration
```

---

## Technical Documentation

Detailed documentation is available in the [`docs/`](./docs/) directory:

- [**Architecture & Data Flow**](file:///c:/Users/Arun/Documents/GitHub/language-no-bar/docs/ARCHITECTURE.md)
- [**Project Structure & File Organization**](file:///c:/Users/Arun/Documents/GitHub/language-no-bar/docs/PROJECT_STRUCTURE.md)
- [**Setup & Development Guide**](file:///c:/Users/Arun/Documents/GitHub/language-no-bar/docs/SETUP.md)
- [**Deployment & Hosting Guide**](file:///c:/Users/Arun/Documents/GitHub/language-no-bar/docs/DEPLOYMENT.md)
- [**Maintenance & Extensibility Guide**](file:///c:/Users/Arun/Documents/GitHub/language-no-bar/docs/MAINTENANCE.md)
- [**Directory Cleanup & Audit Report**](file:///c:/Users/Arun/Documents/GitHub/language-no-bar/docs/CLEANUP_REPORT.md)

---

## Contact & Business Information

- **Company:** IBS – Innovative Business Solutions
- **Founder:** Abburi Tanuja (15+ Years Industry Expertise)
- **Established:** February 2021 (5+ Years Business Excellence)
- **Address:** 63 B, Sriram Nagar, Kondapur, Hyderabad – 500084, Telangana, India
- **Availability:** Monday – Saturday | Available 24/7
- **Email:** info@innovativebusiness.in
- **Website:** [https://innovativebusiness.in](https://innovativebusiness.in)
