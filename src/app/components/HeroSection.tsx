import { Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgHeroBackground from "figma:asset/fb575fd1c24a67ef37938de4ccae63bccfd5c87e.png";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden min-h-[calc(100svh-70px)] md:min-h-screen"
      aria-labelledby="hero-heading"
    >
      {/* Background image with overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease }}
      >
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
      </motion.div>

      {/* Decorative vertical lines with fade-in */}
      <motion.div
        className="hidden lg:block absolute left-16 top-[280px] w-px h-[160px] bg-gradient-to-b from-transparent via-[rgba(129,106,84,0.3)] to-transparent origin-top"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease }}
      />
      <motion.div
        className="hidden lg:block absolute right-16 top-[280px] w-px h-[160px] bg-gradient-to-b from-transparent via-[rgba(129,106,84,0.3)] to-transparent origin-top"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4, ease }}
      />

      <div className="relative max-w-[960px] mx-auto px-6 text-center pt-24 md:pt-[140px]">
        {/* Label */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-4 md:mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
        >
          <motion.div
            className="w-6 md:w-8 h-px bg-[#816a54]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            style={{ transformOrigin: "right" }}
          />
          <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567]">
            Private Founder Network in Dubai
          </p>
          <motion.div
            className="w-6 md:w-8 h-px bg-[#816a54]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* Main heading */}
        <div className="mb-5 md:mb-8">
          <h1
            id="hero-heading"
            className="font-['Cormorant_Garamond',serif] font-light text-[32px] sm:text-[44px] md:text-[56px] leading-[1.1] sm:leading-[1.06] tracking-[-0.72px] text-[#fcfcfc] text-center"
          >
            <motion.span
              className="block sm:whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
            >
              The Operating System
            </motion.span>
            <motion.span
              className="block sm:whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease }}
            >
              for Founders Who Are
            </motion.span>
            <motion.span
              className="block sm:whitespace-nowrap italic text-[#A08567]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease }}
            >
              Serious About What Comes Next.
            </motion.span>
          </h1>
        </div>

        {/* Subtext */}
        <motion.p
          className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#d4d4d4] max-w-[500px] mx-auto mb-7 md:mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
        >
          <span className="hidden sm:inline">
            YP Club is a private, application-only founder community in Dubai.
            Powered by PioneerOS, the infrastructure, network, and knowledge to
            scale your business and get in the rooms that change your trajectory.
          </span>
          <span className="sm:hidden">
            A private, application-only founder community in Dubai. Powered by
            PioneerOS.
          </span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
        >
          <Link
            to="/waitlist"
            className="group flex items-center justify-center h-[44px] sm:h-[46px] px-8 sm:px-10 bg-[#1e4d57] border border-[#1e4d57] hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,77,87,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm w-full sm:w-auto"
          >
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#fcfcfc]">
              Join the Waitlist
            </span>
          </Link>
          <Link
            to="/brochure"
            className="flex items-center justify-center h-[44px] sm:h-[46px] px-8 sm:px-10 border border-[#575757] hover:border-[#A08567] transition-all duration-300 hover:shadow-[0_0_20px_rgba(129,106,84,0.1)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm w-full sm:w-auto"
          >
            <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#878787]">
              Download Brochure
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator with pulse */}
      <motion.div
        className="relative hidden md:flex flex-col items-center gap-2 mt-12 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6, ease }}
      >
        <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] tracking-[2.25px] uppercase text-[#878787]">
          Scroll
        </p>
        <motion.div
          className="w-px h-[36px] bg-gradient-to-b from-[#A08567] to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
