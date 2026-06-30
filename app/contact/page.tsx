'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconBox } from '../../components/ServiceIcon';
import { Reveal, Stagger, StaggerItem, GlowButton } from '../../components/motion';
import { OFFICE_ADDRESS } from '../../lib/site';

const MAPS_URL = OFFICE_ADDRESS.mapsUrl;
const MAPS_EMBED = OFFICE_ADDRESS.mapsEmbed;

type ContactCardProps = {
  icon: 'map-pin' | 'phone' | 'mail' | 'clock';
  label: string;
  children: React.ReactNode;
  href?: string;
};

function ContactCard({ icon, label, children, href }: ContactCardProps) {
  const className =
    'flex h-full items-start gap-3 rounded-xl border border-[#2A2A2A] bg-[#141414] p-4 transition-colors hover:bg-[#1A1A1A]';

  const content = (
    <>
      <IconBox name={icon} size={18} className="w-9 h-9 rounded-lg" />
      <div className="min-w-0 flex-1">
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#666666]">
          {label}
        </div>
        {children}
      </div>
    </>
  );

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={className}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/snkwebsolutions@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          budget: formData.budget,
          message: formData.message,
          _subject: `New enquiry from ${formData.name} — SNK`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      alert(
        'Something went wrong sending your message. Please email us directly at snkwebsolutions@gmail.com or call +91 93215 87762.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* ── Hero intro ── */}
      <Reveal className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <div className="text-[#E31E24] tracking-[3px] text-xs mb-3">LET&apos;S TALK</div>
        <h1 className="text-5xl md:text-6xl tracking-tight font-semibold leading-none mb-4">
          Ready to grow?
        </h1>
        <p className="text-[#888888] text-lg max-w-xl">
          We work with ambitious businesses to deliver digital solutions that drive real, measurable
          growth.
        </p>
      </Reveal>

      {/* ── Contact info cards ── */}
      <div className="max-w-5xl mx-auto px-6 pb-10">
        <Stagger
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 auto-rows-fr"
          stagger={0.06}
          fast
        >
          <StaggerItem className="h-full">
            <ContactCard icon="map-pin" label="Office Address" href={MAPS_URL}>
              <p className="text-sm font-medium leading-snug text-white">{OFFICE_ADDRESS.line1}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-[#888888]">{OFFICE_ADDRESS.line2}</p>
            </ContactCard>
          </StaggerItem>

          <StaggerItem className="h-full">
            <ContactCard icon="phone" label="Phone" href="tel:+919321587762">
              <p className="text-sm font-medium text-white">+91 93215 87762</p>
              <p className="mt-0.5 text-xs text-[#888888]">Mon–Sat, 10 AM – 7 PM</p>
            </ContactCard>
          </StaggerItem>

          <StaggerItem className="h-full">
            <ContactCard icon="mail" label="Email" href="mailto:snkwebsolutions@gmail.com">
              <p className="break-all text-sm font-medium text-white">snkwebsolutions@gmail.com</p>
              <p className="mt-0.5 text-xs text-[#888888]">Reply within 24 hours</p>
            </ContactCard>
          </StaggerItem>

          <StaggerItem className="h-full">
            <ContactCard icon="clock" label="Business Hours">
              <p className="text-sm font-medium text-white">Monday – Saturday</p>
              <p className="mt-0.5 text-xs text-[#888888]">10:00 AM – 7:00 PM</p>
            </ContactCard>
          </StaggerItem>
        </Stagger>
      </div>

      {/* ── Form section ── */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-12 gap-x-16">
          {/* Left sticky info */}
          <div className="md:col-span-5 mb-12 md:mb-0">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white mb-4 leading-snug">
                Send Us a Message
              </h2>
              <p className="text-[#888888] text-base leading-relaxed mb-6">
                Whether you need a professional website, digital marketing strategy, or complete
                branding solution — tell us about your goals and we&apos;ll get back to you within
                one business day.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-[#CCCCCC]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24] flex-shrink-0" />
                  No commitment required
                </div>
                <div className="flex items-center gap-2 text-[#CCCCCC]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24] flex-shrink-0" />
                  Free initial consultation
                </div>
                <div className="flex items-center gap-2 text-[#CCCCCC]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24] flex-shrink-0" />
                  Customized solutions for your business
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="rounded-3xl border border-emerald-900 bg-emerald-950/30 p-14 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 18 }}
                    className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6"
                  >
                    <span className="text-4xl">✓</span>
                  </motion.div>
                  <h3 className="text-3xl tracking-tight font-semibold">
                    Thank you. We&apos;ve received your message.
                  </h3>
                  <p className="mt-3 text-emerald-400">
                    A member of our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs tracking-widest text-[#666666] block mb-2">
                          YOUR NAME
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl px-6 py-4 text-lg placeholder:text-[#BBBBBB]"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-xs tracking-widest text-[#666666] block mb-2">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl px-6 py-4 text-lg placeholder:text-[#BBBBBB]"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs tracking-widest text-[#666666] block mb-2">
                          COMPANY / BRAND
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl px-6 py-4 text-lg placeholder:text-[#BBBBBB]"
                          placeholder="Company or brand name"
                        />
                      </div>
                      <div>
                        <label className="text-xs tracking-widest text-[#666666] block mb-2">
                          MONTHLY BUDGET RANGE
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl px-6 py-4 text-lg"
                        >
                          <option value="">Select range</option>
                          <option value="50k-1.5L">₹50,000 — ₹1.5 Lakh</option>
                          <option value="1.5L-4L">₹1.5 Lakh — ₹4 Lakh</option>
                          <option value="4L-8L">₹4 Lakh — ₹8 Lakh</option>
                          <option value="8L+">₹8 Lakh+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs tracking-widest text-[#666666] block mb-2">
                        WHAT ARE YOU WORKING ON?
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full rounded-3xl px-6 py-5 text-lg resize-y min-h-[140px] placeholder:text-[#BBBBBB]"
                        placeholder="Describe your project, goals, or the services you're interested in..."
                      />
                    </div>

                    <GlowButton className="w-full md:w-auto mt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full md:w-auto flex items-center justify-center gap-3 h-16 px-14 rounded-full bg-[#E31E24] text-xl font-semibold text-white hover:bg-[#C01A1F] disabled:opacity-70 transition hover:shadow-[0_0_32px_rgba(227,30,36,0.4)]"
                      >
                        {loading ? 'SENDING...' : 'SEND MESSAGE'}
                      </button>
                    </GlowButton>
                    <p className="text-[10px] text-center md:text-left text-[#666666] tracking-widest">
                      WE TYPICALLY RESPOND WITHIN ONE BUSINESS DAY
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Google Map ── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="mb-6">
          <div className="text-[#E31E24] uppercase tracking-[3px] text-xs mb-2">FIND US</div>
          <h2 className="text-3xl font-semibold tracking-tight text-white">Our Location</h2>
          <p className="text-[#888888] text-sm mt-1">{OFFICE_ADDRESS.full}</p>
        </div>

        {/* Map container */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-3xl overflow-hidden border border-[#2A2A2A] hover:border-[#E31E24]/50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_48px_-8px_rgba(227,30,36,0.2)] hover:-translate-y-1"
          style={{ height: '420px' }}
          aria-label="Open location in Google Maps"
        >
          <iframe
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`SNK – ${OFFICE_ADDRESS.full}`}
          />

          {/* Overlay label */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D0D0D]/90 backdrop-blur-sm border border-[#2A2A2A]">
              <IconBox name="map-pin" size={16} className="w-8 h-8" />
              <div>
                <div className="text-white text-xs font-semibold">{OFFICE_ADDRESS.line1}</div>
                <div className="text-[#888888] text-[10px]">{OFFICE_ADDRESS.line2}</div>
              </div>
            </div>
            <div className="px-3 py-2 rounded-xl bg-[#E31E24]/90 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Open in Maps
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
