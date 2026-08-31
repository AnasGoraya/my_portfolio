# Task 3: Hero Section with Lightweight WebGL / Interactive 3D Canvas

## Overview & Objectives
Create a striking, award-winning Hero Section. Instead of heavy 3D GLTF models that slow down page load, build a lightweight WebGL canvas (interactive particle mesh, glowing constellation, or shader wave) combined with crisp typography, dynamic badge tags, and modern glassmorphic CTAs.

---

## Detailed Requirements & Architecture
1. **Interactive 3D / WebGL Element:**
   - Lightweight HTML5 Canvas particle system or React Three Fiber / Drei sphere/wave.
   - Cursor-reactive: particles disperse or shift subtly on mouse move.
   - GPU-accelerated and throttled to preserve 60 FPS on both mobile and desktop.
2. **Hero Content & Typography:**
   - Dynamic status pill (e.g. "🟢 Available for high-impact roles & systems").
   - Headline with gradient text clipping (e.g. "Full-Stack Software Engineer & Backend Architect").
   - Short, punchy value proposition highlighting scalable web platforms, backend systems, and modern interactive UI.
   - CTAs: "Explore Featured Projects" (smooth scroll) and "Get in Touch" (magnetic hover button).
   - Subtle animated scroll indicator at the bottom.

---

## Prompt for Claude (Copy & Paste into Claude)

```markdown
Role: Creative Technologist & UI Engineer (Three.js / React Three Fiber / Tailwind CSS).

Task: Create a visually captivating yet ultra-lightweight Hero Section component for a Full-Stack Developer portfolio in Next.js.

Specifications:
1. Component: `src/components/sections/Hero.tsx` + `src/components/canvas/ParticleBackground.tsx`
2. Core Highlights:
   - Interactive WebGL/Canvas background: Lightweight particle network or undulating wave that responds subtly to mouse/touch cursor movement. Must NOT impact bundle size significantly (<25KB overhead).
   - Bold modern typography with smooth staggered entry animations (Framer Motion).
   - Glassmorphic action buttons with magnetic hover effect and gradient borders.
   - Fully responsive design: Automatically reduces particle density on mobile devices for peak performance.
3. Roman Urdu / English context:
   - "Hero section standard websites jaisa plain na ho. WebGL / Canvas interactive background ho jo mouse move pr react kare, fast load ho, aur heavy na ho. Typography modern ho with primary CTA buttons and dynamic status indicator."

Please deliver the complete Next.js TypeScript code for the Hero section, the canvas background component, and animation variants.
```
