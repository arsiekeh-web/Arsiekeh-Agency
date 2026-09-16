"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * MagneticButton — Tier 2 "magnetic/tactile buttons" from the Build
 * Prompt / Feature Stack: "desktop only; clear idle/hover/pressed
 * states; disabled on touch."
 *
 * Deliberately NOT applied to the shared Button primitive globally —
 * the Feature Stack scopes this to specific high-emphasis CTAs, not
 * every button site-wide. Use as a wrapper around a single Button,
 * typically the hero primary CTA.
 *
 * Touch detection uses matchMedia('(pointer: coarse)') rather than
 * viewport width, since the constraint is about input method (finger
 * vs. cursor), not screen size — a touch laptop at desktop width
 * should still get it disabled.
 */
export function MagneticButton({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isCoarsePointer, setIsCoarsePointer] = useState(true); // default true = safe (no effect) until confirmed otherwise
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setIsCoarsePointer(mq.matches);
    const listener = (e: MediaQueryListEvent) => setIsCoarsePointer(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const disabled = isCoarsePointer || shouldReduceMotion;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    // Damped, not 1:1 — a subtle pull, not the button chasing the cursor.
    setOffset({ x: relX * 0.25, y: relY * 0.3 });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
