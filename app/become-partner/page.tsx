import PartnerBenefitsSection from "@/components/sections/feature/partner-benefits-section";
import PartnerDemoScheduler from "@/components/sections/feature/partner-demo-scheduler";
import PartnerFAQSection from "@/components/sections/feature/partner-faq-section";
import PartnerFeatureCarousel from "@/components/sections/feature/partner-feature-carousel";
import PartnerFinalCTA from "@/components/sections/feature/partner-final-cta";
import PartnerStorySection from "@/components/sections/feature/partner-story-section";
import FooterSection from "@/components/sections/footer/5-columns";
import PartnerHero from "@/components/sections/hero/partner-hero";
import Navbar from "@/components/sections/navbar/centered";


export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PartnerHero />
      <PartnerStorySection />
      <PartnerFeatureCarousel />
      <PartnerBenefitsSection />
      <PartnerDemoScheduler />
      <PartnerFAQSection />
      <PartnerFinalCTA />
      <FooterSection />
    </div>
  );
}