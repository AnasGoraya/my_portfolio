"use client";

import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

/**
 * Decorative, pure-client canvas — excluded from SSR so its JS isn't part of
 * the initial payload. Loads shortly after hydration behind the hero content.
 */
const ParticleBackground = dynamic(
  () =>
    import("@/components/canvas/ParticleBackground").then(
      (m) => m.ParticleBackground,
    ),
  { ssr: false },
);

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Interactive constellation background */}
      <div className="pointer-events-none absolute inset-0">
        <ParticleBackground />
      </div>

      {/* Soft radial glow + top vignette for text legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(720px_circle_at_50%_35%,transparent_30%,hsl(var(--background)/0.85)_100%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-narrow relative z-10 flex flex-col items-center py-32 text-center"
      >
        {/* Status pill */}
        <motion.div variants={item}>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-emerald" />
            </span>
            Available for high-impact roles &amp; systems
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="mt-7 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-6xl lg:text-7xl"
        >
          Full-Stack Engineer{" "}
          <span className="text-gradient-neon">&amp; Backend Architect</span>{" "}
          building for scale
        </motion.h1>

        {/* Value proposition */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I craft ultra-fast web platforms, resilient backend systems, and
          modern interactive interfaces — from clean database design to
          AI-powered features that ship clean and scale hard.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#projects" variant="primary">
            Explore Featured Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            <Sparkles className="h-4 w-4 text-accent" />
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Tech chips — subtle credibility strip */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center justify-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
        >
          {["Next.js", "React", "Laravel", "Python", "Node", "PostgreSQL"].map(
            (t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-card/40 px-2.5 py-1"
              >
                {t}
              </span>
            ),
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
