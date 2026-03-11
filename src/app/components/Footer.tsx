import { ScrollReveal } from "./ScrollReveal";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-l31yrew5ki";

export function Footer() {
  return (
    <ScrollReveal direction="up" duration={0.5}>
      <footer className="border-t border-[rgba(255,255,255,0.1)] px-6 md:px-16 py-6 md:h-[80px] flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between" role="contentinfo">
        <Link to="/" className="block hover:opacity-80 transition-opacity outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm" aria-label="YP Club, back to homepage">
          <div className="relative h-[12px] w-[80px] md:h-[14px] md:w-[94px]">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="xMinYMid meet"
              viewBox="0 0 282.478 43.3486"
              aria-hidden="true"
            >
              <g clipPath="url(#clip_logo_footer)">
                <path d={svgPaths.p131e0300} fill="#878787" />
                <path d={svgPaths.p2c90b270} fill="#878787" />
                <path d={svgPaths.p2ec72600} fill="#878787" />
                <path d={svgPaths.p32d0f280} fill="#878787" />
                <path d={svgPaths.p18dfb400} fill="#878787" />
                <path d={svgPaths.p3f61680} fill="#878787" />
              </g>
              <defs>
                <clipPath id="clip_logo_footer">
                  <rect fill="#878787" height="43.3486" width="282.478" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Link>
        <nav aria-label="Footer navigation" className="flex items-center flex-wrap justify-center gap-4 md:gap-8">
          {[
            { label: "About", href: "/about" },
            { label: "FAQ", href: "/faq" },
            { label: "Waitlist", href: "/waitlist" },
            { label: "Brochure", href: "/brochure" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] tracking-[1.25px] text-[#878787] hover:text-[#8d8d8d] transition-colors outline-none focus-visible:underline focus-visible:text-[#8d8d8d]"
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
    </ScrollReveal>
  );
}