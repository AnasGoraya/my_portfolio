export interface Project {
  slug: string;
  name: string;
  url: string;
  image: string;
  /** Card cover alt text. */
  imageAlt: string;
  role: string;
  roleBadge: string;
  summary: string;
  tags: string[];
  stack: string[];
  highlights: string[];
}

/**
 * Featured production projects.
 * Images live under `public/imgs/projects/` (PNG previews).
 */
export const PROJECTS: Project[] = [
  {
    slug: "ourphonemd",
    name: "OurPhoneMD",
    url: "https://ourphonemd.com/",
    image: "/imgs/projects/ourphonemd-preview.png",
    imageAlt: "OurPhoneMD — device management platform preview",
    role: "Maintained & Fully Managed",
    roleBadge: "Lead Maintainer",
    summary:
      "Co-created with a development team and now actively managed with full system control — device management workflow, backend integration and responsive UI.",
    tags: ["Full Stack", "Web Platform", "System Maintenance", "UI/UX"],
    stack: ["Modern Web Framework", "Responsive UI", "Backend Integration", "Device Management"],
    highlights: [
      "End-to-end system ownership & maintenance",
      "Device management workflow automation",
      "Responsive, high-conversion UI",
    ],
  },
  {
    slug: "xepco",
    name: "Xepco Accountants",
    url: "https://xepcoaccountants.co.uk/",
    image: "/imgs/projects/xepco-preview.png",
    imageAlt: "Xepco Accountants — accounting practice website preview",
    role: "Complete Solo Development",
    roleBadge: "Solo Architect & Full-Stack Developer",
    summary:
      "Completely designed, engineered and deployed solo. Actively updated and maintained with ongoing feature enhancements for a UK accounting practice.",
    tags: ["Solo Build", "Full-Stack Architecture", "Performance", "SEO"],
    stack: ["Full-Stack Architecture", "High-Conversion UX", "SEO Optimization", "Dynamic CMS"],
    highlights: [
      "Designed, engineered & deployed solo",
      "High-conversion UX + SEO optimization",
      "Ongoing feature enhancements",
    ],
  },
  {
    slug: "ebroadmax",
    name: "EBroadMax",
    url: "https://ebroadmax.com/",
    image: "/imgs/projects/ebroadmax-preview.png",
    imageAlt: "EBroadMax — scalable networking platform teaser",
    role: "Core Team Full-Stack Contributor",
    roleBadge: "Core Team Contributor",
    summary:
      "Active core team contributor focused on frontend responsiveness, backend connectivity, and scalable service delivery for a networking platform.",
    tags: ["Team Project", "Frontend/Backend Integration", "Scalable UI"],
    stack: ["Web Systems", "Scalable Networking Platform", "Modern UI/UX"],
    highlights: [
      "Frontend responsiveness & polish",
      "Backend connectivity & service delivery",
      "Scalable platform architecture",
    ],
  },
];
