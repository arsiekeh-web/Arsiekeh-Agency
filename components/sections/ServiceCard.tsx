"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { whatsappMessages } from "@/lib/whatsapp";
import type { ServiceItem } from "@/lib/content/types";

/**
 * ServiceCard — Tier 2 "Interactive Services" from the Build Prompt /
 * Feature Stack ("service cards as miniature demonstrations").
 *
 * Kept deliberately restrained relative to the Feature Stack's fuller
 * ambition (category-specific micro-demos per service group) — that's
 * a Tier 3 idea. This is the Tier 2 version: a hover-lift plus a CTA
 * that reveals rather than sitting permanently visible, so the resting
 * grid reads calmer and the interaction still gives real feedback.
 * Falls back gracefully with no JS/motion — the CTA is always in the
 * DOM and keyboard-focusable, never hidden from assistive tech.
 */
export function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <motion.div
      className="group relative bg-background p-7"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <h3 className="mb-2 text-[1.05rem] font-bold transition-colors duration-200 group-hover:text-lime">
        {item.name}
      </h3>
      <p className="text-[0.92rem] text-muted">{item.description}</p>
      <div className="mt-3.5 overflow-hidden">
        <Button
          href={whatsappMessages.service(item.name)}
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          className="text-[0.88rem] opacity-70 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          Starting from — get a quote →
        </Button>
      </div>
    </motion.div>
  );
}
