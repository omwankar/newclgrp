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
  title: "Clarusto Technology — Digital Transformation & IT Solutions",
  description:
    "Clarusto Technology delivers managed IT services, cybersecurity, cloud infrastructure, and digital transformation solutions for modern businesses.",
  alternates: { canonical: "https://clarusto.com/technology" },
};

const services = [
  {
    icon: "🛡️",
    title: "Cyber Security",
    text: "Comprehensive security assessments, threat detection, incident response, and ongoing protection strategies to safeguard your business assets and data.",
    chips: ["Threat Detection", "Incident Response", "Security Audits"],
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    text: "Migration planning, deployment, and ongoing management of cloud environments across AWS, Azure, and Google Cloud for scalable operations.",
    chips: ["Cloud Migration", "AWS / Azure", "DevOps"],
  },
  {
    icon: "⚙️",
    title: "Managed IT Services",
    text: "Proactive monitoring, maintenance, and support for your entire IT infrastructure — reducing downtime and freeing your team to focus on core business.",
    chips: ["24/7 Monitoring", "Help Desk", "Patch Management"],
  },
  {
    icon: "🚀",
    title: "Digital Transformation",
    text: "End-to-end digital transformation consultancy helping businesses redesign workflows, adopt emerging technologies, and build digital-first cultures.",
    chips: [],
  },
  {
    icon: "💻",
    title: "IT Support Solutions",
    text: "Responsive onsite and remote IT support services keeping your team productive with rapid issue resolution and expert technical guidance.",
    chips: [],
  },
  {
    icon: "🧠",
    title: "Technology Consultancy",
    text: "Strategic technology advisory services helping leadership teams make informed decisions about infrastructure investment and technology roadmaps.",
    chips: [],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Assessment",
    text: "We begin by thoroughly understanding your existing infrastructure, challenges, and business objectives through a detailed technical audit.",
  },
  {
    num: "02",
    title: "Strategy & Planning",
    text: "Our consultants develop a tailored technology roadmap aligned to your goals, timeline, and budget requirements.",
  },
  {
    num: "03",
    title: "Implementation",
    text: "Expert delivery of solutions with minimal disruption to your operations, following proven methodologies and best practices.",
  },
  {
    num: "04",
    title: "Ongoing Support",
    text: "Continuous monitoring, maintenance, and proactive support ensuring your technology investment delivers long-term value.",
  },
];

