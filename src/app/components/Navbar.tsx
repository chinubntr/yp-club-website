import { Link } from "react-router";
import svgPaths from "../../imports/svg-l31yrew5ki";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useFocusTrap } from "./useFocusTrap";

function YPClubLogo({ mobile = false }: { mobile?: boolean }) {
  return (
    <Link to="/" className="block outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm" aria-label="YP Club, back to homepage">
      <div
        className={
          mobile
            ? "relative h-[14px] w-[94px]"
            : "relative h-[14px] w-[94px] md:h-[16px] md:w-[108px]"
        }
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="xMinYMid meet"
          viewBox="0 0 282.478 43.3486"
          aria-hidden="true"
        >
          <g clipPath="url(#clip_logo)">
            <path d={svgPaths.p131e0300} fill="#FCFCFC" />
            <path d={svgPaths.p2c90b270} fill="#FCFCFC" />
            <path d={svgPaths.p2ec72600} fill="#FCFCFC" />
            <path d={svgPaths.p32d0f280} fill="#FCFCFC" />
            <path d={svgPaths.p18dfb400} fill="#FCFCFC" />
            <path d={svgPaths.p3f61680} fill="#FCFCFC" />
          </g>
          <defs>
            <clipPath id="clip_logo">
              <rect fill="#FCFCFC" height="43.3486" width="282.478" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Link>
  );
}

export { YPClubLogo };

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMobile = () => setMobileOpen(false);
  const { containerRef, handleKeyDown } = useFocusTrap(mobileOpen, closeMobile);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on Escape even when focus is on the trigger button
  useEffect(() => {
    if (!mobileOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-[70px] md:h-[85px] transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(26,20,20,0.25)] backdrop-blur-3xl backdrop-saturate-200 border-b border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-[rgba(26,20,20,0.95)] to-transparent"
      }`}
      style={
        scrolled
          ? {
              WebkitBackdropFilter: "blur(40px) saturate(200%)",
              backdropFilter: "blur(40px) saturate(200%)",
            }
          : undefined
      }
    >
      {/* Mobile logo */}
      <div className="md:hidden">
        <YPClubLogo mobile />
      </div>
      {/* Desktop logo */}
      <div className="hidden md:block">
        <YPClubLogo />
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          to="/brochure"
          className="flex items-center justify-center h-[38px] px-6 border border-[rgba(255,255,255,0.15)] hover:border-[#8d8d8d] transition-colors rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-[#A08567]"
        >
          <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#8d8d8d]">
            Download Brochure
          </span>
        </Link>
        <Link
          to="/waitlist"
          className="flex items-center justify-center h-[38px] px-6 bg-[#1e4d57] border border-[#1e4d57] hover:opacity-90 transition-opacity rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-[#A08567]"
        >
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#fcfcfc]">
            Join the Waitlist
          </span>
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-[#fcfcfc] relative z-[60] outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav-panel"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu overlay + panel */}
      {mobileOpen && (
        <>
          {/* Full-screen backdrop */}
          <div
            className="fixed inset-0 z-40 bg-[rgba(26,20,20,0.6)] md:hidden"
            onClick={closeMobile}
            aria-hidden="true"
          />
          {/* Menu panel with focus trap */}
          <div
            ref={containerRef}
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            onKeyDown={handleKeyDown}
            className="fixed top-[70px] left-0 right-0 z-50 bg-[rgba(26,20,20,0.85)] border-b border-[rgba(255,255,255,0.1)] p-6 flex flex-col gap-3 md:hidden"
            style={{
              WebkitBackdropFilter: "blur(60px) saturate(200%)",
              backdropFilter: "blur(60px) saturate(200%)",
            }}
          >
            <Link
              to="/brochure"
              onClick={closeMobile}
              className="flex items-center justify-center h-[44px] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm"
            >
              <span className="font-['Inter',sans-serif] font-medium text-[12px] tracking-[1.65px] uppercase text-[#8d8d8d]">
                Download Brochure
              </span>
            </Link>
            <Link
              to="/waitlist"
              onClick={closeMobile}
              className="flex items-center justify-center h-[44px] bg-[#1e4d57] border border-[#1e4d57] outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm"
            >
              <span className="font-['Inter',sans-serif] font-semibold text-[12px] tracking-[1.65px] uppercase text-[#fcfcfc]">
                Join the Waitlist
              </span>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}
