"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Spotlight glow color (rgba). */
  glow?: string;
}

/**
 * Card with a cursor-tracking radial spotlight and a glowing border beam.
 * The spotlight follows the mouse via CSS custom properties set on move —
 * GPU-friendly (transform/opacity only, no layout thrash).
 */
export function SpotlightCard({
  children,
  className,
  glow = "rgba(43,242,163,0.16)",
  ...rest
}: SpotlightCardProps & React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-xl transition-colors duration-300 hover:border-accent/40",
        className,
      )}
      style={{ ["--spot-glow" as string]: glow }}
      {...rest}
    >
      {/* Cursor-tracking spotlight halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--spot-x, 50%) var(--spot-y, 50%), var(--spot-glow), transparent 70%)",
        }}
      />
      {/* Subtle top border beam on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-accent/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
        style={{ transformOrigin: "center" }}
      />

      <div className="relative">{children}</div>
    </div>
  );
}
