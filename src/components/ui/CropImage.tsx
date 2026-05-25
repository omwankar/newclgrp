import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { SiteImage } from "@/lib/unsplash";
import { imageSrc } from "@/lib/data/images";

type CropImageProps = {
  image: SiteImage | string;
  alt?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  wrapperClassName?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/** Image in an overflow-hidden container with object-fit: cover (Next.js lazy-loads by default). */
export function CropImage({
  image,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  className = "crop-image",
  wrapperClassName = "",
  style,
  children,
}: CropImageProps) {
  const src = imageSrc(image);
  const resolvedAlt =
    alt ?? (typeof image === "string" ? "" : image.alt);

  if (fill) {
    return (
      <div className={`crop-image-wrap crop-image-fill ${wrapperClassName}`.trim()}>
        <Image
          src={src}
          alt={resolvedAlt}
          fill
          sizes={sizes ?? "100vw"}
          className={className}
          priority={priority}
          style={style}
        />
        {children}
      </div>
    );
  }

  return (
    <div
      className={`crop-image-wrap ${wrapperClassName}`.trim()}
      style={width && height ? { width, height } : undefined}
    >
      <Image
        src={src}
        alt={resolvedAlt}
        width={width ?? 800}
        height={height ?? 600}
        sizes={sizes}
        className={className}
        priority={priority}
        style={style}
      />
      {children}
    </div>
  );
}
