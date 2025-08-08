"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { TrendingUp, Target, BarChart3, CheckCircle, Clock, BookOpen, Play } from "lucide-react";
import { useState, useEffect } from "react";

export default function SelfAssessmentHero() {
  const [mounted, setMounted] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    overallScore: 0,
    weakAreas: 0,
    studyTime: 0,
    improvement: 0
  });

  // Mount animation
  useEffect(() => {
    setMounted(true);
    
    // Animate numbers counting up
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedValues({
          overallScore: Math.floor(progress * 87),
          weakAreas: Math.floor(progress * 3),
          studyTime: Math.floor(progress * 24),
          improvement: Math.floor(progress * 15)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const subjects = [
    { name: "Financial Accounting", score: 92, trend: "up" },
    { name: "Regulation", score: 78, trend: "up" },
    { name: "Business Environment", score: 65, trend: "down" },
    { name: "Auditing", score: 88, trend: "up" }
  ];

  const weakAreas = [
    "Government Accounting",
    "Tax Calculations", 
    "Internal Controls"
  ];

  return (
    <Section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && [
          { top: '15%', left: '10%', delay: '0s', size: 'w-1 h-1' },
          { top: '70%', left: '85%', delay: '1s', size: 'w-2 h-2' },
          { top: '40%', left: '90%', delay: '2s', size: 'w-1.5 h-1.5' },
          { top: '80%', left: '15%', delay: '3s', size: 'w-1 h-1' },
          { top: '25%', left: '75%', delay: '4s', size: 'w-2 h-2' }
        ].map((particle, i) => (
          <div
            key={i}
            className={`absolute ${particle.size} bg-primary/30 rounded-full animate-pulse`}
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animation: `float 8s ease-in-out infinite ${particle.delay}`
            }}
          />
        ))}
      </div>

      <div className="container max-w-container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Student Dashboard Animation */}
          <div className="space-y-6 relative">
            {/* Progress Dashboard Card */}
            <Card className="p-6 glass-2 border-0 relative overflow-hidden">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand-emerald/5 animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">Progress Dashboard</h3>
                  </div>
                  <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    On Track
                  </Badge>
                </div>

                {/* Animated Score Meters */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {animatedValues.overallScore}%
                    </div>
                    <div className="text-sm text-muted-foreground">Overall Score</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="text-2xl font-bold text-orange-500 mb-1">
                      {animatedValues.weakAreas}
                    </div>
                    <div className="text-sm text-muted-foreground">Weak Areas</div>
                  </div>
                </div>

                {/* Subject Progress */}
                <div className="space-y-3">
                  {subjects.map((subject, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        {subject.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">{subject.score}%</span>
                        <TrendingUp 
                          className={`w-4 h-4 ${
                            subject.trend === 'up' ? 'text-green-500' : 'text-red-500'
                          }`} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Real-time Analytics Card */}
            <Card className="p-6 glass-2 border-0">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Real-time Analytics</h4>
                <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20">
                  Live
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-lg font-bold text-primary">
                    {animatedValues.studyTime}h
                  </div>
                  <div className="text-xs text-muted-foreground">Study Time This Week</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-500">
                    +{animatedValues.improvement}%
                  </div>
                  <div className="text-xs text-muted-foreground">Score Improvement</div>
                </div>
              </div>

              {/* Weak Areas Focus */}
              <div className="mt-4 pt-4 border-t border-muted/20">
                <div className="text-sm font-medium mb-2 text-muted-foreground">Focus Areas:</div>
                <div className="flex flex-wrap gap-2">
                  {weakAreas.map((area, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <Badge variant="outline" className="w-fit px-4 py-2 animate-bounce">
              <BookOpen className="w-4 h-4 mr-2" />
              Know Your Strengths, Fix Your Weaknesses
            </Badge>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="inline-block animate-fade-in-up">Your Learning.</span>
                <br />
                <span className="inline-block animate-fade-in-up animation-delay-200">Measured.</span>
                <br />
                <span className="text-primary inline-block animate-fade-in-up animation-delay-400">
                  Mastered.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-600">
                Turn every test into a stepping stone. With instant analytics and detailed 
                self-assessment tools, you know exactly where to focus.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
              <Button size="lg" className="text-lg px-8 py-6">
                <Target className="w-5 h-5 mr-2" />
                Track My Progress
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                See Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-muted/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">500K+</div>
                <div className="text-sm text-muted-foreground">Assessments Taken</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Real-time Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
      `}</style>
    </Section>
  );
}