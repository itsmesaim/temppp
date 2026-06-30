import type { IconName } from '../components/ServiceIcon';

export type HealthcareService = {
  slug: string;
  href: string;
  icon: IconName;
  badge: string;
  title: string;
  heroLine1: string;
  heroLine2: string;
  heroDesc: string;
  introTitle: string;
  introParagraphs: string[];
  features: string[];
  highlights: string[];
  ctaTitle: string;
  ctaDesc: string;
  ctaLabel: string;
  metaTitle: string;
  metaDescription: string;
};

export const healthcareServices: HealthcareService[] = [
  {
    slug: 'seo',
    href: '/healthcare/seo',
    icon: 'search',
    badge: 'SEO',
    title: 'Healthcare SEO',
    heroLine1: 'Healthcare SEO',
    heroLine2: 'Services in Navi Mumbai.',
    heroDesc:
      'Patients increasingly rely on search engines to find trusted healthcare providers. SNK helps medical professionals improve online visibility, attract local patients, and build trust in highly competitive healthcare markets.',
    introTitle: 'Healthcare SEO Services in Navi Mumbai',
    introParagraphs: [
      'SNK is a leading healthcare SEO agency providing specialized SEO services for hospitals, clinics, doctors, diagnostic centers, and healthcare organizations across Navi Mumbai, Mumbai, and Maharashtra.',
      'Our healthcare SEO services include medical keyword research, local SEO, Google Business Profile optimization, technical SEO audits, healthcare content optimization, reputation management, and website performance improvements. We ensure your healthcare website follows search engine best practices while maintaining the professionalism, accuracy, and credibility expected in the healthcare industry.',
      'As a dedicated healthcare SEO agency, we focus on improving rankings for relevant healthcare searches, helping medical practices generate more appointment requests, patient inquiries, and qualified leads. Whether you are an independent practitioner, specialty clinic, hospital, or multi-location healthcare organization, our solutions are designed to support long-term patient acquisition and brand growth.',
    ],
    features: [
      'Medical keyword research',
      'Local SEO',
      'Google Business Profile optimization',
      'Technical SEO audits',
      'Healthcare content optimization',
      'Reputation management',
      'Website performance improvements',
    ],
    highlights: [
      'Medical Keyword Research',
      'Local SEO',
      'Technical SEO',
      'Google Business Profile',
    ],
    ctaTitle: 'Want More Patients to Find Your Practice Online?',
    ctaDesc:
      'Partner with SNK, a trusted healthcare SEO agency, and strengthen your healthcare brand through effective SEO strategies that drive long-term patient acquisition.',
    ctaLabel: 'Get a Free SEO Audit',
    metaTitle: 'Healthcare SEO in Navi Mumbai | SNK',
    metaDescription:
      'Expert healthcare SEO services in Navi Mumbai. Rank higher on Google for medical searches, attract local patients organically, and build long-term digital authority for your practice.',
  },
  {
    slug: 'social-media',
    href: '/healthcare/social-media',
    icon: 'smartphone',
    badge: 'Social Media',
    title: 'Healthcare Social Media',
    heroLine1: 'Healthcare Social Media',
    heroLine2: 'Marketing Agency.',
    heroDesc:
      'SNK is a leading healthcare social media marketing agency in Navi Mumbai, offering specialized social media solutions for doctors, clinics, hospitals, healthcare startups, and medical brands across India.',
    introTitle: 'Healthcare Social Media Marketing Agency in Navi Mumbai',
    introParagraphs: [
      'Our healthcare social media marketing services are designed to help healthcare providers connect with patients, build trust, and strengthen their online presence. As an experienced healthcare social media agency, we understand the unique challenges of healthcare communication.',
      'Social media has become a powerful platform for patient education, community engagement, healthcare awareness, and brand building. Our healthcare marketing specialists create informative, compliant, and engaging content that helps healthcare organizations establish credibility and maintain meaningful patient relationships.',
      'As a trusted healthcare social media marketing agency, we develop customized strategies tailored to your healthcare practice, specialty, and business goals. We focus on delivering accurate, valuable, and patient-centric information that builds confidence and trust among potential patients.',
      'Our team leverages strategic campaign planning, audience targeting, and platform-specific optimization to ensure your healthcare services reach the right audience while maintaining a professional and compliant online presence. Through effective healthcare social media marketing, we help healthcare providers improve patient engagement, increase brand visibility, and support patient acquisition efforts.',
      'Whether you want to promote healthcare services, educate your audience, increase patient inquiries, or establish your organization as a trusted authority, SNK provides results-driven solutions designed for sustainable growth.',
    ],
    features: [
      'Healthcare content creation',
      'Social media management',
      'Patient engagement campaigns',
      'Healthcare awareness initiatives',
      'Video marketing for healthcare providers',
      'Paid healthcare advertising',
      'Online reputation management',
      'Social media performance tracking and reporting',
    ],
    highlights: [
      'Content Creation',
      'Patient Engagement',
      'Paid Social Ads',
      'Reputation Management',
    ],
    ctaTitle: 'Attract, Engage & Retain More Patients Online',
    ctaDesc:
      "If you're looking for a reliable healthcare social media agency that understands the healthcare industry, SNK is here to help. Contact us today to learn how our healthcare social media marketing services can help your healthcare brand attract, engage, and retain more patients online.",
    ctaLabel: 'Contact Us Today',
    metaTitle: 'Healthcare Social Media in Navi Mumbai | SNK',
    metaDescription:
      'Healthcare social media marketing in Navi Mumbai. Build patient trust and brand authority through strategic, compliant content across Facebook, Instagram, LinkedIn, and YouTube.',
  },
  {
    slug: 'lead-generation',
    href: '/healthcare/lead-generation',
    icon: 'target',
    badge: 'Lead Generation',
    title: 'Healthcare Lead Generation',
    heroLine1: 'Healthcare Lead',
    heroLine2: 'Generation Services.',
    heroDesc:
      'SNK is a trusted healthcare lead generation agency offering result-driven services for hospitals, clinics, doctors, diagnostic centers, and healthcare organizations across Navi Mumbai and beyond.',
    introTitle: 'Healthcare Lead Generation Services in Navi Mumbai',
    introParagraphs: [
      'Our specialized lead generation for healthcare providers helps attract high-quality patient inquiries, appointment bookings, and consultation requests through strategic digital marketing campaigns.',
      "In today's competitive healthcare industry, effective lead generation in healthcare requires a combination of data-driven marketing, advanced targeting, and continuous optimization. Our healthcare lead generation services are designed to connect healthcare providers with patients actively searching for medical treatments, healthcare facilities, and specialist services online.",
      'As a leading healthcare lead generation agency, we create customized campaigns using search engine optimization (SEO), Google Ads, Meta advertising, social media marketing, landing page optimization, and conversion-focused strategies to generate qualified patient leads and measurable business growth.',
      'Our team develops targeted lead generation for healthcare campaigns that reach the right audience at the right time. Whether you operate a specialty clinic, diagnostic laboratory, dental practice, multi-specialty hospital, or healthcare center, we help increase patient acquisition while maximizing marketing return on investment.',
      'Businesses across Navi Mumbai, Mumbai, Thane, and Maharashtra trust SNK for professional lead generation in healthcare that delivers consistent results. We continuously monitor and optimize campaigns to improve lead quality, reduce acquisition costs, and increase appointment bookings.',
      'By combining advanced audience targeting, compelling ad creatives, optimized landing pages, and data-driven decision-making, our healthcare lead generation agency helps healthcare providers attract more patients while improving overall marketing efficiency.',
    ],
    features: [
      'Healthcare lead generation strategy development',
      'Google Ads and PPC campaign management',
      'Meta (Facebook and Instagram) advertising',
      'Healthcare SEO and local SEO optimization',
      'Landing page design and development',
      'Conversion rate optimization',
      'CRM integration and lead tracking',
      'Marketing automation solutions',
      'Campaign analytics and performance reporting',
    ],
    highlights: ['Google Ads & PPC', 'Meta Advertising', 'CRM Integration', 'Landing Pages'],
    ctaTitle: 'Ready to Increase Patient Inquiries?',
    ctaDesc:
      'Looking to increase patient inquiries, appointments, and healthcare conversions? Partner with SNK for expert healthcare lead generation services and let our specialists create a customized lead generation for healthcare strategy that drives measurable growth for your healthcare business.',
    ctaLabel: 'Book a Free Consultation',
    metaTitle: 'Healthcare Lead Generation Services in Navi Mumbai | SNK',
    metaDescription:
      'Trusted healthcare lead generation agency in Navi Mumbai. We help hospitals, clinics, doctors and diagnostic centres attract high-quality patient inquiries through data-driven digital marketing campaigns.',
  },
];

export const healthcareHubIntro = {
  heroDesc:
    'SNK offers result-driven healthcare digital marketing for hospitals, clinics, doctors, diagnostic centers, and healthcare organizations across Navi Mumbai, Mumbai, Thane, and Maharashtra.',
  title: 'Healthcare Digital Marketing That Delivers Results',
  paragraphs: [
    "In today's competitive healthcare industry, effective lead generation in healthcare requires a combination of data-driven marketing, advanced targeting, and continuous optimization. Our services use SEO, Google Ads, Meta advertising, social media marketing, landing page optimization, and conversion-focused strategies to generate qualified patient leads.",
    'Whether you operate a specialty clinic, diagnostic laboratory, dental practice, multi-specialty hospital, or healthcare center, we help increase patient acquisition while maximizing marketing return on investment. Businesses across Navi Mumbai, Mumbai, Thane, and Maharashtra trust SNK for professional healthcare digital marketing that delivers consistent results.',
  ],
};

export function getHealthcareBySlug(slug: string): HealthcareService | undefined {
  return healthcareServices.find((s) => s.slug === slug);
}
