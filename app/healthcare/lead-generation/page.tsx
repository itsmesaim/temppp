import HealthcareDetailPage from '../../../components/HealthcareDetailPage';
import { getHealthcareBySlug } from '../../../lib/healthcare-data';
import { notFound } from 'next/navigation';

export default function HealthcareLeadGenerationPage() {
  const service = getHealthcareBySlug('lead-generation');
  if (!service) notFound();
  return <HealthcareDetailPage service={service} />;
}
