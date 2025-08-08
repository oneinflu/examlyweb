"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Play, Timer, BookOpen, CheckCircle, Target, Clock, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ExamSimulationHero() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [examProgress, setExamProgress] = useState(0);

  // Animate progress on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setExamProgress(60);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const examTypes = [
    { name: "CPA", simulations: "Task-based Simulations" },
    { name: "CMA", simulations: "Essay Questions" },
    { name: "EA", simulations: "Multiple Choice" }
  ];

  return (
    <Section className="py-20 lg:py-32 bg-background">
      <div className="container max-w-container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <Badge variant="outline" className="w-fit px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              Used for 1M+ practice questions across 3 major certifications
            </Badge>
            
            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Practice Like It&apos;s the{" "}
                <span className="text-primary">
                  Real Exam
                </span>
                {" "}— Before the Real Exam.
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                From CPA task-based simulations to CMA essays and MCQs, get exam-day ready with authentic formats, realistic timing, and full-length tests.
              </p>
            </div>
            
            {/* Exam Types Grid */}
            <div className="grid grid-cols-3 gap-4 my-8">
              {examTypes.map((exam, index) => (
                <div key={index} className="text-center p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <span className="font-bold text-sm">{exam.name[0]}</span>
                  </div>
                  <div className="text-sm font-semibold">{exam.name}</div>
                  <div className="text-xs text-muted-foreground">{exam.simulations}</div>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="font-semibold px-8 py-4 text-lg group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Your First Simulation
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="font-semibold px-8 py-4 text-lg"
              >
                See a Demo Exam
              </Button>
            </div>
          </div>
          
          {/* Right Visual - Clean Split Screen */}
          <div className="relative">
            <Card className="p-6 border-2 shadow-lg">
              {/* Split Screen Container */}
              <div className="grid grid-cols-2 gap-4 h-96">
                {/* Left Side - Student Study Mode */}
                <div className="bg-muted/30 rounded-xl p-4 border">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Study Mode</div>
                        <div className="text-xs text-muted-foreground">Preparing for exam</div>
                      </div>
                    </div>
                    
                    {/* Study Progress */}
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-3/4 rounded-full" />
                      </div>
                      <div className="text-xs text-muted-foreground">Chapter 5: Financial Reporting</div>
                    </div>
                    
                    {/* Study Notes */}
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-2 bg-muted rounded" />
                      ))}
                    </div>
                    
                    {/* Study Stats */}
                    <div className="mt-4 p-2 bg-emerald-50 dark:bg-emerald-950/20 rounded border border-emerald-200 dark:border-emerald-800">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-3 h-3 text-emerald-600" />
                        <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                          85% Progress
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Exam Interface */}
                <div className="bg-muted/30 rounded-xl p-4 border">
                  <div className="space-y-4">
                    {/* Exam Header with Timer */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold">CPA Simulation</div>
                      <div className="flex items-center gap-2 bg-red-50 dark:bg-red-950/20 px-2 py-1 rounded border border-red-200 dark:border-red-800">
                        <Timer className="w-3 h-3 text-red-600" />
                        <span className="text-xs font-mono text-red-600 font-bold">
                          2:45:30
                        </span>
                      </div>
                    </div>
                    
                    {/* Question Progress */}
                    <div className="space-y-2">
                      <div className="text-xs text-muted-foreground">Question 15 of 25</div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000" 
                          style={{ width: `${examProgress}%` }}
                        />
                      </div>
                    </div>
                    
                    {/* Mock Question */}
                    <div className="space-y-3">
                      <div className="text-sm leading-relaxed">
                        Calculate the depreciation expense using the double-declining balance method...
                      </div>
                      
                      {/* Answer Options */}
                      <div className="space-y-2">
                        {['A', 'B', 'C', 'D'].map((option, i) => (
                          <div 
                            key={option} 
                            className={`p-2 rounded border text-xs cursor-pointer transition-colors ${
                              i === 1 
                                ? 'bg-primary/10 border-primary/30' 
                                : 'border-border hover:bg-accent'
                            }`}
                          >
                            <span className="font-semibold">{option}.</span> Option {option}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Exam Stats */}
                    <div className="mt-4 p-2 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2">
                        <Target className="w-3 h-3 text-blue-600" />
                        <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
                          92% Accuracy
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connecting Animation */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-background">
                  <Play className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}