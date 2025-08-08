"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrainIcon, BookOpenIcon, HelpCircleIcon, BarChart2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

type InsightFeature = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  suggestedTopics?: string[];
};

export default function AiInsightsStrip() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features: InsightFeature[] = [
    {
      id: 1,
      title: "Suggest next topics",
      description: "AI analyzes your performance patterns to recommend the most impactful topics to study next, maximizing your learning efficiency.",
      icon: BookOpenIcon,
      suggestedTopics: ["Financial Reporting", "Audit Procedures", "Tax Regulations"],
    },
    {
      id: 2,
      title: "Recommend question sets",
      description: "Get personalized question recommendations that target your specific knowledge gaps and reinforce concepts you're mastering.",
      icon: HelpCircleIcon,
    },
    {
      id: 3,
      title: "Track exam-readiness score",
      description: "Monitor your real-time readiness with a comprehensive score that combines performance, completion, and confidence metrics.",
      icon: BarChart2Icon,
    },
  ];

  return (
    <Section className="py-16 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <BrainIcon className="w-5 h-5 text-primary" />
            </div>
            <Badge variant="outline" className="px-3 py-1 bg-primary/5 border-primary/20">
              AI-Powered
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More than Numbers — Insights that Guide You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI engine transforms your learning data into actionable insights that adapt to your unique needs
          </p>
        </div>

        {/* Features with hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isHovered = hoveredFeature === feature.id;
            
            return (
              <Card 
                key={feature.id}
                className={cn(
                  "p-6 border-2 transition-all duration-300 cursor-pointer group relative",
                  isHovered 
                    ? "border-primary/30 bg-primary/5 shadow-lg scale-105" 
                    : "border-border/50 hover:border-primary/20"
                )}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Animated connecting lines when hovered */}
                <div className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500",
                  isHovered ? "opacity-100" : "opacity-0"
                )}>
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-px h-12 bg-primary/20 animate-pulse"
                        style={{
                          top: `${20 + i * 15}%`,
                          left: `${10 + i * 15}%`,
                          transformOrigin: 'center',
                          transform: `rotate(${i * 30}deg)`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '3s'
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
                    isHovered 
                      ? "bg-primary text-primary-foreground scale-110" 
                      : "bg-primary/10 text-primary"
                  )}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  
                  {/* Description - only visible on hover */}
                  <div className={cn(
                    "text-muted-foreground text-sm transition-all duration-500",
                    isHovered 
                      ? "opacity-100 mt-3" 
                      : "opacity-0 mt-0 absolute pointer-events-none"
                  )}>
                    <p>{feature.description}</p>
                    
                    {/* Suggested Topics - only for the first feature */}
                    {feature.suggestedTopics && feature.suggestedTopics.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-primary/10">
                        <p className="font-medium text-primary mb-2">Suggested Topics:</p>
                        <ul className="space-y-1">
                          {feature.suggestedTopics.map((topic, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </Section>
  );
}