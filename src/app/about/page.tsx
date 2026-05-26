import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Footer } from "@/components/layout/Footer";
import { heroImages, sectionImages } from "@/lib/data/images";
import { SectionBg } from "@/components/layout/SectionBg";
import { CtaSection } from "@/components/layout/CtaSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Clarusto Group is a globally connected business ecosystem delivering specialised solutions across technology and international logistics.",
  alternates: { canonical: "https://clarusto.com/about" },
};

const values = [
  {
    num: "01",
    title: "Innovation",
    text: "We challenge the status quo, embrace new technologies, and continuously evolve our solutions to stay ahead of industry change.",
  },
  {
    num: "02",
    title: "Excellence",
    text: "Every engagement, every solution, every delivery is held to the highest standards. We don't just meet expectations — we exceed them.",
  },
  {
    num: "03",
    title: "Integrity",
    text: "We build lasting relationships founded on transparency, honesty, and accountability. Our word is our bond across every market we operate in.",
  },
  {
    num: "04",
    title: "Global Thinking",
    text: "We approach every challenge with international perspective, understanding that the best solutions are those built for a borderless world.",
  },
];

const milestones = [
  {
    year: "1990s",
    title: "Freight Operations Founded",
    text: "The logistics division is established in the United Kingdom, beginning over three decades of international freight expertise with a focus on import/export coordination.",
  },
  {
    year: "2010s",
    title: "Middle East & Asia Expansion",
    text: "Clarusto expands its operational reach to the UAE and China, establishing key trade corridor capabilities connecting European and Asian markets.",
  },
  {
    year: "2018",
    title: "Technology Division Launched",
    text: "Clarusto Technology is established to serve the growing demand for managed IT services, cloud infrastructure, and cybersecurity across UK businesses.",
  },
  {
    year: "2022",
    title: "Clarusto Group Formalised",
    text: "The group holding structure is created, unifying Clarusto Technology and Clarusto Logistics under a single business ecosystem with a shared global vision.",
  },
  {
    year: "2024",
    title: "India & Saudi Arabia Operations",
    text: "Clarusto Group expands its global footprint to six markets, adding India and Saudi Arabia to serve the rapidly growing South Asian and Gulf business corridors.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      navbarProps={{ activePath: "/about" }}
      mobileLinks={[
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/technology", label: "Technology" },
        { href: "/logistics", label: "Logistics" },
        { href: "/insights", label: "Insights" },
        { href: "/contact", label: "Contact" },
      ]}
    >
      <section className="about-hero">
        <div className="about-hero-media">
          <Image
            src={heroImages.about.src}
            alt={heroImages.about.alt}
            fill
            priority
            sizes="100vw"
            className="about-hero-photo"
          />
          <div className="about-hero-overlay" />
        </div>
        <div className="hero-grid" />
        <div className="container about-hero-inner">
          <div className="about-hero-grid">
            <div>
              <div className="hero-eyebrow hero-eyebrow-visible">
                <div className="hero-eyebrow-line" />
                <span className="label">About Clarusto Group</span>
              </div>
              <h1 className="display-xl about-hero-title">
                A Connected
                <br />
                Global <em>Business</em>
                <br />
                Ecosystem
              </h1>
              <p className="body-lg text-muted about-hero-desc">
                Clarusto Group operates through specialised business divisions
                focused on technology innovation and freight forwarding
                solutions, connected across international markets under a shared
                vision of excellence.
              </p>
              <div className="about-hero-actions">
                <Link href="#mission" className="btn btn-gold">
                  Our Mission
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Work With Us
                </Link>
              </div>
            </div>
            <div className="reveal-right">
              <div className="about-hero-visual">
                <div className="about-hero-image">
                  <Image
                    src={heroImages.about.visual.src}
                    alt={heroImages.about.visual.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="hero-image"
                  />
                </div>
                <div className="about-stat-card about-stat-bottom">
                  <div className="about-stat-num">30+</div>
                  <div className="about-stat-label">Years of Expertise</div>
                </div>
                <div className="about-stat-card about-stat-top">
                  <div className="about-stat-num">6</div>
                  <div className="about-stat-label">Global Markets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionBg id="mission" image={sectionImages.aboutMission} alt="Mission and values" overlay="light">
        <div className="container">
          <div className="section-intro reveal">
            <div className="section-divider section-divider-center">
              <div className="divider-line" />
              <div className="divider-diamond" />
              <div className="divider-line" />
            </div>
            <p className="label">Purpose &amp; Direction</p>
            <h2 className="display-lg section-intro-title">
              Mission, Vision &amp; <em>Values</em>
            </h2>
          </div>

          <div className="mission-grid">
            <div className="mission-card reveal">
              <div className="mission-letter">M</div>
              <p className="label">Our Mission</p>
              <h3 className="display-md mission-heading">
                Delivering Specialised Solutions That Power Global Business Growth
              </h3>
              <p className="body-md text-muted">
                We exist to connect businesses with the technology and logistics
                capabilities they need to thrive in an increasingly complex global
                marketplace.
              </p>
            </div>
            <div className="mission-card reveal reveal-delay-1">
              <div className="mission-letter">V</div>
              <p className="label">Our Vision</p>
              <h3 className="display-md mission-heading">
                To Become the World&apos;s Most Trusted Cross-Industry Business Ecosystem
              </h3>
              <p className="body-md text-muted">
                We envision a future where Clarusto Group is synonymous with
                reliability, innovation, and global connectivity.
              </p>
            </div>
          </div>

          <div className="values-section">
            <h3 className="display-md values-title reveal">
              Our Core <em>Values</em>
            </h3>
            <div className="values-grid">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`value-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}
                >
                  <div className="value-number">{v.num}</div>
                  <h4 className="value-title">{v.title}</h4>
                  <p className="body-md text-muted">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBg>

      <SectionBg image={sectionImages.aboutEcosystem} alt="Business ecosystem" overlay="medium">
        <div className="container">
          <div className="about-inner">
            <div className="reveal-left">
              <div className="section-divider">
                <div className="divider-diamond" />
                <div className="divider-line" />
              </div>
              <p className="label">Business Ecosystem</p>
              <h2 className="display-lg">
                How Our Divisions <em>Work Together</em>
              </h2>
              <p className="body-md text-muted">
                The Clarusto Group structure is intentionally designed to maximise
                synergy between our specialised divisions.
              </p>
              <div className="about-hero-actions">
                <Link href="/technology" className="btn btn-outline btn-tech-outline">
                  Clarusto Technology →
                </Link>
                <Link href="/logistics" className="btn btn-outline btn-logi-outline">
                  Clarusto Logistics →
                </Link>
              </div>
            </div>
            <div className="ecosystem-stack reveal-right">
              <div className="ecosystem-item">
                <div className="ecosystem-icon ecosystem-icon-gold">🏢</div>
                <div>
                  <h5>Clarusto Group HQ</h5>
                  <p className="text-muted ecosystem-text">
                    Shared strategy, group governance, and unified brand leadership
                    from the United Kingdom.
                  </p>
                </div>
              </div>
              <div className="ecosystem-row">
                <div className="ecosystem-item ecosystem-item-col">
                  <div className="ecosystem-icon ecosystem-icon-tech">💻</div>
                  <h5 className="tech-accent">Clarusto Technology</h5>
                  <p className="text-muted ecosystem-text-sm">
                    IT solutions, cyber security, cloud, digital transformation.
                  </p>
                </div>
                <div className="ecosystem-item ecosystem-item-col">
                  <div className="ecosystem-icon ecosystem-icon-logi">🚢</div>
                  <h5 className="logi-accent">Clarusto Logistics</h5>
                  <p className="text-muted ecosystem-text-sm">
                    Freight forwarding, cargo, customs, supply chain.
                  </p>
                </div>
              </div>
              <div className="ecosystem-item ecosystem-item-gold">
                <div className="ecosystem-icon ecosystem-icon-gold">🌍</div>
                <div>
                  <h5>6-Market Global Network</h5>
                  <p className="text-muted ecosystem-text">
                    UK · UAE · Germany · China · India · Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionBg>

      <SectionBg image={sectionImages.aboutTimeline} alt="Company timeline" overlay="warm">
        <div className="container">
          <div className="section-intro reveal">
            <p className="label">Our Journey</p>
            <h2 className="display-lg section-intro-title">
              Key <em>Milestones</em>
            </h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`timeline-item reveal${i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : ""}`}
              >
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-dot" />
                <div
                  className={`timeline-content${i === milestones.length - 1 ? " timeline-content-last" : ""}`}
                >
                  <h4>{m.title}</h4>
                  <p className="text-muted body-md">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      <CtaSection>
          <p className="label">Join Our Journey</p>
          <h2 className="display-lg">
            Partner With a <em>Group</em> Built
            <br />
            for Global Scale
          </h2>
          <p className="body-lg text-muted cta-desc">
            From technology modernisation to international freight, we have the
            expertise, global network, and commitment to help your business grow.
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-gold">
              Get in Touch
            </Link>
            <Link href="/companies" className="btn btn-outline">
              Explore Our Companies
            </Link>
          </div>
      </CtaSection>

      <Footer />
    </PageShell>
  );
}
