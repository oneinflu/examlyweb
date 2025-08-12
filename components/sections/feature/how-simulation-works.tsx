"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { 
  Award,
  FileText,
  Settings,
  BarChart3,
  ChevronRight,
  Play,
  Clock,
  BookOpen,
  Target,
  Zap,
  CheckCircle
} from "lucide-react";

// Type definitions
type Step = {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  options: string[];
  color: string;
  bgColor: string;
  borderColor: string;
};

type AnimationPhase = 'selection' | 'interface' | 'analytics' | 'complete';

interface HowSimulationWorksProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

// Steps data
const steps: Step[] = [
  {
    id: 1,
    icon: Award,
    title: "Choose Your Certification",
    description: "Select from professional accounting certifications",
    options: ["CPA", "CMA", "Enrolled Agent"],
    color: "primary",
    bgColor: "bg-primary/10 dark:bg-primary/20",
    borderColor: "border-primary/30 dark:border-primary/40"
  },
  {
    id: 2,
    icon: FileText,
    title: "Pick the Exam Type",
    description: "Choose the format that matches your study goals",
    options: ["MCQs", "Essays", "Task-Based Simulations", "Full-Length Test"],
    color: "primary",
    bgColor: "bg-primary/10 dark:bg-primary/20",
    borderColor: "border-primary/30 dark:border-primary/40"
  },
  {
    id: 3,
    icon: Settings,
    title: "Set Your Mode",
    description: "Customize your practice experience",
    options: ["Timed (real exam)", "Practice (learn as you go)"],
    color: "primary",
    bgColor: "bg-primary/10 dark:bg-primary/20",
    borderColor: "border-primary/30 dark:border-primary/40"
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Review & Improve",
    description: "Get detailed analytics after each session",
    options: ["Performance insights", "Weak area identification", "Progress tracking"],
    color: "primary",
    bgColor: "bg-primary/10 dark:bg-primary/20",
    borderColor: "border-primary/30 dark:border-primary/40"
  }
];

export default function HowSimulationWorks({
  className,
  title = "How Exam Simulation Works",
  subtitle = "Get started in just four simple steps and transform your exam preparation experience.",
  ...props
}: HowSimulationWorksProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('selection');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-play animation
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep(prev => {
        const next = prev >= 4 ? 1 : prev + 1;
        
        // Update animation phase based on step
        if (next === 1) setAnimationPhase('selection');
        else if (next === 2 || next === 3) setAnimationPhase('interface');
        else if (next === 4) setAnimationPhase('analytics');
        
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getStepIconClasses = (step: Step, isActive: boolean) => {
    const baseClasses = "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500";
    
    if (isActive) {
      return `${baseClasses} bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110`;
    }
    
    const inactiveColors = {
      "brand-electro": "bg-background border border-brand-electro/50 text-brand-electro",
      "brand-emerald": "bg-background border border-brand-emerald/50 text-brand-emerald",
      "brand-ultraviolet": "bg-background border border-brand-ultraviolet/50 text-brand-ultraviolet",
      "brand-ember": "bg-background border border-brand-ember/50 text-brand-ember"
    };
    return `${baseClasses} ${inactiveColors[step.color as keyof typeof inactiveColors]}`;
  };

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    setIsAutoPlaying(false);
    
    // Update animation phase
    if (stepId === 1) setAnimationPhase('selection');
    else if (stepId === 2 || stepId === 3) setAnimationPhase('interface');
    else if (stepId === 4) setAnimationPhase('analytics');
  };

  return (
    <Section className={cn("py-16 lg:py-24 relative overflow-hidden", className)} {...props}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      <div className="container max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10 border-primary/20 text-primary">
            <Play className="w-4 h-4 mr-2" />
            Simple Process
          </Badge>
          <h2 className="text-balance text-3xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Steps Navigation */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            const isCompleted = activeStep > step.id;
            
            return (
              <React.Fragment key={step.id}>
                {/* Step */}
                <div 
                  className={cn(
                    "flex flex-col items-center gap-3 cursor-pointer transition-all duration-500 group",
                    isActive && "scale-105"
                  )}
                  onClick={() => handleStepClick(step.id)}
                >
                  {/* Step Number & Icon */}
                  <div className="relative">
                    <div className={getStepIconClasses(step, isActive)}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {isCompleted && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand-emerald rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-background" />
                      </div>
                    )}
                  </div>
                  
                  {/* Step Info */}
                  <div className="text-center max-w-48">
                    <h3 className={cn(
                      "font-semibold text-sm lg:text-base transition-colors duration-300",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 hidden lg:block">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center">
                    <ChevronRight className={cn(
                      "w-6 h-6 transition-colors duration-300",
                      activeStep > step.id ? "text-primary" : "text-muted-foreground"
                    )} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Active Step Details */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            
            return (
              <Card 
                key={step.id}
                className={cn(
                  "transition-all duration-500 border-2",
                  "border-primary/30 dark:border-primary/40",
                  "bg-primary/10 dark:bg-primary/20",
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute"
                )}
              >
                <div className="p-8 lg:p-12">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0",
                      "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    )}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Options */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.options.map((option, index) => (
                          <div 
                            key={index}
                            className={cn(
                              "flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 hover:shadow-md",
                              "bg-background/50 border-primary/20 hover:border-primary/50"
                            )}
                          >
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-sm font-medium text-foreground">
                              {option}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Visual Animation Preview */}
       
      </div>
    </Section>
  );
}
