import type { Metadata } from 'next';
import { siteConfig } from './siteConfig';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = siteConfig.defaultOgImage,
}: PageMetadataInput): Metadata {
  const canonical = path === '/' ? '/' : `${path}/`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [{ url: ogImage }],
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
