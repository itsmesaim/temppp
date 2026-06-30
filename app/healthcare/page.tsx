import type { Metadata } from 'next';
import HealthcarePageClient from './HealthcarePageClient';

export const metadata: Metadata = {
  title: 'Healthcare Digital Marketing Services in Navi Mumbai | SNK',
  description:
    'Healthcare digital marketing in Navi Mumbai — lead generation, social media, and SEO for hospitals, clinics, doctors, diagnostic centres, and healthcare organizations across Maharashtra.',
};

export default function HealthcarePage() {
  return <HealthcarePageClient />;
}
