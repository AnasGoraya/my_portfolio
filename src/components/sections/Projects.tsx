"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CircleAlert, ExternalLink, X } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

// Tiny inline 1x1 blur placeholder for next/image eager blur-up.
const BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M8AAAMBAQDJ/pLvAAAAAElFTkSuQmCC";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Featured Work"
          title="Production systems, live in the wild"
          description="Three products I've designed, built and shipped — roles from solo architect to core team contributor."
        />

        <ScrollReveal variant="stagger" className="mt-14">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ScrollReveal.Item key={project.slug} className="h-full">
              <TiltCard className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-xl transition-colors duration-300 hover:border-accent/40">
                {/* Cover */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR}
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span
                    className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md"
                    style={{ transform: "translateZ(28px)" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-emerald" />
                    {project.roleBadge}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5" style={{ transform: "translateZ(12px)" }}>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.name} — ${project.url}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-accent">
                    {project.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="mt-auto flex items-center gap-3 pt-5">
                    <button
                      type="button"
                      onClick={() => setActive(project)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent/20"
                    >
                      Architecture
                      <CircleAlert className="h-3.5 w-3.5" />
                    </button>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      Live Site
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            </TiltCard>
            </ScrollReveal.Item>
          ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Architecture modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close project details"
              onClick={() => setActive(null)}
              className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${active.name} architecture details`}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card p-7 text-foreground shadow-card"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-medium text-accent">
                {active.roleBadge}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">{active.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{active.summary}</p>

              <div className="mt-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Highlights
                </p>
                <ul className="mt-2 space-y-2">
                  {active.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Stack
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {active.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-emerald to-neon-cyan px-5 py-3 text-sm font-semibold text-[#05070a]"
              >
                Visit {active.name}
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
