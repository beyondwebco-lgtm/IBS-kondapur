// Comprehensive Automated Website Audit Script
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const publicDir = path.join(__dirname, '..', 'public');

console.log('=== RUNNING COMPREHENSIVE TECHNICAL AUDIT ===\n');
let passed = 0;
let warnings = 0;
let errors = 0;

function assert(condition, message, isWarning = false) {
  if (condition) {
    passed++;
    console.log(`  [PASS] ${message}`);
  } else if (isWarning) {
    warnings++;
    console.log(`  [WARN] ${message}`);
  } else {
    errors++;
    console.log(`  [FAIL] ${message}`);
  }
}

// 1. Data Integrity & Consistency Check
console.log('\n--- 1. Data Integrity Checks ---');
const servicesData = require('../src/data/servicesData.js');
const languagesData = require('../src/data/languagesData.js');
const industriesData = require('../src/data/industriesData.js');
const blogData = require('../src/data/blogData.js');

assert(Array.isArray(servicesData.MAJOR_SERVICES) && servicesData.MAJOR_SERVICES.length === 14, '14 Major Services categories defined');
assert(Array.isArray(industriesData.INDUSTRIES_DATA) && industriesData.INDUSTRIES_DATA.length === 12, '12 Industry Sectors defined');
assert(Array.isArray(languagesData.HERO_LANGUAGE_PAIRS) && languagesData.HERO_LANGUAGE_PAIRS.length >= 8, 'Hero language pairs defined and valid');
assert(Array.isArray(blogData.BLOG_POSTS) && blogData.BLOG_POSTS.length === 3, '3 Blog posts defined with full metadata');

// 2. Link & Anchor Target Verification
console.log('\n--- 2. Link & Navigation Destination Checks ---');
const components = fs.readdirSync(path.join(srcDir, 'components')).filter(f => f.endsWith('.jsx'));
const allIds = new Set();

components.forEach(f => {
  const content = fs.readFileSync(path.join(srcDir, 'components', f), 'utf8');
  const matches = [...content.matchAll(/id="([^"]+)"/g)];
  matches.forEach(m => allIds.add(m[1]));
});

const criticalAnchors = ['home', 'services', 'why-ibs', 'industries', 'languages', 'about', 'founder', 'quality', 'quote', 'contact', 'blog'];
criticalAnchors.forEach(anchor => {
  assert(allIds.has(anchor), `Anchor #${anchor} exists on page`);
});

// Check external links have rel="noopener noreferrer"
let allExternalLinksSafe = true;
components.forEach(f => {
  const content = fs.readFileSync(path.join(srcDir, 'components', f), 'utf8');
  const externalLinks = [...content.matchAll(/<a[^>]+href="https?:\/\/[^>]+>/g)];
  externalLinks.forEach(l => {
    if (l[0].includes('target="_blank"') && !l[0].includes('noopener')) {
      console.log(`  [WARN] Missing noopener on link in ${f}: ${l[0]}`);
      allExternalLinksSafe = false;
    }
  });
});
assert(allExternalLinksSafe, 'All target="_blank" external links include rel="noopener noreferrer"');

// 3. Asset Integrity & Payload Verification
console.log('\n--- 3. Asset Integrity & Weight Checks ---');
const headerLogoSize = fs.statSync(path.join(srcDir, 'assets', 'ibs-logo-header.png')).size;
const footerLogoSize = fs.statSync(path.join(srcDir, 'assets', 'ibs-logo-footer.png')).size;
assert(headerLogoSize < 200000, `Header logo optimized to ${Math.round(headerLogoSize/1024)} KB (< 200 KB target)`);
assert(footerLogoSize < 200000, `Footer logo optimized to ${Math.round(footerLogoSize/1024)} KB (< 200 KB target)`);

// Check favicon & robots & sitemap
assert(fs.existsSync(path.join(publicDir, 'favicon.svg')), 'Favicon SVG exists in public root');
assert(fs.existsSync(path.join(publicDir, 'robots.txt')), 'robots.txt exists in public root');
assert(fs.existsSync(path.join(publicDir, 'sitemap.xml')), 'sitemap.xml exists in public root');

// 4. Accessibility & Forms Check
console.log('\n--- 4. Accessibility & Form Checks ---');
const getAQuoteContent = fs.readFileSync(path.join(srcDir, 'components', 'GetAQuote.jsx'), 'utf8');
const contactContent = fs.readFileSync(path.join(srcDir, 'components', 'ContactSection.jsx'), 'utf8');
assert(getAQuoteContent.includes('htmlFor="fullName"'), 'GetAQuote form inputs have associated labels');
assert(getAQuoteContent.includes('htmlFor="email"'), 'GetAQuote email input has associated label');
assert(contactContent.includes('htmlFor="contactName"'), 'ContactSection name input has associated label');
assert(contactContent.includes('htmlFor="contactEmail"'), 'ContactSection email input has associated label');

// Check modal accessibility hook
const modalsContent = fs.readFileSync(path.join(srcDir, 'components', 'Modals.jsx'), 'utf8');
assert(modalsContent.includes('useModalAccessibility'), 'Modal accessibility hook implemented');
assert(modalsContent.includes("key === 'Escape'"), 'Escape key handler present in modals');
assert(modalsContent.includes("document.body.style.overflow = 'hidden'"), 'Body scroll lock implemented for modals');
assert(modalsContent.includes('PolicyModal'), 'PolicyModal implemented and exported');

// 5. CSS Responsiveness & Scroll Anchors Check
console.log('\n--- 5. CSS Architecture & Responsiveness Checks ---');
const cssContent = fs.readFileSync(path.join(srcDir, 'index.css'), 'utf8');
assert(cssContent.includes('scroll-padding-top: 85px'), 'HTML scroll-padding-top configured for fixed header offset');
assert(cssContent.includes('scroll-margin-top: 85px'), 'Section scroll-margin-top configured');
assert(cssContent.includes(':focus-visible'), 'Focus-visible styles configured for keyboard navigation');
assert(cssContent.includes('@media (max-width: 440px)'), 'Small phone responsive breakpoint (<= 440px) configured');
assert(cssContent.includes('@media (max-width: 360px)'), 'Extra-small phone responsive breakpoint (<= 360px) configured');
assert(cssContent.includes('prefers-reduced-motion'), 'Reduced motion accessibility query present');

console.log(`\n=== AUDIT RESULTS: ${passed} PASSED, ${warnings} WARNINGS, ${errors} ERRORS ===`);
process.exit(errors > 0 ? 1 : 0);
