import { site } from "@/lib/site-config";

/**
 * Builds a wa.me deep link with a pre-filled message, so tapping a CTA
 * opens WhatsApp with context already typed in — the visitor doesn't
 * have to type "hi, I'm interested in..." themselves.
 *
 * Pattern confirmed live on Scent Vault SL (Arsiekeh's own proof
 * project): every "Order" button opens WhatsApp with the product name
 * pre-filled via wa.me/<number>?text=<encoded>. Reused here for
 * service inquiries, project intake, and general contact.
 *
 * Per Pricing Display Rules: never interpolate a price into the
 * message text. Context (service name, page the visitor came from) is
 * fine — a number is not.
 */
export function buildWhatsAppLink(message: string): string {
  const number = site.whatsappUrl.replace("https://wa.me/", "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

/** Common pre-filled message builders, kept centralized so copy stays consistent. */
export const whatsappMessages = {
  general: () => buildWhatsAppLink("Hello, I'd like to talk about a project with Arsiekeh Agency."),

  service: (serviceName: string) =>
    buildWhatsAppLink(
      `Hello, I'm interested in "${serviceName}" — could you tell me more and give me a starting quote?`
    ),

  project: (fields: {
    clientType?: string;
    need?: string;
    budgetRange?: string;
    timeline?: string;
  }) => {
    const lines = ["Hello, I'd like to start a project with Arsiekeh Agency."];
    if (fields.clientType) lines.push(`Type: ${fields.clientType}`);
    if (fields.need) lines.push(`What I need: ${fields.need}`);
    if (fields.budgetRange) lines.push(`Budget range: ${fields.budgetRange}`);
    if (fields.timeline) lines.push(`Timeline: ${fields.timeline}`);
    return buildWhatsAppLink(lines.join("\n"));
  },

  work: (projectTitle: string) =>
    buildWhatsAppLink(
      `Hello, I saw "${projectTitle}" on the Arsiekeh site and I'd like something similar for my business/organisation/event.`
    ),
} as const;
