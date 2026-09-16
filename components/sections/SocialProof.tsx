import { Section } from "@/components/ui/Container";

/**
 * 11 — SOCIAL PROOF. Blueprint v3 Section 3.11 (UNCHANGED): "Real
 * testimonials only. Omit the section entirely if none exist yet,
 * rather than fabricate quotes."
 *
 * No testimonials exist in the content layer yet, so this renders an
 * honest internal-facing placeholder rather than fabricated quotes.
 * Once real testimonials exist in lib/content (or the CMS), replace
 * this component's body with an actual testimonial grid — or, per the
 * blueprint's own instruction, simply remove <SocialProof /> from the
 * homepage entirely until then. Left in place now, visibly marked, so
 * it isn't silently forgotten.
 */
export function SocialProof() {
  return (
    <Section>
      <div className="mb-12 max-w-[42ch]">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          Social proof
        </h2>
      </div>
      <div className="max-w-[60ch] rounded-[var(--radius-md)] border border-dashed border-border p-8 text-[0.95rem] text-muted">
        Real client testimonials will appear here once collected. Per the
        blueprint, this section should be removed from the page entirely
        rather than carry fabricated quotes — this placeholder exists only
        so the gap is visible during development, not shipped as-is.
      </div>
    </Section>
  );
}
