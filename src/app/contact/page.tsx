import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { heroImages, sectionImages } from "@/lib/data/images";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { SectionBg } from "@/components/layout/SectionBg";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Clarusto Group for technology solutions, freight forwarding expertise, or international business collaboration opportunities.",
  alternates: { canonical: "https://clarusto.com/contact" },
};

export default function ContactPage() {
  return (
    <PageShell navbarProps={{ activePath: "/contact" }}>
      <PageHero
        label="Contact Clarusto Group"
        title={
          <>
            Let&apos;s Build Global
            <br />
            <em>Solutions Together</em>
          </>
        }
        description="Whether you need technology solutions, freight forwarding expertise, or global business collaboration — our teams are ready."
        image={heroImages.contact.src}
        imageAlt={heroImages.contact.alt}
        variant="gold"
        centered
      />

      <SectionBg image={sectionImages.contactForm} alt="Business meeting" overlay="light">
        <div className="container">
          <div className="contact-page-grid">
            <div>
              <div className="reveal">
                <h2 className="display-md contact-page-heading">
                  How Can We
                  <br />
                  <em>Help You?</em>
                </h2>
              </div>

              <div className="contact-info-stack">
                <div className="info-card reveal">
                  <div className="info-icon info-icon-tech">🌐</div>
                  <div>
                    <h5>Clarusto Technology</h5>
                    <p>
                      IT solutions, digital transformation, cloud infrastructure,
                      and cybersecurity services.
                    </p>
                    <a
                      href={siteConfig.links.technology}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-link info-link-tech"
                    >
                      clarusto.co.uk →
                    </a>
                  </div>
                </div>
                <div className="info-card reveal reveal-delay-1">
                  <div className="info-icon info-icon-logi">🚢</div>
                  <div>
                    <h5>Clarusto Logistics</h5>
                    <p>
                      International freight forwarding, cargo management, customs,
                      and supply chain support.
                    </p>
                    <a
                      href={siteConfig.links.logistics}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-link info-link-logi"
                    >
                      clarustologistics.com →
                    </a>
                  </div>
                </div>
                <div className="info-card reveal reveal-delay-2">
                  <div className="info-icon">🤝</div>
                  <div>
                    <h5>Business Partnerships</h5>
                    <p>
                      Strategic alliances and international collaboration
                      opportunities.
                    </p>
                    <p className="info-email">{siteConfig.email.partnerships}</p>
                  </div>
                </div>
              </div>

              <div className="social-box reveal">
                <p className="label">Our Social Channels</p>
                <div className="footer-social">
                  <a href={siteConfig.links.linkedin} className="social-btn" aria-label="LinkedIn">in</a>
                  <a href={siteConfig.links.facebook} className="social-btn" aria-label="Facebook">f</a>
                  <a href={siteConfig.links.instagram} className="social-btn" aria-label="Instagram">✦</a>
                  <a href={siteConfig.links.twitter} className="social-btn" aria-label="X">𝕏</a>
                </div>
              </div>
            </div>

            <div className="contact-form-card reveal-right">
              <h3 className="display-md contact-form-title">
                Send Us a <em>Message</em>
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionBg>

      <Footer />
    </PageShell>
  );
}
