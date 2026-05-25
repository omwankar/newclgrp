import Link from "next/link";
import type { InsightArticle } from "@/lib/data/insights";
import { ArticleImage } from "@/components/insights/ArticleImage";

type ArticleCardProps = {
  article: InsightArticle;
  index?: number;
  priority?: boolean;
};

export function ArticleCard({
  article,
  index = 0,
  priority = false,
}: ArticleCardProps) {
  const delayClass =
    index > 0 ? ` reveal-delay-${Math.min(index % 3, 2)}` : "";

  return (
    <article
      className={`news-card sd-shine sd-spotlight${article.featured ? " news-card-featured" : ""} reveal${delayClass}`}
      data-category={article.category}
    >
      <div className="news-card-img">
        <ArticleImage
          src={article.image}
          alt={article.alt}
          featured={article.featured}
          priority={priority}
        />
        <span className={`category-badge ${article.badgeClass}`}>
          {article.badge}
        </span>
      </div>
      <div className="news-card-body">
        <div className="news-meta">
          <span className="news-date">{article.date}</span>
          <span className="news-read-time">{article.readTime}</span>
        </div>
        <h4>{article.title}</h4>
        <p>{article.excerpt}</p>
        <p className="news-author">By {article.author}</p>
        <Link href={`/insights/${article.slug}`} className="news-link">
          Read Full Article →
        </Link>
      </div>
    </article>
  );
}
