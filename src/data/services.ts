import {
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CodeXml,
  Megaphone,
  PanelsTopLeft,
  Search,
  Shapes,
} from "lucide-react";
import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    title: "Websites & Digital Presence",
    description:
      "Professional websites, landing pages, and tourism portals that help businesses build credibility and capture inquiries.",
    bullets: [
      "Custom landing pages & portfolios",
      "Tourism & booking-ready sites",
      "Event & conference platforms",
      "SEO & domain setup optimization",
    ],
    icon: PanelsTopLeft,
    accentClass: "shadow-[#72f0a8]/10 hover:border-[#72f0a8]/40 border-white/10 hover:text-[#72f0a8]",
  },
  {
    title: "Software & Business Systems",
    description:
      "Custom dashboards, client portals, internal tools, and web applications that improve business operations.",
    bullets: [
      "Operational admin dashboards",
      "Secure client portals",
      "Custom CRM & booking tools",
      "API integrations & workflows",
    ],
    icon: CodeXml,
    accentClass: "shadow-[#22d3ee]/10 hover:border-[#22d3ee]/40 border-white/10 hover:text-[#22d3ee]",
  },
  {
    title: "AI Automation",
    description:
      "Practical assistants, workflow automations, and AI content systems that reduce manual work and speed up output.",
    bullets: [
      "Custom AI assistants & bots",
      "Workflow & document automation",
      "AI content generation tools",
      "Internal knowledge bases",
    ],
    icon: Bot,
    accentClass: "shadow-[#a78bfa]/10 hover:border-[#a78bfa]/40 border-white/10 hover:text-[#a78bfa]",
  },
  {
    title: "Product Design & MVPs",
    description:
      "Product strategy, interactive prototypes, user flows, and launch-ready MVP development for startups.",
    bullets: [
      "Product strategy & scoping",
      "High-fidelity UI/UX design",
      "Interactive clickable prototypes",
      "First-version MVP builds",
    ],
    icon: Shapes,
    accentClass: "shadow-[#d9ff73]/10 hover:border-[#d9ff73]/40 border-white/10 hover:text-[#d9ff73]",
  },
  {
    title: "Brand Identity & Design",
    description:
      "Logos, brand books, pitch decks, and digital collateral that make your business look like a leader.",
    bullets: [
      "Custom logo & asset packs",
      "Corporate brand system guidelines",
      "Pitch decks & profiles",
      "Social media design kits",
    ],
    icon: BriefcaseBusiness,
    accentClass: "shadow-[#74930d]/10 hover:border-[#74930d]/40 border-white/10 hover:text-[#74930d]",
  },
  {
    title: "Digital Marketing & Growth",
    description:
      "Marketing campaigns, lead generation funnels, search visibility, and conversion-oriented layouts.",
    bullets: [
      "Lead generation funnel maps",
      "Campaign planning & collateral",
      "SEO & brand presence growth",
      "Performance reporting",
    ],
    icon: Megaphone,
    accentClass: "shadow-[#60a5fa]/10 hover:border-[#60a5fa]/40 border-white/10 hover:text-[#60a5fa]",
  },
  {
    title: "Research & Strategy",
    description:
      "Market research, competitor audits, and infrastructure analysis that map scattered ideas to a structured plan.",
    bullets: [
      "Market & audience research",
      "Competitor digital audits",
      "User journey analysis",
      "Strategic tech system roadmaps",
    ],
    icon: Search,
    accentClass: "shadow-[#fdba74]/10 hover:border-[#fdba74]/40 border-white/10 hover:text-[#fdba74]",
  },
  {
    title: "Event Digital Partner Services",
    description:
      "Event websites, holding screens, sponsor visual systems, and post-event recaps that elevate major events.",
    bullets: [
      "Dynamic event website templates",
      "Sponsor & speaker visual sheets",
      "Screen displays & presentation slides",
      "Social media recap content packs",
    ],
    icon: ChartNoAxesCombined,
    accentClass: "shadow-white/15 hover:border-white/40 border-white/10 hover:text-white",
  },
];
