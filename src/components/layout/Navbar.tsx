import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/site-config";

type NavbarProps = {
  links?: { href: string; label: string; section?: string }[];
  ctaHref?: string;
  ctaLabel?: string;
  ctaClass?: string;
  activePath?: string;
  showHamburger?: boolean;
  logoHeight?: number;
};

export function Navbar({
  links = [...navLinks],
  ctaHref = "/contact",
  ctaLabel = "Get in Touch",
  ctaClass = "btn btn-gold",
  activePath,
  showHamburger = true,
  logoHeight = 34,
}: NavbarProps) {
  return (
    <nav id="navbar">
      <div className="container">
        <div className="nav-inner">
          <Logo height={logoHeight} priority />
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
