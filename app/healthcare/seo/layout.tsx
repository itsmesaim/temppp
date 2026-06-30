import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare SEO in Navi Mumbai | SNK',
  description:
    'SNK is a leading healthcare SEO agency in Navi Mumbai providing specialized SEO for hospitals, clinics, doctors, and diagnostic centres across Maharashtra.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
