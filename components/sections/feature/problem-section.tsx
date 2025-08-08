"use client";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  AlertTriangleIcon, 
  ClockIcon, 
  BrainIcon, 
  HelpCircleIcon,
  CheckIcon,
  XIcon,
  ArrowRightIcon,
  CalendarIcon,
  TargetIcon,
  TrendingUpIcon
} from "lucide-react";

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState<'messy' | 'optimized'>('messy');
  const [hoveredPain, setHoveredPain] = useState<number | null>(null);

  const painPoints = [
    {
      icon: ClockIcon,
      title: "No clear structure",
      description: "Waste time deciding what to study",
      impact: "3-4 hours lost weekly",
      color: "text-red-500"
    },
    {
      icon: BrainIcon,
      title: "Forgetting to revise",
      description: "Important topics slip through the cracks",
      impact: "40% knowledge retention loss",
      color: "text-orange-500"
    },
    {
      icon: HelpCircleIcon,
      title: "Getting stuck without help",
      description: "Difficult areas become roadblocks",
      impact: "2x longer study time",
      color: "text-yellow-500"
    }
  ];

  const messyScheduleItems = [
    { time: "9:00 AM", task: "Study... something?", status: "confused" },
    { time: "10:30 AM", task: "Maybe Financial Reporting?", status: "uncertain" },
    { time: "12:00 PM", task: "Lunch break (extended)", status: "distracted" },
    { time: "2:00 PM", task: "Random practice questions", status: "unfocused" },
    { time: "4:00 PM", task: "Panic about tomorrow's topics", status: "stressed" },
    { time: "6:00 PM", task: "Give up for today", status: "defeated" }
  ];

  const optimizedScheduleItems = [
    { time: "9:00 AM", task: "Financial Reporting - Chapter 3", status: "focused", progress: 85 },
    { time: "10:30 AM", task: "Practice Questions (Weak Areas)", status: "targeted", progress: 92 },
    { time: "12:00 PM", task: "Smart Break + Quick Review", status: "refreshed", progress: 100 },
    { time: "1:00 PM", task: "Audit Concepts - AI Recommended", status: "confident", progress: 78 },
    { time: "3:00 PM", task: "Revision: Yesterday's Topics", status: "reinforced", progress: 95 },
    { time: "4:30 PM", task: "Tomorrow's Prep Preview", status: "prepared", progress: 88 }
  ];

  return (
    <Section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-red-50 border-red-200 text-red-700 dark:bg-red-950 dark:border-red-800 dark:text-red-300">
            <AlertTriangleIcon className="w-3 h-3 mr-1" />
            The Reality Check
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Why Most Students <span className="text-red-500">Struggle</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Without a structured approach, even the most dedicated students find themselves 
            spinning their wheels instead of making real progress.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-red-50 dark:bg-red-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className={`w-6 h-6 ${pain.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {pain.title}
                    </h3>
                    <p className="text-muted-foreground">
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

        {/* Side-by-Side Comparison */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">The Difference is Clear</h3>
            <p className="text-muted-foreground mb-8">
              See how AI-powered planning transforms chaotic study sessions into focused, productive learning.
            </p>
            
            {/* Tab Switcher */}
            <div className="inline-flex bg-muted rounded-lg p-1 mb-8">
              <button
                onClick={() => setActiveTab('messy')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'messy' 
                    ? 'bg-red-500 text-white shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                😵 Self-Made Chaos
              </button>
              <button
                onClick={() => setActiveTab('optimized')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'optimized' 
                    ? 'bg-green-500 text-white shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                🎯 AI-Optimized Plan
              </button>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Messy Schedule */}
            <Card className={`p-6 transition-all duration-500 ${
              activeTab === 'messy' ? 'ring-2 ring-red-200 shadow-lg' : 'opacity-50'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-950 rounded-full flex items-center justify-center">
                  <XIcon className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 dark:text-red-400">Self-Made Schedule</h4>
                  <p className="text-sm text-muted-foreground">Unstructured & Inefficient</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {messyScheduleItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900"
                  >
                    <div className="text-sm font-mono text-muted-foreground min-w-[70px]">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm">{item.task}</div>
                      <div className="text-xs text-red-500 capitalize">{item.status}</div>
                    </div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <AlertTriangleIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">Result: 30% efficiency, high stress</span>
                </div>
              </div>
            </Card>

            {/* Optimized Schedule */}
            <Card className={`p-6 transition-all duration-500 ${
              activeTab === 'optimized' ? 'ring-2 ring-green-200 shadow-lg' : 'opacity-50'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400">AI-Optimized Plan</h4>
                  <p className="text-sm text-muted-foreground">Smart & Efficient</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {optimizedScheduleItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-50/50 dark:bg-green-950/20 border border-green-100 dark:border-green-900"
                  >
                    <div className="text-sm font-mono text-muted-foreground min-w-[70px]">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{item.task}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="text-xs text-green-600 dark:text-green-400 capitalize">{item.status}</div>
                        <div className="flex-1 bg-green-100 dark:bg-green-900 rounded-full h-1.5">
                          <div 
                            className="bg-green-500 h-1.5 rounded-full transition-all duration-1000"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">{item.progress}%</span>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <TrendingUpIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">Result: 85% efficiency, reduced stress</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to Action Arrow */}
          <div className="text-center pt-8">
            <div className="inline-flex items-center gap-3 text-muted-foreground">
              <span className="text-sm">Ready to transform your study routine?</span>
              <ArrowRightIcon className="w-4 h-4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}