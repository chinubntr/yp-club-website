import { Link } from "react-router";
import { ScrollReveal } from "../components/ScrollReveal";
import { SubPageNav, PageFooter } from "../components/PageLayout";
import { SEOHead } from "../components/SEOHead";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#1a1414] text-[#fcfcfc] overflow-x-hidden">
      <SEOHead
        title="Page Not Found | YP Club"
        description="The page you are looking for does not exist. Return to YP Club, Dubai's private members club for founders."
      />
      <SubPageNav />

      <main id="main-content">
      <section
        className="flex flex-col items-center justify-center text-center px-6 py-32 md:py-48"
        aria-labelledby="not-found-heading"
      >
        <ScrollReveal direction="up">
          <p className="font-['Cormorant_Garamond',serif] font-light text-[100px] md:text-[160px] leading-[1] text-[rgba(129,106,84,0.15)] mb-4">
            404
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h1
            id="not-found-heading"
            className="font-['Cormorant_Garamond',serif] font-light text-[32px] md:text-[44px] leading-[1.1] text-[#fcfcfc] mb-2"
          >
            Page Not Found.
          </h1>
          <p className="font-['Cormorant_Garamond',serif] italic font-light text-[32px] md:text-[44px] leading-[1.1] text-[#816a54] mb-6">
            The Room Moved.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[440px] mx-auto mb-10">
            The page you are looking for does not exist or has been moved.
            Navigate back to find what you need.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/"
              className="flex items-center justify-center h-[48px] px-10 bg-[#1e4d57] border border-[#1e4d57] hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(30,77,87,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm"
            >
              <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#fcfcfc]">
                Back to Home
              </span>
            </Link>
            <Link
              to="/waitlist"
              className="flex items-center justify-center h-[48px] px-10 border border-[rgba(255,255,255,0.15)] hover:border-[#A08567] transition-all hover:shadow-[0_0_20px_rgba(129,106,84,0.1)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm"
            >
              <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#8d8d8d]">
                Join the Waitlist
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {[
              { label: "About", href: "/about" },
              { label: "FAQ", href: "/faq" },
              { label: "Brochure", href: "/brochure" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] tracking-[1px] text-[#878787] hover:text-[#8d8d8d] transition-colors outline-none focus-visible:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>
      </main>

      <PageFooter />
    </div>
  );
}