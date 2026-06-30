import type { MetadataRoute } from 'next';
import { blogPosts } from '../lib/blog-data';
import { caseStudies } from '../lib/case-studies-data';
import { getAllServiceSlugs } from '../lib/services-data';

const BASE_URL = 'https://snkwebsolutions.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/services',
    ...getAllServiceSlugs().map((slug) => `/services/${slug}`),
    '/ai-digital-marketing',
    '/case-studies',
    '/blog',
    '/contact',
    '/healthcare',
    '/healthcare/lead-generation',
    '/healthcare/social-media',
    '/healthcare/seo',
    '/privacy-policy',
    '/terms',
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...caseStudies.map((cs) => ({
      url: `${BASE_URL}/case-studies/${cs.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
