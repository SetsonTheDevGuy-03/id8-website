export interface Service {
  id: string;
  title: string;
  category: string;
  summary: string;
  bullets: string[];
  outcomes: string[];
  subServices: string[];
}

export const services: Service[] = [
  {
    id: "software-systems",
    title: "Software & Business Systems",
    category: "Engineering & Logic",
    summary: "Bespoke internal dashboards, client portals, and administrative tools that consolidate scattered files and automate process tracking.",
    subServices: [
      "Administrative Operations Dashboards",
      "Secured Client Portals & Document Hubs",
      "Custom CRM-Lite & Lead Routing Pipelines",
      "Booking Processors & Inventory Trackers",
      "Automated PDF Invoice & Report Generators"
    ],
    bullets: [
      "Automated operations state instead of messy Excel worksheets",
      "Role-based secure views for staffs, leaders, and client users",
      "Unified access point for critical project briefs, designs, and metrics"
    ],
    outcomes: [
      "Eliminate manual administrative lookup hours completely",
      "Centralize workflow visibility for regional coordinate offices",
      "Scale from casual freelance tasks into serious corporate systems"
    ]
  },
  {
    id: "digital-presence",
    title: "Websites & Digital Presence",
    category: "Presence & Growth",
    summary: "Professional, SEO-optimized, highly responsive web interfaces that turn attention into qualified business opportunities.",
    subServices: [
      "Custom Business & Corporate Portals",
      "Interactive One-Page Landing Funnels",
      "Tourism & Hospitality Booking Engines",
      "NGO & Institutional Information Platforms",
      "Professional Persona Portfolios"
    ],
    bullets: [
      "Complete client onboarding & inquiry pipelines built internally",
      "High-speed loading with optimized asset delivery & clean layouts",
      "Call-to-action routing widgets and conversion-optimized layouts",
      "Semantic SEO configurations for local Namibian and global search space"
    ],
    outcomes: [
      "Generate continuous stream of qualified customer enquiries",
      "Establish immediate institutional trust with investors & partners",
      "Differentiate strongly from competitors with custom branding"
    ]
  },
  {
    id: "ai-automation",
    title: "AI Automation & Workflows",
    category: "Intelligence & Speed",
    summary: "Integrate LLM processing and workflow logic into your customer routing, PDF analysis, and daily business checklists to eliminate repetitive desk task delays.",
    subServices: [
      "Website & WhatsApp Intelligent Assistants",
      "Automated Tender & Document Summarization Pools",
      "AI-Assisted Proposal & Report Drafters",
      "Dynamic Content Calendar Builders",
      "Support Ticket Routing & Lead Classifier"
    ],
    bullets: [
      "Auto-generate meeting action items & brief summaries cleanly",
      "Respond instantly to visitor queries via smart knowledge base integrations",
      "Saves hours of daily manual documentation and sorting"
    ],
    outcomes: [
      "Saves 10-15 operational hours weekly per team member",
      "Deliver 24/7 client response cycles across key timezones",
      "Standardize operations with structured AI-powered decision support"
    ]
  },
  {
    id: "product-design",
    title: "Product Design & MVPs",
    category: "Strategy & UX",
    summary: "Translate complex digital concepts into high-fidelity Figma prototypes, scoped product roadmaps, and validation-ready minimum viable products.",
    subServices: [
      "Full Product Strategy & Feature Mapping",
      "High-Fidelity Wireframes & Active Figma Prototypes",
      "Pitch-Ready Product Screen Mockups",
      "User Journey Framing & Onboarding Walkthroughs",
      "Scoping Architecture & Tech Roadmap Specifications"
    ],
    bullets: [
      "Clarify feature scope before starting high-budget software development",
      "Stitch-driven fast design concepts with custom brand systems",
      "Provide investors with highly visual, click-through system demos"
    ],
    outcomes: [
      "Avoid cost overruns by validating feature paths early",
      "Secure pre-seed capital or strategic feedback with clear proof-of-concept",
      "Clarify user value propositions with intuitive, sleek visual workflows"
    ]
  },
  {
    id: "branding-design",
    title: "Brand Identity & Digital Design",
    category: "Creative & Identity",
    summary: "Cohesive brand systems, corporate collateral, pitch assets, and marketing materials that command authority and present credibility.",
    subServices: [
      "Custom Typography & Dual-Theme Logo Systems",
      "Complete Brand Visual Guidelines & Style Pools",
      "Sponsorship & Bid Tender Proposal Design",
      "Dynamic Social Media Media Kits & Templates",
      "Corporate Brochure Layouts & Print Collateral"
    ],
    bullets: [
      "Build visual authority that justifies premium business rates",
      "Consistent typography, negative space metrics, and high-impact layouts",
      "Tailored assets explicitly mapped for digital presentation screens"
    ],
    outcomes: [
      "Elevate regional market trust through impeccable visual systems",
      "Shorten B2B sales cycles with highly professional company decks",
      "Command top-tier status in premium pitch encounters"
    ]
  },
  {
    id: "event-digital",
    title: "Event Digital Partner Services",
    category: "Infrastructure & Media",
    summary: "End-to-end digital partner service powering summits, expos, and gala sessions with graphics, sponsor loops, holding screens, and post-event recaps.",
    subServices: [
      "Summit Landing Pages & Registration Forms",
      "Sponsor & Exhibitor Visibility Screen Loops",
      "Panel Moderator & Speaker Board Cards",
      "Gala & Award Ceremony Motion Graphics",
      "Comprehensive Post-Event Storyboard Reports"
    ],
    bullets: [
      "Flawless stage integration covering main displays & side monitors",
      "Sponsor visibility assets that satisfy strict marketing commitments",
      "Live output coordination to push daily recap material to social arrays"
    ],
    outcomes: [
      "Turn local summits into memorable executive experiences",
      "Provide measurable reach & premium exposure value for major sponsors",
      "Maintain active delegate engagement after conference wrap-up"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    category: "Marketing & Conversion",
    summary: "Connect campaign strategy to lead funnels so that marketing traffic is converted into trackable email briefs and WhatsApp discussions.",
    subServices: [
      "Social Media Campaign Architectures",
      "Inbound Lead Generation Pipelines",
      "Optimized Form Captures & Analytics Tracking",
      "WhatsApp Business Routing Workflows",
      "Targeted Email Newsletters & Updates"
    ],
    bullets: [
      "Design campaigns mapped directly to measurable customer actions",
      "Continuous tracking with real business metrics over idle likes/clicks",
      "Hand-off templates for internal marketing administration"
    ],
    outcomes: [
      "Align media budgets with real customer acquisition pipelines",
      "Formulate distinct service hooks that prompt high inquiry triggers",
      "Develop repeatable content systems for local channels"
    ]
  },
  {
    id: "research-strategy",
    title: "Research & Market Strategy",
    category: "Insights & Direction",
    summary: "Detailed competitor analysis, website usability audits, and market scans providing data evidence to minimize startup launch guesswork.",
    subServices: [
      "Local & Regional Digital Market Scans",
      "Competitor Offering & Positioning Audits",
      "User Experience & Conversion Leakage Audits",
      "Technical App Scoping Workshops",
      "Strategic Digital Target Planning"
    ],
    bullets: [
      "Data evidence to guide high-investment digital expansion",
      "Detailed checklist logs showing exactly where your current setups lose users",
      "Clear positioning directives to carve professional niches in saturated spaces"
    ],
    outcomes: [
      "Navigate digital market entry with real competitive insights",
      "Eliminate guessing in system feature priority choices",
      "Formulate winning proposals by presenting researched market truths"
    ]
  }
];
