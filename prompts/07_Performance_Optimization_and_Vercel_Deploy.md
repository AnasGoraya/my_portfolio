# Task 7: Vercel Deployment Optimization, SEO & Production Readiness

## Overview & Objectives
Prepare the entire application for zero-latency, instant deployment on Vercel with automated build optimization, OpenGraph social cards, structured metadata for SEO, and clean Core Web Vitals (Lighthouse score 95+).

---

## Detailed Requirements & Architecture
1. **Next.js & Vercel Config:**
   - Configure headers for caching static assets (`/_next/static/` immutable caching).
   - Setup dynamic metadata API (`generateMetadata`) with OpenGraph, Twitter Cards, and canonical tags.
   - Setup `robots.txt` and `sitemap.ts` dynamic generators.
2. **Bundle Optimization:**
   - Lazy-load WebGL canvas and dynamic 3D components using `next/dynamic` with SSR disabled (`ssr: false`) and a fallback skeleton.
   - Eliminate unused CSS and optimize font loading via `next/font/google` (Inter / Outfit / JetBrains Mono).
3. **Pre-Deployment Checklist:**
   - Zero TypeScript compile errors (`tsc --noEmit`).
   - Clean ESLint run.
   - Responsive testing across 360px (mobile) to 4K desktop screens.

---

## Prompt for Claude (Copy & Paste into Claude)

```markdown
Role: Senior DevOps & Next.js Performance Optimization Specialist.

Task: Generate the complete production optimization suite, SEO metadata configuration, and deployment setup for the Next.js portfolio on Vercel.

Specifications:
1. Files to generate:
   - `src/app/sitemap.ts` & `src/app/robots.ts`
   - Dynamic SEO metadata configuration in `src/app/layout.tsx` (OpenGraph, Twitter Cards, keywords, canonical URLs)
   - Dynamic import wrapper for 3D/Canvas components (`ssr: false`) with graceful loading skeletons.
   - `vercel.json` (optional headers & caching optimization rules).
2. Code Audit & Polish:
   - Best practices for font loading with `next/font`.
   - Vercel Analytics and Speed Insights integration hooks.
3. Roman Urdu / English context:
   - "Portfolio ko Vercel pr deploy krne k liye full production optimization setup do. Dynamic imports for 3D canvas, SEO metadata, sitemap, font optimization, aur zero latency configuration provide karo taake Lighthouse score 95+ aye."

Please deliver the complete production configuration files, metadata setup, and deployment guide.
```
