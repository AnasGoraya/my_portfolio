# Task 2: Interactive Preloader & Theme-Matched Logo Splash Animation

## Overview & Objectives
Design a high-end initial loading screen (Preloader) that displays when a user first visits the portfolio. It must feature a custom geometric brand logo icon, animate with sleek SVG drawing/pulsing effects, match the portfolio's core color palette, and smoothly reveal the main website content once ready.

---

## Detailed Requirements & Architecture
1. **Functionality:**
   - Display a sleek progress/loading animation on initial mount.
   - Use `sessionStorage` or local state so the preloader only runs on the first landing and doesn't annoy returning clicks.
   - Transition smoothly into the Hero section using Framer Motion exit transitions (`AnimatePresence`).
2. **Visual Design:**
   - Dark backdrop matching the website primary background (`#0a0a0f` or `#030712`).
   - Center minimalist abstract developer/brand logo SVG.
   - Stroke-dashoffset or scale + glow pulse animation.
   - Dynamic percentage counter or ambient glowing progress bar (0% -> 100%).
   - Exit animation: Smooth fade-out + slight scale-up with page blur clearing.

---

## Prompt for Claude (Copy & Paste into Claude)

```markdown
Role: Senior Frontend Animation Engineer (Framer Motion + React).

Task: Build a standalone, high-performance Preloader component in Next.js (Client Component) using Framer Motion.

Specifications:
1. Component Name: `src/components/ui/Preloader.tsx`
2. Features:
   - Modern minimalist SVG developer logo icon at center.
   - Glowing stroke animation + subtle scale pulse matching the dark neon/cyber-slate project theme.
   - Smooth numerical counter (0% to 100%) or dynamic progress bar.
   - Seamless exit transition using `AnimatePresence` with `y: -100%` or smooth fade-out with backdrop blur dissipation.
   - Ensure it executes cleanly on initial page load and manages `document.body.style.overflow = 'hidden'` during loading.
3. Roman Urdu / English context:
   - "Jab user pehli baar website open kare toh start main aik sleek animated logo splash screen aye jo website ki dark aesthetic theme sy match karti ho. Loading complete hone pr website content smooth transition k sath reveal ho aur page pr koi visual glitch na aye."

Please provide the full TypeScript code for `Preloader.tsx`, the SVG logo path/animation logic, and how to wrap it in `src/app/page.tsx` or `layout.tsx`.
```
