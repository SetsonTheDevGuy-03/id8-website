# Cursor + Kiro Workflow Pack for ID8 Technologies

## Purpose
Use Cursor and Kiro for disciplined code implementation, refactoring, architecture, and task-based development.

Cursor is good for:
- Editing code files directly
- Applying targeted changes
- Refactoring components
- Debugging
- Improving UI implementation

Kiro is good for:
- Specs
- Requirements
- Task planning
- Structured implementation workflows
- Breaking large features into milestones

---

# 1. Cursor Master Instruction

Create a file in your project called `AI_RULES.md` or `.cursorrules` and paste:

```txt
Project: ID8 Technologies Website

ID8 Technologies is a Namibia-born digital systems, software, AI automation, web development, research, digital marketing, branding, product design, fintech-oriented, and event digital partner company.

This website must position ID8 as a serious digital systems and product engineering studio, not a freelancer portfolio.

Design direction:
Dark-mode first, premium, minimal, futuristic, Apple-inspired spacing, deep black and dark green background, glowing lime green and cyan accents, glassmorphism cards, subtle grid patterns, modern typography, clean responsive sections, smooth micro-interactions.

Tech stack:
Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React. Local data files first. Supabase later.

Rules:
- Make targeted changes only.
- Do not rewrite the whole project unless explicitly asked.
- Keep components reusable.
- Keep data in /src/data.
- Keep layout components separate from section components.
- Preserve premium ID8 design direction.
- Maintain responsive design.
- Avoid unnecessary dependencies.
- Use semantic HTML.
- Maintain accessibility.
- Verify imports after editing.
- Prefer simple working code over over-engineering.
```

---

# 2. Cursor Implementation Prompt

```txt
Implement the next section of the ID8 Technologies website.

Section to implement:
[SECTION NAME]

Use existing project structure.
Use existing UI components where possible.
Use data from /src/data where appropriate.
Keep the design premium, dark, minimal, futuristic, and aligned with ID8.
Do not rewrite unrelated files.
After implementing, check:
- missing imports
- TypeScript errors
- responsive layout
- accessibility
- visual consistency
```

---

# 3. Cursor Refactor Prompt

```txt
Refactor this component to be cleaner and more reusable.

Requirements:
- Preserve existing visual appearance.
- Improve TypeScript types.
- Reduce repeated Tailwind classes if sensible.
- Keep code readable.
- Do not change unrelated behavior.
- Keep the ID8 premium dark design.
- Explain what changed briefly.
```

---

# 4. Cursor Debug Prompt

```txt
Debug this issue in the ID8 website.

Problem:
[describe issue]

Files likely involved:
[list files]

Please:
1. Inspect the relevant code.
2. Identify the cause.
3. Make the smallest safe fix.
4. Do not rewrite unrelated files.
5. Verify the fix.
```

---

# 5. Kiro Spec: ID8 Website

Use this as a Kiro spec.

```md
# ID8 Technologies Website Spec

## Objective
Build the official ID8 Technologies website as a premium, dark-mode-first digital systems studio website.

## Business positioning
ID8 Technologies helps businesses, startups, events, institutions, tourism companies, and future-facing founders design, build, automate, research, market, and launch modern digital systems.

## Primary goal
Build trust and convert visitors into qualified inquiries.

## Users
- Small businesses
- Tourism companies
- Event organizers
- Startups
- NGOs/institutions
- FinTech partners
- Corporate teams
- Investors/partners

## Required launch sections
1. Navbar
2. Hero
3. Trust strip
4. What ID8 does
5. Services grid
6. Featured work
7. Expo case study
8. Research + Marketing
9. Industries served
10. Process
11. Engagement models
12. About
13. ID8 Labs teaser
14. Contact
15. Footer

## Tech stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Local data files
- Supabase later

## Design requirements
- Dark premium background
- Glassmorphism cards
- Subtle grid
- Green/lime/cyan glow
- Responsive
- Accessible
- Clean typography
- Premium spacing

## Functional requirements
- Static marketing website first
- Contact form UI
- WhatsApp CTA
- Email CTA
- Case study cards
- Services data-driven cards
- SEO metadata
- OG image support

## Non-goals for launch
- Authentication
- Client portal
- Payment integration
- Blog CMS
- AI chatbot
- Admin dashboard

## Acceptance criteria
- Site builds successfully
- Mobile responsive
- No TypeScript errors
- All sections visible
- CTAs working
- Contact form UI complete
- Visual style matches ID8 premium direction
- Easy to expand into pages later
```

---

# 6. Kiro Task Breakdown

```md
# Tasks

## Phase 1: Setup
- [ ] Create Next.js project
- [ ] Install dependencies
- [ ] Configure Tailwind
- [ ] Create folder structure
- [ ] Add global styles
- [ ] Add image placeholders

## Phase 2: Design System
- [ ] Create Button component
- [ ] Create Section component
- [ ] Create GlassCard component
- [ ] Create Badge component
- [ ] Create SectionHeading component
- [ ] Create utility function for class merging

## Phase 3: Data
- [ ] Create services data
- [ ] Create projects data
- [ ] Create industries data
- [ ] Create process data
- [ ] Create engagement model data

## Phase 4: Core Layout
- [ ] Build Navbar
- [ ] Build Footer
- [ ] Build page layout

## Phase 5: Homepage Sections
- [ ] Build Hero
- [ ] Build TrustStrip
- [ ] Build WhatWeDo
- [ ] Build ServicesGrid
- [ ] Build FeaturedWork
- [ ] Build ExpoCaseStudy
- [ ] Build ResearchMarketing
- [ ] Build Industries
- [ ] Build Process
- [ ] Build EngagementModels
- [ ] Build About
- [ ] Build LabsTeaser
- [ ] Build Contact

## Phase 6: Polish
- [ ] Add Framer Motion animations
- [ ] Improve responsive layout
- [ ] Add SEO metadata
- [ ] Add OG image
- [ ] Add favicon
- [ ] Add accessibility fixes
- [ ] Optimize images
- [ ] Test build

## Phase 7: Deployment
- [ ] Push to GitHub
- [ ] Deploy to Vercel or Cloudflare
- [ ] Connect domain
- [ ] Test contact CTAs
- [ ] Check mobile
- [ ] Final launch review
```

---

# 7. Cursor/Kiro Collaboration Workflow

Use Kiro to define:
- Requirements
- Tasks
- Acceptance criteria

Use Cursor to:
- Implement one task at a time
- Fix code
- Refactor
- Debug
- Polish UI

Use Claude to:
- Review code
- Improve copy
- Create data files
- Explain errors

Use Stitch to:
- Explore visuals
- Generate UI inspiration
- Produce design direction

Use Antigravity to:
- Build/verify larger sections
- Run terminal/browser checks
- Implement from structured prompts

---

# 8. Development Rules

Never ask any AI tool:
“Build my full website.”

Instead ask:
“Build the Hero section using existing components and data.”
“Now build the ServicesGrid.”
“Now review mobile responsiveness.”
“Now connect the contact form UI.”
“Now improve accessibility.”
“Now optimize SEO metadata.”

Small prompts create better code.
