
import { notFound } from "next/navigation";
import { use } from "react";
import Navbar from "@/components/sections/navbar/centered";
import FooterSection from "@/components/sections/footer/5-columns";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
// Remove this line - framer-motion not compatible with server components
// import { motion } from "framer-motion";
import Glow from "@/components/ui/glow";

import ExamlyFAQ from "@/components/sections/faq/examly";
import ExamlyCTA from "@/components/sections/cta/examly";
import BentoGrid from "@/components/sections/bento-grid/2-rows-top";
import DashboardCarousel from "@/components/sections/carousel/dashboard-carousel";
import PreparationProcess from "@/components/sections/feature/preparation-process";
import { Pricing3ColsSubscription } from "@/components/sections/pricing/3-cols-subscription";
import ExamlyTestimonial from "@/components/sections/testimonials/examly-testimonial";

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
  },
} as const;

export default function ExamPrepPage({ params }: ExamPrepPageProps) {
  const resolvedParams = use(params);
  const courseSlug = resolvedParams.course?.split("-exam-prep")[0] as keyof typeof courseContent;

  if (!validCourses.includes(courseSlug)) {
    notFound();
  }

  const content = courseContent[courseSlug];

  return (
    <>
      <Navbar />
      <FeatureLeft 
        title={content.featureTitle}
        description={content.featureDescription}
        imageSrc={content.heroImage}
        imageAlt={`${courseSlug.toUpperCase()} Exam Prep Feature`}
      />
      <BentoGrid />
      <DashboardCarousel />
    <Pricing3ColsSubscription course={courseSlug} />
    <ExamlyTestimonial />
   
      <ExamlyFAQ />
      <ExamlyCTA />
      <FooterSection />
    </>
  );
}

function FeatureLeft({ title, description, imageSrc, imageAlt }: {
  title: string;
  description: readonly string[];
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <Section className="py-20 lg:py-32">
      <div className="relative overflow-hidden">
        <div className="container mx-auto max-w-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Content - Takes up 5 columns */}
            <div className="lg:col-span-5 space-y-8 animate-in slide-in-from-left-8 duration-1000 ease-out">
              <div className="space-y-6">
                <h1 className="text-6xl font-bold animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-200 ease-out">
                  {title}
                </h1>
                <div className="space-y-4 animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-400 ease-out">
                  {description.map((paragraph, index) => (
                    <p key={index} className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-600 ease-out">
                <Button size="lg" className="text-lg px-8 py-3">
                  Start Learning
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  View Demo
                </Button>
              </div>
            </div>
            
            {/* Image Container - Takes up 7 columns and extends beyond */}
            <div className="lg:col-span-7 lg:col-start-6 animate-in slide-in-from-right-8 duration-1000 delay-300 ease-out">
              <div className="relative lg:ml-8">
                {/* Desktop: Image extends beyond container */}
                <div className="hidden lg:block relative w-[calc(100%+25vw)] aspect-[4/3]">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-contain object-left animate-in zoom-in-95 duration-1000 delay-500 ease-out"
                    sizes="75vw"
                    priority
                  />
                </div>
                
                {/* Mobile: Normal contained image */}
                <div className="lg:hidden relative aspect-[4/3] w-full max-w-lg mx-auto">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-contain animate-in zoom-in-95 duration-1000 delay-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}