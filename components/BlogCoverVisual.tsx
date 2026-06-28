'use client';

interface BlogCoverVisualProps {
  slug: string;
  categories: string[];
  title: string;
  variant?: 'card' | 'hero';
  className?: string;
}

const ACCENTS = ['#E31E24', '#C01A1F', '#B81820', '#D42028', '#A01518'];

function hashSlug(slug: string) {
  return slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
}

export default function BlogCoverVisual({
  slug,
  categories,
  title,
  variant = 'card',
  className = '',
}: BlogCoverVisualProps) {
  const accent = ACCENTS[hashSlug(slug) % ACCENTS.length];
  const isHero = variant === 'hero';

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(ellipse at 25% 15%, ${accent}22 0%, transparent 55%), linear-gradient(145deg, #1A1A1A 0%, #111111 50%, #0D0D0D 100%)`,
      }}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, ${accent} 31px, ${accent} 32px), repeating-linear-gradient(90deg, transparent, transparent 31px, ${accent} 31px, ${accent} 32px)`,
        }}
      />
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-25" style={{ background: accent }} />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-2xl opacity-15" style={{ background: accent }} />

      <div className={`relative z-10 flex flex-col justify-end h-full p-5 ${isHero ? 'md:p-8' : ''}`}>
        {categories[0] && (
          <span
            className="self-start text-[10px] tracking-[3px] uppercase px-2.5 py-1 rounded-full mb-3 border"
            style={{ color: accent, borderColor: `${accent}40`, background: `${accent}12` }}
          >
            {categories[0]}
          </span>
        )}
        <p
          className={`font-semibold text-white/90 leading-snug line-clamp-3 ${
            isHero ? 'text-lg md:text-2xl max-w-2xl' : 'text-sm'
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}