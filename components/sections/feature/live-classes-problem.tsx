"use client";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  AlertTriangle, 
  Clock, 
  HelpCircle, 
  Heart,
  BookOpen,
  Users,
  Video,
  MessageCircle,
  ArrowRight,
  Frown,
  Smile
} from "lucide-react";

export default function LiveClassesProblem() {
  const [hoveredPain, setHoveredPain] = useState<number | null>(null);

  const painPoints = [
    {
      icon: Clock,
      title: "Confusing topics that take hours to figure out alone",
      description: "Complex concepts become overwhelming when you're struggling through them without guidance",
      impact: "5-8 hours wasted per topic",
      color: "text-red-500"
    },
    {
      icon: HelpCircle,
      title: "No one to ask for clarification when stuck",
      description: "Questions pile up with no immediate answers, creating knowledge gaps that compound over time",
      impact: "40% concepts unclear",
      color: "text-orange-500"
    },
    {
      icon: Heart,
      title: "Losing motivation without real-time interaction",
      description: "Isolation and lack of engagement leads to procrastination and eventual burnout",
      impact: "60% give up early",
      color: "text-yellow-500"
    }
  ];

  return (
    <Section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-red-50 border-red-200 text-red-700 dark:bg-red-950 dark:border-red-800 dark:text-red-300">
            <AlertTriangle className="w-3 h-3 mr-1" />
            The Learning Challenge
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            Self-Study Can Only Take You <span className="text-red-500">So Far</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Even the most dedicated students hit walls when learning complex topics in isolation. 
            Here&apos;s why going it alone isn&apos;t enough.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {painPoints.map((pain, index) => {
            const IconComponent = pain.icon;
            return (
              <Card 
                key={index}
                className={`p-6 transition-all duration-300 cursor-pointer group hover:shadow-lg ${
                  hoveredPain === index ? 'border-red-300 shadow-lg shadow-red-100 dark:shadow-red-900/20' : ''
                }`}
                onMouseEnter={() => setHoveredPain(index)}
                onMouseLeave={() => setHoveredPain(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 dark:bg-red-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className={`w-6 h-6 ${pain.color}`} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-tight">
                      {pain.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pain.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs bg-red-50 border-red-200 text-red-700 dark:bg-red-950 dark:border-red-800">
                        Impact: {pain.impact}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Contrast Illustration */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Isolated Student */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <Frown className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Self-Study Struggle</h3>
                <p className="text-sm text-muted-foreground">The lonely learning journey</p>
              </div>
            </div>
            
            <Card className="p-8 border-red-200/50 bg-red-50/30 dark:bg-red-950/10">
              <div className="text-center space-y-6">
                {/* Illustration: Student with books */}
                <div className="relative mx-auto w-48 h-48 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-red-200 dark:bg-red-800/30 rounded-full mx-auto flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-12 h-2 bg-red-300 dark:bg-red-700 rounded mx-auto"></div>
                      <div className="w-16 h-2 bg-red-300 dark:bg-red-700 rounded mx-auto"></div>
                      <div className="w-10 h-2 bg-red-300 dark:bg-red-700 rounded mx-auto"></div>
                    </div>
                  </div>
                  {/* Confusion indicators */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">?</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs">!</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-700 dark:text-red-400">Isolated & Overwhelmed</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      Pile of confusing textbooks
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      No immediate help available
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      Motivation declining daily
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Interactive Virtual Class */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-emerald/20 rounded-full flex items-center justify-center">
                <Smile className="w-5 h-5 text-brand-emerald" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Live Interactive Learning</h3>
                <p className="text-sm text-muted-foreground">Connected & confident</p>
              </div>
            </div>
            
            <Card className="p-8 border-brand-emerald/20 bg-brand-emerald/5">
              <div className="text-center space-y-6">
                {/* Illustration: Interactive class */}
                <div className="relative mx-auto w-48 h-48 bg-gradient-to-br from-brand-emerald/20 to-brand/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-brand-emerald/30 rounded-full mx-auto flex items-center justify-center">
                      <Video className="w-8 h-8 text-brand-emerald" />
                    </div>
                    <div className="flex justify-center gap-2">
                      <div className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-brand" />
                      </div>
                      <div className="w-8 h-8 bg-brand-emerald/20 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-brand-emerald" />
                      </div>
                    </div>
                  </div>
                  {/* Success indicators */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-emerald rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-brand rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs">💡</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-brand-emerald">Engaged & Supported</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-emerald rounded-full"></div>
                      Expert tutors available instantly
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-emerald rounded-full"></div>
                      Real-time Q&A and clarification
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-emerald rounded-full"></div>
                      Peer interaction and motivation
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Don&apos;t let confusion and isolation hold you back. Join thousands of students who&apos;ve transformed their learning with live classes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand hover:bg-brand/90 text-white px-8">
              Join Live Classes Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              See Class Schedule
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}