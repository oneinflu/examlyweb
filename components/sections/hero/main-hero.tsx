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
  Users
} from "lucide-react";

export default function MainHero() {
  const [mounted, setMounted] = useState(false);
  
  // Mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section className="relative overflow-hidden py-20 lg:py-28">
      {/* Premium background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90 z-10" />
      
      {/* Video or animated background */}
      <div className="absolute inset-0 w-full h-full">
        {/* For a static image background: */}
        <Image 
          src="/newbg.png" 
          alt="Professional background" 
          fill 
          className="object-cover opacity-40"
          priority
        />
        
        {/* For video background, uncomment this and comment out the Image above
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/your-video.mp4" type="video/mp4" />
        </video>
        */}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand/20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-brand-fire/10 rounded-full blur-3xl animate-pulse delay-1000 z-0" />
      
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Partner logos section at top */}
       
        
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            Master Your <span className="text-brand-fire">CPA</span>, <span className="text-brand">CMA</span> & <span className="text-brand-emerald">EA</span> Exams with Confidence and Clarity.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-muted-foreground leading-relaxed">
            World-class content, expert-led live classes, personalized learning paths, and realistic exam simulations — all on one trusted platform.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium rounded-md shadow-lg transition-all duration-300"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary/50 hover:border-primary hover:bg-primary/5 text-primary px-6 py-6 text-lg font-medium rounded-md transition-all duration-300"
            >
              Request a Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-lg font-medium">4.9/5 from 50,000+ learners</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4">
              <Users className="w-6 h-6 text-brand mb-2" />
              <p className="text-lg font-medium">Trusted by Top Institutes</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4">
              <Shield className="w-6 h-6 text-brand-emerald mb-2" />
              <p className="text-lg font-medium">Secure & Private Learning</p>
            </div>
          </div>
          
          {/* Security badges */}
          <div className="flex justify-center gap-4 pt-4">
            <Badge variant="outline" className="px-3 py-1 text-xs bg-card/50 backdrop-blur-sm">
              SSL Secured
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-xs bg-card/50 backdrop-blur-sm">
              GDPR Compliant
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-xs bg-card/50 backdrop-blur-sm">
              256-bit Encryption
            </Badge>
          </div>
        </div>
      </div>
    </Section>
  );
}