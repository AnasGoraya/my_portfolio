"use client";

import { useEffect, useRef, useState } from "react";

/** sessionStorage key — preloader only plays once per browser session. */
const SESSION_KEY = "anasz-preloader-shown";
/** Total load animation duration in ms. */
const DURATION = 1800;
/** Small settle pause at 100% before the exit transition starts. */
const SETTLE = 320;

/**
 * Drives the landing preloader lifecycle.
 *
 * Returns:
 *  - `show`:   should the overlay be rendered right now
 *  - `progress`: 0→100 percentage for the counter / progress bar
 *  - `done`:   everything finished — caller may fully unmount
 *
 * On a returning visit (sessionStorage flag set) the preloader is skipped
 * entirely so re-loads never annoy the user again.
 */
export function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Returning visitor — skip straight to done, no overlay or flash.
    if (sessionStorage.getItem(SESSION_KEY)) {
      setProgress(100);
      setDone(true);
      return;
    }

    // Claim the key synchronously to guard against double runs.
    sessionStorage.setItem(SESSION_KEY, "1");
    setShow(true);

    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(100, (elapsed / DURATION) * 100);
      setProgress(Math.round(p));

      if (p < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => {
          setShow(false);
          setDone(true);
        }, SETTLE);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Lock scroll while the preloader is on screen, restore afterwards.
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  return { progress, show, done };
}
