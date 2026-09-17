"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * TiltCard — Tier 3 "one tasteful 3D/WebGL element" from the Build
 * Prompt / Feature Stack.
 *
 * Deliberately NOT Three.js/WebGL. This project's own reference-site
 * scrutiny explicitly ruled out the WebGL-everywhere pattern (Active
 * Theory, Resn) as wrong for this client — it fights the low-data-first
 * principle and the locked Core Web Vitals budget. A CSS 3D transform
 * (perspective + rotateX/Y, driven by cursor position) gives genuine,
 * responsive depth without a rendering engine, ~100KB+ of extra JS, or
 * a WebGL context to manage.
 *
 * Satisfies the Build Prompt's three qualifiers naturally:
 * - "Performance-budgeted": CSS transforms on already-rendered DOM, no
 *   additional bundle weight beyond Motion (already a dependency).
 * - "Lazy-loaded": nothing to lazy-load — no separate 3D asset/scene.
 * - "Static fallback": onMouseMove simply never fires on touch (it's a
 *   mouse-only event), and prefers-reduced-motion disables it outright
 *   — same pattern as MagneticButton, just without needing an explicit
 *   pointer-type check since touch never triggers this handler at all.
 */
export function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 12;
    const rotateX = (0.5 - py) * 12;
    setRotate({ x: rotateX, y: rotateY });
  }

  function handleMouseLeave() {
    setRotate({ x: 0, y: 0 });
  }

  return (
    <div style={{ perspective: 800 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
