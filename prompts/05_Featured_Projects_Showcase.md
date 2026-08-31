# Task 5: Featured Projects Showcase with 3D Tilt Cards & Live Previews

## Overview & Objectives
Build a high-impact Featured Projects showcase highlighting three key production applications with live URLs, role definitions, tech stacks, and structured image asset references pointing to `public/imgs/projects/`.

---
first delete all project that already have 

## Project Details & Roles:
1. **Project 1: OurPhoneMD**
   - **URL:** `https://ourphonemd.com/`
   - **Role & Context:** Co-created with a development team; currently actively managed and maintained with full system control.
   - **Tech Stack:** Modern Web Framework, Responsive UI, Backend Integration, Device Management Workflow.
   - **Image Path:** `/imgs/projects/ourphonemd-preview.webp`
2. **Project 2: Xepco Accountants**
   - **URL:** `https://xepcoaccountants.co.uk/`
   - **Role & Context:** Completely designed, engineered, and deployed solo. Actively updated and maintained with ongoing feature enhancements.
   - **Tech Stack:** Full-Stack Architecture, High-Conversion UX, SEO Optimization, Dynamic Content Management.
   - **Image Path:** `/imgs/projects/xepco-preview.webp`
3. **Project 3: EBroadMax**
   - **URL:** `https://ebroadmax.com/`
   - **Role & Context:** Active core team contributor focusing on frontend responsiveness, backend connectivity, and scalable service delivery.
   - **Tech Stack:** Web Systems, Scalable Networking Platform, Modern UI/UX.
   - **Image Path:** `/imgs/projects/ebroadmax-preview.webp`

---

## Detailed Requirements:
- 3D perspective tilt effect on card hover (Framer Motion or lightweight tilt logic).
- Live preview external link buttons + GitHub/Architecture modal trigger.
- Role badges (e.g. "Lead Maintainer", "Solo Architect & Full-Stack Developer", "Core Team Contributor").
- Next/Image optimization with placeholder blur loading.

---

## Prompt for Claude (Copy & Paste into Claude)

```markdown
Role: Senior Full-Stack Frontend Engineer (Next.js + Tailwind + Framer Motion).

Task: Build a premier "Featured Projects" showcase section for a developer portfolio.

Specifications:
1. Component: `src/components/sections/Projects.tsx`
2. Projects Data to include:
   - Project 1: **OurPhoneMD** (URL: `https://ourphonemd.com/`)
     - Role: Maintained & Fully Managed (Originally Co-developed with Team).
     - Image: `/imgs/projects/ourphonemd-preview.webp`
     - Tags: ['Full Stack', 'Web Platform', 'System Maintenance', 'UI/UX']
   - Project 2: **Xepco Accountants** (URL: `https://xepcoaccountants.co.uk/`)
     - Role: Complete Solo Development & Ongoing Active Enhancements.
     - Image: `/imgs/projects/xepco-preview.webp`
     - Tags: ['Solo Build', 'Full-Stack Architecture', 'Performance', 'SEO']
   - Project 3: **EBroadMax** (URL: `https://ebroadmax.com/`)
     - Role: Core Team Full-Stack Contributor.
     - Image: `/imgs/projects/ebroadmax-preview.webp`
     - Tags: ['Team Project', 'Frontend/Backend Integration', 'Scalable UI']
3. Visual & Interaction Features:
   - 3D interactive Card Tilt on mouse hover using Framer Motion.
   - Floating badge for project status/role.
   - Direct external link button with hover glow and tooltip.
   - Responsive grid/staggered layout with `next/image` lazy loading.
4. Roman Urdu / English context:
   - "Projects section main ye 3 projects add karo with accurate role descriptions, screenshots public folder `public/imgs/projects/` sy load hon, cards pr 3D tilt hover animation ho, aur live website links integrated hon."

Please write the clean TypeScript code for `Projects.tsx` and project data models.
```
