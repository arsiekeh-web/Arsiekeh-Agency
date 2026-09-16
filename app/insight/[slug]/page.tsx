import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Container";
import { FinalCta } from "@/components/sections/FinalCta";
import { getInsightBySlug, getPublishedInsights } from "@/lib/content/insights";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

// Only published articles get a static route generated — unpublished
// entries in the content layer exist as data for the "coming soon"
// cards on the index page, but never get a live route.
export function generateStaticParams() {
  return getPublishedInsights().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Arsiekeh Agency`,
    description: article.excerpt,
  };
}

export default async function InsightArticlePage({
  params,
}: InsightPageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article || !article.body) {
    notFound();
  }

  // notFound() throws and halts rendering, but assert explicitly so
  // this reads correctly even under tooling that can't see that.
  const { title, category, readTime, body } = article!;

  return (
    <>
      <Section className="pb-8 pt-12 sm:pt-16">
        <div className="mb-5 text-[0.88rem] text-muted">
          <Link href="/insights" className="hover:text-lime">
            Insights
          </Link>{" "}
          / {category}
        </div>
        <div className="mb-4 text-[0.95rem] font-semibold text-lime">
          {category}
        </div>
        <h1 className="max-w-[24ch] text-[clamp(2rem,5vw,2.6rem)] font-bold">
          {title}
        </h1>
        <div className="mt-5 flex gap-4 text-[0.88rem] text-muted">
          <span>Arsiekeh Agency</span>
          <span>·</span>
          <span>{readTime}</span>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-[680px] space-y-5 text-[1.05rem] text-offwhite/85">
          {body!.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <FinalCta heading="Want this for your business?" />
    </>
  );
    }
