import type { IconName } from '../components/ServiceIcon';

export type Service = {
  slug: string;
  icon: IconName;
  badge: string;
  title: string;
  heroLine1: string;
  heroLine2: string;
  tagline: string;
  desc: string;
  heroDesc: string;
  introTitle: string;
  introParagraphs: string[];
  features: string[];
  highlights: string[];
  whyChoose?: string[];
  benefits?: string[];
  ctaLabel: string;
  ctaClosing?: string;
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: 'seo',
    icon: 'search',
    badge: 'SEO',
    title: 'Search Engine Optimization (SEO)',
    heroLine1: 'SEO Services',
    heroLine2: 'in Navi Mumbai.',
    tagline: 'Improve Rankings, Increase Traffic & Generate More Leads',
    desc: 'Professional SEO services in Navi Mumbai that help your business rank higher on Google and generate quality leads through customized, data-driven strategies.',
    heroDesc:
      'Looking for professional SEO services in Navi Mumbai? SNK is a trusted SEO agency helping businesses rank higher on Google, increase organic traffic, and convert visitors into customers.',
    introTitle: 'SEO Services in Navi Mumbai',
    introParagraphs: [
      'With years of industry experience and proven expertise in search engine optimization, our team develops customized SEO strategies that improve search rankings, increase organic traffic, and convert website visitors into customers. As a leading search engine optimization company in Navi Mumbai, we combine technical knowledge, content optimization, and data-driven insights to deliver long-term results.',
      'Businesses searching for the best local SEO agency or best SEO service agency choose us because of our experience, technical expertise, and commitment to delivering real business outcomes.',
    ],
    features: [
      'Keyword Research & Competitor Analysis',
      'On-Page SEO Optimization',
      'Technical SEO Audits',
      'Local SEO Strategies',
      'Google Business Profile Optimization',
      'Content Optimization & SEO Content Strategy',
      'High-Quality Link Building',
      'Website Speed & Performance Improvements',
      'Analytics Tracking & Performance Reporting',
    ],
    highlights: ['Keyword Research', 'Technical SEO', 'Local SEO', 'Link Building'],
    whyChoose: [
      'Expertise across multiple industries and business sectors',
      'Customized SEO campaigns tailored to your goals',
      'Proven strategies that improve rankings and visibility',
      'Transparent reporting with measurable results',
      'Focus on lead generation and business growth',
      'Strong expertise in local, national, and competitive SEO markets',
      'White-hat SEO practices for sustainable success',
    ],
    benefits: [
      'Higher Google Rankings',
      'Increased Organic Traffic',
      'More Qualified Leads',
      'Better Online Visibility',
      'Stronger Local Search Presence',
      'Improved Website Performance',
      'Reduced Dependence on Paid Advertising',
    ],
    ctaLabel: 'Contact Our SEO Experts',
    ctaClosing:
      'Partner with SNK for professional SEO services in Navi Mumbai and leverage our SEO expertise to build a strong digital presence that drives long-term growth, traffic, and revenue.',
    metaTitle: 'SEO Services in Navi Mumbai | SNK',
    metaDescription:
      'Professional SEO services in Navi Mumbai. Improve Google rankings, increase organic traffic, and generate quality leads with customized search strategies.',
  },
  {
    slug: 'aeo',
    icon: 'bot',
    badge: 'AEO',
    title: 'Answer Engine Optimization (AEO)',
    heroLine1: 'Answer Engine',
    heroLine2: 'Optimization (AEO).',
    tagline: 'Future-Proof Your Online Visibility',
    desc: 'Appear in featured snippets, voice search, AI-generated answers, and knowledge panels with structured content built for modern search.',
    heroDesc:
      'As search technology evolves, businesses need more than traditional SEO. SNK helps you appear in featured snippets, voice search results, AI-generated answers, and knowledge panels.',
    introTitle: 'Answer Engine Optimization Agency in Navi Mumbai',
    introParagraphs: [
      'Answer Engine Optimization (AEO) is the process of creating and structuring content so search engines and AI platforms can quickly identify, understand, and deliver your business as the most relevant answer to user queries. With the growing adoption of AI-powered search experiences, AEO has become an essential component of modern digital marketing.',
      'As an experienced SEO AEO agency, we help businesses optimize their websites for both traditional search rankings and emerging answer-based search experiences. Our strategies are designed to improve visibility, increase authority, and enhance customer discovery across multiple search channels.',
      'Whether you are a local business, startup, service provider, or enterprise organization, SNK delivers customized AEO solutions that improve discoverability, drive qualified traffic, and increase customer engagement.',
    ],
    features: [
      'Content optimization for direct answers and conversational search queries',
      'FAQ creation and optimization',
      'Schema markup and structured data implementation',
      'Featured snippet optimization',
      'Voice search optimization',
      'Knowledge graph and entity optimization',
      'AI search readiness assessment and implementation',
      'Semantic SEO and topical authority development',
    ],
    highlights: ['Featured Snippets', 'Voice Search', 'Schema Markup', 'AI Search Readiness'],
    whyChoose: [
      'Featured snippets',
      'AI-generated search results',
      'Voice assistant responses',
      'Knowledge panels',
      'People Also Ask sections',
      'Entity-based search results',
    ],
    benefits: [
      'Long-term digital authority',
      'Improved visibility across AI-driven search',
      'Stronger customer discovery',
      'Preparation for the next generation of search',
    ],
    ctaLabel: 'Position Your Business as the Answer',
    ctaClosing:
      'Looking for a reliable Answer Engine Optimization agency in Navi Mumbai? Contact SNK today and position your business as the preferred answer across modern search platforms.',
    metaTitle: 'Answer Engine Optimization (AEO) in Navi Mumbai | SNK',
    metaDescription:
      'AEO services in Navi Mumbai. Rank in featured snippets, voice search, and AI answers with structured content built for the next generation of search.',
  },
  {
    slug: 'social-media',
    icon: 'smartphone',
    badge: 'Social Media',
    title: 'Social Media Marketing',
    heroLine1: 'Social Media',
    heroLine2: 'Marketing.',
    tagline: 'Build brand presence. Engage your audience. Drive results.',
    desc: 'Strategic social media marketing that helps businesses attract the right audience, strengthen brand presence, and convert engagement into loyal customers.',
    heroDesc:
      'SNK helps startups, SMEs, healthcare brands, educational institutions, and enterprises increase online visibility, generate quality leads, and maximize ROI through strategic social media marketing.',
    introTitle: 'Social Media Marketing in Navi Mumbai',
    introParagraphs: [
      'With over 15+ years of industry experience, we provide customized digital marketing services in Navi Mumbai that combine strategic planning, creative execution, and data-driven insights — including social media marketing that helps businesses attract the right audience and strengthen their brand presence.',
      'Whether you are looking to improve visibility, generate qualified leads, or strengthen your brand presence, our team develops tailored social media strategies that align with your business objectives and convert engagement into loyal customers.',
      'At SNK, we believe every business deserves a strong digital presence. Our social media marketing services are designed to drive sustainable growth, increase conversions, and help you stay ahead of the competition.',
    ],
    features: [
      'Social Media Strategy & Planning',
      'Content Creation & Management',
      'Community Management',
      'Paid Social Advertising',
      'Brand Awareness Campaigns',
      'Audience Targeting & Engagement',
      'Platform-Specific Optimization',
      'Analytics & Performance Reporting',
    ],
    highlights: ['Content Strategy', 'Community Management', 'Paid Social', 'Analytics'],
    whyChoose: [
      '15+ Years of Digital Marketing Experience',
      'ROI-Focused Marketing Strategies',
      'Customized Marketing Plans for Every Business',
      'Transparent Reporting & Performance Tracking',
      'Dedicated Account Managers & Support',
      'Proven Success Across Multiple Industries',
    ],
    benefits: [
      'Stronger brand visibility',
      'Higher audience engagement',
      'More qualified leads from social channels',
      'Consistent brand messaging across platforms',
    ],
    ctaLabel: 'Get Your Social Media Strategy',
    ctaClosing:
      'Partner with SNK, your trusted digital marketing agency in Navi Mumbai, and transform your social presence into a powerful business growth engine.',
    metaTitle: 'Social Media Marketing in Navi Mumbai | SNK',
    metaDescription:
      'Social media marketing in Navi Mumbai. Build brand awareness, engage your audience, and drive business results across Instagram, Facebook, LinkedIn, and more.',
  },
  {
    slug: 'performance-marketing',
    icon: 'target',
    badge: 'Performance',
    title: 'Performance Marketing',
    heroLine1: 'Performance Marketing',
    heroLine2: 'Agency in Mumbai.',
    tagline: 'Turn Advertising Spend Into Measurable Revenue',
    desc: 'Data-driven advertising strategies that generate qualified leads, increase sales, and maximize ROI across Google Ads, Meta, and more.',
    heroDesc:
      'SNK helps businesses scale faster with data-driven advertising strategies that focus on results, not just clicks — creating campaigns that generate qualified leads, increase sales, and maximize return on investment.',
    introTitle: 'Performance Marketing That Delivers Real Business Growth',
    introParagraphs: [
      'Whether you are a startup looking for rapid customer acquisition or an established business aiming to improve marketing efficiency, our performance-focused approach ensures every campaign is aligned with your business goals.',
      'The digital landscape is more competitive than ever. Running ads without a strategic framework can quickly drain budgets without producing meaningful results. At SNK, we combine creative marketing, audience intelligence, and performance analytics to build campaigns that generate sustainable growth.',
      'Our mission is simple: help businesses achieve more revenue from their digital marketing investments.',
    ],
    features: [
      'Google Ads Management',
      'Facebook & Instagram Advertising',
      'Lead Generation Campaigns',
      'E-commerce Marketing',
      'Remarketing & Retargeting',
      'Landing Page Optimization',
      'Conversion Tracking & Analytics',
      'Performance Max Campaigns',
    ],
    highlights: ['Google Ads', 'Meta Advertising', 'Remarketing', 'Conversion Tracking'],
    whyChoose: [
      'ROI-focused campaign management',
      'Data-backed marketing decisions',
      'Advanced conversion tracking',
      'Customized growth strategies',
      'Transparent reporting',
      'Continuous campaign optimization',
      'Dedicated performance specialists',
      'Scalable advertising solutions',
    ],
    benefits: [
      'Generate high-quality leads consistently',
      'Increase online sales and revenue',
      'Improve advertising ROI',
      'Reduce customer acquisition costs',
      'Reach highly targeted audiences',
      'Scale campaigns efficiently',
      'Gain actionable business insights',
      'Stay ahead of competitors',
    ],
    ctaLabel: 'Get in Touch Today',
    ctaClosing:
      'If you are searching for a Performance Marketing Agency in Mumbai that prioritizes measurable growth, strategic execution, and long-term success, SNK is ready to help your business grow faster and smarter.',
    metaTitle: 'Performance Marketing Agency in Navi Mumbai | SNK',
    metaDescription:
      'Performance marketing in Navi Mumbai. ROI-focused Google Ads and Meta campaigns that generate qualified leads and measurable business growth.',
  },
  {
    slug: 'web-design',
    icon: 'monitor',
    badge: 'Web Design',
    title: 'Web Design & Development',
    heroLine1: 'Web Design &',
    heroLine2: 'Development.',
    tagline: 'Modern, responsive, conversion-focused websites.',
    desc: 'Leading website development company in Navi Mumbai creating modern, responsive, and conversion-focused websites for businesses of all sizes.',
    heroDesc:
      'Your website is often the first interaction potential customers have with your brand. We build professionally designed websites that enhance credibility, improve user experience, search visibility, and lead generation.',
    introTitle: 'Website Design and Development Company in Navi Mumbai',
    introParagraphs: [
      'SNK is a leading website development company in Navi Mumbai, specializing in creating modern, responsive, and conversion-focused websites for businesses of all sizes. As an experienced web design and development agency, we help businesses establish a strong online presence with websites that are both visually appealing and performance-driven.',
      'As a professional website development agency, every website we build is designed with speed, security, mobile responsiveness, and SEO best practices in mind. We focus on creating websites that not only look great but also deliver measurable business results.',
      'Serving clients across India, SNK provides end-to-end web design and development solutions tailored to your unique business objectives — combining creative design, advanced functionality, and user-focused development to engage visitors and convert them into customers.',
    ],
    features: [
      'Corporate Website Development',
      'Business Website Development',
      'eCommerce Website Development',
      'Landing Page Design',
      'WordPress Website Development',
      'UI/UX Design Services',
      'Website Maintenance & Support',
      'Website Speed Optimization',
      'SEO-Friendly Website Development',
    ],
    highlights: ['UI/UX Design', 'WordPress', 'eCommerce', 'SEO-Friendly Builds'],
    benefits: [
      'Enhanced credibility and brand trust',
      'Improved user experience',
      'Stronger search engine visibility',
      'Higher lead generation from your website',
    ],
    ctaLabel: 'Start Your Website Project',
    ctaClosing:
      'Ready to create a website that drives growth, generates leads, and strengthens your online presence? Contact SNK today for expert web design and development services in Navi Mumbai.',
    metaTitle: 'Web Design & Development in Navi Mumbai | SNK',
    metaDescription:
      'Web design and development in Navi Mumbai. Modern, responsive, conversion-focused websites built for speed, SEO, and measurable business growth.',
  },
];

export const servicesHubIntro = {
  title: 'Grow Your Business with Result-Driven Digital Marketing Services',
  paragraphs: [
    'Looking for the best digital marketing agency in Navi Mumbai to grow your business online? SNK is a trusted digital marketing agency in Navi Mumbai that helps startups, SMEs, healthcare brands, educational institutions, and enterprises increase online visibility, generate quality leads, and maximize ROI.',
    'With over 15+ years of industry experience, we provide customized digital marketing services in Navi Mumbai that combine strategic planning, creative execution, and data-driven insights.',
    'Our goal is simple — to help businesses attract the right audience, improve search engine rankings, and convert visitors into loyal customers.',
  ],
};

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
