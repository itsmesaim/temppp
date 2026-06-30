'use client';

import ServicePageLayout from './ServicePageLayout';
import type { HealthcareService } from '../lib/healthcare-data';
import { healthcareServices } from '../lib/healthcare-data';
import { getHealthcareMetrics } from '../lib/service-metrics';

export default function HealthcareDetailPage({ service }: { service: HealthcareService }) {
  const relatedLinks = healthcareServices
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({ href: s.href, label: s.title }));

  return (
    <ServicePageLayout
      variant="healthcare"
      icon={service.icon}
      badge={service.badge}
      heroLine1={service.heroLine1}
      heroLine2={service.heroLine2}
      heroDesc={service.heroDesc}
      introTitle={service.introTitle}
      introParagraphs={service.introParagraphs}
      features={service.features}
      highlights={service.highlights}
      featuresTitle={`Our ${service.title} Services`}
      ctaTitle={service.ctaTitle}
      ctaDesc={service.ctaDesc}
      ctaLabel={service.ctaLabel}
      backHref="/healthcare"
      backLabel="Healthcare Services"
      relatedLinks={relatedLinks}
      metrics={getHealthcareMetrics(service.slug)}
    />
  );
}
