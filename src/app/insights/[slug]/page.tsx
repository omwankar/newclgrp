import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Footer } from "@/components/layout/Footer";
import { ArticleImage } from "@/components/insights/ArticleImage";
import { SectionBg } from "@/components/layout/SectionBg";
import { sectionImages } from "@/lib/data/images";
import { insightArticles } from "@/lib/data/insights";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://clarusto.com/insights/${slug}` },
  };
}

function getDummyContent(category: string) {
  const paragraphs = [
    "The global business landscape continues to evolve at an unprecedented pace. Organisations across every sector are reassessing their operational frameworks, technology investments, and international partnerships to remain competitive in 2025 and beyond.",
    "At Clarusto Group, we observe these trends firsthand through our technology and logistics divisions. Clients are increasingly seeking integrated solutions that bridge digital infrastructure with physical supply chain capabilities — a model our group ecosystem is uniquely positioned to deliver.",
    "Industry analysts project sustained growth in cross-border trade volumes, particularly along Gulf-to-Asia and Europe-to-Middle East corridors. Businesses that invest early in resilient logistics partnerships and modern IT infrastructure will capture disproportionate market share over the next 24 months.",
    "Our specialist teams recommend a phased approach: assess current capabilities, identify critical gaps, and implement targeted improvements before scaling operations internationally. This methodology has delivered measurable results for clients across all six of our operational markets.",
  ];

  if (category === "tech") {
    paragraphs.push(
      "From a technology perspective, the convergence of AI-driven automation, zero-trust security architectures, and hybrid cloud environments represents the defining challenge — and opportunity — for enterprise IT leaders this year."
    );
  } else if (category === "logi") {
    paragraphs.push(
      "On the logistics front, customs compliance, multimodal routing optimisation, and real-time cargo visibility remain the top priorities for importers and exporters navigating an increasingly complex regulatory environment."
    );
  }

  return paragraphs;
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = insightArticles
    .filter((a) => a.category === article.category && a.slug !== slug)
    .slice(0, 3);

  const content = getDummyContent(article.category);

  return (
    <PageShell loaderSubtitle="Insights">
      <article className="article-page">
        <section className="article-hero">
          <div className="article-hero-image-wrap">
            <ArticleImage
              src={article.image}
              alt={article.alt}
              priority
            />
            <div className="article-hero-overlay" />
          </div>
          <div className="container article-hero-content">
            <div className="reveal">
              <span className={`category-badge ${article.badgeClass}`}>
                {article.badge}
              </span>
              <h1 className="display-lg article-title">{article.title}</h1>
              <div className="article-meta">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
                <span>·</span>
                <span>By {article.author}</span>
              </div>
            </div>
          </div>
        </section>

        <SectionBg
          image={sectionImages.articleBody}
          alt="Editorial workspace"
          overlay="light"
        >
          <div className="container article-body">
            <p className="body-lg article-lead">{article.excerpt}</p>
            {content.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="body-md text-muted article-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="article-tags">
              <span className="label">Tags:</span>
              {["Clarusto Group", article.badge, "2025", "Global Business"].map(
                (tag) => (
                  <span key={tag} className="service-chip">
                    {tag}
                  </span>
                )
              )}
            </div>

            <Link href="/insights" className="btn btn-outline article-back">
              ← Back to Insights
            </Link>
          </div>
        </SectionBg>

        {related.length > 0 && (
          <SectionBg
            image={sectionImages.articleRelated}
            alt="Industry insights"
            overlay="medium"
            className="section-news-bg"
          >
            <div className="container">
              <h2 className="display-md related-title">
                Related <em>Articles</em>
              </h2>
              <div className="related-grid">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/insights/${rel.slug}`}
                    className="related-card"
                  >
                    <span className={`category-badge ${rel.badgeClass}`}>
                      {rel.badge}
                    </span>
                    <h4>{rel.title}</h4>
                    <span className="news-link">Read →</span>
                  </Link>
                ))}
              </div>
            </div>
          </SectionBg>
        )}
      </article>

      <Footer />
    </PageShell>
  );
}
