# Task 1: Next.js Project Setup, Architecture & Asset Directory Structure

## Overview & Objectives
Setup a blazing-fast, scalable Next.js App Router portfolio optimized for Vercel deployment. Enforce strict performance rules (bundle size, code splitting, lazy loading) so animations and 3D effects never degrade page speed.

---

## Detailed Requirements & Architecture
1. **Framework & Tech Stack:**
   - Next.js 14+ (App Router)
   - TypeScript
   - Tailwind CSS for styling
   - Framer Motion & Lucide Icons
2. **Directory Structure:**
   - `public/imgs/projects/` (For raw and WebP screenshots of projects)
   - `public/imgs/icons/` (For custom SVG/PNG brand assets)
   - `src/components/ui/` (Reusable atomic UI components: buttons, cards, spotlights)
   - `src/components/sections/` (Modular section components: Hero, About, Projects, BentoSkills, Contact)
   - `src/components/canvas/` (WebGL / Three.js 3D canvas components)
   - `src/hooks/` (Custom hooks: useScrollSpy, usePreloader, useWindowSize)
   - `src/lib/` (Utility helper functions, cn tw-merge setup)
3. **Performance & Lightweight Guidelines:**
   - Enable `next/image` with WebP/AVIF priority formats.
   - Setup `@next/bundle-analyzer` to monitor vendor chunk sizes.
   - Ensure initial HTML bundle remains minimal (<150KB JS first load).

---

## Prompt for Claude (Copy & Paste into Claude)

```markdown
Role: Senior Full-Stack Next.js Architect & UI Specialist.

Task: Setup the foundational architecture for a modern, high-performance portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS. The website must be ultra-lightweight, visually elite, and prepared for seamless deployment on Vercel.

Context & Specifications:
1. Initialize a clean directory structure:
   - `src/app/` (page.tsx, layout.tsx, globals.css, providers.tsx)
   - `src/components/ui/`
   - `src/components/sections/`
   - `src/components/canvas/`
   - `src/lib/utils.ts` (with clsx + tailwind-merge)
   - `public/imgs/projects/` & `public/imgs/icons/`
2. Configuration Details:
   - Configure `tailwind.config.ts` with custom dark theme colors (rich deep slate/zinc backgrounds, subtle neon accents like electric emerald or cyan, and glassmorphism utilities).
   - Configure `next.config.mjs` for optimal image caching, AVIF/WebP formats, and dynamic chunk compression.
3. Roman Urdu / English instructions summary:
   - "Bhai aik clean, production-ready Next.js App Router setup code provide karo with `tailwind.config.ts`, `globals.css`, `src/lib/utils.ts`, and root `layout.tsx`. Asset structure ko properly configure karo taake images `public/imgs/projects/` sy cleanly load hon bina kisi latency k."

Please output the complete folder layout, configuration files, and core utility helpers ready to drop into a Next.js project.
```
