import { Section } from "@/components/ui/Container";

/**
 * 04 — GUIDE. Blueprint v3 Section 3.04 (CHANGED — competency line updated).
 */
export function Guide() {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <p className="font-heading text-[clamp(1.4rem,2.5vw,1.9rem)] font-semibold leading-snug">
          We get it. You&apos;ve put real work into what you&apos;re
          building — it deserves to look and function like it.
        </p>
        <div className="space-y-4 text-offwhite/80">
          <p>
            Arsiekeh Agency is a WhatsApp-first digital systems and branding
            studio based in Sierra Leone. We build around how people here
            actually live and buy: on their phones, inside WhatsApp, often
            on limited data.
          </p>
          <p>
            We&apos;ve already shipped a working online shop with WhatsApp
            ordering, a full church website, and custom event invitation
            systems — real work, live results, not mockups.
          </p>
        </div>
      </div>
    </Section>
  );
}
