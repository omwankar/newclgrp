import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { SectionBg } from "@/components/layout/SectionBg";
import { CtaSection } from "@/components/layout/CtaSection";
import { WorldMap } from "@/components/global/WorldMap";
import { heroImages, sectionImages } from "@/lib/data/images";
import {
  globalOffices,
  regionalStats,
  tradeCorridors,
} from "@/lib/data/global";

export const metadata: Metadata = {
  title: "Global Presence",
  description:
    "Clarusto Group operates across six international markets — UK, UAE, Germany, China, India, and Saudi Arabia.",
  alternates: { canonical: "https://clarusto.com/global" },
};

export default function GlobalPage() {
  return (
    <PageShell navbarProps={{ activePath: "/global" }}>
      <PageHero
        label="Global Presence"
        title={
          <>
            Connected Across
            <br />
            <em>International</em> Markets
          </>
        }
        description="Six strategic locations powering technology and logistics operations across Europe, the Middle East, and Asia-Pacific."
        image={heroImages.global.src}
        imageAlt={heroImages.global.alt}
        imagePosition="center 40%"
        variant="gold"
        centered
        stats={[
          { value: "6", label: "Markets" },
          { value: "40+", label: "Trade Corridors" },
          { value: "3", label: "Continents" },
        ]}
      />

      <SectionBg image={sectionImages.globalMap} alt="Global city" overlay="medium">
        <div className="container">
          <div className="global-inner">
            <div className="global-map-wrap reveal-left">
              <WorldMap gradientId="mapGlowPage" />
              <div className="map-label-wrap">
                <p className="label">Active Locations — 6 Markets</p>
              </div>
            </div>
            <div className="global-text reveal-right">
              <p className="label">Network Overview</p>
              <h2 className="display-md">
                A Growing <em>Global Network</em>
              </h2>
              <p className="body-md text-muted">
                Our international footprint enables reliable collaboration, digital
                transformation, freight movement, and operational coordination
                worldwide.
              </p>
              <div className="regional-stats">
                {regionalStats.map((stat) => (
                  <div key={stat.region} className="regional-stat-card">
                    <h5>{stat.region}</h5>
                    <div className="regional-stat-row">
                      <span>{stat.shipments} shipments/yr</span>
                      <span className="regional-growth">{stat.growth}</span>
                    </div>
                    <span className="regional-clients">{stat.clients} clients</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionBg>

      <SectionBg image={sectionImages.globalOffices} alt="Global trade" overlay="light">
        <div className="container">
          <div className="section-intro reveal">
            <p className="label">Office Directory</p>
            <h2 className="display-lg">
              Our <em>Locations</em>
            </h2>
          </div>
          <div className="offices-grid">
            {globalOffices.map((office, i) => (
              <div
                key={office.country}
                className={`office-card reveal${i > 0 ? ` reveal-delay-${Math.min(i % 3, 2)}` : ""}`}
              >
                <div className="office-header">
                  <span className="office-flag">{office.flag}</span>
                  <div>
                    <h4 className="office-country">{office.country}</h4>
                    <p className="office-role">{office.role}</p>
                  </div>
                </div>
                <div className="office-details">
                  <p><strong>City:</strong> {office.city}</p>
                  <p><strong>Address:</strong> {office.address}</p>
                  <p><strong>Phone:</strong> {office.phone}</p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${office.email}`} className="office-email">
                      {office.email}
                    </a>
                  </p>
                  <p>
                    <strong>Team:</strong> {office.employees} employees · Est.{" "}
                    {office.established}
                  </p>
                </div>
                <div className="office-services">
                  {office.services.map((s) => (
                    <span key={s} className="service-chip">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      <SectionBg image={sectionImages.globalCorridors} alt="Air freight routes" overlay="warm">
        <div className="container">
          <div className="section-intro reveal">
            <p className="label">Trade Corridors</p>
            <h2 className="display-lg">Key <em>Routes</em></h2>
          </div>
          <div className="corridor-table-wrap reveal">
            <table className="corridor-table">
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Volume</th>
                  <th>Mode</th>
                  <th>Transit Time</th>
                </tr>
              </thead>
              <tbody>
                {tradeCorridors.map((corridor) => (
                  <tr key={corridor.route}>
                    <td>{corridor.route}</td>
                    <td>{corridor.volume}</td>
                    <td>{corridor.mode}</td>
                    <td>{corridor.avgDays} days</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionBg>

      <CtaSection>
          <h2 className="display-lg">
            Expand Into <em>New Markets</em>
          </h2>
          <p className="body-lg text-muted cta-desc">
            Our global teams can support your technology and logistics needs
            across all six operational regions.
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-gold">
              Contact Us
            </Link>
            <Link href="/logistics" className="btn btn-outline">
              Freight Services
            </Link>
          </div>
      </CtaSection>

      <Footer />
    </PageShell>
  );
}
