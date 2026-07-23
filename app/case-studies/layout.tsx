import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Case Studies — Real Results for Real Businesses',
  description:
    'Explore how SNK drives measurable growth for businesses through SEO, digital marketing, branding, and web development. Real results, real clients.',
  path: '/case-studies/',
});

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
