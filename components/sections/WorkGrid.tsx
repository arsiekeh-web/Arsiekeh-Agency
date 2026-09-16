"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectCard } from "@/components/sections/ProjectCard";
import type { Project } from "@/lib/content/types";

const filters: { label: string; value: Project["clientType"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Business", value: "business" },
  { label: "Organisation", value: "organisation" },
  { label: "Event", value: "event" },
];

/**
 * WorkGrid — client-side filtered project grid. Tier 2 "animated
 * project filtering" from the Build Prompt / Feature Stack.
 *
 * Filters by clientType, which every Project already carries (see
 * types.ts) — no new data modeling needed, this only adds UI on top
 * of an existing field.
 */
export function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]["value"]>(
    "all"
  );

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.clientType === active),
    [projects, active]
  );

  return (
    <div>
      <div
        className="mb-10 flex flex-wrap gap-2.5"
        role="group"
        aria-label="Filter projects by client type"
      >
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            aria-pressed={active === f.value}
            className={`rounded-full border px-4 py-2 text-[0.88rem] font-medium transition-colors duration-[var(--motion-fast)] ${
              active === f.value
                ? "border-lime bg-lime text-background"
                : "border-border text-offwhite/70 hover:border-offwhite/40 hover:text-offwhite"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-[0.98rem] text-muted">
          No {active} projects yet — check back soon, or view all work above.
        </p>
      )}
    </div>
  );
}
