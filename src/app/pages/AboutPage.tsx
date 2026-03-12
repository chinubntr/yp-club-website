import { Link } from "react-router";
import { ScrollReveal } from "../components/ScrollReveal";
import { SubPageNav, PageFooter, QuoteSection } from "../components/PageLayout";
import {
  SEOHead,
  breadcrumbSchema,
} from "../components/SEOHead";

const pioneerFeatures = [
  {
    name: "Impact Index",
    desc: "Tracks and attributes every introduction, referral, and deal to your profile. You can see, in real numbers, exactly what your membership is worth.",
  },
  {
    name: "Curated Dinners",
    desc: "AI-matched gatherings of six founders based on industry, goals, and who you actually need to meet. Seating is confirmed two days in advance.",
  },
  {
    name: "The Vault",
    desc: "A private educational library structured across six pillars: Market and Capital, Brand and Identity, Technology and Innovation, People and Operations, Pioneer Performance, and Scaling and Growth.",
  },
  {
    name: "YP Concierge",
    desc: "A 24/7 travel desk with up to 50% off Emirates and Etihad business class, luxury hotel upgrades, and VIP arrival treatment.",
  },
  {
    name: "YP Nodes",
    desc: "Pop-up activations at international conferences like LEAP and GITEX, so your network follows you wherever you go.",
  },
];

const memberOutcomes = [
  {
    name: "Mohammed Mohammed, Smart Bricks",
    text: "Mohammed built the world's first agentic AI solution for real estate and raised $5 million from Andreessen Horowitz. He was the first founder in the MENA region to secure funding at this stage from a16z. He is a YP Club member.",
  },
  {
    name: "Sonny Sangha & Nathan Priestley, Papafam / Priestley Group",
    text: "Sonny and Nathan met at a YP Club dinner. They were not looking for a co-founder. They found one. Together they built the first AI solution for real estate project management, backed by $150M+ in real estate developments. Now going international.",
  },
  {
    name: "James Augustin, Particle Execution",
    text: "James started as a YP Club team member before backing himself to found Particle Execution. His first major contract, a multi-six-figure deal with Untold Festival for AI-powered ticketing, came through the very network he helped build. Now expanding internationally.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1414] text-[#fcfcfc] overflow-x-hidden">
      <SEOHead
        title="About YP Club · Dubai's Private Founder Community"
        description="YP Club is a private, application-only founder community in Dubai. Founded in 2022. Powered by PioneerOS. For founders who are serious about what comes next."
        canonical="https://ypclub.com/about"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", url: "https://ypclub.com/" },
            { name: "About", url: "https://ypclub.com/about" },
          ]),
        ]}
      />
      <SubPageNav />

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

      {/* Section 1: What YP Club Is */}
      <section className="py-16 md:py-24 px-6" aria-labelledby="about-content-heading">
        <div className="max-w-[720px] mx-auto lg:ml-[max(calc(50%-360px),16%)]">
          <ScrollReveal direction="up">
            <h2 id="about-content-heading" className="sr-only">About YP Club, Dubai's Private Founder Network</h2>
            <p className="font-['Inter',sans-serif] font-light text-[15px] md:text-[16px] leading-[28px] text-[#fcfcfc] mb-8">
              YP Club is a private, application-only founder community based in Dubai. Founded in 2022 by Cameron-Lee Roberts, the club is built exclusively for founders who are serious about what comes next.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] mb-6">
              Membership is selective. Every applicant completes an interview. Every member is vetted to ensure the room stays sharp, generous, and outcome-focused. YP Club is not a networking group. It is a curated environment where founders access peer-to-peer insight, structured introductions, and the kind of conversations that do not happen at conferences.
            </p>
          </ScrollReveal>
          {/* LLM Citation-ready paragraph */}
          <ScrollReveal direction="up" delay={0.12}>
            <div className="bg-[rgba(129,106,84,0.06)] border-l-2 border-[#816a54] pl-6 pr-4 py-4 mb-12">
              <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                YP Club is a private founder community in Dubai, UAE. It was founded in 2022 by Cameron-Lee Roberts, a Qualified Chartered Accountant (ICAS) who previously worked at EY-Parthenon and Alvarez &amp; Marsal in Distressed M&amp;A and Divestitures. The club operates a selective, application-only membership for founders building businesses in the UAE. At the core of the membership is PioneerOS, a proprietary digital operating system that includes AI-curated dinner matching, the Impact Index (which tracks the financial value of introductions and deals within the network), The Vault (a private founder education library), YP Concierge (a travel and lifestyle desk), and YP Nodes (global activations at conferences). Members have raised $5M from Andreessen Horowitz, built AI companies now expanding internationally, and secured multi-six-figure contracts through introductions made inside the network. YP Club has operated for four years across Dubai, hosting hundreds of private events and facilitating connections that have led to partnerships, funding rounds, and market expansions.
              </p>
            </div>
          </ScrollReveal>

          {/* PioneerOS section */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="flex items-center gap-3 mb-3">
              <div className="size-[6px] rounded-[3px] bg-[#1e4d57]" />
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567]">
                The Platform
              </p>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] font-light text-[28px] md:text-[32px] leading-[39.6px] tracking-[-0.36px] text-[#fcfcfc] mb-6">
              PioneerOS
            </h2>
            <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] mb-8">
              At the core of the membership is PioneerOS, a structured operating system designed to help founders move faster on the decisions that matter. Through curated events, private introductions, and a members-only digital platform, PioneerOS gives founders a rhythm for growth that operates alongside their business, not on top of it.
            </p>
          </ScrollReveal>

          {/* PioneerOS features */}
          <div className="flex flex-col gap-6 mb-12">
            {pioneerFeatures.map((feature, i) => (
              <ScrollReveal key={feature.name} direction="up" delay={0.18 + i * 0.04}>
                <div className="border-l border-[rgba(255,255,255,0.1)] pl-6">
                  <p className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] tracking-[1px] text-[#fcfcfc] mb-2">
                    {feature.name}
                  </p>
                  <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#8d8d8d]">
                    {feature.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="w-full h-px bg-[rgba(255,255,255,0.1)] mb-12" />

          {/* Member Outcomes */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex items-center gap-3 mb-3">
              <div className="size-[6px] rounded-[3px] bg-[#1e4d57]" />
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567]">
                Member Outcomes
              </p>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] font-light text-[28px] md:text-[32px] leading-[39.6px] tracking-[-0.36px] text-[#fcfcfc] mb-8">
              What Our Members Have Built
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-8 mb-12">
            {memberOutcomes.map((outcome, i) => (
              <ScrollReveal key={outcome.name} direction="up" delay={0.22 + i * 0.04}>
                <div className="bg-[rgba(33,25,25,0.6)] border border-[rgba(255,255,255,0.06)] p-6">
                  <p className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] tracking-[1px] text-[#A08567] mb-3">
                    {outcome.name}
                  </p>
                  <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                    {outcome.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

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
        attribution={<>YP Club &middot; The room where serious founders scale.</>}
      />
      </main>
      <PageFooter activeLink="About" />
    </div>
  );
}
