"use client";

import { useEffect, useState } from "react";

/** Sections tracked by the nav (ids must exist in the page). */
const SECTION_IDS = ["home", "about", "skills", "projects", "services", "contact"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

/**
 * Highlights the section currently in view (for header scroll-spy).
 * Uses an IntersectionObserver with a top bias so the leading section wins
 * as you scroll.
 */
export function useScrollSpy(): SectionId {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the entry closest to the top of the viewport.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const top = visible[0];
        if (top && top.target.id) {
          const id = top.target.id as SectionId;
          if (SECTION_IDS.includes(id)) setActive(id);
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
