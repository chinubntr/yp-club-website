import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import jamesImg from "figma:asset/9bec4d7607c12288eb9817dbf3ea7182276b1e03.png";
import sonnyImg from "figma:asset/52ccf8b5eb8ab2294292ef3795de99f0db26b6e3.png";
import nathanImg from "figma:asset/5511174d73240db9b7d6fd7a2f0d57dc6b57ebca.png";
import mohammedImg from "figma:asset/ae0160cad15f9df559111aed78b7c60094189bef.png";

const testimonials = [
  {
    name: "James Augustin",
    company: "Particle Execution",
    tag: "Multi-six-figure contract",
    story:
      "James started as a YP Club team member before backing himself to found Particle Execution. His first major win came through the very network he helped build, a multi-six-figure contract with a music festival to deliver AI-powered ticketing solutions, now expanding internationally.",
    quote: "From employee to founder to international contract.",
    avatars: [jamesImg],
  },
  {
    name: "Sonny Sangha & Nathan Priestley",
    company: "Papafam \u00B7 Priestley Group",
    tag: "$150M+ real estate portfolio",
    story:
      "Sonny, founder of Papafam (largest online developer community on Youtube), met Nathan, $150M+ in real estate developments, inside YP Club. Together they built the first AI solution for real estate project management.",
    quote: "One introduction. One product changing an entire industry.",
    avatars: [sonnyImg, nathanImg],
  },
  {
    name: "Mohammed Mohammed",
    company: "Smart Bricks",
    tag: "$5M raised \u00B7 a16z backed",
    story:
      "Mohammed built the world's first agentic AI solution for real estate and raised $5 million from Andreessen Horowitz, becoming the first founder in the region to do so at this stage. He is a YP Club member and on Forbes 30 under 30.",
    quote: "The region's first a16z-backed founder. In the room with you.",
    avatars: [mohammedImg],
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative bg-[#1a1414] border-t border-b border-[rgba(255,255,255,0.1)] py-16 md:py-24 px-6 overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1771270759486-1f7703945072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwcm9vbSUyMGV4ZWN1dGl2ZSUyMG1lZXRpbmclMjBkYXJrfGVufDF8fHx8MTc3MzA0OTYxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-[0.04]"
        />
        <div className="absolute inset-0 bg-[#1a1414] opacity-80" />
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        <div className="mb-10 md:mb-14">
          <ScrollReveal direction="up">
            <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567] mb-5">
              Member Impact
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 id="testimonials-heading" className="font-['Cormorant_Garamond',serif] font-light text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] text-[#fcfcfc]">
              The Room
              <span className="block italic text-[#A08567]">
                Changes Everything.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <StaggerContainer className="flex md:grid md:grid-cols-3 gap-px overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:overflow-x-visible" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full min-w-[85vw] sm:min-w-[70vw] md:min-w-0 snap-start">
              <div className="bg-[#1a1414] border-t border-[rgba(255,255,255,0.1)] p-10 h-full flex flex-col relative pb-[150px]">
                {/* Avatar & name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex">
                    {t.avatars.map((src, i) => (
                      <div
                        key={i}
                        className="relative rounded-full size-[52px] shrink-0"
                        style={{ marginLeft: i > 0 ? "-10px" : "0", zIndex: t.avatars.length - i }}
                      >
                        {/* Background fill */}
                        <div className="absolute inset-0 rounded-full bg-[#2c2018]" />
                        {/* Image */}
                        <img
                          src={src}
                          alt={i === 0 ? `${t.name}, YP Club member` : ""}
                          className="absolute inset-0 size-full rounded-full object-cover"
                          loading="lazy"
                        />
                        {/* Border stroke */}
                        <div className="absolute inset-0 rounded-full border border-[rgba(200,185,154,0.25)]" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[0.36px] text-[#fcfcfc]">
                      {t.name}
                    </p>
                    <p className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] tracking-[1px] uppercase text-[#878787]">
                      {t.company}
                    </p>
                  </div>
                </div>

                {/* Tag */}
                <div className="inline-block bg-[rgba(129,106,84,0.1)] border border-[rgba(129,106,84,0.25)] px-3 py-1.5 mb-6">
                  <span className="font-['Cormorant_Garamond',serif] italic text-[13px] leading-[19.5px] text-[#A08567]">
                    {t.tag}
                  </span>
                </div>

                {/* Story */}
                <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                  {t.story}
                </p>

                {/* Quote — pinned to bottom of card, fixed-height container so border-t aligns */}
                <div className="absolute bottom-0 left-0 right-0 mx-10 mb-10 border-t border-[rgba(255,255,255,0.1)] pt-5 h-[70px]">
                  <p className="font-['Cormorant_Garamond',serif] italic font-light text-[16px] leading-[22.4px] text-[#A08567]">
                    {t.quote}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}