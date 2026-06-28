import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts, type ContentBlock } from '../../../lib/blog-data';

/* ── Static params for Next.js 15 ── */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/* ── Per-page metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | SNK Web Solutions`,
    description: post.excerpt,
  };
}

/* ── Content block renderer ── */
function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'intro':
      return (
        <p key={i} className="text-xl text-[#CCCCCC] leading-relaxed mb-8 font-medium">
          {block.text}
        </p>
      );
    case 'heading':
      return (
        <h2 key={i} className="text-2xl md:text-3xl font-semibold text-white tracking-tight mt-12 mb-4">
          {block.text}
        </h2>
      );
    case 'paragraph':
      return (
        <p key={i} className="text-[#AAAAAA] leading-relaxed mb-6 whitespace-pre-line">
          {block.text}
        </p>
      );
    case 'bullets':
      return (
        <ul key={i} className="mb-6 space-y-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[#AAAAAA]">
              <span className="text-[#E31E24] mt-1 shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'cta':
      return (
        <div key={i} className="mt-12 p-8 rounded-2xl bg-[#1A0505] border border-[#E31E24]/30">
          <p className="text-[#CCCCCC] leading-relaxed mb-5">{block.text}</p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#E31E24] px-8 text-sm font-semibold text-white hover:bg-[#C01A1F] transition-all hover:shadow-[0_0_24px_rgba(227,30,36,0.4)]"
          >
            Get in Touch →
          </Link>
        </div>
      );
    default:
      return null;
  }
}

/* ── Page component (Next.js 15 — params is a Promise) ── */
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="bg-[#0D0D0D] min-h-screen">

      {/* ── Hero ── */}
      <section className="border-b border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#E31E24] transition-colors mb-8"
          >
            ← Back to Blog
          </Link>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="text-[10px] tracking-[2px] uppercase px-3 py-1 rounded-full bg-[#E31E24]/10 text-[#E31E24] border border-[#E31E24]/30"
              >
                {cat}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-[#666666]">
            <span>
              By <span className="text-white">{post.author}</span>
            </span>
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="relative h-64 md:h-96 rounded-t-3xl overflow-hidden border border-[#2A2A2A] border-b-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
              unoptimized
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        {post.content.map((block, i) => renderBlock(block, i))}
      </section>

      {/* ── Related posts ── */}
      {(() => {
        const related = blogPosts
          .filter(
            (p) =>
              p.slug !== post.slug &&
              p.categories.some((c) => post.categories.includes(c))
          )
          .slice(0, 2);

        if (related.length === 0) return null;

        return (
          <section className="border-t border-[#2A2A2A] bg-[#111111] py-16">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-[#E31E24] tracking-[3px] text-xs mb-2">KEEP READING</div>
              <h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex flex-col rounded-2xl border border-[#2A2A2A] bg-[#1A1A1A] overflow-hidden hover:border-[#E31E24]/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-[#E31E24] mb-2">{r.categories[0]}</div>
                      <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-[#E31E24] transition-colors line-clamp-2">
                        {r.title}
                      </h3>
                      <div className="text-xs text-[#666666] mt-2">{r.date} · {r.readTime} read</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── Footer nav ── */}
      <div className="border-t border-[#2A2A2A] py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link href="/blog" className="text-[#E31E24] hover:underline text-sm">
            ← All Articles
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#E31E24] px-7 text-sm font-semibold text-white hover:bg-[#C01A1F] transition-all hover:shadow-[0_0_24px_rgba(227,30,36,0.4)]"
          >
            Work with SNK Web Solutions →
          </Link>
        </div>
      </div>
    </div>
  );
}
