import type { InsightArticle } from "./types";

/**
 * Insights — Blueprint v3 Section 13. Only one article is actually
 * written right now; the other two exist as "coming soon" cards
 * (published: false) rather than being invented in full. Do not create
 * a route for an unpublished article — the Insights index checks
 * `published` before rendering a link.
 */
export const insightArticles: InsightArticle[] = [
  {
    slug: "whatsapp-number-needs-a-system",
    title: "Why your WhatsApp number needs a system behind it",
    category: "WhatsApp Commerce",
    excerpt:
      "The difference between a phone that rings and a system that sells while you sleep.",
    readTime: "6 min read",
    published: true,
    body: [
      "Most businesses in Sierra Leone already sell through WhatsApp. That's not the problem — it's actually the right instinct. The problem is what happens after the message comes in.",
      "Right now, for a lot of businesses, every sale depends on someone being awake, available, and typing. A customer messages at 11pm with a question, and if nobody replies before they lose interest, that sale is gone. Multiply that by every night, every missed message, every customer who moved on to someone who answered faster.",
      "The fix isn't leaving WhatsApp — it's putting a system behind it. A product catalog customers can browse anytime. An AI agent trained on your actual products and prices that can answer common questions and take orders at 2am. A dashboard that shows what's been ordered without you scrolling through a hundred chat threads.",
      "None of this replaces the relationship WhatsApp gives you with customers. It just means the relationship doesn't depend entirely on you being online.",
      "We built exactly this for Scent Vault SL — a real catalog, WhatsApp ordering wired directly into the buying flow, and a system that keeps working after hours. The result isn't a chatbot instead of a business — it's the same business, just no longer limited by how many messages one person can personally answer.",
    ],
  },
  {
    slug: "cost-of-a-one-shot-event",
    title: "The cost of a one-shot event with no digital plan",
    category: "Events",
    excerpt:
      "Why the moment doesn't come back, and how to be ready before it arrives.",
    readTime: "—",
    published: false,
  },
  {
    slug: "designing-for-real-connections",
    title: "Designing for real connections, not fibre in a lab",
    category: "Low-Data Design",
    excerpt:
      "What \"mobile-first\" actually means on Sierra Leone's real networks.",
    readTime: "—",
    published: false,
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((a) => a.slug === slug && a.published);
}

export function getPublishedInsights(): InsightArticle[] {
  return insightArticles.filter((a) => a.published);
}
