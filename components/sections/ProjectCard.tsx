"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content/types";
import { stashProjectTransition } from "@/components/layout/PageTransition";

const categoryLabel: Record<Project["clientType"], string> = {
  business: "Business",
  organisation: "Organisation",
  event: "Event",
};

/**
 * ProjectCard — used on the homepage Selected Work section and the full
 * Work index page. Links to the internal case study route when one
 * exists (`hasCaseStudy`); otherwise links out to the live external
 * site. Never both, so the user always has exactly one clear next step.
 *
 * Client component (needed for the case-study link's click handler,
 * which stashes this project's thumbnail/title via
 * stashProjectTransition() right before navigating, so
 * PageTransition's overlay can show the same image/title rather than
 * a generic logo flash — see PageTransition.tsx for the full
 * reasoning).
 */
export function ProjectCard({ project }: { project: Project }) {
  const caseStudyHref = project.hasCaseStudy
    ? `/work/${project.slug}`
    : null;

  function handleCaseStudyClick() {
    if (project.thumbnailSrc) {
      stashProjectTransition({
        title: project.title,
        thumbnailSrc: project.thumbnailSrc,
        thumbnailAlt: project.thumbnailAlt,
      });
    }
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface transition-colors duration-200 hover:border-lime/40">
      {project.thumbnailSrc ? (
        <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
          <Image
            src={project.thumbnailSrc}
            alt={project.thumbnailAlt}
            fill
            className="object-cover object-top transition-transform duration-[var(--motion-slow)] ease-[var(--ease-standard)] group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      ) : (
        <div
          className="flex aspect-[4/3] items-center justify-center border-b border-border bg-[var(--color-surface)] px-4 text-center text-sm text-muted"
          role="img"
          aria-label={project.thumbnailAlt}
        >
          {project.title} — screenshot
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 text-sm text-lime">
          {categoryLabel[project.clientType]} · {project.category}
        </div>
        <h3 className="mb-2 text-[1.2rem] font-bold">{project.title}</h3>
        <p className="flex-1 text-[0.95rem] text-muted">{project.summary}</p>
        {caseStudyHref ? (
          <Link
            href={caseStudyHref}
            onClick={handleCaseStudyClick}
            className="mt-4 inline-block text-[0.9rem] font-semibold text-offwhite/80 underline-offset-4 hover:text-lime hover:underline"
          >
            Read the case study →
          </Link>
        ) : project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[0.9rem] font-semibold text-offwhite/80 underline-offset-4 hover:text-lime hover:underline"
          >
            View live site →
          </a>
        ) : null}
      </div>
    </div>
  );
}
