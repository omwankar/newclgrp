import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo footer-logo">
              CLARUSTO<span>GROUP</span>
            </div>
            <p>
              Building Global Solutions Through Technology, Logistics &amp;
              Innovation. Connecting businesses across six international
              markets.
            </p>
            <div className="footer-social">
              <a href={siteConfig.links.linkedin} className="social-btn" aria-label="LinkedIn">
                in
              </a>
              <a href={siteConfig.links.facebook} className="social-btn" aria-label="Facebook">
                f
              </a>
              <a href={siteConfig.links.instagram} className="social-btn" aria-label="Instagram">
                ✦
              </a>
              <a href={siteConfig.links.twitter} className="social-btn" aria-label="X/Twitter">
                𝕏
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h6>Our Companies</h6>
            <div className="footer-links">
              <a href={siteConfig.links.technology} target="_blank" rel="noopener noreferrer">
                Clarusto Technology
              </a>
              <a href={siteConfig.links.logistics} target="_blank" rel="noopener noreferrer">
                Clarusto Logistics
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h6>Quick Links</h6>
            <div className="footer-links">
              <Link href="/about">About Group</Link>
              <Link href="/companies">Our Companies</Link>
              <Link href="/global">Global Presence</Link>
              <Link href="/insights">News &amp; Insights</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-col">
            <h6>Global Presence</h6>
            <div className="footer-links">
              <span>🇬🇧 United Kingdom</span>
              <span>🇦🇪 UAE</span>
              <span>🇩🇪 Germany</span>
              <span>🇨🇳 China</span>
              <span>🇮🇳 India</span>
              <span>🇸🇦 Saudi Arabia</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Clarusto Group. All rights reserved.</p>
          <div className="footer-presence">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
