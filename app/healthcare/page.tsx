import type { Metadata } from 'next';
import HealthcarePageClient from './HealthcarePageClient';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Healthcare Digital Marketing Services in Navi Mumbai',
  description:
    'Healthcare digital marketing in Navi Mumbai — lead generation, social media, and SEO for hospitals, clinics, doctors, diagnostic centres, and healthcare organizations across Maharashtra.',
  path: '/healthcare/',
});

export default function HealthcarePage() {
  return <HealthcarePageClient />;
}
