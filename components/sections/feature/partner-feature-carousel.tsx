"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  FileText, 
  Users, 
  BarChart3, 
  Calculator, 
  LayoutDashboard
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Glow from "@/components/ui/glow";
import { cn } from "@/lib/utils";
import type { CarouselApi } from "@/components/ui/carousel";

// Define the feature slides
const featureSlides = [
  {
    id: "schedule-management",
    title: "Class Schedule Management",
    description: "Plan, reschedule & notify students in one click.",
    icon: Calendar,
    bgGradient: "from-brand-fire/10 to-brand-ember/10",
    learnMoreId: "schedule-section"
  },
  {
    id: "homework-assignments",
    title: "Homework Assignments",
    description: "Create, assign, and track submissions seamlessly.",
    icon: FileText,
    bgGradient: "from-brand-emerald/10 to-brand-fire/10",
    learnMoreId: "homework-section"
  },
  {
    id: "student-management",
    title: "Student & User Management",
    description: "Organize your learners and team effortlessly.",
    icon: Users,
    bgGradient: "from-brand-ultraviolet/10 to-brand-emerald/10",
    learnMoreId: "student-section"
  },
  {
    id: "comprehensive-reports",
    title: "Comprehensive Reports",
    description: "Monitor performance, attendance, and more.",
    icon: BarChart3,
    bgGradient: "from-brand-ice/10 to-brand-ultraviolet/10",
    learnMoreId: "reports-section"
  },
  {
    id: "accounting-tools",
    title: "Accounting Tools",
    description: "Simplify fee collection & financial tracking.",
    icon: Calculator,
    bgGradient: "from-brand-titanium/10 to-brand-ice/10",
    learnMoreId: "accounting-section"
  },
  {
    id: "centralized-dashboard",
    title: "Centralized Dashboard",
    description: "Get real-time insights on your institute's health.",
    icon: LayoutDashboard,
    bgGradient: "from-brand-holo/10 to-brand-titanium/10",
    learnMoreId: "dashboard-section"
  }
];

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function PartnerFeatureCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--background)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/30 text-primary">
            Partner Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Everything You Need to <span className="text-primary">Run Your Institute</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools you need to manage your coaching institute efficiently.
          </p>
        </div>
        
        {/* Feature Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featureSlides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <CarouselItem key={slide.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1">
                      <Card className={cn(
                        "overflow-hidden border-2 transition-all duration-500 h-[400px] flex flex-col",
                        index === current ? "border-primary/30 shadow-xl" : "border-border/50"
                      )}>
                        {/* Feature Header with Icon */}
                        <div className={cn(
                          "p-6 bg-gradient-to-r",
                          slide.bgGradient
                        )}>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                              <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">{slide.title}</h3>
                          </div>
                        </div>
                        
                        {/* Feature Content */}
                        <CardContent className="flex-grow flex flex-col justify-between p-6 bg-gradient-to-b from-background to-muted/10">
                          <div className="space-y-6">
                            <p className="text-lg text-foreground/90">{slide.description}</p>
                            
                            {/* Feature Highlights */}
                            <div className="space-y-3">
                              {[1, 2, 3].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    {slide.id === "schedule-management" && item === 1 && "Drag & drop calendar interface"}
                                    {slide.id === "schedule-management" && item === 2 && "Automatic student notifications"}
                                    {slide.id === "schedule-management" && item === 3 && "Recurring class scheduling"}
                                    
                                    {slide.id === "homework-assignments" && item === 1 && "Digital assignment creation"}
                                    {slide.id === "homework-assignments" && item === 2 && "Automated submission tracking"}
                                    {slide.id === "homework-assignments" && item === 3 && "Instant feedback tools"}
                                    
                                    {slide.id === "student-management" && item === 1 && "Comprehensive student profiles"}
                                    {slide.id === "student-management" && item === 2 && "Attendance tracking"}
                                    {slide.id === "student-management" && item === 3 && "Parent communication portal"}
                                    
                                    {slide.id === "comprehensive-reports" && item === 1 && "Performance analytics"}
                                    {slide.id === "comprehensive-reports" && item === 2 && "Customizable report templates"}
                                    {slide.id === "comprehensive-reports" && item === 3 && "One-click report generation"}
                                    
                                    {slide.id === "accounting-tools" && item === 1 && "Fee management system"}
                                    {slide.id === "accounting-tools" && item === 2 && "Payment tracking & reminders"}
                                    {slide.id === "accounting-tools" && item === 3 && "Financial reporting tools"}
                                    
                                    {slide.id === "centralized-dashboard" && item === 1 && "Real-time institute metrics"}
                                    {slide.id === "centralized-dashboard" && item === 2 && "Customizable KPI tracking"}
                                    {slide.id === "centralized-dashboard" && item === 3 && "Growth trend visualization"}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              <Button
                onClick={() => api?.scrollPrev()}
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full bg-background border-border/50 hover:bg-primary hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              
              {/* Dots Indicator */}
              <div className="flex items-center gap-2 px-4">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all",
                      i === current ? "bg-primary scale-125" : "bg-primary/20 hover:bg-primary/40"
                    )}
                    onClick={() => api?.scrollTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              
              <Button
                onClick={() => api?.scrollNext()}
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full bg-primary text-white border-primary hover:bg-primary/90"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Carousel>
          
          <Glow
            className="absolute inset-0 -z-10 opacity-30"
            variant="center"
          />
        </div>
      </div>
    </Section>
  );
}