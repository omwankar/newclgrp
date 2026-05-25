import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { TubesBackgroundLazy } from "@/components/effects/TubesBackgroundLazy";

export function ContactSection() {
  return (
    <section id="contact" className="section cta-tubes-section contact-tubes-section">
      <TubesBackgroundLazy className="cta-tubes-wrap contact-tubes-wrap">
        <div className="container contact-tubes-content">
          <div className="contact-inner">
            <div className="contact-text">
              <div className="reveal">
                <div className="section-divider">
                  <div className="divider-diamond" />
                  <div className="divider-line" />
                </div>
                <p className="label">Contact</p>
                <h2 className="display-lg">
                  Let&apos;s Build Global
                  <br />
                  Solutions <em>Together</em>
                </h2>
              </div>
              <div className="reveal reveal-delay-1">
                <p className="body-md text-muted">
                  Whether you are looking for technology solutions, freight
                  forwarding expertise, or international business collaboration
                  opportunities, our teams are ready to support your operations.
                </p>
                <p className="body-md text-muted">
                  Connect with Clarusto Group to explore scalable solutions designed
                  for modern global markets.
                </p>
              </div>
              <div className="contact-actions reveal reveal-delay-2">
                <Link href="/contact" className="btn btn-gold">
                  Contact Clarusto Group
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
                <Link href="/companies" className="btn btn-outline">
                  Explore Our Companies
                </Link>
              </div>
            </div>

            <div className="contact-info-cards reveal-right sd-stagger">
              <div className="info-card sd-spotlight">
                <div className="info-icon">🌐</div>
                <div>
                  <h5>Technology Enquiries</h5>
                  <p>
                    IT solutions, digital transformation, and cybersecurity support
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
              <div className="info-card sd-spotlight">
                <div className="info-icon">🚢</div>
                <div>
                  <h5>Logistics Enquiries</h5>
                  <p>
                    Freight forwarding, cargo, customs coordination worldwide
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
              <div className="info-card sd-spotlight">
                <div className="info-icon">🤝</div>
                <div>
                  <h5>Business Partnerships</h5>
                  <p>
                    Strategic alliances, investment opportunities, and global
                    collaborations
                  </p>
                  <p className="info-email">{siteConfig.email.partnerships}</p>
                </div>
              </div>
              <div className="info-card sd-spotlight">
                <div className="info-icon">📍</div>
                <div>
                  <h5>Headquarters</h5>
                  <p>
                    United Kingdom — serving 6 international markets globally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TubesBackgroundLazy>
    </section>
  );
}
