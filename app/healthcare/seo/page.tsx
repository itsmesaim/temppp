import HealthcareDetailPage from '../../../components/HealthcareDetailPage';
import { getHealthcareBySlug } from '../../../lib/healthcare-data';
import { notFound } from 'next/navigation';

export default function HealthcareSEOPage() {
  const service = getHealthcareBySlug('seo');
  if (!service) notFound();
  return <HealthcareDetailPage service={service} />;
}
