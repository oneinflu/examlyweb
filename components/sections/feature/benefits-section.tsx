"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
  TargetIcon, 
  RefreshCwIcon, 
  BarChart3Icon,
  CalendarIcon,
  BrainIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  MonitorIcon,
  TrendingUpIcon,
  RotateCcwIcon,
  BookOpenIcon
} from "lucide-react";

type Benefit = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
};

// Default benefits for Learning Path
const defaultBenefits: Benefit[] = [
  {
    icon: TargetIcon,
    title: "Never Miss a Topic",
    description: "Automatically schedules all syllabus items before exam day",
    color: "text-brand",
    bgColor: "bg-brand/10",
    borderColor: "border-brand/20"
  },
  {
    icon: RefreshCwIcon,
    title: "Adapts to Your Life",
    description: "Reschedules if you miss a day or finish early",
    color: "text-brand-emerald",
    bgColor: "bg-brand-emerald/10",
    borderColor: "border-brand-emerald/20"
  },
  {
    icon: BarChart3Icon,
    title: "Progress Tracking",
    description: "Visual completion bars and readiness score",
    color: "text-brand-fire",
    bgColor: "bg-brand-fire/10",
    borderColor: "border-brand-fire/20"
  },
  {
    icon: CalendarIcon,
    title: "Revision Planning",
    description: "Adds strategic revision days before the exam",
    color: "text-brand-ember",
    bgColor: "bg-brand-ember/10",
    borderColor: "border-brand-ember/20"
  },
  {
    icon: BrainIcon,
    title: "AI Difficulty Analysis",
    description: "Prioritizes weak areas based on your mock test results",
    color: "text-brand",
    bgColor: "bg-brand/10",
    borderColor: "border-brand/20"
  }
];

// Exam Simulation benefits
const examSimulationBenefits: Benefit[] = [
  {
    icon: ClockIcon,
    title: "Realistic Timing",
    description: "Practice pacing so you never run out of time",
    color: "text-brand",
    bgColor: "bg-brand/10",
    borderColor: "border-brand/20"
  },
  {
    icon: MonitorIcon,
    title: "Authentic Interface",
    description: "Mirrors the look & feel of official exams",
    color: "text-brand-emerald",
    bgColor: "bg-brand-emerald/10",
    borderColor: "border-brand-emerald/20"
  },
  {
    icon: BarChart3Icon,
    title: "Performance Analytics",
    description: "See strengths, weaknesses, & topic-level mastery",
    color: "text-brand-fire",
    bgColor: "bg-brand-fire/10",
    borderColor: "border-brand-fire/20"
  },
  {
    icon: TrendingUpIcon,
    title: "Adaptive Difficulty",
    description: "Questions get harder as you improve",
    color: "text-brand-ember",
    bgColor: "bg-brand-ember/10",
    borderColor: "border-brand-ember/20"
  },
  {
    icon: RotateCcwIcon,
    title: "Unlimited Practice",
    description: "Keep taking simulations until you're confident",
    color: "text-brand",
    bgColor: "bg-brand/10",
    borderColor: "border-brand/20"
  }
];

interface BenefitsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  benefits?: Benefit[];
  featureType?: 'learning-path' | 'exam-simulation' | 'live-classes' | 'self-assessment' | 'learning-community' | 'offline-access';
}

export default function BenefitsSection({
  className,
  title,
  subtitle,
  benefits,
  featureType = 'learning-path',
  ...props
}: BenefitsSectionProps) {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  // Determine which benefits to use
  const getBenefits = () => {
    if (benefits) return benefits;
    
    switch (featureType) {
      case 'exam-simulation':
        return examSimulationBenefits;
      case 'learning-path':
      default:
        return defaultBenefits;
    }
  };

  // Determine title based on feature type
  const getTitle = () => {
    if (title) return title;
    
    switch (featureType) {
      case 'exam-simulation':
        return 'Core Benefits of Exam Simulation';
      case 'live-classes':
        return 'Core Benefits of Live Classes';
      case 'self-assessment':
        return 'Core Benefits of Self-Assessment';
      case 'learning-community':
        return 'Core Benefits of Learning Community';
      case 'offline-access':
        return 'Core Benefits of Offline Access';
      case 'learning-path':
      default:
        return 'Core Benefits of Learning Path';
    }
  };

  // Determine subtitle based on feature type
  const getSubtitle = () => {
    if (subtitle) return subtitle;
    
    switch (featureType) {
      case 'exam-simulation':
        return 'Experience the real advantages of authentic exam simulation that builds confidence and improves performance.';
      case 'live-classes':
        return 'Discover how interactive live sessions with expert instructors accelerate your learning journey.';
      case 'self-assessment':
        return 'Unlock the power of smart self-assessment tools that provide instant feedback and track your progress.';
      case 'learning-community':
        return 'Connect with a vibrant community of learners and benefit from collaborative learning experiences.';
      case 'offline-access':
        return 'Enjoy uninterrupted learning with offline access that keeps you studying anytime, anywhere.';
      case 'learning-path':
      default:
        return 'Experience the real advantages of AI-powered learning that transforms how you prepare for exams.';
    }
  };

  const currentBenefits = getBenefits();
  const currentTitle = getTitle();
  const currentSubtitle = getSubtitle();

  return (
    <Section className={cn("relative overflow-hidden", className)} {...props}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-brand/5 to-background" />
      
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 bg-brand/10 border-brand/20 text-brand">
            <SparklesIcon className="w-4 h-4 mr-2" />
            Benefits, Not Features
          </Badge>
          <h2 className="text-balance text-3xl font-semibold sm:text-5xl mb-6">
            {currentTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentSubtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isHovered = hoveredBenefit === index;
            
            return (
              <Card 
                key={index}
                className={cn(
                  "group relative p-6 transition-all duration-500 cursor-pointer border-2 overflow-hidden",
                  "hover:shadow-xl hover:scale-105",
                  isHovered 
                    ? `${benefit.borderColor} ${benefit.bgColor}` 
                    : "border-border/50 bg-card hover:border-brand/30"
                )}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                {/* Background glow effect */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  "bg-gradient-to-br from-transparent via-brand/5 to-transparent"
                )} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
                    isHovered 
                      ? `${benefit.bgColor} ${benefit.color}` 
                      : "bg-muted text-muted-foreground group-hover:bg-brand/10 group-hover:text-brand"
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={cn(
                    "text-lg font-semibold mb-3 transition-colors duration-300",
                    isHovered ? benefit.color : "text-foreground group-hover:text-brand"
                  )}>
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className={cn(
                    "flex items-center gap-2 text-xs font-medium transition-all duration-300",
                    isHovered 
                      ? `${benefit.color} translate-x-1` 
                      : "text-muted-foreground group-hover:text-brand group-hover:translate-x-1"
                  )}>
                    <span>Learn more</span>
                    <ArrowRightIcon className="w-3 h-3" />
                  </div>
                </div>
                
                {/* Animated border */}
                <div className={cn(
                  "absolute inset-0 rounded-lg border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  benefit.borderColor
                )} />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-brand/10 via-brand-emerald/10 to-brand/10 border-brand/20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center">
                <CheckCircleIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-brand mb-1">
                  Ready to experience these benefits?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Join thousands of students who&apos;ve transformed their exam preparation
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-emerald/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-fire/10 rounded-full blur-xl animate-pulse delay-500" />
    </Section>
  );
}