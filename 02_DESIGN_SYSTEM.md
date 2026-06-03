# ID8 Technologies Design System & Visual Direction

## Purpose
This file defines the visual identity, user interface direction, motion style, layout system, and design rules for the ID8 Technologies website.

Use it for:
- Google Stitch prompts
- Figma design direction
- Tailwind theme planning
- Claude/Antigravity/Cursor design context
- DESIGN.md for AI coding tools

---

# 1. Design Philosophy

ID8 Technologies must feel like:
- A premium African technology studio
- A modern software company
- An AI and digital transformation lab
- A creative product engineering partner
- A serious business systems company
- A future fintech and SaaS product builder

The design should be:
- Dark-mode first
- Minimal but not empty
- Premium but not corporate boring
- Futuristic but still usable
- Clean, structured, and confident
- Inspired by Apple-level spacing and restraint
- Inspired by software company clarity like Tallium
- Visually rich enough to feel innovative
- Professional enough for business, government, fintech, tourism, and event clients

---

# 2. Visual Mood

## Keywords
Premium, minimal, dark, intelligent, structured, technical, African-forward, glass, glow, systems, motion, depth, precision, clarity.

## Visual metaphors
- Connected systems
- Digital infrastructure
- Nodes and networks
- Product layers
- Data dashboards
- AI intelligence
- FinTech rails
- Event screens
- Strategy maps
- Growth systems
- Research signals

## Design should communicate
- “We build serious systems”
- “We understand business and technology”
- “We are creative but structured”
- “We can help you launch professionally”
- “We are young but capable”
- “We are future-facing”

---

# 3. Color System

## Base colors
```css
--background-main: #030706;
--background-deep: #06120D;
--background-card: rgba(255,255,255,0.06);
--background-card-hover: rgba(255,255,255,0.10);
--border-subtle: rgba(255,255,255,0.10);
--border-glow: rgba(114,240,168,0.32);
```

## Accent colors
```css
--green-primary: #72F0A8;
--green-brand: #74930D;
--lime-accent: #D9FF73;
--cyan-tech: #22D3EE;
--blue-system: #60A5FA;
--purple-ai: #A78BFA;
--orange-strategy: #FDBA74;
```

## Text colors
```css
--text-primary: #F4FFF8;
--text-secondary: rgba(244,255,248,0.72);
--text-muted: rgba(244,255,248,0.52);
--text-disabled: rgba(244,255,248,0.32);
```

## Gradient ideas
Use subtle gradients:
- Green → Lime
- Cyan → Green
- Purple → Cyan
- Dark green → black
- Brand green glow → transparent

Example:
```css
background: radial-gradient(circle at 50% 10%, rgba(114,240,168,0.18), transparent 35%),
            linear-gradient(180deg, #030706 0%, #06120D 100%);
```

---

# 4. Typography

## Font direction
Use modern sans-serif typography.

Recommended:
- Inter
- Satoshi
- Geist
- Manrope
- Plus Jakarta Sans

## Type hierarchy
```txt
Display XL: 72px / 1.02 / -0.05em
Display LG: 56px / 1.04 / -0.04em
H1: 48px / 1.05 / -0.035em
H2: 40px / 1.08 / -0.03em
H3: 28px / 1.15 / -0.02em
H4: 22px / 1.25 / -0.01em
Body LG: 18px / 1.65
Body: 16px / 1.7
Small: 14px / 1.6
Micro: 12px / 1.4 / uppercase tracking
```

## Typography behavior
- Huge hero headline
- Clear section headings
- Short paragraphs
- Avoid dense copy blocks
- Use eyebrow labels before sections
- Use gradient text sparingly
- Use uppercase micro labels for categories

---

# 5. Layout System

## Max width
```txt
max-width: 1200px or 1280px
section padding desktop: 96px–140px vertical
section padding mobile: 64px–88px vertical
container padding mobile: 20px
container padding desktop: 32px
```

## Grid system
Use:
- 12-column desktop grid
- 2-column hero layout
- 3-column service cards
- 2-column case-study layouts
- 4-column stats/trust strips
- Single-column mobile stack

## Section rhythm
Each section should have:
1. Eyebrow label
2. Heading
3. Short intro text
4. Visual/card content
5. Optional CTA

---

# 6. Component Style

## Cards
Cards should feel like dark glass panels:
```css
.card {
  background: rgba(255,255,255,0.055);
  border: 1px solid rgba(255,255,255,0.10);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 20px 80px rgba(0,0,0,0.28);
}
```

Hover:
```css
.card:hover {
  border-color: rgba(114,240,168,0.35);
  transform: translateY(-6px);
  background: rgba(255,255,255,0.08);
}
```

