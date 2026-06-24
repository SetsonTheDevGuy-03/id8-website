import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    title: "Invest in Africa Trade Expo & Business Summit 2026",
    slug: "invest-in-africa-expo-2026",
    category: "Event Digital Partner",
    summary:
      "ID8 Technologies supported the summit as a core marketing, design, and digital partner, contributing to visual communication, sponsor visibility, and post-event recaps across a three-day summit.",
    challenge:
      "The major business summit required consistent, high-volume digital communication and assets for panels, sponsors, gala events, and fast social media updates across a fast-paced three days.",
    solution:
      "ID8 established an agile design workflow, launching an integrated system for holding screens, speaker slide profiles, partner branding collateral, and dynamic post-event thank-you assets.",
    deliverables: [
      "Speaker & panel screen layouts",
      "Sponsor & partner media packs",
      "Gala award holding graphics",
      "Social media post-event updates",
      "Summit digital content kits",
    ],
    tags: ["Event Digital", "Branding", "Social Content", "Screen Visuals"],
    imageUrl: "/images/expo-case-study-1.jpg",
    ctaText: "Explore Event Work",
    timeline: "3 Days Live (2 Weeks Prep)",
    stack: ["Figma", "Illustrator", "Next.js", "After Effects"],
  },
  {
    title: "Now Now Tours & Safaris Portal",
    slug: "nownow-tours-safaris",
    category: "Tourism Website",
    summary:
      "A high-fidelity booking-ready tourism platform designed to highlight immersive Namibian travel packages, itineraries, and booking capture flows.",
    challenge:
      "Tourism clients in the region suffer from generic, slow-loading templates that fail to capture premium international bookings or present visual itineraries effectively.",
    solution:
      "Built a modern, ultra-fast web presence leveraging high-performance static rendering, clean booking paths, custom responsive maps, and structured itinerary builders.",
    deliverables: [
      "Responsive tourism website",
      "Itinerary management engine",
      "Direct booking inquiry system",
      "Namibia travel guide assets",
    ],
    tags: ["Websites & Presence", "Tourism Tech", "Itinerary UX", "SEO"],
    imageUrl: "/images/nownow-preview.jpg",
    ctaText: "View Live Portal",
    timeline: "4 Weeks",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Mapbox"],
  },
  {
    title: "ID8 P1 App Concept",
    slug: "p1-app-concept",
    category: "FinTech & Travel MVP",
    summary:
      "A forward-looking digital product concept exploring payment UX, currency conversions, travel wallets, and API-ready fintech prototypes.",
    challenge:
      "Regional travelers lack structured, low-friction digital interfaces that connect merchant payments, travel ticketing, and KYC validation in one app.",
    solution:
      "Designed an elegant, high-fidelity mobile prototype demonstrating wallet onboarding, instant money splits, offline QR verification, and fintech-ready API interactions.",
    deliverables: [
      "Mobile product strategy",
      "Clickable UI/UX prototype",
      "KYC/AML validation screens",
      "Fintech integration roadmap",
    ],
    tags: ["Product Design & MVPs", "FinTech UX", "API Prototypes", "Labs"],
    imageUrl: "/images/p1-app-preview.jpg",
    ctaText: "View Interactive Prototype",
    timeline: "Continuous Labs Build",
    stack: ["React Native", "TypeScript", "Tailwind CSS", "Supabase Auth"],
  },
  {
    title: "Business Website Systems",
    slug: "business-website-systems",
    category: "Corporate & Enterprise Presence",
    summary:
      "A modular portfolio of secure corporate websites designed for regional consultancies, institutions, and service companies looking to capture B2B inquiries.",
    challenge:
      "Small and mid-sized Namibian enterprises frequently lose out on tenders and serious partnerships due to outdated, non-responsive, and unsecure web profiles.",
    solution:
      "Delivered a collection of high-performance corporate platforms built with static site generation, airtight security, structural SEO, and robust lead-routing contact funnels.",
    deliverables: [
      "Static enterprise websites",
      "Structured inquiry forms",
      "Secure hosting architectures",
      "Digital capability profiles",
    ],
    tags: ["Websites & Presence", "Corporate Web", "Security", "Lead Capture"],
    imageUrl: "/images/founder.jpg",
    ctaText: "Request Capability Deck",
    timeline: "2 Weeks Per Build",
    stack: ["Next.js", "Tailwind CSS", "Resend API", "Vercel"],
  },
];
