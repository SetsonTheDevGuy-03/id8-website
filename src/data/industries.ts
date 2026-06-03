import {
  Building2,
  CalendarDays,
  Compass,
  CreditCard,
  Globe,
  Landmark,
  Rocket,
  Store,
} from "lucide-react";
import type { Industry } from "@/types/content";

export const industries: Industry[] = [
  {
    title: "Small Businesses",
    description:
      "Modern websites, brand identity assets, and digital marketing setups to establish professional credibility, outshine local competitors, and capture inbound client leads.",
    icon: Store,
  },
  {
    title: "Tourism & Hospitality",
    description:
      "Visual tour portals, smooth travel itinerary builders, package calendars, and conversion-optimized booking flows tailored to premium international and regional visitors.",
    icon: Compass,
  },
  {
    title: "Events & Conferences",
    description:
      "Fully integrated event packages: branding design, live screen presentations, presenter and speaker holding assets, sponsor placement systems, and post-summit recap content.",
    icon: CalendarDays,
  },
  {
    title: "Startups & Founders",
    description:
      "Accelerated product design sprints, clickable interactive UI prototypes, user flows, high-fidelity landing pages, and launch-ready MVP development to secure funding.",
    icon: Rocket,
  },
  {
    title: "NGOs & Institutions",
    description:
      "Airtight data presentation platforms, public report libraries, clean dashboard systems, dynamic research publications, and professional digital profiles.",
    icon: Globe,
  },
  {
    title: "FinTech & Financial Services",
    description:
      "Secure payment-flow mockups, wallet interfaces, merchant dashboard concepts, KYC/KYB flow prototypes, and compliance-minded API design specifications.",
    icon: CreditCard,
  },
  {
    title: "Corporate Teams",
    description:
      "Optimized internal applications, security-focused operational dashboards, custom scheduling boards, task-automation hooks, and reliable B2B digital assets.",
    icon: Building2,
  },
  {
    title: "Government & Public Sector",
    description:
      "Airtight informational portals, public notices libraries, secure communication hubs, data dashboards, and digitized public service design roadmaps.",
    icon: Landmark,
  },
];
