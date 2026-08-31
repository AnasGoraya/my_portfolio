# Task 6: Scroll-Driven Section Reveals & Dynamic Micro-Interactions

## Overview & Objectives
Make the entire one-page portfolio feel alive and cohesive by implementing distinct, fluid scroll-triggered entrance animations for each section using Framer Motion without hurting frame rates or triggering layout shifts.

---

## Detailed Requirements & Architecture
1. **Section-Specific Transition Choreography:**
   - **Hero:** Staggered letter/word reveal + floating UI elements.
   - **Bento Skills:** Scaled stagger pop-in with subtle boundary illumination.
   - **Projects:** Alternating slide-and-fade in with 3D perspective depth.
   - **Experience / About:** Clip-path sweep reveal from bottom to top.
   - **Contact / Footer:** Magnetic button pull and neon gradient illumination.
2. **Performance Constraints:**
   - Use `transform` and `opacity` exclusively for animations to run strictly on the GPU compositor.
   - Use `whileInView` with `viewport: { once: true, margin: "-100px" }` so animations trigger cleanly and do not loop erratically on mobile scrolls.

---

## Prompt for Claude (Copy & Paste into Claude)

```markdown
Role: Creative Interaction Designer & Framer Motion Expert.

Task: Implement a reusable animation framework and scroll reveal system for all sections of a Next.js one-page portfolio.

Specifications:
1. Component / Utilities: `src/components/ui/ScrollReveal.tsx` & `src/lib/animations.ts`
2. Features:
   - Provide distinct animation variants:
     - `fadeUp`: Smooth Y-axis entry for headings and paragraphs.
     - `staggerContainer`: Child stagger manager with configurable delay.
     - `clipReveal`: Modern bottom-to-top clip-path reveal for image mockups.
     - `scaleGlow`: Subtle scale up with glow fade for cards.
   - Magnetic button micro-interaction component (`MagneticButton.tsx`) for navigation items and CTAs.
   - Smooth active scroll spy hook (`useScrollSpy.ts`) to highlight the current section in the header nav.
3. Roman Urdu / English context:
   - "Har section k liye alag aur smooth scroll animation create karo using Framer Motion. Text k liye staggered drop, cards k liye scale-in, aur buttons pr magnetic cursor attraction ho. 60 FPS smooth chalna chahiye mobile aur desktop pr."

Please output the complete animation variants file, the ScrollReveal wrapper component, and the Magnetic Button component.
```
