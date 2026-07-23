import type { MetadataRoute } from 'next';
import { blogPosts } from '../lib/blog-data';
import { caseStudies } from '../lib/case-studies-data';
import { getAllServiceSlugs } from '../lib/services-data';
import { SITE_URL } from '../lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'];
  }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/about/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/', priority: 0.9, changeFrequency: 'weekly' },
    ...getAllServiceSlugs().map((slug) => ({
      path: `/services/${slug}/`,
      priority: 0.85,
      changeFrequency: 'monthly' as const,
    })),
    { path: '/services/ai-digital-marketing/', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/ai-digital-marketing/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/case-studies/', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/blog/', priority: 0.75, changeFrequency: 'weekly' },
    { path: '/contact/', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/healthcare/', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/healthcare/lead-generation/', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/healthcare/social-media/', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/healthcare/seo/', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/privacy-policy/', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms/', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return [
    ...staticPages.map(({ path, priority, changeFrequency }) => ({
      url: path === '' ? `${SITE_URL}/` : `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...caseStudies.map((cs) => ({
      url: `${SITE_URL}/case-studies/${cs.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
