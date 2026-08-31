"use client";

import { AnimatePresence } from "framer-motion";

/**
 * App-wide client providers.
 * Extend here as the app grows: theme context, cursor glow, etc.
 *
 * `AnimatePresence` wraps page-level transitions (Task 6). Children are
 * always rendered so SSR HTML stays complete for SEO and first paint —
 * the Preloader owns the initial cover instead.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
