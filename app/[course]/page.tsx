
import { notFound } from "next/navigation";
import { use } from "react";
import Navbar from "@/components/sections/navbar/centered";
import FooterSection from "@/components/sections/footer/5-columns";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

import CourseHero from "@/components/sections/hero/course-hero";
import ExamlyFAQ from "@/components/sections/faq/examly";
import ExamlyCTA from "@/components/sections/cta/examly";
import BentoGrid from "@/components/sections/bento-grid/2-rows-top";
import DashboardCarousel from "@/components/sections/carousel/dashboard-carousel";

import { Pricing3ColsSubscription } from "@/components/sections/pricing/3-cols-subscription";
import ExamlyTestimonial from "@/components/sections/testimonials/examly-testimonial";
import ExamFeatures from "@/components/sections/feature/exam-features";
import { ExamPricing } from "@/components/sections/pricing/exam-pricing";

type ExamPrepPageProps = {
  params: Promise<{
    course: string;
  }>;
};

const validCourses = ["cma", "cpa", "ea"] as const;

export async function generateStaticParams() {
  return validCourses.map((course) => ({
    course,
  }));
}

const courseContent = {
  cma: {
    title: "CMA Exam Preparation",
    description: "Comprehensive study materials and practice tests for the Certified Management Accountant exam.",
    heroImage: "/macbook.svg",
    featureTitle: "Smartest Prep for CMA®",
    featureDescription: [
      "Our CMA exam prep provides everything you need to pass on your first attempt.",
      "Study smarter with adaptive learning technology tailored to your strengths and weaknesses."
    ],
    features: [
      "Complete coverage of all CMA exam parts",
      "Adaptive learning technology",
      "Expert-led video lectures",
      "Thousands of practice questions",
    ],
    subtitle: "Master financial management & strategy with expert-led content.",
    logoSrc: "/learning.svg"
  },
  cpa: {
    title: "CPA Exam Preparation",
    description: "Comprehensive study materials and practice tests for the Certified Public Accountant exam.",
    heroImage: "/macbook.png",
    featureTitle: "Ace the CPA Exam with Expert Guidance",
    featureDescription: [
      "Our comprehensive CPA exam prep covers all four sections of the exam.",
      "Benefit from personalized study plans that adapt to your learning pace and style."
    ],
    features: [
      "Complete coverage of all CPA exam sections",
      "Personalized study plans",
      "Expert-led video lectures",
      "Thousands of practice questions",
    ],
    subtitle: "Prepare for the CPA with realistic simulations and live coaching.",
    logoSrc: "/simulation.svg"
  },
  ea: {
    title: "EA Exam Preparation",
    description: "Comprehensive study materials and practice tests for the Enrolled Agent exam.",
    heroImage: "/macbook.png",
    featureTitle: "Become an Enrolled Agent with Confidence",
    featureDescription: [
      "Our EA exam prep covers all three parts of the Special Enrollment Examination (SEE).",
      "Learn from tax experts and practice with thousands of exam-like questions."
    ],
    features: [
      "Complete coverage of all EA exam parts",
      "Adaptive learning technology",
      "Expert-led video lectures",
      "Thousands of practice questions",
    ],
    subtitle: "Become an Enrolled Agent with comprehensive tax exam prep.",
    logoSrc: "/offline.svg"
  },
} as const;

// Add this import at the top with the other imports
import ExamHowItWorks from "@/components/sections/feature/exam-how-it-works";

// Then in the return statement, add the component after ExamFeatures and before ExamPricing
export default function ExamPrepPage({ params }: ExamPrepPageProps) {
  const resolvedParams = use(params);
  const courseSlug = resolvedParams.course?.split("-exam-prep")[0] as keyof typeof courseContent;

  if (!validCourses.includes(courseSlug)) {
    notFound();
  }

  const content = courseContent[courseSlug];
  const examType = courseSlug.toUpperCase() as "CMA" | "CPA" | "EA";

  return (
    <>
      <Navbar />
      <CourseHero 
        examType={examType}
        subtitle={content.subtitle}
        logoSrc={content.logoSrc}
      />
      
      {/* Add the new ExamFeatures component */}
      <ExamFeatures examType={examType} />
      
      {/* Add the new ExamHowItWorks component */}
      <ExamHowItWorks examType={examType} />
      
      {/* Replace Pricing3ColsSubscription with ExamPricing */}
      <ExamPricing examType={examType} />
      
     
   
      
    
      <ExamlyFAQ />
      <FooterSection />
    </>
  );
}