import { useState, useId } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import {
  SubPageNav,
  PageFooter,
  QuoteSection,
} from "../components/PageLayout";
import {
  InputField,
  CheckboxField,
  SubmitButton,
  ThankYouState,
} from "../components/FormComponents";
import { SEOHead, breadcrumbSchema } from "../components/SEOHead";
import heroImg from "../../assets/brochure-hero.jpg";

import speakersImg from "../../assets/brochure-speakers.jpg";

const whatsInside = [
  {
    title: "The PioneerOS",
    desc: "Every feature of the platform, Impact Index, Curated Dinners, The Vault, YP Concierge, explained in full.",
  },
  {
    title: "Member Results",
    desc: "The deals, raises, and introductions members have attributed directly to their YP Club network.",
  },
  {
    title: "Membership Options",
    desc: "Pricing, what\u2019s included, and how the application process works, so you can make an informed decision.",
  },
  {
    title: "2026 Programming",
    desc: "The full event calendar, curated dinners, wellness sessions, global activations at Leap and Gitex.",
  },
];

const testimonials = [
  {
    tag: "$5M raised \u00B7 a16z backed",
    quote:
      "\u201CMohammed built the region\u2019s first a16z-backed company at this stage. He did it as a YP Club member.\u201D",
    name: "Mohamed Mohamed",
    company: "Smart Bricks",
  },
  {
    tag: "Multi-six-figure contract",
    quote:
      "\u201CJames went from YP Club team member to founder. His first contract came through the network he helped build.\u201D",
    name: "James Augustin",
    company: "Particle Execution",
  },
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  whatsapp: string;
  acceptContact: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.lastName.trim()) errors.lastName = "Last name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email))
    errors.email = "Please enter a valid email address";
  if (!data.linkedin.trim()) errors.linkedin = "LinkedIn profile is required";
  else if (
    !data.linkedin.includes("linkedin.com") &&
    !data.linkedin.startsWith("in/")
  )
    errors.linkedin = "Please enter a valid LinkedIn URL or handle";
  if (!data.whatsapp.trim()) errors.whatsapp = "WhatsApp number is required";
  else if (!/^[\d\s\-+()]{7,}$/.test(data.whatsapp))
    errors.whatsapp = "Please enter a valid phone number";
  if (!data.acceptContact) errors.acceptContact = "Please accept to continue";
  return errors;
}

