"use client";

import FinalCTA from "@/components/sections/cta/final-cta";

import MinimalisticFAQ from "@/components/sections/faq/minimalistic";

import DemoCarousel from "@/components/sections/feature/demo-carousel";

import MissionStorytelling from "@/components/sections/feature/mission-storytelling";
import SuccessStoriesSection from "@/components/sections/feature/success-stories-section";
import ValueProposition from "@/components/sections/feature/value-proposition";
import FooterSection from "@/components/sections/footer/5-columns";

import MainHero from "@/components/sections/hero/main-hero";

import Navbar from "@/components/sections/navbar/centered";

import Plan from "@/components/sections/pricing/plan";


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
