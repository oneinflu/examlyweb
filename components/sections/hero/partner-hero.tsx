"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Glow from "@/components/ui/glow";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { 
  Users, 
  Calendar, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  Building2,
  GraduationCap,
  Calculator,
  PlayCircle,
  Handshake,
  Store,
  School
} from "lucide-react";

const partnerTypes = {
  "/become-reseller": {
    badge: "Resellers",
    icon: Store,
    title: "Grow Your Business with Exam Prep Solutions",
    subtitle: "Partner with us to resell our comprehensive exam preparation solutions and expand your product portfolio.",
    buttonText: "Become a Reseller Today",
    stats: {
      partners: "200",
      label: "Active Resellers",
      revenue: "₹50K",
      revenueLabel: "Avg. Monthly Revenue"
    }
  },
  "/become-partner": {
    badge: "Companies",
    icon: Handshake,
    title: "Create and Deliver Premium Exam Content",
    subtitle: "Collaborate with us to develop and deliver high-quality exam preparation content to students nationwide.",
    buttonText: "Become a Partner Today",
    stats: {
      partners: "100",
      label: "Companies",
      revenue: "₹75K",
      revenueLabel: "Avg. Monthly Revenue"
    }
  },
  "/become-institute-partner": {
    badge: "Institutes",
    icon: School,
    title: "All-in-One Platform for Higher Education",
    subtitle: "Streamline your academic operations, manage courses, students, and assessments — empowering your institution with digital transformation.",
    buttonText: "Partner as Institution",
    stats: {
      partners: "500",
      label: "Partner Institutions",
      revenue: "₹100K",
      revenueLabel: "Avg. Monthly Revenue"
    }
  }
};

export default function PartnerHero() {
  const pathname = usePathname();
  // Remove trailing slash from pathname
  const normalizedPath = pathname?.replace(/\/$/, '') || '';
  const partnerType = partnerTypes[normalizedPath as keyof typeof partnerTypes] || partnerTypes["/become-partner"];
  
  // Add console.log for debugging
  console.log('Current pathname:', pathname);
  console.log('Normalized path:', normalizedPath);
  console.log('Selected partner type:', partnerType);
  
  const Icon = partnerType.icon;
  const [mounted, setMounted] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    partners: 0,
    students: 0,
    classes: 0
  });
  const [isHovered, setIsHovered] = useState(false);

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
          partners: Math.floor(progress * 500),
          students: Math.floor(progress * 25000),
          classes: Math.floor(progress * 1200)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section className="relative overflow-hidden py-16 lg:py-24 bg-white">
      {/* Background remains the same */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--background)/0.05),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Partner Badge */}
            <div className="flex items-center justify-center lg:justify-start">
              <Badge className="bg-white border-primary/30 text-primary px-4 py-2 text-sm font-semibold">
                <Icon className="w-4 h-4 mr-2 text-primary" />
                {partnerType.badge}
              </Badge>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-foreground">
                {partnerType.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {partnerType.subtitle}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 font-medium rounded-md shadow-sm transition-all duration-300"
              >
                <Icon className="w-4 h-4 mr-2 text-white" />
                {partnerType.buttonText}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border border-primary/50 hover:border-primary hover:bg-primary/5 text-primary px-6 py-2 font-medium rounded-md transition-all duration-300"
              >
                <PlayCircle className="w-4 h-4 mr-2 text-primary" />
                Request a Demo
              </Button>
            </div>
            
            {/* Trust Elements */}
            <div className="pt-6 mt-2">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground mb-4">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Trusted by {partnerType.stats.partners}+ {partnerType.stats.label.toLowerCase()} nationwide</span>
              </div>
              
              
            </div>
          </div>

          {/* Right Side - Dashboard Preview remains the same */}
          <div 
            className="relative transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Demo Card */}
            <Card className="relative overflow-hidden bg-white border border-border shadow-md rounded-lg p-5">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-base">
                      {partnerType.badge} Dashboard
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {pathname === '/become-institute-partner' ? 'Institute Management System' :
                       pathname === '/become-reseller' ? 'Reseller Management System' :
                       'Content Management System'}
                    </p>
                  </div>
                </div>
                
                <Badge className="bg-green-100 text-green-700 px-2 py-1 text-xs font-medium">
                  LIVE DEMO
                </Badge>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="text-center p-3 rounded-md bg-primary/5 border border-primary/10">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-base font-medium text-primary">128</div>
                  <div className="text-xs text-muted-foreground">Students</div>
                </div>
                
                <div className="text-center p-3 rounded-md bg-primary/5 border border-primary/10">
                  <div className="flex items-center justify-center mb-1">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-base font-medium text-primary">
                    {pathname === '/become-reseller/' ? '8' : '75%'}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {pathname === '/become-reseller/' ? 'Classes Today' : 'Course Completion'}
                  </div>
                </div>
                
                <div className="text-center p-3 rounded-md bg-primary/5 border border-primary/10">
                  <div className="flex items-center justify-center mb-1">
                    <Calculator className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-base font-medium text-primary">
                    {pathname === '/become-reseller/' ? '₹24.5K' : '12%'}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {pathname === '/become-reseller/' ? 'Revenue' : 'Pending Assignments'}
                  </div>
                </div>
              </div>
              
              {/* Schedule Section */}
              <div className="mb-5 p-4 rounded-md bg-muted/10 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-medium flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    Today&apos;s Schedule
                  </div>
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    View All
                  </Button>
                </div>
                
                <div className="space-y-2">
                  {[1, 2, 3].map((_, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 p-2 bg-white rounded-md border border-border/50" 
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-xs">
                        {9 + i * 2}:00
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">CPA Fundamentals</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          24 Students
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-3 h-3 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="flex items-center justify-between p-3 rounded-md bg-muted/10 border border-border">
                <div className="text-xs font-medium">Quick Actions</div>
                <div className="flex items-center gap-2">
                  {pathname === '/become-reseller/' ? (
                    <>
                      <Button size="sm" className="bg-primary/10 hover:bg-primary/20 text-primary text-xs h-7 px-2">
                           <Users className="w-3 h-3 mr-1" />
                       Add Student
                      </Button>
                      <Button size="sm" className="bg-primary/10 hover:bg-primary/20 text-primary text-xs h-7 px-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        Schedule Class
                      </Button>
                    </>
                  ) : pathname === '/become-partner/' ? (
                    <>
                      <Button size="sm" className="bg-primary/10 hover:bg-primary/20 text-primary text-xs h-7 px-2">
                      <Users className="w-3 h-3 mr-1" />
                         Enroll Team
                      </Button>
                      <Button size="sm" className="bg-primary/10 hover:bg-primary/20 text-primary text-xs h-7 px-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        Generate Reports
                      </Button>
                     
                    </>
                  ) : (
                    <>
                      <Button size="sm" className="bg-primary/10 hover:bg-primary/20 text-primary text-xs h-7 px-2">
                        <Users className="w-3 h-3 mr-1" />
                        Add Student
                      </Button>
                      <Button size="sm" className="bg-primary/10 hover:bg-primary/20 text-primary text-xs h-7 px-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        Generate Reports
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}