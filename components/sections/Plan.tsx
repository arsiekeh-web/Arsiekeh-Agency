import { Section } from "@/components/ui/Container";

/**
 * 06 — PLAN. Blueprint v3 Section 3.06 (UNCHANGED — word-for-word from v2).
 */
const steps = [
  {
    num: "01",
    title: "Talk",
    body: "Tell us what you need on WhatsApp. We listen and recommend the right system for your budget.",
  },
  {
    num: "02",
    title: "We build it",
    body: "Design and development as one point of contact. Payment plans available.",
  },
  {
    num: "03",
    title: "You launch",
    body: "Go live, with support afterwards if anything needs updating.",
  },
];

export function Plan() {
  return (
    <Section className="border-y border-border bg-surface">
      <div className="mb-12 max-w-[42ch]">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          How it works
        </h2>
      </div>
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((step) => (
          <div key={step.num}>
            <span className="mb-4 block font-heading text-sm font-bold text-lime">
              {step.num}
            </span>
            <h3 className="mb-2.5 text-[1.3rem] font-bold">{step.title}</h3>
            <p className="text-[0.95rem] text-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
