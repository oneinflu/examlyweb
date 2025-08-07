"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import Glow from "@/components/ui/glow";

type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

const defaultSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Understand & Strategize",
    description:
      "We start by analyzing your exam goals and learning needs, creating a clear and effective roadmap to help you focus on what truly matters.",
  },
  {
    number: 2,
    title: "Learn & Practice",
    description:
      "Through structured content, real-time simulations, and guided practice, we ensure every concept is mastered and exam readiness is built step by step.",
  },
  {
    number: 3,
    title: "Perform & Succeed",
    description:
      "With continuous guidance, performance tracking, and proven strategies, we prepare you to excel confidently in the final exam.",
  },
];

interface PreparationProcessProps extends React.HTMLAttributes<HTMLDivElement> {
  steps?: ProcessStep[];
  title?: string;
}

export default function PreparationProcess({
  steps = defaultSteps,
  className,
  ...props
}: PreparationProcessProps) {
  return (
    <Section className={cn("w-full overflow-hidden", className)} {...props}>
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl font-semibold sm:text-5xl mb-8">
            We follow a simple,<br />yet effective preparation process
          </h2>
          
          <div className="mt-16">
            {/* Mobile Layout - Stacked */}
            <div className="flex flex-col gap-12 md:hidden">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  {/* Circle with number */}
                  <div className="relative mb-6">
                    <div className="h-20 w-20 rounded-full border-2 border-foreground flex items-center justify-center text-3xl font-bold relative overflow-hidden group-hover:text-white transition-colors duration-300 bg-white">
                      {/* Fill effect on hover */}
                      <div className="absolute inset-0 bg-brand scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full" />
                      <span className="relative z-10">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{step.description}</p>
                </div>
              ))}
            </div>
            
            {/* Desktop Layout - Horizontal with connecting line */}
            <div className="hidden md:block">
              <div className="relative max-w-5xl mx-auto">
                {/* Process steps container */}
                <div className="grid grid-cols-3 gap-8 lg:gap-12">
                  {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center group relative">
                      {/* Circle with number */}
                      <div className="relative mb-8">
                        <div className="h-24 w-24 rounded-full border-2 border-foreground flex items-center justify-center text-4xl font-bold relative overflow-hidden group-hover:text-white transition-colors duration-300 bg-white">
                          {/* Fill effect on hover */}
                          <div className="absolute inset-0 bg-brand scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full" />
                          <span className="relative z-10">{step.number}</span>
                        </div>
                      </div>
                      
                      {/* Title and description */}
                      <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* Connecting line - positioned absolutely to avoid overflow */}
                <div className="absolute top-12 left-0 right-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full max-w-3xl relative">
                    <div className="absolute top-0 left-[16.67%] right-[16.67%] h-0.5 border-dashed border-t-2 border-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Glow variant="center" className="opacity-30" />
    </Section>
  );
}