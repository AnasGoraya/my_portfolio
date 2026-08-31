import type { Variants } from "framer-motion";

/** Signature easing — smooth deceleration across the app. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Reusable scroll-reveal animation variants.
 * transform/opacity ONLY — everything runs on the GPU compositor at 60fps.
 */

/** Simple Y-axis fade-up for headings, paragraphs, chips. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

/** Parent stagger container — children reveal on a configurable delay. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/** Modern bottom-to-top clip-path reveal (image mockups / panels). */
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0.6 },
  show: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

/** Subtle scale-up with a soft glow fade for cards. */
export const scaleGlow: Variants = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(6px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

/**
 * Standard viewport config: trigger once, start slightly before fully
 * visible, so entrances feel responsive without looping on mobile scroll.
 */
export const VIEWPORT = { once: true, margin: "-100px" } as const;
