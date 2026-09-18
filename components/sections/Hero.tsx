"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LogoMarkAnimated } from "@/components/ui/LogoMarkAnimated";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CapabilityStrip } from "@/components/sections/CapabilityStrip";

const SEEN_KEY = "arsiekeh-logo-seen";

/**
 * 01 — HEADER. Blueprint v3 Section 3.01.
 * Headline and subhead are locked copy — do not paraphrase.
 *
 * Tier 3 signature entrance: logo resolve (dashed red -> solid lime)
 * plays alongside the headline, not gating it.
 *
 * Headline/subhead/CTAs animate in immediately and independently
 * (short, ~0.4s fade-up, no dependency on the logo). The logo plays
 * its full resolve sequence alongside them, but only once per browser
 * session - sessionStorage flags it as seen, so a second pageview
 * within the same session renders the logo in its final state
 * instantly rather than replaying. This exists because an earlier
 * version delayed the H1's visible paint by 1.1s+ on every load, which
 * risked the locked LCP <=2.5s target on the low-end connections this
 * site is built for.
 *
 * REBRAND MOCKUP LAYOUT (2026): restructured to the two-column shape
 * from the rebrand hero mockup - copy column left, sculptural brand
 * mark right, eyebrow line above the H1, lime accent on the final
 * headline word, scroll cue bottom-right.
 *
 * Deliberate departures from the mockup, and why:
 * - Copy is unchanged. The mockup shows different headline/subhead
 *   wording ("We make potential visible."), but the copy here is
 *   marked locked above, so this change is layout-only. Swapping the
 *   words is a separate decision, not something to smuggle in with a
 *   layout pass.
 * - The hero mark is a decorative raster, so it is aria-hidden and
 *   deliberately NOT marked priority. On the low-bandwidth connections
 *   this site targets, letting a decorative image contend with the H1
 *   for early bandwidth is exactly the LCP regression noted above.
 * - On small screens the mark stacks below the copy at a contained
 *   size rather than sitting behind it. Behind-the-text was tried
 *   first and failed: even at 20% opacity the artwork cut a visible
 *   seam straight through the subhead and dropped body-copy contrast,
 *   which is unacceptable on the mobile-first path this site is built
 *   around. Stacked keeps the mark visible without costing legibility.
 * - The asset carries a feathered alpha edge rather than a hard
 *   rectangular crop, so it dissolves into the page background instead
 *   of reading as a pasted-in photo panel against --color-background.
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [logoAlreadySeen, setLogoAlreadySeen] = useState(true); // default true = safe (no replay) until checked

  useEffect(() => {
    const seen = sessionStorage.getItem(SEEN_KEY);
    if (!seen) {
      setLogoAlreadySeen(false);
      sessionStorage.setItem(SEEN_KEY, "1");
    }
  }, []);

  const playLogoAnimation = !shouldReduceMotion && !logoAlreadySeen;

  const textReveal = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay, ease: [0.4, 0, 0.2, 1] as const },
        };

  return (
    <Section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-10">
        {/* Copy column */}
        <div className="relative z-10">
          <LogoMarkAnimated
            className="mb-5 h-14 w-14 sm:h-16 sm:w-16"
            skipAnimation={!playLogoAnimation}
          />

          <motion.div
            {...textReveal(0.02)}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-lime" aria-hidden="true" />
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-offwhite/70 sm:text-[0.78rem]">
              WhatsApp-First Digital Systems &amp; Branding Studio
            </span>
          </motion.div>

          <motion.h1
            {...textReveal(0.05)}
            className="max-w-[14ch] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05]"
          >
            BUILT TO BE <span className="text-lime">SEEN.</span>
          </motion.h1>

          <motion.p
            {...textReveal(0.12)}
            className="mt-6 max-w-[52ch] text-[1.15rem] text-offwhite/85 lg:text-[1.25rem]"
          >
            If your business, organisation or event looks smaller online than it
            really is, Arsiekeh builds the digital systems &mdash; websites,
            branding and intelligent WhatsApp tools &mdash; that finally match
            what you&apos;re capable of.
          </motion.p>

          <motion.div {...textReveal(0.19)} className="mt-9 flex flex-wrap gap-4">
            <MagneticButton>
              <Button href="/start-a-project" variant="primary" size="lg">
                START A PROJECT →
              </Button>
            </MagneticButton>
            <Button href="#work" variant="secondary" size="lg">
              VIEW OUR WORK ↓
            </Button>
          </motion.div>
        </div>

        {/* Brand mark visual */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden="true"
          className="pointer-events-none order-last"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[520px]">
            <Image
              src="/brand/hero-mark.webp"
              alt=""
              fill
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 520px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      <CapabilityStrip />

      <motion.div
        {...textReveal(0.3)}
        className="mt-12 hidden items-center justify-end gap-3 lg:flex"
        aria-hidden="true"
      >
        <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-offwhite/50">
          Scroll
        </span>
        <span className="h-8 w-px bg-border" />
        <motion.span
          animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-offwhite/50"
        >
          ↓
        </motion.span>
      </motion.div>
    </Section>
  );
}
