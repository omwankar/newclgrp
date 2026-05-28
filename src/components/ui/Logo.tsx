import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  className?: string;
  height?: number;
  priority?: boolean;
  href?: string;
};

export function Logo({
  className = "",
  height = 36,
  priority = false,
  href = "/",
}: LogoProps) {
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={siteConfig.brand.logo}
      alt="Clarusto"
      height={height}
      className={`brand-logo ${className}`.trim()}
      style={{ height, width: "auto" }}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} className="brand-logo-link" aria-label="Clarusto home">
      {image}
    </Link>
  );
}
