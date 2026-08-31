"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, clipReveal, scaleGlow, VIEWPORT } from "@/lib/animations";
import { cn } from "@/lib/utils";

export type RevealVariant = "fadeUp" | "stagger" | "clip" | "scaleGlow";

const VARIANTS: Record<RevealVariant, typeof fadeUp> = {
  fadeUp,
  stagger: staggerContainer,
  clip: clipReveal,
  scaleGlow,
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  /** For stagger parents — children use `ScrollRevealItem` to inherit. */
}

/**
 * Lightweight scroll-reveal wrapper.
 * Triggers once when the element scrolls into view (GPU-friendly
 * transform/opacity only). Use `variant="stagger"` on the parent and
 * `ScrollReveal.Item` for children.
 */
export function ScrollReveal({
  children,
  className,
  variant = "fadeUp",
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Child unit of a stagger container. */
function Item({
  children,
  className,
  variant = "fadeUp",
}: ScrollRevealProps) {
  return (
    <motion.div variants={VARIANTS[variant]} className={cn(className)}>
      {children}
    </motion.div>
  );
}

ScrollReveal.Item = Item;
