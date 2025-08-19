/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import { cn } from "@/lib/utils";
import { courseConfigs, type CourseConfig } from "@/lib/config/plans";

interface ExamPricingProps {
  examType: "CMA" | "CPA" | "EA";
}

export function ExamPricing({ examType = "CMA" }: ExamPricingProps) {
  const config = courseConfigs[examType.toLowerCase()] || courseConfigs.cma;
  const plans = config.plans;
  const [addedItems, setAddedItems] = useState<string[]>([]);

  // Check initial cart state
  useEffect(() => {
    const existingCart = localStorage.getItem('guestCart');
    if (existingCart) {
      const cart = JSON.parse(existingCart);
      const addedNames = cart
        .filter((item: any) => item.course === examType)
        .map((item: any) => item.name);
      setAddedItems(addedNames);
    }
  }, [examType]);

  const addToCart = (planName: string) => {
    // Check if item is already in cart
    if (addedItems.includes(planName)) {
      toast.error('Item already in cart!');
      return;
    }

    // Get existing cart items from localStorage
    const existingCart = localStorage.getItem('guestCart');
    const guestCart = existingCart ? JSON.parse(existingCart) : [];
    
    // Find the plan and format the price correctly
    const plan = plans.find(p => p.name === planName);
    if (!plan) return;
    
    const numericPrice = parseFloat(plan.price.replace(/[^0-9.]/g, ''));
    
    // Determine plan type based on name
    let planType = 'essential';
    if (planName.toLowerCase().includes('pro')) {
      planType = 'pro';
    } else if (planName.toLowerCase().includes('ultimate')) {
      planType = 'premium';
    }
    
    // Create new cart item
    const newItem = {
      name: planName,
      course: examType,
      price: numericPrice,
      type: planType,
      addedAt: new Date().toISOString()
    };
    
    // Update localStorage and state
    guestCart.push(newItem);
    localStorage.setItem('guestCart', JSON.stringify(guestCart));
    setAddedItems([...addedItems, planName]);
    
    // Show toast and dispatch event
    toast.success(`${planName} added to cart`);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  // Helper function to calculate monthly payment
  const getMonthlyPayment = (price: string) => {
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    return (numericPrice / 12).toFixed(0);
  };

  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Choose Your {examType} Exam Prep Package
          </h2>
          <p className="text-md max-w-[760px] font-medium text-muted-foreground sm:text-xl">
            Select the package that best fits your study needs and goals
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={cn(
                "relative flex max-w-container flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl", 
                plan.classes
              )}
            >
              <hr
                className={cn(
                  "absolute left-[10%] top-0 h-[1px] w-[80%] border-0 bg-gradient-to-r from-transparent via-foreground/60 to-transparent",
                  plan.featured && "via-brand"
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
                      <span className="text-6xl font-bold">{plan.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>
                        Or as low as ${getMonthlyPayment(plan.price)}/month with flex pay
                      </span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button 
                    variant={addedItems.includes(plan.name) ? "default" : plan.featured ? "default" : "outline"}
                    size="lg"
                    onClick={() => addToCart(plan.name)}
                    disabled={addedItems.includes(plan.name)}
                    className={addedItems.includes(plan.name) ? "bg-primary text-primary-foreground cursor-default" : ""}
                  >
                    {addedItems.includes(plan.name) ? "Added to cart" : "Add to Cart"}
                  </Button>
                </div>
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