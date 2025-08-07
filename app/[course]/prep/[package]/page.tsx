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

type ExamPrepPackagePageProps = {
  params: Promise<{
    course: string;
    package: string;
  }>;
};

const validCourses = ["cma", "cpa", "ea"] as const;
const validPackages = ["essential", "pro", "ultimate"] as const;

export async function generateStaticParams() {
  const params = [];
  for (const course of validCourses) {
    for (const pkg of validPackages) {
      params.push({
        course,
        package: pkg,
      });
    }
  }
  return params;
}

const packageContent = {
  essential: {
    title: "Essential Prep Course",
    subtitle: "Self-paced exam preparation with comprehensive learning materials",
    description: "Perfect for self-motivated learners who want comprehensive study materials and platform access.",
    heroImage: "/prep.png",
    features: [
      "HD video lectures covering all exam topics",
      "Digital eBooks and comprehensive concept notes",
      "Performance analytics dashboard",
      "Chapter-wise practice questions",
      "24-month course access",
    ],
    highlights: [
      "Self-paced learning",
      "Comprehensive materials",
      "Extended access",
    ],
  },
  pro: {
    title: "Pro Prep Course",
    subtitle: "Advanced exam prep with live classes and mentorship",
    description: "Ideal for learners who want expert guidance, live sessions, and extended access till they're confident.",
    heroImage: "/prep.png",
    features: [
      "Everything in Essential Plan",
      "Live weekly doubt-clearing sessions",
      "Study planner and milestone tracking",
      "Mock tests with detailed performance reviews",
      "48-month course access",
      "One-on-one mentorship sessions",
    ],
    highlights: [
      "Live expert sessions",
      "Personal mentorship",
      "Extended access",
    ],
  },
  ultimate: {
    title: "Ultimate Prep Course",
    subtitle: "Complete exam mastery with unlimited access and support",
    description: "The most comprehensive package with unlimited access, personal coaching, and guaranteed support till you pass.",
    heroImage: "/prep.png",
    features: [
      "Everything in Pro Plan",
      "Unlimited course access till you pass",
      "Personal exam coach assignment",
      "Priority support and doubt resolution",
      "Exclusive masterclass sessions",
      "Career guidance and placement support",
    ],
    highlights: [
      "Unlimited access",
      "Personal coaching",
      "Career support",
    ],
  },
} as const;

const courseNames = {
  cma: "CMA",
  cpa: "CPA", 
  ea: "EA",
} as const;

export default function ExamPrepPackagePage({ params }: ExamPrepPackagePageProps) {
  const resolvedParams = use(params);
  const { course, package: packageType } = resolvedParams;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!validCourses.includes(course as any) || !validPackages.includes(packageType as any)) {
    notFound();
  }

  const packageInfo = packageContent[packageType as keyof typeof packageContent];
  const courseName = courseNames[course as keyof typeof courseNames];

  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Hero Section */}
        <Section className="relative overflow-hidden">
          <Glow className="absolute -top-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2" />
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium">
                {courseName} Exam Preparation
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
                {courseName} {packageInfo.title}
              </h1>
              <p className="mb-4 max-w-2xl text-xl font-medium text-foreground">
                {packageInfo.subtitle}
              </p>
              <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
                {packageInfo.description}
              </p>
              <div className="flex gap-4">
                <Button size="lg">Start Learning Today</Button>
                <Button variant="outline" size="lg">View Curriculum</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Package Highlights */}
        <Section>
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {packageInfo.highlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{highlight}</h3>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Feature Section */}
        <FeatureLeft
          title={`Master the ${courseName} Exam with ${packageInfo.title}`}
          description={[
            `Our ${packageInfo.title.toLowerCase()} is designed specifically for ${courseName} candidates who want ${packageInfo.subtitle.toLowerCase()}.`,
            "Join thousands of successful candidates who have passed their exams with our proven methodology."
          ]}
          features={packageInfo.features}
          imageSrc={packageInfo.heroImage}
          imageAlt={`${courseName} ${packageInfo.title}`}
        />

        {/* Bento Grid */}
        <BentoGrid />

        {/* Preparation Process */}
        <PreparationProcess />

        {/* Dashboard Carousel */}
        <DashboardCarousel />

        {/* Pricing - Show only the selected package */}
        <Section>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your {courseName} Journey?</h2>
              <p className="text-lg text-muted-foreground">Choose the {packageInfo.title} and begin your path to success.</p>
            </div>
            <Pricing3ColsSubscription course={course} />
          </div>
        </Section>

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

function FeatureLeft({ title, description, features, imageSrc, imageAlt }: {
  title: string;
  description: readonly string[];
  features: readonly string[];
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
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">What&apos;s Included:</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
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