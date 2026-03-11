import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "../components/ScrollReveal";
import {
  SubPageNavInvite,
  PageFooter,
} from "../components/PageLayout";
import svgPaths from "../../imports/svg-lpuob5idwt";
import {
  SEOHead,
  breadcrumbSchema,
} from "../components/SEOHead";

const steps = [
  {
    num: "01",
    title: "Download the App",
    desc: "Your application starts in the YP Club app. Complete your founder profile, your company, your revenue stage, your ambitions. Takes under five minutes.",
    badge: null,
  },
  {
    num: "02",
    title: "Priority Review",
    desc: "Your application is reviewed ahead of the standard queue. We\u2019re looking for alignment, ambition, and intent. Because you\u2019ve been referred, we already have a strong signal.",
    badge: "Referred \u2014 ahead of queue",
  },
  {
    num: "03",
    title: "Interview & Decision",
    desc: "A short conversation with our memberships team. If approved, you receive immediate access to the PioneerOS, your first curated dinner match, and a personal onboarding call.",
    badge: null,
  },
];

const joiningPoints = [
  "Curated dinners matched by AI to the founders you actually need to meet",
  "The Impact Index: See the financial value your network generates in real time",
  "The Vault: Private founder education built around the six pillars of scale",
  "Cortado & Culture: Informal founder meetups designed around energy, not agenda",
];

