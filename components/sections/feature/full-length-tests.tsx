"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { 
  Clock,
  BarChart3,
  Target,
  Shuffle,
  FileText,
  CheckCircle,
  Timer,
  TrendingUp,
  Award,
  Play,
  Pause
} from "lucide-react";

// Type definitions
type Benefit = {
  id: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  color: string;
};

type ExamSection = {
  name: string;
  questions: number;
  timeLimit: number;
  score: number;
  status: 'completed' | 'current' | 'upcoming';
};

interface FullLengthTestsProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

// Benefits data
const benefits: Benefit[] = [
  {
    id: "duration",
    title: "Full Duration & Structure",
    description: "Simulates complete exam timing, structure, and official break periods",
    icon: Clock,
    color: "blue"
  },
  {
    id: "randomized",
    title: "Randomized Question Pools",
    description: "Fresh question sets for every attempt, preventing memorization",
    icon: Shuffle,
    color: "emerald"
  },
  {
    id: "report",
    title: "Exam Day Report",
    description: "Auto-generated readiness score with detailed performance analysis",
    icon: FileText,
    color: "purple"
  }
];

// Mock exam sections data
const examSections: ExamSection[] = [
  { name: "Financial Accounting", questions: 31, timeLimit: 90, score: 85, status: 'completed' },
  { name: "Regulation", questions: 31, timeLimit: 90, score: 78, status: 'completed' },
  { name: "Auditing", questions: 31, timeLimit: 90, score: 92, status: 'current' },
  { name: "Business Environment", questions: 31, timeLimit: 90, score: 0, status: 'upcoming' }
];

export default function FullLengthTests({
  className,
  title = "Full-Length Tests",
  subtitle = "Experience the most authentic exam simulation available. Our full-length tests replicate every aspect of exam day to ensure you're completely prepared.",
  ...props
}: FullLengthTestsProps) {
  const [currentTime, setCurrentTime] = useState<number>(5400); // 90 minutes in seconds
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(65);

  // Timer countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && currentTime > 0) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev - 1;
          // Update progress based on time remaining
          const totalTime = 5400; // 90 minutes
          const newProgress = ((totalTime - newTime) / totalTime) * 100;
          setProgress(Math.min(newProgress, 100));
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, currentTime]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20';
      case 'current': return 'text-blue-600 bg-blue-50 dark:bg-blue-950/20';
      case 'upcoming': return 'text-muted-foreground bg-muted/50';
      default: return 'text-muted-foreground bg-muted/50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'current': return Timer;
      case 'upcoming': return Clock;
      default: return Clock;
    }
  };

  return (
    <Section className={cn("py-16 lg:py-24 relative overflow-hidden", className)} {...props}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      <div className="container max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10 border-primary/20 text-primary">
            <Target className="w-4 h-4 mr-2" />
            Exam Readiness
          </Badge>
          <h2 className="text-balance text-3xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            
            return (
              <Card key={benefit.id} className="p-6 border-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                    `bg-${benefit.color}-100 dark:bg-${benefit.color}-900/20`
                  )}>
                    <Icon className={cn(
                      "w-6 h-6",
                      `text-${benefit.color}-600`
                    )} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Main Visual Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Timer & Progress */}
          <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Live Exam Timer</h3>
              <p className="text-muted-foreground">Section 3: Auditing & Attestation</p>
            </div>
            
            {/* Countdown Timer */}
            <div className="text-center mb-8">
              <div className="text-6xl lg:text-7xl font-mono font-bold text-primary mb-4">
                {formatTime(currentTime)}
              </div>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300",
                    isRunning 
                      ? "bg-orange-500 hover:bg-orange-600 text-white border-orange-500" 
                      : "bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500"
                  )}
                >
                  {isRunning ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span className="text-sm font-medium">Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span className="text-sm font-medium">Resume</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium text-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Question 20 of 31</span>
                <span>Time Remaining</span>
              </div>
            </div>
          </Card>

          {/* Right: Performance Breakdown */}
          <Card className="p-8 border-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Section Performance</h3>
              <p className="text-muted-foreground">Real-time breakdown by exam section</p>
            </div>
            
            <div className="space-y-4">
              {examSections.map((section, index) => {
                const StatusIcon = getStatusIcon(section.status);
                
                return (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg border bg-background/50">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      getStatusColor(section.status)
                    )}>
                      <StatusIcon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-semibold text-foreground">{section.name}</h4>
                        {section.status === 'completed' && (
                          <span className="text-lg font-bold text-emerald-600">{section.score}%</span>
                        )}
                        {section.status === 'current' && (
                          <span className="text-sm font-medium text-blue-600">In Progress</span>
                        )}
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{section.questions} questions</span>
                        <span>{section.timeLimit} minutes</span>
                      </div>
                      
                      {/* Progress bar for completed sections */}
                      {section.status === 'completed' && (
                        <div className="mt-2 w-full bg-muted rounded-full h-2">
                          <div 
                            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                            style={{ width: `${section.score}%` }}
                          />
                        </div>
                      )}
                      
                      {/* Progress bar for current section */}
                      {section.status === 'current' && (
                        <div className="mt-2 w-full bg-muted rounded-full h-2">
                          <div 
                            className="h-full bg-blue-500 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Overall Score */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/20 dark:to-blue-950/20 border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-1">Current Overall Score</h4>
                  <p className="text-sm text-muted-foreground">Based on completed sections</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">85%</div>
                  <div className="flex items-center gap-1 text-sm text-emerald-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Passing</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
            <div className="max-w-2xl mx-auto">
              <Award className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready for the Real Thing?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Take a full-length practice exam and get your personalized Exam Day Report with detailed readiness analysis.
              </p>
              <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Start Full-Length Test
              </button>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}