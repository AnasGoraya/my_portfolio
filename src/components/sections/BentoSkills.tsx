"use client";

import {
  ArrowRight,
  Boxes,
  Database,
  Gauge,
  GitBranch,
  Layers,
  Server,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedTerminal } from "@/components/ui/AnimatedTerminal";

/** Small chippy tag */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}

/** Card 1: Backend / API flow micro-visual */
function BackendFlow() {
  const nodes = ["Client", "API", "Services", "DB"];
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      {nodes.map((n, i) => (
        <span key={n} className="flex items-center gap-2">
          <span className="rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-xs text-neon-emerald">
            {n}
          </span>
          {i < nodes.length - 1 && (
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          )}
        </span>
      ))}
    </div>
  );
}

/** Card 2: Frontend mini-widget */
function FrontendWidget() {
  return (
    <div className="mt-6 space-y-2">
      {[
        { label: "Server Components", val: 96, color: "bg-neon-emerald" },
        { label: "Motion 60fps", val: 90, color: "bg-neon-cyan" },
        { label: "Lighthouse", val: 95, color: "bg-neon-emerald" },
      ].map((m) => (
        <div key={m.label}>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">{m.label}</span>
            <span className="font-mono text-foreground">{m.val}</span>
          </div>
          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className={`h-full ${m.color} rounded-full`}
              style={{ width: `${m.val}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/** Card 3: Database / reliability bullets */
const DB_BULLETS = [
  "Indexed query paths & normalized schemas",
  "Redis + materialized-view caching layers",
  "Replication, backups & uptime SLAs",
  "Type-safe state management",
];

export function BentoSkills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-narrow">
        {/* Radial glow behind section */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-full -translate-x-1/2 bg-[radial-gradient(600px_circle_at_50%_0%,hsl(var(--accent)/0.10),transparent_65%)]"
        />

        <SectionHeading
          eyebrow="Engineering Capabilities"
          title="A full-stack system, not a badge list"
          description="Architecture, performance and delivery — the systems I design, build and run in production."
        />

        <ScrollReveal variant="stagger" className="mt-14">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Card 1 — Backend (wide) */}
            <ScrollReveal.Item className="md:col-span-2">
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-6 sm:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Boxes className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    Backend Systems &amp; APIs
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Microservices, REST/GraphQL and event-driven pipelines built
                    to stay fast under real load.
                  </p>
                  <BackendFlow />
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Tag>NestJS</Tag>
                    <Tag>Laravel</Tag>
                    <Tag>Python</Tag>
                    <Tag>MySQL</Tag>
                    <Tag>REST/GraphQL</Tag>
                    <Tag>Redis</Tag>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal.Item>

            {/* Card 2 — Frontend */}
            <ScrollReveal.Item>
              <SpotlightCard glow="rgba(34,211,238,0.16)" className="h-full">
                <div className="flex h-full flex-col p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                    <Layers className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    Modern Frontend
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    App Router, serverside-first rendering and buttery motion.
                  </p>
                  <FrontendWidget />
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Tag>Next.js</Tag>
                    <Tag>React</Tag>
                    <Tag>Tailwind</Tag>
                    <Tag>Framer Motion</Tag>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal.Item>

            {/* Card 3 — Database / reliability */}
            <ScrollReveal.Item>
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Database className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    Reliability &amp; Data
                  </h3>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {DB_BULLETS.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Gauge className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Tag>PostgreSQL</Tag>
                    <Tag>Indexing</Tag>
                    <Tag>Caching</Tag>
                    <Tag>Backups</Tag>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal.Item>

            {/* Card 4 — Terminal (wide) */}
            <ScrollReveal.Item className="md:col-span-2">
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-6 sm:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Server className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    Delivery &amp; Cloud
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Zero-config CI/CD, caching strategies and clean Git
                    workflows — live from the deploy log.
                  </p>
                  <AnimatedTerminal className="mt-6 min-h-[220px]" />
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Tag>
                      <GitBranch className="mr-1 inline h-3 w-3" />
                      Vercel
                    </Tag>
                    <Tag>Git</Tag>
                    <Tag>Edge caching</Tag>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal.Item>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
