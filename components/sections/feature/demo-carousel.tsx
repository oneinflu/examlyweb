"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../ui/carousel";
import { Section } from "../../ui/section";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight,
  PlayIcon,
  CalendarIcon,
  BarChart3Icon,
  TargetIcon,
  InfoIcon,
  CheckCircleIcon,
  ClockIcon,
  TrendingUpIcon,
  BookOpenIcon,
  StarIcon
} from "lucide-react";

type DemoSlide = {
  id: string;
  title: string;
  description: string;
  image: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  hotspots: Hotspot[];
  bgGradient: string;
};

type Hotspot = {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
};

const demoSlides: DemoSlide[] = [
  {
    id: "weekly-plan",
    title: "Weekly Plan View",
    description: "See your entire week mapped out with AI-optimized study sessions",
    image: "/calender.png",
    icon: CalendarIcon,
    bgGradient: "from-brand/10 to-brand-emerald/10",
    hotspots: [
      {
        id: "priority-topics",
        x: 25,
        y: 30,
        title: "Priority Topics",
        description: "AI identifies which topics need immediate attention based on your exam date",
        icon: TargetIcon
      },
      {
        id: "time-blocks",
        x: 60,
        y: 45,
        title: "Smart Time Blocks",
        description: "Optimally sized study sessions that match your attention span",
        icon: ClockIcon
      },
      {
        id: "revision-days",
        x: 80,
        y: 70,
        title: "Revision Days",
        description: "Strategic revision sessions automatically scheduled before your exam",
        icon: BookOpenIcon
      }
    ]
  },
  {
    id: "progress-dashboard",
    title: "Progress Dashboard",
    description: "Track your learning journey with detailed analytics and insights",
    image: "/home.png",
    icon: BarChart3Icon,
    bgGradient: "from-brand-emerald/10 to-brand-fire/10",
    hotspots: [
      {
        id: "completion-bars",
        x: 30,
        y: 25,
        title: "Completion Bars",
        description: "Visual progress tracking for each subject with percentage completion",
        icon: BarChart3Icon
      },
      {
        id: "readiness-score",
        x: 70,
        y: 35,
        title: "Readiness Score",
        description: "AI-calculated exam readiness based on your performance and progress",
        icon: TrendingUpIcon
      },
      {
        id: "mastered-topics",
        x: 45,
        y: 60,
        title: "Mastered Topics",
        description: "Green checkmarks show topics you've successfully mastered",
        icon: CheckCircleIcon
      },
      {
        id: "streak-counter",
        x: 75,
        y: 75,
        title: "Study Streak",
        description: "Gamified learning with daily streak counters to keep you motivated",
        icon: StarIcon
      }
    ]
  },
  {
    id: "topic-priority",
    title: "Topic Priority View",
    description: "AI-powered prioritization based on your weaknesses and exam weightage",
    image: "/prep.png",
    icon: TargetIcon,
    bgGradient: "from-brand-fire/10 to-brand-ember/10",
    hotspots: [
      {
        id: "weak-areas",
        x: 20,
        y: 40,
        title: "Weak Areas",
        description: "Red indicators highlight topics that need more attention",
        icon: TargetIcon
      },
      {
        id: "difficulty-analysis",
        x: 55,
        y: 30,
        title: "Difficulty Analysis",
        description: "AI analyzes your mock test results to identify challenging areas",
        icon: TrendingUpIcon
      },
      {
        id: "time-estimates",
        x: 80,
        y: 55,
        title: "Time Estimates",
        description: "Smart time allocation based on topic complexity and your learning pace",
        icon: ClockIcon
      }
    ]
  }
];

