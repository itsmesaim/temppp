import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies } from '../../../lib/case-studies-data';
import CaseStudyDetailPage from './CaseStudyDetailClient';
import { buildMetadata, articleJsonLd, breadcrumbJsonLd } from '../../../lib/seo';
import JsonLd from '../../../components/JsonLd';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: { absolute: 'Case Study Not Found | SNK' } };

  return buildMetadata({
    title: `${cs.client} Case Study — ${cs.keyResult}`,
    description: cs.shortDesc,
    path: `/case-studies/${cs.slug}/`,
    image: cs.clientLogo,
    type: 'article',
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: cs.title,
            description: cs.shortDesc,
            path: `/case-studies/${cs.slug}/`,
            image: cs.clientLogo,
          }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: '/case-studies/' },
            { name: cs.client, path: `/case-studies/${cs.slug}/` },
          ]),
        ]}
      />
      <CaseStudyDetailPage params={Promise.resolve({ slug })} />
    </>
  );
}
