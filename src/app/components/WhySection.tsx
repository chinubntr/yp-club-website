import { ScrollReveal } from "./ScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import imgWhyPanel from "figma:asset/7ef23a5b136f9c397a747eb08f8bff4b07e6ca7b.png";

export function WhySection() {
  return (
    <section className="py-16 md:py-24 px-6" aria-labelledby="why-heading">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
        {/* Left content */}
        <div className="flex-1">
          <ScrollReveal direction="up">
            <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567] mb-6">
              Why YP Club Exists
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="mb-8">
              <h2 id="why-heading" className="font-['Cormorant_Garamond',serif] font-light text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] text-[#fcfcfc]">
                Most Networks Sell You Access.
                <span className="block italic text-[#A08567]">
                  We Sell You Outcomes.
                </span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="space-y-6 max-w-[560px]">
              <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                You have been in the rooms. The events with a hundred people you will never speak to again. The memberships that felt expensive and delivered nothing you could point to.
              </p>
              <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                YP Club is not that. It is Dubai's only private business club built exclusively for founders.
              </p>
              <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                Every dinner is curated to the people you actually need to meet. Every piece of programming is designed to make you a sharper operator. Every introduction is tracked and attributed so you can see, in numbers, exactly what your membership is worth.
              </p>
              <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                This is not a network. It is a growth operating system for founders scaling from AED 1M to AED 30M.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
              <Link
                to="/about"
                className="inline-flex items-center justify-center h-[48px] px-10 border border-[rgba(255,255,255,0.15)] hover:border-[#A08567] transition-all hover:shadow-[0_0_20px_rgba(129,106,84,0.1)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm"
              >
                <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#8d8d8d]">
                  About Us
                </span>
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center justify-center h-[48px] px-10 border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.3)] transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm"
              >
                <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#878787]">
                  FAQ
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: image + quote */}
        <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-8">
          <ScrollReveal direction="right" delay={0.3}>
            <div className="relative overflow-hidden rounded-sm h-[300px]">
              <ImageWithFallback
                src={imgWhyPanel}
                alt="Founder panel discussion at a YP Club Dubai event"
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1414] via-transparent to-transparent opacity-70" />
              {/* Caption overlay */}
              <p className="absolute bottom-4 left-4 right-4 font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[2px] uppercase text-[#A08567]">
                Founder Panels · Dubai
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.4}>
            <span className="font-['Cormorant_Garamond',serif] font-light text-[72px] leading-[72px] text-[#A08567] block" aria-hidden="true">
              {"\u201C"}
            </span>
            <div className="border-l-2 border-[#816a54] pl-6 mt-[-16px]">
              <p className="font-['Cormorant_Garamond',serif] italic font-light text-[22px] leading-[35.2px] text-[#A08567]">
                The biggest risk a founder takes is not a bad hire or a missed market. It is spending years in the wrong room.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}