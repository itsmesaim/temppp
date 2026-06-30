import type { Metadata } from 'next';
import HealthcarePageClient from './HealthcarePageClient';

export const metadata: Metadata = {
  title: 'Healthcare Digital Marketing Services in Navi Mumbai | SNK',
  description:
    'Specialised healthcare digital marketing services in Navi Mumbai — lead generation, social media marketing, and SEO for hospitals, clinics, doctors, and diagnostic centres.',
};

export default function HealthcarePage() {
  return <HealthcarePageClient />;
}