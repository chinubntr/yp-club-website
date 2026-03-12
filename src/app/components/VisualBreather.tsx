import { useRef, useEffect, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgDubaiCityscape from "figma:asset/ba357afb0bb8e25a9df8273764c772d1c7ac9942.png";

export function VisualBreather() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Only run JS parallax on mobile (md breakpoint = 768px)
    const mq = window.matchMedia("(max-width: 767px)");
    if (!mq.matches) return;

    let ticking = false;
    let rafId = 0;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const viewH = window.innerHeight;
          const progress = (viewH - rect.top) / (viewH + rect.height);
          setOffsetY((progress - 0.5) * 60);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center"
      aria-label="Where ambition meets infrastructure"
    >
      {/* Desktop: CSS background with parallax */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${imgDubaiCityscape})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      {/* Mobile: JS-driven parallax (background-attachment: fixed doesn't work on iOS) */}
      <div className="absolute -top-[30px] -bottom-[30px] left-0 right-0 md:hidden">
        <ImageWithFallback
          src={imgDubaiCityscape}
          alt="Dubai night skyline with Burj Khalifa"
          loading="lazy"
          className="absolute inset-0 size-full object-cover will-change-transform"
          style={{ transform: `translateY(${offsetY}px)` }}
        />
      </div>

      {/* Gradient overlay: top and bottom fade to page color */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1414] via-transparent to-[#1a1414]" />
      {/* Flat darkening overlay */}
      <div className="absolute inset-0 bg-[rgba(26,20,20,0.5)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[700px] mx-auto">
        <ScrollReveal direction="none">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#816a54]" />
            <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567]">
              Where Ambition Meets Infrastructure
            </p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#816a54]" />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <h2 className="font-['Cormorant_Garamond',serif] font-light text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] text-[#fcfcfc]">
            Your Next Chapter Starts
            <span className="block italic text-[#A08567]">
              in the Right Room.
            </span>
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}