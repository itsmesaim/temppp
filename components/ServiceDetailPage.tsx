'use client';

import ServicePageLayout from './ServicePageLayout';
import type { Service } from '../lib/services-data';
import { services } from '../lib/services-data';
import { getServiceMetrics } from '../lib/service-metrics';

export default function ServiceDetailPage({ service }: { service: Service }) {
  const relatedLinks = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4)
    .map((s) => ({ href: `/services/${s.slug}`, label: s.title }));

  return (
    <ServicePageLayout
      variant="service"
      icon={service.icon}
      badge={service.badge}
      heroLine1={service.heroLine1}
      heroLine2={service.heroLine2}
      tagline={service.tagline}
      heroDesc={service.heroDesc}
      introTitle={service.introTitle}
      introParagraphs={service.introParagraphs}
      features={service.features}
      highlights={service.highlights}
      featuresTitle="What We Offer"
      whyChooseTitle={service.slug === 'aeo' ? 'Where We Help You Appear' : 'Why Choose SNK?'}
      whyChoose={service.whyChoose}
      benefits={service.benefits}
      ctaTitle="Ready to Get Started?"
      ctaDesc={
        service.ctaClosing ??
        `Partner with SNK for expert ${service.title.toLowerCase()} tailored to your business goals.`
      }
      ctaLabel={service.ctaLabel}
      backHref="/services"
      backLabel="All Services"
      relatedLinks={relatedLinks}
      metrics={getServiceMetrics(service.slug)}
    />
  );
}
