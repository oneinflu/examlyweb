"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { 
  CalendarIcon, 
  BrainIcon, 
  TrendingUpIcon,
  ClockIcon,
  BookOpenIcon,
  TargetIcon,
  ArrowRightIcon,
  CheckIcon,
  PlayIcon
} from "lucide-react";

type LearningStep = {
  number: number;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  details: string[];
};

const learningSteps: LearningStep[] = [
  {
    number: 1,
    title: "Tell Us Your Goal",
    description: "Enter exam date, syllabus, available hours",
    icon: TargetIcon,
    details: [
      "Set your exam date",
      "Choose syllabus topics",
      "Define daily study hours",
      "Select difficulty level"
    ]
  },
  {
    number: 2,
    title: "AI Creates Your Plan",
    description: "Instant smart timetable with priorities",
    icon: BrainIcon,
    details: [
      "AI analyzes your inputs",
      "Generates optimal schedule",
      "Prioritizes weak areas",
      "Balances study load"
    ]
  },
  {
    number: 3,
    title: "Adapt as You Go",
    description: "Plan updates daily based on progress",
    icon: TrendingUpIcon,
    details: [
      "Track daily progress",
      "Auto-adjust schedule",
      "Identify knowledge gaps",
      "Optimize study path"
    ]
  }
];

interface LearningPathSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export default function LearningPathSection({
  className,
  title = "How Learning Path Works",
  ...props
}: LearningPathSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  // Auto-cycle through steps for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % learningSteps.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Update progress bar
  useEffect(() => {
    setProgressWidth((activeStep / (learningSteps.length - 1)) * 100);
  }, [activeStep]);

  return (
    <Section className={cn("relative overflow-hidden", className)} {...props}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand-emerald/5" />
      
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 bg-brand/10 border-brand/20 text-brand">
            <PlayIcon className="w-4 h-4 mr-2" />
            Smart & Easy
          </Badge>
          <h2 className="text-balance text-3xl font-semibold sm:text-5xl mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered system makes exam preparation effortless with intelligent planning and adaptive learning.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col gap-8 md:hidden">
            {learningSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              
              return (
                <Card 
                  key={index} 
                  className={cn(
                    "p-6 transition-all duration-500 cursor-pointer border-2",
                    isActive 
                      ? "border-brand bg-brand/5 shadow-lg scale-105" 
                      : "border-border/50 hover:border-brand/30"
                  )}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                      isActive 
                        ? "bg-brand text-white" 
                        : "bg-muted text-muted-foreground"
                    )}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      {isActive && (
                        <div className="space-y-2 animate-in fade-in-0 slide-in-from-top-4 duration-500">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center gap-2 text-sm">
                              <CheckIcon className="w-4 h-4 text-brand" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden md:block">
            {/* Progress Bar */}
            <div className="relative mb-12">
              <div className="absolute top-6 left-0 right-0 h-1 bg-muted rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-brand to-brand-emerald rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressWidth}%` }}
                />
              </div>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-3 gap-8 lg:gap-12 mb-12">
              {learningSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isPast = index < activeStep;
                
                return (
                  <div 
                    key={index} 
                    className="flex flex-col items-center text-center group cursor-pointer"
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Step Circle */}
                    <div className="relative mb-6">
                      <div className={cn(
                        "w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 relative overflow-hidden",
                        isActive 
                          ? "border-brand bg-brand text-white shadow-lg scale-110" 
                          : isPast
                          ? "border-brand-emerald bg-brand-emerald text-white"
                          : "border-muted bg-background text-muted-foreground group-hover:border-brand/50"
                      )}>
                        {isPast ? (
                          <CheckIcon className="w-8 h-8" />
                        ) : (
                          <Icon className="w-8 h-8" />
                        )}
                        
                        {/* Pulse animation for active step */}
                        {isActive && (
                          <div className="absolute inset-0 rounded-full border-2 border-brand animate-ping opacity-30" />
                        )}
                      </div>
                      
                      {/* Step number badge */}
                      <div className={cn(
                        "absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300",
                        isActive 
                          ? "bg-brand-fire text-white" 
                          : "bg-muted text-muted-foreground"
                      )}>
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <h3 className={cn(
                      "text-lg font-semibold mb-2 transition-colors duration-300",
                      isActive ? "text-brand" : "text-foreground"
                    )}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Active Step Details */}
            <Card className="p-8 bg-gradient-to-r from-brand/5 to-brand-emerald/5 border-brand/20">
              <div className={cn(
                "transition-all duration-500",
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              )}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center">
                    {React.createElement(learningSteps[activeStep].icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{learningSteps[activeStep].title}</h3>
                    <p className="text-muted-foreground">{learningSteps[activeStep].description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {learningSteps[activeStep].details.map((detail, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckIcon className="w-5 h-5 text-brand flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Visual Progress Animation */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-sm font-medium text-brand">
              Plan updates in real-time based on your progress
            </span>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </Section>
  );
}