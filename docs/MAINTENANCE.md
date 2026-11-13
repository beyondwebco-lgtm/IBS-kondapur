# Project Maintenance & Extensibility Guide — IBS

This guide describes how to maintain, extend, update, and manage content in the **IBS – Innovative Business Solutions** codebase.

---

## 1. Managing Services & Categories

All service data is centralized in [`src/data/servicesData.js`](file:///c:/Users/Arun/Documents/GitHub/language-no-bar/src/data/servicesData.js).

### 1.1 Updating an Existing Service
To update a service's title, description, subservices, or use cases:
1. Open `src/data/servicesData.js`.
2. Locate the service by its `id` within `MAJOR_SERVICES`.
3. Update the fields (`title`, `description`, `fullDescription`, `subservices`, `useCases`, `qualityStandard`).
4. Vite will hot-reload the changes across the main cards, service modals, and navbar dropdown.

### 1.2 Adding a New Major Service Category
To add a new service:
1. In `src/data/servicesData.js`, append an object to `MAJOR_SERVICES`:
   ```javascript
   {
     id: 'new-service-id',
     menuLabel: 'Short Label',
     title: 'Full Service Name',
     group: 'language', // 'language' | 'media' | 'qa-ai' | 'outsourcing'
     groupLabel: 'Category Group Label',
     tag: 'Card Badge Text',
     iconName: 'Globe', // Lucide icon name
     description: 'Short 1-2 sentence card summary.',
     fullDescription: 'Comprehensive modal overview description.',
     subservices: ['Capability 1', 'Capability 2', 'Capability 3'],
     useCases: ['Use Case 1', 'Use Case 2'],
     qualityStandard: 'ISO / SLA Guarantee standard',
     isLanguageService: true
   }
   ```
2. If using a new Lucide icon, verify it is imported and registered in the `iconMap` inside `src/components/MainServices.jsx` and `src/components/Modals.jsx`.
3. Update `index.html` Schema.org `hasOfferCatalog` if the service should be indexed in structured data.

---

## 2. Managing Global Language Coverage

Language data is organized in [`src/data/languagesData.js`](file:///c:/Users/Arun/Documents/GitHub/language-no-bar/src/data/languagesData.js).

### 2.1 Adding a Supported Language
1. Open `src/data/languagesData.js`.
2. Locate the appropriate region within `GLOBAL_LANGUAGE_REGIONS` (`European`, `Asian`, `Middle Eastern`, `African`).
3. Add the language entry:
   ```javascript
   {
     name: 'Swedish',
     native: 'Svenska',
     region: 'Northern Europe',
     code: 'sv'
   }
   ```
4. It will immediately appear in the regional explorer, search filter, and quote dropdown options.

### 2.2 Adding Hero Language-Pair Showcases
To add animated pairs to the hero rotating carousel, add objects to `HERO_LANGUAGE_PAIRS`:
```javascript
{
  source: 'German',
  target: 'Japanese',
  service: 'Technical & Patent Translation',
  flagSource: '🇩🇪',
  flagTarget: '🇯🇵'
}
```

---

## 3. Managing Industry Sectors

Industry verticals are defined in [`src/data/industriesData.js`](file:///c:/Users/Arun/Documents/GitHub/language-no-bar/src/data/industriesData.js).

To add or update an industry:
1. Open `src/data/industriesData.js`.
2. Update or append an object to `INDUSTRIES_DATA`:
   ```javascript
   {
     id: 'aerospace-defense',
     name: 'Aerospace and Defense',
     iconName: 'Plane',
     shortDesc: 'Technical manuals, compliance documentation, and precision localization.',
     description: 'Detailed sector description for modal view.',
     relevantServices: [
       'Translation Services (Technical)',
       'Multilingual Desktop Publishing'
     ],
     defaultQuoteService: 'Translation Services'
   }
   ```

---

## 4. Managing Blog & Insight Articles

Articles are managed in [`src/data/blogData.js`](file:///c:/Users/Arun/Documents/GitHub/language-no-bar/src/data/blogData.js).

Each blog object contains:
- `id`: Unique kebab-case slug.
- `title`: Article headline.
- `excerpt`: 2-sentence teaser for card grid.
- `date`: Display publication date.
- `readTime`: Estimated reading time (e.g. `'4 min read'`).
- `tag`: Category tag pill (e.g. `'Localization'`, `'AI Technology'`).
- `content`: Array of paragraph strings rendered in `<BlogModal />`.

---

## 5. Managing Brand Logos & Visual Assets

Brand assets reside in:
- Header logo: `src/assets/ibs-logo-header.png`
- Footer logo: `src/assets/ibs-logo-footer.png`
- Root SEO logo: `public/ibs-logo.png`
- Favicon: `public/favicon.svg`

### Sizing and Styling Adjustments:
Logo rendering and sizing behavior is managed in [`src/components/IBSLogo.jsx`](file:///c:/Users/Arun/Documents/GitHub/language-no-bar/src/components/IBSLogo.jsx).
- Header height: Default `52px` (scaled with aspect ratio ~2.49:1).
- Footer height: Default `80px` (scaled with aspect ratio 3.0:1) with white protective badge and drop shadow.

---

## 6. Coding Standards & Best Practices

1. **Accessibility (WCAG 2.1 AA):**
   - Ensure all interactive buttons have descriptive `aria-label` attributes.
   - Maintain high color contrast (navy `#0B2545` / `#061729`, teal `#0D9488`, yellow `#F59E0B` against light/dark backgrounds).
   - Ensure modals trap focus and dismiss cleanly with the `Escape` key or backdrop clicks.
2. **Performance:**
   - Keep dependencies lean. Prefer native browser APIs and SVG icons over heavy third-party runtime libraries.
   - Run `npm run lint` before committing any code changes.
   - Keep CSS organized inside `src/index.css` under the appropriate section comment headers.

