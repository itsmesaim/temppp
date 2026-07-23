import type { Metadata } from 'next';
import { buildMetadata } from '../../../lib/seo';
import { getHealthcareBySlug } from '../../../lib/healthcare-data';

const service = getHealthcareBySlug('seo');

export const metadata: Metadata = buildMetadata({
  title: service?.metaTitle ?? 'Healthcare SEO in Navi Mumbai',
  description:
    service?.metaDescription ??
    'SNK is a leading healthcare SEO agency in Navi Mumbai providing specialized SEO for hospitals, clinics, doctors, and diagnostic centres across Maharashtra.',
  path: '/healthcare/seo/',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
