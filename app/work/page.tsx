import type { Metadata } from "next";
import { Section } from "@/components/ui/Container";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { FinalCta } from "@/components/sections/FinalCta";
import { projects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Our Work — Arsiekeh Agency",
  description:
    "Real, shipped work for businesses, organisations and events across Sierra Leone.",
};

export default function WorkPage() {
  return (
    <>
      <Section className="pb-8 pt-12 sm:pt-16">
        <div className="mb-4 text-[0.95rem] font-semibold text-lime">
          Our Work
        </div>
        <h1 className="max-w-[22ch] text-[clamp(2rem,5vw,3.4rem)] font-bold">
          Real systems, already live.
        </h1>
        <p className="mt-5 max-w-[60ch] text-[1.1rem] text-offwhite/85">
          Every project here is shipped and running for a real client — a
          business, an organisation, or an event. No mockups, no invented
          results.
        </p>
      </Section>

      <Section className="pt-0">
        <WorkGrid projects={projects} />
      </Section>

      <FinalCta />
    </>
  );
}
