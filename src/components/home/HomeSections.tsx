import Link from "next/link";
import Image from "next/image";
import { siteConfig, locations } from "@/lib/site-config";
import { heroImages, sectionImages } from "@/lib/data/images";
import { WorldMap } from "@/components/global/WorldMap";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { insightArticles } from "@/lib/data/insights";
import { SectionBg } from "@/components/layout/SectionBg";

export function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-mesh-gradient" aria-hidden="true" />
      <div className="hero-bg-image">
        <Image
          src={heroImages.home.src}
          alt={heroImages.home.alt}
          fill
          priority
          sizes="100vw"
          className="hero-bg-photo"
        />
        <div className="hero-bg-overlay" />
      </div>
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-orb hero-orb-gold" data-sd-parallax="0.08" />
      <div className="hero-orb hero-orb-tech" data-sd-parallax="0.12" />

      <div className="container">
        <div className="hero-content sd-glass sd-glass-hero sd-spotlight sd-scale-reveal">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span className="label">Est. — United Kingdom</span>
          </div>
          <h1 className="display-xl hero-title">
            Building <em>Global</em>
            <br />
            Solutions Through
            <br />
            <span className="gold-text">Technology</span> &amp;
            <br />
            Innovation.
          </h1>
          <p className="body-lg text-muted hero-desc">
            A globally connected business ecosystem delivering specialised
            solutions across technology and international logistics industries —
            powering the world&apos;s next generation of trade.
          </p>
          <div className="hero-actions">
            <Link href="/companies" className="btn btn-gold btn-neon sd-magnetic">
              Explore Our Companies
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M7 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="#contact" className="btn btn-outline">
              Contact Clarusto Group
            </Link>
          </div>

          <div className="hero-stats sd-glass-stats">
            <div className="stat-item">
              <div className="stat-num">
                <span data-counter data-target="30" data-suffix="+">
                  30+
                </span>
              </div>
              <div className="stat-label">Years Freight Expertise</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-num">
                <span data-counter data-target="6">
                  6
                </span>
              </div>
              <div className="stat-label">Global Markets</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-num">
                <span data-counter data-target="2">
                  2
                </span>
              </div>
              <div className="stat-label">Specialised Divisions</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-num">
                <span data-counter data-target="100" data-suffix="%">
                  100%
                </span>
              </div>
              <div className="stat-label">Client Focused</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-img-frame">
          <Image
            src={heroImages.home.visual.src}
            alt={heroImages.home.visual.alt}
            fill
            priority
            sizes="45vw"
            className="hero-image"
          />
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}

