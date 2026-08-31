/**
 * Home page — assembled from modular section components.
 *
 *   - Preloader     — mounted in root layout (Task 2)
 *   - Header        — nav + theme toggle + scroll-spy
 *   - Hero          — interactive canvas background (Task 3)
 *   - About         — timeline & stats (Task 6)
 *   - BentoSkills   — engineering capabilities (Task 4)
 *   - Projects      — featured production apps (Task 5, code-split)
 *   - Services      — core offerings (Task 6)
 *   - Contact       — inquiry form + magnetic CTA (Task 6, code-split)
 *   - Footer        — links & socials (Task 6)
 *
 * Heavy interactive sections (Projects modal, Contact form) are code-split
 * with next/dynamic so their JS loads on demand, keeping under the <150KB
 * first-load budget. SSR is preserved so content stays in the HTML for SEO.
 */
import dynamic from "next/dynamic";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { BentoSkills } from "@/components/sections/BentoSkills";
import { Footer } from "@/components/sections/Footer";

const Projects = dynamic(
  () => import("@/components/sections/Projects").then((m) => m.Projects),
  { loading: () => <SectionSkeleton label="Loading projects…" /> },
);

const Services = dynamic(
  () => import("@/components/sections/Services").then((m) => m.Services),
  { loading: () => <SectionSkeleton label="Loading services…" /> },
);

const Contact = dynamic(
  () => import("@/components/sections/Contact").then((m) => m.Contact),
  { loading: () => <SectionSkeleton label="Loading contact…" /> },
);

function SectionSkeleton({ label }: { label: string }) {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Header />
      <Hero />
      <About />
      <BentoSkills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
