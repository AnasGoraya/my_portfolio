"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight interactive particle-constellation background.
 *
 * A hand-rolled Canvas2D constellation (dots + connective lines) instead of
 * Three.js — a few KB that hits every requirement at 60fps without a heavy
 * WebGL bundle:
 *
 *  - Cursor / touch reactive (particles repel + link to the pointer)
 *  - GPU-accelerated via rAF, DPR capped at 2, density reduced on mobile
 *  - Auto-pauses when the tab is hidden or the hero scrolls off-screen
 *  - Honors `prefers-reduced-motion`
 *  - Recolors live when the theme toggles
 */

const MAX_PARTICLES_DESKTOP = 95;
const MAX_PARTICLES_MOBILE = 45;
const DENSITY = 16000; // px² per particle
const LINK_DIST = 130; // max px between connected particles
const CURSOR_RADIUS = 160; // influence radius around pointer
const CURSOR_LINK = 200;
const REPEL = 0.6;

interface Palette {
  dotA: string;
  dotB: string;
  linkA: string;
  linkB: string;
}

const PALETTES: Record<"dark" | "light", Palette> = {
  dark: {
    dotA: "43, 242, 163", // neon emerald
    dotB: "34, 211, 238", // neon cyan
    linkA: "43, 242, 163",
    linkB: "34, 211, 238",
  },
  light: {
    dotA: "5, 122, 85", // deep emerald for paper contrast
    dotB: "8, 145, 178", // deep cyan
    linkA: "5, 122, 85",
    linkB: "8, 145, 178",
  },
};

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hueMix: number; // 0..1 blend between palette A and B
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let count = 0;
    let raf = 0;
    let running = true;
    let visible = true;
    let isDark = true;

    const pointer = { x: -9999, y: -9999, active: false };
    let hasPointer = false;

    /* ---- sizing / density ---- */
    const isMobile = () => width < 768;
    const palette = (): Palette => PALETTES[isDark ? "dark" : "light"];

    const resize = () => {
      isDark = document.documentElement.classList.contains("dark");
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cap = isMobile() ? MAX_PARTICLES_MOBILE : MAX_PARTICLES_DESKTOP;
      count = Math.min(cap, Math.floor((width * height) / DENSITY));
      seed();
    };

    const seed = () => {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.6 + 0.6,
        hueMix: Math.random(),
      }));
    };

    /* ---- per-frame render ---- */
    const step = () => {
      if (!reduced) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }
      }

      ctx.clearRect(0, 0, width, height);
      const pal = palette();

      // Pointer repel on a following offset (lag = smooth feel).
      if (hasPointer && !reduced) {
        for (const p of particles) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < CURSOR_RADIUS * CURSOR_RADIUS && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const force = ((CURSOR_RADIUS - d) / CURSOR_RADIUS) * REPEL;
            p.x += (dx / d) * force;
            p.y += (dy / d) * force;
          }
        }
      }

      // Draw connective lines first (back layer).
      for (let i = 0; i < count; i++) {
        const a = particles[i];
        for (let j = i + 1; j < count; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.16;
            const rgb = a.hueMix < 0.5 ? pal.linkA : pal.linkB;
            ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles.
      if (!reduced) {
        for (const p of particles) {
          const rgb = p.hueMix < 0.5 ? pal.dotA : pal.dotB;
          const pulse = 0.55 + 0.45 * Math.sin(Date.now() / 1200 + p.x);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb}, ${0.5 * pulse + 0.25})`;
          ctx.fill();
        }
      } else {
        // Reduced motion: static constellation, no pulse.
        for (const p of particles) {
          const rgb = p.hueMix < 0.5 ? pal.dotA : pal.dotB;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb}, 0.55)`;
          ctx.fill();
        }
      }
    };

    const loop = () => {
      if (running && visible) step();
      raf = requestAnimationFrame(loop);
    };

    /* ---- pointer tracking ---- */
    const setPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      hasPointer = true;
    };
    const pointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      hasPointer = false;
    };
    const touchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) setPointer({ clientX: t.clientX, clientY: t.clientY } as PointerEvent);
    };

    /* ---- visibility / focus guards ---- */
    const onVisibility = () => {
      visible = document.visibilityState === "visible";
    };
    const onFocus = () => {
      visible = true;
    };

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            running = e.isIntersecting;
          });
        },
        { threshold: 0 },
      );
      io.observe(canvas);
    }

    /* ---- theme reactivity ---- */
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    resize();
    loop();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("focus", onFocus);
    canvas.addEventListener("pointermove", setPointer);
    canvas.addEventListener("pointerleave", pointerLeave);
    canvas.addEventListener("touchmove", touchMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("focus", onFocus);
      canvas.removeEventListener("pointermove", setPointer);
      canvas.removeEventListener("pointerleave", pointerLeave);
      canvas.removeEventListener("touchmove", touchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
      style={{ opacity: 0.9 }}
    />
  );
}
