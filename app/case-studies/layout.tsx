import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Real Results for Real Businesses | SNK Web Solutions',
  description:
    'Explore how SNK Web Solutions drives measurable growth for businesses through SEO, digital marketing, branding, and web development. Real results, real clients.',
  openGraph: {
    title: 'Case Studies | SNK Web Solutions',
    description:
      'Discover real growth stories: 300% traffic increases, top 10 Google rankings, and revenue growth across healthcare, e-commerce, real estate & more.',
    url: 'https://snkwebsolutions.com/case-studies',
    siteName: 'SNK Web Solutions',
    images: [
      {
        url: 'https://snkwebsolutions.com/snk-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'SNK Web Solutions Case Studies',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | SNK Web Solutions',
    description: 'Real results for real businesses. See how we help brands grow online.',
  },
  alternates: {
    canonical: 'https://snkwebsolutions.com/case-studies',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
