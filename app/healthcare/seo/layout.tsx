import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare SEO in Navi Mumbai | SNK',
  description:
    'Expert healthcare SEO services in Navi Mumbai. Rank higher on Google for medical searches, attract local patients organically, and build long-term digital authority for your practice.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}