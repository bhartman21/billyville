# Website Builder Instructions

Complete end-to-end guide for creating a static website using Angular 21 with Tailwind CSS and deploying to GitHub Pages.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Tailwind CSS Integration](#tailwind-css-integration)
4. [Project Structure](#project-structure)
5. [Creating Components and Pages](#creating-components-and-pages)
6. [Routing Configuration](#routing-configuration)
7. [Theme System (Optional)](#theme-system-optional)
8. [Building the Project](#building-the-project)
9. [GitHub Repository Setup](#github-repository-setup)
10. [GitHub Pages Deployment](#github-pages-deployment)
11. [Custom Domain Setup (Optional)](#custom-domain-setup-optional)
12. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Software

| Software | Version | Installation |
|----------|---------|--------------|
| Node.js | 22.x or later | https://nodejs.org |
| npm | 10.x or later | Included with Node.js |
| Git | Latest | https://git-scm.com |
| Angular CLI | 21.x | `npm install -g @angular/cli` |

### Verify Installation

```bash
node --version    # Should show v22.x.x or higher
npm --version     # Should show 10.x.x or higher
git --version     # Should show git version x.x.x
ng version        # Should show Angular CLI 21.x.x
```

### Required Accounts

- GitHub account (https://github.com)

---

## Project Setup

### Step 1: Create New Angular Project

```bash
ng new YOUR_PROJECT_NAME --style=scss --routing=true --ssr=false
```

**Options explained:**
- `--style=scss` — Use SCSS for styling
- `--routing=true` — Include Angular Router
- `--ssr=false` — Disable server-side rendering (not needed for static hosting)

### Step 2: Navigate to Project Directory

```bash
cd YOUR_PROJECT_NAME
```

### Step 3: Verify Project Runs

```bash
ng serve
```

Open http://localhost:4200 in your browser to verify the default Angular page loads.

---

## Tailwind CSS Integration

### Step 1: Install Tailwind CSS and Dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
```

### Step 2: Initialize Tailwind Configuration

```bash
npx tailwindcss init
```

### Step 3: Configure Tailwind

Edit `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Add custom colors, fonts, etc. here
      colors: {
        // Example custom colors:
        // 'primary': '#C62828',
        // 'secondary': '#FFD700',
      },
    },
  },
  plugins: [],
}
```

### Step 4: Create PostCSS Configuration

Create `postcss.config.js` in the project root:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

### Step 5: Add Tailwind Directives

Replace the contents of `src/styles.scss` (or `src/styles.css`) with:

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add your global custom styles below */
```

### Step 6: Verify Tailwind Works

Add a Tailwind class to any component template and verify styling applies:

```html
<h1 class="text-3xl font-bold text-blue-600">Hello Tailwind!</h1>
```

---

## Project Structure

### Recommended Directory Structure

```
YOUR_PROJECT_NAME/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── navigation/
│   │   │   ├── footer/
│   │   │   └── ...
│   │   ├── pages/               # Page components (routed)
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   └── ...
│   │   ├── services/            # Application services
│   │   ├── app.ts               # Root component
│   │   ├── app.html             # Root template
│   │   ├── app.scss             # Root styles
│   │   ├── app.routes.ts        # Route configuration
│   │   └── app.config.ts        # Application config
│   ├── index.html               # Main HTML document
│   ├── main.ts                  # Bootstrap file
│   └── styles.scss              # Global styles
├── public/                      # Static assets (favicon, images)
├── angular.json                 # Angular CLI configuration
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

---

## Creating Components and Pages

### Creating a Reusable Component

```bash
ng generate component components/COMPONENT_NAME
```

**Example:** Create a navigation component:

```bash
ng generate component components/navigation
```

### Creating a Page Component

```bash
ng generate component pages/PAGE_NAME
```

**Example:** Create an about page:

```bash
ng generate component pages/about
```

### Component File Structure (Angular 21 Standalone)

Each component generates three files:

```
component-name/
├── component-name.ts      # Component logic
├── component-name.html    # Template
└── component-name.scss    # Styles
```

**Example standalone component (`navigation.ts`):**

```typescript
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class NavigationComponent {
  // Component logic here
}
```

---

## Routing Configuration

### Hash-Based Routing (Recommended for GitHub Pages)

Edit `src/app/app.config.ts`:

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation())
  ]
};
```

> **Why hash routing?** GitHub Pages serves static files and doesn't support URL rewriting. Hash-based URLs (e.g., `/#/about`) work without server configuration.

### Define Routes

Edit `src/app/app.routes.ts`:

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // Add more routes as needed
  { path: '**', redirectTo: '' }  // Catch-all redirect
];
```

### Add Router Outlet to Root Component

Edit `src/app/app.html`:

```html
<app-navigation></app-navigation>
<main>
  <router-outlet></router-outlet>
</main>
<app-footer></app-footer>
```

### Navigation Links

Use `routerLink` for internal navigation:

```html
<nav>
  <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
  <a routerLink="/about" routerLinkActive="active">About</a>
</nav>
```

---

## Theme System (Optional)

### Create Theme Service

```bash
ng generate service services/theme
```

**Example theme service (`theme.service.ts`):**

```typescript
import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'preferred-theme';
  currentTheme = signal<Theme>('light');

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY) as Theme;
    if (saved) {
      this.setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setTheme('dark');
    }
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleTheme(): void {
    this.setTheme(this.currentTheme() === 'light' ? 'dark' : 'light');
  }
}
```

### Configure Tailwind for Dark Mode

Edit `tailwind.config.js`:

```javascript
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  // ... rest of config
}
```

### Use Dark Mode Classes

```html
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content adapts to theme
</div>
```

---

## Building the Project

### Development Build

```bash
ng serve
```

- Runs at http://localhost:4200
- Hot reload enabled
- Source maps included

### Production Build

```bash
ng build
```

- Output: `dist/YOUR_PROJECT_NAME/browser/`
- Minified and optimized
- Ready for deployment

### Verify Build Locally

```bash
npx http-server dist/YOUR_PROJECT_NAME/browser -p 8080
```

Open http://localhost:8080 to test the production build.

---

## GitHub Repository Setup

### Step 1: Initialize Git Repository

```bash
git init
```

### Step 2: Verify .gitignore

Ensure these entries exist in `.gitignore`:

```
/node_modules
/dist
/.angular/cache
```

### Step 3: Initial Commit

```bash
git add .
git commit -m "Initial commit: YOUR_PROJECT_NAME website"
```

### Step 4: Create GitHub Repository

**Option A: Using GitHub CLI**

```bash
gh repo create YOUR_PROJECT_NAME --public --source=. --remote=origin --push
```

**Option B: Manual Setup**

1. Go to https://github.com/new
2. Create a new repository (do NOT initialize with README)
3. Copy the repository URL
4. Run:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_PROJECT_NAME.git
git push -u origin main
```

---

## GitHub Pages Deployment

### Step 1: Configure baseHref

Edit `angular.json` and add `baseHref` to the production configuration:

```json
{
  "projects": {
    "YOUR_PROJECT_NAME": {
      "architect": {
        "build": {
          "configurations": {
            "production": {
              "outputHashing": "all",
              "baseHref": "/YOUR_PROJECT_NAME/"
            }
          }
        }
      }
    }
  }
}
```

> **Note:** If using a custom domain, set `baseHref` to `"/"` instead.

### Step 2: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist/YOUR_PROJECT_NAME/browser

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> **Important:** Replace `YOUR_PROJECT_NAME` with your actual project name in the artifact path.

### Step 3: Commit and Push

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. Select **Static HTML** when prompted
5. Save

### Step 5: Verify Deployment

1. Go to **Actions** tab to monitor the workflow
2. Once complete, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_PROJECT_NAME/
   ```

---

## Custom Domain Setup (Optional)

### Prerequisites

- A domain you own (e.g., `example.com`)
- Access to your domain's DNS settings

### Step 1: Update baseHref

Edit `angular.json` and change `baseHref` to `"/"`:

```json
"baseHref": "/"
```

### Step 2: Create CNAME File

Create `public/CNAME` (no file extension):

```
example.com
```

Or for a subdomain:

```
www.example.com
```

### Step 3: Configure DNS

**For apex domain (example.com):**

Add these A records pointing to GitHub's servers:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For subdomain (www.example.com):**

Add a CNAME record:

```
www -> YOUR_USERNAME.github.io
```

### Step 4: Configure GitHub Pages

1. Go to **Settings** > **Pages**
2. Under **Custom domain**, enter your domain
3. Check **Enforce HTTPS** (after DNS propagates)

### Step 5: Commit and Push

```bash
git add .
git commit -m "Add custom domain configuration"
git push
```

> **Note:** DNS propagation can take up to 48 hours. The GitHub Pages URL will redirect to your custom domain once configured.

---

## Troubleshooting

### Common Issues

#### Build Fails: "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
```

#### Styles Not Loading on GitHub Pages

- Verify `baseHref` is set correctly in `angular.json`
- Check that the artifact path in `deploy.yml` matches your build output

#### 404 Errors on Page Refresh

- Ensure you're using hash-based routing (`withHashLocation()`)
- Verify the catch-all route (`**`) is configured

#### Tailwind Classes Not Working

1. Verify `tailwind.config.js` has correct content paths
2. Check that Tailwind directives are in `styles.scss`
3. Restart the dev server after config changes

#### GitHub Actions Workflow Fails

- Check the Actions tab for error details
- Verify Node.js version matches your local environment
- Ensure `package-lock.json` is committed

### Useful Commands

```bash
# Clear Angular cache
ng cache clean

# Rebuild node_modules
rm -rf node_modules && npm install

# Check for outdated packages
npm outdated

# Update Angular CLI
ng update @angular/cli @angular/core
```

---

## Quick Reference

### Development Workflow

```bash
ng serve                    # Start dev server
ng generate component NAME  # Create component
ng build                    # Production build
ng test                     # Run tests
```

### Git Workflow

```bash
git add .
git commit -m "Description of changes"
git push
```

### File Locations

| Purpose | Location |
|---------|----------|
| Global styles | `src/styles.scss` |
| Route config | `src/app/app.routes.ts` |
| App config | `src/app/app.config.ts` |
| Build config | `angular.json` |
| Tailwind config | `tailwind.config.js` |
| CI/CD workflow | `.github/workflows/deploy.yml` |
| Static assets | `public/` |

---

## Version Information

This guide was created with:

- Angular CLI: 21.0.x
- Node.js: 22.x
- Tailwind CSS: 3.4.x
- GitHub Actions: v4/v5

Last updated: January 2026
