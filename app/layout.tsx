import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import JsonLd from '../components/JsonLd';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, organizationJsonLd } from '../lib/seo';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Digital Marketing Agency in Navi Mumbai | SNK Web Solutions',
    template: '%s | SNK',
  },
  description:
    'SNK Web Solutions is a trusted digital marketing agency in Navi Mumbai offering SEO, performance marketing, social media, web design, and healthcare digital marketing for measurable growth.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Digital Marketing Agency in Navi Mumbai | SNK Web Solutions',
    description:
      'Result-driven SEO, performance marketing, and web experiences for ambitious brands in Navi Mumbai and beyond.',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Navi Mumbai | SNK',
    description: 'SEO, performance marketing, social media, and web design from SNK Web Solutions.',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-[#F0F0F0] font-[family-name:var(--font-poppins)]">
        <JsonLd data={organizationJsonLd()} />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
