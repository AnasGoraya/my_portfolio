# Task 4: Distinctive Bento-Grid Architecture (Replacing Generic Tech Badges)

## Overview & Objectives
Eliminate boring, generic skill badges (the usual grid of React, JS, Python icons that look identical across 99% of portfolios). Replace them with an interactive "System Architecture & Engineering Capabilities" Bento Grid that showcases technical mastery through live visual mockups, terminal feeds, and interactive cards.

---

## Detailed Requirements & Architecture
1. **Bento Grid Structure:**
   - **Card 1 (Backend Engineering & Architecture):** Visual interactive API flow / Microservices pipeline (NestJS, Laravel, REST/GraphQL, MySQL).
   - **Card 2 (Modern Frontend & Realtime UI):** Next.js App Router, React, Tailwind, Framer Motion interactive mini-widget.
   - **Card 3 (System Reliability & Database Design):** Database optimization, indexing, caching, and state management.
   - **Card 4 (Interactive Terminal / Code Snippet):** Animated CLI card showing real-time build commands or live execution status.
2. **Interactive Polish:**
   - Spotlight hover effect (radial gradient that follows the mouse cursor on each card).
   - Subtle border-beam / glowing border on hover.
   - High-contrast typography, clean badge tags, and structured engineering bullet points.

---

## Prompt for Claude (Copy & Paste into Claude)

```markdown
Role: Senior UI/UX Designer & Full-Stack Frontend Developer.

Task: Build an innovative "Engineering Capabilities & Architecture" section replacing typical generic skill icon rows with an interactive Bento Grid layout in Next.js and Tailwind CSS.

Specifications:
1. Component: `src/components/sections/BentoSkills.tsx`
2. Structure & Content:
   - Card 1: Backend Systems & APIs (NestJS, Laravel, Python, MySQL, Scalable Architecture). Include interactive API node preview.
   - Card 2: Modern Frontend Ecosystem (Next.js, React.js, Tailwind CSS, WebGL/Framer Motion).
   - Card 3: Interactive Live Terminal card with simulated typing / deployment log stream.
   - Card 4: Performance & Cloud Delivery (Vercel, Git workflows, caching strategies).
3. Visuals & Interactivity:
   - Radial Spotlight cursor tracking effect on card borders.
   - Bento box responsive layout (1 col mobile, 3-4 col responsive grid on desktop).
   - Zero generic repetitive icon lists; use rich card layouts with engineering value metrics.
4. Roman Urdu / English context:
   - "Purane generic language icons ko khatam karo. Ek modern Bento Grid layout banao jisme backend architecture, frontend ecosystem, aur interactive terminal card ho with mouse-follow spotlight glow effect."

Provide the full TypeScript component code, spotlight tracking hook, and Tailwind classes.
```
