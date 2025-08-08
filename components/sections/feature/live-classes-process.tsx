/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { 
  Calendar,
  Video,
  MessageCircleQuestion,
  Filter,
  Users,
  Download,
  PlayCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  User,
  FileText,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    id: "choose",
    number: "01",
    title: "Choose Your Class",
    description: "Filter by exam, topic, and instructor",
    icon: Calendar,
    features: [
      "Browse by exam type (CPA, CMA, etc.)",
      "Filter by specific topics",
      "Select preferred instructors",
      "View class schedules & timings"
    ],
    color: "blue"
  },
  {
    id: "join",
    number: "02", 
    title: "Join Live",
    description: "Real-time video, screen share, and collaborative whiteboard",
    icon: Video,
    features: [
      "HD video streaming",
      "Interactive screen sharing",
      "Collaborative whiteboard",
      "Real-time chat participation"
    ],
    color: "emerald"
  },
  {
    id: "answers",
    number: "03",
    title: "Get Answers",
    description: "Instant Q&A, downloadable notes, and class recording",
    icon: MessageCircleQuestion,
    features: [
      "Ask questions instantly",
      "Download class notes",
      "Access full recordings",
      "Get personalized feedback"
    ],
    color: "purple"
  }
];

export default function LiveClassesProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-cycle through steps for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animation sequence
  useEffect(() => {
    const animationSequence = async () => {
      setIsAnimating(true);
      
      // Phase 1: User clicks schedule
      setAnimationPhase(1);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Phase 2: Joins class
      setAnimationPhase(2);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Phase 3: Asks question
      setAnimationPhase(3);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Phase 4: Teacher replies
      setAnimationPhase(4);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsAnimating(false);
      setAnimationPhase(0);
    };

    const interval = setInterval(animationSequence, 8000);
    return () => clearInterval(interval);
  }, []);

  const getStepClasses = (index: number) => {
    const step = processSteps[index];
    const isActive = index === activeStep;
    
    const colorClasses = {
      blue: isActive 
        ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20 shadow-lg shadow-blue-200 dark:shadow-blue-900/50" 
        : "border-blue-200 dark:border-blue-800 hover:border-blue-300",
      emerald: isActive 
        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 shadow-lg shadow-emerald-200 dark:shadow-emerald-900/50" 
        : "border-emerald-200 dark:border-emerald-800 hover:border-emerald-300",
      purple: isActive 
        ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20 shadow-lg shadow-purple-200 dark:shadow-purple-900/50" 
        : "border-purple-200 dark:border-purple-800 hover:border-purple-300"
    };
    
    return cn(
      "transition-all duration-500 cursor-pointer",
      colorClasses[step.color as keyof typeof colorClasses],
      isActive && "scale-105"
    );
  };

  const getIconClasses = (index: number) => {
    const step = processSteps[index];
    const isActive = index === activeStep;
    
    const colorClasses = {
      blue: isActive 
        ? "bg-blue-500 text-white shadow-lg" 
        : "bg-blue-100 dark:bg-blue-900/20 text-blue-600",
      emerald: isActive 
        ? "bg-emerald-500 text-white shadow-lg" 
        : "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600",
      purple: isActive 
        ? "bg-purple-500 text-white shadow-lg" 
        : "bg-purple-100 dark:bg-purple-900/20 text-purple-600"
    };
    
    return cn(
      "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500",
      colorClasses[step.color as keyof typeof colorClasses],
      isActive && "scale-110"
    );
  };

  return (
    <Section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-brand/10 border-brand/20 text-brand">
            <Sparkles className="w-3 h-3 mr-1" />
            Simple Process
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            How Live Expert-Led Classes <span className="text-brand">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of students who&apos;ve transformed their learning with our simple, 
            yet powerful live class experience.
          </p>
        </div>

        {/* Visual Animation Demo */}
       

        {/* Three-Step Process */}
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col gap-8 md:hidden">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              
              return (
                <Card 
                  key={step.id}
                  className={getStepClasses(index)}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={getIconClasses(index)}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-muted-foreground">{step.number}</span>
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                      </div>
                    </div>
                    
                    {isActive && (
                      <div className="space-y-2 animate-in fade-in-0 slide-in-from-top-4 duration-500">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-brand" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden md:block">
            {/* Progress Line */}
            <div className="relative mb-12">
              <div className="absolute top-8 left-0 right-0 h-1 bg-muted rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-brand to-brand-emerald rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-3 gap-8 lg:gap-12 mb-12">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                
                return (
                  <div 
                    key={step.id}
                    className="flex flex-col items-center text-center group cursor-pointer"
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Step Circle */}
                    <div className="relative mb-6">
                      <div className={getIconClasses(index)}>
                        <Icon className="w-8 h-8" />
                      </div>
                      
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-foreground text-background rounded-full text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </div>
                      
                      {/* Pulse animation for active step */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-2 border-brand animate-ping opacity-30" />
                      )}
                    </div>
                    
                    {/* Step Info */}
                    <h3 className={cn(
                      "font-bold text-lg mb-2 transition-colors duration-300",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Active Step Details */}
            <Card className="p-8 bg-gradient-to-r from-muted/30 to-muted/10 border-0">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {processSteps[activeStep].title} Details
                </h3>
                <p className="text-muted-foreground">
                  Everything you need to know about this step
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {processSteps[activeStep].features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-background/50 rounded-lg transition-all duration-300 hover:bg-background/80"
                  >
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to experience the power of live, expert-led learning?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand hover:bg-brand/90 text-white px-8">
              Browse Live Classes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <PlayCircle className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}