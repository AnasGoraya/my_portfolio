# Anas Nazir — Developer Portfolio (Next.js)

A blazing-fast, ultra-lightweight **One-Page Developer Portfolio** rebuilt on **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, optimized for Vercel deployment and a Lighthouse performance score of 95+.

Dark, rich theme (deep slate/zinc backgrounds, electric emerald & cyan neon accents) with glassmorphism utilities, Framer Motion scroll animations, and a WebGL 3D background.

---

## 🏗️ Tech Stack

- **Next.js 14** (App Router, `next/image`, fast static export)
- **TypeScript**
- **Tailwind CSS** (custom dark design tokens)
- **Framer Motion** — scroll & page transitions
- **Lucide React** — icons
- **Three.js / WebGL** — hero background canvas

---

## 📁 Project Structure

```text
portfolio_website/
├── src/
│   ├── app/                    # App Router (layout, page, providers, globals.css)
│   ├── components/
│   │   ├── ui/                 # Atomic UI: buttons, cards, spotlights
│   │   ├── sections/           # Hero, About, Projects, BentoSkills, Contact
│   │   └── canvas/             # WebGL / Three.js 3D canvas components
│   ├── hooks/                  # useScrollSpy, usePreloader, useWindowSize
│   └── lib/                    # utils.ts (cn: clsx + tailwind-merge)
├── public/
│   └── imgs/
│       ├── projects/           # Project screenshots (WebP-ready)
│       └── icons/              # Custom SVG/PNG brand assets
├── tailwind.config.ts          # Dark theme + neon + glass utilities
├── next.config.mjs             # Image formats (AVIF/WebP), caching, analyzer
├── postcss.config.mjs
└── package.json
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
npm run analyze    # visualize vendor bundle sizes (ANALYZE=true)
```

---

## 🛰️ Deploy on Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), **Import Git Repository** → select your repo → **Deploy**.
3. Vercel auto-detects Next.js and serves optimized static + edge output with free SSL/CDN.

---

## ⚡ Performance Guardrails

- First-load JS budget target: **<150KB**.
- `next/image` with **AVIF/WebP** priority formats.
- `@next/bundle-analyzer` to monitor vendor chunk sizes.
- Long-term immutable caching for `/imgs` and `/_next/static`.
- `lucide-react` + `framer-motion` package-import optimization.

---

© 2026 Anas Nazir. Crafted with precision.
