import { Section } from "@/components/ui/Container";

/**
 * 07 — THE ARSIEKEH DIFFERENCE. Blueprint v3 Section 3.07 (CHANGED —
 * pricing line updated). The 15,000 NLe ceiling is referenced
 * qualitatively as a credibility anchor per the Pricing Display Rules —
 * it is a real figure named in copy, which the blueprint explicitly
 * permits ("usable as a credibility anchor... without itemizing the
 * table"), not a violation of the no-published-pricing-table rule.
 */
const points = [
  {
    title: "WhatsApp-first by design",
    body: "We build around the platform people already use every day.",
  },
  {
    title: "One relationship, not four vendors",
    body: "Branding, website, AI systems and event tools from a single team.",
  },
  {
    title: "Pricing built for this market",
    body: "Real local budgets, payment plans on every project, highest package capped at 15,000 NLe.",
  },
  {
    title: "Mobile and low-data friendly",
    body: "Everything works on the phones and connections people actually have.",
  },
];

export function Difference() {
  return (
    <Section>
      <div className="mb-12 max-w-[42ch]">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          Why clients choose Arsiekeh
        </h2>
      </div>
      <div className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-border bg-border md:grid-cols-2">
        {points.map((point) => (
          <div key={point.title} className="bg-background p-8">
            <h3 className="mb-2.5 text-[1.1rem] font-bold text-lime">
              {point.title}
            </h3>
            <p className="text-[0.95rem] text-muted">{point.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
