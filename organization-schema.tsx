import { site } from "@/lib/site-config";

/**
 * Tier 1 Must-Have (Build Prompt / Technical Foundation → SEO).
 * Organization + LocalBusiness schema — minimum viable structured data
 * per the blueprint. Sourced entirely from site-config so the WhatsApp
 * number, name and location never drift out of sync with the rest of
 * the site (see Copy Discipline: these must match exactly everywhere).
 *
 * No price/offer data included here — structured data is still public
 * data surfaced to search engines, so the Pricing Display Rules apply
 * here exactly as they do on-page.
 */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.tagline,
    url: "https://arsiekeh.com", // update once the real domain is live
    telephone: site.whatsappNumber,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Freetown",
      addressCountry: "SL",
    },
    areaServed: "Sierra Leone",
    sameAs: [site.instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
