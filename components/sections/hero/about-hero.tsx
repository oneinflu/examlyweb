"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Building2, Users, GraduationCap, Globe, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    partners: 0,
    students: 0,
    countries: 0,
    satisfaction: 0
  });

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Animate numbers counting up
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic easing
        
        setAnimatedValues({
          partners: Math.floor(easedProgress * 500),
          students: Math.floor(easedProgress * 10000),
          countries: Math.floor(easedProgress * 5),
          satisfaction: Math.floor(easedProgress * 95)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <Section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-28">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={parallaxStyle}
      >
        <Image
          src="/newbg.png"
          alt="About Examly Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Gradient overlay with enhanced colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />

      {/* Animated shapes with more dynamic effects */}
      <div 
        className={`absolute inset-0 opacity-0 transition-opacity duration-1000 ${mounted ? 'opacity-100' : ''}`}
      >
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center space-y-8">
        {/* Partner Badge */}
        <div className="flex justify-center mb-6">
          <Badge 
            className="bg-white/10 backdrop-blur-sm border-primary/30 text-primary px-4 py-2 text-sm font-semibold"
            variant="outline"
          >
            <Building2 className="w-4 h-4 mr-2 text-primary" />
            About Examly
          </Badge>
        </div>

        <div 
          className={`transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Empowering Institutes.
            <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Transforming</span> Learning.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            At Examly, we&apos;re revolutionizing education through innovative technology and personalized learning experiences. Our mission is to empower educational institutions with cutting-edge tools that transform how students learn and succeed.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 font-medium rounded-md shadow-lg transition-all duration-300 group"
              asChild
            >
              <Link href="/become-partner" className="flex items-center">
                <Building2 className="w-5 h-5 mr-2" />
                Become a Partner
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 hover:border-primary hover:bg-primary/5 text-primary px-6 py-2 font-medium rounded-md transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <div className="text-2xl font-bold text-primary mb-1">{animatedValues.partners}+</div>
              <div className="text-sm text-muted-foreground">Partner Institutes</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <div className="text-2xl font-bold text-primary mb-1">{animatedValues.students.toLocaleString()}+</div>
              <div className="text-sm text-muted-foreground">Students Empowered</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <div className="text-2xl font-bold text-primary mb-1">{animatedValues.countries}</div>
              <div className="text-sm text-muted-foreground">Countries Reached</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <div className="text-2xl font-bold text-primary mb-1">{animatedValues.satisfaction}%</div>
              <div className="text-sm text-muted-foreground">Partner Satisfaction</div>
            </div>
          </div>

          {/* Trust Indicator */}
          <div className="mt-8 flex justify-center items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Trusted by leading educational institutions worldwide</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <ChevronDown 
            className="w-8 h-8 text-foreground/60 animate-bounce cursor-pointer hover:text-primary transition-colors duration-300"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          />
        </div>
      </div>
    </Section>
  );
}