"use client";

import FinalCTA from "@/components/sections/cta/final-cta";

import MinimalisticFAQ from "@/components/sections/faq/minimalistic";
import CoreFeatures from "@/components/sections/feature/core-features";
import DemoCarousel from "@/components/sections/feature/demo-carousel";

import MissionStorytelling from "@/components/sections/feature/mission-storytelling";
import SuccessStoriesSection from "@/components/sections/feature/success-stories-section";
import ValueProposition from "@/components/sections/feature/value-proposition";
import FooterSection from "@/components/sections/footer/5-columns";

import MainHero from "@/components/sections/hero/main-hero";

import Navbar from "@/components/sections/navbar/centered";
import { NewHeader } from "@/components/sections/navbar/new-header";
import Plan from "@/components/sections/pricing/plan";

import SuccessStories from "@/components/sections/testimonials/success-stories";
export default function Home() {
  return (
   <>
   <Navbar />
   <MainHero />
   <DemoCarousel />
<ValueProposition />
   <MissionStorytelling /> 
  
   <SuccessStoriesSection />
   <Plan />
   <MinimalisticFAQ />
   <FinalCTA />
   <FooterSection />
   </>
  );
}
