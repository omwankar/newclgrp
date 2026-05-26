import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { SectionBg } from "@/components/layout/SectionBg";
import { CtaSection } from "@/components/layout/CtaSection";
import { heroImages, sectionImages } from "@/lib/data/images";
import {
  divisions,
  groupStats,
  leadershipTeam,
  partnershipBenefits,
} from "@/lib/data/companies";

export const metadata: Metadata = {
  title: "Our Companies",
  description:
    "Explore Clarusto Technology and Clarusto Logistics — two specialised divisions united under the Clarusto Group ecosystem.",
  alternates: { canonical: "https://clarusto.com/companies" },
};

export default function CompaniesPage() {
  return (
    <PageShell navbarProps={{ activePath: "/companies" }}>
      <PageHero
        label="Our Companies"
        title={
          <>
            Two Divisions.
            <br />
            <em>One Vision.</em>
          </>
        }
        description="Dedicated companies delivering specialised expertise across technology and freight forwarding — united under one global ecosystem."
        image={heroImages.companies.src}
        imageAlt={heroImages.companies.alt}
        variant="gold"
        centered
        size="lg"
      />

      <SectionBg
        image={sectionImages.companiesDivisions}
        alt="Collaborative team in a modern workspace"
        overlay="medium"
        className="section-companies"
      >
        <div className="container">
          <div className="stats-bar reveal">
            {groupStats.map((stat) => (
              <div key={stat.label} className="stat-bar-item">
                <div className="stat-bar-value">{stat.value}</div>
                <div className="stat-bar-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="companies-grid companies-grid-page">
          {divisions.map((division, i) => (
            <div
              key={division.id}
              className={`company-card ${division.cardClass} reveal${i === 0 ? "-left" : "-right"}`}
            >
              <div className="company-card-bg">
                <Image
                  src={division.image}
                  alt={division.imageAlt}
                  fill
                  sizes="50vw"
                />
              </div>
              <div className="company-card-number">{division.number}</div>
              <div className="company-card-content">
                <div className={`company-tag ${division.tagClass}`}>
                  <span>●</span> {division.tag}
                </div>
                <h3>
                  {division.name.split(" ")[0]}
                  <br />
                  <em>{division.name.split(" ").slice(1).join(" ")}</em>
                </h3>
                <p className="sub">{division.sub}</p>
                <p>{division.description}</p>

                <div className="division-highlights">
                  {division.highlights.map((h) => (
                    <div key={h.label} className="division-highlight">
                      <span className="division-highlight-value">{h.value}</span>
                      <span className="division-highlight-label">{h.label}</span>
                    </div>
                  ))}
                </div>

                <div className="company-services">
                  {division.services.map((s) => (
                    <span key={s} className="service-chip">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="company-card-actions">
                  <a
                    href={division.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${division.accentClass}`}
                  >
                    Visit Website
                  </a>
                  <Link href={division.learnMorePath} className="btn btn-outline">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionBg>

      <SectionBg image={sectionImages.companiesLeadership} alt="Leadership team" overlay="light">
        <div className="container">
          <div className="section-intro reveal">
            <p className="label">Leadership</p>
            <h2 className="display-lg">
              Meet Our <em>Leadership Team</em>
            </h2>
          </div>
          <div className="leadership-grid">
            {leadershipTeam.map((person, i) => (
              <div
                key={person.name}
                className={`leadership-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ""}`}
              >
                <div className="leadership-avatar">{person.initials}</div>
                <h4 className="leadership-name">{person.name}</h4>
                <p className="leadership-role">{person.role}</p>
                <p className="body-md text-muted">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      <SectionBg image={sectionImages.companiesPartnership} alt="Partnership" overlay="warm">
        <div className="container">
          <div className="section-intro reveal">
            <p className="label">Why Clarusto Group</p>
            <h2 className="display-lg">
              Partnership <em>Benefits</em>
            </h2>
          </div>
          <div className="grid-2 partnership-grid">
            {partnershipBenefits.map((item, i) => (
              <div
                key={item.title}
                className={`partnership-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}
              >
                <div className="partnership-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p className="body-md text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      <CtaSection>
          <h2 className="display-lg">
            Ready to Work With <em>Our Teams?</em>
          </h2>
          <p className="body-lg text-muted cta-desc">
            Connect with the division best suited to your technology or
            logistics requirements.
          </p>
          <div className="cta-actions">
            <Link href="/technology" className="btn btn-tech">
              Clarusto Technology
            </Link>
            <Link href="/logistics" className="btn btn-logi">
              Clarusto Logistics
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Group
            </Link>
          </div>
      </CtaSection>

      <Footer />
    </PageShell>
  );
}
