"use client";

import { Reveal } from "@/components/ui/reveal";

type CaseStudySection = { heading: string; body: string };

/**
 * CaseStudyNarrative — Tier 3 "scroll-driven featured case study" from
 * the Build Prompt / Feature Stack: "progressively reveal challenge →
 * approach → design → result."
 *
 * Reuses the existing Reveal primitive (Tier 2) rather than building a
 * new scroll-animation system — each section fades/rises in as it
 * enters the viewport, staggered so the five beats read as a sequence.
 * Client component isolated to just this section — the surrounding
 * case study page (metadata, generateStaticParams, hero, images)
 * stays a server component; only the narrative list needs interactivity.
 */
export function CaseStudyNarrative({
  sections,
}: {
  sections: CaseStudySection[];
}) {
  return (
    <div className="space-y-12">
      {sections.map((s, i) => (
        <Reveal key={s.heading} delay={i * 0.08}>
          <div className="max-w-[68ch]">
            <h2 className="mb-4 text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold">
              {s.heading}
            </h2>
            <p className="text-[1.02rem] text-offwhite/85">{s.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
