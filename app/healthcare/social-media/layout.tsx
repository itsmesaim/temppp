import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Social Media in Navi Mumbai | SNK',
  description:
    'Healthcare social media marketing agency in Navi Mumbai. Specialized social media solutions for doctors, clinics, hospitals, and medical brands across India.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
