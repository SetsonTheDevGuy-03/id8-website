# Antigravity Master Build Prompt for ID8 Technologies

## Purpose
Use this file inside Google Antigravity as the main implementation instruction.

Antigravity should:
- Create the Next.js project
- Build the site section by section
- Use clean reusable components
- Verify imports, responsiveness, and build errors
- Avoid rewriting everything unnecessarily
- Keep the code production-ready

---

# 1. Master Antigravity Instruction

```txt
You are building the official website for ID8 Technologies.

ID8 Technologies is a Namibia-born digital systems, software, AI automation, web development, research, digital marketing, branding, product design, fintech-oriented, and event digital partner company.

The website must position ID8 as a serious digital systems and product engineering studio, not a freelancer portfolio.

Core positioning:
ID8 Technologies helps businesses, startups, events, institutions, tourism companies, and future-facing founders design, build, automate, research, market, and launch modern digital systems.

Main services:
1. Websites & Digital Presence
2. Software & Business Systems
3. AI Automation
4. Product Design & MVPs
5. Brand Identity & Digital Design
6. Digital Marketing & Growth
7. Research & Strategy
8. Event Digital Partner Services
9. FinTech & Payment Product Design
10. Data, Dashboards & Reporting
11. Digital Transformation Consulting
12. ID8 Labs / Future Products

Build stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Local data files first
- Supabase later for forms/storage
- Deploy to Vercel or Cloudflare Pages later

Design style:
Dark-mode first, premium, minimal, futuristic, Apple-inspired spacing, deep black and dark green background, glowing lime green and cyan accents, glassmorphism cards, subtle grid patterns, modern typography, clean responsive layouts, smooth micro-interactions, serious software company feel.

Important:
- Do not build a generic SaaS template.
- Do not make it look like a cheap freelancer portfolio.
- Do not overcomplicate the first build with auth, dashboard, CMS, or payments.
- Build the marketing site first.
- Keep code clean and modular.
- Make targeted changes only.
- Verify after each major step.
```

---

# 2. Project Creation Prompt

```txt
Create a new Next.js project for the ID8 Technologies website.

Use:
- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- src directory
- app directory
- import alias @/*

Install:
- framer-motion
- lucide-react
- clsx
- tailwind-merge

Create this structure:

src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      TrustStrip.tsx
      WhatWeDo.tsx
      ServicesGrid.tsx
      FeaturedWork.tsx
      ExpoCaseStudy.tsx
      ResearchMarketing.tsx
      Industries.tsx
      Process.tsx
      EngagementModels.tsx
      About.tsx
      LabsTeaser.tsx
      Contact.tsx
    ui/
      Button.tsx
      Section.tsx
      GlassCard.tsx
      Badge.tsx
      GradientText.tsx
      SectionHeading.tsx
  data/
    services.ts
    projects.ts
    industries.ts
    process.ts
    engagementModels.ts
    nav.ts
  lib/
    utils.ts

public/
  images/
    id8-logo.png
    id8-cube.png
    id8-wordmark.png
    expo-case-study-1.jpg
    expo-case-study-2.jpg
    nownow-preview.jpg
    p1-app-preview.jpg
    founder.jpg
```

---

# 3. Global CSS + Theme Prompt

```txt
Create the global CSS and Tailwind theme foundation for ID8 Technologies.

Requirements:
- Dark background
- Deep green and black color system
- Green, lime, cyan, purple, and orange accents
- Glassmorphism utility classes
- Subtle grid background utility
- Gradient text utility
- Smooth scrolling
- Selection color
- Reduced motion support
- Responsive typography
- Accessible focus states

Use these design tokens:
background main #030706
background deep #06120D
primary green #72F0A8
brand green #74930D
lime #D9FF73
cyan #22D3EE
soft white #F4FFF8
muted text rgba(244,255,248,0.68)

Create reusable classes:
- .bg-site
- .bg-grid
- .glass-card
- .text-gradient-green
- .section-padding
- .container-custom
- .focus-ring
```

---

# 4. Component System Prompt

```txt
Build reusable UI components for the ID8 website:

1. Button
Variants:
- primary
- secondary
- ghost
- dark
Sizes:
- sm
- md
- lg

2. Section
Props:
- id
- children
- className

3. GlassCard
Props:
- children
- className
- glow optional

4. Badge
Props:
- children
- color optional

5. GradientText
Props:
- children

6. SectionHeading
Props:
- eyebrow
- title
- description
- align left/center

Use TypeScript, Tailwind, and clean props.
Keep components reusable and simple.
```

---

# 5. Data Files Prompt

```txt
Create structured data files for the website.

services.ts:
Include 8 main services:
1. Websites & Digital Presence
2. Software & Business Systems
3. AI Automation
4. Product Design & MVPs
5. Brand Identity & Digital Design
6. Digital Marketing & Growth
7. Research & Strategy
8. Event Digital Partner Services

Each service must include:
- title
- slug
- category
- summary
- description
- bullets
- icon name
- accent color
- cta label

projects.ts:
Include:
1. Invest in Africa Trade Expo & Business Summit 2026
2. Now Now Tours & Safaris
3. ID8 P1 App Concept
4. Business Website Systems

Each project must include:
- title
- slug
- category
- summary
- challenge
- solution
- deliverables
- image
- tags
- cta

industries.ts:
Include:
- Small Businesses
- Tourism & Hospitality
- Events & Conferences
- Startups & Founders
- NGOs & Institutions
- FinTech & Financial Services
- Corporate Teams
- Government / Public Sector

process.ts:
Include:
1. Discover
2. Research
3. Define
4. Design
5. Build
6. Market / Launch
7. Support & Improve

engagementModels.ts:
Include:
- Digital Presence Starter
- Growth Retainer
- Strategy & Research Sprint
- AI Automation Setup
- Product/MVP Build
- Event Digital Partner Package
```

