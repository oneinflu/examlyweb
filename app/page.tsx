"use client";

import FinalCTA from "@/components/sections/cta/final-cta";

import MinimalisticFAQ from "@/components/sections/faq/minimalistic";
import CoreFeatures from "@/components/sections/feature/core-features";

import MissionStorytelling from "@/components/sections/feature/mission-storytelling";
import ValueProposition from "@/components/sections/feature/value-proposition";
import FooterSection from "@/components/sections/footer/5-columns";

import MainHero from "@/components/sections/hero/main-hero";

import Navbar from "@/components/sections/navbar/centered";
import Plan from "@/components/sections/pricing/plan";

import SuccessStories from "@/components/sections/testimonials/success-stories";
export default function Home() {
  return (
   <>
   <Navbar />
   <MainHero />
<ValueProposition />
   <MissionStorytelling /> 
   <CoreFeatures />
   <SuccessStories />
   <Plan />
   <MinimalisticFAQ />
   <FinalCTA />
   <FooterSection />
   </>
  );
}
