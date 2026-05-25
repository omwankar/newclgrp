import Link from "next/link";
import { navLinks } from "@/lib/site-config";

type NavbarProps = {
  logoSuffix?: string;
  links?: { href: string; label: string; section?: string }[];
  ctaHref?: string;
  ctaLabel?: string;
  ctaClass?: string;
  activePath?: string;
  showHamburger?: boolean;
};

export function Navbar({
  logoSuffix = "GROUP",
  links = [...navLinks],
  ctaHref = "/contact",
  ctaLabel = "Get in Touch",
  ctaClass = "btn btn-gold",
  activePath,
  showHamburger = true,
}: NavbarProps) {
  return (
    <nav id="navbar">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            CLARUSTO<span>{logoSuffix}</span>
          </Link>
          <div className="nav-links sd-nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${activePath === link.href ? " active" : ""}`}
                data-section={link.section}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <Link href={ctaHref} className={`${ctaClass} nav-cta`}>
              {ctaLabel}
            </Link>
            {showHamburger && (
              <button
                className="hamburger"
                id="hamburger"
                type="button"
                aria-label="Menu"
              >
                <span />
                <span />
                <span />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
