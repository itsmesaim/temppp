import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '../../../components/ServiceDetailPage';
import { getAllServiceSlugs, getServiceBySlug } from '../../../lib/services-data';
import { buildMetadata, serviceJsonLd, breadcrumbJsonLd } from '../../../lib/seo';
import JsonLd from '../../../components/JsonLd';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: { absolute: 'Service Not Found | SNK' } };

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: service.title,
            description: service.metaDescription,
            path: `/services/${service.slug}/`,
          }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: service.title, path: `/services/${service.slug}/` },
          ]),
        ]}
      />
      <ServiceDetailPage service={service} />
    </>
  );
}
