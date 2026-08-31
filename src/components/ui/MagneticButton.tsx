"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

interface MagneticButtonProps
  extends Omit<HTMLMotionProps<"a">, "children" | "ref"> {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  /** Magnetic pull strength multiplier. */
  strength?: number;
}

/**
 * Glassmorphic CTA with a magnetic hover pull.
 * The button gently gravitates toward the cursor and springs back on leave.
 */
export function MagneticButton({
  children,
  variant = "primary",
  href = "#",
  strength = 0.35,
  className,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300";
  const variants: Record<Variant, string> = {
    primary: cn(
      base,
      "text-[#05070a]",
      "bg-gradient-to-r from-neon-emerald to-neon-cyan",
      "shadow-[0_0_24px_rgba(43,242,163,0.35)]",
      "hover:shadow-[0_0_36px_rgba(43,242,163,0.55)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    ),
    ghost: cn(
      base,
      "border border-border bg-card/60 backdrop-blur-xl text-foreground",
      "hover:border-accent/60 hover:bg-card/90",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    ),
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={cn(variants[variant], className)}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
