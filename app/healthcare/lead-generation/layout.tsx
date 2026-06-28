import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Lead Generation Services in Navi Mumbai | SNK Web Solutions',
  description:
    'Trusted healthcare lead generation agency in Navi Mumbai. We help hospitals, clinics, doctors & diagnostic centres attract high-quality patient inquiries through data-driven digital marketing campaigns.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}