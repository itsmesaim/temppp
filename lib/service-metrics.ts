import type { ChartPoint, KpiMetric } from '../components/MarketingCharts';

export type ServiceMetrics = {
  kpis: KpiMetric[];
  barData: ChartPoint[];
  lineData: ChartPoint[];
  barTitle: string;
  lineTitle: string;
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const serviceMetrics: Record<string, ServiceMetrics> = {
  seo: {
    kpis: [
      {
        value: '+127%',
        label: 'Avg. organic traffic growth',
        change: 'vs. pre-engagement baseline',
        positive: true,
      },
      {
        value: '68%',
        label: 'Target keywords in top 10',
        change: 'within 6 months',
        positive: true,
      },
      {
        value: '+45%',
        label: 'Qualified lead volume',
        change: 'from organic search',
        positive: true,
      },
      {
        value: '-32%',
        label: 'Cost per lead vs. paid',
        change: 'long-term savings',
        positive: true,
      },
    ],
    barData: months.map((label, i) => ({ label, value: [22, 35, 48, 61, 78, 95][i] })),
    lineData: months.map((label, i) => ({ label, value: [100, 118, 142, 165, 198, 227][i] })),
    barTitle: 'Organic sessions index',
    lineTitle: 'Traffic growth trend',
  },
  aeo: {
    kpis: [
      {
        value: '4.2x',
        label: 'Featured snippet visibility',
        change: 'answer-based rankings',
        positive: true,
      },
      { value: '+89%', label: 'Voice search impressions', change: 'YoY', positive: true },
      {
        value: '72%',
        label: 'FAQ pages indexed',
        change: 'structured data coverage',
        positive: true,
      },
      {
        value: '+56%',
        label: 'AI overview appearances',
        change: 'emerging search channels',
        positive: true,
      },
    ],
    barData: months.map((label, i) => ({ label, value: [15, 28, 40, 55, 68, 82][i] })),
    lineData: months.map((label, i) => ({ label, value: [100, 125, 158, 190, 230, 275][i] })),
    barTitle: 'Answer visibility score',
    lineTitle: 'AEO reach trend',
  },
  'social-media': {
    kpis: [
      { value: '+214%', label: 'Avg. engagement rate', change: 'across platforms', positive: true },
      { value: '3.8x', label: 'Reach per post', change: 'vs. previous quarter', positive: true },
      {
        value: '+67%',
        label: 'Social-driven leads',
        change: 'attributed conversions',
        positive: true,
      },
      { value: '42%', label: 'Audience growth', change: 'net followers', positive: true },
    ],
    barData: months.map((label, i) => ({ label, value: [30, 42, 55, 63, 78, 92][i] })),
    lineData: months.map((label, i) => ({ label, value: [100, 130, 165, 200, 250, 314][i] })),
    barTitle: 'Engagement index',
    lineTitle: 'Reach growth trend',
  },
  'performance-marketing': {
    kpis: [
      { value: '4.2x', label: 'Average ROAS', change: 'campaign efficiency', positive: true },
      {
        value: '-38%',
        label: 'Cost per acquisition',
        change: 'vs. initial baseline',
        positive: true,
      },
      { value: '+52%', label: 'Conversion rate', change: 'post-optimization', positive: true },
      { value: '+180%', label: 'Qualified leads', change: 'from paid channels', positive: true },
    ],
    barData: months.map((label, i) => ({ label, value: [40, 52, 58, 71, 85, 98][i] })),
    lineData: months.map((label, i) => ({ label, value: [100, 145, 190, 240, 310, 380][i] })),
    barTitle: 'ROAS index',
    lineTitle: 'Revenue from ads trend',
  },
  'web-design': {
    kpis: [
      { value: '+94%', label: 'Page load speed', change: 'Core Web Vitals pass', positive: true },
      { value: '+61%', label: 'Conversion rate', change: 'post-redesign', positive: true },
      { value: '-48%', label: 'Bounce rate', change: 'improved UX', positive: true },
      { value: '98', label: 'Mobile performance score', change: 'Lighthouse avg.', positive: true },
    ],
    barData: months.map((label, i) => ({ label, value: [45, 58, 65, 74, 82, 94][i] })),
    lineData: months.map((label, i) => ({ label, value: [100, 115, 130, 148, 168, 194][i] })),
    barTitle: 'Conversion index',
    lineTitle: 'Lead volume trend',
  },
};

export const healthcareMetrics: Record<string, ServiceMetrics> = {
  seo: {
    kpis: [
      {
        value: '+87%',
        label: 'Organic patient traffic',
        change: 'medical search visibility',
        positive: true,
      },
      {
        value: '3.2x',
        label: 'Patient inquiries from search',
        change: 'qualified appointments',
        positive: true,
      },
      {
        value: 'Top 3',
        label: 'Local map pack rankings',
        change: 'key specialty terms',
        positive: true,
      },
      {
        value: '-40%',
        label: 'Cost per patient vs. paid',
        change: 'organic efficiency',
        positive: true,
      },
    ],
    barData: months.map((label, i) => ({ label, value: [25, 38, 52, 65, 80, 92][i] })),
    lineData: months.map((label, i) => ({ label, value: [100, 125, 155, 185, 220, 260][i] })),
    barTitle: 'Patient search visibility',
    lineTitle: 'Appointment request trend',
  },
  'social-media': {
    kpis: [
      {
        value: '+156%',
        label: 'Patient engagement',
        change: 'compliant content reach',
        positive: true,
      },
      {
        value: '2.8x',
        label: 'Brand trust signals',
        change: 'review & interaction rate',
        positive: true,
      },
      {
        value: '+73%',
        label: 'Social-to-inquiry rate',
        change: 'appointment clicks',
        positive: true,
      },
      { value: '+45%', label: 'Follower growth', change: 'targeted demographics', positive: true },
    ],
    barData: months.map((label, i) => ({ label, value: [28, 40, 52, 60, 75, 88][i] })),
    lineData: months.map((label, i) => ({ label, value: [100, 128, 162, 195, 240, 290][i] })),
    barTitle: 'Engagement index',
    lineTitle: 'Patient reach trend',
  },
  'lead-generation': {
    kpis: [
      {
        value: '3x',
        label: 'Patient inquiry growth',
        change: 'campaign optimization',
        positive: true,
      },
      {
        value: '-35%',
        label: 'Cost per patient lead',
        change: 'targeting efficiency',
        positive: true,
      },
      {
        value: '+68%',
        label: 'Appointment bookings',
        change: 'from digital channels',
        positive: true,
      },
      {
        value: '24/7',
        label: 'Campaign monitoring',
        change: 'Always-on optimization',
        positive: true,
      },
    ],
    barData: months.map((label, i) => ({ label, value: [35, 48, 55, 70, 82, 96][i] })),
    lineData: months.map((label, i) => ({ label, value: [100, 140, 175, 210, 260, 310][i] })),
    barTitle: 'Lead volume index',
    lineTitle: 'Patient inquiry trend',
  },
};

export const hubMetrics: ServiceMetrics = {
  kpis: [
    { value: '15+', label: 'Years in digital marketing', change: 'Est. 2010', positive: true },
    { value: '150+', label: 'Projects delivered', change: 'Across industries', positive: true },
    {
      value: '100+',
      label: 'Active client accounts',
      change: 'Navi Mumbai & beyond',
      positive: true,
    },
    { value: '4.2x', label: 'Avg. client ROAS', change: 'performance campaigns', positive: true },
  ],
  barData: months.map((label, i) => ({ label, value: [55, 62, 70, 78, 88, 100][i] })),
  lineData: months.map((label, i) => ({ label, value: [100, 112, 128, 145, 168, 195][i] })),
  barTitle: 'Client portfolio growth',
  lineTitle: 'Revenue impact trend',
};

export function getServiceMetrics(slug: string): ServiceMetrics {
  return serviceMetrics[slug] ?? hubMetrics;
}

export function getHealthcareMetrics(slug: string): ServiceMetrics {
  return healthcareMetrics[slug] ?? hubMetrics;
}