export function MarqueeSection() {
  const items = [
    "Clarusto Technology",
    "Clarusto Logistics",
    "UK · UAE · Germany · China · India · Saudi Arabia",
    "Digital Transformation",
    "Freight Forwarding",
    "Global Supply Chain",
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.flatMap((item, i) => [
          <span key={`${item}-a`} className="marquee-item">
            {item}
          </span>,
          <span key={`sep-${i}`} className="marquee-sep">
            ◆
          </span>,
        ])}
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <SectionBg id="about" image={sectionImages.homeAbout} alt="Modern office" overlay="medium">
      <div className="container">
        <div className="about-inner">
          <div className="about-visual reveal-left">
            <div className="about-img-main">
              <Image
                src={sectionImages.homeAboutVisual.src}
                alt={sectionImages.homeAboutVisual.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="crop-image"
              />
            </div>
            <div className="about-accent-card">
              <p className="label">Global Footprint</p>
              <div className="about-accent-stats">
                <div className="about-accent-stat">
                  <span className="about-accent-num">6</span>
                  <span className="about-accent-label">Markets</span>
                </div>
                <div className="about-accent-stat">
                  <span className="about-accent-num">2</span>
                  <span className="about-accent-label">Divisions</span>
                </div>
              </div>
              <div className="about-accent-flags">
                {locations.map((loc) => (
                  <span key={loc.name} title={loc.name}>
                    {loc.flag}
                  </span>
                ))}
              </div>
              <div className="about-accent-tags">
                <span className="about-accent-tag about-accent-tag-tech">Technology</span>
                <span className="about-accent-tag about-accent-tag-logi">Logistics</span>
              </div>
            </div>
            <div className="about-badge">
              30+
              <small>
                Years
                <br />
                Expertise
              </small>
            </div>
          </div>

          <div className="about-text">
            <div className="reveal">
              <div className="section-divider">
                <div className="divider-diamond" />
                <div className="divider-line" />
              </div>
              <p className="label">About Clarusto Group</p>
              <h2 className="display-lg">
                A Connected Global Business <em>Ecosystem</em>
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="body-md text-muted">
                Clarusto Group operates through specialised business divisions
                focused on technology innovation and freight forwarding
                solutions across international markets.
              </p>
              <p className="body-md text-muted">
                The group structure enables each company to maintain
                industry-specific expertise while operating under a shared vision
                of innovation, operational excellence, and long-term business
                growth.
              </p>
              <p className="body-md text-muted">
                By connecting technology capabilities with global logistics
                operations, Clarusto Group supports businesses through scalable,
                reliable, and future-focused solutions.
              </p>
            </div>

            <div className="about-pillars sd-stagger reveal reveal-delay-2">
              {[
                {
                  icon: "⚡",
                  title: "Innovation First",
                  text: "Pioneering digital transformation across industries with cutting-edge solutions.",
                },
                {
                  icon: "🌍",
                  title: "Global Reach",
                  text: "Operational presence spanning six major international trade markets.",
                },
                {
                  icon: "🔗",
                  title: "Connected Ecosystem",
                  text: "Unified business structure enabling seamless cross-division collaboration.",
                },
                {
                  icon: "📈",
                  title: "Operational Excellence",
                  text: "Decades of expertise delivering reliable, scalable business solutions.",
                },
              ].map((pillar) => (
                <div key={pillar.title} className="pillar glass-card sd-spotlight">
                  <div className="pillar-icon">{pillar.icon}</div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionBg>
  );
}

export function CompaniesSection() {
  return (
    <SectionBg id="companies" image={sectionImages.homeCompanies} alt="Business team" overlay="warm" className="section-companies">
      <div className="container">
        <div className="companies-header reveal">
          <div className="section-divider section-divider-center">
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line" />
          </div>
          <p className="label label-spaced">Our Companies</p>
          <h2 className="display-lg">
            Two Divisions.
            <br />
            <em>One Vision.</em>
          </h2>
          <p className="body-md text-muted companies-desc">
            Dedicated companies delivering specialised expertise across
            technology and freight forwarding sectors under one unified
            ecosystem.
          </p>
          <Link href="/companies" className="btn btn-outline companies-page-link">
            View Companies Page →
          </Link>
        </div>
      </div>

      <div className="companies-grid">
        <div className="company-card company-card-tech reveal-left sd-spotlight">
          <div className="company-card-bg">
            <Image
              src={sectionImages.homeTechCard.src}
              alt={sectionImages.homeTechCard.alt}
              fill
              sizes="50vw"
              className="crop-image"
            />
          </div>
          <div className="company-card-number">01</div>
          <div className="company-card-content">
            <div className="company-tag company-tag-tech">
              <span>●</span> Technology Division
            </div>
            <h3>
              Clarusto
              <br />
              <em>Technology</em>
            </h3>
            <p className="sub">
              Digital Transformation &amp; IT Solutions · clarusto.co.uk
            </p>
            <p>
              Business-focused IT solutions designed to help organisations
              modernise infrastructure, strengthen cybersecurity, and support
              digital transformation across modern digital environments.
            </p>
            <div className="company-services">
              {[
                "Managed IT Services",
                "IT Support",
                "Cyber Security",
                "Cloud Infrastructure",
                "Digital Transformation",
                "Tech Consultancy",
              ].map((s) => (
                <span key={s} className="service-chip">
                  {s}
                </span>
              ))}
            </div>
            <div className="company-card-actions">
              <a
                href={siteConfig.links.technology}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-tech"
              >
                Visit Clarusto Technology
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M7 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <Link href="/technology" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="company-card company-card-logi reveal-right sd-spotlight">
          <div className="company-card-bg">
            <Image
              src={sectionImages.homeLogiCard.src}
              alt={sectionImages.homeLogiCard.alt}
              fill
              sizes="50vw"
              className="crop-image"
            />
          </div>
          <div className="company-card-number">02</div>
          <div className="company-card-content">
            <div className="company-tag company-tag-logi">
              <span>●</span> Logistics Division
            </div>
            <h3>
              Clarusto
              <br />
              <em>Logistics</em>
            </h3>
            <p className="sub">
              Global Freight Forwarding &amp; Cargo Solutions ·
              clarustologistics.com
            </p>
            <p>
              International freight forwarding, cargo coordination, customs
              support, and supply chain solutions designed for seamless cargo
              movement across global trade markets with 30+ years of expertise.
            </p>
            <div className="company-services">
              {[
                "Freight Forwarding",
                "Cargo Management",
                "Customs Coordination",
                "Supply Chain",
                "Documentation",
                "Transportation",
              ].map((s) => (
                <span key={s} className="service-chip">
                  {s}
                </span>
              ))}
            </div>
            <div className="company-card-actions">
              <a
                href={siteConfig.links.logistics}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-logi"
              >
                Visit Clarusto Logistics
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M7 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <Link href="/logistics" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionBg>
  );
}

export function GlobalSection() {
  return (
    <SectionBg id="global" image={sectionImages.homeGlobal} alt="Global city skyline" overlay="medium">
      <div className="container">
        <div className="global-inner">
          <div className="global-map-wrap reveal-left sd-spotlight">
            <WorldMap gradientId="mapGlowHome" />
            <div className="map-label-wrap">
              <p className="label">Active Locations</p>
            </div>
            <Link href="/global" className="btn btn-outline map-cta">
              View All Locations →
            </Link>
          </div>

          <div className="global-text">
            <div className="reveal">
              <div className="section-divider">
                <div className="divider-diamond" />
                <div className="divider-line" />
              </div>
              <p className="label">Global Presence</p>
              <h2 className="display-lg">
                Connected Across <em>International</em> Markets
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="body-md text-muted">
                Clarusto Group supports businesses through technology and
                logistics operations connected across key international markets.
                Our growing network enables reliable collaboration, digital
                transformation, freight movement, and operational coordination
                worldwide.
              </p>
            </div>

            <div className="locations-grid sd-stagger reveal reveal-delay-2">
              {locations.map((loc) => (
                <div key={loc.name} className="location-item">
                  <span className="location-flag">{loc.flag}</span>
                  <div className="location-info">
                    <div className="location-name">{loc.name}</div>
                    <div className="location-role">{loc.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionBg>
  );
}

export function NewsSection() {
  const articles = insightArticles.slice(0, 5);

  return (
    <SectionBg id="news" image={sectionImages.homeNews} alt="Business analytics" overlay="light" className="section-news-bg">
      <div className="container">
        <div className="news-header">
          <div className="reveal">
            <div className="section-divider">
              <div className="divider-diamond" />
              <div className="divider-line" />
            </div>
            <p className="label label-tight">News &amp; Insights</p>
            <h2 className="display-lg">
              Industry Insights &amp;
              <br />
              <em>Business Updates</em>
            </h2>
          </div>
          <div className="news-tabs reveal">
            {["all", "tech", "logi", "global"].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`news-tab${tab === "all" ? " active" : ""}`}
                data-tab={tab}
              >
                {tab === "all"
                  ? "All"
                  : tab === "tech"
                    ? "Technology"
                    : tab === "logi"
                      ? "Logistics"
                      : "Global"}
              </button>
            ))}
          </div>
        </div>

        <div className="news-grid">
          {articles.map((article, i) => (
            <ArticleCard
              key={article.slug}
              article={article}
              index={i}
              priority={i === 0}
            />
          ))}
        </div>

        <div className="news-cta reveal">
          <Link href="/insights" className="btn btn-outline">
            View All Insights →
          </Link>
        </div>
      </div>
    </SectionBg>
  );
}
