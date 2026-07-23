import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import AIDigitalMarketingPageClient from './AIDigitalMarketingPageClient';

export const metadata: Metadata = buildMetadata({
  title: 'AI Digital Marketing Agency in Navi Mumbai',
  description:
    'AI-powered digital marketing from SNK Web Solutions in Navi Mumbai — campaign optimisation, predictive targeting, automated creative testing, and lead generation that compounds results.',
  path: '/ai-digital-marketing/',
});

export default function AIDigitalMarketingPage() {
  return <AIDigitalMarketingPageClient />;
}
