import type { MetadataRoute } from "next";
import { projects } from "@/lib/content/projects";
import { insightArticles } from "@/lib/content/insights";

const baseUrl = "https://arsiekeh.com"; // update once the real domain is live

/**
 * Tier 1 Must-Have (Build Prompt / Technical Foundation → SEO).
 * Includes every static route plus dynamic case-study and insight
 * pages — pulled from the same content source as the pages themselves,
 * so a new project/article is automatically in the sitemap with zero
 * manual edits here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/work`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/insights`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/start-a-project`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = projects
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({
      url: `${baseUrl}/work/${p.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const insightRoutes: MetadataRoute.Sitemap = insightArticles
    .filter((a) => a.published)
    .map((a) => ({
      url: `${baseUrl}/insights/${a.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticRoutes, ...caseStudyRoutes, ...insightRoutes];
}
