import { Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * 12 — ABOUT ARSIEKEH. Blueprint v3 Section 3.12 (UNCHANGED).
 * This is the homepage teaser only; the full founder narrative and
 * 5-step process live on /about.
 */
export function AboutTeaser() {
  return (
    <Section className="border-y border-border bg-surface">
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <p className="font-heading text-[clamp(1.3rem,2.3vw,1.7rem)] font-semibold leading-snug">
          &quot;We don&apos;t just make things look good. We make potential
          visible.&quot;
        </p>
        <div className="space-y-4 text-offwhite/80">
          <p>
            Arsiekeh Agency was built around one idea: there are businesses,
            organisations and events with more potential than their current
            presentation communicates — and that gap can be closed.
          </p>
          <p>
            We&apos;re young, still learning, still building — and building
            deliberately: helping people not just look better online, but
            become more visible, more credible, and easier to trust from the
            very first impression.
          </p>
          <Button href="/about" variant="ghost" className="mt-2">
            Read the full story →
          </Button>
        </div>
      </div>
    </Section>
  );
}