## Buttons
Primary:
- Green/lime gradient
- Dark text
- Rounded full
- Strong but elegant

Secondary:
- Transparent
- Border
- White/green text
- Subtle hover glow

Ghost:
- Text-only with arrow

## Navbar
- Fixed or sticky
- Glass blur background
- Logo left
- Nav links center
- CTA right
- Mobile drawer
- Dark transparent at top, stronger blur on scroll

## Hero visual
- Large ID8 cube/logo
- Subtle 3D glow
- Slow color shift
- Floating service cards
- Optional animated orbit rings
- Background grid
- Radial glow behind logo

## Service cards
Each card:
- Icon
- Category label
- Title
- 2-line summary
- Bullet micro-services
- CTA arrow
- Hover glow color unique to category

## Case study cards
Each case study:
- Image/mockup area
- Industry tag
- Title
- Challenge
- Deliverables
- Outcome/proof
- CTA “View case study”

## Process timeline
Use step cards:
1. Discover
2. Research
3. Define
4. Design
5. Build
6. Market/Launch
7. Support

The process should look like a system pipeline.

---

# 7. Motion Design

## Motion principles
- Purposeful
- Slow and premium
- Not too flashy
- Smooth entrances
- Hover micro-interactions
- Subtle background movement
- Logo color-shift
- Cards float slightly
- Text reveals with fade/slide

## Framer Motion defaults
```js
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
}
```

## Durations
- Page section entrance: 0.6s–0.9s
- Hover interactions: 0.2s–0.35s
- Logo float loop: 6s–12s
- Background color shift: 12s–20s

## Avoid
- Bouncy cheap animations
- Too much parallax
- Spinning elements everywhere
- Distracting cursor effects
- Motion that makes mobile slow

---

# 8. Visual Assets Needed

## Brand assets
- ID8 cube logo PNG/SVG
- Horizontal wordmark
- White logo
- Green logo
- Favicon
- Social OG image
- Brand pattern
- Founder photo

## Portfolio assets
- Expo visuals
- Event screen designs
- Speaker/panel graphics
- Sponsor graphics
- Now Now Tours screenshots
- Website screenshots
- P1 mockup screenshots
- Business card/brand work
- Social media carousel examples

## Generated visuals
- Abstract ID8 cube render
- Digital systems dashboard mockup
- FinTech/API dashboard visual
- AI automation workflow visual
- Marketing growth funnel visual
- Research intelligence visual
- Event command center visual
- Product roadmap visual

---

# 9. Section-by-Section Design Direction

## Hero
Visual structure:
- Left: headline, copy, CTAs, trust line
- Right: animated ID8 cube, floating service cards
- Background: dark green/black radial glow, subtle grid

Floating cards:
- AI Automation
- Web Platforms
- FinTech APIs
- Research Systems
- Marketing Funnels
- Event Digital

## Services
Use 8 cards:
1. Websites
2. Software Systems
3. AI Automation
4. Product & MVP
5. Brand Design
6. Marketing
7. Research
8. Event Digital

Each card has unique accent color but within the same family.

## Case studies
Use large editorial cards:
- Expo case study should be largest
- Now Now Tours second
- P1 concept third
- Business systems fourth

## Research + Marketing section
This should feel strategic:
- Show a digital strategy map
- Marketing funnel cards
- Research insight cards
- “From research to execution” pipeline

Suggested pipeline:
Research → Positioning → Campaign → Website/Funnel → Lead Capture → Reporting

## Contact
Make it elegant:
- Left: CTA copy
- Right: form
- Bottom: WhatsApp/email/social links
- Include budget range and service selector

---

# 10. Mobile Design

Mobile must feel premium, not squeezed.

Rules:
- Hero stacks with logo after text
- Cards become single column
- Navbar becomes drawer
- CTA buttons stack or full width
- Keep text sizes strong
- Reduce background effects
- Avoid horizontal scroll
- Images crop elegantly
- Keep contact form easy to fill

---

# 11. Accessibility

- Sufficient contrast
- Focus states on buttons/links/forms
- Semantic headings
- Alt text on images
- Keyboard navigable form
- Reduced motion support
- Labels for inputs
- Do not rely on color only

---

# 12. Design Acceptance Criteria

The design is successful if:
- It looks like a real technology company
- It does not feel like a generic template
- It communicates services quickly
- It feels premium on mobile and desktop
- It uses ID8 brand assets strongly
- It highlights proof and case studies
- It makes “Start a Project” obvious
- It can be coded cleanly in Next.js/Tailwind
- It can expand into service pages later
