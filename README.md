<div align="center">

# 🌿 Apan Makhana

### **Premium Fox Nuts — The Taste of Mithilaa**

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)](#)

---

A **scroll-choreographed, premium business website** for Apan Makhana — showcasing hand-picked, FSSAI-certified fox nuts from Mithila, Bihar. Available in **250+ retail outlets across 8+ Indian states** and on Amazon India.

[**🌐 www.apanmakhana.com**](https://www.apanmakhana.com) · [**🛒 Buy on Amazon**](https://www.amazon.in/dp/B0DW3LTXJN) · [**📸 Instagram**](https://www.instagram.com/apan.makhana/)

</div>

---

## ✨ Highlights

| | |
|---|---|
| 🎬 **Scroll-Choreographed** | GSAP-powered scroll-triggered animations create a cinematic narrative |
| 🧈 **Lenis Smooth Scroll** | Buttery smooth scrolling with momentum and inertia |
| 📱 **Mobile-First** | Designed for phones first, scaled up beautifully for desktop |
| 🎨 **Madhubani Art** | Cultural heritage woven into the design with traditional Mithila art |
| 🖼️ **Real Photos** | Actual store shelves & customer interaction photos |
| 🔍 **SEO Optimized** | JSON-LD structured data, Open Graph, semantic HTML & sitemap |

---

## 🏗️ Tech Stack

```
Framework       →  Next.js 16.2.11 (App Router, SSG)
Frontend        →  React 19 + TypeScript 5
Styling         →  Tailwind CSS 4 (PostCSS)
Scroll Engine   →  GSAP 3 + @gsap/react + ScrollTrigger
Smooth Scroll   →  Lenis 1.3
Animations      →  Framer Motion 12 + GSAP
Icons           →  Lucide React
Deployment      →  Vercel (auto-deploy from main)
```

---

## 🧩 Components

The website is composed of **13 sections** with scroll-choreographed transitions:

| # | Component | Description |
|:-:|-----------|-------------|
| — | **`Nav`** | Minimal sticky navigation with smooth-scroll anchors |
| — | **`Spine`** | Vertical scroll progress indicator |
| — | **`Motes`** | Floating ambient particles for visual depth |
| 1 | **`Hero`** | Cinematic brand reveal with staggered text animation |
| 2 | **`ProductSequence`** | GSAP-driven product showcase with pack flip & nutrition reveal |
| 3 | **`Range`** | Product range grid — all makhana variants |
| 4 | **`Benefits`** | Health benefits with scroll-triggered appearance |
| 5 | **`Heritage`** | Mithila heritage story with Madhubani art references |
| 6 | **`FAQ`** | Accordion FAQ with structured data for Google |
| 7 | **`Buy`** | Purchase CTAs — Amazon, Instagram, WhatsApp |
| 8 | **`Trade`** | B2B trade enquiry section with contact details |
| — | **`Footer`** | Site footer with contact, social links & certifications |
| — | **`StickyBuy`** | Persistent bottom bar CTA for mobile |

---

## 📁 Project Structure

```
ApanMakhana-business-webpage/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata & analytics
│   ├── page.tsx                # Main page — section orchestrator + JSON-LD
│   ├── globals.css             # Design system & Tailwind v4
│   └── favicon.ico
├── components/
│   ├── Nav.tsx                 # Sticky navigation
│   ├── Spine.tsx               # Scroll progress indicator
│   ├── Motes.tsx               # Ambient floating particles
│   ├── Hero.tsx                # Cinematic hero section
│   ├── ProductSequence.tsx     # GSAP product showcase
│   ├── Range.tsx               # Product variants grid
│   ├── Benefits.tsx            # Health benefits
│   ├── Heritage.tsx            # Mithila heritage story
│   ├── Madhubani.tsx           # Madhubani art SVG component
│   ├── FAQ.tsx                 # Accordion FAQ
│   ├── Buy.tsx                 # Purchase CTAs
│   ├── Trade.tsx               # B2B trade enquiry
│   ├── Footer.tsx              # Site footer
│   ├── StickyBuy.tsx           # Persistent mobile CTA
│   ├── SmoothScroll.tsx        # Lenis scroll wrapper
│   └── icons.tsx               # Custom icon components
├── lib/
│   ├── faqs.ts                 # FAQ data (synced with JSON-LD)
│   ├── products.ts             # Product catalog data
│   ├── sections.ts             # Section IDs & contact constants
│   ├── motion.ts               # Shared animation presets
│   └── motes.ts                # Particle configuration
├── public/
│   ├── packs/                  # Product pack images (7 variants)
│   ├── store-*.jpeg            # Store shelf photos
│   ├── team-*.jpeg             # Employee-customer photos
│   ├── logo-bg.png             # Brand logo
│   ├── robots.txt              # Search engine directives
│   └── ...                     # Recipe images, product photos
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS + Tailwind v4
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone git@github.com:adesh-sahil/ApanMakhana-business-webpage.git
cd ApanMakhana-business-webpage

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open **http://localhost:3000** to see the site.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Build for production (SSG) |
| `npm start` | Serve the production build locally |

---

## 🗺️ Distribution Coverage

| Region | Channel |
|--------|---------|
| Delhi NCR | 250+ Premium Outlets (BKD Store, Raj Mandir, Sodhi Super Mart, etc.) |
| Gujarat & Rajasthan | Ration Handloom Stores |
| UP, Haryana & Uttarakhand | Rozana Rural E-commerce |
| Kashmir | Direct Distribution |
| Himachal Pradesh | Direct Distribution |
| Bhopal, MP | Direct Distribution |
| Pan-India | Amazon India |

---

## 🌐 SEO & Structured Data

- ✅ **JSON-LD** — Organization + FAQPage schema (auto-synced with rendered content)
- ✅ Open Graph & Twitter Card meta tags
- ✅ `robots.txt` + semantic HTML5
- ✅ Static site generation (SSG) for fast TTFB

---

## 🚢 Deployment

Deployed on **Vercel** with auto-deploy from `main` branch.

| Branch | Purpose |
|--------|---------|
| `main` | Production — auto-deploys to [apanmakhana.com](https://www.apanmakhana.com) |
| `dev` | Development — preview deployments |

---

## 📄 License

This is a **private project** for Apan Makhana. All rights reserved.

---

<div align="center">

**Made with 💚 for Apan Makhana**

*The Taste of Mithilaa*

</div>
