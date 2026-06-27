export const SITE_NAME = "Boston Shore Excursions";
export const SITE_URL = "https://bostonshoreexcursion.com";
export const SITE_DESCRIPTION =
  "Independent shore excursion guides for cruise passengers visiting Boston, Massachusetts — Freedom Trail, Harvard, Salem, Fenway, whale watching, and Canada & New England port planning.";
export const GEO_LABEL = "Boston, Massachusetts";

export const HERO_IMAGE = "/images/boston-hero.png";
export const HERO_IMAGE_ALT =
  "Boston harbour and waterfront skyline with historic Custom House Tower, Long Wharf, and downtown architecture viewed from the water";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(title: string): string {
  return title;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(HERO_IMAGE);
  return {
    title: pageTitle(title),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle(title),
      description,
      url,
      type: "website" as const,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [{ url: ogImage, alt: HERO_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageTitle(title),
      description,
      images: [ogImage],
    },
  };
}
