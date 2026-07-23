import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = buildMetadata({
  title: 'About SNK Web Solutions — Digital Agency in Navi Mumbai',
  description:
    'Learn about SNK Web Solutions — a trusted digital solutions company in Navi Mumbai delivering web design, SEO, digital marketing, and branding with measurable results.',
  path: '/about/',
});

export default function AboutPage() {
  return <AboutPageClient />;
}
