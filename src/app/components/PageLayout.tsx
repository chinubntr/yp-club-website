import { Link } from "react-router";
import { useState, useEffect } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";
import svgPaths from "../../imports/svg-l31yrew5ki";
import { ScrollReveal } from "./ScrollReveal";
import { useFocusTrap } from "./useFocusTrap";

function YPClubLogoSVG({ mobile = false }: { mobile?: boolean }) {
  return (
    <Link to="/" className="block outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm" aria-label="YP Club, back to homepage">
      <div
        className={
          mobile
            ? "relative h-[14px] w-[94px]"
            : "relative h-[14px] w-[94px] md:h-[18px] md:w-[120px]"
        }
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="xMinYMid meet"
          viewBox="0 0 282.478 43.3486"
          aria-hidden="true"
        >
          <g clipPath="url(#clip_logo_sub)">
            <path d={svgPaths.p131e0300} fill="#FCFCFC" />
            <path d={svgPaths.p2c90b270} fill="#FCFCFC" />
            <path d={svgPaths.p2ec72600} fill="#FCFCFC" />
            <path d={svgPaths.p32d0f280} fill="#FCFCFC" />
            <path d={svgPaths.p18dfb400} fill="#FCFCFC" />
            <path d={svgPaths.p3f61680} fill="#FCFCFC" />
          </g>
          <defs>
            <clipPath id="clip_logo_sub">
              <rect fill="#FCFCFC" height="43.3486" width="282.478" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Link>
  );
}