const memberTestimonials = [
  {
    tag: "$5M raised \u00B7 a16z backed",
    story:
      "Mohammed built the world\u2019s first agentic AI solution for real estate and raised $5 million from Andreessen Horowitz, the region\u2019s first. He did it as a YP Club member.",
    quote:
      "The region\u2019s first a16z-backed founder. In the room with you.",
    name: "Mohammed Mohammed",
    company: "Smart Bricks",
  },
  {
    tag: "Multi-six-figure contract",
    story:
      "Sonny and Nathan Priestley, $150M+ in total across businesses, inside YP Club. Together they built the first AI solution for real estate project management. One introduction. They're going international.",
    quote:
      "The introduction. One product changing an entire industry.",
    name: "Sonny Sangha & Nathan Priestley",
    company: "Papafam \u00B7 Priestley Group",
  },
  {
    tag: "International expansion",
    story:
      "James started as a YP Club team member before backing himself to found Particle Execution. He is a huge advocate. His first contract came through the very network he helped build, now expanding to Asia and Africa globally.",
    quote:
      "From employee to founder to international contract.",
    name: "James Augustin",
    company: "Particle Execution",
  },
];

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-[#1a1414] text-[#fcfcfc] overflow-x-hidden">
      <SEOHead
        title="You've Been Referred | YP Club | Exclusive Founder Network Dubai"
        description="A YP Club member has invited you. Apply with priority review to join Dubai's private members club for founders scaling AED 1M-30M. 1-in-5 approved."
        canonical="https://ypclub.com/referral"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", url: "https://ypclub.com/" },
            {
              name: "Referral",
              url: "https://ypclub.com/referral",
            },
          ]),
        ]}
      />
      <SubPageNavInvite />

      <main id="main-content">
        {/* Hero */}
        <section
          className="py-16 md:py-24 px-6 text-center"
          aria-labelledby="referral-heading"
        >
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2.5 bg-[rgba(129,106,84,0.08)] border border-[rgba(129,106,84,0.25)] px-6 py-2 mb-8">
              <div className="size-[6px] rounded-[3px] bg-[#816a54]" />
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[2px] uppercase text-[#A08567]">
                A YP Club Member Has Invited You
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1
              id="referral-heading"
              className="font-['Cormorant_Garamond',serif] font-light text-[36px] sm:text-[44px] md:text-[56px] leading-[1.06] tracking-[-0.72px] text-[#fcfcfc]"
            >
              Someone in the Room
            </h1>
            <p className="font-['Cormorant_Garamond',serif] italic font-light text-[36px] sm:text-[44px] md:text-[56px] leading-[1.06] tracking-[-0.72px] text-[#A08567]">
              Thinks You Belong in It.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[542px] mx-auto mt-6">
              YP Club members only refer founders they'd
              personally vouch for. You are not receiving a
              marketing email. You are receiving a personal
              endorsement from someone already inside.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-8 h-px bg-[#816a54]" />
              <p className="font-['Cormorant_Garamond',serif] italic font-light text-[16px] leading-[24px] text-[#fcfcfc]">
                For referrals to be valid, they must be done
                through WhatsApp
              </p>
              <div className="w-8 h-px bg-[#816a54]" />
            </div>
          </ScrollReveal>
        </section>

        <div className="w-full h-px bg-[rgba(255,255,255,0.1)]" />

        {/* Process + App Card */}
        <section
          className="py-16 md:py-24 px-6"
          aria-labelledby="referral-process-heading"
        >
          <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Steps */}
            <div className="flex-1 min-w-0">
              <ScrollReveal direction="up">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567] mb-2">
                  What Happens Next
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2
                  id="referral-process-heading"
                  className="font-['Cormorant_Garamond',serif] font-light text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.44px] text-[#fcfcfc]"
                >
                  Three steps.
                </h2>
                <p className="font-['Cormorant_Garamond',serif] italic font-light text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.44px] text-[#A08567]">
                  One room that changes everything.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.15}>
                <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[472px] mt-6 mb-10">
                  Because you've been referred, your application
                  goes to the front of the review queue. This is
                  not a formality, it is how we protect every
                  room, every introduction, and every
                  relationship inside the network.
                </p>
              </ScrollReveal>

              <StaggerContainer
                className="flex flex-col"
                staggerDelay={0.12}
              >
                {steps.map((step) => (
                  <StaggerItem key={step.num}>
                    <div className="border-b border-[rgba(252,252,252,0.07)] py-6 flex gap-6 items-start">
                      <span className="font-['Cormorant_Garamond',serif] font-light text-[36px] leading-[36px] text-[#A08567] shrink-0 w-[40px]" aria-hidden="true">
                        {step.num}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <p className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[1.1px] uppercase text-[#fcfcfc]">
                            {step.title}
                          </p>
                          {step.badge && (
                            <div className="bg-[rgba(129,106,84,0.1)] border border-[rgba(129,106,84,0.25)] px-3 py-1.5">
                              <span className="font-['Cormorant_Garamond',serif] italic text-[12px] leading-[18px] text-[#A08567]">
                                {step.badge}
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[540px]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Referral notice */}
              <ScrollReveal direction="up" delay={0.3}>
                <div className="bg-[rgba(252,252,252,0.02)] border-l-2 border-[#1e4d57] border-t border-r border-b border-t-[rgba(255,255,255,0.1)] border-r-[rgba(255,255,255,0.1)] border-b-[rgba(255,255,255,0.1)] p-6 mt-8">
                  <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                    Referral invitations are not open-ended.
                    Membership cohorts are reviewed and approved
                    on a rolling basis, available spots are
                    finite. Your invitation is live now.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right column */}
            <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-6">
              {/* App card */}
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-[rgba(252,252,252,0.02)] rounded-[4px] border border-[rgba(252,252,252,0.08)] overflow-hidden">
                  <div className="bg-[#1e4d57] p-8 relative overflow-hidden">
                    <div className="absolute top-[-40px] right-[-20px] size-[160px] rounded-full bg-[rgba(252,252,252,0.04)]" />
                    <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[rgba(252,252,252,0.6)] mb-4 relative z-10">
                      Start Here
                    </p>
                    <p className="font-['Cormorant_Garamond',serif] font-light text-[26px] md:text-[28px] leading-[33px] text-[#fcfcfc] relative z-10">
                      The app is where
                    </p>
                    <p className="font-['Cormorant_Garamond',serif] italic font-light text-[26px] md:text-[28px] leading-[33px] text-[#fcfcfc] relative z-10">
                      your application begins.
                    </p>
                    <p className="font-['Inter',sans-serif] font-light text-[12px] leading-[20.4px] text-[rgba(252,252,252,0.75)] mt-3 max-w-[305px] relative z-10">
                      Download the YP Club app and complete your
                      founder profile in under five minutes.
                      Your referral is already attached to your
                      application.
                    </p>
                  </div>
                  <div className="p-8">
                    {/* Notice */}
                    <div className="bg-[rgba(129,106,84,0.08)] border border-[rgba(129,106,84,0.25)] p-4 flex gap-3 items-start mb-6">
                      <div className="size-[6px] rounded-[3px] bg-[#816a54] mt-1.5 shrink-0" />
                      <p className="font-['Cormorant_Garamond',serif] italic text-[13px] leading-[19.5px] text-[#A08567]">
                        Your referral puts you ahead of the
                        standard review queue. Don't leave it
                        sitting.
                      </p>
                    </div>

                    {/* Store buttons */}
                    <div className="flex flex-col gap-3 mb-6">
                      {[
                        {
                          icon: svgPaths.p276a5a00,
                          sub: "Download on the",
                          main: "App Store",
                        },
                        {
                          icon: svgPaths.p18ce4000,
                          sub: "Get it on",
                          main: "Google Play",
                        },
                      ].map((store) => (
                        <a
                          key={store.main}
                          href="#"
                          className="h-[66px] bg-[rgba(252,252,252,0.03)] rounded-[2px] border border-[rgba(252,252,252,0.12)] flex items-center gap-4 px-5 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                        >
                          <svg
                            className="size-[26px] shrink-0"
                            viewBox="0 0 26 26"
                            fill="none"
                          >
                            <path
                              d={store.icon}
                              fill="#FCFCFC"
                            />
                          </svg>
                          <div>
                            <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] tracking-[0.72px] uppercase text-[rgba(252,252,252,0.6)]">
                              {store.sub}
                            </p>
                            <p className="font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] tracking-[0.3px] text-[#fcfcfc]">
                              {store.main}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Contact */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex-1 h-px bg-[rgba(255,255,255,0.1)]" />
                      <span className="font-['Inter',sans-serif] font-medium text-[12px] tracking-[2px] uppercase text-[#878787]">
                        questions?
                      </span>
                      <div className="flex-1 h-px bg-[rgba(255,255,255,0.1)]" />
                    </div>
                    <div className="text-center">
                      <p className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] text-[#878787]">
                        Reach out directly at
                      </p>
                      <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] text-[#8d8d8d]">
                        members@ypclub.com
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* What you're joining */}
              <ScrollReveal direction="right" delay={0.3}>
                <div className="bg-[rgba(252,252,252,0.02)] rounded-[4px] border border-[rgba(255,255,255,0.1)] p-7">
                  <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[2px] uppercase text-[#878787] mb-4">
                    What You're Joining
                  </p>
                  <div className="flex flex-col gap-3">
                    {joiningPoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3"
                      >
                        <div className="size-[4px] rounded-[2px] bg-[#1e4d57] mt-1.5 shrink-0" />
                        <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="py-16 md:py-24 px-6"
          aria-labelledby="referral-testimonials-heading"
        >
          <div className="max-w-[1100px] mx-auto">
            <ScrollReveal direction="up">
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567] mb-2">
                From Inside the Network
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2
                id="referral-testimonials-heading"
                className="font-['Cormorant_Garamond',serif] font-light text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1] text-[#fcfcfc]"
              >
                The room has already
              </h2>
              <p className="font-['Cormorant_Garamond',serif] italic font-light text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1] text-[#A08567] mb-12">
                changed everything for them.
              </p>
            </ScrollReveal>

            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-3 gap-px"
              staggerDelay={0.15}
            >
              {memberTestimonials.map((t) => (
                <StaggerItem key={t.name}>
                  <div
                    className="bg-[#1a1414] border-t border-[rgba(255,255,255,0.1)] p-8 h-full hover:bg-[rgba(129,106,84,0.04)] transition-colors duration-400"
                  >
                    <div className="inline-block bg-[rgba(129,106,84,0.1)] border border-[rgba(129,106,84,0.25)] px-2.5 py-1.5 mb-4">
                      <span className="font-['Cormorant_Garamond',serif] italic text-[12px] leading-[18px] text-[#A08567]">
                        {t.tag}
                      </span>
                    </div>
                    <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] mb-4">
                      {t.story}
                    </p>
                    <div className="border-t border-[rgba(255,255,255,0.07)] pt-4 mt-auto">
                      <p className="font-['Cormorant_Garamond',serif] italic font-light text-[14px] leading-[20px] text-[#A08567] mb-3">
                        {t.quote}
                      </p>
                      <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] text-[#fcfcfc]">
                        {t.name}
                      </p>
                      <p className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] tracking-[0.9px] uppercase text-[#878787]">
                        {t.company}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Bottom banner */}
        <section className="py-16 px-6 text-center">
          <ScrollReveal direction="up">
            <div
              className="size-3 rounded-full border border-[rgba(252,252,252,0.1)] mx-auto mb-6"
            />
            <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[520px] mx-auto">
              You've been put forward by someone already in the
              room. That means something. Your application is
              waiting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <a
                href="#"
                className="h-[48px] bg-[rgba(252,252,252,0.03)] rounded-[2px] border border-[rgba(252,252,252,0.12)] flex items-center gap-4 px-6 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <svg
                  className="size-[20px]"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path d={svgPaths.p2ac3ab00} fill="#FCFCFC" />
                </svg>
                <span className="font-['Inter',sans-serif] font-medium text-[12px] text-[#fcfcfc]">
                  App Store
                </span>
              </a>
              <a
                href="#"
                className="h-[48px] bg-[rgba(252,252,252,0.03)] rounded-[2px] border border-[rgba(252,252,252,0.12)] flex items-center gap-4 px-6 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <svg
                  className="size-[20px]"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path d={svgPaths.p2a3b07a0} fill="#FCFCFC" />
                </svg>
                <span className="font-['Inter',sans-serif] font-medium text-[12px] text-[#fcfcfc]">
                  Google Play
                </span>
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}