import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { SectionBg } from "@/components/layout/SectionBg";
import { CtaSection } from "@/components/layout/CtaSection";
import { ArticleCard } from "@/components/insights/ArticleCard";
import {
  insightArticles,
  insightCategories,
} from "@/lib/data/insights";
import { heroImages, sectionImages } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Latest technology insights, logistics trends, global trade updates, and company news from Clarusto Group.",
  alternates: { canonical: "https://clarusto.com/insights" },
};

export default function InsightsPage() {
  return (
    <PageShell
      loaderSubtitle="Insights"
      navbarProps={{ activePath: "/insights" }}
    >
      <PageHero
        label="News & Insights"
        title={
          <>
            Industry <em>Intelligence</em>
            <br />
            &amp; Business Updates
          </>
        }
        description="Explore the latest insights, technology developments, freight forwarding trends, and global business news from across Clarusto Group."
        image={heroImages.insights.src}
        imageAlt={heroImages.insights.alt}
        variant="default"
      />

      <SectionBg image={sectionImages.insightsGrid} alt="Analytics dashboard" overlay="light">
        <div className="sticky-filter sticky-filter-section">
          <div className="container sticky-filter-inner">
            <span className="label">Filter:</span>
            <div className="news-tabs">
              {insightCategories.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  className={`news-tab${id === "all" ? " active" : ""}`}
                  data-tab={id}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="news-grid insights-grid">
            {insightArticles.map((article, i) => (
              <ArticleCard
                key={article.slug}
                article={article}
                index={i}
                priority={i === 0}
              />
            ))}
          </div>
        </div>
      </SectionBg>

      <CtaSection>
          <p className="label">Stay Informed</p>
          <h2 className="display-md">
            Get Industry Insights
            <br />
            <em>Delivered</em>
          </h2>
          <p className="body-md text-muted cta-desc-sm">
            Subscribe for monthly updates on technology, logistics, and global
            trade from our specialist teams.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="your@email.com"
              className="form-input"
            />
            <button type="button" className="btn btn-gold newsletter-btn">
              Subscribe
            </button>
          </div>
          <p className="cta-tubes-hint">Move cursor to interact · Click to shift colors</p>
      </CtaSection>

      <Footer />
    </PageShell>
  );
}
