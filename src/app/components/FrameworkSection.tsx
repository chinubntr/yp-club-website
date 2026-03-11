import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const pillars = [
  {
    num: "01",
    title: "Influence",
    desc: "Build the authority and personal brand that opens doors before you walk into them. Scale the reputation that follows your company everywhere it goes.",
    image:
      "https://images.unsplash.com/photo-1764874299006-bf4266427ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBzdGFnZSUyMHNwZWFrZXJ8ZW58MXx8fHwxNzczMDQxODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Speaker at a luxury business conference",
  },
  {
    num: "02",
    title: "Knowledge",
    desc: "Access the tools, frameworks, and subject matter experts that move you from operator to global executive. Programming designed to sharpen the person running the company.",
    image:
      "https://images.unsplash.com/photo-1563400840384-db84615dbe2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwcml2YXRlJTIwbGlicmFyeSUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3NzMwNDE4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Executive private library with dark interior",
  },
  {
    num: "03",
    title: "Wealth",
    desc: "The relationships, deals, and infrastructure to raise capital, build generational wealth, and protect what you are building as it scales.",
    image:
      "https://images.unsplash.com/photo-1714773804930-56124267152b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcml2YXRlJTIwZGlubmVyJTIwZXZlbnQlMjBlbGVnYW50fGVufDF8fHx8MTc3MzA0MTg5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Elegant private dinner event setting",
  },
];

function PillarCard({
  pillar,
}: {
  pillar: (typeof pillars)[0];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="article"
      aria-label={`${pillar.title} pillar`}
      className="relative bg-[#1a1414] border border-[rgba(255,255,255,0.1)] overflow-hidden p-10 min-h-[308px] cursor-default"
    >
      {/* Hover background image */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <ImageWithFallback
          src={pillar.image}
          alt={pillar.imageAlt}
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1414] via-[rgba(26,20,20,0.85)] to-[rgba(26,20,20,0.6)]" />
      </div>

      {/* Hover border glow */}
      <div
        className="absolute inset-0 border border-[rgba(129,106,84,0.3)] pointer-events-none transition-opacity duration-400"
        style={{ opacity: hovered ? 1 : 0 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <span
          className="font-['Cormorant_Garamond',serif] font-light text-[40px] md:text-[48px] leading-[40px] md:leading-[48px] mb-6 block transition-colors duration-400"
          style={{ color: hovered ? "rgba(160,133,103,1)" : "rgba(160,133,103,0.75)" }}
          aria-hidden="true"
        >
          {pillar.num}
        </span>
        <h3
          className="font-['Cormorant_Garamond',serif] font-normal text-[24px] md:text-[28px] leading-[42px] text-[#fcfcfc] mb-4 transition-transform duration-400"
          style={{ transform: hovered ? "translateX(4px)" : "translateX(0)" }}
        >
          {pillar.title}
        </h3>
        <p
          className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[320px] transition-opacity duration-400"
          style={{ opacity: hovered ? 1 : 0.85 }}
        >
          {pillar.desc}
        </p>
      </div>
    </div>
  );
}

export function FrameworkSection() {
  return (
    <section className="py-16 md:py-24 px-6" aria-labelledby="framework-heading">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10 md:mb-14">
          <ScrollReveal direction="up">
            <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567] mb-5">
              The Framework
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 id="framework-heading" className="font-['Cormorant_Garamond',serif] font-light text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] text-[#fcfcfc]">
              Everything a Founder Needs.
              <span className="block italic text-[#A08567]">
                Nothing They Don't.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Desktop: grid | Mobile: horizontal scroll */}
        <StaggerContainer
          className="hidden md:grid md:grid-cols-3 gap-px"
          staggerDelay={0.15}
          once={false}
        >
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.num}>
              <PillarCard pillar={pillar} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="md:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 w-max pb-2">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="w-[85vw] max-w-[340px] shrink-0">
                <PillarCard pillar={pillar} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
