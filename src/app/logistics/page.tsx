import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";
import { heroImages, sectionImages, previewImages } from "@/lib/data/images";
import { SectionBg } from "@/components/layout/SectionBg";
import { CtaSection } from "@/components/layout/CtaSection";

export const metadata: Metadata = {
  title: "Clarusto Logistics — Global Freight Forwarding & Cargo Solutions",
  description:
    "Clarusto Logistics specialises in international freight forwarding, cargo coordination, customs support, and supply chain solutions with 30+ years of expertise.",
  alternates: { canonical: "https://clarusto.com/logistics" },
};

const services = [
  {
    icon: "🌊",
    title: "International Freight Forwarding",
    text: "End-to-end coordination of international cargo shipments by sea, air, and road — managing documentation, routing, and carrier relationships globally.",
    chips: ["Sea Freight", "Air Freight", "Road Freight"],
  },
  {
    icon: "📦",
    title: "Cargo Management",
    text: "Full lifecycle cargo management from consolidation and stuffing through to delivery — ensuring your goods move efficiently and safely across borders.",
    chips: ["FCL / LCL", "Cargo Tracking"],
  },
  {
    icon: "🏛️",
    title: "Customs Coordination",
    text: "Expert customs clearance support, compliance guidance, and documentation management to ensure smooth passage through international border controls.",
    chips: ["Import Clearance", "Export Compliance"],
  },
  {
    icon: "🔗",
    title: "Supply Chain Support",
    text: "Strategic supply chain consultancy and operational support helping businesses optimise their procurement, transportation, and distribution networks.",
    chips: [],
  },
  {
    icon: "📄",
    title: "Freight Documentation",
    text: "Preparation and management of all freight documentation including bills of lading, certificates of origin, commercial invoices, and packing lists.",
    chips: [],
  },
  {
    icon: "🚛",
    title: "Transportation Solutions",
    text: "Multimodal transportation management connecting sea ports, airports, rail terminals, and road networks for seamless end-to-end delivery.",
    chips: [],
  },
];

const routes = [
  { from: "🇬🇧", to: "🇦🇪", title: "UK — UAE", text: "Established trade corridor supporting bilateral import/export operations." },
  { from: "🇬🇧", to: "🇨🇳", title: "UK — China", text: "High-volume sea and air freight connecting UK businesses to Chinese manufacturing hubs." },
  { from: "🇬🇧", to: "🇩🇪", title: "UK — Germany", text: "Post-Brexit cross-channel freight with full customs coordination support." },
  { from: "🇦🇪", to: "🇮🇳", title: "UAE — India", text: "Short-sea and air freight connecting the Gulf with major Indian ports and cities." },
  { from: "🇦🇪", to: "🇸🇦", title: "UAE — Saudi Arabia", text: "GCC overland and air freight with customs expertise across Gulf borders." },
  { from: "🇩🇪", to: "🇨🇳", title: "Europe — China", text: "Rail and sea options for European-Chinese trade corridor shipments." },
];