export default function BrochurePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    linkedin: "",
    whatsapp: "",
    acceptContact: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const whatsappId = useId();
  const whatsappErrorId = `${whatsappId}-error`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateForm(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const updateField = (key: keyof FormData, value: string | boolean) => {
    setForm((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  };

  return (
    <div className="min-h-screen bg-[#1a1414] text-[#fcfcfc] overflow-x-hidden">
      <SEOHead
        title="Download the YP Club Brochure · Dubai's Private Founder Community"
        description="Get the full YP Club playbook: membership model, PioneerOS platform, member results, and 2026 programming. Dubai's private founder community."
        canonical="https://ypclub.com/brochure"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", url: "https://ypclub.com/" },
            { name: "Brochure", url: "https://ypclub.com/brochure" },
          ]),
        ]}
      />
      <SubPageNav />

      <main id="main-content">
      {/* Hero with background image */}
      <section className="relative py-20 md:py-32 px-6 text-center overflow-hidden" aria-labelledby="brochure-heading">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,20,20,0.75)] via-[rgba(26,20,20,0.85)] to-[#1a1414]" />
        </div>

        <div className="relative z-10">
          <ScrollReveal direction="up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#816a54]" />
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567]">
                The Playbook
              </p>
              <div className="w-8 h-px bg-[#816a54]" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.05}>
            <h1 id="brochure-heading" className="font-['Cormorant_Garamond',serif] font-light text-[36px] sm:text-[44px] md:text-[56px] leading-[1.06] tracking-[-0.72px] text-[#fcfcfc]">
              Everything You Need to Know.
              <span className="block italic text-[#A08567]">
                In One Document.
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[rgba(252,252,252,0.9)] max-w-[555px] mx-auto mt-6">
              The full YP Club playbook, our membership model, the PioneerOS,
              member results, and what the next 12 months looks like for founders
              inside the network.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="font-['Cormorant_Garamond',serif] italic font-light text-[16px] leading-[24px] text-[#A08567] max-w-[700px] mx-auto mt-4">
              Submit your details and receive the brochure instantly. A member of
              our team will follow up on WhatsApp within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="px-6 pb-16 md:pb-24" aria-label="Brochure request form and details">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Form card */}
          <ScrollReveal direction="up" delay={0.1} className="flex-1 min-w-0">
            <div className="bg-[rgba(252,252,252,0.02)] rounded-[4px] border border-[rgba(255,255,255,0.1)] overflow-hidden">
              {/* Teal header */}
              <div className="bg-[#1e4d57] p-8 md:p-10">
                <p className="font-['Inter',sans-serif] font-medium text-[11px] md:text-[12px] leading-[18px] tracking-[3px] uppercase text-[#fcfcfc] mb-3">
                  Request the Playbook
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] font-light text-[26px] md:text-[28px] leading-[33.6px] text-[#fcfcfc]">
                  Get the brochure.
                  <span className="block font-['Cormorant_Garamond',serif] italic font-light text-[26px] md:text-[28px] leading-[33.6px] text-[#fcfcfc]">
                    Start the conversation.
                  </span>
                </h2>
                <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] mt-3 max-w-[516px]">
                  Fill in your details below. The brochure lands in your inbox
                  immediately. One of our team will reach out on WhatsApp, no
                  hard sell, just a real conversation about whether YP Club is
                  the right fit.
                </p>
              </div>

              {/* Form body */}
              <div className="p-8 md:p-10">
                {submitted ? (
                  <ThankYouState
                    title="Brochure Sent."
                    subtitle="Check your inbox."
                    message="We've sent the YP Club playbook to your email. A member of our team will reach out on WhatsApp within 24 hours."
                  />
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <InputField
                        label="First Name"
                        placeholder="Cameron"
                        value={form.firstName}
                        onChange={(v) => updateField("firstName", v)}
                        error={errors.firstName}
                      />
                      <InputField
                        label="Last Name"
                        placeholder="Lee"
                        value={form.lastName}
                        onChange={(v) => updateField("lastName", v)}
                        error={errors.lastName}
                      />
                    </div>
                    <InputField
                      label="Email Address"
                      placeholder="cameron@company.com"
                      value={form.email}
                      onChange={(v) => updateField("email", v)}
                      error={errors.email}
                      type="email"
                    />
                    <InputField
                      label="LinkedIn Profile"
                      placeholder="linkedin.com/in/cameronlee"
                      value={form.linkedin}
                      onChange={(v) => updateField("linkedin", v)}
                      error={errors.linkedin}
                    />

                    {/* WhatsApp field */}
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        htmlFor={whatsappId}
                        className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[2px] uppercase text-[#A08567]"
                      >
                        WhatsApp Number
                      </label>
                      <div className="flex w-full min-w-0">
                        <div className="h-[45.5px] bg-[rgba(252,252,252,0.03)] border border-[rgba(129,106,84,0.4)] border-r-0 rounded-l-[2px] flex items-center gap-1.5 px-3 shrink-0">
                          <span className="text-[13px]" aria-hidden="true">{"\uD83C\uDDE6\uD83C\uDDEA"}</span>
                          <span className="font-['Inter',sans-serif] font-light text-[13px] text-[#8d8d8d]">
                            +971
                          </span>
                        </div>
                        <input
                          id={whatsappId}
                          type="tel"
                          placeholder="50 123 4567"
                          value={form.whatsapp}
                          onChange={(e) =>
                            updateField("whatsapp", e.target.value)
                          }
                          aria-invalid={!!errors.whatsapp}
                          aria-describedby={errors.whatsapp ? whatsappErrorId : undefined}
                          className={`min-w-0 flex-1 h-[45.5px] bg-[rgba(252,252,252,0.03)] rounded-r-[2px] border ${
                            errors.whatsapp
                              ? "border-[#F87171]"
                              : "border-[rgba(129,106,84,0.4)]"
                          } border-l-0 px-3 font-['Inter',sans-serif] font-light text-[13px] text-[#fcfcfc] placeholder:text-[rgba(252,252,252,0.35)] outline-none focus-visible:border-[#A08567] focus-visible:ring-1 focus-visible:ring-[#A08567] transition-colors`}
                        />
                      </div>
                      {errors.whatsapp && (
                        <p
                          id={whatsappErrorId}
                          role="alert"
                          className="font-['Inter',sans-serif] font-light text-[12px] text-[#F87171]"
                        >
                          {errors.whatsapp}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mt-1">
                        <div className="size-[4px] rounded-[2px] bg-[#816a54]" />
                        <p className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] text-[#878787]">
                          Our team will reach out here within 24 hours, one
                          conversation, no pressure.
                        </p>
                      </div>
                    </div>

                    <CheckboxField
                      checked={form.acceptContact}
                      onChange={(v) => updateField("acceptContact", v)}
                      label="I'm happy for YP Club to contact me about membership. I understand this is a one-to-one conversation, not a mailing list."
                      error={errors.acceptContact}
                    />

                    <SubmitButton
                      label="Send Me the Brochure"
                      loading={loading}
                    />

                    <p className="font-['Cormorant_Garamond',serif] italic text-[13px] leading-[19.5px] text-[#878787] text-center">
                      We will contact you as soon as we can.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Sidebar */}
          <div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-8">
            {/* Speakers image */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="relative overflow-hidden rounded-[4px] border border-[rgba(255,255,255,0.08)]">
                <img
                  src={speakersImg}
                  alt="YP Club founders speaking at a private event"
                  loading="lazy"
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,20,20,0.6)] to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="font-['Cormorant_Garamond',serif] italic text-[14px] leading-[20px] text-[rgba(252,252,252,0.9)]">
                    Inside the room that changes everything.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567] mb-4">
                What's Inside
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] font-light text-[28px] md:text-[32px] leading-[39.6px] tracking-[-0.36px] text-[#fcfcfc]">
                The full picture.
                <span className="block font-['Cormorant_Garamond',serif] italic font-light text-[28px] md:text-[32px] leading-[39.6px] tracking-[-0.36px] text-[#A08567] mb-8">
                  No gatekeeping.
                </span>
              </h2>
            </ScrollReveal>

            <StaggerContainer className="flex flex-col" staggerDelay={0.1}>
              {whatsInside.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="border-b border-[rgba(255,255,255,0.1)] py-5">
                    <div className="flex items-start gap-3">
                      <div className="size-[6px] rounded-[3px] bg-[#1e4d57] mt-1.5 shrink-0" />
                      <div>
                        <p className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#fcfcfc] mb-1">
                          {item.title}
                        </p>
                        <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Testimonials card */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="bg-[rgba(252,252,252,0.02)] rounded-[4px] border border-[rgba(255,255,255,0.1)] p-8">
                <p className="font-['Inter',sans-serif] font-medium text-[11px] md:text-[12px] leading-[18px] tracking-[3px] uppercase text-[#fcfcfc] mb-6">
                  From Inside the Network
                </p>
                {testimonials.map((t, i) => (
                  <div
                    key={t.name}
                    className={`${
                      i < testimonials.length - 1
                        ? "border-b border-[rgba(255,255,255,0.1)] pb-6 mb-6"
                        : ""
                    }`}
                  >
                    <div className="inline-block bg-[rgba(129,106,84,0.1)] border border-[rgba(129,106,84,0.25)] px-2.5 py-1.5 mb-3">
                      <span className="font-['Cormorant_Garamond',serif] italic text-[16px] leading-[22px] text-[#A08567]">
                        {t.tag}
                      </span>
                    </div>
                    <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] mb-3">
                      {t.quote}
                    </p>
                    <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] text-[#fcfcfc]">
                      {t.name}
                    </p>
                    <p className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] tracking-[0.9px] uppercase text-[#878787]">
                      {t.company}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <QuoteSection
        quote="The biggest risk a founder takes is not a bad hire or a missed market. It is spending years in the wrong room."
        attribution={<>The World's First Pioneer<span className="text-[#A08567]">OS</span></>}
      />
      </main>
      <PageFooter />
    </div>
  );
}
