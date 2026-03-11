import { useState, useRef, useEffect } from "react";
import { Play, X } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { SubPageNav, PageFooter, QuoteSection } from "../components/PageLayout";
import svgPaths from "../../imports/svg-c6t0uk55w3";
import videoThumb from "figma:asset/a2b742535de03f1c1c437bf3e7386d96e05c6a3c.png";
import { SEOHead, breadcrumbSchema } from "../components/SEOHead";

const processSteps = [
  {
    num: "01",
    title: "Download the YP Club App",
    desc: "Your application starts in the app. Download it on iOS or Android and complete your founder profile, your company, your ambitions and why you\u2019re a fit.",
  },
  {
    num: "02",
    title: "Application Review",
    desc: "We review every application personally. We\u2019re looking for alignment, ambition, and intent, not a pitch deck. This typically takes 3\u20135 business days.",
  },
  {
    num: "03",
    title: "Founder Interview",
    desc: "If your application progresses, you\u2019ll be invited to a short interview with our memberships team. This is not a formality, it is how we protect every room, every introduction, and every relationship inside the network.",
  },
  {
    num: "04",
    title: "Decision & Onboarding",
    desc: "Approved founders receive access to the PioneerOS, their first curated dinner match, and a personal onboarding call. You\u2019ll understand immediately why the standard matters.",
  },
];