const mobileMenuLinks = [
  { label: "Download Brochure", href: "/brochure", primary: false },
  { label: "Join the Waitlist", href: "/waitlist", primary: true },
];

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { containerRef, handleKeyDown } = useFocusTrap(open, onClose);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape from anywhere
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Full-screen backdrop */}
      <div
        className="fixed inset-0 z-40 bg-[rgba(26,20,20,0.6)] md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Menu panel with focus trap */}
      <div
        ref={containerRef}
        id="subpage-mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        onKeyDown={handleKeyDown}
        className="fixed top-[66px] left-0 right-0 z-50 bg-[rgba(26,20,20,0.85)] border-b border-[rgba(255,255,255,0.1)] p-6 flex flex-col gap-3 md:hidden"
        style={{
          WebkitBackdropFilter: "blur(60px) saturate(200%)",
          backdropFilter: "blur(60px) saturate(200%)",
        }}
      >
        {mobileMenuLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={onClose}
            className={`flex items-center justify-center h-[44px] font-['Inter',sans-serif] font-${link.primary ? "semibold" : "medium"} text-[12px] tracking-[1.65px] uppercase transition-colors outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm ${
              link.primary
                ? "bg-[#1e4d57] border border-[#1e4d57] text-[#fcfcfc]"
                : "border border-[rgba(255,255,255,0.1)] text-[#8d8d8d] hover:text-[#fcfcfc] hover:border-[rgba(255,255,255,0.2)]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}

export function SubPageNav({ rightLabel }: { rightLabel?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 h-[66px] flex items-center justify-between px-6 md:px-16 bg-[rgba(26,20,20,0.25)] backdrop-blur-3xl border-b border-[rgba(255,255,255,0.1)]"
      style={{ WebkitBackdropFilter: "blur(40px) saturate(200%)", backdropFilter: "blur(40px) saturate(200%)" }}
      aria-label="Page navigation"
    >
      <YPClubLogoSVG />
      <Link
        to="/"
        className="hidden md:flex items-center gap-2 font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#878787] hover:text-[#8d8d8d] transition-colors outline-none focus-visible:underline"
      >
        <ArrowLeft size={14} />
        {rightLabel || "Back to site"}
      </Link>
      <button
        className="md:hidden text-[#fcfcfc] relative z-[60] outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="subpage-mobile-nav"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}

export function SubPageNavInvite() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 h-[66px] flex items-center justify-between px-6 md:px-16 bg-[rgba(26,20,20,0.25)] backdrop-blur-3xl border-b border-[rgba(255,255,255,0.1)]"
      style={{ WebkitBackdropFilter: "blur(40px) saturate(200%)", backdropFilter: "blur(40px) saturate(200%)" }}
      aria-label="Page navigation"
    >
      <YPClubLogoSVG />
      <span className="hidden md:inline font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#878787]">
        By Invitation Only
      </span>
      <button
        className="md:hidden text-[#fcfcfc] relative z-[60] outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="subpage-mobile-nav"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}

export function PageFooter({ activeLink }: { activeLink?: string }) {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.1)] px-6 md:px-16 py-6 md:h-[80px] flex flex-col md:flex-row items-center justify-between gap-4" role="contentinfo">
      <Link to="/" className="block outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm" aria-label="YP Club, back to homepage">
        <div className="relative h-[12px] w-[80px] md:h-[14px] md:w-[94px]">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="xMinYMid meet"
            viewBox="0 0 282.478 43.3486"
            aria-hidden="true"
          >
            <g clipPath="url(#clip_logo_footer_sub)">
              <path d={svgPaths.p131e0300} fill="#878787" />
              <path d={svgPaths.p2c90b270} fill="#878787" />
              <path d={svgPaths.p2ec72600} fill="#878787" />
              <path d={svgPaths.p32d0f280} fill="#878787" />
              <path d={svgPaths.p18dfb400} fill="#878787" />
              <path d={svgPaths.p3f61680} fill="#878787" />
            </g>
            <defs>
              <clipPath id="clip_logo_footer_sub">
                <rect fill="#878787" height="43.3486" width="282.478" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Link>
      <nav aria-label="Footer navigation" className="flex items-center flex-wrap justify-center gap-4 md:gap-8">
        {[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "FAQ", href: "/faq" },
          { label: "Waitlist", href: "/waitlist" },
          { label: "Brochure", href: "/brochure" },
        ].map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className={`font-['Inter',sans-serif] font-light text-[12px] leading-[18px] tracking-[1.25px] transition-colors outline-none focus-visible:underline ${
              activeLink === link.label
                ? "text-[#fcfcfc]"
                : "text-[#878787] hover:text-[#8d8d8d]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4 md:gap-6">
        <Link
          to="/privacy"
          className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] tracking-[1.25px] text-[#878787] hover:text-[#8d8d8d] transition-colors outline-none focus-visible:underline"
        >
          Privacy Policy
        </Link>
        <Link
          to="/cookies"
          className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] tracking-[1.25px] text-[#878787] hover:text-[#8d8d8d] transition-colors outline-none focus-visible:underline"
        >
          Cookies Policy
        </Link>
        <Link
          to="/club-rules"
          className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] tracking-[1.25px] text-[#878787] hover:text-[#8d8d8d] transition-colors outline-none focus-visible:underline"
        >
          Club Rules
        </Link>
      </div>
    </footer>
  );
}

export function QuoteSection({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <section className="bg-[rgba(26,20,20,0.6)] border-t border-b border-[rgba(255,255,255,0.1)] py-16 md:py-20 px-6" aria-label="Quote">
      <ScrollReveal direction="up">
        <div className="max-w-[640px] mx-auto text-center">
          <span className="font-['Cormorant_Garamond',serif] font-light text-[56px] leading-[43px] text-[rgba(129,106,84,0.2)] mb-4 block" role="presentation" aria-hidden="true">
            {"\u201C"}
          </span>
          <blockquote>
            <p className="font-['Cormorant_Garamond',serif] italic font-light text-[20px] md:text-[24px] leading-[40px] text-[#A08567] mb-8">
              {quote}
            </p>
          </blockquote>
          <div className="w-12 h-px bg-[#816a54] mx-auto mb-4" aria-hidden="true" />
          <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[2px] uppercase text-[#fcfcfc]">
            {attribution}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}