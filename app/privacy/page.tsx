import type { Metadata } from "next";
import { Section } from "@/components/ui/Container";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy — Arsiekeh Agency",
  description:
    "Privacy Policy for Arsiekeh Agency's website and client communications.",
};

export default function PrivacyPage() {
  return (
    <Section className="pb-20 pt-12 sm:pt-16">
      <div className="mb-4 text-[0.95rem] font-semibold text-lime">
        Legal
      </div>
      <h1 className="text-[clamp(2rem,5vw,2.6rem)] font-bold">
        Privacy Policy
      </h1>
      <p className="mt-2 text-[0.88rem] text-muted">Last updated: 2026</p>

      <div className="mt-12 max-w-[72ch] space-y-6 text-[0.98rem] text-offwhite/80">
        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            1. What We Collect
          </h2>
          <p>
            When you use the Start a Project form or message us on
            WhatsApp, we may collect your name, WhatsApp number, email
            address (if provided), and details about your project,
            including your selected budget range.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            2. How We Use It
          </h2>
          <p>
            We use this information solely to respond to your inquiry,
            recommend the right system for your needs, and deliver
            services you&apos;ve engaged us for. We do not sell or rent
            your information to third parties.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            3. WhatsApp Communication
          </h2>
          <p>
            Conversations conducted over WhatsApp are subject to
            WhatsApp&apos;s own privacy practices in addition to this
            policy. We use WhatsApp as our primary communication channel
            by design.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            4. Analytics
          </h2>
          <p>
            We may use privacy-respecting website analytics to understand
            general traffic patterns. This does not involve invasive
            tracking or cross-site profiling.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            5. Data Retention
          </h2>
          <p>
            We retain project-related information for as long as
            necessary to deliver services and maintain reasonable business
            records, after which it may be deleted.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            6. Your Rights
          </h2>
          <p>
            You may request that we delete personal information we hold
            about you by contacting us on WhatsApp, subject to any legal or
            contractual obligations that require us to retain certain
            records.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            7. Security
          </h2>
          <p>
            We take reasonable measures to protect information you share
            with us, including secure form handling and standard website
            security practices.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this policy from time to time. The &quot;last
            updated&quot; date above reflects the most recent revision.
          </p>
        </section>

        <section>
          <h2 className="mb-3.5 text-[1.3rem] font-bold text-offwhite">
            9. Contact
          </h2>
          <p>
            Questions about this policy can be sent via WhatsApp at{" "}
            {site.whatsappNumber}.
          </p>
        </section>
      </div>
    </Section>
  );
}
