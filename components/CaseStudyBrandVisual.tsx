"use client";

import Image from "next/image";

interface CaseStudyBrandVisualProps {
  client: string;
  clientLogo: string;
  industry: string;
  accent?: string;
  variant?: "cover" | "hero" | "gallery";
  className?: string;
}

export default function CaseStudyBrandVisual({
  client,
  clientLogo,
  industry,
  accent = "#E31E24",
  variant = "cover",
  className = "",
}: CaseStudyBrandVisualProps) {
  const isHero = variant === "hero";
  const logoSize = isHero ? 220 : variant === "gallery" ? 120 : 140;

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(ellipse at 30% 20%, ${accent}18 0%, transparent 55%), linear-gradient(145deg, #1A1A1A 0%, #0D0D0D 50%, #0D0D0D 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, ${accent} 31px, ${accent} 32px), repeating-linear-gradient(90deg, transparent, transparent 31px, ${accent} 31px, ${accent} 32px)`,
        }}
      />
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20"
        style={{ background: accent }}
      />
      <div
        className="absolute bottom-0 left-0 w-36 h-36 rounded-full blur-2xl opacity-10"
        style={{ background: accent }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
        <div
          className={`rounded-2xl bg-white/95 flex items-center justify-center shadow-lg ${
            isHero
              ? "w-44 h-44 md:w-52 md:h-52 p-5"
              : "w-28 h-28 md:w-32 md:h-32 p-3"
          }`}
        >
          <Image
            src={clientLogo}
            alt={`${client} logo`}
            width={logoSize}
            height={logoSize}
            sizes={isHero ? "208px" : variant === "gallery" ? "120px" : "128px"}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
        {!isHero && (
          <p className="mt-4 text-[10px] tracking-[3px] text-[#666666] uppercase">
            {industry}
          </p>
        )}
      </div>
    </div>
  );
}
