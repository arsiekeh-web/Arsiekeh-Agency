import { Section } from "@/components/ui/Container";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/content/projects";

/**
 * 03 — SELECTED WORK. Blueprint v3 Section 3.03 (UNCHANGED).
 * Renders all three proof projects from the shared content layer —
 * the Work index page renders the same data, so a new project only
 * needs to be added once in lib/content/projects.ts.
 */
export function SelectedWork() {
  return (
    <Section id="work">
      <div className="mb-12 max-w-[42ch]">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          Real work, already live.
        </h2>
        <p className="mt-4 text-[1.05rem] text-muted">
          Not mockups — systems currently running for real clients.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
