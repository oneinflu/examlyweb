import { notFound } from "next/navigation";
import { use } from "react";
import Navbar from "@/components/sections/navbar/centered";
import FooterSection from "@/components/sections/footer/5-columns";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Glow from "@/components/ui/glow";
import ExamlyFAQ from "@/components/sections/faq/examly";
import ExamlyCTA from "@/components/sections/cta/examly";
import BentoGrid from "@/components/sections/bento-grid/2-rows-top";
import DashboardCarousel from "@/components/sections/carousel/dashboard-carousel";
import PreparationProcess from "@/components/sections/feature/preparation-process";
import { Pricing3ColsSubscription } from "@/components/sections/pricing/3-cols-subscription";
import ExamlyTestimonial from "@/components/sections/testimonials/examly-testimonial";

type QBankPageProps = {
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

const qbankContent = {
  cma: {
    title: "CMA Question Bank",
    description: "Master the CMA exam with our comprehensive question bank featuring thousands of practice questions.",
    heroImage: "/exam.png",
    featureTitle: "Practice Makes Perfect - CMA Question Bank",
    featureDescription: [
      "Our CMA question bank contains over 3,000 exam-style questions covering all topics.",
      "Practice with confidence using questions written by CMA experts and exam veterans."
    ],
    features: [
      "3,000+ exam-style MCQs and essays",
      "Topic-wise and full-length mock tests",
      "Detailed solutions and explanations",
      "Performance reports and analytics",
      "Access till you pass guarantee",
    ],
  },
  cpa: {
    title: "CPA Question Bank",
    description: "Comprehensive CPA question bank with thousands of practice questions for all four exam sections.",
    heroImage: "/exam.png",
    featureTitle: "Master All CPA Sections with Our Question Bank",
    featureDescription: [
      "Practice with thousands of CPA questions covering AUD, BEC, FAR, and REG.",
      "Simulate real exam conditions with our adaptive testing platform."
    ],
    features: [
      "Questions for all CPA exam sections",
      "Adaptive testing technology",
      "Detailed answer explanations",
      "Performance tracking and analytics",
      "Unlimited practice attempts",
    ],
  },
  ea: {
    title: "EA Question Bank",
    description: "Comprehensive Enrolled Agent question bank covering all three parts of the SEE exam.",
    heroImage: "/exam.png",
    featureTitle: "Excel in the EA Exam with Targeted Practice",
    featureDescription: [
      "Our EA question bank covers all three parts of the Special Enrollment Examination.",
      "Practice with real exam scenarios and complex tax situations."
    ],
    features: [
      "Questions for all EA exam parts",
      "Real-world tax scenarios",
      "Comprehensive explanations",
      "Progress tracking",
      "Expert-written content",
    ],
  },
} as const;

export default function QBankPage({ params }: QBankPageProps) {
  const resolvedParams = use(params);
  const { course } = resolvedParams;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!validCourses.includes(course as any)) {
    notFound();
  }

  const content = qbankContent[course as keyof typeof qbankContent];

  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Hero Section */}
        <Section className="relative overflow-hidden">
          <Glow className="absolute -top-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2" />
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
                {content.title}
              </h1>
              <p className="mb-8 max-w-2xl text-xl text-muted-foreground">
                {content.description}
              </p>
              <div className="flex gap-4">
                <Button size="lg">Start Practicing</Button>
                <Button variant="outline" size="lg">View Sample Questions</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Feature Section */}
        <FeatureLeft
          title={content.featureTitle}
          description={content.featureDescription}
          imageSrc={content.heroImage}
          imageAlt={`${course.toUpperCase()} Question Bank`}
        />

        {/* Bento Grid */}
        <BentoGrid />

        {/* Preparation Process */}
        <PreparationProcess />

        {/* Dashboard Carousel */}
        <DashboardCarousel />

        {/* Pricing */}
        <Pricing3ColsSubscription course={course} />

        {/* Testimonials */}
        <ExamlyTestimonial />

        {/* FAQ */}
        <ExamlyFAQ />

        {/* CTA */}
        <ExamlyCTA />
      </main>
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
    <Section>
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <Button size="lg">Start Practicing Now</Button>
          </div>
          <div className="relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}