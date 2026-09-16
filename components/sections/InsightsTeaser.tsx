import Link from "next/link";
import { Section } from "@/components/ui/Container";
import { insightArticles } from "@/lib/content/insights";

/**
 * 13 — INSIGHTS. Blueprint v3 Section 3.13 (UNCHANGED).
 * Unpublished articles render as visibly non-interactive "coming soon"
 * cards rather than dead links — the Insights index page follows the
 * same rule via getPublishedInsights().
 */
export function InsightsTeaser() {
  return (
    <Section>
      <div className="mb-12 max-w-[42ch]">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          Insights
        </h2>
        <p className="mt-4 text-[1.05rem] text-muted">
          Notes on building for how Sierra Leone actually buys, books and
          connects.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {insightArticles.map((article) =>
          article.published ? (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="rounded-[var(--radius-md)] border border-border p-6 transition-colors duration-200 hover:border-lime/40"
            >
              <div className="mb-2.5 text-sm text-lime">
                {article.category}
              </div>
              <h3 className="mb-2 text-[1.1rem] font-bold">
                {article.title}
              </h3>
              <p className="text-[0.9rem] text-muted">{article.excerpt}</p>
              <span className="mt-3 block text-[0.82rem] text-muted">
                {article.readTime}
              </span>
            </Link>
          ) : (
            <div
              key={article.slug}
              className="rounded-[var(--radius-md)] border border-border p-6 opacity-60"
              aria-disabled="true"
            >
              <div className="mb-2.5 text-sm text-lime">
                {article.category}
              </div>
              <h3 className="mb-2 text-[1.1rem] font-bold">
                {article.title}
              </h3>
              <p className="text-[0.9rem] text-muted">{article.excerpt}</p>
              <span className="mt-3 block text-[0.82rem] text-muted">
                Coming soon
              </span>
            </div>
          )
        )}
      </div>
    </Section>
  );
}
