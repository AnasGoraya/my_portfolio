"use client";

import { GraduationCap, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TIMELINE = [
  {
    icon: GraduationCap,
    period: "2021 — 2025",
    title: "BSc Computer Science",
    place: "University of Central Punjab",
    note: "Foundations in software engineering, databases & systems design.",
  },
  {
    icon: Briefcase,
    period: "2023 — Ongoing",
    title: "Remote Full-Stack Engineer",
    place: "OBH Institute",
    note: "Building and maintaining production web platforms end-to-end.",
  },
  {
    icon: Briefcase,
    period: "2024 — Ongoing",
    title: "Core Team Contributor",
    place: "EBroadMax & OurPhoneMD",
    note: "Frontend polish, backend connectivity & scalable service delivery.",
  },
];

const STATS = [
  { value: "10+", label: "Projects shipped" },
  { value: "3", label: "Live products" },
  { value: "100%", label: "Code quality focus" },
  { value: "AI", label: "Certified specialist" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="About & Milestones"
          title="Engineer, architect, problem-solver"
          description="From academic foundations to production systems — a track record of shipping software that works at scale."
        />

        {/* Experience / education — clip-path sweep reveal */}
        <ScrollReveal variant="stagger" className="mt-14">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {TIMELINE.map((item) => (
              <ScrollReveal.Item key={item.title}>
                <article className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-xl transition-colors hover:border-accent/40">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {item.period}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">{item.place}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.note}
                  </p>
                </article>
              </ScrollReveal.Item>
            ))}
          </div>
        </ScrollReveal>

        {/* Stats strip */}
        <ScrollReveal className="mt-10">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card/50 p-6 sm:grid-cols-4 sm:p-8">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 text-center">
                <span className="text-gradient-neon font-display text-3xl font-bold sm:text-4xl">
                  {s.value}
                </span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
