<div align="center">

# 🦉 Mohammad Haroon Portfolio

**Mohammad Haroon** · Full Stack Web Developer · Bahawalpur, Pakistan

[![Live Site](https://img.shields.io/badge/Live%20Site-devowl.me-609966?style=flat-square&logo=vercel&logoColor=white)](https://devowl.me)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-rolldown-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

A personal portfolio SPA showcasing full-stack web development and AI/ML projects — with 7 detailed case study pages, dark/light theming, lazy-loaded routes, and per-page SEO via JSON-LD structured data.

[**→ View Live Portfolio**](https://devowl.me)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Projects](#-featured-projects)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Routes](#-routes)
- [Deployment](#-deployment)
- [Contact](#-contact)

---

## 🚀 Overview

This is a production-ready personal portfolio for **Mohammad Haroon**, a Full Stack Web Developer specializing in React.js, WordPress, and Node.js. The site is built as a React 19 + Vite SPA and includes:

- **6 in-depth case study pages** with technical breakdowns, challenges, and metrics
- **Dark / Light mode** via ThemeContext with Tailwind semantic classes
- **Code splitting** — non-home routes and heavy sections (Skills, Projects, Contact) are lazy-loaded
- **SEO-optimized** — canonical URLs, Open Graph, Twitter cards, and JSON-LD structured data per page
- **Contact form** powered by [Web3Forms](https://web3forms.com)
- **Vercel Analytics + Speed Insights** integrated
- **Custom cursor**, Framer Motion animations, and Framer-powered skill marquee

---

## 🛠 Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, React Router 7, Framer Motion, react-scroll |
| **Styling** | Tailwind CSS 3, custom CSS variables, dark mode |
| **Build** | Vite (rolldown-vite 7.2.5), PostCSS |
| **SEO** | react-helmet-async, JSON-LD, sitemap.xml, manifest.json |
| **Forms** | Web3Forms API |
| **Analytics** | Vercel Analytics, Vercel Speed Insights, Google Tag (G-XYFG6CLB9R) |
| **Deployment** | Vercel — SPA rewrites + long-cache static headers |

---

## 🗂 Featured Projects

### 🤖 AI & Machine Learning

#### [Meeting AI](https://devowl.me/project/meet-ai)
> Production-grade platform automating the complete meeting workflow with live WebRTC conferencing, AI transcription, and intelligent notes.

- Live P2P meetings with Socket.io signaling and host-side mixed audio recording
- OpenAI Whisper transcription + GPT-4o mini notes, task extraction, and contextual chat
- Google Meet Chrome extension (Manifest V3) with offscreen tab capture
- Organization-scoped collaboration via Supabase Auth and Row Level Security

**Stack:** `React` `Node.js` `Express` `WebRTC` `Socket.io` `OpenAI` `Supabase` `Vercel` `Render`

---

#### [Aperture Futures — UNSC Intelligence Platform](https://devowl.me/project/aperture-futures)
> RAG-powered intelligence stack for UN Security Council research with three integrated products.

- **BlueLines** — resolution research + AI-assisted drafting
- **LiveLines** — real-time meeting monitoring and position tracking
- **CrossLines** — negotiation simulation with Monte Carlo analysis

**Stack:** `Python` `Flask` `LangChain` `OpenAI GPT` `Vector DB` `React` `Docker` `AWS`

---

### ⚡ Full-Stack Development

#### [GearNix — E-commerce Platform](https://devowl.me/project/ecommerce)
> Full-stack gaming gear shop with Pakistan-focused payment integrations and an admin dashboard.

- JWT auth, cart sync (Context API + localStorage + server), Cloudinary media
- JazzCash, EasyPaisa, and card payment support with idempotent webhooks
- 99.8% payment success rate, <2s average load time

**Stack:** `React` `Node.js` `Express` `MongoDB` `JWT` `Cloudinary` `Redis`

---

### 🌐 Web Development

#### [Syeen — Talent & Business Collaboration Platform](https://devowl.me/project/syeen)
> Dual-sided WordPress marketplace connecting businesses with talent.

- Custom CPTs, meta boxes, and REST API endpoints
- AJAX-powered real-time application status
- 2500+ users, 850+ active listings

**Stack:** `WordPress` `PHP` `Elementor Pro` `ACF` `MySQL` `Cloudflare`

---

#### [Foncentra — E-Learning Platform](https://devowl.me/project/foncentra)
> Digital publishing and e-learning platform with a custom WordPress theme.

- GSAP + ScrollTrigger animations, reading progress, bookmarks
- Mobile-first, WP Rocket performance, Cloudflare CDN
- 500+ content pieces, 4.2 min average read time

**Stack:** `WordPress` `GSAP` `PHP` `CSS3` `WP Rocket` `Yoast`

---

#### [Wordy App — Gentle Language Learning](https://devowl.me/project/wordy-app)
> Vocabulary learning app using smart pop-ups and spaced repetition. Live at [wordytrainer.com](https://wordytrainer.com).

- Multilingual: English, German, Russian, Italian+
- Service Workers + IndexedDB for offline Pro tier
- Custom Gutenberg blocks, WP REST API integration

**Stack:** `WordPress` `PHP` `jQuery` `AJAX` `WP REST API` `IndexedDB`

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── sitemap.xml          # SEO sitemap
│   ├── manifest.json        # PWA manifest
│   └── profile-photo.webp   # Profile photo / Open Graph image
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CustomCursor.jsx
│   │   └── SEOHead.jsx      # Per-page SEO via react-helmet-async
│   ├── sections/            # Home page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx       # Infinite marquee
│   │   ├── ExperienceTimeline.jsx
│   │   ├── Projects.jsx     # Latest 6 projects
│   │   └── Contact.jsx      # Web3Forms integration
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AllProjects.jsx  # Full grid with filters
│   │   └── project/         # 6× lazy-loaded case studies
│   ├── context/
│   │   └── ThemeContext.jsx  # Light / dark mode
│   ├── App.jsx              # BrowserRouter, lazy routes, ScrollToTop
│   └── main.jsx             # ThemeProvider entry point
├── vite.config.js
├── tailwind.config.cjs
├── vercel.json              # SPA rewrites + cache headers
└── package.json
```

---

## 🔧 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ImMohammadHaroon/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables (see below)
cp .env.example .env

# 4. Start the development server
npm run dev
# → Runs at http://localhost:5173
```

### Available Scripts

```bash
npm run dev       # Start development server with HMR
npm run build     # Build for production
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
# Web3Forms — get your key at https://web3forms.com
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

> **Note:** All Vite environment variables must be prefixed with `VITE_` to be exposed to the client.

---

## 🗺 Routes

| Path | Page |
|---|---|
| `/` | Home — Hero, About, Skills, Experience, Projects, Contact |
| `/projects` | All Projects grid with category filters |
| `/project/meet-ai` | Meeting AI case study |
| `/project/syeen` | Syeen case study |
| `/project/ecommerce` | GearNix case study |
| `/project/foncentra` | Foncentra case study |
| `/project/aperture-futures` | Aperture Futures case study |
| `/project/wordy-app` | Wordy App case study |

---

## ☁️ Deployment

This portfolio is deployed on **Vercel** with the following configuration in `vercel.json`:

- All routes rewrite to `index.html` for SPA client-side routing
- Static assets (`/assets/*`) served with `Cache-Control: public, max-age=31536000, immutable`

To deploy your own fork:

1. Push the repository to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add `VITE_WEB3FORMS_ACCESS_KEY` as an environment variable in Vercel project settings
4. Deploy — Vercel auto-detects Vite and runs `npm run build`

---

## 📬 Contact

| | |
|---|---|
| 🌐 **Portfolio** | [devowl.me](https://devowl.me) |
| 📧 **Email** | [devowl14@gmail.com](mailto:devowl14@gmail.com) |
| 💼 **LinkedIn** | [mohammad-haroon-9b9356362](https://www.linkedin.com/in/mohammad-haroon-9b9356362/) |
| 🐙 **GitHub** | [ImMohammadHaroon](https://github.com/ImMohammadHaroon) |
| 📸 **Instagram** | [@mohammad_haro.on](https://www.instagram.com/mohammad_haro.on) |
| 📞 **Phone** | +92 342 8979314 |

---

<div align="center">

**Available for freelance work** · React.js · WordPress · Node.js · Full Stack

© 2025 Mohammad Haroon · Bahawalpur, Pakistan

</div>
