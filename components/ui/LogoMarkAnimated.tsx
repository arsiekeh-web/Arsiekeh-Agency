"use client";

import { motion, useReducedMotion } from "motion/react";
import { LogoMark } from "@/components/ui/LogoMark";

/**
 * LogoMarkAnimated — Tier 3 signature moment.
 *
 * Per Blueprint v2/v3 "Logo & Brand Concept": the dashed red stroke is
 * the "before" state (sketch/plan), the solid lime letterform is the
 * "after" state (built/real) — this animation is the site's one-liner
 * rendered as motion, problem → solution, not decoration.
 *
 * Sequence: red dashed stroke draws in first (pathLength 0 → 1), then
 * the lime letterform fades/draws in over it, overlapping rather than
 * cutting hard from one to the other. Built with Motion's pathLength
 * animation rather than GSAP — this is a draw-and-reveal sequence, not
 * a path morph, so Motion (already a dependency) covers it without a
 * second animation library on the page.
 *
 * Deliberately kept in its own file, separate from LogoMark.tsx — this
 * needs "use client" (Motion, useReducedMotion), and LogoMark.tsx must
 * stay server-renderable so importing the plain mark in Footer.tsx
 * doesn't force an unnecessary client boundary there.
 *
 * Use ONLY in the hero, once per browser session — not in nav/footer/
 * PageTransition, which should keep using the plain LogoMark. Hero.tsx
 * gates repeat plays via sessionStorage (see skipAnimation prop) so
 * this doesn't replay on every navigation back to the homepage.
 */
interface LogoMarkAnimatedProps {
  className?: string;
  /** Delay before the sequence starts, in seconds. */
  startDelay?: number;
  /** Fires when the full sequence completes. */
  onComplete?: () => void;
  /** Render the final state instantly with no animation — used for repeat visits within a session, see Hero.tsx's sessionStorage guard. */
  skipAnimation?: boolean;
}

export function LogoMarkAnimated({
  className,
  startDelay = 0,
  onComplete,
  skipAnimation = false,
}: LogoMarkAnimatedProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion || skipAnimation) {
    return <LogoMark className={className} />;
  }

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Arsiekeh Agency logo"
    >
      <motion.path
        d="M8 32 L18 8 L20 8 L30 32"
        stroke="var(--color-red)"
        strokeWidth="2.5"
        strokeDasharray="4 3"
        fill="none"
        initial={{ pathLength: 0, opacity: 0.9 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.7,
          delay: startDelay,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
      <motion.path
        d="M12 32 L21 10 L23 10 L32 32 M15.5 24 H28.5"
        stroke="var(--color-lime)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: startDelay + 0.55,
          ease: [0.4, 0, 0.2, 1],
        }}
        onAnimationComplete={onComplete}
      />
    </svg>
  );
}
