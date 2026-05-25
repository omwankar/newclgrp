import type { ReactNode } from "react";
import type { SiteImage } from "@/lib/unsplash";
import { SectionBgLayer } from "./SectionBgLayer";

type SectionBgProps = {
  id?: string;
  image: SiteImage | string;
  alt?: string;
  overlay?: "light" | "medium" | "warm";
  className?: string;
  children: ReactNode;
};

export function SectionBg({
  id,
  image,
  alt = "",
  overlay = "medium",
  className = "",
  children,
}: SectionBgProps) {
  return (
    <section
      id={id}
      className={`section section-bg section-aurora section-bg-${overlay} ${className}`.trim()}
    >
      <SectionBgLayer image={image} alt={alt} overlay={overlay} />
      <div className="section-bg-content">{children}</div>
    </section>
  );
}
