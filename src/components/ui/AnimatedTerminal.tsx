"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TermLine {
  text: string;
  tone: "dim" | "accent" | "ok" | "warn" | "plain";
  indent?: boolean;
}

const LINES: TermLine[] = [
  { text: "$ deploy --prod", tone: "plain" },
  { text: "▲ Vercel CLI 39.0.0", tone: "dim" },
  { text: "▸ Building Next.js (App Router)…", tone: "dim" },
  { text: "✓ Compiled successfully in 2.4s", tone: "ok", indent: true },
  { text: "✓ Generated static pages (6/6)", tone: "ok", indent: true },
  { text: "♢ First Load JS ~140 kB", tone: "accent", indent: true },
  { text: "▲ Uploading build output…", tone: "dim" },
  { text: "✓ Deployment ready — https://anasnazir.vercel.app", tone: "warn", indent: true },
  { text: "$ ls capabilities/", tone: "plain" },
  { text: "backend.node  frontend.next  db.postgres  cloud.vercel", tone: "accent", indent: true },
];

const TONE_CLASS: Record<TermLine["tone"], string> = {
  dim: "text-zinc-500",
  accent: "text-neon-emerald",
  ok: "text-neon-emerald",
  warn: "text-cyan-300",
  plain: "text-zinc-300",
};

const LINE_DELAY = 420; // ms between lines

/**
 * Animated CLI card — progressively reveals a staged deployment log line by
 * line with a blinking caret at the active line, then loops.
 * Pure DOM paint (no layout shift): lines stack top-down in flex flow.
 */
export function AnimatedTerminal({ className }: { className?: string }) {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    setVisible(1);
    let lines = 1;
    const id = setInterval(() => {
      lines += 1;
      setVisible(Math.min(lines, LINES.length));
      if (lines >= LINES.length) {
        // brief hold, then restart
        setTimeout(() => {
          lines = 1;
          setVisible(1);
        }, 1600);
      }
    }, LINE_DELAY);

    return () => clearInterval(id);
  }, []);

  const activeIdx = Math.min(visible, LINES.length) - 1;

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-xl border border-border bg-[#0b0c0f] font-mono text-[12.5px] leading-relaxed shadow-card",
        className,
      )}
    >
      {/* Terminal chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[11px] text-zinc-500">deploy — zsh</span>
      </div>

      <div className="flex-1 space-y-0.5 overflow-hidden px-4 py-3">
        {LINES.slice(0, visible).map((line, i) => (
          <div key={i} className="flex items-start">
            <span
              className={cn(
                "whitespace-pre-wrap",
                TONE_CLASS[line.tone],
                line.indent && "pl-4",
              )}
            >
              {line.text}
            </span>
            {i === activeIdx && (
              <span className="ml-0.5 mt-[3px] inline-block h-3.5 w-[7px] animate-pulse bg-neon-emerald" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
