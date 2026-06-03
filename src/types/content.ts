import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  bullets?: string[];
  icon: LucideIcon;
  accentClass?: string;
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  tags: string[];
  imageUrl: string;
  ctaText: string;
  timeline?: string;
  stack?: string[];
};

export type Industry = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type EngagementModel = {
  title: string;
  description: string;
  features: string[];
  priceRange?: string;
  badge?: string;
};
