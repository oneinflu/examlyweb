/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
  AlertTriangle, 
  Clock, 
  FileQuestion, 
  Brain, 
  CheckCircle, 
  Zap,
  TrendingDown,
  TrendingUp,
  ArrowRight
} from "lucide-react";

// Type definitions
type PainPoint = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  percentage: string;
  color: string;
};

type Solution = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  improvement: string;
  color: string;
};

interface ExamSimulationProblemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

// Balanced data structure
const painPoints: PainPoint[] = [
  {
    icon: Brain,
    title: "Exam Anxiety Paralysis",
    description: "Students freeze under timed pressure despite knowing the material",
    percentage: "73%",
    color: "red"
  },
  {
    icon: FileQuestion,
    title: "Format Confusion",
    description: "Unfamiliar interface wastes precious exam minutes",
    percentage: "15min",
    color: "orange"
  },
  {
    icon: Clock,
    title: "No Practice Environment",
    description: "First real exam conditions experience happens on test day",
    percentage: "1st",
    color: "yellow"
  }
];

const solutions: Solution[] = [
  {
    icon: CheckCircle,
    title: "Confidence Under Pressure",
    description: "Regular simulation builds mental resilience and reduces anxiety",
    improvement: "+27%",
    color: "emerald"
  },
  {
    icon: Zap,
    title: "Interface Mastery",
    description: "Familiar navigation allows focus on answering questions",
    improvement: "15min saved",
    color: "blue"
  },
  {
    icon: TrendingUp,
    title: "Exam-Ready Mindset",
    description: "Multiple practice sessions create automatic exam behaviors",
    improvement: "92% pass rate",
    color: "green"
  }
];

export default function ExamSimulationProblem({
  className,
  title = "Knowledge is One Thing. Exam Readiness is Another.",
  subtitle = "Most students fail not because they don't know the material, but because they've never experienced real exam conditions.",
  ...props
}: ExamSimulationProblemProps) {
  const [hoveredCard, setHoveredCard] = useState<{ side: 'problem' | 'solution', index: number } | null>(null);

  const getColorClasses = (color: string, type: 'problem' | 'solution') => {
    const baseColors = {
      red: type === 'problem' ? 'border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/10' : '',
      orange: type === 'problem' ? 'border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/10' : '',
      yellow: type === 'problem' ? 'border-yellow-200 bg-yellow-50/50 dark:border-yellow-800 dark:bg-yellow-950/10' : '',
      emerald: type === 'solution' ? 'border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/10' : '',
      blue: type === 'solution' ? 'border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/10' : '',
      green: type === 'solution' ? 'border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/10' : ''
    };
    return baseColors[color as keyof typeof baseColors] || '';
  };

  const getIconClasses = (color: string, type: 'problem' | 'solution') => {
    const iconColors = {
      red: type === 'problem' ? 'bg-red-100 dark:bg-red-900/20 text-red-600' : '',
      orange: type === 'problem' ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-600' : '',
      yellow: type === 'problem' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600' : '',
      emerald: type === 'solution' ? 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600' : '',
      blue: type === 'solution' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600' : '',
      green: type === 'solution' ? 'bg-green-100 dark:bg-green-900/20 text-green-600' : ''
    };
    return iconColors[color as keyof typeof iconColors] || '';
  };

  return (
    <Section className={cn("py-16 lg:py-24 relative overflow-hidden", className)} {...props}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      
      <div className="container max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 bg-amber-50/50 border-amber-200 text-amber-700 dark:bg-amber-950/20 dark:border-amber-800 dark:text-amber-300">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Hidden Challenge
          </Badge>
          <h2 className="text-balance text-3xl lg:text-5xl font-bold mb-6">
            Knowledge is One Thing.{" "}
            <span className="text-primary">Exam Readiness</span> is Another.
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Main Comparison Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Problems */}
          <div className="space-y-6">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Without Simulation</h3>
                <p className="text-sm text-muted-foreground">Common challenges students face</p>
              </div>
            </div>

            {/* Problem Cards */}
            <div className="space-y-4">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                const isHovered = hoveredCard?.side === 'problem' && hoveredCard?.index === index;
                return (
                  <Card 
                    key={index}
                    className={cn(
                      "p-6 border-2 transition-all duration-300 cursor-pointer group hover:shadow-lg",
                      getColorClasses(point.color, 'problem'),
                      isHovered && "shadow-lg scale-[1.02]"
                    )}
                    onMouseEnter={() => setHoveredCard({ side: 'problem', index })}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200",
                        getIconClasses(point.color, 'problem')
                      )}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="font-bold text-foreground leading-tight">
                            {point.title}
                          </h4>
                          <div className="text-right flex-shrink-0">
                            <div className="text-lg font-bold text-red-600">
                              {point.percentage}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {index === 0 ? 'affected' : index === 1 ? 'lost' : 'exposure'}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Problem Summary */}
            <Card className="p-6 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">65%</div>
                <div className="text-sm text-red-700 dark:text-red-400 font-medium">
                  Average pass rate without simulation
                </div>
              </div>
            </Card>
          </div>

          {/* Center Arrow */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-background border-2 border-primary/20 rounded-full p-4 shadow-lg">
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Right Side - Solutions */}
          <div className="space-y-6">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">With Examly Simulation</h3>
                <p className="text-sm text-muted-foreground">How simulation transforms performance</p>
              </div>
            </div>

            {/* Solution Cards */}
            <div className="space-y-4">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                const isHovered = hoveredCard?.side === 'solution' && hoveredCard?.index === index;
                return (
                  <Card 
                    key={index}
                    className={cn(
                      "p-6 border-2 transition-all duration-300 cursor-pointer group hover:shadow-lg",
                      getColorClasses(solution.color, 'solution'),
                      isHovered && "shadow-lg scale-[1.02]"
                    )}
                    onMouseEnter={() => setHoveredCard({ side: 'solution', index })}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200",
                        getIconClasses(solution.color, 'solution')
                      )}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="font-bold text-foreground leading-tight">
                            {solution.title}
                          </h4>
                          <div className="text-right flex-shrink-0">
                            <div className="text-lg font-bold text-emerald-600">
                              {solution.improvement}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              improvement
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Solution Summary */}
            <Card className="p-6 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">92%</div>
                <div className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                  Pass rate with regular simulation practice
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Impact Banner */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-primary">27% Performance Boost</span>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Students who practice with exam simulations consistently outperform those who don&apos;t, 
                with significantly higher pass rates and reduced test anxiety.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">73%</div>
                  <div className="text-sm text-muted-foreground">Less exam anxiety</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15min</div>
                  <div className="text-sm text-muted-foreground">Time saved on navigation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">5x</div>
                  <div className="text-sm text-muted-foreground">More exam-ready confidence</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}