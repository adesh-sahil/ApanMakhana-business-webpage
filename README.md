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

A **premium, mobile-first business webpage** for Apan Makhana — showcasing hand-picked, FSSAI-certified fox nuts from Mithila, Bihar. Available in **250+ retail outlets across 8+ Indian states** and on Amazon India.

[**🛒 Buy on Amazon**](https://www.amazon.in/dp/B0DW3LTXJN) · [**📸 Instagram**](https://www.instagram.com/apan.makhana/)

</div>

---

## ✨ Highlights

| | |
|---|---|
| 📱 **Mobile-First** | Designed for phone screens first, scaled up for desktop |
| 🎨 **Premium Design** | Custom brand colors, gradients, glassmorphism & micro-animations |
| 📊 **Animated Counters** | Numbers count up on scroll (250+ outlets, 8+ states) |
| 🎬 **Rich Animations** | Framer Motion scroll-reveals, floating elements & hover effects |
| 🖼️ **Real Photos** | Actual store shelves & customer interaction photos |
| 🔍 **SEO Optimized** | Open Graph tags, semantic HTML, meta descriptions & sitemap |

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

The site is built from **9 modular sections** with a narrative flow:

| # | Component | Description |
|:-:|-----------|-------------|
| 1 | **`Navbar`** | Sticky nav with smooth-scroll, mobile drawer & "Buy" CTA |
| 2 | **`Hero`** | Full-screen hero with bold headline, price CTA & trust signals |
| 3 | **`TrustTicker`** | Scrolling green bar — FSSAI, Natural, Gluten Free, Non-GMO |
| 4 | **`MetricsBar`** | Animated counting numbers: 250+ outlets, 8+ states, 3 platforms |
| 5 | **`WhyChoose`** | 4 reason cards + 8 health benefit tags with product image |
| 6 | **`Product`** | Nutrition grid, benefit pills & Buy CTA (merged showcase + benefits) |
| 7 | **`NationwidePresence`** | Region cards, expandable store partners & photo gallery with lightbox |
| 8 | **`Recipes`** | Horizontal-scroll recipe cards with bottom-sheet modal |
| 9 | **`FAQ`** | 4-item accordion with email CTA |
| 10 | **`Footer`** | Dark footer with contact, social links & certifications |

---

## 🎨 Design System

### Color Palette

```
🟢 Brand Green    #1a472a → #2d6a4f → #40916c    (primary actions, headings)
🟡 Gold           #c5975a → #d4a574 → #e4c080    (accents, highlights)
🟤 Cream          #fefdfb → #fdf9f3 → #faf3e7    (backgrounds)
```

### Typography

- **Headings:** *Playfair Display* — elegant serif for premium feel
- **Body:** *Inter* — clean sans-serif for readability

### Effects

- `glass-nav` — frosted glass navbar on scroll
- `card` — hover-lift card with subtle shadow
- `gradient-cta` — green gradient call-to-action buttons
- `ticker-track` — infinite-scroll CSS animation
- Animated counters via CSS `@property --num`

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
├── public/                      # Static assets
│   ├── product-front.jpeg       # Main product image
│   ├── product-back.jpeg        # Nutritional info image
│   ├── product-benefits.jpeg    # Benefits infographic
│   ├── store-1..13.jpeg         # Store shelf photos
│   ├── team-1..6.jpeg           # Employee-customer photos
│   ├── makhana-*.png            # Recipe images
│   ├── logo-bg.png              # Brand logo
│   └── sitemap.xml              # SEO sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Responsive navigation
│   │   ├── Hero.tsx             # Hero with CTAs & trust signals
│   │   ├── TrustTicker.tsx      # Scrolling certification bar
│   │   ├── MetricsBar.tsx       # Animated stat counters
│   │   ├── WhyChoose.tsx        # Reasons + health benefits
│   │   ├── Product.tsx          # Nutrition grid & benefit tags
│   │   ├── NationwidePresence.tsx # Region cards, stores & gallery
│   │   ├── Recipes.tsx          # Recipe cards with modal
│   │   ├── FAQ.tsx              # Accordion FAQ
│   │   └── Footer.tsx           # Dark footer
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Design system & Tailwind
├── index.html                   # HTML template with SEO meta
├── tailwind.config.js           # Custom design tokens
├── vite.config.ts               # Vite configuration
└── package.json                 # Dependencies & scripts
```

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

## 🌐 SEO & Meta

- ✅ Descriptive `<title>` and `<meta description>` tags
- ✅ Open Graph tags for rich social previews
- ✅ Targeted keywords for makhana & fox nuts
- ✅ `sitemap.xml` in `/public`
- ✅ Semantic HTML5 structure

---

## 📄 License

This is a **private project** for Apan Makhana. All rights reserved.

---

<div align="center">

**Made with 💚 for Apan Makhana**

*The Taste of Mithilaa*

</div>