---

# 6. Section Build Order

Use this order in Antigravity:

## Step 1
Build:
- layout.tsx
- page.tsx
- globals.css
- Navbar
- Footer
- UI components

Verify:
- App runs
- No TypeScript errors
- Styling loads

## Step 2
Build:
- Hero
- TrustStrip
- WhatWeDo

Verify:
- Responsive
- Hero visual area works with placeholder image
- CTAs visible

## Step 3
Build:
- ServicesGrid
- ResearchMarketing
- Industries

Verify:
- Cards render from data
- Icons work
- Mobile stacking works

## Step 4
Build:
- FeaturedWork
- ExpoCaseStudy

Verify:
- Portfolio cards render
- Expo section feels premium
- Image placeholders do not break layout

## Step 5
Build:
- Process
- EngagementModels
- About
- LabsTeaser
- Contact

Verify:
- Forms render
- CTA paths work
- Footer links work

## Step 6
Polish:
- Animations
- Scroll behavior
- SEO metadata
- OG image
- Favicon
- Accessibility
- Performance

---

# 7. Hero Section Prompt

```txt
Build the Hero section.

Requirements:
- Full viewport-ish height but not too tall on mobile
- Dark grid/radial glow background
- Left content:
  - Badge: Namibia-born Digital Systems Studio
  - H1: Build smarter digital systems for the businesses shaping tomorrow.
  - Paragraph about websites, software, AI workflows, research, marketing, brand systems, and product experiences.
  - CTA buttons: Start a Project, View Our Work
  - Trust line: Software · AI · Websites · Research · Marketing · Branding · Event Digital · FinTech
- Right content:
  - Large glowing ID8 cube/logo using /images/id8-cube.png
  - Floating cards:
    - AI Systems
    - Web Platforms
    - FinTech APIs
    - Research Intelligence
    - Marketing Funnels
    - Event Digital
- Use Framer Motion for subtle fade-up and floating animations.
- Ensure mobile stacks cleanly.
```

---

# 8. ServicesGrid Prompt

```txt
Build the ServicesGrid section using data from services.ts.

Section heading:
Connected digital services for businesses ready to grow.

Description:
A business may start with a website, then grow into marketing, automation, dashboards, custom software, research-backed strategy, and full product platforms. ID8 helps clients build at the level they are ready for while keeping the future in mind.

Cards:
Show 8 services in a responsive grid.
Each card:
- icon
- title
- summary
- 3 to 5 bullet points
- CTA arrow
- accent glow on hover

Add small future services strip:
FinTech Solutions · API Integrations · Data Dashboards · ID8 Labs
```

---

# 9. ResearchMarketing Prompt

```txt
Build the ResearchMarketing section.

Purpose:
Show that ID8 also handles research and marketing, not only design and development.

Section title:
From research to growth systems.

Description:
ID8 helps businesses understand their market, position their offer, create campaigns, capture leads, and measure what works.

Create pipeline:
Research → Positioning → Campaign Strategy → Website/Funnel → Lead Capture → Reporting → Optimization

Include two columns:
Left:
- Strategy explanation
- CTA: Plan a Growth System

Right:
- Dashboard-style visual with cards:
  - Market Research
  - Competitor Analysis
  - Digital Marketing Strategy
  - Lead Funnel
  - Analytics Report

Style:
Glass dashboard, subtle charts, glowing data nodes, premium dark background.
```

---

# 10. Contact Form Prompt

```txt
Build the Contact section.

Use a static form layout first. Do not connect backend yet.

Fields:
- name
- company
- email
- whatsapp
- serviceNeeded select
- budgetRange select
- timeline select
- message textarea
- optional file upload placeholder later

Service options:
- Website
- Branding
- Marketing
- Research
- AI Automation
- Software System
- Product/MVP
- Event Digital Package
- FinTech/Product Concept
- Other

Budget options:
- Under N$3,500
- N$3,500 – N$7,500
- N$7,500 – N$15,000
- N$15,000 – N$35,000
- N$35,000+
- Not sure yet

Add WhatsApp CTA and email CTA.
Form submit can show a placeholder console.log or disabled note until backend is connected.
```

---

# 11. Supabase Form Integration Later

```txt
Now connect the contact form to Supabase.

Create:
- Supabase client
- inquiries table SQL
- server action or API route for submissions
- validation
- success state
- error state
- spam protection placeholder
- optional file upload later

Table fields:
id uuid primary key
created_at timestamp
name text
company text
email text
whatsapp text
service_needed text
budget_range text
timeline text
message text
source text
status text default 'new'
```

---

# 12. Verification Checklist for Antigravity

After each build step, verify:
- npm run dev works
- npm run build works
- no TypeScript errors
- no missing imports
- no hydration issues
- no broken image paths
- no horizontal scroll on mobile
- buttons and links visible
- form inputs usable
- lighthouse-friendly structure
- semantic headings
- alt text present
- reduced motion respected
- contrast acceptable

---

# 13. Guardrails

Tell Antigravity repeatedly:

```txt
Do not rewrite working code unless necessary.
Make targeted changes.
Keep the premium dark ID8 design direction.
Keep components reusable.
Keep data separate from layout.
Check the app after every major change.
Prefer simple working implementation over over-engineered code.
```
