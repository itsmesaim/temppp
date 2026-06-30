import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../../lib/blog-data';

export const metadata = {
  title: 'Blog | SNK',
  description: 'Practical, no-fluff insights on SEO, ORM, paid social, and digital growth — straight from the SNK team.',
};

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-14 pb-24">
      {/* ── Page header ── */}
      <div className="max-w-2xl mb-12">
        <div className="text-[#E31E24] tracking-[3px] text-sm mb-2">INSIGHTS</div>
        <h1 className="text-5xl md:text-6xl tracking-tight font-semibold leading-tight">
          Thoughts on growth,<br />strategy &amp; the craft.
        </h1>
        <p className="mt-5 text-lg text-[#888888]">
          Practical, no-fluff insights on SEO, ORM, paid social, and digital growth — straight from the SNK team.
        </p>
      </div>

      {/* ── Post grid ── */}
      <div className="grid md:grid-cols-2 gap-5">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="blog-card group cursor-pointer overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#1A1A1A] flex flex-col"
          >
            {/* Cover image */}
            <div className="relative h-56 bg-[#1A1A1A] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              {/* Category badge */}
              <div className="absolute top-5 left-5 z-10 flex flex-wrap gap-2">
                {post.categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 text-xs rounded-full bg-[#0D0D0D]/80 backdrop-blur-sm text-white tracking-widest border border-[#2A2A2A]"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Card body */}
            <div className="p-7 flex-1 flex flex-col">
              <h3 className="font-semibold text-xl md:text-2xl tracking-tight leading-tight group-hover:text-[#E31E24] transition-colors duration-200">
                {post.title}
              </h3>
              <p className="mt-4 text-[#888888] line-clamp-3 flex-1 text-sm leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-6 pt-5 border-t border-[#2A2A2A] flex items-center justify-between text-sm">
                <div>
                  <div className="text-white font-medium">{post.author}</div>
                  <div className="text-xs text-[#666666] mt-0.5">
                    {post.date}&nbsp;·&nbsp;{post.readTime} read
                  </div>
                </div>
                <div className="text-[#E31E24] text-xs tracking-widest group-hover:underline shrink-0">
                  READ →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="mt-16 text-center">
        <p className="text-[#666666] text-sm mb-4">Want tailored digital marketing advice for your business?</p>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#E31E24] px-8 text-sm font-semibold text-white hover:bg-[#C01A1F] transition-all hover:shadow-[0_0_24px_rgba(227,30,36,0.4)]"
        >
          Get a Free Consultation →
        </Link>
      </div>
    </div>
  );
}