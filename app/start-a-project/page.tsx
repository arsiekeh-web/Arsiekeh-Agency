import type { Metadata } from "next";
import { Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProjectForm } from "@/components/sections/ProjectForm";
import { whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Start a Project — Arsiekeh Agency",
  description:
    "Tell us what you're building. We'll follow up on WhatsApp to recommend the right system for your budget.",
};

export default function StartAProjectPage() {
  return (
    <Section className="pb-20 pt-12 sm:pt-16">
      <div className="mb-4 text-[0.95rem] font-semibold text-lime">
        Start a Project
      </div>
      <h1 className="max-w-[22ch] text-[clamp(2rem,5vw,3.4rem)] font-bold">
        Tell us what you&apos;re building.
      </h1>
      <p className="mt-5 max-w-[60ch] text-[1.1rem] text-offwhite/85">
        This isn&apos;t a checkout — it&apos;s context for the WhatsApp
        conversation that follows. We&apos;ll read this, then message you to
        talk through the right system for your budget.
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="text-[0.98rem] text-muted">
          <h3 className="mb-2.5 font-heading text-[1.1rem] font-semibold text-offwhite">
            What happens after you submit
          </h3>
          <p>
            We read your answers, then reach out on WhatsApp within one
            business day to talk through what you actually need — no
            automated quote, no checkout link.
          </p>
          <h3 className="mb-2.5 mt-7 font-heading text-[1.1rem] font-semibold text-offwhite">
            Prefer to skip the form?
          </h3>
          <p>
            Message us directly on WhatsApp any time. It&apos;s the fastest
            way to start a conversation.
          </p>
          <Button
            href={whatsappMessages.general()}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full"
          >
            MESSAGE US ON WHATSAPP
          </Button>
        </div>

        <ProjectForm />
      </div>
    </Section>
  );
  }
