import { Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site-config";

/**
 * 14 — FINAL CTA. Blueprint v3 Section 3.14 (UNCHANGED).
 * Reused at the bottom of every page, not just the homepage, so the
 * "prominent WhatsApp path" Tier 1 requirement holds site-wide.
 */
interface FinalCtaProps {
  heading?: string;
}

export function FinalCta({
  heading = "Got something to build?",
}: FinalCtaProps) {
  return (
    <Section className="border-y border-border bg-surface">
      <h2 className="mb-8 max-w-[16ch] text-[clamp(2rem,5vw,3.2rem)] font-bold">
        {heading}
      </h2>
      <div className="flex flex-wrap gap-4">
        <Button href="/start-a-project" variant="primary" size="lg">
          START A PROJECT →
        </Button>
        <Button
          href={site.whatsappUrl}
          variant="secondary"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          MESSAGE US ON WHATSAPP
        </Button>
      </div>
    </Section>
  );
}
