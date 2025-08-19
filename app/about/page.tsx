"use client";

import { CoreValues } from "@/components/sections/about/core-values";
import { CTASection } from "@/components/sections/about/cta-section";
import { FAQSection } from "@/components/sections/about/faq-section";
import { ImpactStats } from "@/components/sections/about/impact-stats";
import { MissionVision } from "@/components/sections/about/mission-vision";


import FooterSection from "@/components/sections/footer/5-columns";
import AboutHero from "@/components/sections/hero/about-hero";
import Navbar from "@/components/sections/navbar/centered";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
     
      <MissionVision />
       <CoreValues />
       <ImpactStats />
       <FAQSection />
      <CTASection />
      <FooterSection />
     
      
      {/* Other sections will be added here */}
    </div>
  );
}