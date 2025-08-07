"use client";
import DashboardCarousel from "@/components/sections/carousel/dashboard-carousel";
import ExamlyFAQ from "@/components/sections/faq/examly";
import FeaturesGrid from "@/components/sections/feature/features-grid";
import FooterSection from "@/components/sections/footer/5-columns";
import ExamlyHero from "@/components/sections/hero/examly-hero";
import SplitLayoutHero from "@/components/sections/hero/split-layout";
import Navbar from "@/components/sections/navbar/centered";
import SocialProof from "@/components/sections/social-proof/marquee-2-rows";
import ExamlyTestimonial from "@/components/sections/testimonials/examly-testimonial";
export default function Home() {
  return (
   <>
   <Navbar />
   <SplitLayoutHero />

    <ExamlyHero />
  <FeaturesGrid />
  <DashboardCarousel />
   <ExamlyTestimonial />
   
   <ExamlyFAQ /> 
   <FooterSection />
   </>
  );
}
