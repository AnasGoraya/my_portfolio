"use client";

import { Boxes, Database, Layers, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const SERVICES = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    desc: "End-to-end web platforms — Next.js, React & Laravel — from design to deployment and beyond.",
  },
  {
    icon: Boxes,
    title: "Custom APIs & Microservices",
    desc: "REST/GraphQL backends, third-party integrations, and event-driven service architectures.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    desc: "Schema design, indexing, caching layers, and performance tuning for data-heavy systems.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    desc: "Practical AI-powered features — from intelligent search to automation — built into real products.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Core Services"
          title="What I can build for you"
          description="Services grounded in production experience — not just skills on a page."
        />

        <ScrollReveal variant="stagger" className="mt-14">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <ScrollReveal.Item key={s.title}>
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-xl transition-colors hover:border-accent/40">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </article>
              </ScrollReveal.Item>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
