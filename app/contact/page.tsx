import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us — Digital Marketing Agency Navi Mumbai',
  description:
    'Contact SNK Web Solutions in Navi Mumbai for SEO, performance marketing, social media, and web design. Call +91 93215 87762 or book a free strategy session.',
  path: '/contact/',
});

export default function ContactPage() {
  return <ContactPageClient />;
}
