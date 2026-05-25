/** Build a verified Unsplash CDN URL (Source API is deprecated — use direct photo IDs). */
export function unsplashPhoto(photoId: string, width = 800): string {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&q=80`;
}

export type SiteImage = {
  src: string;
  alt: string;
  /** Search keyword this image was chosen for (documentation / future swaps) */
  keyword: string;
};

export function defineImage(
  photoId: string,
  alt: string,
  keyword: string,
  width = 800
): SiteImage {
  return {
    src: unsplashPhoto(photoId, width),
    alt,
    keyword,
  };
}
