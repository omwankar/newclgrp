import Image from "next/image";
import { imageSrc } from "@/lib/data/images";
import type { SiteImage } from "@/lib/unsplash";

type SectionBgLayerProps = {
  image: SiteImage | string;
  alt?: string;
  overlay?: "light" | "medium" | "warm";
};

export function SectionBgLayer({
  image,
  alt = "",
  overlay = "medium",
}: SectionBgLayerProps) {
  const src = imageSrc(image);
  const resolvedAlt =
    alt || (typeof image === "string" ? "" : image.alt);

  return (
    <div className="section-bg-media" aria-hidden={!resolvedAlt}>
      <div className="section-bg-photo">
        <Image
          src={src}
          alt={resolvedAlt}
          fill
          sizes="100vw"
          className="section-bg-img"
        />
      </div>
      <div className={`section-bg-overlay section-bg-overlay-${overlay}`} />
    </div>
  );
}
