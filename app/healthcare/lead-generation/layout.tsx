import type { Metadata } from 'next';
import { buildMetadata } from '../../../lib/seo';
import { getHealthcareBySlug } from '../../../lib/healthcare-data';

const service = getHealthcareBySlug('lead-generation');

export const metadata: Metadata = buildMetadata({
  title: service?.metaTitle ?? 'Healthcare Lead Generation Services in Navi Mumbai',
  description:
    service?.metaDescription ??
    'Healthcare lead generation services in Navi Mumbai for hospitals, clinics, doctors, and diagnostic centres.',
  path: '/healthcare/lead-generation/',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