export default function TechnologyPage() {
  return (
    <PageShell
      loaderSubtitle="Technology"
      mobileLinks={[
        { href: "/", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#process", label: "Process" },
        { href: "#insights", label: "Insights" },
        { href: "#contact", label: "Contact" },
      ]}
      navbarProps={{
        links: [
          { href: "#services", label: "Services" },
          { href: "#process", label: "Process" },
          { href: "#insights", label: "Insights" },
          { href: "/logistics", label: "Clarusto Logistics" },
          { href: "/", label: "Group Home" },
        ],
        ctaHref: "#contact",
        ctaLabel: "Get IT Support",
        ctaClass: "btn btn-tech",
      }}
    >
      <section id="hero" className="division-hero division-hero-tech">
        <div className="division-hero-media">
          <Image
            src={heroImages.technology.src}
            alt={heroImages.technology.alt}
            fill
            priority
            sizes="100vw"
            className="division-hero-photo"
          />
          <div className="division-hero-overlay division-hero-overlay-tech" />
        </div>
        <div className="hero-grid" />
        <div className="tech-pattern" />
        <div className="container division-hero-content">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line hero-eyebrow-line-tech" />
            <span className="label tech-accent">
              Clarusto Group — Technology Division
            </span>
          </div>
          <h1 className="display-xl hero-title">
            Digital <span className="tech-grad">Transformation</span>
            <br />
            &amp; IT Solutions
            <br />
            <span className="hero-subtitle">Built for Modern Business</span>
          </h1>
          <p className="body-lg text-muted hero-desc">
            Clarusto Technology delivers business-focused IT solutions designed
            to modernise infrastructure, strengthen cybersecurity, improve
            operational efficiency, and support digital transformation
            initiatives.
          </p>
          <div className="hero-actions">
            <Link href="#services" className="btn btn-tech">
              Explore Services
            </Link>
            <a
              href={siteConfig.links.technology}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Visit Full Website
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img-frame">
            <Image
              src={sectionImages.techHeroVisual.src}
              alt={sectionImages.techHeroVisual.alt}
              fill
              priority
              sizes="45vw"
              className="hero-image crop-image"
            />
          </div>
        </div>
      </section>

      <SectionBg id="services" image={sectionImages.techServices} alt="Technology services" overlay="light">
        <div className="container">
          <div className="section-intro reveal">
            <p className="label tech-accent">What We Offer</p>
            <h2 className="display-lg">
              Our Technology <em>Services</em>
            </h2>
            <p className="body-md text-muted section-intro-desc">
              Scalable technology support and consultancy services tailored to
              evolving business requirements.
            </p>
          </div>
          <div className="grid-3 services-grid">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`service-card service-card-tech reveal${i > 0 ? ` reveal-delay-${Math.min(i, 2)}` : ""}`}
              >
                <div className="service-icon service-icon-tech">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="body-md text-muted">{s.text}</p>
                {s.chips.length > 0 && (
                  <div className="service-chips">
                    {s.chips.map((chip) => (
                      <span key={chip} className="service-chip service-chip-tech">
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

      <SectionBg id="process" image={sectionImages.techProcess} alt="Process workflow" overlay="medium">
        <div className="container">
          <div className="section-intro reveal">
            <p className="label tech-accent">How We Work</p>
            <h2 className="display-lg">
              Our <em>Process</em>
            </h2>
          </div>
          <div className="process-list">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className={`process-step reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}
              >
                <div className="step-number">{step.num}</div>
                <div>
                  <h4 className="process-title">{step.title}</h4>
                  <p className="text-muted body-md">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      <SectionBg id="insights" image={sectionImages.techInsights} alt="Tech insights" overlay="warm">
        <div className="container">
          <div className="section-intro reveal">
            <p className="label tech-accent">Technology Insights</p>
            <h2 className="display-lg">
              From Our <em>Blog</em>
            </h2>
          </div>
          <div className="grid-3 services-grid">
            {[
              {
                img: previewImages.techPost1.src,
                alt: previewImages.techPost1.alt,
                badge: "Cybersecurity",
                title: "Zero Trust Architecture: Why Perimeter Security Is No Longer Enough",
                text: "Modern cyber threats demand a fundamentally different approach to enterprise security design.",
              },
              {
                img: previewImages.techPost2.src,
                alt: previewImages.techPost2.alt,
                badge: "Cloud",
                title: "Multi-Cloud Strategy: Balancing Cost, Performance and Resilience",
                text: "How enterprise IT teams are leveraging multiple cloud providers to optimise outcomes.",
              },
              {
                img: previewImages.techPost3.src,
                alt: previewImages.techPost3.alt,
                badge: "AI & Automation",
                title: "AI-Powered IT Operations: Reducing MTTR with Intelligent Monitoring",
                text: "How artificial intelligence is transforming incident detection and resolution times.",
              },
            ].map((post, i) => (
              <div key={post.title} className={`news-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
                <div className="news-card-img crop-image-wrap">
                  <Image src={post.img} alt={post.alt} width={500} height={300} className="news-image crop-image" />
                  <span className="category-badge badge-tech">{post.badge}</span>
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
          <p className="label tech-accent">Get Started</p>
          <h2 className="display-lg">
            Ready to <em>Transform</em>
            <br />
            Your Technology?
          </h2>
          <p className="body-lg text-muted cta-desc">
            Our team of IT specialists is ready to assess your current setup and
            build a tailored technology strategy.
          </p>
          <div className="cta-actions">
            <a
              href={siteConfig.links.technology}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tech"
            >
              Visit clarusto.co.uk
            </a>
            <Link href="/contact" className="btn btn-outline">
              Group Enquiry
            </Link>
          </div>
          <p className="division-footer-note">
            Part of <Link href="/">Clarusto Group</Link> · Also see{" "}
            <Link href="/logistics" className="logi-accent">
              Clarusto Logistics →
            </Link>
          </p>
      </CtaSection>

      <Footer />
    </PageShell>
  );
}
