"use client";

import { cn } from "@/lib/utils";
import { CircleCheckBig, User, Users, ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import Link from "next/link";

type Plan = {
  name: string;
  description: string;
  icon?: React.ReactNode;
  price: string;
  cta: {
    variant: "outline" | "default" | "glow";
    label: string;
    href: string;
  };
  features: string[];
  featured: boolean;
  classes?: string;
};

type CourseConfig = {
  name: string;
  fullName: string;
  plans: Plan[];
};

const courseConfigs: Record<string, CourseConfig> = {
  cma: {
    name: "CMA",
    fullName: "Certified Management Accountant",
    plans: 
    [
  {
    name: "Essential CMA Review",
    description: "Self-paced CMA Exam Prep course with comprehensive learning material and platform access.",
    price: "$1,599.00",
    cta: {
      variant: "outline",
      label: "Learn More",
      href: "/cma/essential",
    },
    features: [
      "CMA Part 1 & 2 HD video lectures",
      "Digital eBooks & concept notes",
      "Performance analytics dashboard",
      "Chapter-wise practice questions",
      "24-month course access",
    ],
    featured: false,
    classes: "glass-1 to-transparent dark:glass-2 hidden lg:flex",
  },
  {
    name: "Pro CMA Review",
    description: "Advanced CMA Exam Prep with live classes, mentorship, and extended access till you're confident.",
    icon: <User className="h-4 w-4" />,
    price: "$1,799.00",
    cta: {
      variant: "default",
      label: "Learn More",
      href: "/cma/pro",
    },
    features: [
      "Everything in Essential Plan",
      "Live weekly doubt-clearing sessions",
      "Study planner & milestone tracking",
      "Mock tests & detailed performance reviews",
      "48-month course access",
    ],
    featured: true,
    classes:
      "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
  },
  {
    name: "Ultimate QBank",
    description: "Master the CMA exam with our exhaustive Question Bank designed to simulate real exam scenarios.",
    icon: <Users className="h-4 w-4" />,
    price: "$1,299.00",
    cta: {
      variant: "glow",
      label: "Learn More",
      href: "/cma/qbank",
    },
    features: [
      "3,000+ exam-style MCQs & essays",
      "Topic-wise & full-length mock tests",
      "Detailed solutions & explanations",
      "Performance reports & analytics",
      "Access till you pass guarantee",
    ],
    featured: false,
    classes:
      "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
  },
],
  },
  cpa: {
    name: "CPA",
    fullName: "Certified Public Accountant",
    plans: [
  {
    name: "Essential CPA Review",
    description: "Self-paced CPA Exam Prep course with comprehensive learning material and platform access.",
    price: "$1,599.00",
    cta: {
      variant: "outline",
      label: "Learn More",
      href: "/cpa/essential",
    },
    features: [
      "CMA Part 1 & 2 HD video lectures",
      "Digital eBooks & concept notes",
      "Performance analytics dashboard",
      "Chapter-wise practice questions",
      "24-month course access",
    ],
    featured: false,
    classes: "glass-1 to-transparent dark:glass-2 hidden lg:flex",
  },
  {
    name: "Pro CPA Review",
    description: "Advanced CPA Exam Prep with live classes, mentorship, and extended access till you're confident.",
    icon: <User className="h-4 w-4" />,
    price: "$1,799.00",
    cta: {
      variant: "default",
      label: "Learn More",
      href: "/cpa/pro",
    },
    features: [
      "Everything in Essential Plan",
      "Live weekly doubt-clearing sessions",
      "Study planner & milestone tracking",
      "Mock tests & detailed performance reviews",
      "48-month course access",
    ],
    featured: true,
    classes:
      "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
  },
  {
    name: "Ultimate QBank",
    description: "Master the CPA exam with our exhaustive Question Bank designed to simulate real exam scenarios.",
    icon: <Users className="h-4 w-4" />,
    price: "$1,299.00",
    cta: {
      variant: "glow",
      label: "Learn More",
      href: "/cpa/qbank",
    },
    features: [
      "3,000+ exam-style MCQs & essays",
      "Topic-wise & full-length mock tests",
      "Detailed solutions & explanations",
      "Performance reports & analytics",
      "Access till you pass guarantee",
    ],
    featured: false,
    classes:
      "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
  },
],
  },
  ea: {
    name: "EA",
    fullName: "Enrolled Agent",
    plans: [
  {
    name: "Essential EA Review",
    description: "Self-paced CMA Exam Prep course with comprehensive learning material and platform access.",
    price: "$1,599.00",
    cta: {
      variant: "outline",
      label: "Learn More",
      href: "/cma/essential",
    },
    features: [
      "CMA Part 1 & 2 HD video lectures",
      "Digital eBooks & concept notes",
      "Performance analytics dashboard",
      "Chapter-wise practice questions",
      "24-month course access",
    ],
    featured: false,
    classes: "glass-1 to-transparent dark:glass-2 hidden lg:flex",
  },
  {
    name: "Pro EA Review",
    description: "Advanced EA Exam Prep with live classes, mentorship, and extended access till you're confident.",
    icon: <User className="h-4 w-4" />,
    price: "$1,799.00",
    cta: {
      variant: "default",
      label: "Learn More",
      href: "/ea/pro",
    },
    features: [
      "Everything in Essential Plan",
      "Live weekly doubt-clearing sessions",
      "Study planner & milestone tracking",
      "Mock tests & detailed performance reviews",
      "48-month course access",
    ],
    featured: true,
    classes:
      "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
  },
  {
    name: "Ultimate QBank",
    description: "Master the EA exam with our exhaustive Question Bank designed to simulate real exam scenarios.",
    icon: <Users className="h-4 w-4" />,
    price: "$1,299.00",
    cta: {
      variant: "glow",
      label: "Learn More",
      href: "/ea/qbank",
    },
    features: [
      "3,000+ exam-style MCQs & essays",
      "Topic-wise & full-length mock tests",
      "Detailed solutions & explanations",
      "Performance reports & analytics",
      "Access till you pass guarantee",
    ],
    featured: false,
    classes:
      "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
  },
],
  },
};

interface Pricing3ColsSubscriptionProps {
  course?: string;
}

export function Pricing3ColsSubscription({ course = "cma" }: Pricing3ColsSubscriptionProps) {
  const config = courseConfigs[course.toLowerCase()] || courseConfigs.cma;
  const plans = config.plans;

  // Helper function to calculate monthly payment
  const getMonthlyPayment = (price: string) => {
    const numericPrice = parseFloat(price.replace('$', '').replace(',', ''));
    return (numericPrice / 12).toFixed(0);
  };

  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Choose the best {config.name} Exam Review package for your success
          </h2>
          <p className="text-md max-w-[760px] font-medium text-muted-foreground sm:text-xl">
            Whether you&apos;re just starting out or need full mentorship till you pass, Examly&apos;s {config.name} Review Packages are designed to get you across the finish line — smarter and faster.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex max-w-container flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl",
                plan.classes,
              )}
            >
              <hr
                className={cn(
                  "absolute left-[10%] top-0 h-[1px] w-[80%] border-0 bg-gradient-to-r from-transparent via-foreground/60 to-transparent",
                  plan.featured && "via-brand",
                )}
              />
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <h2 className="flex items-center gap-2 font-bold">
                    {plan.icon && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        {plan.icon}
                      </div>
                    )}
                    {plan.name}
                  </h2>
                  <p className="max-w-[220px] text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 lg:flex-col lg:items-start xl:flex-row xl:items-center">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-6xl font-bold">
                        {plan.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>
                        Or as low as ${getMonthlyPayment(plan.price)}/month with flex pay
                      </span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
                <Button variant={plan.cta.variant} size="lg" asChild>
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
                <hr className="border-input" />
              </div>
              <div>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CircleCheckBig className="h-4 w-4 shrink-0 text-muted-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
