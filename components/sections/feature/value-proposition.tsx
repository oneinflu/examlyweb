"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { 
  Sparkles, 
  BarChart3, 
  Users, 
  Smartphone,
  ChevronRight
} from "lucide-react";

interface ValuePropositionProps {
  className?: string;
  title?: string; // Add optional title prop
}

export default function ValueProposition({ 
  className = "", 
  title = "Why Choose Examly" // Default title
}: ValuePropositionProps) {
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  // Mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Value propositions data with descriptions
  const valueProps = [
    {
      icon: <Sparkles className="w-6 h-6 text-brand" />,
      title: "Personalized AI-Driven Learning",
      description: "Our AI analyzes your strengths and weaknesses to create custom study plans that adapt in real-time as you progress, focusing your efforts where they matter most.",
      color: "bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800",
      hoverColor: "bg-brand/10 border-brand/20",
      textColor: "text-brand",
      link: "/feature/ai-learning"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-brand" />,
      title: "Realistic Exam Simulations",
      description: "Practice with exam simulations that mirror the actual test environment, timing, and question formats to build confidence and reduce test-day anxiety.",
      color: "bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800",
      hoverColor: "bg-brand/10 border-brand/20",
      textColor: "text-brand",
      link: "/feature/exam-simulation"
    },
    {
      icon: <Users className="w-6 h-6 text-brand" />,
      title: "Live Interactive Expert Classes",
      description: "Join live sessions with industry experts who break down complex topics, answer your questions in real-time, and share insider tips for exam success.",
      color: "bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800",
      hoverColor: "bg-brand/10 border-brand/20",
      textColor: "text-brand",
      link: "/feature/live-classes"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-brand" />,
      title: "Accessible Offline Anywhere",
      description: "Download materials for offline study on any device, allowing you to maintain your study schedule even without internet access, perfect for busy professionals.",
      color: "bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800",
      hoverColor: "bg-brand/10 border-brand/20",
      textColor: "text-brand",
      link: "/feature/offline-access"
    }
  ];

  return (
    <Section className={`py-12 ${className}`}>
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        {/* Title */}
        {title && (
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          </div>
        )}
        
        {/* Value propositions grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {valueProps.map((prop, index) => (
            <a 
              key={index}
              href={prop.link}
              className="block h-full"
            >
              <Card 
                className={`p-6 h-full flex flex-col ${activeCard === index ? prop.hoverColor : prop.color} border transition-all duration-300 hover:shadow-md relative overflow-hidden group cursor-pointer`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`mb-4 p-3 rounded-full bg-background/80 backdrop-blur-sm transition-all duration-300 ${activeCard === index ? 'scale-110' : ''}`}>
                    {prop.icon}
                  </div>
                  <h3 className={`text-lg font-medium mb-2 transition-all duration-300 ${activeCard === index ? prop.textColor : ''}`}>
                    {prop.title}
                  </h3>
                  
                  {/* Description that appears on hover/tap */}
                  <div className={`transition-all duration-300 overflow-hidden flex-grow ${activeCard === index ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-muted-foreground">
                      {prop.description}
                    </p>
                    <div className={`flex items-center justify-center mt-3 ${prop.textColor}`}>
                      <span className="text-xs font-medium">Learn more</span>
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                  
                  {/* Hint for interaction when not active */}
                  <div className={`absolute bottom-2 right-2 transition-opacity duration-200 ${activeCard === index ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'}`}>
                    <div className="text-xs flex items-center text-muted-foreground">
                      <span className="mr-1">Details</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
        
        {/* Tagline */}
        <div className="mt-8 text-center">
          <p className="text-lg text-muted-foreground italic">
            Designed for today&apos;s ambitious professionals.
          </p>
        </div>
      </div>
    </Section>
  );
}