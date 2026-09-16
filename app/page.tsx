import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/sections/FinalCta";
import { getProjectBySlug, getProjectsWithCaseStudies } from "@/lib/content/projects";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

// SSG: pre-render every project that actually has a case study at
// build time. Projects without one (hasCaseStudy: false) simply have
// no route generated — visiting their slug directly falls through to
// notFound() below rather than a broken empty page.
export function generateStaticParams() {
  return getProjectsWithCaseStudies().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) return {};
  return {
    title: `${project.title} Case Study — Arsiekeh Agency`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.hasCaseStudy || !project.caseStudy) {
    notFound();
  }

  // notFound() throws and halts rendering; assert explicitly so this
  // reads correctly regardless of tooling's control-flow narrowing.
  const validProject = project!;
  const cs = validProject.caseStudy!;
  const sections = [
    { heading: "Challenge", body: cs.challenge },
    { heading: "Objective", body: cs.objective },
    { heading: "Approach", body: cs.approach },
    { heading: "Experience", body: cs.experience },
    { heading: "Result", body: cs.result },
  ];

  return (
    <>
      <Section className="pb-8 pt-12 sm:pt-16">
        <div className="mb-5 text-[0.88rem] text-muted">
          <Link href="/work" className="hover:text-lime">
            Work
          </Link>{" "}
          / {validProject.title}
        </div>
        <div className="mb-4 text-[0.95rem] font-semibold text-lime">
          {cs.eyebrow}
        </div>
        <h1 className="max-w-[26ch] text-[clamp(2rem,5vw,3rem)] font-bold">
          {validProject.title}
        </h1>
        <div className="mt-7 flex flex-wrap gap-6">
          <div className="text-[0.88rem] text-muted">
            <strong className="mb-1 block text-[0.98rem] text-offwhite">
              Client
            </strong>
            {cs.client}
          </div>
          <div className="text-[0.88rem] text-muted">
            <strong className="mb-1 block text-[0.98rem] text-offwhite">
              Type
            </strong>
            {cs.type}
          </div>
          <div className="text-[0.88rem] text-muted">
            <strong className="mb-1 block text-[0.98rem] text-offwhite">
              What we built
            </strong>
            {cs.builtWhat}
          </div>
          <div className="text-[0.88rem] text-muted">
            <strong className="mb-1 block text-[0.98rem] text-offwhite">
              Status
            </strong>
            {cs.status}
          </div>
        </div>
        {validProject.thumbnailSrc ? (
          <div className="relative mt-10 aspect-video overflow-hidden rounded-[var(--radius-md)] border border-border">
            <Image
              src={validProject.thumbnailSrc}
              alt={validProject.thumbnailAlt}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 896px, 100vw"
              priority
            />
          </div>
        ) : (
          <div
            className="mt-10 flex aspect-video items-center justify-center rounded-[var(--radius-md)] border border-border bg-[var(--color-surface)] text-[0.95rem] text-muted"
            role="img"
            aria-label={validProject.thumbnailAlt}
          >
            {validProject.title} — full site screenshot
          </div>
        )}
      </Section>

      <Section className="pt-0">
        <div className="space-y-12">
          {sections.map((s) => (
            <div key={s.heading} className="max-w-[68ch]">
              <h2 className="mb-4 text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold">
                {s.heading}
              </h2>
              <p className="text-[1.02rem] text-offwhite/85">{s.body}</p>
            </div>
          ))}

          <div className="max-w-[68ch]">
            <div className="grid gap-6 sm:grid-cols-3">
              {cs.resultHighlights.map((h) => (
                <div
                  key={h}
                  className="rounded-[var(--radius-md)] border border-border p-5"
                >
                  <p className="text-[0.95rem] text-offwhite/85">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {validProject.liveUrl && (
          <div className="mt-12">
            <Button
              href={validProject.liveUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the live site →
            </Button>
          </div>
        )}
      </Section>

      <FinalCta />
    </>
  );
}
