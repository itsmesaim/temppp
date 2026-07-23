import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Digital Marketing Services in Navi Mumbai',
  description:
    'Result-driven digital marketing services in Navi Mumbai — SEO, AEO, social media marketing, performance marketing, and web design & development for startups, SMEs, and enterprises.',
  path: '/services/',
});

export default function ServicesPage() {
  return <ServicesPageClient />;
}
