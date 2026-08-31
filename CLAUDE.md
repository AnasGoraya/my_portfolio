# CLAUDE.md — Anas Nazir Portfolio

Production Next.js portfolio for Anas Nazir (Full-Stack Engineer). One-page App Router site, on Vercel via GitHub (`AnasGoraya/my_portfolio`).

## Commands

```bash
npm run dev       # dev server (localhost:3000)
npm run build     # production build
npm start         # serve production
npm run analyze   # ANALYZE=true bundle report
npx next lint     # ESLint
npx tsc --noEmit  # typecheck
npm run dev -- -p 3001   # alternate port
```

## Stack & Versions

- **Next.js 14.2.35** (App Router, pinned — do NOT auto-bump; spec requires 14+, see Security note) + TypeScript
- **Tailwind CSS** (class dark mode) + `clsx`/`tailwind-merge` (`cn` in `src/lib/utils.ts`)
- **Framer Motion** (animations), **Lucide** (icons), **next-themes** (theme)

Path alias: `@/*` → `./src/*`.

## Architecture (App Router)

- `src/app/` — `layout.tsx` (fonts, metadata, ThemeProvider, Preloader), `page.tsx`, `globals.css`, `providers.tsx`, `robots.ts`, `sitemap.ts`
- `src/components/ui/` — atomic: `SpotlightCard`, `MagneticButton`, `TiltCard`, `ThemeToggle`, `Preloader`, `ScrollReveal`, `SectionHeading`, `AnimatedTerminal`
- `src/components/sections/` — `Header` (scroll-spy + mobile menu), `Hero`, `About`, `BentoSkills`, `Projects`, `Services`, `Contact`, `Footer`
- `src/components/canvas/` — `ParticleBackground` (lazy-loaded, `ssr:false`)
- `src/hooks/` — `use-preloader`, `use-scroll-spy`, `use-window-size`
- `src/lib/` — `utils.ts`, `animations.ts`, `projects.ts`
- `public/imgs/projects/` — **PNG** screenshots (`ourphonemd-preview.png`, `xepco-preview.png`, `ebroadmax-preview.png`)

## Design System (Dual Theme)

- **Light** (`:root`, **default**): warm off-white + light-brown/cream/latte tones; **Dark** (`.dark`): neutral obsidian `#09090b`. **No navy anywhere.** (Default theme = light — see `ThemeProvider`.)
- Semantic tokens via CSS vars in `globals.css`: `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--accent`, `--primary`, `--ring`.
- Use semantic classes (`bg-background`, `text-foreground`, `bg-card`, `border-border`, `text-muted-foreground`) — NOT hardcoded hex/zinc, so both themes work.
- Neon accents (emerald `#2bf2a3`, cyan `#22d3ee`) for dark-mode glow; `text-gradient-neon` has a light-mode override.

## Conventions

- New components: semantic theme tokens, `cn()` for class merging.
- Animations use `transform`/`opacity` only (GPU compositor), `viewport: { once: true, margin: "-100px" }`. Variants live in `src/lib/animations.ts`.
- Heavy/interactive sections use `next/dynamic` code-splitting and lazy-load the canvas (`ssr:false`) to protect First Load JS budget.
- `"use client"` only on components needing interactivity; keep server components lean for SEO.

## Security / Known Decisions

- Pinned to **Next.js 14.2.35** per spec — `npm audit` lists open advisories whose only fix is Next 16 (breaking). Accepted tradeoff; verify before upgrading.
- Legacy static-site artifacts (`index.html`, `assets/`, `*.zip`) are git-ignored, not part of this repo.

## Perf Budget

First Load JS ~**154 kB**; dominant fixed cost is framer-motion (~54 kB, spec-mandated). Keep new work from pushing it up — prefer CSS/`transform` where possible, lazy-load add-ons.
