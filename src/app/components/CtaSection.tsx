import { ScrollReveal } from "./ScrollReveal";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CtaSection() {
  return (
    <section
      className="py-20 md:py-28 px-6 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background image — business partnership */}
      <div className="absolute inset-0 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758599543278-32d9d073941e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwcHJvZmVzc2lvbmFsJTIwaGFuZHNoYWtlJTIwZm9ybWFsfGVufDF8fHx8MTc3MzA0OTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-[0.08]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 50%, rgba(129,106,84,0.08) 0%, transparent 60%),
              linear-gradient(to bottom, rgba(26,20,20,0.85) 0%, rgba(26,20,20,0.95) 100%)
            `,
          }}
        />
      </div>

      {/* Static glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1e4d57] blur-[120px] pointer-events-none opacity-[0.06]"
      />

      <div className="relative max-w-[700px] mx-auto text-center">
        <ScrollReveal direction="up">
          <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567] mb-6">
            Ready?
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-6">
            <h2
              id="cta-heading"
              className="font-['Cormorant_Garamond',serif] font-light text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] text-[#fcfcfc]"
            >
              The Biggest Risk a Founder Takes
              <span className="block">
                Is Spending Years in
              </span>
              <span className="block italic text-[#A08567]">
                The Wrong Room.
              </span>
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="none" delay={0.2}>
          <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] tracking-[0.5px] uppercase text-[#fcfcfc] mb-10">
            Applications reviewed on a rolling basis &middot; Membership is
            limited
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/waitlist"
              className="flex items-center justify-center h-[48px] px-10 bg-[#1e4d57] border border-[#1e4d57] hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(30,77,87,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm"
            >
              <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#fcfcfc]">
                Join the Waitlist
              </span>
            </Link>
            <Link
              to="/brochure"
              className="flex items-center justify-center h-[48px] px-10 border border-[rgba(255,255,255,0.15)] hover:border-[#A08567] transition-all hover:shadow-[0_0_20px_rgba(129,106,84,0.1)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm"
            >
              <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#8d8d8d]">
                Download Brochure
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
