import { Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/LogoMark";

/**
 * 01 — HEADER. Blueprint v3 Section 3.01.
 * Headline and subhead are locked copy — do not paraphrase.
 */
export function Hero() {
  return (
    <Section className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-32 lg:pb-24">
      <LogoMark className="mb-2 h-16 w-16 sm:h-20 sm:w-20" />
      <h1 className="max-w-[14ch] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05]">
        BUILT TO BE SEEN.
      </h1>
      <p className="mt-6 max-w-[58ch] text-[1.15rem] text-offwhite/85 lg:text-[1.3rem]">
        If your business, organisation or event looks smaller online than it
        really is, Arsiekeh builds the digital systems — websites, branding
        and intelligent WhatsApp tools — that finally match what you&apos;re
        capable of.
      </p>
      <div className="mt-9 flex flex-wrap gap-4">
        <Button href="/start-a-project" variant="primary" size="lg">
          START A PROJECT →
        </Button>
        <Button href="#work" variant="secondary" size="lg">
          VIEW OUR WORK ↓
        </Button>
      </div>
    </Section>
  );
}
