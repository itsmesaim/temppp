import HealthcareDetailPage from '../../../components/HealthcareDetailPage';
import { getHealthcareBySlug } from '../../../lib/healthcare-data';
import { notFound } from 'next/navigation';

export default function HealthcareSocialMediaPage() {
  const service = getHealthcareBySlug('social-media');
  if (!service) notFound();
  return <HealthcareDetailPage service={service} />;
}
