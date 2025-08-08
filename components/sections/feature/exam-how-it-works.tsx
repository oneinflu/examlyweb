"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, BookOpen, Clock, BarChart3 } from "lucide-react";

type ProcessStep = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type ExamSteps = {
  title: string;
  description: string;
  steps: ProcessStep[];
};

const examStepsConfig: Record<string, ExamSteps> = {
  CMA: {
    title: "How CMA Exam Preparation Works",
    description: "Our proven 4-step process to help you pass the CMA exam on your first attempt",
    steps: [
      {
        number: 1,
        title: "Set Your Exam Goal",
        description: "Select your CMA exam timeline and create a personalized study schedule that fits your life.",
        icon: <Calendar className="h-6 w-6" />
      },
      {
        number: 2,
        title: "Follow Your Personalized Study Path",
        description: "Content & practice focused on financial management and strategic planning for your CMA exam.",
        icon: <BookOpen className="h-6 w-6" />
      },
      {
        number: 3,
        title: "Practice Realistic Exam Simulations",
        description: "Timed tests matching the CMA exam format with multiple-choice questions and essay scenarios.",
        icon: <Clock className="h-6 w-6" />
      },
      {
        number: 4,
        title: "Track Progress & Join Live Sessions",
        description: "Analytics dashboard shows your improvement while expert-led sessions clarify complex topics.",
        icon: <BarChart3 className="h-6 w-6" />
      }
    ]
  },
  CPA: {
    title: "How CPA Exam Preparation Works",
    description: "Our proven 4-step process to help you pass the CPA exam on your first attempt",
    steps: [
      {
        number: 1,
        title: "Set Your Exam Goal",
        description: "Select your CPA exam timeline and create a personalized study schedule that fits your life.",
        icon: <Calendar className="h-6 w-6" />
      },
      {
        number: 2,
        title: "Follow Your Personalized Study Path",
        description: "Content & practice focused on audit, business, regulation, and financial accounting for your CPA exam.",
        icon: <BookOpen className="h-6 w-6" />
      },
      {
        number: 3,
        title: "Practice Realistic Exam Simulations",
        description: "Timed tests matching the CPA exam format with multiple-choice questions and task-based simulations.",
        icon: <Clock className="h-6 w-6" />
      },
      {
        number: 4,
        title: "Track Progress & Join Live Sessions",
        description: "Analytics dashboard shows your improvement while expert-led sessions clarify complex topics.",
        icon: <BarChart3 className="h-6 w-6" />
      }
    ]
  },
  EA: {
    title: "How EA Exam Preparation Works",
    description: "Our proven 4-step process to help you pass the EA exam on your first attempt",
    steps: [
      {
        number: 1,
        title: "Set Your Exam Goal",
        description: "Select your EA exam timeline and create a personalized study schedule that fits your life.",
        icon: <Calendar className="h-6 w-6" />
      },
      {
        number: 2,
        title: "Follow Your Personalized Study Path",
        description: "Content & practice focused on tax law, individual and business taxation for your EA exam.",
        icon: <BookOpen className="h-6 w-6" />
      },
      {
        number: 3,
        title: "Practice Realistic Exam Simulations",
        description: "Timed tests matching the EA exam format with multiple-choice questions covering all tax scenarios.",
        icon: <Clock className="h-6 w-6" />
      },
      {
        number: 4,
        title: "Track Progress & Join Live Sessions",
        description: "Analytics dashboard shows your improvement while expert-led sessions clarify complex tax topics.",
        icon: <BarChart3 className="h-6 w-6" />
      }
    ]
  }
};

interface ExamHowItWorksProps extends React.HTMLAttributes<HTMLDivElement> {
  examType: "CMA" | "CPA" | "EA";
}

export default function ExamHowItWorks({
  examType = "CMA",
  className,
  ...props
}: ExamHowItWorksProps) {
  const [mounted, setMounted] = useState(false);
  
  // Get the correct steps for the exam type
  const config = examStepsConfig[examType] || examStepsConfig.CMA;
  const steps = config.steps;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section className={cn("w-full py-16 lg:py-24", className)} {...props}>
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10 border-primary/20 text-primary">
            Structured Learning Path
          </Badge>
          <h2 className="text-balance text-3xl font-semibold sm:text-5xl mb-4">
            {config.title}
          </h2>
          <p className="text-md max-w-[760px] mx-auto font-medium text-muted-foreground sm:text-xl">
            {config.description}
          </p>
        </motion.div>
        
        {/* Process Steps - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = () => step.icon;
            
            return (
              <motion.div
                key={index}
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col border hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold text-lg">
                        {step.number}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary mb-4 w-fit">
                      <Icon />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}