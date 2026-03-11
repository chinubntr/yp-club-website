import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgBuiltFor from "figma:asset/9b5599e2f0b119efb1693627ede44449dc62ddbc.png";

const tags = ["Founders", "Co-Founders", "AED 1M \u2013 30M Revenue", "Dubai Based"];

export function BuiltForSection() {
  return (
    <section
      className="relative bg-[#1a1414] border-t border-b border-[rgba(255,255,255,0.1)] py-16 md:py-24 px-6 overflow-hidden"
      aria-labelledby="builtfor-heading"
    >
      <div className="relative max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20">
        {/* LEFT COLUMN — Image */}
        <ScrollReveal direction="left" delay={0.2} className="lg:w-[440px] shrink-0">
          <div className="relative h-[400px] lg:h-[480px] rounded-sm overflow-hidden">
            <ImageWithFallback
              src={imgBuiltFor}
              alt="Entrepreneurs at a private YP Club founder session"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1414] via-[rgba(26,20,20,0.2)] to-[rgba(26,20,20,0.1)]" />
            {/* Left gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,20,20,0.3)] to-transparent" />

          </div>
        </ScrollReveal>

        {/* RIGHT COLUMN — Content */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
          <ScrollReveal direction="up">
            <p className="font-['Inter',sans-serif] font-medium text-[11px] md:text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567] mb-6">
              Who It's For
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="mb-6">
              <h2
                id="builtfor-heading"
                className="font-['Cormorant_Garamond',serif] font-light text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] text-[#fcfcfc]"
              >
                Built for One Person.
                <span className="block italic text-[#A08567]">
                  The Founder.
                </span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="none" delay={0.2}>
            <div className="w-12 h-px bg-[#816a54] mx-auto lg:mx-0 mb-8" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.25}>
            <div className="max-w-[560px] mx-auto lg:mx-0 space-y-6 mb-12">
              <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                Built for those who started something from nothing, are scaling it into something significant, and understand that who you surround yourself with determines how far you go.
              </p>
              <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                If you are a founder and serious about scaling, you are exactly who we built this for.
              </p>
            </div>
          </ScrollReveal>
          {/* Desktop: static wrap */}
          <StaggerContainer
            className="hidden sm:flex flex-wrap items-center justify-center lg:justify-start gap-3"
            staggerDelay={0.08}
          >
            {tags.map((tag) => (
              <StaggerItem key={tag}>
                <div className="border border-[rgba(129,106,84,0.3)] px-5 py-2">
                  <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#A08567]">
                    {tag}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Mobile: static tags */}
          <div className="sm:hidden flex flex-wrap items-center justify-center gap-3">
            {tags.map((tag) => (
              <div key={tag} className="border border-[rgba(129,106,84,0.3)] px-5 py-2 shrink-0">
                <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#A08567] whitespace-nowrap">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}