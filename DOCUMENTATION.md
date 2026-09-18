# Mohammad Haroon Portfolio — Technical Documentation

**Live site:** [https://devowl.me](https://devowl.me)  
**Repository:** Personal portfolio SPA for Mohammad Haroon
**Package name:** `portfoliio` (v0.0.0)

---

## 1. Project Overview

### What this project does

This is a **single-page application (SPA)** that serves as the professional online presence for **Mohammad Haroon**, a Full Stack Web Developer based in Bahawalpur, Pakistan. The site showcases skills, work experience, research publications, and **seven detailed project case studies** with technical breakdowns.

### Core problem it solves

Freelance developers and job seekers need a fast, SEO-friendly, visually polished portfolio that:

- Presents credentials and project depth to recruiters and clients
- Ranks well in search engines for name-based queries (e.g. "Mohammad Haroon portfolio")
- Converts visitors into contacts via a working contact form

This project solves that by combining a performant React frontend, lazy-loaded routes, structured data (JSON-LD), and a production Vercel deployment.

### Target users and use cases

| Audience | Use case |
|---|---|
| Recruiters / hiring managers | Review skills, experience, and project depth |
| Potential freelance clients | Browse case studies and submit inquiries |
| Search engines / AI crawlers | Index Person, WebSite, CollectionPage, and SoftwareApplication schemas |
| Mohammad Haroon (owner) | Maintain a single deployable artifact for professional branding |

---

## 2. Tech Stack

### Languages and frameworks

| Technology | Version | Role |
|---|---|---|
| **JavaScript (JSX)** | ES2020+ | Primary application language |
| **TypeScript** | ^6.0.3 | Used for `glitchy-404-1.tsx` only; `tsconfig.json` enables `@/*` path alias |
| **React** | ^19.2.0 | UI library |
| **React Router DOM** | ^7.10.1 | Client-side routing |
| **Vite (rolldown-vite)** | 7.2.5 | Dev server and production bundler |
| **Tailwind CSS** | ^3.4.17 | Utility-first styling with `darkMode: 'class'` |
| **PostCSS + Autoprefixer** | — | CSS processing pipeline |

### Libraries

| Library | Purpose | Notes |
|---|---|---|
| **framer-motion** | Animations (skills marquee, publications, custom cursor, 404 glitch) | Used in `Skills.jsx`, `Publications.jsx`, `CustomCursor.jsx`, `glitchy-404-1.tsx` |
| **react-scroll** | Smooth in-page section scrolling on home | Used in `Navbar.jsx`, `Hero.jsx`, `Footer.jsx` |
| **lucide-react** | Icons on publications section | `ScrollText`, `ExternalLink`, `Download` |
| **@vercel/analytics** | Page view analytics | Mounted globally in `App.jsx` |
| **@vercel/speed-insights** | Web Vitals monitoring | Mounted globally in `App.jsx` |
| **Web3Forms** (via `fetch`) | Contact form email delivery | `Contact.jsx` POSTs to `https://api.web3forms.com/submit` |

### Dev tools

| Tool | Purpose |
|---|---|
| **ESLint 9** (flat config) | Linting with `react-hooks` and `react-refresh` plugins |
| **Google Tag (gtag.js)** | Analytics ID `G-XYFG6CLB9R` in `index.html` |

### Unused / legacy dependencies (present in `package.json` but not imported)

| Package | Status |
|---|---|
| `@emailjs/browser` | Listed in `package.json`; `index.html` preconnects to `api.emailjs.com`, but no source file imports it |
| `react-helmet-async` | Listed in `package.json` and README; `SEOHead.jsx` manipulates the DOM directly instead |

### Why major technologies were chosen (inferred from code)

| Choice | Rationale visible in codebase |
|---|---|
| **React 19 + Vite** | Fast HMR, modern ES2020 build target, code splitting via `React.lazy` |
| **Tailwind + semantic color tokens** | Consistent light/dark theming via `primary`, `ink`, `bg`, `dark*` palettes in `tailwind.config.cjs` |
| **React Router 7** | Multi-page feel with SPA performance; hash and path scroll restoration in `App.jsx` |
| **Web3Forms** | Serverless contact form without a custom backend |
| **Vercel** | SPA rewrites, long-cache headers, native Analytics/Speed Insights integration |

---

## 3. Architecture & System Design

### High-level architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser (Client)                        │
├─────────────────────────────────────────────────────────────┤
│  index.html (static SEO, gtag, JSON-LD Person/WebSite)      │
│         ↓                                                   │
│  main.jsx → ThemeProvider → App.jsx (BrowserRouter)         │
│         ↓                                                   │
│  ┌─────────────┐  ┌──────────────────────────────────────┐  │
│  │ Global UI   │  │ Routes (lazy-loaded via Suspense)   │  │
│  │ - Navbar*   │  │ / → Home (sections)                 │  │
│  │ - CustomCursor│ │ /muhammad-haroon → About            │  │
│  │ - Analytics │  │ /projects → AllProjects             │  │
│  │ - SpeedInsights│ /project/* → 7 case studies         │  │
│  └─────────────┘  │ * → NotFound                        │  │
│                   └──────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
         │ Contact form POST
         ▼
┌─────────────────────┐     ┌──────────────────────┐
│ api.web3forms.com   │     │ Google Analytics /   │
│ (external)          │     │ Vercel Analytics     │
└─────────────────────┘     └──────────────────────┘

* Navbar only on `/` route in App.jsx; other pages import Navbar themselves
```

### Architectural pattern

- **Frontend-only SPA** — no custom backend, database, or API server in this repo
- **Component-based architecture** with page-level composition
- **Route-based code splitting** — all pages except global shell are `React.lazy()` loaded
- **Section-based home page** — single route (`/`) composes multiple vertically stacked sections

### Module interaction

```
ThemeContext (localStorage + <html class="dark|light">)
    ↓ consumed by
Navbar, NotFound, all themed components

SEOHead (useEffect → document.head mutations)
    ↓ used by
Home, About, AllProjects, each project page, NotFound

Projects.jsx (shared data source)
    ↓ rendered by
Home (latest 6) and AllProjects (all 7)
```

### Data flow: user input to output

**Navigation flow**

1. User clicks a link → React Router updates `pathname`
2. `ScrollToTop` in `App.jsx` scrolls to top or retries hash anchor scroll (80px nav offset, up to 30 attempts)
3. Lazy chunk loads → `SectionLoader` spinner shown during `Suspense`

**Contact form flow**

1. User fills `name`, `email`, `subject`, `message` in `Contact.jsx`
2. Client-side validation runs on blur and submit
3. `POST https://api.web3forms.com/submit` with JSON body including `VITE_WEB3FORMS_ACCESS_KEY`
4. On `result.success`, form resets and success banner shows for 5 seconds

**Theme toggle flow**

1. User clicks theme button in `Navbar`
2. `ThemeContext.toggleTheme()` flips `light` ↔ `dark`
3. `useEffect` updates `document.documentElement` class and `localStorage.theme`

---

## 4. Project Structure

```
Portfolio/
├── index.html                    # Static meta tags, gtag, Person/WebSite JSON-LD, SEO fallback H1
├── package.json                  # Dependencies and npm scripts
├── package-lock.json
├── vite.config.js                # React plugin, @ alias, ES2020 build, chunk naming
├── tailwind.config.cjs           # Extended color palette, animations, darkMode: class
├── postcss.config.cjs            # tailwindcss + autoprefixer
├── tsconfig.json                 # Path alias @/* → src/*, strict mode for TS files
├── eslint.config.js              # ESLint flat config for JS/JSX
├── vercel.json                   # SPA rewrites, cache headers, security headers (CSP)
├── README.md                     # Quick-start guide (partially outdated — see §13)
├── DOCUMENTATION.md              # This file
├── .gitignore                    # Ignores node_modules, dist, .env*
│
├── public/
│   ├── owl.svg                   # Favicon and PWA icon
│   ├── profile-photo.webp        # OG image default
│   ├── maritime-link-cover.svg   # MaritimeLink cover asset (public)
│   ├── manifest.json             # PWA manifest (standalone, theme #609966)
│   ├── robots.txt                # Allow all; points to sitemap
│   ├── sitemap.xml               # 9 URLs (missing /muhammad-haroon)
│   └── vite.svg                  # Default Vite asset (unused in app)
│
└── src/
    ├── main.jsx                  # React root; ThemeProvider wrapper; removes SEO fallback
    ├── App.jsx                   # Router, lazy routes, ScrollToTop, Analytics, CustomCursor
    ├── App.css                   # Legacy/unused (not imported)
    ├── index.css                 # Tailwind directives, CSS variables, custom cursor: none
    │
    ├── context/
    │   └── ThemeContext.jsx      # Light/dark theme with localStorage + system preference
    │
    ├── components/
    │   ├── Navbar.jsx            # Fixed nav, mobile menu, theme toggle, scroll/route links
    │   ├── Hero.jsx              # Landing hero with CTAs and social links
    │   ├── Skills.jsx            # Framer Motion infinite skills marquee
    │   ├── ExperienceTimeline.jsx # Alternating timeline (used on home)
    │   ├── Experience.jsx        # Card-based experience (UNUSED — not imported)
    │   ├── Projects.jsx          # Project grid with category filters; shared data array
    │   ├── Publications.jsx      # Research publication card with DOI links
    │   ├── Contact.jsx           # Web3Forms contact form + contact info
    │   ├── Footer.jsx            # Quick links, newsletter (client-only mock), social
    │   ├── SEOHead.jsx           # Dynamic meta tags and JSON-LD injection
    │   ├── CustomCursor.jsx      # Framer Motion custom pointer (hides native cursor)
    │   ├── ScrollToTop.jsx       # Floating scroll-to-top button (home only)
    │   ├── SectionLoader.jsx     # Spinner for Suspense fallbacks
    │   ├── ProjectPageNav.jsx    # Back/All Projects/Contact/Top nav on case studies
    │   └── ui/
    │       └── glitchy-404-1.tsx # Animated glitch "404" SVG component (TypeScript)
    │
    ├── pages/
    │   ├── Home.jsx              # Composes all home sections + lazy loads heavy parts
    │   ├── About.jsx             # Dedicated about page at /muhammad-haroon
    │   ├── AllProjects.jsx       # Full project grid + publications
    │   ├── NotFound.jsx          # 404 with Glitchy404 component
    │   └── projects/
    │       ├── MeetingAI.jsx     # Case study: meeting automation platform
    │       ├── Syeen.jsx         # Case study: WordPress talent marketplace
    │       ├── EcommerceProject.jsx  # Case study: GearNix e-commerce
    │       ├── Foncentra.jsx     # Case study: e-learning platform
    │       ├── ApertureFutures.jsx   # Case study: UNSC RAG intelligence
    │       ├── WordyApp.jsx      # Case study: language learning app
    │       └── MaritimeLink.jsx  # Case study: maritime workforce SPA
    │
    ├── assets/
    │   ├── about.jpeg            # About section photo
    │   ├── meeting-ai.webp       # Project thumbnails
    │   ├── Syeen.webp
    │   ├── EcommerceProject.webp
    │   ├── foncentra.webp
    │   ├── bluelines-lifeline-rag.webp
    │   ├── wordy.webp
    │   ├── maritimelink.jpeg
    │   ├── owl.svg
    │   └── react.svg             # Unused Vite default
    │
    └── styles/
        └── globals.css           # Unused (not imported; index.css is active)
```

---

## 5. Features (Detailed)

### 5.1 Home page (`/`)

| Aspect | Detail |
|---|---|
| **What** | Single-scroll landing page with hero, about, skills, experience, projects, publications, contact, footer |
| **Files** | `App.jsx` (route), `Home.jsx`, section components |
| **Internal** | `Hero` loads eagerly; `Skills`, `ExperienceTimeline`, `Projects`, `Publications`, `Contact`, `Footer` are `React.lazy()` with `Suspense` + `SectionLoader` |
| **UX** | Navbar fixed on home only (via `App.jsx`); smooth scroll to `#about`, `#skills`, etc.; floating scroll-to-top after 300px scroll |

### 5.2 Hero section

| Aspect | Detail |
|---|---|
| **What** | Animated intro with name, title, location, phone, CTAs |
| **Files** | `Hero.jsx` |
| **Internal** | `requestAnimationFrame` triggers staggered fade-in; blob background via Tailwind `animate-blob` |
| **UX** | "View My Work" → `/projects`; "Get In Touch" → `#contact` scroll |

### 5.3 About section (inline on home)

| Aspect | Detail |
|---|---|
| **What** | Bio, photo, four achievement cards, CTA |
| **Files** | Inline in `Home.jsx`, image from `assets/about.jpeg` |
| **UX** | "Let's Work Together" scrolls to `#contact` |

### 5.4 Dedicated About page (`/muhammad-haroon`)

| Aspect | Detail |
|---|---|
| **What** | SEO-focused standalone about page with Person schema |
| **Files** | `About.jsx`; `/about` redirects here via `Navigate` in `App.jsx` |
| **Internal** | `personSchema` JSON-LD, breadcrumbs, profile `ogType` |
| **UX** | Structured facts grid (location, role, education, focus) + project/contact CTAs |

### 5.5 Skills marquee

| Aspect | Detail |
|---|---|
| **What** | Horizontally scrolling skill cards (21 technologies) |
| **Files** | `Skills.jsx` |
| **Internal** | Framer Motion `animate.x` loops over tripled skill array; icons from jsDelivr CDN and external URLs |
| **UX** | Infinite scroll with edge fade overlays; hover scale on cards |

### 5.6 Experience timeline

| Aspect | Detail |
|---|---|
| **What** | Three professional roles in alternating timeline layout |
| **Files** | `ExperienceTimeline.jsx` |
| **Internal** | `IntersectionObserver` reveals cards; ML Bench role marked `in-progress` with animated badge |
| **UX** | Desktop: center timeline; mobile: left-aligned dots |

### 5.7 Featured projects grid

| Aspect | Detail |
|---|---|
| **What** | Filterable project cards linking to case studies |
| **Files** | `Projects.jsx` |
| **Internal** | Hardcoded `projects` array (7 entries); on home shows latest 6 (`reverse().slice(0,6)`); on `/projects` shows all 7; filters: All, AI & ML, Web Development, Full-Stack |
| **UX** | Category filter pills; hover lift + image zoom; "View All Projects" CTA on home |

### 5.8 All projects page (`/projects`)

| Aspect | Detail |
|---|---|
| **What** | Full portfolio grid + publications section |
| **Files** | `AllProjects.jsx`, reuses `Projects.jsx`, `Publications.jsx` |
| **Internal** | `CollectionPage` + `ItemList` JSON-LD with all 7 project URLs |
| **UX** | Breadcrumb-style nav links to Home, About, Contact |

### 5.9 Research & publications

| Aspect | Detail |
|---|---|
| **What** | Single published paper card with DOI and PDF download |
| **Files** | `Publications.jsx` |
| **Internal** | Framer Motion entrance animations; links to `doi.org` and `academia.edu.pk` |
| **UX** | Shown on home and `/projects`; navbar "Research" scrolls to `#publications` |

### 5.10 Contact form

| Aspect | Detail |
|---|---|
| **What** | Validated form + contact info + social links + availability badge |
| **Files** | `Contact.jsx` |
| **Internal** | Field validation (name ≥2 chars, email regex, message ≥10 chars); Web3Forms API |
| **UX** | Inline errors on blur; loading spinner on submit; success message auto-dismisses after 5s |

### 5.11 Dark / light theme

| Aspect | Detail |
|---|---|
| **What** | Global theme toggle persisted across sessions |
| **Files** | `ThemeContext.jsx`, `Navbar.jsx`, `tailwind.config.cjs`, `index.css` |
| **Internal** | Priority: `localStorage.theme` → `prefers-color-scheme` → `light`; applies `dark`/`light` class on `<html>` |
| **UX** | Sun/moon icon in navbar (desktop + mobile) |

### 5.12 Custom cursor

| Aspect | Detail |
|---|---|
| **What** | Animated olive-green cursor with trail effects |
| **Files** | `CustomCursor.jsx`, `index.css` (`cursor: none`) |
| **Internal** | Framer Motion spring tracking; enlarges on links/buttons |
| **UX** | Global effect on all pages; native cursor hidden |

### 5.13 SEO system

| Aspect | Detail |
|---|---|
| **What** | Per-page meta tags, Open Graph, Twitter cards, canonical URLs, JSON-LD |
| **Files** | `SEOHead.jsx`, `index.html`, `public/sitemap.xml` |
| **Internal** | `useEffect` updates/creates meta tags; injects/removes `script[data-seo-structured-data]`; `noIndex` removes canonical |
| **UX** | Invisible to users; improves search/social previews |

### 5.14 Project case studies (×7)

Each case study page follows the same pattern:

| Section | Content |
|---|---|
| Hero | Category badge, title, summary |
| Featured image | Project screenshot from `src/assets/` |
| Overview | Long-form description |
| Features | Icon grid from `featureList` array |
| Challenges | Problem statements |
| Architecture | System design highlights |
| Technical challenges | Problem/solution pairs |
| Metrics / results | Quantified outcomes (where applicable) |
| Future enhancements | Roadmap items |
| Navigation | `ProjectPageNav` |

| Route | File | Category |
|---|---|---|
| `/project/meet-ai` | `MeetingAI.jsx` | Full-Stack Development |
| `/project/syeen` | `Syeen.jsx` | Web Development |
| `/project/ecommerce` | `EcommerceProject.jsx` | Full-Stack Development |
| `/project/foncentra` | `Foncentra.jsx` | Web Development |
| `/project/aperture-futures` | `ApertureFutures.jsx` | AI & Machine Learning |
| `/project/wordy-app` | `WordyApp.jsx` | Web Development |
| `/project/maritime-link` | `MaritimeLink.jsx` | Full-Stack Development |

Each exports `SoftwareApplication` JSON-LD via `SEOHead`.

### 5.15 404 page

| Aspect | Detail |
|---|---|
| **What** | Glitch-animated 404 with recovery links |
| **Files** | `NotFound.jsx`, `ui/glitchy-404-1.tsx` |
| **Internal** | `noIndex` SEO; glitch color adapts to theme |
| **UX** | Links to home, projects, contact |

### 5.16 Analytics

| Aspect | Detail |
|---|---|
| **What** | Traffic and performance monitoring |
| **Files** | `App.jsx`, `index.html` |
| **Services** | Google Analytics (`G-XYFG6CLB9R`), Vercel Analytics, Vercel Speed Insights |

### 5.17 Footer newsletter (mock)

| Aspect | Detail |
|---|---|
| **What** | Email subscribe form |
| **Files** | `Footer.jsx` |
| **Internal** | Client-side email regex only; **no API call** — shows success/error UI locally |
| **UX** | Appears to subscribe but does not persist or send anywhere |

---

## 6. API Reference

This project has **no backend API**. The only external HTTP integration from the client:

### Web3Forms — Contact submission

| Field | Value |
|---|---|
| **Method** | `POST` |
| **URL** | `https://api.web3forms.com/submit` |
| **Auth** | `access_key` in request body (from `VITE_WEB3FORMS_ACCESS_KEY`) |
| **Headers** | `Content-Type: application/json`, `Accept: application/json` |

**Request body:**

```json
{
  "access_key": "<VITE_WEB3FORMS_ACCESS_KEY>",
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Response (handled in `Contact.jsx`):**

| Condition | Client behavior |
|---|---|
| `result.success === true` | Reset form, show success banner |
| `result.success !== true` | Log error, show error state |
| Network failure | `catch` block, show error state |

**Authentication:** None on the portfolio side beyond the Web3Forms access key embedded at build time.

---

## 7. Database / Data Models

**Not applicable.** This is a static frontend with all content defined as **in-component JavaScript arrays and constants**. There is no database, ORM, or persistent server-side storage in this repository.

### In-memory data structures (content models)

**Project card** (`Projects.jsx`):

```javascript
{
  id: number,
  title: string,
  description: string,
  image: string,        // imported asset URL
  category: string,     // 'AI & Machine Learning' | 'Web Development' | 'Full-Stack Development'
  technologies: string[],
  link: string          // route path
}
```

**Experience entry** (`ExperienceTimeline.jsx`):

```javascript
{
  title: string,
  company: string,
  duration: string,
  durationDetail?: string,
  location: string,
  status?: 'in-progress',
  description: string,
  responsibilities: string[],
  technologies: string[],
  achievements: string[]
}
```

**Case study feature** (project pages):

```javascript
{
  title: string,
  description: string,
  icon: string   // SVG path d attribute
}
```

---

## 8. Authentication & Authorization

**Not applicable.** The portfolio is fully public. There are:

- No login/signup flows
- No protected routes
- No user roles or session management
- No JWT or cookie-based auth

The only credential is the **Web3Forms access key**, which is a third-party form API key (not user authentication).

---

## 9. State Management & Data Flow

### State management approach

| Mechanism | Scope | Implementation |
|---|---|---|
| **React Context** | Global theme | `ThemeContext` — `theme`, `toggleTheme` |
| **Local `useState`** | Per-component UI | Form fields, mobile menu, scroll visibility, animations, filters |
| **No Redux/Zustand** | — | Not used |

### Key data flows

```
ThemeProvider
  theme (light|dark) ──→ Navbar, NotFound (glitch color)
  toggleTheme()    ←── Navbar button

Contact form
  formData ──→ validateField() ──→ errors/touched
           ──→ handleSubmit() ──→ fetch(Web3Forms) ──→ submitStatus

Projects filter
  activeFilter state ──→ filteredProjects derived array ──→ grid render

IntersectionObserver pattern (Contact, Projects, ExperienceTimeline, Hero)
  element visible ──→ isVisible / visibleCards ──→ CSS transition classes
```

### Component interaction on home page

```
Home
├── SEOHead (side effect: document head)
├── Hero (eager)
├── About section (inline JSX)
├── Suspense → Skills
├── Suspense → ExperienceTimeline
├── Suspense → Projects (reads location.pathname)
├── Suspense → Publications
├── Suspense → Contact
├── Suspense → Footer
└── ScrollToTop (scroll listener)
```

`Navbar` is rendered by `App.jsx` for `/` only; other pages import it themselves.

---

## 10. Environment Variables & Configuration

### Required environment variables

| Variable | Required | Description | Used in |
|---|---|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | **Yes** (for contact form) | Web3Forms API access key from [web3forms.com](https://web3forms.com) | `Contact.jsx` via `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY` |

> Vite exposes only variables prefixed with `VITE_` to client code.

### Configuration files

| File | Purpose |
|---|---|
| `vite.config.js` | `@` → `./src` alias; `target: es2020`; hashed chunk/asset filenames |
| `tailwind.config.cjs` | Content paths, extended palette, custom keyframes |
| `vercel.json` | SPA rewrite to `index.html`; 1-year cache on static assets; CSP and security headers |
| `tsconfig.json` | `@/*` path mapping for TypeScript imports |

### Hardcoded configuration (not env vars)

| Item | Location | Value |
|---|---|---|
| Google Analytics ID | `index.html` | `G-XYFG6CLB9R` |
| Canonical domain | SEO components | `https://devowl.me` |
| Contact email | Multiple components | `devowl14@gmail.com` |
| Phone | Multiple components | `+92 342 8979314` |

### Missing `.env.example`

`README.md` references `cp .env.example .env`, but **no `.env.example` file exists** in the repository.

---

## 11. Installation & Local Setup

### Prerequisites

| Requirement | Version |
|---|---|
| Node.js | 18+ (README); ES2020 build target |
| npm | 9+ (README) |

### Step-by-step

```bash
# 1. Clone
git clone https://github.com/ImMohammadHaroon/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Create environment file
# Create .env in project root (no .env.example shipped):
echo VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here > .env

# 4. Start development server
npm run dev
# → http://localhost:5173 (Vite default)
```

### Available scripts

| Command | Action |
|---|---|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run lint` | ESLint on all JS/JSX files |

### Build output structure

Vite emits hashed files per `vite.config.js`:

- `js/[name]-[hash].js` — entry chunks
- `chunks/[name]-[hash].js` — lazy route chunks
- `assets/[name]-[hash][ext]` — images and small inlined assets

---

## 12. Deployment

### Current deployment

Deployed on **Vercel** at [https://devowl.me](https://devowl.me).

### `vercel.json` behavior

| Setting | Effect |
|---|---|
| `rewrites` | All paths → `/index.html` (SPA client routing) |
| `Cache-Control` | `public, max-age=31536000, immutable` on `/assets/*`, `/chunks/*`, `/js/*`, images, fonts, CSS |
| Security headers | `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, CSP allowing gtag and Vercel scripts |

### Deployment steps (fork)

1. Push repository to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variable `VITE_WEB3FORMS_ACCESS_KEY` in project settings
4. Deploy — Vercel auto-detects Vite; build command `npm run build`, output `dist`

### Platform recommendations

| Platform | Suitability | Notes |
|---|---|---|
| **Vercel** | Recommended | Already configured; Analytics native |
| **Netlify / Cloudflare Pages** | Good | Requires equivalent SPA redirect rules |
| **Docker + nginx** | Possible | Serve `dist/` with `try_files $uri /index.html` |
| **Railway / Render** | Overkill | No server-side logic needed |

---

## 13. Known Issues / Limitations

| Issue | Details |
|---|---|
| **README drift** | README says 6 case studies; codebase has **7** (MaritimeLink added). Folder structure lists `sections/` but components live in `components/` |
| **No `.env.example`** | README references copying `.env.example` which does not exist |
| **Unused dependencies** | `@emailjs/browser` and `react-helmet-async` add bundle/install weight without use |
| **Unused files** | `Experience.jsx`, `App.css`, `styles/globals.css`, `assets/react.svg` are not imported |
| **Newsletter is non-functional** | `Footer.jsx` subscribe form only validates email client-side; no backend integration |
| **Custom cursor accessibility** | `index.css` sets `cursor: none` globally — problematic for touch devices and users who rely on default cursor |
| **Sitemap incomplete** | `public/sitemap.xml` omits `/muhammad-haroon` (About page) |
| **Duplicate ScrollToTop logic** | `App.jsx` has inline `ScrollToTop` for route/hash scroll; `components/ScrollToTop.jsx` is a floating button used only on Home |
| **Contact form without env key** | If `VITE_WEB3FORMS_ACCESS_KEY` is unset, submissions will fail silently to error state |
| **External skill icons** | `Skills.jsx` loads logos from CDNs (jsDelivr, uxwing, flaticon) — offline builds / CSP could break icons |
| **Hardcoded personal data** | Email, phone, social URLs, and experience dates require code edits to update |
| **No automated tests** | No test framework or test files in the repository |

---

## 14. Future Improvements

Based on codebase analysis:

### High priority

1. **Sync documentation** — Update README project count, routes, folder structure, and add `.env.example`
2. **Remove dead code** — Drop unused `Experience.jsx`, `App.css`, `globals.css`, and unused npm packages (`emailjs`, `react-helmet-async`) or wire them up intentionally
3. **Fix sitemap** — Add `https://devowl.me/muhammad-haroon` with appropriate priority
4. **Newsletter integration** — Connect Footer subscribe to Mailchimp, Buttondown, or Web3Forms with a separate form ID
5. **Custom cursor guard** — Disable on `pointer: coarse` (touch) and respect `prefers-reduced-motion`

### Medium priority

6. **Centralize content** — Extract projects, experience, and publications into `src/data/*.js` to avoid duplication between `Projects.jsx` and `AllProjects.jsx` structured data
7. **Adopt `react-helmet-async` properly** — Replace manual DOM manipulation in `SEOHead.jsx` for cleaner SSR compatibility if ever needed
8. **Image optimization** — MaritimeLink uses 610KB JPEG; consider WebP and responsive `srcset`
9. **Add tests** — Smoke tests for routes and contact form validation with Vitest + React Testing Library
10. **i18n** — Optional Urdu/English toggle given Pakistan-focused audience

### Lower priority

11. **PWA service worker** — `manifest.json` exists but no service worker for offline support
12. **Blog section** — Natural extension given publications and SEO focus
13. **Open Graph per-project images** — Case studies could pass unique `ogImage` instead of default profile photo
14. **CI pipeline** — GitHub Action for `lint` + `build` on PRs

---

## Route Reference

| Path | Component | Navbar source |
|---|---|---|
| `/` | `Home` + `Navbar` | `App.jsx` |
| `/muhammad-haroon` | `About` | `About.jsx` |
| `/about` | Redirect → `/muhammad-haroon` | — |
| `/projects` | `AllProjects` | `AllProjects.jsx` |
| `/project/meet-ai` | `MeetingAI` | page |
| `/project/syeen` | `Syeen` | page |
| `/project/ecommerce` | `EcommerceProject` | page |
| `/project/foncentra` | `Foncentra` | page |
| `/project/aperture-futures` | `ApertureFutures` | page |
| `/project/wordy-app` | `WordyApp` | page |
| `/project/maritime-link` | `MaritimeLink` | page |
| `*` | `NotFound` | page |

### Home page anchor IDs

| Hash | Section |
|---|---|
| `#home` | Hero |
| `#about` | About (inline in Home) |
| `#skills` | Skills |
| `#experience` | Experience timeline |
| `#work` | Projects |
| `#publications` | Publications |
| `#contact` | Contact |

---

*Generated from codebase analysis. Last updated: July 2026.*
