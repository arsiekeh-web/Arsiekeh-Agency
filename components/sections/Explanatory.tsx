import { Section } from "@/components/ui/Container";

/**
 * 09 — EXPLANATORY PARAGRAPH. Blueprint v3 Section 3.09 (CHANGED — must
 * remove specific pricing figures). Do not add a number to this copy;
 * the whole point of this rewrite was removing the NLe 1,500 figure
 * that existed in v2. See Pricing Display Rules.
 */
export function Explanatory() {
  return (
    <Section className="border-y border-border bg-surface">
      <p className="max-w-[68ch] text-[1.1rem] text-offwhite/85">
        Arsiekeh Agency handles design, development and launch as one point
        of contact — so you&apos;re not coordinating a designer, a developer
        and an automation specialist separately. Every system is built
        mobile-first and WhatsApp-first, because that&apos;s how people here
        actually find, message and buy from you. Pricing is built for real
        local budgets, with payment plans available on every project —
        message us on WhatsApp and we&apos;ll recommend the right system and
        a clear starting point for your budget.
      </p>
    </Section>
  );
}
