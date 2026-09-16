"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds, for revealing a list of items in sequence. */
  delay?: number;
};

/**
 * Reveal — fade-and-rise on scroll into view. Tier 2 "scroll reveals"
 * from the Build Prompt / Feature Stack.
 *
 * Interaction Hierarchy placement: this is tier 4 (Storytelling), not
 * tier 6 (Decoration) — it's used to introduce sections in a
 * deliberate reading order, not as ambient movement. Kept to a single
 * subtle fade+rise, not a library of different reveal styles, so it
 * doesn't compete with the signature logo animation for attention.
 *
 * prefers-reduced-motion: globals.css handles CSS transitions/animations
 * globally, but Motion's animate prop runs in JS and needs its own
 * check — useReducedMotion() here disables the fade/rise and renders
 * content in its final state immediately, with no motion at all.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6, // matches --motion-slow
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.4, 0, 0.2, 1], // matches --ease-standard
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
