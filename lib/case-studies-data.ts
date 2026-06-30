export interface CaseStudyMetric {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  client: string;
  clientLogo: string;
  industry: string;
  services: string[];
  duration: string;
  technologies: string[];
  coverImage: string;
  heroImage: string;
  shortDesc: string;
  keyResult: string;
  challenge: string;
  solution: string;
  objectives: string[];
  process: {
    research: string;
    planning: string;
    design: string;
    development: string;
    testing: string;
    launch: string;
  };
  results: CaseStudyMetric[];
  beforeAfter: {
    before: { label: string; value: string }[];
    after: { label: string; value: string }[];
  };
  testimonial: {
    quote: string;
    name: string;
    title: string;
    company: string;
  };
  gallery: string[];
  relatedSlugs: string[];
  featured: boolean;
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: 'lifeforce-homeopathy-seo',
    title: '300% Organic Traffic Growth for a Healthcare Brand',
    client: 'LifeForce Homeopathy',
    clientLogo: '/clients/lifeforce.webp',
    industry: 'Healthcare',
    services: ['SEO', 'Google Ads', 'Performance Marketing'],
    duration: '12 months',
    technologies: ['Google Analytics', 'Google Ads', 'Search Console', 'SEMrush', 'Ahrefs'],
    coverImage: '/clients/lifeforce.webp',
    heroImage: '/clients/lifeforce.webp',
    shortDesc:
      "Transformed LifeForce Homeopathy's digital presence with a comprehensive SEO and Google Ads strategy that tripled organic traffic and achieved 500% ROAS.",
    keyResult: '+300% Organic Traffic in 12 months',
    challenge:
      "LifeForce Homeopathy, one of India's most respected homeopathic treatment chains with clinics in Mumbai, Pune, and Bangalore, was struggling with low digital visibility. Website traffic hovered around 400 visitors per day, and clinics were seeing declining walk-ins. Despite exceptional patient outcomes, the brand had minimal presence on search engines for high-intent healthcare keywords.",
    solution:
      'We implemented a dual-channel growth strategy combining aggressive SEO with precision-targeted Google Ads. Our team restructured the entire site architecture, created condition-specific landing pages for each ailment category, and built a robust off-page authority network. Simultaneously, we launched hyper-targeted search campaigns with RLSA (Remarketing List Search Ads) to capture high-intent searchers at every stage of the patient journey.',
    objectives: [
      'Drive quality organic traffic to key treatment pages',
      'Increase daily walk-ins to all clinic locations',
      'Improve online appointment bookings by 50%',
      'Achieve profitable ROAS on paid search campaigns',
      'Establish LifeForce as the dominant homeopathy brand in SERPs',
    ],
    process: {
      research:
        'Conducted deep-dive keyword research across 200+ ailment categories. Analyzed competitor SERP positions and identified gap opportunities for long-tail medical keywords.',
      planning:
        'Mapped a 12-month content and technical SEO roadmap. Segmented Google Ads campaigns by ailment category with dedicated landing pages for each.',
      design:
        'Redesigned landing page templates for individual ailment pages with trust signals, testimonials, and clear appointment CTAs to improve conversion rates.',
      development:
        'Implemented technical SEO improvements including schema markup for healthcare organizations, improved Core Web Vitals, and mobile-first optimization.',
      testing:
        'A/B tested ad copy variations and landing page layouts to identify highest-converting combinations. Monitored Quality Scores and optimized bids.',
      launch:
        'Rolled out campaigns incrementally by city and ailment category. Established monthly review cadence aligned with Google algorithm update cycles.',
    },
    results: [
      { label: 'Organic Traffic Increase', value: '300', suffix: '%' },
      { label: 'Conversion Rate Increase', value: '97', suffix: '%' },
      { label: 'ROAS Achieved', value: '500', suffix: '%' },
      { label: 'Cost Per Conversion Reduced', value: '200', suffix: '%' },
    ],
    beforeAfter: {
      before: [
        { label: 'Daily Organic Traffic', value: '~400 visitors' },
        { label: 'Clinic Walk-ins', value: 'Declining MoM' },
        { label: 'Online Appointments', value: 'Minimal' },
        { label: 'Search Visibility', value: 'Low' },
      ],
      after: [
        { label: 'Daily Organic Traffic', value: '1,600+ visitors' },
        { label: 'Clinic Walk-ins', value: 'Increased significantly' },
        { label: 'Online Appointments', value: '8% Conversion Rate' },
        { label: 'Search Visibility', value: 'Page 1 dominance' },
      ],
    },
    testimonial: {
      quote:
        "SNK transformed our digital presence completely. We've seen a 300% jump in traffic and our clinics are busier than ever. Their strategic approach to both SEO and paid ads delivered results we didn't think were possible in such a short time.",
      name: 'LifeForce Homeopathy',
      title: 'Healthcare Client',
      company: 'LifeForce Homeopathy',
    },
    gallery: ['/clients/lifeforce.webp'],
    relatedSlugs: ['apoio-ecommerce-seo', 'union-living-seo', 'label-reyya-seo'],
    featured: true,
    color: '#E31E24',
  },
  {
    id: 2,
    slug: 'apoio-ecommerce-seo',
    title: '200% Organic Traffic Surge for a D2C Teen Brand in 90 Days',
    client: 'Apoio',
    clientLogo: '/clients/apoio.webp',
    industry: 'E-Commerce',
    services: ['SEO', 'E-Commerce SEO', 'Content Marketing', 'Technical SEO'],
    duration: '3 months',
    technologies: ['Shopify', 'Google Search Console', 'SE Ranking', 'Ahrefs', 'SEMrush'],
    coverImage: '/clients/apoio.webp',
    heroImage: '/clients/apoio.webp',
    shortDesc:
      'Executed a hyper-targeted SEO roadmap for Apoio, a premium D2C teen innerwear brand, achieving 200% organic traffic growth and 20 Page 1 Google rankings in just 90 days.',
    keyResult: '+200% Organic Traffic in 90 Days',
    challenge:
      'Apoio is a premium Indian D2C brand specializing in comfortable innerwear and activewear for pre-teens and teenagers. Despite an exceptional product line — including gap-free waistbands, uniform-friendly camisoles, and beginner training bras — the brand struggled with search engine visibility. They faced severe keyword cannibalization, low topical authority, and zero informational content to capture parent-driven searches. Major fashion giants dominated every relevant keyword.',
    solution:
      'We deployed a three-pillar SEO framework: granular technical fixes and e-commerce SILO cleanup, high-intent long-tail keyword mapping targeting commercial-investigation queries where parents were actively researching, and a topical authority content strategy that established Apoio as the trusted expert on adolescent activewear. Rather than competing on broad terms, we owned specific, high-converting niches.',
    objectives: [
      'Achieve Page 1 rankings for 20 high-intent transactional keywords',
      'Scale organic traffic by 150%+ within one quarter',
      'Eliminate keyword cannibalization across product pages',
      'Build brand authority with parent-focused informational content',
      'Increase e-commerce conversion rate from organic traffic',
    ],
    process: {
      research:
        'Performed comprehensive keyword research focused on commercial-investigation long-tail terms. Identified parent search behaviour patterns and informational content gaps.',
      planning:
        'Built a content calendar of 8 authority articles targeting top-of-funnel parent queries alongside a technical SEO sprint to fix site architecture issues.',
      design:
        'Restructured URL architecture and implemented clean canonical setups. Designed content templates optimized for both UX and crawler accessibility.',
      development:
        'Fixed browser console errors, improved mobile paint times, consolidated duplicate product strings, and implemented schema markup for e-commerce products.',
      testing:
        'Validated all technical fixes with crawl simulations. Monitored indexation rates weekly and tracked keyword position changes in real-time.',
      launch:
        'Sequentially published content pieces allowing Google to index authority articles before rolling out on-page optimizations to product categories.',
    },
    results: [
      { label: 'Organic Traffic Growth', value: '200', suffix: '%' },
      { label: 'Keywords in Top 10', value: '20', suffix: ' keywords' },
      { label: 'Campaign Duration', value: '90', suffix: ' days' },
      { label: 'Conversion Rate Uplift', value: '45', suffix: '%' },
    ],
    beforeAfter: {
      before: [
        { label: 'Page 1 Google Rankings', value: '0 keywords' },
        { label: 'Domain Authority', value: 'Very Low' },
        { label: 'Topical Coverage', value: 'Product pages only' },
        { label: 'Organic Traffic', value: 'Minimal' },
      ],
      after: [
        { label: 'Page 1 Google Rankings', value: '20 high-intent keywords' },
        { label: 'Domain Authority', value: 'Established & growing' },
        {
          label: 'Topical Coverage',
          value: 'Full parent informational funnel',
        },
        { label: 'Organic Traffic', value: '+200% quarter-over-quarter' },
      ],
    },
    testimonial: {
      quote:
        "In just three months, SNK helped us go from invisible on Google to ranking on Page 1 for our most important keywords. The quality of organic traffic has been outstanding — we're seeing real buyers, not just window shoppers.",
      name: 'Apoio',
      title: 'E-Commerce Client',
      company: 'Apoio',
    },
    gallery: ['/clients/apoio.webp'],
    relatedSlugs: ['label-reyya-seo', 'lifeforce-homeopathy-seo', 'union-living-seo'],
    featured: true,
    color: '#E31E24',
  },
  {
    id: 3,
    slug: 'union-living-seo',
    title: 'Co-Living Brand Achieves 77.8% Impression Growth in 28 Days',
    client: 'Union Living',
    clientLogo: '/clients/union.webp',
    industry: 'Real Estate',
    services: ['SEO', 'Technical SEO', 'Content Marketing', 'Local SEO'],
    duration: '28 days',
    technologies: ['Google Search Console', 'Google Analytics', 'SEMrush', 'Screaming Frog'],
    coverImage: '/clients/union.webp',
    heroImage: '/clients/union.webp',
    shortDesc:
      'Elevated Union Living from minimal search visibility to 20 keywords ranking in Google Top 10, delivering 39.3% click growth and 77.8% impression growth within a single month.',
    keyResult: '+77.8% Impressions & +39.3% Clicks in 28 Days',
    challenge:
      'Union Living, a co-living and rental housing provider, was struggling to compete against well-established brands in the co-living space. They had low organic visibility, minimal keyword rankings, and poor technical SEO infrastructure. The co-living market in India is highly competitive, with large property platforms dominating search results for most relevant terms.',
    solution:
      'We implemented a rapid-impact SEO strategy combining comprehensive keyword research, on-page optimization, technical SEO fixes, and high-quality content marketing. By focusing on local SEO signals and creating highly specific content around co-living topics that competitors were ignoring, we rapidly built topical authority in under 30 days.',
    objectives: [
      'Improve Google search visibility for co-living and rental keywords',
      'Increase website clicks from organic search by 30%+',
      'Achieve 20 keywords in Google Top 10',
      'Improve Core Web Vitals and mobile experience',
      'Build local authority in key Mumbai markets',
    ],
    process: {
      research:
        'Analysed the competitive landscape in the co-living market. Identified underserved keyword clusters around specific localities and tenant concerns.',
      planning:
        'Prioritised quick wins: technical fixes that would immediately improve crawlability, followed by high-impact on-page optimizations across top-traffic pages.',
      design:
        'Restructured internal linking architecture to distribute link equity to money pages. Designed content templates for local landing pages.',
      development:
        'Fixed indexing issues, improved site structure, enhanced Core Web Vitals, and implemented structured data markup for rich SERP appearances.',
      testing:
        'Crawled the site before and after fixes to verify resolution. Monitored keyword movements daily during the 28-day period.',
      launch:
        'Published 4 high-quality blog articles targeting featured snippet opportunities. Submitted updated sitemap and monitored indexation velocity.',
    },
    results: [
      { label: 'Total Clicks Increase', value: '39.3', suffix: '%' },
      { label: 'Total Impressions Increase', value: '77.8', suffix: '%' },
      { label: 'Keywords in Top 10', value: '20', suffix: ' keywords' },
      { label: 'Overall Performance Increase', value: '58.6', suffix: '%' },
    ],
    beforeAfter: {
      before: [
        { label: 'Total Clicks (28 days)', value: '1,120 clicks' },
        { label: 'Total Impressions (28 days)', value: '8,210 impressions' },
        { label: 'Top 10 Keywords', value: 'Minimal' },
        { label: 'Engagement Rate', value: 'Below average' },
      ],
      after: [
        { label: 'Total Clicks (28 days)', value: '1,560 clicks' },
        { label: 'Total Impressions (28 days)', value: '14,600 impressions' },
        { label: 'Top 10 Keywords', value: '20 keywords' },
        { label: 'Engagement Rate', value: '76.8%' },
      ],
    },
    testimonial: {
      quote:
        "The speed of results was remarkable. Within a single month, we saw meaningful improvements in both traffic and leads. SNK's structured approach to SEO gave us a clear roadmap and delivered measurable outcomes fast.",
      name: 'Union Living',
      title: 'Real Estate Client',
      company: 'Union Living',
    },
    gallery: ['/clients/union.webp'],
    relatedSlugs: ['lifeforce-homeopathy-seo', 'apoio-ecommerce-seo', 'label-reyya-seo'],
    featured: true,
    color: '#E31E24',
  },
  {
    id: 4,
    slug: 'label-reyya-seo',
    title: '118% Organic Traffic Growth for a Boho Fashion Brand',
    client: 'Label Reyya',
    clientLogo: '/clients/the-basics.webp',
    industry: 'Fashion & Apparel',
    services: ['SEO', 'Content Strategy', 'On-Page Optimization', 'Link Building'],
    duration: '4 months',
    technologies: ['Google Analytics', 'Google Search Console', 'SE Ranking', 'Ahrefs'],
    coverImage: '/clients/the-basics.webp',
    heroImage: '/clients/the-basics.webp',
    shortDesc:
      'Took Label Reyya from zero Page 1 rankings and 459 monthly visitors to 28 top-10 keyword rankings and 1,000+ monthly users through strategic SEO and content optimization.',
    keyResult: '+118% Organic Traffic & 28 Top-10 Rankings',
    challenge:
      'Label Reyya, a modern boho fashion brand inspired by free-spirited Bohemian culture, had virtually no organic search presence. With zero keywords in Google\'s Top 10, only 459 monthly organic visitors, and low brand visibility for competitive terms like "boho dresses" and "resort wear," the brand was invisible to its ideal audience of fashion-forward women seeking distinctive, travel-friendly clothing.',
    solution:
      'We performed a complete SEO overhaul including technical audit and fixes, strategic keyword research targeting commercial boho fashion terms, content optimization across all product and category pages, and authority link building through fashion industry publications and style blogs.',
    objectives: [
      'Achieve 20+ keywords in Google Top 10 within 4 months',
      'Double organic monthly traffic from 459 to 900+',
      'Improve click-through rates with optimized meta descriptions',
      'Build domain authority through strategic link acquisition',
      'Strengthen brand presence for bohemian fashion keywords',
    ],
    process: {
      research:
        'Identified high-value boho fashion keyword clusters with commercial intent. Mapped competitor content gaps and opportunity areas for unique positioning.',
      planning:
        'Created a phased SEO plan: technical foundation first, then on-page content optimization, followed by off-page authority building.',
      design:
        'Redesigned meta titles and descriptions with compelling, keyword-rich copy. Created content templates for category and product pages.',
      development:
        'Implemented technical fixes including schema markup, image optimization, and improved page speed. Fixed crawlability issues across the Shopify store.',
      testing:
        'Tracked SERP position changes weekly. A/B tested meta descriptions to improve click-through rates from search results.',
      launch:
        'Published authority content on boho fashion trends and styling guides. Secured placements on fashion blogs and lifestyle publications.',
    },
    results: [
      { label: 'Organic Traffic Growth', value: '118', suffix: '%' },
      { label: 'Keywords in Top 10', value: '28', suffix: ' keywords' },
      { label: 'CTR Improvement', value: '50', suffix: '%' },
      { label: 'Monthly Visitors', value: '1,000', suffix: '+' },
    ],
    beforeAfter: {
      before: [
        { label: 'Monthly Organic Visitors', value: '459 users' },
        { label: 'Top 10 Keywords', value: '0 keywords' },
        { label: 'Click-Through Rate', value: 'Below industry avg' },
        { label: 'Brand Visibility', value: 'Very low' },
      ],
      after: [
        { label: 'Monthly Organic Visitors', value: '1,000+ users' },
        { label: 'Top 10 Keywords', value: '28 keywords' },
        { label: 'Click-Through Rate', value: '+50% improvement' },
        { label: 'Brand Visibility', value: 'Strong niche authority' },
      ],
    },
    testimonial: {
      quote:
        'We went from being completely invisible on Google to ranking on Page 1 for our most important keywords. The organic traffic quality has improved dramatically — customers who find us through search are much more likely to purchase.',
      name: 'Label Reyya',
      title: 'Fashion Client',
      company: 'Label Reyya',
    },
    gallery: ['/clients/the-basics.webp'],
    relatedSlugs: ['apoio-ecommerce-seo', 'lifeforce-homeopathy-seo', 'union-living-seo'],
    featured: false,
    color: '#E31E24',
  },
  {
    id: 5,
    slug: 'empyrean-school-digital-marketing',
    title: 'Digital Transformation for a Premium Educational Institution',
    client: 'Empyrean School',
    clientLogo: '/clients/empyrean-school.webp',
    industry: 'Education',
    services: ['Digital Marketing', 'SEO', 'Social Media Marketing', 'Content Strategy'],
    duration: '6 months',
    technologies: [
      'Google Analytics',
      'Meta Ads Manager',
      'Google Ads',
      'Search Console',
      'Canva Pro',
    ],
    coverImage: '/clients/empyrean-school.webp',
    heroImage: '/clients/empyrean-school.webp',
    shortDesc:
      'Built a comprehensive digital marketing ecosystem for Empyrean School, driving significant admissions enquiries through SEO, targeted paid campaigns, and compelling social media storytelling.',
    keyResult: '+240% Admissions Enquiries via Digital Channels',
    challenge:
      'Empyrean School, a premium educational institution, was relying almost entirely on word-of-mouth referrals for student admissions. Their digital presence was minimal — an outdated website, no social media strategy, and no paid digital campaigns. With competition from other premium schools intensifying, they needed a digital-first approach to parent engagement and admissions marketing.',
    solution:
      "We built Empyrean's entire digital marketing presence from the ground up. This included a comprehensive SEO strategy targeting parent search queries, a multi-platform social media strategy showcasing campus life and academic achievements, and precision-targeted paid campaigns during peak admissions season.",
    objectives: [
      'Establish strong digital presence across all key platforms',
      'Generate qualified admissions enquiries through digital channels',
      'Build engaging social media community with parents and students',
      'Rank on Page 1 for key school-related search terms in the area',
      'Increase brand awareness among target parent demographics',
    ],
    process: {
      research:
        'Conducted parent journey mapping to understand how families research schools. Identified key decision-making touchpoints and information needs.',
      planning:
        'Designed an omnichannel strategy covering SEO, Google Ads, Facebook/Instagram, and YouTube content. Built a 6-month content calendar.',
      design:
        'Created premium visual brand assets for social media. Developed video content showcasing school facilities, teaching methodology, and student achievements.',
      development:
        'Optimized website for local SEO, implemented schema markup for educational organizations, and improved site speed significantly.',
      testing:
        'A/B tested ad creative across age demographics. Refined audience targeting based on engagement data from first two months.',
      launch:
        'Executed peak admissions season campaign with coordinated digital touchpoints. Implemented lead nurturing sequence for enquiry follow-ups.',
    },
    results: [
      { label: 'Admissions Enquiries Increase', value: '240', suffix: '%' },
      { label: 'Social Media Followers Growth', value: '180', suffix: '%' },
      { label: 'Website Traffic Growth', value: '320', suffix: '%' },
      {
        label: 'Cost Per Admissions Enquiry',
        value: '45',
        suffix: '% reduction',
      },
    ],
    beforeAfter: {
      before: [
        { label: 'Digital Enquiries per Month', value: '<10' },
        { label: 'Social Media Presence', value: 'Non-existent' },
        { label: 'Website Traffic', value: 'Very Low' },
        { label: 'Online Brand Visibility', value: 'Minimal' },
      ],
      after: [
        { label: 'Digital Enquiries per Month', value: '34+ qualified leads' },
        { label: 'Social Media Presence', value: 'Active & engaged community' },
        { label: 'Website Traffic', value: '+320% growth' },
        { label: 'Online Brand Visibility', value: 'Page 1 for local terms' },
      ],
    },
    testimonial: {
      quote:
        'The transformation has been incredible. We went from zero digital presence to being found by parents across Navi Mumbai and beyond. The quality of enquiries we receive now is far higher than any traditional referral method.',
      name: 'Empyrean School',
      title: 'Education Client',
      company: 'Empyrean School',
    },
    gallery: ['/clients/empyrean-school.webp'],
    relatedSlugs: ['lifeforce-homeopathy-seo', 'union-living-seo', 'nuvvagen-brand-strategy'],
    featured: false,
    color: '#E31E24',
  },
  {
    id: 6,
    slug: 'nuvvagen-brand-strategy',
    title: 'Brand Strategy & Web Presence for an Emerging Wellness Brand',
    client: 'NuVvaGen',
    clientLogo: '/clients/nuvvagen.webp',
    industry: 'Health & Wellness',
    services: ['Branding', 'Web Development', 'SEO', 'Content Strategy'],
    duration: '5 months',
    technologies: ['Next.js', 'Figma', 'Shopify', 'Google Analytics', 'Mailchimp'],
    coverImage: '/clients/nuvvagen.webp',
    heroImage: '/clients/nuvvagen.webp',
    shortDesc:
      'Developed full brand identity and digital strategy for NuVvaGen, a wellness startup, resulting in a premium brand presence, high-converting website, and rapid organic growth.',
    keyResult: 'Complete Brand Launch + 85% Organic Growth in 5 months',
    challenge:
      'NuVvaGen was a wellness startup entering a crowded health market without an established brand identity, website, or digital strategy. They had an innovative product line but no visual identity, no online presence, and no way to communicate their unique value proposition to health-conscious consumers.',
    solution:
      'We provided end-to-end brand and digital strategy: developed brand identity guidelines, designed and built a premium e-commerce website, created content strategy positioning NuVvaGen as a wellness authority, and launched SEO campaigns targeting health and nutrition keywords.',
    objectives: [
      'Create a compelling, distinctive brand identity that resonates with wellness audience',
      'Build a high-converting e-commerce website with premium UX',
      'Establish organic search presence for wellness product keywords',
      'Create content ecosystem that educates and converts',
      'Set up analytics infrastructure for data-driven growth',
    ],
    process: {
      research:
        'Market research on wellness brand positioning. Competitor analysis across packaging, messaging, and digital presence. Customer persona development.',
      planning:
        'Created comprehensive brand strategy document and 12-month digital roadmap. Wireframed website architecture and user flows.',
      design:
        'Designed complete brand identity system: logo, typography, colour palette, packaging guidelines, and social media templates. Created all website mockups in Figma.',
      development:
        'Built high-performance e-commerce website with optimized product pages, checkout flow, and blog section. Integrated analytics and email marketing.',
      testing:
        'User testing sessions to validate website UX. Heat-mapping and session recording to identify friction points and optimize conversion paths.',
      launch:
        'Coordinated brand launch across website, social media, and digital campaigns. Published 12 foundational SEO articles on launch day.',
    },
    results: [
      { label: 'Organic Traffic Growth', value: '85', suffix: '%' },
      { label: 'Website Conversion Rate', value: '3.8', suffix: '%' },
      {
        label: 'Brand Authority Score',
        value: '40',
        suffix: '+ DA in 5 months',
      },
      { label: 'Revenue from Organic', value: '60', suffix: '% of total' },
    ],
    beforeAfter: {
      before: [
        { label: 'Brand Identity', value: 'None' },
        { label: 'Website', value: 'None' },
        { label: 'Organic Traffic', value: '0' },
        { label: 'Online Revenue', value: '0' },
      ],
      after: [
        { label: 'Brand Identity', value: 'Premium, distinctive' },
        { label: 'Website', value: 'High-converting e-commerce' },
        { label: 'Organic Traffic', value: '+85% in 5 months' },
        { label: 'Online Revenue', value: 'Growing month-on-month' },
      ],
    },
    testimonial: {
      quote:
        "SNK built us from scratch. We had a product and a dream, and they turned it into a real brand. The website they designed is something we're genuinely proud to show people, and the SEO results have exceeded our expectations.",
      name: 'NuVvaGen',
      title: 'Wellness Client',
      company: 'NuVvaGen',
    },
    gallery: ['/clients/nuvvagen.webp'],
    relatedSlugs: ['empyrean-school-digital-marketing', 'label-reyya-seo', 'apoio-ecommerce-seo'],
    featured: false,
    color: '#E31E24',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getRelatedCaseStudies(slugs: string[]): CaseStudy[] {
  return slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((cs): cs is CaseStudy => cs !== undefined)
    .slice(0, 3);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured);
}

export const allServices = [
  'All',
  'SEO',
  'Digital Marketing',
  'Branding',
  'E-Commerce',
  'Content Strategy',
  'Technical SEO',
  'Performance Marketing',
  'Social Media Marketing',
  'Web Development',
];
