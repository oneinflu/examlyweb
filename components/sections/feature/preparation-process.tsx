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
      <div className="mx-auto max-w-container  text-center mb-16">
        <h2 className="text-balance item-center text-3xl font-semibold sm:text-5xl mb-8">
         We follow a simple,<br></br>yet effective preparation process
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative mt-16">
          {/* Connecting lines for desktop - positioned behind circles */}
          <div className="hidden md:block absolute top-12 left-1/6 w-2/3 h-0.5 border-dashed border-t-2 border-black z-0">
            {/* This is the connecting line between circles */}
          </div>
          
          {/* Process steps */}
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center w-full md:w-1/3 group relative z-10"
            >
              {/* Circle with number */}
              <div className="relative mb-8">
                <div 
                  className="h-24 w-24 rounded-full border-2 border-foreground flex items-center justify-center text-4xl font-bold relative overflow-hidden group-hover:text-white transition-colors duration-300 bg-white"
                >
                  {/* Fill effect on hover */}
                  <div 
                    className="absolute inset-0 bg-brand scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full"
                  />
                  <span className="relative z-10">{step.number}</span>
                </div>
              </div>
              
              {/* Title and description */}
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Glow variant="center" className="opacity-30" />
    </Section>
  );
}