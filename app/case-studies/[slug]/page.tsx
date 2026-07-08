import { caseStudies } from '../../../lib/case-studies-data';
import CaseStudyDetailPage from './CaseStudyDetailClient';

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <CaseStudyDetailPage params={params} />;
}
