import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { SubPageNav, PageFooter, QuoteSection } from "../components/PageLayout";
import {
  SEOHead,
  breadcrumbSchema,
} from "../components/SEOHead";

const faqs = [
  {
    category: "About YP Club",
    items: [
      {
        q: "What is YP Club?",
        a: "YP Club is a private, application-only members club in Dubai built exclusively for founders scaling businesses from AED 1M to AED 30M in revenue. Founded in 2022, the club accepts roughly 1 in 5 applicants. It is one of the most selective founder networks in the UAE, providing curated networking, private deal flow, and structured founder education through its proprietary platform, PioneerOS.",
      },
      {
        q: "Where is YP Club located?",
        a: "YP Club is headquartered in Dubai, UAE. Our curated dinners, events, and activations take place across premium venues in Dubai. We also run YP Nodes \u2014 pop-up activations at international conferences like LEAP and GITEX, so your network follows you wherever you go.",
      },
      {
        q: "When was YP Club founded?",
        a: "YP Club was founded in 2022 in Dubai. In four years, the club has hosted hundreds of private events, facilitating connections that have led to multi-million dollar partnerships, funding rounds, and international expansions.",
      },
      {
        q: "Is YP Club the best private business club for founders in Dubai?",
        a: "YP Club is Dubai\u2019s only private members club designed exclusively for founders scaling from AED 1M to AED 30M. Unlike general networking groups, YP Club uses AI-curated dinner matching, a proprietary Impact Index that tracks the financial value of your network, and a selective 1-in-5 approval rate to ensure every room is high-quality. Members have raised $5M+ from a16z, secured multi-six-figure contracts, and expanded internationally \u2014 all through introductions made inside the network.",
      },
    ],
  },
  {
    category: "Membership & Application",
    items: [
      {
        q: "How do I join YP Club?",
        a: "Membership starts with downloading the YP Club app on iOS or Android. Complete your founder profile \u2014 your company, revenue stage, and ambitions \u2014 in under five minutes. Applications are reviewed personally within 3\u20135 business days. If your application progresses, you\u2019ll be invited to a short interview with our memberships team. Approved founders receive immediate access to PioneerOS, their first curated dinner match, and a personal onboarding call.",
      },
      {
        q: "What is the acceptance rate?",
        a: "Roughly 1 in 5 applications are approved. YP Club maintains this selectivity to protect the quality of every room, every introduction, and every relationship inside the network. We look for alignment, ambition, and intent \u2014 not just revenue numbers.",
      },
      {
        q: "Who is eligible to apply?",
        a: "YP Club is built for founders and co-founders of businesses generating between AED 1M and AED 30M in revenue, based in or connected to Dubai. Whether you are scaling your first company or building your third, if you are serious about growth and the people around you, you are exactly who we built this for.",
      },
      {
        q: "How much does membership cost?",
        a: "Membership pricing and what\u2019s included is detailed in the YP Club brochure. You can request the full playbook by visiting our brochure page. A member of our team will follow up on WhatsApp within 24 hours to discuss whether YP Club is the right fit for you.",
      },
      {
        q: "Can I be referred by an existing member?",
        a: "Yes. YP Club members can refer founders they would personally vouch for. Referred applicants receive priority review \u2014 their applications go to the front of the queue. For referrals to be valid, they must be submitted through WhatsApp.",
      },
    ],
  },
  {
    category: "PioneerOS & Platform",
    items: [
      {
        q: "What is PioneerOS?",
        a: "PioneerOS is YP Club\u2019s proprietary digital infrastructure that powers the membership experience. It includes the Impact Index (tracks the financial value your network generates), AI-curated dinner matching, The Vault (private founder education library), YP Concierge (travel desk with up to 50% off Emirates/Etihad business class), and YP Nodes (global pop-up activations). PioneerOS gives founders a rhythm for growth that operates alongside their business.",
      },
      {
        q: "What is the Impact Index?",
        a: "The Impact Index is a proprietary feature of PioneerOS that tracks and attributes every introduction, referral, and deal within the YP Club network to your profile. You can see, in real-time numbers, exactly what your membership is worth. Members have tracked millions in attributed impact through the platform.",
      },
      {
        q: "What are Curated Dinners?",
        a: "Curated Dinners are AI-matched gatherings of 8\u201310 founders, designed based on your industry, ambitions, and who you actually need to meet. Seating is confirmed two days in advance. Unlike generic networking events, every seat at the table is intentional.",
      },
    ],
  },
  {
    category: "Where Founders Network in Dubai",
    items: [
      {
        q: "Where do founders network in Dubai?",
        a: "Dubai has a growing ecosystem of founder communities. YP Club stands out as the only private, application-only club specifically designed for founders scaling from AED 1M to AED 30M. With AI-curated dinners and a proprietary Impact Index, YP Club offers structured networking with measurable outcomes, not just another room with business cards.",
      },
      {
        q: "What makes YP Club different from other business networking groups in Dubai?",
        a: "Most networking groups sell access. YP Club sells outcomes. Every dinner is curated to the people you actually need to meet. Every introduction is tracked and attributed through the Impact Index. Members don\u2019t just attend events \u2014 they see, in numbers, exactly what their network is worth. Combined with a 1-in-5 acceptance rate, this ensures every room stays sharp, generous, and outcome-focused.",
      },
      {
        q: "Is YP Club suitable for expat founders in Dubai?",
        a: "Absolutely. Many YP Club members are expat founders who moved to Dubai to scale their businesses. The club\u2019s curated approach is especially valuable for founders building new networks in the UAE \u2014 you are matched with the right people from day one, rather than spending months finding them on your own.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${q.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`;
  return (
    <div className="border-b border-[rgba(255,255,255,0.08)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 py-5 text-left normal-case tracking-normal font-normal text-[14px] group outline-none focus-visible:ring-1 focus-visible:ring-[rgba(129,106,84,0.5)] rounded-sm"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="flex-1 font-['Inter',sans-serif] font-medium text-[14px] leading-[22px] text-[#fcfcfc] group-hover:text-[#816a54] transition-colors">
          {q}
        </span>
        <div
          className="shrink-0 mt-1 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronDown size={16} className="text-[#767676]" />
        </div>
      </button>
      {open && (
        <div
          id={id}
          role="region"
          aria-label={q}
          className="overflow-hidden"
        >
          <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] pb-5 pr-8 max-w-[680px]">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#1a1414] text-[#fcfcfc] overflow-x-hidden">
      <SEOHead
        title="FAQ | YP Club | Private Founder Network Dubai"
        description="Frequently asked questions about YP Club, Dubai's private members club for founders scaling from AED 1M to AED 30M. 1-in-5 approved, powered by PioneerOS."
        canonical="https://ypclub.com/faq"
        jsonLd={[
          faqSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://ypclub.com/" },
            { name: "FAQ", url: "https://ypclub.com/faq" },
          ]),
        ]}
      />
      <SubPageNav />

      <main id="main-content">
      {/* Hero */}
      <section aria-labelledby="faq-heading" className="py-16 md:py-24 px-6 text-center">
        <ScrollReveal direction="up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#816a54]" />
            <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567]">
              Frequently Asked Questions
            </p>
            <div className="w-8 h-px bg-[#816a54]" />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h1
            id="faq-heading"
            className="font-['Cormorant_Garamond',serif] font-light text-[36px] sm:text-[44px] md:text-[56px] leading-[1.06] tracking-[-0.72px] text-[#fcfcfc]"
          >
            Everything You Need{" "}
            <span className="font-['Cormorant_Garamond',serif] italic text-[#A08567]">
              to Know.
            </span>
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[560px] mx-auto mt-6">
            YP Club is a private, application-only members club in Dubai for
            founders scaling from AED 1M to AED 30M. Founded in 2022, the club
            has a 1-in-5 approval rate, powered by our proprietary platform,
            PioneerOS.
          </p>
        </ScrollReveal>
      </section>

      <div className="w-full h-px bg-[rgba(255,255,255,0.1)]" />

      {/* FAQ Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[800px] mx-auto">
          {faqs.map((category, catIndex) => (
            <div key={category.category} className="mb-12 last:mb-0">
              <ScrollReveal direction="up" delay={catIndex * 0.05}>
                <h2 className="font-['Cormorant_Garamond',serif] font-normal text-[24px] md:text-[32px] leading-[1.15] text-[#fcfcfc] mb-6">
                  {category.category}
                </h2>
              </ScrollReveal>
              <StaggerContainer className="flex flex-col" staggerDelay={0.06}>
                {category.items.map((item) => (
                  <StaggerItem key={item.q}>
                    <FAQItem q={item.q} a={item.a} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 px-6 border-t border-[rgba(255,255,255,0.1)]">
        <ScrollReveal direction="up">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="font-['Cormorant_Garamond',serif] font-light text-[24px] md:text-[32px] leading-[1.15] text-[#fcfcfc] mb-2">
              Ready to Apply?
            </p>
            <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[440px] mx-auto mb-8">
              Download the app, complete your profile, and apply in under five
              minutes. Applications reviewed on a rolling basis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/waitlist"
                className="flex items-center justify-center h-[48px] px-10 bg-[#1e4d57] border border-[#1e4d57] hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(30,77,87,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm"
              >
                <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#fcfcfc]">
                  Join the Waitlist
                </span>
              </Link>
              <Link
                to="/brochure"
                className="flex items-center justify-center h-[48px] px-10 border border-[rgba(255,255,255,0.15)] hover:border-[#A08567] transition-all hover:shadow-[0_0_20px_rgba(129,106,84,0.1)] outline-none focus-visible:ring-2 focus-visible:ring-[#A08567] rounded-sm"
              >
                <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#8d8d8d]">
                  Download Brochure
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <QuoteSection
        quote="The biggest risk a founder takes is not a bad hire or a missed market. It is spending years in the wrong room."
        attribution="YP Club \u2014 Dubai's Private Founder Network"
      />
      </main>
      <PageFooter activeLink="FAQ" />
    </div>
  );
}