export default function LogisticsPage() {
  return (
    <PageShell
      loaderSubtitle="Logistics"
      mobileLinks={[
        { href: "/", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#routes", label: "Trade Routes" },
        { href: "#insights", label: "Insights" },
        { href: "#contact", label: "Contact" },
      ]}
      navbarProps={{
        logoSuffix: "LOGISTICS",
        links: [
          { href: "#services", label: "Services" },
          { href: "#routes", label: "Trade Routes" },
          { href: "#insights", label: "Insights" },
          { href: "/technology", label: "Clarusto Technology" },
          { href: "/", label: "Group Home" },
        ],
        ctaHref: "#contact",
        ctaLabel: "Get a Quote",
        ctaClass: "btn btn-logi",
      }}
    >
      <section id="hero" className="division-hero division-hero-logi">
        <div className="division-hero-media">
          <Image
            src={heroImages.logistics.src}
            alt={heroImages.logistics.alt}
            fill
            priority
            sizes="100vw"
            className="division-hero-photo"
          />
          <div className="division-hero-overlay division-hero-overlay-logi" />
        </div>
        <div className="hero-grid" />
        <div className="container division-hero-content">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line hero-eyebrow-line-logi" />
            <span className="label logi-accent">
              Clarusto Group — Logistics Division
            </span>
          </div>
          <h1 className="display-xl hero-title">
            Global <span className="logi-grad">Freight</span>
            <br />
            Forwarding &amp;
            <br />
            Cargo <em>Solutions</em>
          </h1>
          <p className="body-lg text-muted hero-desc">
            Specialising in international freight forwarding, cargo coordination,
            customs support, and supply chain solutions — with over 30 years of
            freight expertise and operational connectivity across 6 major
            international regions.
          </p>
          <div className="hero-actions">
            <Link href="#services" className="btn btn-logi">
              Our Services
            </Link>
            <a
              href={siteConfig.links.logistics}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Visit Full Website
            </a>
          </div>
          <div className="hero-stats hero-stats-logi">
            <div className="stat-item">
              <div className="stat-num logi-accent">
                <span data-counter data-target="30" data-suffix="+">30+</span>
              </div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-num logi-accent">
                <span data-counter data-target="6">6</span>
              </div>
              <div className="stat-label">Global Markets</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-num logi-accent">
                <span>Air</span>
              </div>
              <div className="stat-label">Sea &amp; Road Freight</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img-frame">
            <Image
              src={sectionImages.logiHeroVisual.src}
              alt={sectionImages.logiHeroVisual.alt}
              fill
              priority
              sizes="45vw"
              className="hero-image crop-image"
            />
          </div>
        </div>
      </section>

      <SectionBg id="services" image={sectionImages.logiServices} alt="Logistics services" overlay="light">
        <div className="container">
          <div className="section-intro reveal">
            <p className="label logi-accent">Logistics Services</p>
            <h2 className="display-lg">
              Comprehensive Freight <em>Solutions</em>
            </h2>
            <p className="body-md text-muted section-intro-desc">
              Reliable logistics support tailored to modern import/export and
              transportation requirements.
            </p>
          </div>
          <div className="grid-3 services-grid">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`service-card service-card-logi reveal${i > 0 ? ` reveal-delay-${Math.min(i, 2)}` : ""}`}
              >
                <div className="service-icon service-icon-logi">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="body-md text-muted">{s.text}</p>
                {s.chips.length > 0 && (
                  <div className="service-chips">
                    {s.chips.map((chip) => (
                      <span key={chip} className="service-chip service-chip-logi">
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      <SectionBg id="routes" image={sectionImages.logiRoutes} alt="Warehouse operations" overlay="medium">
        <div className="container">
          <div className="section-intro reveal">
            <p className="label logi-accent">Coverage</p>
            <h2 className="display-lg">
              Key <em>Trade Routes</em>
            </h2>
          </div>
          <div className="grid-3 services-grid">
            {routes.map((route, i) => (
              <div
                key={route.title}
                className={`route-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 2)}` : ""}`}
              >
                <div className="route-path">
                  <span>{route.from}</span>
                  <span className="route-arrow">→</span>
                  <span>{route.to}</span>
                </div>
                <h5 className="route-title">{route.title}</h5>
                <p className="text-muted body-md">{route.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      <SectionBg id="insights" image={sectionImages.logiInsights} alt="Logistics insights" overlay="warm">
        <div className="container">
          <div className="section-intro reveal">
            <p className="label logi-accent">Logistics Insights</p>
            <h2 className="display-lg">
              From Our <em>Experts</em>
            </h2>
          </div>
          <div className="grid-3 services-grid">
            {[
              {
                img: previewImages.logiPost1.src,
                alt: previewImages.logiPost1.alt,
                badge: "Freight",
                title: "Complete Guide to Incoterms 2020: What Every Importer Needs to Know",
                text: "Understanding your responsibilities and risks in international trade contracts.",
              },
              {
                img: previewImages.logiPost2.src,
                alt: previewImages.logiPost2.alt,
                badge: "Supply Chain",
                title: "Just-in-Time vs Just-in-Case: Rethinking Supply Chain Resilience Post-Pandemic",
                text: "How global disruptions have permanently shifted supply chain strategy priorities.",
              },
              {
                img: previewImages.logiPost3.src,
                alt: previewImages.logiPost3.alt,
                badge: "Customs",
                title: "UK Customs Declaration Service (CDS): Migration Guide for Freight Operators",
                text: "Step-by-step guidance for businesses transitioning to the new UK customs platform.",
              },
            ].map((post, i) => (
              <div key={post.title} className={`news-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
                <div className="news-card-img crop-image-wrap">
                  <Image src={post.img} alt={post.alt} width={500} height={300} className="news-image crop-image" />
                  <span className="category-badge badge-logi">{post.badge}</span>
                </div>
                <div className="news-card-body">
                  <h4>{post.title}</h4>
                  <p>{post.text}</p>
                  <a href="#" className="news-link">Read →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      <CtaSection id="contact">
          <p className="label logi-accent">Ship With Us</p>
          <h2 className="display-lg">
            Request a Freight <em>Quote</em>
          </h2>
          <p className="body-lg text-muted cta-desc">
            Our logistics specialists will assess your shipment requirements and
            provide competitive rates with full customs coordination support.
          </p>
          <div className="cta-actions">
            <a
              href={siteConfig.links.logistics}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-logi"
            >
              Visit clarustologistics.com
            </a>
            <Link href="/contact" className="btn btn-outline">
              Group Enquiry
            </Link>
          </div>
          <p className="division-footer-note">
            Part of <Link href="/">Clarusto Group</Link> · Also see{" "}
            <Link href="/technology" className="tech-accent">
              Clarusto Technology →
            </Link>
          </p>
          <p className="cta-tubes-hint">Move cursor to interact · Click to shift colors</p>
      </CtaSection>

      <Footer />
    </PageShell>
  );
}
