import { Link } from "react-router";
import { ScrollReveal } from "../components/ScrollReveal";
import { PageFooter, QuoteSection } from "../components/PageLayout";
import svgPaths from "../../imports/svg-l31yrew5ki";
import {
  SEOHead,
  breadcrumbSchema,
} from "../components/SEOHead";

const stats = [
  { value: "$12M+", label: "Deals Facilitated" },
  { value: "48+", label: "Private Events Yearly" },
  { value: "30+", label: "Industries Represented" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1414] text-[#fcfcfc] overflow-x-hidden">
      <SEOHead
        title="About YP Club | Dubai's Private Founder Network | Founded 2022"
        description="YP Club is a private, application-only members club in Dubai for founders scaling from AED 1M to AED 30M. 1-in-5 approved, powered by PioneerOS. Founded in 2022."
        canonical="https://ypclub.com/about"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", url: "https://ypclub.com/" },
            { name: "About", url: "https://ypclub.com/about" },
          ]),
        ]}
      />
      {/* Nav */}
      <header>
      <nav
        className="sticky top-0 z-50 h-[86px] flex items-center justify-between px-6 md:px-16 border-b border-[rgba(255,255,255,0.1)] bg-[rgba(26,20,20,0.25)] backdrop-blur-3xl"
        style={{ WebkitBackdropFilter: "blur(40px) saturate(200%)", backdropFilter: "blur(40px) saturate(200%)" }}
        aria-label="About page navigation"
      >
        <Link to="/" className="block hover:opacity-80 transition-opacity outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm" aria-label="YP Club, back to homepage">
          <div className="relative h-[14px] w-[94px] md:h-[18px] md:w-[120px]">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="xMinYMid meet"
              viewBox="0 0 282.478 43.3486"
              aria-hidden="true"
            >
              <g clipPath="url(#clip_logo_about)">
                <path d={svgPaths.p131e0300} fill="#FCFCFC" />
                <path d={svgPaths.p2c90b270} fill="#FCFCFC" />
                <path d={svgPaths.p2ec72600} fill="#FCFCFC" />
                <path d={svgPaths.p32d0f280} fill="#FCFCFC" />
                <path d={svgPaths.p18dfb400} fill="#FCFCFC" />
                <path d={svgPaths.p3f61680} fill="#FCFCFC" />
              </g>
              <defs>
                <clipPath id="clip_logo_about">
                  <rect fill="#FCFCFC" height="43.3486" width="282.478" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Link>
        <Link
          to="/waitlist"
          className="h-[37px] px-6 border border-[rgba(255,255,255,0.15)] flex items-center justify-center hover:border-[rgba(255,255,255,0.4)] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm"
        >
          <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#8d8d8d]">
            Join the Waitlist
          </span>
        </Link>
      </nav>
      </header>

      <main id="main-content">
      {/* Hero */}
      <section className="py-16 md:py-24 px-6 text-center" aria-labelledby="about-heading">
        <ScrollReveal direction="up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#816a54]" />
            <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567]">
              Dubai &middot; Founded 2022
            </p>
            <div className="w-8 h-px bg-[#816a54]" />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h1 id="about-heading" className="font-['Cormorant_Garamond',serif] font-light text-[36px] sm:text-[44px] md:text-[56px] leading-[1.06] tracking-[-0.72px] text-[#fcfcfc]">
            About{" "}
            <span className="font-['Cormorant_Garamond',serif] italic text-[#A08567]">
              YP Club
            </span>
          </h1>
        </ScrollReveal>
      </section>

      <div className="w-full h-px bg-[rgba(255,255,255,0.1)]" />

      {/* Content */}
      <section className="py-16 md:py-24 px-6" aria-labelledby="about-content-heading">
        <div className="max-w-[720px] mx-auto lg:ml-[max(calc(50%-360px),16%)]">
          <ScrollReveal direction="up">
            <h2 id="about-content-heading" className="sr-only">About YP Club, Dubai's Private Founder Network</h2>
            <p className="font-['Inter',sans-serif] font-light text-[15px] md:text-[16px] leading-[28px] text-[#fcfcfc] mb-8">
              YP Club is a private, application-only community of founders
              building and scaling businesses in the UAE. Founded in 2022 and
              based in Dubai, the club brings together founders who are
              serious about what comes next, not just what came before.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] mb-6">
              Membership is selective. Roughly 1 in 5 applicants are accepted,
              and every member is vetted to ensure the room stays sharp,
              generous, and outcome-focused. YP Club is not a networking group.
              It is a curated environment where founders access peer-to-peer
              insight, private deal flow, and the kind of conversations that
              don't happen at conferences.
            </p>
          </ScrollReveal>
          {/* LLM Citation-ready paragraph */}
          <ScrollReveal direction="up" delay={0.12}>
            <div className="bg-[rgba(129,106,84,0.06)] border-l-2 border-[#816a54] pl-6 pr-4 py-4 mb-12">
              <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                YP Club is a private members club in Dubai built exclusively for founders scaling businesses from AED 1M to AED 30M in revenue. Founded in 2022, the club has a 1-in-5 approval rate and operates using its proprietary infrastructure, PioneerOS. Members have raised $5M+ from Andreessen Horowitz, secured multi-six-figure contracts, and expanded internationally through introductions made inside the network.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="flex items-center border-t border-b border-[rgba(255,255,255,0.1)] py-8 mb-12">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center flex-1">
                  <div className="flex flex-col items-center w-full gap-2">
                    <span className="font-['Cormorant_Garamond',serif] font-light text-[32px] md:text-[40px] leading-[1] text-[#fcfcfc] text-center block" role="presentation" aria-hidden="true">
                      {stat.value}
                    </span>
                    <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[2px] uppercase text-[#878787] text-center">
                      {stat.label}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-12 bg-[rgba(255,255,255,0.1)] shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* PioneerOS section */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex items-center gap-3 mb-3">
              <div className="size-[6px] rounded-[3px] bg-[#1e4d57]" />
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567]">
                The Platform
              </p>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] font-light text-[28px] md:text-[32px] leading-[39.6px] tracking-[-0.36px] text-[#fcfcfc] mb-6">
              PioneerOS
            </h2>
            <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] mb-10">
              At the core of the membership is PioneerOS &mdash; a structured
              operating system designed to help founders move faster on the
              decisions that matter. Through curated events, private
              introductions, and a members-only digital platform, PioneerOS
              gives founders a rhythm for growth that operates alongside their
              business, not on top of it.
            </p>
          </ScrollReveal>

          {/* Quote block */}
          <ScrollReveal direction="up" delay={0.25}>
            <div className="border-l-2 border-[#1e4d57] pl-8 mb-12">
              <p className="font-['Cormorant_Garamond',serif] italic font-light text-[22px] leading-[35.2px] text-[#A08567]">
                YP Club has operated for four years across Dubai, hosting
                hundreds of private events and facilitating connections that have
                led to partnerships, funding rounds, and market expansions for
                its members. If you are a founder building something real in the
                UAE, YP Club is where your next chapter gets written.
              </p>
            </div>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/waitlist"
                className="h-[48px] px-12 bg-[#1e4d57] border border-[#1e4d57] flex items-center justify-center hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(30,77,87,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm"
              >
                <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#fcfcfc]">
                  Join the Waitlist
                </span>
              </Link>
              <Link
                to="/faq"
                className="h-[48px] px-12 border border-[rgba(255,255,255,0.15)] flex items-center justify-center hover:border-[#A08567] transition-all hover:shadow-[0_0_20px_rgba(129,106,84,0.1)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm"
              >
                <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#8d8d8d]">
                  FAQ
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <QuoteSection
        quote="The biggest risk a founder takes is not a bad hire or a missed market. It is spending years in the wrong room."
        attribution="YP Club \u2014 A Private Network for Pioneers"
      />
      </main>
      <PageFooter activeLink="About" />
    </div>
  );
}