export default function WaitlistPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap + Escape for video modal
  useEffect(() => {
    if (!videoOpen) return;
    document.body.style.overflow = "hidden";
    // Focus close button when modal opens
    const timer = setTimeout(() => closeButtonRef.current?.focus(), 50);
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [videoOpen]);

  return (
    <div className="min-h-screen bg-[#1a1414] text-[#fcfcfc] overflow-x-hidden">
      <SEOHead
        title="Join the Waitlist | YP Club | Private Business Club Dubai for Founders"
        description="Apply to join YP Club, Dubai's private members club for founders scaling from AED 1M to AED 30M. 1-in-5 approved. Download the app and apply in under five minutes."
        canonical="https://ypclub.com/waitlist"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", url: "https://ypclub.com/" },
            { name: "Waitlist", url: "https://ypclub.com/waitlist" },
          ]),
        ]}
      />
      <SubPageNav />

      <main id="main-content">
      {/* Hero */}
      <section
        className="relative py-16 md:py-24 px-6 overflow-hidden"
        aria-labelledby="waitlist-heading"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(30,77,87,0.12) 0%, transparent 60%), linear-gradient(90deg, #1a1414, #1a1414)",
        }}
      >
        <div className="max-w-[860px] mx-auto text-center">
          <ScrollReveal direction="up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#816a54]" />
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567]">
                For the Pioneers
              </p>
              <div className="w-8 h-px bg-[#816a54]" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 id="waitlist-heading" className="font-['Cormorant_Garamond',serif] font-light text-[36px] sm:text-[44px] md:text-[56px] leading-[1.06] tracking-[-0.72px] text-[#fcfcfc]">
              Before You Apply,
              <span className="block italic text-[#A08567]">
                Watch This.
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[501px] mx-auto mt-6">
              Two minutes. Everything you need to know about what YP Club is,
              who it's for, and why the room matters.
            </p>
          </ScrollReveal>
        </div>

        {/* Video embed */}
        <ScrollReveal
          direction="up"
          delay={0.2}
          className="max-w-[860px] mx-auto mt-10"
        >
          <div className="relative bg-[rgba(252,252,252,0.02)] rounded-[4px] border border-[rgba(255,255,255,0.1)] overflow-hidden aspect-video shadow-[0_40px_120px_rgba(0,0,0,0.6),0_0_0_1px_rgba(30,77,87,0.15)]">
            <div
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* Thumbnail image */}
              <img
                src={videoThumb}
                alt="YP Club Pioneer Operating System introduction"
                className="absolute inset-0 size-full object-cover"
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-[rgba(26,20,20,0.35)]" />

              {/* Label badge */}
              <div className="absolute top-5 left-5 bg-[rgba(129,106,84,0.15)] border border-[rgba(129,106,84,0.3)] px-4 py-1.5 backdrop-blur-sm">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[2px] uppercase text-[#A08567]">
                  For the Pioneers
                </p>
              </div>

              {/* Play button */}
              <button
                onClick={() => setVideoOpen(true)}
                className="relative z-10 size-[72px] rounded-full bg-[rgba(30,77,87,0.9)] border border-[rgba(30,77,87,0.5)] flex items-center justify-center pl-1 outline-none focus:ring-2 focus:ring-[#A08567] hover:scale-110 active:scale-95 transition-transform"
                aria-label="Play introduction video"
              >
                <Play size={24} fill="#fcfcfc" className="text-[#fcfcfc]" />
              </button>

              <p className="relative z-10 font-['Cormorant_Garamond',serif] italic text-[13px] leading-[19.5px] tracking-[0.65px] text-[rgba(252,252,252,0.8)] mt-6">
                Introducing the Pioneer Operating System
              </p>

              {/* Duration badge */}
              <div className="absolute bottom-5 right-5 z-10 bg-[rgba(26,20,20,0.7)] px-2.5 py-1 backdrop-blur-sm">
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.35px] text-[#878787]">
                  2:14
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Video modal overlay */}
        {videoOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
            className="fixed inset-0 z-[100] bg-[rgba(26,20,20,0.95)] flex items-center justify-center p-6"
            onClick={() => setVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-[860px] aspect-video bg-[#1a1414] border border-[rgba(255,255,255,0.1)] rounded-[4px] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                onClick={() => setVideoOpen(false)}
                className="absolute top-4 right-4 text-[#8d8d8d] hover:text-[#fcfcfc] transition-colors z-10 outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm p-1"
                aria-label="Close video"
              >
                <X size={24} />
              </button>
              <div className="text-center px-8">
                <p className="font-['Cormorant_Garamond',serif] font-light text-[24px] md:text-[32px] leading-[1.2] text-[#fcfcfc] mb-2">
                  Video coming soon.
                </p>
                <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                  The introduction video is being produced. Check back shortly.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-col items-center gap-2 mt-12">
            <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] tracking-[3px] uppercase text-[#878787]">
              How to apply
            </p>
            <div
              className="w-px h-[40px] bg-gradient-to-b from-[#1e4d57] to-transparent opacity-[0.78]"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Process + App Card */}
      <section className="py-16 md:py-24 px-6" aria-labelledby="process-heading">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Process steps */}
          <div className="flex-1 min-w-0">
            <ScrollReveal direction="up">
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567] mb-2">
                The Process
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 id="process-heading" className="font-['Cormorant_Garamond',serif] font-light text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.48px] text-[#fcfcfc]">
                Four Steps.
                <span className="block italic text-[#A08567] mb-10">
                  One Room That Changes Everything.
                </span>
              </h2>
            </ScrollReveal>

            <StaggerContainer className="flex flex-col" staggerDelay={0.12}>
              {processSteps.map((step) => (
                <StaggerItem key={step.num}>
                  <div className="border-b border-[rgba(255,255,255,0.1)] py-6 flex gap-6 items-start">
                    <span className="font-['Cormorant_Garamond',serif] font-light text-[36px] leading-[36px] text-[#A08567] shrink-0 w-[40px]" aria-hidden="true">
                      {step.num}
                    </span>
                    <div className="flex-1">
                      <p className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[1.1px] uppercase text-[#fcfcfc] mb-2">
                        {step.title}
                      </p>
                      <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[500px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* App download card */}
          <ScrollReveal
            direction="right"
            delay={0.2}
            className="w-full lg:w-[420px] shrink-0"
          >
            <div className="bg-[rgba(252,252,252,0.02)] rounded-[4px] border border-[rgba(255,255,255,0.1)] overflow-hidden">
              {/* Teal header */}
              <div className="bg-[#1e4d57] p-8 relative overflow-hidden">
                <div className="absolute top-[-40px] right-[-20px] size-[160px] rounded-full bg-[rgba(252,252,252,0.04)]" />
                <div className="absolute bottom-[-20px] left-[-20px] size-[100px] rounded-full bg-[rgba(252,252,252,0.03)]" />
                <p className="font-['Inter',sans-serif] font-medium text-[11px] md:text-[12px] leading-[18px] tracking-[3px] uppercase text-[#fcfcfc] mb-4 relative z-10">
                  Start Your Application
                </p>
                <h3 className="font-['Cormorant_Garamond',serif] font-light text-[26px] md:text-[28px] leading-[35.2px] text-[#fcfcfc] relative z-10">
                  The app is where
                  <span className="block font-['Cormorant_Garamond',serif] italic font-light text-[26px] md:text-[28px] leading-[35.2px] text-[#fcfcfc] relative z-10">
                    it begins.
                  </span>
                </h3>
                <p className="font-['Inter',sans-serif] font-light text-[12px] leading-[20.4px] text-[rgba(252,252,252,0.75)] mt-3 max-w-[322px] relative z-10">
                  Download the YP Club app and complete your application
                  directly from your phone. Applications are reviewed on a
                  rolling basis.
                </p>
              </div>

              {/* Body */}
              <div className="p-8">
                {/* Notice */}
                <div className="bg-[rgba(129,106,84,0.08)] border border-[rgba(129,106,84,0.25)] p-4 flex gap-3 items-start mb-8">
                  <div className="size-[6px] rounded-[3px] bg-[#816a54] mt-1.5 shrink-0" />
                  <p className="font-['Cormorant_Garamond',serif] italic text-[13px] leading-[19.5px] text-[#A08567]">
                    We approve 1 in 5 applications. Standards exist to protect
                    the room.
                  </p>
                </div>

                {/* Store buttons */}
                <div className="flex flex-col gap-3 mb-8">
                  <a
                    href="#"
                    className="h-[66px] bg-[rgba(252,252,252,0.03)] rounded-[2px] border border-[rgba(255,255,255,0.1)] flex items-center gap-4 px-5 outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] hover:scale-[1.02] active:scale-[0.98] transition-transform"
                    aria-label="Download YP Club on the App Store"
                  >
                    <svg
                      className="size-[24px] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d={svgPaths.p2d7ae380} fill="#FCFCFC" />
                    </svg>
                    <div>
                      <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] tracking-[0.72px] uppercase text-[#878787]">
                        Download on the
                      </p>
                      <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[21px] tracking-[0.28px] text-[#fcfcfc]">
                        App Store
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="h-[66px] bg-[rgba(252,252,252,0.03)] rounded-[2px] border border-[rgba(255,255,255,0.1)] flex items-center gap-4 px-5 outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] hover:scale-[1.02] active:scale-[0.98] transition-transform"
                    aria-label="Get YP Club on Google Play"
                  >
                    <svg
                      className="size-[24px] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d={svgPaths.p3d619b80} fill="#FCFCFC" />
                    </svg>
                    <div>
                      <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] tracking-[0.72px] uppercase text-[#878787]">
                        Get it on
                      </p>
                      <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[21px] tracking-[0.28px] text-[#fcfcfc]">
                        Google Play
                      </p>
                    </div>
                  </a>
                </div>

                {/* Divider + contact */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 h-px bg-[rgba(255,255,255,0.1)]" />
                  <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[2px] uppercase text-[#878787]">
                    questions?
                  </span>
                  <div className="flex-1 h-px bg-[rgba(255,255,255,0.1)]" />
                </div>
                <div className="text-center">
                  <p className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] text-[#878787]">
                    Questions before you apply?
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] text-[#8d8d8d]">
                    Email us at members@ypclub.com
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <QuoteSection
        quote="The biggest risk a founder takes is not a bad hire or a missed market. It is spending years in the wrong room."
        attribution="The World's First PioneerOS"
      />
      </main>
      <PageFooter />
    </div>
  );
}