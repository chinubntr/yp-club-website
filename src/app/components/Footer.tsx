import { ScrollReveal } from "./ScrollReveal";
import { Link } from "react-router";
import { Linkedin, Instagram } from "lucide-react";
import svgPaths from "../../imports/svg-l31yrew5ki";
import { Footer as FooterUI } from "./ui/footer";

function FooterLogo() {
  return (
    <Link
      to="/"
      className="block hover:opacity-80 transition-opacity outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] rounded-sm"
      aria-label="YP Club, back to homepage"
    >
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
  );
}

export function Footer() {
  return (
    <ScrollReveal direction="up" duration={0.5}>
      <FooterUI
        logo={<FooterLogo />}
        socialLinks={[
          {
            icon: <Linkedin className="h-4 w-4" />,
            href: "https://www.linkedin.com/company/ypclub/",
            label: "LinkedIn",
          },
          {
            icon: <Instagram className="h-4 w-4" />,
            href: "https://www.instagram.com/yp.club/",
            label: "Instagram",
          },
        ]}
        mainLinks={[
          { label: "About", href: "/about" },
          { label: "FAQ", href: "/faq" },
          { label: "Waitlist", href: "/waitlist" },
          { label: "Brochure", href: "/brochure" },
        ]}
        legalLinks={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Cookies Policy", href: "/cookies" },
          { label: "Club Rules", href: "/club-rules" },
        ]}
        copyright={{ text: "\u00A9 2025 YP Club. All rights reserved." }}
      />
    </ScrollReveal>
  );
}
