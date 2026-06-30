import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Social Media in Navi Mumbai | SNK',
  description:
    'Healthcare social media marketing in Navi Mumbai. Build patient trust and brand authority through strategic, compliant content across Facebook, Instagram, LinkedIn, and YouTube.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}