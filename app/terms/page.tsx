import type { Metadata } from "next";
import { Section } from "@/components/ui/Container";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service — Arsiekeh Agency",
  description:
    "Terms of Service for Arsiekeh Agency's websites, branding, and digital systems work.",
};

export default function TermsPage() {
  return (
    <Section className="pb-20 pt-12 sm:pt-16">
      <div className="mb-4 text-[0.95rem] font-semibold text-lime">
        Legal
      </div>
      <h1 className="text-[clamp(2rem,5vw,2.6rem)] font-bold">
        Terms of Service
      </h1>
      <p className="mt-2 text-[0.88rem] text-muted">Last updated: 2026</p>

      <div className="mt-12 max-w-[72ch] space-y-6 text-[0.98rem] text-offwhite/80">
        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            1. Overview
          </h2>
          <p>
            These Terms of Service govern your use of the Arsiekeh Agency
            website and any engagement with Arsiekeh Agency
            (&quot;Arsiekeh,&quot; &quot;we,&quot; &quot;us&quot;) for
            websites, branding, WhatsApp systems, or related digital
            services. By contacting us or engaging our services, you agree
            to these terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            2. Services
          </h2>
          <p>
            Arsiekeh Agency provides websites, branding, AI WhatsApp
            systems, progressive web apps, and event digital systems. The
            specific scope, deliverables, and timeline for any project are
            agreed separately in writing (including via WhatsApp) before
            work begins.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            3. Quotes and Pricing
          </h2>
          <p>
            All pricing is provided as a custom quote following a discovery
            conversation. Prices referenced publicly are indicative
            starting points only, not fixed offers. Final pricing depends
            on project scope, complexity, and revisions, and is confirmed
            before work begins. Payment plans are available and agreed on
            a per-project basis.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            4. Client Responsibilities
          </h2>
          <p>
            Clients are responsible for providing accurate information,
            timely feedback, and any content (text, images, logos) needed
            to complete a project. Delays in providing these may affect
            project timelines.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            5. Intellectual Property
          </h2>
          <p>
            Upon full payment, clients receive ownership of the final
            agreed deliverables (e.g. website files, logo files). Arsiekeh
            retains the right to showcase completed work in its own
            portfolio unless otherwise agreed in writing.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            6. Revisions
          </h2>
          <p>
            The number of included revisions is agreed per project before
            work begins. Additional revisions beyond the agreed scope may
            incur additional cost.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            7. Payment
          </h2>
          <p>
            Payment terms, including deposit amounts and payment plan
            schedules, are agreed per project. Work may be paused if
            agreed payment milestones are not met.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            8. Limitation of Liability
          </h2>
          <p>
            Arsiekeh Agency is not liable for indirect, incidental, or
            consequential damages arising from the use of delivered
            systems, to the extent permitted by applicable law.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            9. Changes to These Terms
          </h2>
          <p>
            We may update these terms from time to time. Continued use of
            our services after changes constitutes acceptance of the
            updated terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            10. Contact
          </h2>
          <p>
            Questions about these terms can be sent via WhatsApp at{" "}
            {site.whatsappNumber}.
          </p>
        </section>
      </div>
    </Section>
  );
}
