/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
  MessageCircleIcon,
  SmileIcon,
  PenToolIcon,
  UsersIcon,
  BarChart3Icon,
  HandIcon,
  DownloadIcon,
  VideoIcon,
  HeartIcon,
  ThumbsUpIcon,
  UserIcon,
  PlayIcon
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
}

const classroomFeatures: Feature[] = [
  {
    id: "live-chat",
    title: "Live Chat & Reaction Emojis",
    description: "Real-time communication with instructors and peers through chat and instant reactions.",
    icon: MessageCircleIcon,
    color: "text-brand",
    bgColor: "bg-brand/10"
  },
  {
    id: "annotation",
    title: "On-Screen Annotation",
    description: "Instructors can draw, highlight, and annotate directly on shared content.",
    icon: PenToolIcon,
    color: "text-brand-emerald",
    bgColor: "bg-brand-emerald/10"
  },
  {
    id: "breakout-rooms",
    title: "Breakout Rooms",
    description: "Small group discussions and peer-to-peer learning sessions.",
    icon: UsersIcon,
    color: "text-brand-fire",
    bgColor: "bg-brand-fire/10"
  },
  {
    id: "polls-quizzes",
    title: "Instant Polls & Quizzes",
    description: "Interactive assessments and real-time feedback during live sessions.",
    icon: BarChart3Icon,
    color: "text-brand-ember",
    bgColor: "bg-brand-ember/10"
  }
];

interface LiveClassroomFeaturesProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function LiveClassroomFeatures({
  className,
  ...props
}: LiveClassroomFeaturesProps) {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [isLive] = useState(true); // Fixed: removed setIsLive since it's not used

  return (
    <Section className={cn("relative overflow-hidden py-16 lg:py-24", className)} {...props}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-brand/5 to-background" />
      
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 bg-brand/10 border-brand/20 text-brand">
            <PlayIcon className="w-4 h-4 mr-2" />
            Real Classroom Experience
          </Badge>
          <h2 className="text-balance text-3xl font-semibold sm:text-5xl mb-6">
            Engagement Beyond the Screen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the energy and interaction of a physical classroom in our virtual environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6">
            {classroomFeatures.map((feature) => {
              const Icon = feature.icon;
              const isHovered = hoveredFeature === feature.id;
              
              return (
                <Card 
                  key={feature.id}
                  className={cn(
                    "group p-6 transition-all duration-300 cursor-pointer border-2",
                    "hover:shadow-lg hover:scale-105",
                    isHovered 
                      ? `border-brand/30 ${feature.bgColor}` 
                      : "border-border/50 bg-card hover:border-brand/20"
                  )}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                      isHovered 
                        ? `${feature.bgColor} ${feature.color}` 
                        : "bg-muted text-muted-foreground group-hover:bg-brand/10 group-hover:text-brand"
                    )}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={cn(
                        "text-lg font-semibold mb-2 transition-colors duration-300",
                        isHovered ? feature.color : "text-foreground group-hover:text-brand"
                      )}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Interactive Live Class Mockup */}
          <div className="relative">
            <Card className="p-6 bg-gradient-to-br from-card to-muted/20 border-2 border-brand/20 overflow-hidden">
              {/* Mockup Header */}
              <div className="flex items-center justify-between mb-4 p-3 bg-background/50 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-3 h-3 rounded-full transition-colors duration-1000",
                    isLive ? "bg-red-500 animate-pulse" : "bg-gray-400"
                  )} />
                  <span className="text-sm font-medium">
                    {isLive ? "LIVE" : "OFFLINE"} - CPA Financial Accounting
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <UserIcon className="w-4 h-4" />
                  <span>247 students</span>
                </div>
              </div>

              {/* Video Area */}
              <div className="relative bg-gradient-to-br from-brand/10 to-brand-emerald/10 rounded-lg p-8 mb-4 min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <VideoIcon className="w-8 h-8 text-brand" />
                  </div>
                  <p className="text-sm text-muted-foreground">Prof. Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">Teaching: Revenue Recognition</p>
                </div>
                
                {/* Annotation overlay */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-brand-emerald/20 rounded-full flex items-center justify-center">
                  <PenToolIcon className="w-4 h-4 text-brand-emerald" />
                </div>
              </div>

              {/* Interactive Controls */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {/* Raise Hand Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "relative transition-all duration-300",
                    hoveredElement === "raise-hand" && "bg-brand/10 border-brand/30 text-brand"
                  )}
                  onMouseEnter={() => setHoveredElement("raise-hand")}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  <HandIcon className="w-4 h-4 mr-2" />
                  Raise Hand
                  {hoveredElement === "raise-hand" && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                      Ask a question
                    </div>
                  )}
                </Button>

                {/* Download Notes Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "relative transition-all duration-300",
                    hoveredElement === "download" && "bg-brand-emerald/10 border-brand-emerald/30 text-brand-emerald"
                  )}
                  onMouseEnter={() => setHoveredElement("download")}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Notes
                  {hoveredElement === "download" && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                      Download class notes
                    </div>
                  )}
                </Button>
              </div>

              {/* Chat & Reactions */}
              <div className="space-y-3">
                {/* Live Chat */}
                <Card className="p-3 bg-background/50">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircleIcon className="w-4 h-4 text-brand" />
                    <span className="text-xs font-medium">Live Chat</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-brand/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">A</span>
                      </div>
                      <div>
                        <span className="font-medium">Alex:</span>
                        <span className="text-muted-foreground ml-1">Great explanation!</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-brand-emerald/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">M</span>
                      </div>
                      <div>
                        <span className="font-medium">Maria:</span>
                        <span className="text-muted-foreground ml-1">Can you repeat the formula?</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Reaction Emojis */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Quick reactions:</span>
                  <div className="flex gap-1">
                    {[ThumbsUpIcon, HeartIcon, SmileIcon].map((Icon, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 p-0 hover:bg-brand/10"
                      >
                        <Icon className="w-4 h-4" />
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Live Poll */}
                <Card className="p-3 bg-brand/5 border-brand/20">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3Icon className="w-4 h-4 text-brand" />
                    <span className="text-xs font-medium">Live Poll: Which method is most accurate?</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-background/50 rounded-full h-2">
                        <div className="bg-brand h-2 rounded-full w-3/4" />
                      </div>
                      <span className="text-xs">75%</span>
                    </div>
                    <span className="text-xs text-muted-foreground">FIFO Method</span>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-emerald/20 rounded-full animate-pulse delay-1000" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-brand/10 via-brand-emerald/10 to-brand/10 border-brand/20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center">
                <PlayIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-brand mb-1">
                  Ready to join a live class?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Experience the interactive classroom environment firsthand
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-emerald/10 rounded-full blur-xl animate-pulse delay-1000" />
    </Section>
  );
}