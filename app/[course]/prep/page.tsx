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

const prepContent = {
  cma: {
    title: "CMA Exam Prep Course",
    description: "Comprehensive CMA exam preparation with video lectures, practice tests, and study materials.",
    heroImage: "/prep.png",
    featureTitle: "Master the CMA Exam with Our Comprehensive Prep Course",
    featureDescription: [
      "Our CMA prep course includes everything you need to pass both parts of the exam.",
      "Study with confidence using our proven methodology and expert-created content."
    ],
    features: [
      "HD video lectures for all CMA topics",
      "Comprehensive study materials and eBooks",
      "Chapter-wise practice questions",
      "Performance analytics and progress tracking",
      "24-48 month access depending on plan",
    ],
  },
  cpa: {
    title: "CPA Exam Prep Course",
    description: "Complete CPA exam preparation covering all four sections with expert guidance.",
    heroImage: "/prep.png",
    featureTitle: "Ace All Four CPA Exam Sections",
    featureDescription: [
      "Our comprehensive CPA prep course covers AUD, BEC, FAR, and REG sections.",
      "Learn from industry experts with proven teaching methodologies."
    ],
    features: [
      "Complete coverage of all CPA exam sections",
      "Expert-led video lectures",
      "Adaptive learning technology",
      "Live doubt-clearing sessions",
      "Extended access till you pass",
    ],
  },
  ea: {
    title: "EA Exam Prep Course",
    description: "Comprehensive Enrolled Agent exam preparation for all three parts of the SEE.",
    heroImage: "/prep.png",
    featureTitle: "Become an Enrolled Agent with Expert Training",
    featureDescription: [
      "Our EA prep course covers all three parts of the Special Enrollment Examination.",
      "Learn tax law and regulations from certified tax professionals."
    ],
    features: [
      "Complete coverage of all EA exam parts",
      "Tax law expert instructors",
      "Real-world case studies",
      "Practice simulations",
      "Comprehensive study materials",
    ],
  },
} as const;

export default function ExamPrepCoursePage({ params }: ExamPrepPageProps) {
  const resolvedParams = use(params);
  const { course } = resolvedParams;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!validCourses.includes(course as any)) {
    notFound();
  }

  const content = prepContent[course as keyof typeof prepContent];

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
                <Button size="lg">Start Learning</Button>
                <Button variant="outline" size="lg">View Curriculum</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Feature Section */}
        <FeatureLeft
          title={content.featureTitle}
          description={content.featureDescription}
          imageSrc={content.heroImage}
          imageAlt={`${course.toUpperCase()} Prep Course`}
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
            <Button size="lg">Get Started Today</Button>
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