"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { usePreloader } from "@/hooks/use-preloader";

/** Signature easing — smooth deceleration, used across the app. */
const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/*  Animated geometric brand logo                                     */
/*  A minimalist "</>" code mark with a glowing stroke-draw sequence. */
/* ------------------------------------------------------------------ */
const PATH_VARIANTS: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.8, ease: EASE, delay: i * 0.18 },
      opacity: { duration: 0.3, delay: i * 0.18 },
    },
  }),
};

function AnimatedLogo() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Ambient pulsing rings behind the mark */}
      <motion.span
        aria-hidden
        className="absolute h-28 w-28 rounded-full border border-neon-emerald/30"
        initial={{ scale: 0.85, opacity: 0.6 }}
        animate={{ scale: [0.85, 1.25], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.span
        aria-hidden
        className="absolute h-28 w-28 rounded-full border border-neon-cyan/25"
        initial={{ scale: 0.85, opacity: 0.5 }}
        animate={{ scale: [0.85, 1.35], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
      />

      <motion.svg
        viewBox="0 0 120 120"
        width="72"
        height="72"
        fill="none"
        aria-label="Anas Nazir"
        className="relative"
      >
        <defs>
          <linearGradient id="preloader-neon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2bf2a3" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>

        {/* Left angle bracket */}
        <motion.path
          d="M46 34 24 60 46 86"
          stroke="url(#preloader-neon)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={PATH_VARIANTS}
          custom={0}
          initial="hidden"
          animate="show"
          style={{ filter: "drop-shadow(0 0 6px rgba(43,242,163,0.6))" }}
        />
        {/* Right angle bracket */}
        <motion.path
          d="M74 34 96 60 74 86"
          stroke="url(#preloader-neon)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={PATH_VARIANTS}
          custom={1}
          initial="hidden"
          animate="show"
          style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,0.6))" }}
        />
        {/* Center slash */}
        <motion.path
          d="M68 30 52 90"
          stroke="#e6e9ef"
          strokeWidth="4"
          strokeLinecap="round"
          variants={PATH_VARIANTS}
          custom={2}
          initial="hidden"
          animate="show"
        />
      </motion.svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Preloader overlay                                                 */
/* ------------------------------------------------------------------ */
export function Preloader() {
  const { progress, show, done } = usePreloader();

  if (done) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: EASE }}
          aria-hidden={!show}
        >
          {/* Faint grid backdrop */}
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 mask-fade-bottom" />

          <div className="relative flex flex-col items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <AnimatedLogo />
            </motion.div>

            {/* Percentage counter */}
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                Loading Experience
              </span>

              <span className="font-mono text-4xl font-medium tabular-nums text-zinc-100">
                <motion.span
                  className="text-gradient-neon"
                  animate={{ opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                >
                  {progress}
                </motion.span>
                <span className="text-zinc-600">%</span>
              </span>

              {/* Neon glowing progress bar */}
              <div className="relative h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-neon-emerald to-neon-cyan shadow-glow"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
