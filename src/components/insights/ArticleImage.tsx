import Image from "next/image";

type ArticleImageProps = {
  src: string;
  alt: string;
  featured?: boolean;
  priority?: boolean;
};

export function ArticleImage({
  src,
  alt,
  featured = false,
  priority = false,
}: ArticleImageProps) {
  return (
    <div
      className={`article-image-wrap crop-image-wrap${featured ? " article-image-featured" : ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={
          featured
            ? "(max-width: 768px) 100vw, 50vw"
            : "(max-width: 768px) 100vw, 33vw"
        }
        className="article-image crop-image"
        priority={priority}
      />
    </div>
  );
}
