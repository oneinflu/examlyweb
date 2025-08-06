
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
    heroImage: "/macbook.png",
    featureTitle: "Master the CMA Exam with Confidence",
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
      <PreparationProcess />
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
      <div className="container mx-auto max-w-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                {title}
              </h1>
              <div className="space-y-4">
                {description.map((paragraph, index) => (
                  <p key={index} className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Learning
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                View Demo
              </Button>
            </div>
          </div>
          
          {/* Image Container */}
          <div className="relative lg:pl-8">
            <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 lg:p-12">
              <div className="relative aspect-[4/3] w-full max-w-lg mx-auto">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl blur-xl opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}