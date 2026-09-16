/**
 * Content type definitions — these mirror the eventual CMS schema
 * (Sanity) field-for-field. Pages and section components consume these
 * types regardless of whether the data comes from this local module or
 * a live CMS query later; swapping the source in `projects.ts` /
 * `insights.ts` should never require touching a component.
 *
 * Hard constraint from Blueprint v3 / Build Prompt Pricing Display
 * Rules: no `Service` or `Project` type may carry a price field. Pricing
 * is handled exclusively through copy ("Starting from…") and the
 * WhatsApp quote flow — never as structured data that could be rendered
 * as a table or numeric range on the public site.
 */

export type ClientType = "business" | "organisation" | "event";

export interface Project {
  slug: string;
  title: string;
  clientType: ClientType;
  category: string; // short display label, e.g. "WhatsApp Commerce"
  summary: string; // 1-2 sentence card description
  liveUrl?: string; // external link if the project has a public live site
  hasCaseStudy: boolean; // true only for projects with a full case study page
  thumbnailAlt: string; // required alt text — always required, regardless of whether an image exists
  thumbnailSrc?: string; // path under /public; omitted = gradient placeholder still renders (see ProjectCard/case study page)
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  eyebrow: string; // e.g. "Business · WhatsApp Commerce"
  client: string;
  type: string;
  builtWhat: string;
  status: "Live" | "In Progress";
  challenge: string;
  objective: string;
  approach: string;
  experience: string;
  result: string;
  resultHighlights: string[]; // short factual bullets, never fabricated metrics
}

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface InsightArticle {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  published: boolean; // false = "coming soon" card, not linked
  body?: string[]; // paragraphs; optional until article is actually written
}
