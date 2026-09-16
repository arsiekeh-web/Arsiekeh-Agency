# Arsiekeh Agency — Website

WhatsApp-first digital systems and branding studio, Freetown, Sierra Leone.
Next.js 16 (App Router), Tailwind v4, Motion.

## Reference documents

This codebase is built directly against three specs — read them before
changing structure, copy, or the visual system:

- **Website Blueprint v3** — homepage section order, copy, pricing display rules, visual system, avoid-list.
- **Build Prompt** — Tier 1 → 2 → 3 → 4 feature priority, hard constraints (no exact pricing on public pages, no banned visual patterns).
- **Technical Stack** — stack decisions and reasoning.

## Status

- **Tier 1 (Must Have):** complete. All homepage sections, all secondary
  pages, real project images, WhatsApp deep-link intake form, sitemap.xml,
  robots.txt, Organization/LocalBusiness structured data.
- **Tier 2 (Should Have):** in progress. Done: scroll reveals (`components/ui/reveal.tsx`),
  filtered/animated Work grid (`components/sections/WorkGrid.tsx`), adaptive
  sticky nav. Remaining: magnetic buttons, interactive service-card hovers,
  multi-step project intake form.
- **Tier 3 (Signature):** not started — animated logo resolve, scroll-driven
  case study, one 3D/WebGL element.

## Hard constraints (do not violate)

- **No exact prices anywhere on public pages.** `ServiceItem` has no price
  field by design — see `lib/content/types.ts`. Every CTA routes to a
  WhatsApp quote conversation via `lib/whatsapp.ts`.
- **No fabricated testimonials, results, or client logos.** See
  `components/sections/SocialProof.tsx` for the current honest-placeholder
  state.
- **No banned visual patterns** (gradients, drop shadows, bento grids,
  glassmorphism, Space Grotesk, decorative orbs) — see Blueprint v3 §9.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Font loading note

`app/layout.tsx` currently ships with a documented fallback because the
sandbox this was built in has no network access to fonts.googleapis.com.
Production setup (Manrope + Inter via `next/font/google`, or self-hosted via
`next/font/local`) is commented directly above the metadata export — swap
it in before deploying.

## Deployment

Not yet deployed. Intended stack: Vercel (or Netlify) + a headless CMS
(Sanity or Payload, undecided) for Projects/Insights/Testimonials content.
See Technical Stack doc for the full reasoning.

## Content

All project, service, and insight content lives in `lib/content/` as typed
TypeScript modules — this mirrors the eventual CMS schema field-for-field,
so swapping in a live CMS later shouldn't require touching components.
