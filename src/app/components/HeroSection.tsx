import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgHeroBackground from "figma:asset/fb575fd1c24a67ef37938de4ccae63bccfd5c87e.png";

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden min-h-[calc(100svh-60px)] md:min-h-screen"
      aria-labelledby="hero-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={imgHeroBackground}
          alt="Founders networking at a YP Club event in Dubai"
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(26,20,20,0.6) 65%, #1a1414 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 50%, rgba(30,77,87,0.15) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 30%, rgba(129,106,84,0.08) 0%, transparent 50%),
              linear-gradient(to bottom, rgba(26,20,20,0.3) 0%, rgba(26,20,20,0.85) 100%)
            `,
          }}
        />
      </div>

      {/* Decorative vertical lines — desktop only */}
      <div
        className="hidden lg:block absolute left-16 top-[280px] w-px h-[160px] bg-gradient-to-b from-transparent via-[rgba(129,106,84,0.3)] to-transparent origin-top"
      />
      <div
        className="hidden lg:block absolute right-16 top-[280px] w-px h-[160px] bg-gradient-to-b from-transparent via-[rgba(129,106,84,0.3)] to-transparent origin-top"
      />

      <div className="relative max-w-[960px] mx-auto px-5 sm:px-6 text-center pt-24 md:pt-[140px]">
        {/* Label */}
        <div
          className="flex items-center justify-center gap-3 mb-4 md:mb-6"
        >
          <div className="w-6 md:w-8 h-px bg-[#816a54]" />
          <p className="font-['Inter',sans-serif] font-medium text-[11px] md:text-[12px] leading-[16px] md:leading-[18px] tracking-[2.5px] md:tracking-[3px] uppercase text-[#A08567]">
            Private Founder Network in Dubai
          </p>
          <div className="w-6 md:w-8 h-px bg-[#816a54]" />
        </div>

        {/* Main heading — 2 visual lines on mobile, 3 on desktop */}
        <div className="mb-5 md:mb-8">
          <h1
            id="hero-heading"
            className="font-['Cormorant_Garamond',serif] font-light text-[clamp(24px,5vw,56px)] leading-[1.15] tracking-[-0.5px] md:tracking-[-1px] text-[#fcfcfc] text-center"
          >
            <span className="block whitespace-nowrap">The Operating System</span>
            <span className="block whitespace-nowrap">for Founders Who Are</span>
            <span
              className="block whitespace-nowrap italic text-[#A08567]"
            >
              Serious About What Comes Next.
            </span>
          </h1>
        </div>

        {/* Subtext — concise on mobile, fuller on desktop */}
        <p
          className="font-['Inter',sans-serif] font-light text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] text-[#d4d4d4] max-w-[500px] mx-auto mb-7 md:mb-10"
        >
          <span className="hidden sm:inline">
            YP Club is a private, application-only members club in Dubai for
            founders scaling from AED 1M to AED 30M. Over $12M in deals
            facilitated. 48+ private events yearly. Powered by PioneerOS, the
            infrastructure, network, and knowledge to scale your business and
            get in the rooms that change your trajectory.
          </span>
          <span className="sm:hidden">
            A private, application-only members club in Dubai for founders
            scaling from AED 1M to AED 30M. Over $12M in deals. 48+ events
            yearly. Powered by PioneerOS.
          </span>
        </p>

        {/* CTA — single primary on mobile, both on sm+ */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            to="/waitlist"
            className="group flex items-center justify-center h-[44px] sm:h-[46px] px-8 sm:px-10 bg-[#1e4d57] border border-[#1e4d57] hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(30,77,87,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm w-full sm:w-auto"
          >
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#fcfcfc]">
              Join the Waitlist
            </span>
          </Link>
          <Link
            to="/brochure"
            className="flex items-center justify-center h-[44px] sm:h-[46px] px-8 sm:px-10 border border-[#575757] hover:border-[#A08567] transition-all hover:shadow-[0_0_20px_rgba(129,106,84,0.1)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm w-full sm:w-auto"
          >
            <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#878787]">
              Download Brochure
            </span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator — hidden on mobile to save space */}
      <div
        className="relative hidden md:flex flex-col items-center gap-2 mt-12 pb-8"
      >
        <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] tracking-[2.25px] uppercase text-[#878787]">
          Scroll
        </p>
        <div
          className="w-px h-[36px] bg-gradient-to-b from-[#A08567] to-transparent"
        />
      </div>
    </section>
  );
}
