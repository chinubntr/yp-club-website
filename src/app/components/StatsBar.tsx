import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { value: "$12M+", label: "Deals Facilitated" },
  { value: "48+", label: "Private Events Yearly" },
  { value: "30+", label: "Industries Represented" },
];

export function StatsBar() {
  return (
    <section className="bg-[#1a1414] border-t border-b border-[rgba(255,255,255,0.1)]" aria-label="Key statistics: over 12 million in deals facilitated, 48 plus private events yearly, 30 plus industries represented">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center py-6 md:py-8 px-6">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} direction="up" delay={i * 0.15}>
            <div className="flex items-center">
              <div className="flex flex-col items-center px-12 py-4 md:py-0">
                <span className="font-['Cormorant_Garamond',serif] font-light text-[36px] leading-[36px] text-[#fcfcfc] text-center block" role="presentation">
                  {stat.value}
                </span>
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[2px] uppercase text-[#878787] text-center mt-1.5">
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-10 bg-[rgba(255,255,255,0.1)]" />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
