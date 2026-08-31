"use client";

import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
}

/**
 * Reactive viewport size + an `isMobile` convenience flag.
 * Used to reduce particle density / disable heavy effects on small screens.
 */
export function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>(() => {
    if (typeof window === "undefined") {
      return { width: 0, height: 0, isMobile: false };
    }
    const width = window.innerWidth;
    return {
      width,
      height: window.innerHeight,
      isMobile: width < 768,
    };
  });

  useEffect(() => {
    let frame = 0;
    const handleResize = () => {
      // Throttle via rAF — one resize computation per frame.
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = window.innerWidth;
        setSize({
          width,
          height: window.innerHeight,
          isMobile: width < 768,
        });
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
