import { useEffect } from "react";
import { SubPageNav, PageFooter } from "../components/PageLayout";
import { SEOHead, breadcrumbSchema } from "../components/SEOHead";
import { ScrollReveal } from "../components/ScrollReveal";

const sections = [
  {
    title: "1. What Are Cookies",
    content: [
      "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply information to site owners.",
    ],
  },
  {
    title: "2. How We Use Cookies",
    content: [
      "We use cookies and similar tracking technologies to enhance your experience on our platform. Specifically, we use cookies to:",
      "Remember your preferences and settings across visits.",
      "Understand how you interact with our website to improve its design and functionality.",
      "Measure the effectiveness of our communications and outreach.",
      "Ensure the security of your account and our platform.",
    ],
  },
  {
    title: "3. Types of Cookies We Use",
    content: [
      "Essential Cookies: These are necessary for the website to function properly. They enable core features such as page navigation and access to secure areas. The website cannot function without these cookies.",
      "Analytics Cookies: These help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve the site experience.",
      "Functional Cookies: These enable enhanced functionality and personalisation, such as remembering your language preference or the region you are in.",
      "Marketing Cookies: These may be set through our site by advertising partners to build a profile of your interests and show you relevant content on other sites. They work by uniquely identifying your browser and device.",
    ],
  },
  {
    title: "4. Third-Party Cookies",
    content: [
      "Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and recommend reviewing the respective third-party privacy policies for more information.",
      "Third parties we may work with include analytics providers and social media platforms.",
    ],
  },
  {
    title: "5. Managing Your Cookies",
    content: [
      "Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent.",
      "Please note that disabling cookies may affect the functionality of our website and your ability to access certain features.",
      "For more information on how to manage cookies in your browser, visit your browser's help documentation.",
    ],
  },
  {
    title: "6. Cookie Retention",
    content: [
      "Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them manually.",
      "We review the cookies we use periodically and remove any that are no longer necessary.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    content: [
      "We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our data practices. Any updates will be posted on this page with a revised date.",
    ],
  },
  {
    title: "8. Contact Us",
    content: [
      "If you have any questions about our use of cookies, please contact us at privacy@ypclub.com.",
    ],
  },
];

export default function CookiesPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1414] text-[#fcfcfc] overflow-x-hidden">
      <SEOHead
        title="Cookies Policy | YP Club"
        description="Learn how YP Club uses cookies and similar technologies to improve your experience on our platform."
        canonical="https://ypclub.com/cookies"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", url: "https://ypclub.com" },
            { name: "Cookies Policy", url: "https://ypclub.com/cookies" },
          ]),
        ]}
      />
      <SubPageNav />

      <main className="max-w-[800px] mx-auto px-6 md:px-8 py-16 md:py-24">
        <ScrollReveal direction="up">
          <h1 className="font-['Cormorant_Garamond',serif] font-light text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1] text-[#fcfcfc] mb-4">
            Cookies Policy
          </h1>
          <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#878787] mb-12">
            Last updated: March 10, 2026
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] mb-10">
            This Cookies Policy explains how YP Club (&ldquo;we,&rdquo;
            &ldquo;our,&rdquo; or &ldquo;us&rdquo;) uses cookies and similar
            technologies when you visit our website or use our services.
          </p>
        </ScrollReveal>

        {sections.map((section, i) => (
          <ScrollReveal key={section.title} direction="up" delay={0.05 * (i + 2)}>
            <div className="mb-10">
              <h2 className="font-['Cormorant_Garamond',serif] font-light text-[20px] md:text-[24px] leading-[1.2] text-[#fcfcfc] mb-4">
                {section.title}
              </h2>
              {section.content.map((paragraph, j) => (
                <p
                  key={j}
                  className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] mb-3"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </main>

      <PageFooter />
    </div>
  );
}
