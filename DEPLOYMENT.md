# ID8 Technologies Website — Hostinger Deployment Guide

This document describes how to deploy the ID8 Technologies Next.js website on Hostinger. It covers the current project state and two deployment paths.

## Current project profile

| Item | Value |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Runtime | Node.js 18+ recommended |
| Rendering | All routes are statically prerendered today |
| API routes | None (contact form is client-side placeholder) |
| Database | Not connected yet |

**Build commands**

```bash
npm ci
npm run build
npm run start   # production server on port 3000
```

**Static export (optional path)**

```bash
# Requires output: "export" in next.config.ts — not enabled by default
npm run build   # produces ./out
```

---

## Path A — Hostinger VPS / Node.js app (recommended)

Use this path when you need a Node.js server now or plan to add Supabase-backed API routes later.

### Why this path

- Runs the standard Next.js production server (`next start`)
- Supports future `/app/api/*` route handlers (contact form, webhooks, server actions)
- No code changes required for the current codebase

### Hostinger compatibility

Hostinger **VPS** and **Node.js Web Apps** (Business/Cloud plans) support Node.js applications. Confirm your plan includes:

- Node.js 18 or newer
- Ability to set start command: `npm run start`
- Ability to set build command: `npm run build`
- Environment variable configuration in the panel

### Deployment steps (VPS / Node.js app)

1. Push the repository to GitHub (see branch strategy below).
2. In Hostinger, create a Node.js application or connect the VPS via SSH.
3. Clone the repository into the app directory.
4. Set the production branch to `main`.
5. Configure environment variables in the Hostinger panel (never commit `.env` files).
6. Install and build:

   ```bash
   npm ci
   npm run build
   ```

7. Start the app:

   ```bash
   npm run start
   ```

8. Point your domain to the app and enable HTTPS in Hostinger.

### Process manager (VPS)

For a VPS, use a process manager so the app restarts on failure:

```bash
# Example with PM2
npm install -g pm2
pm2 start npm --name id8-website -- start
pm2 save
pm2 startup
```

---

## Path B — Static export (shared hosting / static sites)

Use this path only if you do **not** need server-side API routes and your Hostinger plan supports static file hosting (standard web hosting).

### Current suitability

Today the site can be statically exported because:

- All pages (`/`, `/about`, `/services`, `/work`, `/labs`, `/contact`) prerender as static HTML
- Theme toggle and contact form run entirely in the browser
- No `app/api` routes exist

### Required code changes (not applied yet)

To enable static export, you would need to update `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  // Optional: required if using next/image with static export
  // images: { unoptimized: true },
};

export default nextConfig;
```

Then build:

```bash
npm run build
```

Upload the contents of the `./out` directory to Hostinger public HTML root (`public_html`).

### Limitations of static export

- No Next.js API routes or server actions at runtime
- No incremental server rendering or dynamic route handlers
- **Supabase contact form via API routes will not work** on pure static hosting — you would need a client-only Supabase approach or an external form service

---

## Supabase and future backend work

When the contact form is wired to Supabase:

- **Preferred:** Path A (Node.js-capable hosting) with a Next.js Route Handler at `src/app/api/contact/route.ts`
- **Alternative:** Client-side Supabase insert with Row Level Security (works on static hosting but requires careful RLS policies)
- **Not sufficient alone:** Static-only Hostinger shared hosting without external backend services

Plan for Node.js hosting before adding authenticated admin features, webhooks, or server-side validation.

---

## Git branch strategy

| Branch | Purpose |
| --- | --- |
| `main` | Production-ready releases deployed to Hostinger |
| `dev` | Active integration branch for ongoing development |
| `feature/*` | Short-lived branches for individual features (e.g. `feature/supabase-contact-form`) |

**Workflow**

1. Branch from `dev`: `git checkout dev && git pull && git checkout -b feature/my-feature`
2. Open a pull request into `dev`
3. After QA, merge `dev` into `main` for production deployment

---

## Environment variables (future)

When Supabase is added, configure these in Hostinger (not in Git):

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=   # server-only, never expose to client
```

Add `.env.example` with placeholder keys when Supabase is integrated.

---

## Pre-deploy checklist

- [ ] `npm run build` passes locally
- [ ] `npm run lint` passes locally
- [ ] No secrets in Git history
- [ ] Domain DNS pointed to Hostinger
- [ ] HTTPS enabled
- [ ] Production branch set to `main`
