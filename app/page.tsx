import type { Metadata } from 'next';
import { buildMetadata } from '../lib/seo';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = buildMetadata({
  title: 'Digital Marketing Agency in Navi Mumbai',
  description:
    'Looking for the best digital marketing agency in Navi Mumbai? SNK Web Solutions helps startups, SMEs, healthcare brands, and enterprises grow with SEO, Google Ads, social media, and web design.',
  path: '/',
});

export default function HomePage() {
  return <HomePageClient />;
}
