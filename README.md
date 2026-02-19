<div align="center">

# 🌿 Apan Makhana

### **Premium Fox Nuts — The Taste of Mithilaa**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)](#)

---

A **premium, mobile-first business webpage** for Apan Makhana — showcasing hand-picked, FSSAI-certified fox nuts straight from the heart of Mithila, Bihar. Built with modern web technologies and polished animations to deliver a luxury brand experience.

[**🌐 Live Website**](https://www.apanmakhana.com) · [**🛒 Buy on Amazon**](https://www.amazon.in)

</div>

---

## ✨ Highlights

| | |
|---|---|
| 📱 **Mobile-First Design** | Crafted for the majority of users on mobile — then scaled up for desktop |
| 🎨 **Premium Aesthetics** | Curated brand colors, glassmorphism, smooth gradients & micro-animations |
| ⚡ **Blazing Fast** | Vite-powered dev & build, optimized assets, minimal bundle size |
| 🎬 **Rich Animations** | Framer Motion scroll-triggered reveals, floating elements & hover effects |
| 🔍 **SEO Optimized** | Open Graph tags, semantic HTML, meta descriptions & sitemap included |
| ♿ **Accessible** | Proper heading hierarchy, alt text, keyboard-navigable components |

---

## 🏗️ Tech Stack

```
Frontend        →  React 19 + TypeScript 5.7
Build Tool      →  Vite 6
Styling         →  Tailwind CSS 3.4 (custom design tokens)
Animations      →  Framer Motion 12
Icons           →  Lucide React
Scroll          →  react-scroll + react-intersection-observer
Fonts           →  Playfair Display (headings) + Inter (body)
Linting         →  ESLint 9 + typescript-eslint
```

---

## 🧩 Components

The application is composed of **12 modular React components**, ordered as they appear on the page:

| # | Component | Description |
|:-:|-----------|-------------|
| 1 | **`Navbar`** | Sticky responsive navigation with smooth-scroll links & mobile hamburger menu |
| 2 | **`Hero`** | Full-screen hero section with animated headline, CTA buttons & floating product imagery |
| 3 | **`TrustBar`** | Animated trust badges — FSSAI certified, 100% natural, premium quality indicators |
| 4 | **`Features`** | Key product features with icon cards and scroll-reveal animations |
| 5 | **`Benefits`** | Health benefits of makhana with engaging visual layout |
| 6 | **`Recipes`** | Recipe ideas & inspiration featuring makhana in various dishes |
| 7 | **`ProductShowcase`** | Product catalog display with imagery and descriptions |
| 8 | **`StorePresence`** | Retail store locations & availability across Delhi with store images |
| 9 | **`Testimonials`** | Customer reviews and social proof carousel |
| 10 | **`FAQ`** | Expandable accordion-style frequently asked questions |
| 11 | **`Contact`** | Contact form with WhatsApp integration & business details |
| 12 | **`Footer`** | Site footer with navigation links, social media & copyright |

---

## 🎨 Design System

The project uses a **custom Tailwind CSS design system** built around the brand identity:

### Color Palette

```
🟢 Brand Green    #2d6a4f → #40916c → #6ec896    (primary actions, headings)
🟡 Gold           #c5975a → #d4a574 → #e4c080    (accents, highlights)
🟤 Cream          #fefdfb → #fdf9f3 → #faf3e7    (backgrounds, cards)
```

### Typography

- **Headings:** *Playfair Display* — elegant serif for premium feel
- **Body:** *Inter* — clean sans-serif for readability

### Effects

- `glass` / `glass-lg` — glassmorphism box shadows
- `glow` / `glow-gold` — subtle color glow effects
- `float` / `shimmer` / `slide-up` / `fade-in` — CSS keyframe animations

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

The app will be running at **http://localhost:5173**

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check & build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 📁 Project Structure

```
ApanMakhana-business-webpage/
├── public/                   # Static assets (product images, store photos, sitemap)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Responsive navigation bar
│   │   ├── Hero.tsx          # Hero banner with CTA
│   │   ├── TrustBar.tsx      # Trust/certification badges
│   │   ├── Features.tsx      # Product feature cards
│   │   ├── Benefits.tsx      # Health benefit highlights
│   │   ├── Recipes.tsx       # Recipe inspiration section
│   │   ├── ProductShowcase.tsx # Product display grid
│   │   ├── StorePresence.tsx # Retail store locations
│   │   ├── Testimonials.tsx  # Customer reviews
│   │   ├── FAQ.tsx           # Accordion FAQ section
│   │   ├── Contact.tsx       # Contact form & details
│   │   └── Footer.tsx        # Site footer
│   ├── App.tsx               # Root application component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles & Tailwind directives
├── index.html                # HTML template with SEO meta tags
├── tailwind.config.js        # Custom design tokens & animations
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript project references
├── tsconfig.app.json         # App TypeScript config
├── tsconfig.node.json        # Node TypeScript config
├── eslint.config.js          # ESLint configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies & scripts
```

---

## 🌐 SEO & Meta

The site is fully optimized for search engines and social sharing:

- ✅ Descriptive `<title>` and `<meta description>` tags
- ✅ Open Graph (`og:title`, `og:description`, `og:type`, `og:url`) for rich social previews
- ✅ Targeted keywords for makhana, fox nuts & healthy snacking
- ✅ `sitemap.xml` included in `/public`
- ✅ Semantic HTML5 structure throughout

---

## 📄 License

This is a **private project** for Apan Makhana. All rights reserved.

---

<div align="center">

**Made with 💚 for Apan Makhana**

*The Taste of Mithilaa*

</div>
