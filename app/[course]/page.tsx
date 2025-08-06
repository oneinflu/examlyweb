"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Navbar from "@/components/sections/navbar/centered";
import FooterSection from "@/components/sections/footer/5-columns";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
    <Section className="relative max-md:mb-16 max-md:overflow-hidden max-md:border-b">
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-12 md:flex-row md:items-start lg:gap-24">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="left-0 top-32 flex w-full flex-col items-start gap-4 py-4 text-left sm:gap-8 md:sticky md:py-12 md:w-1/2"
        >
          <h1 className="relative z-10 inline-block max-w-[920px] text-balance bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-semibold text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight dark:to-muted-foreground">
            {title}
          </h1>
          <div className="text-md relative z-10 flex max-w-[620px] flex-col gap-4 text-balance font-medium text-muted-foreground sm:text-lg">
            {description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <Button variant="default" className="rounded-full px-6" asChild>
              <a href="#">Try it for free</a>
            </Button>
            <Button variant="outline" className="rounded-full px-6" asChild>
              <a href="#">View Comparison</a>
            </Button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full md:w-3/4"
        >
          <div className="relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={900}
              height={600}
              className="relative z-10 rounded-lg shadow-xl"
            />
            <Glow variant="center" className="opacity-30" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}