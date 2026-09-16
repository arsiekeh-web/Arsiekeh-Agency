import type { MetadataRoute } from "next";

const baseUrl = "https://arsiekeh.com"; // update once the real domain is live

/**
 * Tier 1 Must-Have (Build Prompt / Technical Foundation → SEO).
 * Simple, permissive — nothing on this site needs to be hidden from
 * search engines. Points at the dynamic sitemap above.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
