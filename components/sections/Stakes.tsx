import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/reveal";

/**
 * 02 — STAKES. Blueprint v3 Section 3.02 (CHANGED from v2 — new argument).
 * Copy is locked from the Company Profile 2026 source, not paraphrased.
 */
const stakes = [
  {
    title: "No system behind the WhatsApp number",
    body: "Most businesses and organisations here still run mainly on WhatsApp and word of mouth. When someone searches for you, they find nothing — or a slow, generic site that was never built for how people here actually buy, book or connect.",
  },
  {
    title: "A site that doesn't work for how people here buy",
    body: "The ones that do have a website often paid for something that doesn't talk to their WhatsApp, doesn't work well on low data, and doesn't help them take orders or registrations after hours.",
  },
  {
    title: "One shot, for events",
    body: "For events the cost is sharper. You get one shot. No professional invitation site, no easy RSVP, no digital tickets, no clean way for guests to find details — and the moment passes.",
  },
];

export function Stakes() {
  return (
    <Section className="border-y border-border bg-surface">
      <div className="mb-12 max-w-[42ch]">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          Right now, you&apos;re invisible where it counts.
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {stakes.map((stake, i) => (
          <Reveal key={stake.title} delay={i * 0.12}>
            <div className="border-l-2 border-red pl-5">
              <h3 className="mb-2.5 text-[1.15rem] font-semibold">
                {stake.title}
              </h3>
              <p className="text-[0.98rem] text-offwhite/75">{stake.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-12 max-w-[60ch] text-[1.1rem] text-offwhite">
        The result is the same: good work stays invisible, sales are lost at
        night, and organisers look less professional than they actually are.
      </p>
    </Section>
  );
}
