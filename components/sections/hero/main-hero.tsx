"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { 
  PlayCircle, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Star,
  Users,
  Sparkles,
  GraduationCap,
  BookOpen,
  Target
} from "lucide-react";

export default function MainHero() {
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    students: 0,
    courses: 0,
    passRate: 0
  });
  
  const features = [
    "Expert-led instruction",
    "Adaptive learning paths",
    "Realistic exam simulations",
    "Comprehensive study materials"
  ];
  
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
          students: Math.floor(progress * 3000000), // Updated to 3M
          courses: Math.floor(progress * 120),
          passRate: Math.floor(progress * 94)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    }, 500);
    
    // Rotate through features
    const featureInterval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(featureInterval);
    };
  }, [features.length]);

  return (
    <Section className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Premium background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90 z-10" />
      
      {/* Video or animated background */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/newbg.png" 
          alt="Professional background" 
          fill 
          className="object-cover opacity-40"
          priority
        />
      </div>
      
      {/* Decorative elements */}
      <div 
        className={`absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse z-0 transition-opacity duration-1000 ease-in-out`}
        style={{ opacity: mounted ? 0.6 : 0 }}
      />
      <div 
        className={`absolute bottom-1/4 left-1/3 w-96 h-96 bg-brand-fire/10 rounded-full blur-3xl animate-pulse delay-1000 z-0 transition-opacity duration-1000 ease-in-out`}
        style={{ opacity: mounted ? 0.4 : 0 }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-2 h-2 bg-primary/30 rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random() * 1.5})`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Partner logos section at top */}
        <div 
          className={`flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12 transform transition-all duration-700 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
         
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column - Text content */}
          <div 
            className={`text-left space-y-6 md:space-y-8 transform transition-all duration-700 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
              Master Your <span className="text-brand-fire">CPA</span>, <span className="text-brand">CMA</span> & <span className="text-brand-emerald">EA</span> Exams with Confidence
            </h1>
            
            {/* Animated feature highlight */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <p className="text-lg md:text-xl font-medium">
                <span className="text-primary">{features[activeFeature]}</span>
                <span className="inline-block w-1 h-5 bg-primary/50 ml-1 animate-blink"></span>
              </p>
            </div>
            
            {/* Subheadline */}
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
              World-class content, expert-led live classes, personalized learning paths, and realistic exam simulations — all on one trusted platform.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-medium rounded-md shadow-lg transition-all duration-300 w-full sm:w-auto"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary/50 hover:border-primary hover:bg-primary/5 text-primary px-4 md:px-6 py-5 md:py-6 text-base md:text-lg font-medium rounded-md transition-all duration-300 w-full sm:w-auto"
              >
                <PlayCircle className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust Indicators with animation */}
            <div className="pt-4 md:pt-6 flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500" />
                ))}
                <span className="ml-2 text-xs md:text-sm font-medium">4.9/5 Rating</span>
              </div>
              
              <Badge variant="outline" className="px-2 md:px-3 py-1 text-xs bg-card/50 backdrop-blur-sm">
                SSL Secured
              </Badge>
              <Badge variant="outline" className="px-2 md:px-3 py-1 text-xs bg-card/50 backdrop-blur-sm">
                GDPR Compliant
              </Badge>
            </div>
          </div>
          
          {/* Right column - Visual elements */}
          <div 
            className={`transform transition-all duration-700 delay-300 ease-out ${mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}
          >
            <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 shadow-xl rounded-xl p-4 md:p-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                <div className="text-center p-2 md:p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="text-xl md:text-3xl font-bold text-primary mb-0 md:mb-1">3M+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Students</div>
                </div>
                
                <div className="text-center p-2 md:p-4 rounded-lg bg-brand-fire/10 border border-brand-fire/20">
                  <div className="text-xl md:text-3xl font-bold text-brand-fire mb-0 md:mb-1">{animatedValues.courses}+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Courses</div>
                </div>
                
                <div className="text-center p-2 md:p-4 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20">
                  <div className="text-xl md:text-3xl font-bold text-brand-emerald mb-0 md:mb-1">{animatedValues.passRate}%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Pass Rate</div>
                </div>
              </div>
              
              {/* Feature highlights */}
              <div className="space-y-2 md:space-y-4">
                <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-white/50 border border-border/50 hover:border-primary/30 hover:bg-white/80 transition-all duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-medium">Adaptive Learning</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Personalized study plans that adapt to your progress</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-white/50 border border-border/50 hover:border-primary/30 hover:bg-white/80 transition-all duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-fire/10 flex items-center justify-center">
                    <Target className="w-4 h-4 md:w-5 md:h-5 text-brand-fire" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-medium">Exam Simulations</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Practice with realistic exam environments</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-white/50 border border-border/50 hover:border-primary/30 hover:bg-white/80 transition-all duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-emerald/10 flex items-center justify-center">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-brand-emerald" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-medium">Expert Support</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Get help from certified instructors anytime</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}