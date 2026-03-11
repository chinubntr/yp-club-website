import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

import { WhySection } from "../components/WhySection";
import { BuiltForSection } from "../components/BuiltForSection";
import { FrameworkSection } from "../components/FrameworkSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { PlatformSection } from "../components/PlatformSection";
import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import { VisualBreather } from "../components/VisualBreather";
import {
  SEOHead,
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "../components/SEOHead";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="YP Club | Private Founder Network Dubai | Networking for Founders Scaling AED 1M-30M"
        description="YP Club is Dubai's private, application-only members club for founders scaling from AED 1M to AED 30M. 1-in-5 approved, powered by PioneerOS. The operating system for founders who are serious about what comes next."
        canonical="https://ypclub.com/"
        jsonLd={[organizationSchema, localBusinessSchema, websiteSchema]}
      />
      <header>
        <Navbar />
      </header>
      <main id="main-content">
        <HeroSection />
        <WhySection />
        <BuiltForSection />
        <FrameworkSection />
        <TestimonialsSection />
        <VisualBreather />
        <PlatformSection />
        <CtaSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}