"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LogoMarkAnimated } from "@/components/ui/LogoMarkAnimated";
import { MagneticButton } from "@/components/ui/magnetic-button";

const SEEN_KEY = "arsiekeh-logo-seen";

/**
 * 01 — HEADER. Blueprint v3 Section 3.01.
 * Headline and subhead are locked copy — do not paraphrase.
 *
 * Tier 3 signature entrance: logo resolve (dashed red → solid lime)
 * plays alongside the headline, not gating it.
 *
 * FIX (see conversation): the first version delayed the H1's visible
 * paint by 1.1s+ to wait for the full logo sequence, on every single
 * page load. Two real problems with that: (1) the H1 is almost
 * certainly the LCP element on this page — delaying it risks the
 * locked LCP ≤2.5s target on the low-end connections this whole site
 * is built for, turning a Tier 3 delight into a Tier 1 regression; and
 * (2) it replayed on every visit, including repeat visits in the same
 * session, which stops reading as a signature moment and starts
 * reading as an animation you can't skip.
 *
 * Current behavior: headline/subhead/CTAs animate in immediately and
 * independently (short, ~0.4s fade-up, no dependency on the logo).
 * The logo plays its full resolve sequence alongside them, but only
 * once per browser session — sessionStorage flags it as seen, so a
 * second pageview within the same session renders the logo in its
 * final state instantly rather than replaying.
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
    <Section className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-32 lg:pb-24">
      <LogoMarkAnimated
        className="mb-2 h-16 w-16 sm:h-20 sm:w-20"
        skipAnimation={!playLogoAnimation}
      />
      <motion.h1
        {...textReveal(0.05)}
        className="max-w-[14ch] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05]"
      >
        BUILT TO BE SEEN.
      </motion.h1>
      <motion.p
        {...textReveal(0.12)}
        className="mt-6 max-w-[58ch] text-[1.15rem] text-offwhite/85 lg:text-[1.3rem]"
      >
        If your business, organisation or event looks smaller online than it
        really is, Arsiekeh builds the digital systems — websites, branding
        and intelligent WhatsApp tools — that finally match what you&apos;re
        capable of.
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
    </Section>
  );
}
