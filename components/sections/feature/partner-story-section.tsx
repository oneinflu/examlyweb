"use client";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { 
  ArrowRightIcon, 
  CheckIcon, 
  Layers, 
  LayoutDashboard, 
  Calendar, 
  Users, 
  FileText, 
  Calculator,
  Building2,
  GraduationCap,
  BarChart,
  BookOpen,
  Box
} from "lucide-react";
import Glow from "@/components/ui/glow";

export default function PartnerStorySection() {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  type PartnerType = "/become-reseller/" | "/become-partner/" | "/become-institute-partner/";

  const isValidPathname = (path: string): path is PartnerType => {
    return ["/become-reseller/", "/become-partner/", "/become-institute-partner/"].includes(path);
  };

  const partnerContent = {
    "/become-reseller/": {
      badge: "Reseller Success Story",
      title: "From Individual Classes to ",
      titleHighlight: "Thriving Business",
      quote: "With Examly's reseller program, I've transformed my tutoring service into a profitable business. The scheduling and revenue tracking tools are game-changing.",
      role: "Education Reseller",
      organization: "Examly Education Partner",
      features: [
        { icon: <Calendar className="h-5 w-5 text-primary" />, text: "Automated class scheduling and management" },
        { icon: <Calculator className="h-5 w-5 text-primary" />, text: "Real-time revenue tracking and analytics" },
        { icon: <Users className="h-5 w-5 text-primary" />, text: "Comprehensive student enrollment system" },
        { icon: <FileText className="h-5 w-5 text-primary" />, text: "Simplified payment processing" }
      ]
    },
    "/become-partner/": {
      badge: "Partner Success Story",
      title: "From Manual Tracking to ",
      titleHighlight: "Automated Progress",
      quote: "Examly's partner dashboard gives us real-time insights into team progress. The automated tracking and reporting save us hours every week.",
      role: "Corporate Training Manager",
      organization: "Examly Corporate Partner",
      features: [
        { icon: <BarChart className="h-5 w-5 text-primary" />, text: "Real-time progress tracking dashboard" },
        { icon: <Users className="h-5 w-5 text-primary" />, text: "Team-wide performance analytics" },
        { icon: <BookOpen className="h-5 w-5 text-primary" />, text: "Automated assignment completion tracking" },
        { icon: <FileText className="h-5 w-5 text-primary" />, text: "Comprehensive progress reports" }
      ]
    },
    "/become-institute-partner/": {
      badge: "Institute Partner Success Story",
      title: "From Complex Systems to ",
      titleHighlight: "Seamless Learning",
      quote: "Examly has revolutionized how we manage student progress and generate reports. The comprehensive analytics help us make data-driven decisions.",
      role: "Institute Administrator",
      organization: "Examly Institute Partner",
      features: [
        { icon: <GraduationCap className="h-5 w-5 text-primary" />, text: "Comprehensive student progress tracking" },
        { icon: <BarChart className="h-5 w-5 text-primary" />, text: "Detailed analytics and reporting" },
        { icon: <Users className="h-5 w-5 text-primary" />, text: "Batch-wise performance monitoring" },
        { icon: <FileText className="h-5 w-5 text-primary" />, text: "Automated assessment management" }
      ]
    }
  } as const;

  const content = isValidPathname(pathname) ? partnerContent[pathname] : partnerContent["/become-reseller/"];

  return (
    <Section className="py-20 lg:py-32 relative overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--background)/0.05),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Story Content */}
          <div className="space-y-8">
            <Badge variant="outline" className="bg-white border-primary/30 text-primary px-4 py-2 text-sm font-semibold">
              <Building2 className="w-4 h-4 mr-2 text-primary" />
              {content.badge}
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-foreground">
              {content.title}<span className="text-primary">{content.titleHighlight}</span>
            </h2>
            
            <div className="relative p-6 bg-muted/20 rounded-xl border border-border/50">
              <div className="absolute -top-3 -left-2 text-4xl text-primary/20"></div>
              <p className="text-lg text-foreground/90 italic">
                &quot;{content.quote}&quot;
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-foreground">{content.role}</p>
                  <p className="text-xs text-muted-foreground">{content.organization}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">How Examly simplifies your workflow:</h3>
              <ul className="space-y-3">
                {content.features.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-foreground/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Column - Illustration */}
          <div 
            className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-sm rounded-xl border border-border/50 p-6">
              <Glow className="absolute inset-0 opacity-30" />
              
              {/* Fragmented Tools */}
              <div className="relative h-full w-full">
                {/* Calendar Tool */}
                <Card className={`absolute top-6 left-6 w-[120px] h-[120px] p-4 flex flex-col items-center justify-center shadow-lg transition-all duration-500 ${isHovered ? 'opacity-50 scale-90 translate-x-[100px] translate-y-[100px]' : ''}`}>
                  <Calendar className="h-10 w-10 text-primary mb-2" />
                  <p className="text-xs font-medium text-center">Calendar</p>
                </Card>
                
                {/* Payment/Assignment Tool */}
                <Card className={`absolute top-6 right-6 w-[120px] h-[120px] p-4 flex flex-col items-center justify-center shadow-lg transition-all duration-500 ${isHovered ? 'opacity-50 scale-90 translate-x-[-100px] translate-y-[100px]' : ''}`}>
                  {pathname === '/Become-reseller/' || pathname === '/Become-institute-partner/' ? (
                    <>
                      <Calculator className="h-10 w-10 text-primary mb-2" />
                      <p className="text-xs font-medium text-center">Inventory</p>
                    </>
                  ) : (
                    <>
                      <FileText className="h-10 w-10 text-primary mb-2" />
                      <p className="text-xs font-medium text-center">Assignments</p>
                    </>
                  )}
                </Card>
                
                {/* Progress/Assignment Tool */}
                <Card className={`absolute bottom-6 left-6 w-[120px] h-[120px] p-4 flex flex-col items-center justify-center shadow-lg transition-all duration-500 ${isHovered ? 'opacity-50 scale-90 translate-x-[100px] translate-y-[-100px]' : ''}`}>
                  {pathname === '/become-reseller/' ? (
                    <>
                      <Box className="h-10 w-10 text-primary mb-2" />
                      <p className="text-xs font-medium text-center">Inventory</p>
                    </>
                  ) : (
                    <>
                      <BarChart className="h-10 w-10 text-primary mb-2" />
                      <p className="text-xs font-medium text-center">Progress</p>
                    </>
                  )}
                </Card>
                
                {/* Homework Tool */}
            
                
                {/* Students Tool */}
                <Card className={`absolute bottom-6 right-6 w-[120px] h-[120px] p-4 flex flex-col items-center justify-center shadow-lg transition-all duration-500 ${isHovered ? 'opacity-50 scale-90 translate-x-[-100px] translate-y-[-100px]' : ''}`}>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <p className="text-xs font-medium text-center">Students</p>
                </Card>
                
                {/* Unified Dashboard - appears on hover */}
                <Card className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] p-6 flex flex-col items-center justify-center shadow-xl transition-all duration-700 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="mb-4 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <LayoutDashboard className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-center mb-2">Examly Dashboard</h3>
                  <p className="text-sm text-center text-muted-foreground mb-4">All your tools in one place</p>
                  <div className="grid grid-cols-2 gap-3 w-full">
                    <div className="flex items-center p-2 bg-muted/30 rounded-lg">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      <span className="text-xs">Calendar</span>
                    </div>
                    <div className="flex items-center p-2 bg-muted/30 rounded-lg">
                      {pathname === '/become-reseller/' || pathname === '/become-institute-partner/' ? (
                        <>
                          <Box className="h-4 w-4 text-primary mr-2" />
                          <span className="text-xs">Inventory</span>
                        </>
                      ) : (
                        <>
                          <FileText className="h-4 w-4 text-primary mr-2" />
                          <span className="text-xs">Assignments</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center p-2 bg-muted/30 rounded-lg">
                      {pathname === '/become-reseller/' ? (
                        <>
                          <FileText className="h-4 w-4 text-primary mr-2" />
                          <span className="text-xs">Assignments</span>
                        </>
                      ) : (
                        <>
                          <BarChart className="h-4 w-4 text-primary mr-2" />
                          <span className="text-xs">Progress</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center p-2 bg-muted/30 rounded-lg">
                      <Users className="h-4 w-4 text-primary mr-2" />
                      <span className="text-xs">Students</span>
                    </div>
                  </div>
                </Card>
                
                {/* Connection Lines */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M120 120 L200 200" stroke="hsl(var(--primary)/0.3)" strokeWidth="2" strokeDasharray="5 5" />
                    <path d="M280 120 L200 200" stroke="hsl(var(--primary)/0.3)" strokeWidth="2" strokeDasharray="5 5" />
                    <path d="M120 280 L200 200" stroke="hsl(var(--primary)/0.3)" strokeWidth="2" strokeDasharray="5 5" />
                    <path d="M280 280 L200 200" stroke="hsl(var(--primary)/0.3)" strokeWidth="2" strokeDasharray="5 5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}