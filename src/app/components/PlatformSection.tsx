import { useEffect, useRef, useState, useCallback } from "react";
import platformImpactIndex from "../../assets/platform-impact-index.png";
import platformCuratedDinners from "../../assets/platform-curated-dinners.png";
import platformTheVault from "../../assets/platform-the-vault.png";
import platformYpConcierge from "../../assets/platform-yp-concierge.png";

const features = [
  {
    title: "Impact Index",
    desc: "See the financial value your network is generating in real time. Every introduction, referral, and deal tracked and attributed to your profile.",
    color: "#1e4d57",
    image: platformImpactIndex,
  },
  {
    title: "Curated Dinners",
    desc: "AI-matched gatherings based on your industry, ambitions, and who you need to meet. Seating confirmed two days in advance.",
    color: "#816a54",
    image: platformCuratedDinners,
  },
  {
    title: "The Vault",
    desc: "On-demand access to a private library of founder-focused education built around the six pillars of scale.",
    color: "#2d4a3e",
    image: platformTheVault,
  },
  {
    title: "YP Concierge",
    desc: "24/7 travel desk with up to 50% off Emirates and Etihad business class, luxury hotel upgrades, and VIP arrival treatment.",
    color: "#4a3a5c",
    image: platformYpConcierge,
  },
];

export function PlatformSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!outerRef.current) return;
    const rect = outerRef.current.getBoundingClientRect();
    const sectionHeight = outerRef.current.offsetHeight;
    const viewportH = window.innerHeight;

    const scrollableDistance = sectionHeight - viewportH;
    if (scrollableDistance <= 0) return;

    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

    const index = Math.min(
      features.length - 1,
      Math.floor(progress * features.length)
    );
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={outerRef}
      style={{ height: `${features.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <section className="w-full px-6" aria-labelledby="platform-heading">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-16">
            {/* Left column: header + feature list */}
            <div className="flex-1 min-w-0">
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567] mb-3">
                The Platform
              </p>
              <h2
                id="platform-heading"
                className="font-['Cormorant_Garamond',serif] font-light text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] text-[#fcfcfc] mb-3"
              >
                One Platform.
                <span className="block italic text-[#A08567]">
                  Every Tool You Need to Scale.
                </span>
              </h2>
              <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[560px] mb-6">
                The PioneerOS is the digital infrastructure behind your
                membership, built to manage your network, track your impact,
                and give you access to everything YP Club offers in one place.
              </p>

              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="py-3 md:py-4 border-l-2 pl-5 md:pl-6 transition-all duration-500"
                  style={{
                    borderColor:
                      activeIndex === i
                        ? "#A08567"
                        : "rgba(255,255,255,0.08)",
                    opacity: activeIndex === i ? 1 : 0.3,
                  }}
                >
                  <p className="font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] tracking-[2px] uppercase text-[#fcfcfc] mb-1">
                    {feature.title}
                  </p>
                  <p
                    className="font-['Inter',sans-serif] font-light text-[14px] md:text-[15px] leading-[24px] text-[#d4d4d4] max-w-[460px] overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: activeIndex === i ? "120px" : "0px",
                      opacity: activeIndex === i ? 1 : 0,
                      marginTop: activeIndex === i ? "4px" : "0px",
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right column: Phone mockup aligned with content */}
            <div className="hidden lg:flex w-[300px] shrink-0 items-center justify-center">
              <div className="relative w-full max-h-[70vh] rounded-[8px] overflow-hidden">
                {features.map((feature, i) => (
                  <img
                    key={i}
                    src={feature.image}
                    alt={`${feature.title} screen`}
                    className={`w-full h-auto rounded-[8px] transition-opacity duration-700 ease-in-out ${i === 0 ? "relative" : "absolute inset-0"}`}
                    style={{ opacity: activeIndex === i ? 1 : 0 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
