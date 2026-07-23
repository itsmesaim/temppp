import type { Metadata } from 'next';
import { FOUNDED_YEAR } from './site';

export const SITE_URL = 'https://snkwebsolutions.com';
export const SITE_NAME = 'SNK Web Solutions';
export const SITE_PHONE = '+919321587762';
export const SITE_EMAIL = 'snkwebsolutions@gmail.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/snk-logo.jpg`;

/** Ensure path is absolute site path with trailing slash (except root). */
export function canonicalPath(path: string): string {
  if (!path || path === '/') return '/';
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return withSlash.endsWith('/') ? withSlash : `${withSlash}/`;
}

export function absoluteUrl(path: string = '/'): string {
  const p = canonicalPath(path);
  return p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`;
}

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = /\| SNK\b/.test(title) ? title : `${title} | SNK`;
  const ogImage = image.startsWith('http')
    ? image
    : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      type,
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/snk-logo.jpg`,
    image: DEFAULT_OG_IMAGE,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    foundingDate: String(FOUNDED_YEAR),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'S-10-B, Haware Centurion Mall, 2nd Floor, Seawoods',
      addressLocality: 'Navi Mumbai',
      postalCode: '400706',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Navi Mumbai' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Thane' },
      { '@type': 'State', name: 'Maharashtra' },
    ],
    sameAs: [
      'https://www.facebook.com/snkwebsolutions',
      'https://www.instagram.com/snkwebsolutions',
      'https://www.youtube.com/@snkwebsolution',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_PHONE,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    description:
      'Digital marketing agency in Navi Mumbai offering SEO, performance marketing, social media, web design, and healthcare digital marketing.',
  };
}

export function serviceJsonLd(input: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: 'Navi Mumbai',
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    image: input.image
      ? input.image.startsWith('http')
        ? input.image
        : `${SITE_URL}${input.image}`
      : DEFAULT_OG_IMAGE,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/snk-logo.jpg` },
    },
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
  };
}
