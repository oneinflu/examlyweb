/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { CircleCheckBig } from "lucide-react";
import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { courseConfigs, type CourseConfig } from "@/lib/config/plans";

const getMonthlyPayment = (price: string) => {
  const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
  return Math.round(numericPrice / 12);
};

export default function Plan() {
  const [selectedCourse, setSelectedCourse] = useState<string>("cpa");
  const [addedItems, setAddedItems] = useState<string[]>([]);
  const config = courseConfigs[selectedCourse.toLowerCase()] || courseConfigs.cpa;
  const plans = config.plans;

  useEffect(() => {
    const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
    const addedNames = guestCart.map((item: any) => item.name);
    setAddedItems(addedNames);
  }, []);

  const handleAddToCart = (planName: string) => {
    // Check if item is already in cart
    if (addedItems.includes(planName)) {
      return;
    }

    // Get existing cart items from localStorage
    const existingCart = localStorage.getItem('guestCart')
    const guestCart = existingCart ? JSON.parse(existingCart) : []
    
    // Find the plan and format the price correctly
    const plan = plans.find(plan => plan.name === planName)
    const numericPrice = plan ? parseFloat(plan.price.replace(/[^0-9.]/g, '')) : 0
    
    // Determine plan type based on name
    let planType = 'essential'
    if (planName.toLowerCase().includes('pro')) {
      planType = 'pro'
    } else if (planName.toLowerCase().includes('ultimate')) {
      planType = 'premium'
    }
    
    // Add new item with properly formatted price and plan type
    guestCart.push({
      name: planName,
      course: selectedCourse.toUpperCase(),
      price: numericPrice,
      type: planType,
      addedAt: new Date().toISOString()
    })
    
    // Update localStorage and state
    localStorage.setItem('guestCart', JSON.stringify(guestCart))
    setAddedItems([...addedItems, planName])
    
    // Show toast and dispatch event
    toast.success(`${planName} added to cart`)
    window.dispatchEvent(new Event('cartUpdated'))
  }

  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Choose Your Exam Prep Package
          </h2>
          <p className="text-md max-w-[760px] font-medium text-muted-foreground sm:text-xl">
            Select the certification you&apos;re pursuing to see our tailored packages
          </p>
          
          {/* Course Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {Object.keys(courseConfigs).map((course) => (
              <Button 
                key={course}
                variant={selectedCourse === course ? "default" : "outline"}
                onClick={() => setSelectedCourse(course)}
                className="min-w-[80px]"
              >
                {courseConfigs[course].name}
              </Button>
            ))}
          </div>
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
                    </div>
                  </div>
                </div>
                <Button 
                  variant={addedItems.includes(plan.name) ? "outline" : plan.cta.variant} 
                  size="lg"
                  onClick={() => handleAddToCart(plan.name)}
                  disabled={addedItems.includes(plan.name)}
                >
                  {addedItems.includes(plan.name) ? "Added to Cart" : plan.cta.label}
                </Button>
                <hr className="border-input" />
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CircleCheckBig className="h-5 w-5 text-brand" />
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