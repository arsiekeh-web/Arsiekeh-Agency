import type { Metadata } from "next";
import { Section } from "@/components/ui/Container";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "About — Arsiekeh Agency",
  description:
    "The idea behind Arsiekeh Agency and how we work with clients from first message to launch.",
};

const processSteps = [
  {
    num: "01",
    title: "Talk",
    body: "Tell us what you need on WhatsApp. We ask questions until we understand the real problem, not just the request.",
  },
  {
    num: "02",
    title: "Plan",
    body: "We recommend the right system for your goals and budget, and lay out a clear scope before anything is built.",
  },
  {
    num: "03",
    title: "Build",
    body: "Design and development happen together, as one point of contact — you're never coordinating separate vendors.",
  },
  {
    num: "04",
    title: "Launch",
    body: "We go live together, and check that everything actually works on real phones and real connections before calling it done.",
  },
  {
    num: "05",
    title: "Support",
    body: "After launch, we stay reachable on WhatsApp for updates, questions, or anything that needs adjusting.",
  },
];

/**
 * About page. Blueprint v3 Section 3.12 (full version) + founder speech
 * material sourced from the conversation transcript. The homepage
 * AboutTeaser links here for "Read the full story →".
 */
export default function AboutPage() {
  return (
    <>
      <Section className="pb-8 pt-12 sm:pt-16">
        <div className="mb-4 text-[0.95rem] font-semibold text-lime">
          About Arsiekeh
        </div>
        <h1 className="max-w-[22ch] text-[clamp(2rem,5vw,3.4rem)] font-bold">
          We don&apos;t just make things look good. We make potential
          visible.
        </h1>
        <p className="mt-5 max-w-[60ch] text-[1.1rem] text-offwhite/85">
          The idea behind Arsiekeh Agency, why it exists, and how we
          actually work with clients from first message to launch.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-12">
          <div
            className="flex aspect-square items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface p-4 text-center text-[0.85rem] text-muted"
            role="img"
            aria-label="Founder photo placeholder"
          >
            Founder photo — placeholder
          </div>
          <div className="space-y-4 text-offwhite/85">
            <p>
              Have you ever seen a business you knew was good — but from the
              outside, it just didn&apos;t look like it? The product was
              good. The service was good. The person behind it was
              talented. But something was missing: a logo that looked
              rushed, social media that felt inconsistent, no proper
              website.
            </p>
            <p>
              The customer doesn&apos;t get to see what&apos;s happening
              behind the scenes. They judge what they can see — and that
              means a business can have real potential and still be
              overlooked. That&apos;s the gap Arsiekeh Agency exists to
              close.
            </p>
            <p>
              We&apos;re a WhatsApp-first digital systems and branding
              studio built around one idea: there are businesses,
              organisations and events with more potential than their
              current presentation communicates. We build the websites,
              brand identities, and intelligent WhatsApp systems that let
              that potential actually show.
            </p>
            <p>
              We&apos;re young, and we&apos;re building deliberately — not
              pretending to be a massive agency, but learning, shipping
              real work, and helping people become more visible, more
              credible, and easier to trust from the very first
              impression.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface">
        <div className="mb-12 max-w-[42ch]">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            How we actually work
          </h2>
          <p className="mt-4 text-[1.05rem] text-muted">
            The homepage shows the 3-step version. Here&apos;s the full
            process behind it.
          </p>
        </div>
        <div className="flex flex-col">
          {processSteps.map((step, i) => (
            <div
              key={step.num}
              className={`grid grid-cols-[56px_1fr] gap-5 py-7 ${
                i === 0 ? "" : "border-t border-border"
              }`}
            >
              <span className="font-heading text-base font-bold text-lime">
                {step.num}
              </span>
              <div>
                <h3 className="mb-2 text-[1.1rem] font-bold">
                  {step.title}
                </h3>
                <p className="text-[0.95rem] text-muted">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
