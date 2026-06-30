import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Navi Mumbai | SNK',
  description:
    'Result-driven digital marketing services in Navi Mumbai — SEO, AEO, social media marketing, performance marketing, and web design & development for startups, SMEs, and enterprises.',
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
