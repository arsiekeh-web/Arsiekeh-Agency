import type { Metadata } from "next";
import { Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/sections/FinalCta";
import { serviceCategories } from "@/lib/content/services";
import { whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Services — Arsiekeh Agency",
  description:
    "Websites, branding, AI WhatsApp systems, PWAs and event systems for Sierra Leone. Custom quotes on WhatsApp.",
};

/**
 * Services page. Per Pricing Display Rules: service names and short
 * descriptions only, every CTA routes to /start-a-project — never a
 * number, range, or pricing table on this page. See
 * lib/content/services.ts for the enforced type shape (no price field
 * exists on ServiceItem at all).
 */
export default function ServicesPage() {
  return (
    <>
      <Section className="pb-8 pt-12 sm:pt-16">
        <div className="mb-4 text-[0.95rem] font-semibold text-lime">
          Services
        </div>
        <h1 className="max-w-[22ch] text-[clamp(2rem,5vw,3.4rem)] font-bold">
          Systems built for how you actually work.
        </h1>
        <p className="mt-5 max-w-[60ch] text-[1.1rem] text-offwhite/85">
          Every service below rolls into a custom quote after a short
          WhatsApp conversation — nothing here is a fixed shelf price,
          because no two projects need exactly the same scope.
        </p>
      </Section>

      {serviceCategories.map((category, catIndex) => (
        <Section
          key={category.slug}
          className={`py-12 sm:py-16 ${
            catIndex < serviceCategories.length - 1
              ? "border-b border-border"
              : ""
          }`}
        >
          <div className="mb-8 max-w-[56ch]">
            <h2 className="mb-2.5 text-[clamp(1.5rem,3vw,2rem)] font-bold">
              {category.title}
            </h2>
            <p className="text-[0.98rem] text-muted">
              {category.description}
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-border bg-border md:grid-cols-2">
            {category.items.map((item) => (
              <div key={item.name} className="bg-background p-7">
                <h3 className="mb-2 text-[1.05rem] font-bold">
                  {item.name}
                </h3>
                <p className="text-[0.92rem] text-muted">
                  {item.description}
                </p>
                <Button
                  href={whatsappMessages.service(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  className="mt-3.5 text-[0.88rem]"
                >
                  Starting from — get a quote →
                </Button>
              </div>
            ))}
          </div>

          {category.slug === "complete-packages" && (
            <div className="mt-10 rounded-[var(--radius-md)] border border-border bg-surface p-7 text-[0.98rem] text-offwhite/85">
              Every package scales to fit your budget, with{" "}
              <strong className="text-lime">
                payment plans available on every project
              </strong>
              . Our most complete systems are priced up to a ceiling
              reserved for the most sophisticated, highest-impact work.
              Message us on WhatsApp and we&apos;ll recommend the right
              system and a clear starting point for your budget.
            </div>
          )}
        </Section>
      ))}

      <FinalCta heading="Not sure which system fits?" />
    </>
  );
            }
