# Claude Master Prompt Pack for ID8 Technologies

## Purpose
Use Claude for:
- Business copy
- Service explanations
- Page content
- Case study writing
- Code review
- Refactoring plans
- JSON/data content
- Prompt improvement
- Debugging explanations

Claude free version has limits, so use it in focused chunks.

---

# 1. Claude Master Context Prompt

Paste this first.

```txt
You are helping me build the official website for ID8 Technologies.

ID8 Technologies is a Namibia-born digital systems, software, AI automation, web development, research, digital marketing, branding, product design, fintech-oriented, and event digital partner company.

The website must position ID8 as a serious digital systems and product engineering studio, not a freelancer portfolio.

Company definition:
ID8 Technologies helps businesses, startups, events, institutions, tourism companies, and future-facing founders design, build, automate, research, market, and launch modern digital systems.

Core service pillars:
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

Target audiences:
- Small and medium businesses
- Tourism and hospitality companies
- Event organizers
- Startups and founders
- NGOs and institutions
- FinTech partners
- Corporate clients
- Government/public-sector organizations
- Investors and strategic partners

Primary goal:
Build trust and convert visitors into qualified inquiries, quote requests, WhatsApp messages, and consultation calls.

Reference:
Tallium.com is the structural benchmark. Borrow its seriousness, case-study style, service depth, and consultation-based positioning. Do not copy its exact design or wording.

Tone:
Premium, clear, confident, technical but understandable, founder-led, Africa-forward, strategic, modern, and practical.

Design style:
Dark-mode first, premium, minimal, futuristic, Apple-inspired spacing, deep black and dark green background, glowing lime green and cyan accents, glassmorphism cards, subtle grid patterns, modern typography.

Tech stack:
Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React, local data files first, Supabase later.

Help me create copy, content, structure, and implementation guidance that is detailed, practical, and ready to paste into coding tools.
```

---

# 2. Claude Website Content Prompt

```txt
Create the complete website copy for the ID8 Technologies homepage.

Sections:
1. Hero
2. Trust strip
3. What ID8 does
4. Services overview
5. Featured work
6. Expo case study
7. Research + Marketing
8. Industries served
9. Process
10. Engagement models
11. About ID8
12. ID8 Labs teaser
13. Contact CTA
14. Footer

For each section, provide:
- Section goal
- Eyebrow label
- Heading
- Paragraph
- Bullet points if needed
- CTA labels
- Notes for visual layout

Tone:
Premium, clear, serious, African technology company, not generic agency.
```

---

# 3. Claude Service Data Prompt

```txt
Create a TypeScript data file for ID8 services.

The services:
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
12. Technical Infrastructure & Support

Each service object should have:
- id
- title
- slug
- shortTitle
- category
- summary
- description
- idealFor
- deliverables
- outcomes
- examples
- icon
- accent
- cta

Return only valid TypeScript.
```

---

# 4. Claude Case Study Prompt

```txt
Write a Tallium-style case study draft for ID8 Technologies.

Project:
Invest in Africa Trade Expo & Business Summit 2026

ID8 role:
Marketing, design, and digital partner.

Known work:
- Event visual design
- Digital assets
- Social media content support
- Sponsor visibility
- Speaker/panel graphics
- Gala/award visuals
- Event communication support
- Post-event recap content
- Brand presentation across a 3-day event

Structure:
1. Case study title
2. Short summary
3. Client/event context
4. Challenge
5. ID8 role
6. Deliverables
7. Process
8. Outcome/proof
9. Technology/tools used
10. What this shows about ID8
11. CTA

Important:
Be truthful. Do not invent hard metrics unless marked as placeholders.
Use confident but realistic language.
```

---

# 5. Claude Research + Marketing Copy Prompt

```txt
Create a full service page content draft for ID8 Technologies: Research, Strategy & Digital Marketing.

Explain that ID8 helps businesses understand their market, position their offer, design campaigns, launch funnels, capture leads, and measure results.

Include:
- Hero section
- What this service means
- Who it is for
- Problems it solves
- Sub-services
- Process
- Deliverables
- Example packages
- CTA
- FAQ

Sub-services:
- Market research
- Competitor research
- User/customer research
- Digital audits
- Brand positioning
- Marketing strategy
- Content planning
- Campaign planning
- Landing page/funnel strategy
- Lead generation systems
- Analytics and reporting
- Growth optimization

Tone:
Strategic, practical, premium, not fluffy marketing.
```

---

# 6. Claude Code Review Prompt

```txt
Review the following Next.js/Tailwind code for the ID8 Technologies website.

Check for:
- TypeScript errors
- Missing imports
- Tailwind class issues
- Component structure
- Responsiveness
- Accessibility
- Performance
- SEO
- Reusability
- Whether the design still matches the premium ID8 direction

Do not rewrite everything.
First list the problems.
Then provide targeted fixes.
Then provide the corrected code only for the files that need changes.
```

---

# 7. Claude Debug Prompt

```txt
I am getting this error in my ID8 Technologies Next.js project.

Error:
[paste error]

Relevant file:
[paste file]

Please:
1. Explain the error in simple terms
2. Identify the exact cause
3. Give the minimal fix
4. Provide corrected code
5. Tell me how to verify it works
```

---

# 8. Claude Prompt Improvement Prompt

```txt
Improve this prompt so I can paste it into Antigravity/Cursor/Kiro and get better results.

My original prompt:
[paste prompt]

Context:
ID8 Technologies is a premium Namibia-born digital systems, AI, software, web, research, marketing, branding, fintech, and event digital partner company.

Output:
Rewrite the prompt to be specific, structured, and implementation-ready.
Include constraints, acceptance criteria, and what the AI should not do.
```

---

# 9. Claude Usage Flow

Use Claude in this sequence:

1. Ask for homepage copy only.
2. Ask for service data only.
3. Ask for one section implementation review.
4. Ask for case study copy.
5. Ask for code review after Antigravity/Cursor builds.
6. Ask for polish suggestions.
7. Ask for SEO metadata.
8. Ask for final launch checklist.

Do not ask Claude free version to build the entire site at once.
