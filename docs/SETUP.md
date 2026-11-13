# Local Development & Setup Guide — IBS

This guide walks through setting up, developing, testing, and verifying the **IBS – Innovative Business Solutions** web application on your local machine.

---

## 1. Prerequisites

Ensure your development environment meets the following minimum requirements:

- **Node.js:** `v18.0.0` or later (LTS version `v20.x` or `v22.x` is strongly recommended)
  - Verify with: `node -v`
- **npm:** `v9.0.0` or later (bundled with Node.js)
  - Verify with: `npm -v`
- **Git:** `v2.30.0` or later
  - Verify with: `git --version`
- **Operating System:** Windows, macOS, or Linux.

---

## 2. Installation Steps

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/language-no-bar.git
cd language-no-bar
```

### Step 2: Install Project Dependencies
Install the required production and development dependencies:
```bash
npm install
```

### Step 3: Start the Development Server
Launch the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

Output:
```text
  VITE v8.3.5  ready in 285 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and navigate to: **[http://localhost:5173/](http://localhost:5173/)**

---

## 3. Available npm Scripts

| Command | Action | Purpose |
| :--- | :--- | :--- |
| `npm run dev` | `vite` | Starts the local dev server on port `5173` with instant HMR. |
| `npm run build` | `vite build` | Compiles and optimizes assets into the `dist/` directory for production. |
| `npm run lint` | `oxlint` | Runs fast, static analysis with Oxlint to check code quality and syntax errors. |
| `npm run preview` | `vite preview` | Boots a local HTTP server serving the production `dist/` build. |

---

## 4. Environment Variables

This application is designed as a secure, client-side static site and **does not require external API secret keys** to run. 

If connecting third-party services (e.g., Google Analytics, CRM Webhooks, EmailJS), create a local `.env.local` file:

```env
# Optional Third-Party Client Keys (Prefix with VITE_)
# VITE_GA_TRACKING_ID=G-XXXXXXXXXX
# VITE_CONTACT_FORM_ENDPOINT=https://api.yourdomain.com/v1/inquiry
```

> **IMPORTANT:** Never commit `.env` or `.env.local` files containing secrets or private credentials to Git.

---

## 5. Recommended Editor Setup

For the best developer experience in **Visual Studio Code**:

1. **Recommended Extensions:**
   - **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
   - **Prettier - Code formatter** (`esbenp.prettier-vscode`)
   - **Tailwind / CSS IntelliSense** or standard CSS language tooling
2. **Settings (`.vscode/settings.json`):**
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "files.eol": "\n"
   }
   ```

---

## 6. Troubleshooting Common Issues

### Port Conflict (`Error: listen EADDRINUSE: address already in use :::5173`)
If port 5173 is already in use by another process, Vite will automatically try the next port (`5174`). You can also specify a custom port:
```bash
npm run dev -- --port 3000
```

### Clean Reinstall of Dependencies
If you encounter module resolution issues:
```bash
# Windows PowerShell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install

# macOS / Linux
rm -rf node_modules package-lock.json
npm install
```

