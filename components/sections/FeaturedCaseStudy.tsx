import Image from "next/image";
import { Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/tilt-card";
import { getProjectsWithCaseStudies } from "@/lib/content/projects";

/**
 * 08 — FEATURED CASE STUDY. Blueprint v3 Section 3.08 (UNCHANGED).
 * Pulls the first project with a full case study from the content
 * layer rather than hardcoding Scent Vault SL's copy a second time —
 * single source of truth is lib/content/projects.ts.
 */
export function FeaturedCaseStudy() {
  const featured = getProjectsWithCaseStudies()[0];
  if (!featured?.caseStudy) return null;
  const cs = featured.caseStudy;

  const cols = [
    { label: "Challenge", body: cs.challenge },
    { label: "Objective", body: cs.objective },
    { label: "Approach", body: cs.approach },
    { label: "Experience", body: cs.experience },
    { label: "Result", body: cs.result },
  ];

  return (
    <Section>
      <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8 sm:p-12 lg:p-14">
        <div className="mb-3 text-[0.95rem] font-semibold text-lime">
          Featured case study
        </div>
        <h2 className="mb-8 max-w-[28ch] text-[clamp(1.75rem,3.5vw,2.3rem)] font-bold">
          {featured.title}
        </h2>
        {featured.thumbnailSrc && (
          <TiltCard>
            <div className="relative mb-10 aspect-video overflow-hidden rounded-[var(--radius-md)] border border-border">
              <Image
                src={featured.thumbnailSrc}
                alt={featured.thumbnailAlt}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          </TiltCard>
        )}
        <div className="grid gap-7 md:grid-cols-5 md:gap-5">
          {cols.map((col) => (
            <div key={col.label}>
              <h4 className="mb-2 text-[0.85rem] font-semibold uppercase tracking-wide text-muted">
                {col.label}
              </h4>
              <p className="text-[0.92rem] text-offwhite/85">{col.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-9">
          <Button href={`/work/${featured.slug}`} variant="secondary">
            Read the full case study →
          </Button>
        </div>
      </div>
    </Section>
  );
}
