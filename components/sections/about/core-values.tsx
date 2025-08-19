"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  Shield,
  Lightbulb,
  BarChart,
  TrendingUp,
  Users,
  Star,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Glow from '@/components/ui/glow';
import type { CarouselApi } from '@/components/ui/carousel';

const coreValues = [
  {
    id: 'trust',
    title: 'Trust',
    description: 'Building lasting relationships through transparency and reliability in everything we do.',
    icon: Shield,
    bgGradient: 'from-brand-fire/10 to-brand-ember/10',
    highlights: [
      'Transparent communication',
      'Reliable service delivery',
      'Data security & privacy'
    ]
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Continuously pushing boundaries to create cutting-edge learning solutions.',
    icon: Lightbulb,
    bgGradient: 'from-brand-emerald/10 to-brand-fire/10',
    highlights: [
      'Cutting-edge technology',
      'Innovative learning methods',
      'Continuous improvement'
    ]
  },
  {
    id: 'impact',
    title: 'Impact',
    description: 'Making a meaningful difference in students educational journeys.',
    icon: BarChart,
    bgGradient: 'from-brand-ultraviolet/10 to-brand-emerald/10',
    highlights: [
      'Measurable outcomes',
      'Student success stories',
      'Community engagement'
    ]
  },
  {
    id: 'growth',
    title: 'Growth',
    description: 'Fostering continuous learning and development for students and ourselves.',
    icon: TrendingUp,
    bgGradient: 'from-brand-ice/10 to-brand-ultraviolet/10',
    highlights: [
      'Personal development',
      'Skill enhancement',
      'Career advancement'
    ]
  },
  {
    id: 'community',
    title: 'Community',
    description: 'Creating an inclusive environment where every learner feels supported.',
    icon: Users,
    bgGradient: 'from-brand-titanium/10 to-brand-ice/10',
    highlights: [
      'Inclusive learning',
      'Peer support network',
      'Collaborative growth'
    ]
  },
  {
    id: 'excellence',
    title: 'Excellence',
    description: 'Striving for the highest standards in education and service delivery.',
    icon: Star,
    bgGradient: 'from-brand-holo/10 to-brand-titanium/10',
    highlights: [
      'Quality education',
      'Professional standards',
      'Best practices'
    ]
  }
];

export function CoreValues() {
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
            Our Values
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            The Principles that <span className="text-primary">Guide Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our core values shape everything we do in empowering educational success
          </p>
        </div>
        
        {/* Values Carousel */}
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
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <CarouselItem key={value.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="p-1">
                      <Card className={cn(
                        "overflow-hidden border-2 transition-all duration-500 h-[400px] flex flex-col",
                        index === current ? "border-primary/30 shadow-xl" : "border-border/50"
                      )}>
                        {/* Value Header with Icon */}
                        <div className={cn(
                          "p-6 bg-gradient-to-r",
                          value.bgGradient
                        )}>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                              <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                          </div>
                        </div>
                        
                        {/* Value Content */}
                        <div className="flex-grow flex flex-col justify-between p-6 bg-gradient-to-b from-background to-muted/10">
                          <div className="space-y-6">
                            <p className="text-lg text-foreground/90">{value.description}</p>
                            
                            {/* Value Highlights */}
                            <div className="space-y-3">
                              {value.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
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