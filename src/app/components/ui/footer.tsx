import { Link } from "react-router";
import { cn } from "./utils";

interface FooterProps {
  logo: React.ReactNode;
  socialLinks: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks: Array<{
    href: string;
    label: string;
  }>;
  copyright: {
    text: string;
  };
  activeLink?: string;
  className?: string;
}

const linkClass =
  "font-['Inter',sans-serif] font-light text-[12px] leading-[18px] tracking-[1.25px] text-[#878787] hover:text-[#fcfcfc] transition-colors outline-none focus-visible:underline focus-visible:text-[#fcfcfc]";

const activeLinkClass =
  "font-['Inter',sans-serif] font-light text-[12px] leading-[18px] tracking-[1.25px] text-[#fcfcfc] transition-colors outline-none focus-visible:underline";

export function Footer({
  logo,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
  activeLink,
  className,
}: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-[rgba(255,255,255,0.1)] px-6 md:px-16 py-10 md:py-12",
        className
      )}
      role="contentinfo"
    >
      <div>
        {/* Top row: Logo + Social icons */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {logo}

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center justify-center h-9 w-9 rounded-full border border-[rgba(255,255,255,0.1)] text-[#878787] hover:text-[#fcfcfc] hover:border-[rgba(255,255,255,0.25)] transition-all outline-none focus-visible:ring-1 focus-visible:ring-[#A08567]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgba(255,255,255,0.06)] my-8" />

        {/* Bottom row: Nav + Legal + Copyright */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Navigation links */}
          <nav
            aria-label="Footer navigation"
            className="flex items-center flex-wrap justify-center gap-4 md:gap-6"
          >
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={
                  activeLink === link.label ? activeLinkClass : linkClass
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Legal links */}
          <div className="flex items-center flex-wrap justify-center gap-4 md:gap-6">
            {legalLinks.map((link) => (
              <Link key={link.label} to={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center md:text-left">
          <p className="font-['Inter',sans-serif] font-light text-[11px] leading-[18px] tracking-[1px] text-[#5a5a5a]">
            {copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
}
