"use client";

import { cn } from "@/lib/utils";
import { CircleCheckBig, ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import Link from "next/link";

type Plan = {
  name: string;
  description: string;
  price: string;
  cta: {
    label: string;
    href: string;
  };
  features: string[];
  featured: boolean;
  classes?: string;
};

type ExamConfig = {
  title: string;
  description: string;
  plans: Plan[];
};

const examConfigs: Record<string, ExamConfig> = {
  CMA: {
    title: "CMA Exam Preparation Packages",
    description: "Choose the right CMA exam prep package to match your learning style and budget.",
    plans: [
      {
        name: "Basic",
        description: "Essential CMA exam preparation with core study materials and practice questions.",
        price: "$999",
        cta: {
          label: "Enroll in CMA Prep",
          href: "/cma/prep/basic",
        },
        features: [
          "Financial planning & analysis modules",
          "Strategic management modules",
          "MCQ practice bank",
          "Self-assessment dashboard",
          "12-month access",
        ],
        featured: false,
        classes: "glass-1 to-transparent dark:glass-2",
      },
      {
        name: "Pro",
        description: "Comprehensive CMA exam preparation with additional practice tests and extended access.",
        price: "$1,499",
        cta: {
          label: "Enroll in CMA Prep",
          href: "/cma/prep/pro",
        },
        features: [
          "All Basic features",
          "Complete financial & management modules",
          "Full-length practice exams",
          "Performance analytics",
          "24-month access",
        ],
        featured: true,
        classes:
          "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
      },
      {
        name: "Premium",
        description: "Ultimate CMA exam preparation with live classes, unlimited mock tests, and premium support.",
        price: "$1,999",
        cta: {
          label: "Enroll in CMA Prep",
          href: "/cma/prep/premium",
        },
        features: [
          "All Pro features",
          "Full financial & strategic modules",
          "Live expert classes",
          "Unlimited mock tests",
          "Lifetime access",
        ],
        featured: false,
        classes:
          "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
      },
    ],
  },
  CPA: {
    title: "CPA Exam Preparation Packages",
    description: "Choose the right CPA exam prep package to match your learning style and budget.",
    plans: [
      {
        name: "Basic",
        description: "Essential CPA exam preparation with core study materials and practice questions.",
        price: "$1,099",
        cta: {
          label: "Enroll in CPA Prep",
          href: "/cpa/prep/basic",
        },
        features: [
          "Audit & attestation modules",
          "Business environment modules",
          "MCQ practice bank",
          "Self-assessment dashboard",
          "12-month access",
        ],
        featured: false,
        classes: "glass-1 to-transparent dark:glass-2",
      },
      {
        name: "Pro",
        description: "Comprehensive CPA exam preparation with additional practice tests and extended access.",
        price: "$1,599",
        cta: {
          label: "Enroll in CPA Prep",
          href: "/cpa/prep/pro",
        },
        features: [
          "All Basic features",
          "Complete audit & tax modules",
          "Task-based simulations",
          "Performance analytics",
          "24-month access",
        ],
        featured: true,
        classes:
          "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
      },
      {
        name: "Premium",
        description: "Ultimate CPA exam preparation with live coaching, full-length simulations, and premium support.",
        price: "$2,099",
        cta: {
          label: "Enroll in CPA Prep",
          href: "/cpa/prep/premium",
        },
        features: [
          "All Pro features",
          "Complete audit & tax modules",
          "Live coaching sessions",
          "Full-length simulations",
          "Lifetime access",
        ],
        featured: false,
        classes:
          "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
      },
    ],
  },
  EA: {
    title: "EA Exam Preparation Packages",
    description: "Choose the right EA exam prep package to match your learning style and budget.",
    plans: [
      {
        name: "Basic",
        description: "Essential EA exam preparation with core study materials and practice questions.",
        price: "$899",
        cta: {
          label: "Enroll in EA Prep",
          href: "/ea/prep/basic",
        },
        features: [
          "Tax law modules",
          "Individual taxation modules",
          "MCQ practice bank",
          "Self-assessment dashboard",
          "12-month access",
        ],
        featured: false,
        classes: "glass-1 to-transparent dark:glass-2",
      },
      {
        name: "Pro",
        description: "Comprehensive EA exam preparation with additional practice tests and extended access.",
        price: "$1,399",
        cta: {
          label: "Enroll in EA Prep",
          href: "/ea/prep/pro",
        },
        features: [
          "All Basic features",
          "Business taxation modules",
          "Representation practice modules",
          "Performance analytics",
          "24-month access",
        ],
        featured: true,
        classes:
          "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
      },
      {
        name: "Premium",
        description: "Ultimate EA exam preparation with comprehensive tax modules, unlimited practice, and premium support.",
        price: "$1,899",
        cta: {
          label: "Enroll in EA Prep",
          href: "/ea/prep/premium",
        },
        features: [
          "All Pro features",
          "Complete tax law modules",
          "Advanced representation modules",
          "Unlimited practice exams",
          "Lifetime access",
        ],
        featured: false,
        classes:
          "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
      },
    ],
  },
};

interface ExamPricingProps {
  examType: "CMA" | "CPA" | "EA";
}

export function ExamPricing({ examType = "CMA" }: ExamPricingProps) {
  const config = examConfigs[examType] || examConfigs.CMA;
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
            {config.title}
          </h2>
          <p className="text-md max-w-[760px] font-medium text-muted-foreground sm:text-xl">
            {config.description}
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
                <Button variant={plan.featured ? "default" : "outline"} size="lg" asChild>
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