import Image from "next/image";
import type { ReactNode } from "react";
import type { HeroVariant } from "@/lib/data/images";

export type HeroStat = {
  value: string;
  label: string;
};

type PageHeroProps = {
  label?: string;
  title: ReactNode;
  description?: string;
  image: string;
  imageAlt: string;
  variant?: HeroVariant;
  centered?: boolean;
  size?: "md" | "lg" | "full";
  imagePosition?: string;
  stats?: HeroStat[];
  children?: ReactNode;
};

export function PageHero({
  label,
  title,
  description,
  image,
  imageAlt,
  variant = "default",
  centered = false,
  size = "lg",
  imagePosition = "center",
  stats,
  children,
}: PageHeroProps) {
  return (
    <section
      className={`page-hero page-hero-${size} page-hero-variant-${variant}${centered ? " page-hero-center" : ""}`}
    >
      <div className="hero-mesh-gradient page-hero-mesh" aria-hidden="true" />
      <div className="page-hero-media">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="page-hero-img"
          style={{ objectPosition: imagePosition }}
        />
        <div className={`page-hero-overlay page-hero-overlay-${variant}`} />
        <div className="page-hero-shine" aria-hidden="true" />
        <div className="hero-grid page-hero-grid" />
        <div className="page-hero-orb page-hero-orb-a" aria-hidden="true" />
        <div className="page-hero-orb page-hero-orb-b" aria-hidden="true" />
      </div>

      <div
        className={`container page-hero-inner${centered ? " page-hero-inner-center" : ""}`}
      >
        <div
          className={`page-hero-panel reveal sd-glow-card sd-spotlight${centered ? " page-hero-panel-center" : ""}`}
        >
          {label && <span className="hero-badge sd-float">{label}</span>}

          <h1 className="display-xl page-hero-title">{title}</h1>

          {description && (
            <p className="body-lg page-hero-desc">{description}</p>
          )}

          {stats && stats.length > 0 && (
            <div className="hero-stat-row">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat-chip">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {children}
        </div>
      </div>

      <div className="page-hero-scroll-hint" aria-hidden="true">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}
