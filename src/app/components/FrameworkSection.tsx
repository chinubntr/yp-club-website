import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { useState } from "react";
import influenceImg from "../../assets/framework-influence.jpg";
import knowledgeImg from "../../assets/framework-knowledge.jpg";
import wealthImg from "../../assets/framework-wealth.jpg";

const pillars = [
  {
    num: "01",
    title: "Influence",
    desc: "Build the authority and personal brand that opens doors before you walk into them. Scale the reputation that follows your company everywhere it goes.",
    image: influenceImg,
    imageAlt: "Speaker at a YP Club private event",
  },
  {
    num: "02",
    title: "Knowledge",
    desc: "Access the tools, frameworks, and subject matter experts that move you from operator to global executive. Programming designed to sharpen the person running the company.",
    image: knowledgeImg,
    imageAlt: "YP Club member at a curated dinner event",
  },
  {
    num: "03",
    title: "Wealth",
    desc: "The relationships, deals, and infrastructure to raise capital, build generational wealth, and protect what you are building as it scales.",
    image: wealthImg,
    imageAlt: "YP Club founders networking at a curated dinner",
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
      className="group relative bg-[#1a1414] border border-[rgba(255,255,255,0.08)] overflow-hidden cursor-default flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={pillar.image}
          alt={pillar.imageAlt}
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />
        {/* Gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1414] via-[rgba(26,20,20,0.3)] to-transparent" />
        {/* Number overlay */}
        <span
          className="absolute bottom-4 left-6 font-['Cormorant_Garamond',serif] font-light text-[48px] leading-none transition-colors duration-500"
          style={{ color: hovered ? "rgba(160,133,103,1)" : "rgba(160,133,103,0.6)" }}
          aria-hidden="true"
        >
          {pillar.num}
        </span>
      </div>

      {/* Content area */}
      <div className="relative px-6 pt-5 pb-6 flex-1 flex flex-col">
        {/* Hover border glow */}
        <div
          className="absolute inset-0 border border-[rgba(160,133,103,0.25)] pointer-events-none transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        />

        <h3
          className="font-['Cormorant_Garamond',serif] font-normal text-[24px] md:text-[28px] leading-[1.3] text-[#fcfcfc] mb-3 transition-all duration-500"
          style={{ transform: hovered ? "translateY(-2px)" : "translateY(0)" }}
        >
          {pillar.title}
        </h3>

        {/* Body text: hidden by default, elegantly revealed on hover */}
        <div
          className="overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{
            maxHeight: hovered ? "160px" : "0px",
            opacity: hovered ? 1 : 0,
            marginTop: hovered ? "0px" : "-4px",
          }}
        >
          <p className="font-['Inter',sans-serif] font-light text-[13px] leading-[22px] text-[rgba(252,252,252,0.8)]">
            {pillar.desc}
          </p>
        </div>

        {/* Subtle line accent */}
        <div
          className="mt-auto pt-4 transition-all duration-500"
        >
          <div
            className="h-px transition-all duration-600 ease-out"
            style={{
              width: hovered ? "100%" : "40px",
              background: hovered
                ? "linear-gradient(90deg, #A08567, rgba(160,133,103,0.2))"
                : "rgba(255,255,255,0.1)",
            }}
          />
        </div>
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
          className="hidden md:grid md:grid-cols-3 gap-4"
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
