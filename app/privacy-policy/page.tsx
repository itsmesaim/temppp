import type { Metadata } from 'next';
import Link from 'next/link';
import { OFFICE_ADDRESS } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | SNK',
  description: 'Privacy Policy for SNK — how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-[#E31E24] tracking-[3px] text-xs mb-3">LEGAL</div>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8">Privacy Policy</h1>
      <p className="text-[#888888] text-sm mb-10">Last updated: June 2026</p>

      <div className="space-y-8 text-[#AAAAAA] leading-relaxed text-base">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Who We Are</h2>
          <p>
            SNK (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a digital solutions company based in Navi Mumbai, Maharashtra, India.
            Our office is located at {OFFICE_ADDRESS.full}.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
          <p className="mb-3">When you contact us through our website, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name and email address</li>
            <li>Company or brand name</li>
            <li>Budget range and project details you provide</li>
            <li>Technical data such as browser type and pages visited (via standard analytics, if enabled)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
          <p>We use your information to respond to enquiries, provide services, send relevant updates about your project, and improve our website and offerings. We do not sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
          <p>We may share information only with trusted service providers who help us operate our business (such as email delivery or hosting), and only to the extent necessary to perform those services.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
          <p>We retain contact form submissions and client communication for as long as needed to fulfil our services and comply with applicable legal obligations.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data by contacting us at <a href="mailto:snkwebsolutions@gmail.com" className="text-[#E31E24] hover:underline">snkwebsolutions@gmail.com</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Contact</h2>
          <p>
            For privacy-related questions, email <a href="mailto:snkwebsolutions@gmail.com" className="text-[#E31E24] hover:underline">snkwebsolutions@gmail.com</a> or call{' '}
            <a href="tel:+919321587762" className="text-[#E31E24] hover:underline">+91 93215 87762</a>.
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-[#2E2E2E]">
        <Link href="/" className="text-sm text-[#888888] hover:text-[#E31E24] transition">← Back to Home</Link>
      </div>
    </div>
  );
}