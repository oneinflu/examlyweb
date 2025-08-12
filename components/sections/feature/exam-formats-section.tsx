/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
  Award,
  FileText,
  PenTool,
  Calculator,
  Database,
  BookOpen,
  CheckCircle,
  Play,
  Monitor
} from "lucide-react";

// Type definitions
type QuestionType = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  preview: string;
  difficulty?: string;
};

type Certification = {
  id: string;
  name: string;
  fullName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  questionTypes: QuestionType[];
};

interface ExamFormatsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

// Certifications data
const certifications: Certification[] = [
  {
    id: "cpa",
    name: "CPA",
    fullName: "Certified Public Accountant",
    color: "primary",
    bgColor: "bg-primary/20 dark:bg-primary/30",
    borderColor: "border-primary/40 dark:border-primary/50",
    questionTypes: [
      {
        id: "mcq",
        title: "MCQs (Difficulty-Adaptive)",
        description: "Multiple choice questions that adapt to your performance level",
        features: ["Adaptive difficulty", "Instant feedback", "Explanation provided", "Timer tracking"],
        icon: CheckCircle,
        preview: "Interactive multiple choice with real-time difficulty adjustment",
        difficulty: "Adaptive"
      },
      {
        id: "tbs",
        title: "Task-Based Simulations",
        description: "Real-world scenarios with data tabs, exhibits, and calculation cells",
        features: ["Data tabs navigation", "Excel-like calculations", "Document exhibits", "Research tools"],
        icon: Calculator,
        preview: "Comprehensive simulation environment with multiple data sources"
      },
      {
        id: "wc",
        title: "Written Communications",
        description: "Professional writing tasks and business communications",
        features: ["Rich text editor", "Grammar checking", "Word count", "Professional templates"],
        icon: PenTool,
        preview: "Professional writing interface with formatting tools"
      }
    ]
  },
  {
    id: "cma",
    name: "CMA",
    fullName: "Certified Management Accountant",
    color: "primary",
    bgColor: "bg-primary/20 dark:bg-primary/30",
    borderColor: "border-primary/40 dark:border-primary/50",
    questionTypes: [
      {
        id: "mcq",
        title: "MCQs",
        description: "Comprehensive multiple choice questions covering management accounting",
        features: ["Strategic focus", "Case-based scenarios", "Detailed explanations", "Performance analytics"],
        icon: CheckCircle,
        preview: "Strategic management accounting multiple choice questions"
      },
      {
        id: "essay",
        title: "Essay Questions",
        description: "Structured and scenario-based essay responses",
        features: ["Scenario analysis", "Structured responses", "Word processing", "Outline tools"],
        icon: FileText,
        preview: "Professional essay writing environment with scenario analysis"
      }
    ]
  },
  {
    id: "ea",
    name: "Enrolled Agent",
    fullName: "IRS Enrolled Agent",
    color: "primary",
    bgColor: "bg-primary/20 dark:bg-primary/30",
    borderColor: "border-primary/40 dark:border-primary/50",
    questionTypes: [
      {
        id: "mcq-tax",
        title: "MCQs with Tax Scenarios",
        description: "Tax-focused questions with IRS references and real scenarios",
        features: ["IRS code references", "Tax scenarios", "Form examples", "Regulation lookup"],
        icon: BookOpen,
        preview: "Tax-specific questions with integrated IRS reference materials"
      }
    ]
  }
];

export default function ExamFormatsSection({
  className,
  title = "Exam Formats We Cover",
  subtitle = "Experience authentic exam environments across all major accounting certifications with our comprehensive question formats.",
  ...props
}: ExamFormatsSectionProps) {
  const [activeCertification, setActiveCertification] = useState<string>("cpa");
  const [activeQuestionType, setActiveQuestionType] = useState<string>("mcq");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleCertificationChange = (certId: string) => {
    if (certId === activeCertification) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCertification(certId);
      const firstQuestionType = certifications.find(c => c.id === certId)?.questionTypes[0]?.id || "mcq";
      setActiveQuestionType(firstQuestionType);
      setIsAnimating(false);
    }, 150);
  };

  const handleQuestionTypeChange = (typeId: string) => {
    if (typeId === activeQuestionType) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveQuestionType(typeId);
      setIsAnimating(false);
    }, 150);
  };

  const activeCert = certifications.find(c => c.id === activeCertification);
  const activeType = activeCert?.questionTypes.find(t => t.id === activeQuestionType);

  return (
    <Section className={cn("py-16 lg:py-24 relative overflow-hidden", className)} {...props}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      
      <div className="container max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/20 border-primary/30 text-primary">
            <Monitor className="w-4 h-4 mr-2" />
            Comprehensive Coverage
          </Badge>
          <h2 className="text-balance text-3xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Certification Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {certifications.map((cert) => {
            const isActive = activeCertification === cert.id;
            
            return (
              <button
                key={cert.id}
                onClick={() => handleCertificationChange(cert.id)}
                className={cn(
                  "flex flex-col items-center gap-2 p-6 rounded-2xl border-2 transition-all duration-300 min-w-[160px]",
                  isActive 
                    ? `border-primary/50 bg-primary/20 dark:bg-primary/30 scale-105 shadow-lg shadow-primary/20` 
                    : "border-border bg-background hover:border-primary/30 hover:bg-primary/5 hover:scale-102"
                )}
              >
                <Award className={cn(
                  "w-8 h-8 transition-colors duration-300",
                  isActive ? "text-primary" : "text-muted-foreground"
                )} />
                <div className="text-center">
                  <h3 className={cn(
                    "font-bold text-lg transition-colors duration-300",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.fullName}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Question Type Tabs */}
        {activeCert && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {activeCert.questionTypes.map((type) => {
              const Icon = type.icon;
              const isActive = activeQuestionType === type.id;
              
              return (
                <button
                  key={type.id}
                  onClick={() => handleQuestionTypeChange(type.id)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300",
                    isActive 
                      ? `border-primary/50 bg-primary/30 dark:bg-primary/40 text-primary shadow-sm shadow-primary/20` 
                      : "border-border bg-background hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{type.title}</span>
                  {type.difficulty && (
                    <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                      {type.difficulty}
                    </Badge>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Active Question Type Details */}
        {activeType && activeCert && (
          <div className={cn(
            "transition-all duration-300",
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          )}>
            <Card className={cn(
              "border-2 shadow-xl",
              "border-primary/40 dark:border-primary/50",
              "bg-primary/20 dark:bg-primary/30"
            )}>
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center",
                        "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      )}>
                        <activeType.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                          {activeType.title}
                        </h3>
                        <p className="text-muted-foreground mt-1">
                          {activeCert.fullName}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {activeType.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground mb-4">Key Features:</h4>
                      {activeType.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Visual Preview */}
                  <div className="relative">
                    <Card className="p-6 bg-background/80 border-2 border-dashed border-muted-foreground/30 dark:bg-background/60">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center bg-primary/40 dark:bg-primary/50">
                          <Play className="w-10 h-10 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-foreground mb-2">
                            Interactive Preview
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {activeType.preview}
                          </p>
                        </div>
                        <button className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30">
                          Launch Demo
                        </button>
                      </div>
                    </Card>
                    
                    {/* Animated Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse" />
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-pulse delay-300" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Certifications Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Question Formats</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Exam Authentic</div>
          </div>
        </div>
      </div>
    </Section>
  );
}