interface DemoCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export default function DemoCarousel({
  className,
  title = "Real Screenshots / Demo",
  ...props
}: DemoCarouselProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = React.useState<any>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [selectedSlide, setSelectedSlide] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    setSelectedSlide(api.selectedScrollSnap());

    api.on("select", () => {
      const newCurrent = api.selectedScrollSnap();
      setCurrent(newCurrent);
      setSelectedSlide(newCurrent);
      setActiveHotspot(null); // Reset hotspot when slide changes
    });
  }, [api]);

  const currentSlide = demoSlides[selectedSlide];

  return (
    <Section className={cn("relative overflow-hidden", className)} {...props}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-brand/5 to-background" />
      
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 bg-brand/10 border-brand/20 text-brand">
            <PlayIcon className="w-4 h-4 mr-2" />
            Make it Tangible
          </Badge>
          <h2 className="text-balance text-3xl font-semibold sm:text-5xl mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore real screenshots of our platform with interactive explanations of key features.
          </p>
        </div>

        {/* Slide Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 bg-muted/50 rounded-lg">
            {demoSlides.map((slide, index) => {
              const Icon = slide.icon;
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    api?.scrollTo(index);
                    setSelectedSlide(index);
                    setActiveHotspot(null);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
                    index === current
                      ? "bg-brand text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{slide.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Carousel */}
        <div className="relative w-full max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: false,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {demoSlides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <CarouselItem key={slide.id}>
                    <div className="p-2">
                      <Card className={cn(
                        "relative overflow-hidden border-2 transition-all duration-500",
                        index === current ? "border-brand/30 shadow-2xl" : "border-border/50"
                      )}>
                        {/* Slide Header */}
                        <div className={cn(
                          "p-6 bg-gradient-to-r",
                          slide.bgGradient
                        )}>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-brand text-white flex items-center justify-center">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-brand">{slide.title}</h3>
                              <p className="text-sm text-muted-foreground">{slide.description}</p>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Screenshot */}
                        <div className="relative bg-gradient-to-b from-background to-muted/20 p-6">
                          <div className="relative group">
                            <Image
                              src={slide.image}
                              alt={slide.title}
                              width={1200}
                              height={800}
                              className="w-full rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
                              draggable="false"
                            />
                            
                            {/* Interactive Hotspots */}
                            {slide.hotspots.map((hotspot) => {
                              const HotspotIcon = hotspot.icon;
                              const isActive = activeHotspot === hotspot.id;
                              
                              return (
                                <div key={hotspot.id}>
                                  {/* Hotspot Button */}
                                  <button
                                    className={cn(
                                      "absolute w-8 h-8 rounded-full border-2 transition-all duration-300 z-20",
                                      "flex items-center justify-center",
                                      isActive
                                        ? "bg-brand border-brand text-white scale-125 shadow-lg"
                                        : "bg-white border-brand text-brand hover:bg-brand hover:text-white hover:scale-110 shadow-md"
                                    )}
                                    style={{
                                      left: `${hotspot.x}%`,
                                      top: `${hotspot.y}%`,
                                      transform: 'translate(-50%, -50%)'
                                    }}
                                    onClick={() => setActiveHotspot(isActive ? null : hotspot.id)}
                                  >
                                    {isActive ? (
                                      <InfoIcon className="w-4 h-4" />
                                    ) : (
                                      <HotspotIcon className="w-4 h-4" />
                                    )}
                                  </button>
                                  
                                  {/* Pulse Animation */}
                                  {!isActive && (
                                    <div
                                      className="absolute w-8 h-8 rounded-full border-2 border-brand animate-ping opacity-30 z-10"
                                      style={{
                                        left: `${hotspot.x}%`,
                                        top: `${hotspot.y}%`,
                                        transform: 'translate(-50%, -50%)'
                                      }}
                                    />
                                  )}
                                  
                                  {/* Hotspot Tooltip */}
                                  {isActive && (
                                    <div
                                      className={cn(
                                        "absolute z-30 w-64 p-4 bg-white border border-border rounded-lg shadow-xl",
                                        "animate-in fade-in-0 zoom-in-95 duration-200",
                                        "hidden md:block" // Hide on mobile, show on medium screens and up
                                      )}
                                      style={{
                                        left: `${hotspot.x}%`,
                                        top: `${hotspot.y + 8}%`,
                                        transform: 'translateX(-50%)'
                                      }}
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                                          <HotspotIcon className="w-4 h-4 text-brand" />
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-sm mb-1">{hotspot.title}</h4>
                                          <p className="text-xs text-muted-foreground leading-relaxed">
                                            {hotspot.description}
                                          </p>
                                        </div>
                                      </div>
                                      {/* Arrow pointing to hotspot */}
                                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-border rotate-45" />
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
              <Button
                onClick={() => api?.scrollPrev()}
                disabled={!api?.canScrollPrev()}
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm border-border/50 hover:bg-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => api?.scrollNext()}
                disabled={!api?.canScrollNext()}
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full bg-brand text-white border-brand hover:bg-brand/90"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Carousel>
        </div>

        {/* Active Hotspot Details */}
        {activeHotspot && (
          <div className="mt-8 max-w-2xl mx-auto">
            <Card className="p-6 bg-gradient-to-r from-brand/5 to-brand-emerald/5 border-brand/20">
              {(() => {
                const hotspot = currentSlide.hotspots.find(h => h.id === activeHotspot);
                if (!hotspot) return null;
                const HotspotIcon = hotspot.icon;
                return (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand text-white flex items-center justify-center flex-shrink-0">
                      <HotspotIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-brand mb-2">{hotspot.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{hotspot.description}</p>
                    </div>
                  </div>
                );
              })()}
            </Card>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-sm font-medium text-brand">
              Click on the hotspots to explore features in detail
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}