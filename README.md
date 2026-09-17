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
- **Tier 2 (Should Have):** complete. Scroll reveals
  (`components/ui/reveal.tsx`), filtered/animated Work grid
  (`components/sections/WorkGrid.tsx`), adaptive sticky nav, interactive
  service cards (`components/sections/ServiceCard.tsx`), magnetic primary
  CTA (`components/ui/magnetic-button.tsx`, desktop-only, wrapped around
  the hero's primary button only — not applied globally), and a
  multi-step project intake form with conditional per-client-type
  questions (`components/sections/ProjectFormMultiStep.tsx` — the
  Tier 1 single-step `ProjectForm.tsx` is kept in the codebase as a
  documented fallback, not deleted).
- **Tier 3 (Signature):** complete. Animated logo resolve
  (`components/ui/LogoMarkAnimated.tsx`), session-gated so it plays
  once per browser session, headline animates independently to protect
  the LCP budget. Scroll-driven case study narrative
  (`components/sections/CaseStudyNarrative.tsx`). One 3D element
  (`components/ui/tilt-card.tsx` — CSS 3D transforms, deliberately not
  Three.js/WebGL, applied to the featured case study thumbnail only).
  Project-card-to-case-study transition (`components/layout/
  PageTransition.tsx`, sessionStorage handoff, not the experimental
  native View Transitions API — see file comments for full reasoning).

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

## Scrutiny pass (post-Tier-3-logo)

After combining everything into one working directory, did a full pass
for real problems rather than trusting the last green build alone.
Found and fixed two genuine issues:

- **Nav mobile menu had no Escape-to-close handler.** Keyboard users
  could open the menu but only close it by tabbing back to the toggle
  button or clicking a link — missing standard disclosure-pattern
  behavior. Fixed in `components/layout/Nav.tsx`.
- **Multi-step form had no focus management between steps.** Clicking
  "Continue" left keyboard focus on a now-stale button with no
  indication where new content began; screen reader users got a
  step-count announcement but focus never moved. Fixed by adding a
  visually-hidden, focusable heading per step in
  `components/sections/ProjectFormMultiStep.tsx`, focused via
  `useRef`/`useEffect` on step change (skipped on initial mount so the
  page doesn't yank focus on first load).

Also verified (no issues found): every client component using browser
APIs (`window`, `sessionStorage`, `matchMedia`) does so only inside
`useEffect`, so server/first-client render always match — no hydration
mismatches. `WorkGrid`'s filter buttons are real `<button>` elements
with `aria-pressed`, correctly keyboard-operable without extra work.

## Project status — is this finished?

**Short answer: no.** Tier 1, 2, and 3 are code-complete and every
build in this history has compiled clean with zero errors — but
"finished" per the Build Prompt also requires the CI gates that were
supposed to validate each tier objectively, and those don't exist yet:

- **Lighthouse CI** — nothing currently measures whether the locked
  LCP ≤2.5s / INP ≤200ms / CLS ≤0.1 targets are actually met. They're
  designed for, not verified.
- **axe-core accessibility scan** — manual review has caught and fixed
  real issues (missing Escape handler on mobile nav, no focus
  management in the multi-step form), but nothing has run an automated
  pass across every page.
- **Visual regression testing** — nothing guards against silent drift
  from the exact-hex design tokens over time.

These need a real CI environment (GitHub Actions) to exist at all —
they can't be built or run inside a sandboxed dev environment with no
persistent git history or CI runner. This is the honest gap between
"the code is done" and "the project is verified."

**Known minor technical debt (not a bug, but fragile):** the homepage's
Featured Case Study section picks whichever project is *first* in
`lib/content/projects.ts` — implicit array-order logic, not an
explicit `featured: true` flag. Adding a new case study above Scent
Vault SL in that file would silently change which project is featured.
Fine today, worth a small refactor before this file is edited by
someone other than the original builder.

**What's genuinely solid:** every page renders real content, real
images, real pricing-rule enforcement at the type level, real WhatsApp
deep-linking, and the full Tier 1–3 feature set — verified by clean
builds throughout this history, not just claimed.
