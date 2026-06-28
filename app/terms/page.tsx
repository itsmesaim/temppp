import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | SNK Web Solutions',
  description: 'Terms and Conditions for using SNK Web Solutions website and services.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-[#E31E24] tracking-[3px] text-xs mb-3">LEGAL</div>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8">Terms &amp; Conditions</h1>
      <p className="text-[#888888] text-sm mb-10">Last updated: June 2026</p>

      <div className="space-y-8 text-[#AAAAAA] leading-relaxed text-base">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using the SNK Web Solutions website, you agree to these Terms &amp; Conditions. If you do not agree, please do not use our website or services.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
          <p>SNK Web Solutions provides digital marketing, web development, SEO, branding, and related services. Specific deliverables, timelines, and fees are defined in individual proposals or service agreements.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Website Content</h2>
          <p>All content on this website — including text, graphics, logos, and case studies — is owned by SNK Web Solutions or used with permission. You may not reproduce or distribute our content without written consent.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Enquiries &amp; Communications</h2>
          <p>Submitting a contact form or enquiry does not create a binding contract. We will respond to discuss your requirements and provide a formal proposal where applicable.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
          <p>We make reasonable efforts to keep website information accurate, but we do not guarantee completeness or suitability for every purpose. SNK Web Solutions is not liable for indirect or consequential damages arising from use of this website.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Third-Party Links</h2>
          <p>Our website may link to third-party sites (such as social media or Google Maps). We are not responsible for the content or privacy practices of those external sites.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Maharashtra, India.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
          <p>
            Questions about these terms? Contact us at{' '}
            <a href="mailto:snkwebsolutions@gmail.com" className="text-[#E31E24] hover:underline">snkwebsolutions@gmail.com</a> or{' '}
            <Link href="/contact" className="text-[#E31E24] hover:underline">visit our contact page</Link>.
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-[#2A2A2A]">
        <Link href="/" className="text-sm text-[#888888] hover:text-[#E31E24] transition">← Back to Home</Link>
      </div>
    </div>
  );
}