# Production Deployment & Hosting Guide — IBS

This guide details how to build, test, and deploy the **IBS – Innovative Business Solutions** website to production hosting environments.

---

## 1. Production Build Process

To compile the application for production:

```bash
npm run build
```

### What Vite Does During Build:
1. **Transpiles JSX and modern JavaScript** using Rollup/Rolldown.
2. **Minifies JavaScript & CSS:** Strips comments, optimizes class selectors, tree-shakes unreferenced Lucide React icons.
3. **Hashes Static Assets:** Generates cache-busting content hashes for CSS, JS, and imported images (e.g., `ibs-logo-header-v0zM9HT6.png`).
4. **Emits Production Bundle:** Places all production files in the `dist/` directory.

### Build Artifacts Output Structure:
```text
dist/
├── index.html                            # Minified HTML document with JSON-LD
├── favicon.svg                           # Root favicon
├── ibs-logo.png                          # Canonical Open Graph image
├── ibs-logo-footer.png                   # Footer logo
├── robots.txt                            # Search engine crawler instructions
├── sitemap.xml                           # Canonical XML sitemap
└── assets/
    ├── ibs-logo-header-[hash].png        # Optimized header logo
    ├── ibs-logo-footer-[hash].png        # Optimized footer logo
    ├── index-[hash].css                  # Minified bundle CSS (~56 kB / 10 kB gzipped)
    └── index-[hash].js                   # Minified bundle JS (~355 kB / 103 kB gzipped)
```

---

## 2. Local Production Preview

Always verify the production build locally before pushing or triggering a deployment:

```bash
npm run preview
```

Navigate to the provided preview URL (usually `http://localhost:4173/`) to inspect:
- Fast initial page load
- Responsive layout across viewports
- Interactive modals and quote generation
- Google Maps and iframe embeds
- Asset resolution without 404 errors

---

## 3. Hosting Platform Configurations

Because IBS is a static single-page application, it can be hosted on any modern edge CDN or web server:

### 3.1 Vercel (Recommended)
1. Push repository to GitHub.
2. Import project into Vercel Dashboard.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Add `vercel.json` if custom SPA routing rewrites are needed:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

### 3.2 Netlify
Create a `netlify.toml` in the project root (optional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3.3 Cloudflare Pages
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** Set environment variable `NODE_VERSION=20.10.0` in Settings > Environment Variables.

### 3.4 Apache / Nginx (Self-Hosted Virtual Private Server)
#### Nginx Configuration Snippet:
```nginx
server {
    listen 80;
    server_name innovativebusiness.in www.innovativebusiness.in;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name innovativebusiness.in www.innovativebusiness.in;

    ssl_certificate /etc/letsencrypt/live/innovativebusiness.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/innovativebusiness.in/privkey.pem;

    root /var/www/ibs/dist;
    index index.html;

    # Gzip / Brotli compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;

    # Cache static hashed assets indefinitely (1 year)
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 4. Production Verification Checklist

Perform these post-deployment checks:

- [ ] **HTTPS Enforced:** SSL certificate active and HTTP redirects cleanly to HTTPS.
- [ ] **Core Pages & Anchors:** `#home`, `#services`, `#languages`, `#about`, `#quality`, `#quote`, `#contact`, `#blog` scroll smoothly to exact offsets.
- [ ] **Header & Footer Logos:** Header logo appears crisp in top navbar; footer badge displays clearly on dark navy background.
- [ ] **Interactive Modals:** Clicking "Explore Service", "Read Full Article", or industry vertical cards launches modals without backdrop jumping.
- [ ] **Quote Form Interactivity:** Service prefill passes correctly from Hero and Services into `<GetAQuote />`.
- [ ] **SEO & Structured Data:** Test URL in [Google Rich Results Test](https://search.google.com/test/rich-results) to verify `LocalBusiness` and `OfferCatalog` JSON-LD schemas.
- [ ] **Robots & Sitemap:** Verify `https://innovativebusiness.in/robots.txt` and `https://innovativebusiness.in/sitemap.xml` return HTTP 200 OK.

