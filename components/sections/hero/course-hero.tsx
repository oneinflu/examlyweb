"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

type CourseHeroProps = {
  examType: string; // "CMA", "CPA", "EA"
  subtitle: string;
  logoSrc?: string; // Optional path to exam logo
};

// Mapping for exam-specific styling
const examStyles = {
  CMA: {
    textColor: "text-brand", // Blue
    badgeColor: "bg-brand/10 text-brand",
    glowColor: "bg-brand/20",
    iconPath: "/learning.svg", // Default icon if no custom logo provided
    features: ["Financial Management", "Strategic Planning", "Risk Analysis", "Cost Accounting"]
  },
  CPA: {
    textColor: "text-brand-fire", // Orange/Red
    badgeColor: "bg-brand-fire/10 text-brand-fire",
    glowColor: "bg-brand-fire/20",
    iconPath: "/simulation.svg",
    features: ["Auditing & Attestation", "Business Environment", "Financial Accounting", "Regulation"]
  },
  EA: {
    textColor: "text-brand-emerald", // Green
    badgeColor: "bg-brand-emerald/10 text-brand-emerald",
    glowColor: "bg-brand-emerald/20",
    iconPath: "/offline.svg",
    features: ["Individual Taxation", "Business Taxation", "Representation", "Ethics"]
  }
};

export default function CourseHero({ examType, subtitle, logoSrc }: CourseHeroProps) {
  // Animation states
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  
  // Get exam-specific styling or use default if not found
  const style = examStyles[examType as keyof typeof examStyles] || {
    textColor: "text-primary",
    badgeColor: "bg-primary/10 text-primary",
    glowColor: "bg-primary/20",
    iconPath: "/learning.svg",
    features: ["Comprehensive Content", "Expert Guidance", "Practice Tests", "Study Plans"]
  };

  // Mount animations
  useEffect(() => {
    setMounted(true);
    
    // Show badge with delay
    const badgeTimer = setTimeout(() => {
      setShowBadge(true);
    }, 500);
    
    // Rotate through features
    const featureInterval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % style.features.length);
    }, 3000);
    
    return () => {
      clearTimeout(badgeTimer);
      clearInterval(featureInterval);
    };
  }, [style.features.length]);

  return (
    <Section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90 z-10" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/newbg.png" 
          alt="Background pattern" 
          fill 
          className="object-cover opacity-30"
          priority
        />
      </div>
      
      {/* Animated decorative elements */}
      <div 
        className={`absolute top-1/4 right-1/4 w-64 h-64 ${style.glowColor} rounded-full blur-3xl animate-pulse z-0 transition-opacity duration-1000 ease-in-out`}
        style={{ opacity: mounted ? 0.6 : 0 }}
      />
      <div 
        className={`absolute bottom-1/4 left-1/3 w-96 h-96 ${style.glowColor} rounded-full blur-3xl animate-pulse delay-1000 z-0 transition-opacity duration-1000 ease-in-out`}
        style={{ opacity: mounted ? 0.4 : 0 }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-2 h-2 ${style.badgeColor} rounded-full opacity-30`}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            {/* Animated badge */}
            <div 
              className={`transform transition-all duration-700 ease-out ${showBadge ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              <Badge 
                className={`${style.badgeColor} px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2`}
              >
                <div className="relative w-5 h-5">
                  <Image
                    src={logoSrc || style.iconPath}
                    alt={`${examType} Icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                {examType} Certification
              </Badge>
            </div>
            
            {/* Main headline with animation */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground transform transition-all duration-700 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <span className={style.textColor}>{examType}</span> Exam Prep
            </h1>
            
            {/* Subheadline with animation */}
            <p 
              className={`text-xl text-muted-foreground leading-relaxed transform transition-all duration-700 delay-200 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              {subtitle}
            </p>
            
            {/* Animated feature highlight */}
            <div 
              className={`flex items-center gap-2 transform transition-all duration-700 delay-300 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <CheckCircle className={`w-5 h-5 ${style.textColor}`} />
              <p className="text-lg font-medium">
                <span className="opacity-50">Featured: </span>
                <span className="relative inline-block">
                  {style.features.map((feature, index) => (
                    <span 
                      key={feature}
                      className={`absolute inset-0 transition-all duration-500 ${index === activeFeature ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-2'}`}
                    >
                      {feature}
                    </span>
                  ))}
                  <span className="opacity-0">{style.features[0]}</span>
                </span>
              </p>
            </div>
            
            {/* Action Buttons with animation */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 pt-4 transform transition-all duration-700 delay-400 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <Button 
                size="lg" 
                className={`bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium rounded-md shadow-lg transition-all duration-300 group`}
              >
                Start Your {examType} Prep Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary/50 hover:border-primary hover:bg-primary/5 text-primary px-6 py-6 text-lg font-medium rounded-md transition-all duration-300"
              >
                View Sample Content
              </Button>
            </div>
            
            {/* Trust Indicators with animation */}
            <div 
              className={`pt-6 flex flex-wrap gap-4 transform transition-all duration-700 delay-500 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
                <span className="ml-2 text-sm font-medium">4.9/5 Rating</span>
              </div>
              
              <Badge variant="outline" className="px-3 py-1 text-xs bg-card/50 backdrop-blur-sm">
                Expert-Led Content
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs bg-card/50 backdrop-blur-sm">
                Adaptive Learning
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs bg-card/50 backdrop-blur-sm">
                24/7 Support
              </Badge>
            </div>
          </div>
          
          {/* Right column - Visual elements */}
          <div 
            className={`relative transform transition-all duration-1000 ease-out ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
          >
            {/* Floating card elements */}
            <div className="relative h-[400px] w-full">
              {/* Main device mockup */}
              <div className="absolute inset-0 z-10 transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/macbook.png"
                  alt={`${examType} Exam Prep Platform`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Floating element 1 - Score card */}
              <div 
                className="absolute top-[5%] right-[5%] bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 z-20 w-32 animate-float-slow transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">92%</div>
                  <div className="text-xs text-muted-foreground">Avg. Pass Rate</div>
                </div>
              </div>
              
              {/* Floating element 2 - Progress card */}
              <div 
                className="absolute bottom-[15%] left-[5%] bg-white dark:bg-slate-800 rounded-xl shadow-xl p-3 z-20 w-36 animate-float-slow transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: '1s' }}
              >
                <div className="space-y-2">
                  <div className="text-xs font-medium">Your Progress</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${style.textColor.replace('text-', 'bg-')}`}
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                  <div className="text-xs text-right text-muted-foreground">65% Complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(10px);
          }
          50% {
            transform: translateY(-20px) translateX(0);
          }
          75% {
            transform: translateY(-10px) translateX(-10px);
          }
        }
        
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </Section>
  );
}