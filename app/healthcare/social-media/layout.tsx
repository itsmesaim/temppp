import type { Metadata } from 'next';
import { buildMetadata } from '../../../lib/seo';
import { getHealthcareBySlug } from '../../../lib/healthcare-data';

const service = getHealthcareBySlug('social-media');

export const metadata: Metadata = buildMetadata({
  title: service?.metaTitle ?? 'Healthcare Social Media in Navi Mumbai',
  description:
    service?.metaDescription ??
    'Healthcare social media marketing agency in Navi Mumbai for doctors, clinics, hospitals, and medical brands.',
  path: '/healthcare/social-media/',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
