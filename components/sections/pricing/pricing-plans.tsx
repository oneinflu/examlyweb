"use client";

import { cn } from "@/lib/utils";
import { CircleCheckBig, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import Link from "next/link";

type Feature = {
  name: string;
  included: boolean;
};

type FeatureCategory = {
  name: string;
  features: Feature[];
};

type Plan = {
  name: string;
  description: string;
  price: string;
  monthlyPrice?: string;
  badge?: string;
  cta: {
    variant: "outline" | "default" | "glow";
    label: string;
    href: string;
  };
  featureCategories: FeatureCategory[];
  featured: boolean;
  classes?: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    description: "Perfect for individuals just getting started",
    price: "$99",
    monthlyPrice: "$9",
    cta: {
      variant: "outline",
      label: "Get Started",
      href: "/pricing/starter",
    },
    featureCategories: [
      {
        name: "Core Features",
        features: [
          { name: "Basic analytics dashboard", included: true },
          { name: "Up to 5 projects", included: true },
          { name: "1GB storage space", included: true },
          { name: "Email support", included: true },
          { name: "API access", included: false },
        ],
      },
      {
        name: "Advanced Features",
        features: [
          { name: "Custom reporting", included: false },
          { name: "Priority support", included: false },
          { name: "Team collaboration", included: false },
        ],
      },
    ],
    featured: false,
    classes: "glass-1 to-transparent dark:glass-2",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and teams",
    price: "$199",
    monthlyPrice: "$19",
    badge: "Recommended",
    cta: {
      variant: "default",
      label: "Get Started",
      href: "/pricing/professional",
    },
    featureCategories: [
      {
        name: "Core Features",
        features: [
          { name: "Advanced analytics dashboard", included: true },
          { name: "Unlimited projects", included: true },
          { name: "10GB storage space", included: true },
          { name: "Priority email support", included: true },
          { name: "API access", included: true },
        ],
      },
      {
        name: "Advanced Features",
        features: [
          { name: "Custom reporting", included: true },
          { name: "Priority support", included: true },
          { name: "Team collaboration", included: true },
        ],
      },
    ],
    featured: true,
    classes:
      "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    price: "Custom",
    cta: {
      variant: "glow",
      label: "Contact Sales",
      href: "/contact-sales",
    },
    featureCategories: [
      {
        name: "Core Features",
        features: [
          { name: "Enterprise analytics suite", included: true },
          { name: "Unlimited projects", included: true },
          { name: "Unlimited storage", included: true },
          { name: "24/7 dedicated support", included: true },
          { name: "Advanced API access", included: true },
        ],
      },
      {
        name: "Advanced Features",
        features: [
          { name: "Custom reporting & dashboards", included: true },
          { name: "Dedicated account manager", included: true },
          { name: "Team collaboration with admin controls", included: true },
        ],
      },
    ],
    featured: false,
    classes:
      "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
  },
];

export function PricingPlans() {
  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Transparent & Premium Pricing
          </h2>
          <p className="text-md max-w-[760px] font-medium text-muted-foreground sm:text-xl">
            Choose the perfect plan for your needs with our transparent pricing. No hidden fees, just premium value.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex max-w-container flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl",
                plan.classes,
                plan.featured && "ring-2 ring-brand/50 shadow-2xl shadow-brand/10"
              )}
            >
              {/* Top border gradient */}
              <hr
                className={cn(
                  "absolute left-[10%] top-0 h-[1px] w-[80%] border-0 bg-gradient-to-r from-transparent via-foreground/60 to-transparent",
                  plan.featured && "via-brand"
                )}
              />
              
              {/* Plan header */}
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold text-xl">{plan.name}</h2>
                    {plan.badge && (
                      <span className="inline-flex items-center rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">
                        <Star className="mr-1 h-3.5 w-3.5" />
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                
                {/* Pricing */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  {plan.monthlyPrice && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Or {plan.monthlyPrice}/month with flex pay</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  )}
                </div>
                
                {/* CTA Button */}
                <Button variant={plan.cta.variant} size="lg" asChild>
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
                
                <hr className="border-input" />
              </div>
              
              {/* Feature categories */}
              <div className="flex flex-col gap-6">
                {plan.featureCategories.map((category, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <h3 className="text-sm font-medium">{category.name}</h3>
                    <ul className="flex flex-col gap-2">
                      {category.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={cn(
                            "flex items-center gap-2 text-sm",
                            !feature.included && "text-muted-foreground"
                          )}
                        >
                          {feature.included ? (
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                          ) : (
                            <CircleCheckBig className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                          )}
                          {feature.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}