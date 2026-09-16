import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Container";
import { insightArticles } from "@/lib/content/insights";

export const metadata: Metadata = {
  title: "Insights — Arsiekeh Agency",
  description:
    "Notes on WhatsApp commerce, digital systems, and building for Sierra Leone's real networks.",
};

export default function InsightsPage() {
  return (
    <Section className="pb-20 pt-12 sm:pt-16">
      <div className="mb-4 text-[0.95rem] font-semibold text-lime">
        Insights
      </div>
      <h1 className="max-w-[26ch] text-[clamp(2rem,5vw,3rem)] font-bold">
        Notes on building for how Sierra Leone actually buys, books and
        connects.
      </h1>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
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
