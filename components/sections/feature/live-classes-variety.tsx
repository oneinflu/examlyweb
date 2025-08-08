/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Section } from "@/components/ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Image from "next/image";
import Glow from "@/components/ui/glow";
import { 
  GraduationCapIcon,
  BookOpenIcon,
  ClockIcon,
  MessageCircleQuestionIcon,
  PlayIcon,
  UsersIcon,
  CalendarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon
} from "lucide-react";

type ClassType = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  duration: string;
  frequency: string;
  preview: string;
  stats: {
    students: string;
    rating: string;
    completion: string;
  };
};

const classTypes: ClassType[] = [
  {
    id: "exam-prep",
    title: "Exam Prep Series",
    description: "Comprehensive coverage of CPA, CMA, and EA syllabus with structured learning paths.",
    icon: GraduationCapIcon,
    features: [
      "Complete syllabus coverage",
      "Progressive difficulty levels",
      "Weekly assessments",
      "Exam-focused practice"
    ],
    duration: "12-16 weeks",
    frequency: "3x per week",
    preview: "/exam.png",
    stats: {
      students: "2,500+",
      rating: "4.9/5",
      completion: "94%"
    }
  },
  {
    id: "masterclass",
    title: "Topic Masterclasses",
    description: "Deep dives into challenging topics with expert instructors and real-world applications.",
    icon: BookOpenIcon,
    features: [
      "Expert-led deep dives",
      "Real-world case studies",
      "Interactive problem solving",
      "Advanced techniques"
    ],
    duration: "2-3 hours",
    frequency: "Weekly",
    preview: "/learning.svg",
    stats: {
      students: "1,800+",
      rating: "4.8/5",
      completion: "96%"
    }
  },
  {
    id: "revision",
    title: "Revision Sprints",
    description: "Rapid recap sessions before exams with key concepts and last-minute tips.",
    icon: ClockIcon,
    features: [
      "High-yield topics focus",
      "Quick concept reviews",
      "Memory techniques",
      "Last-minute strategies"
    ],
    duration: "1-2 hours",
    frequency: "Daily (exam week)",
    preview: "/calender.png",
    stats: {
      students: "3,200+",
      rating: "4.9/5",
      completion: "98%"
    }
  },
  {
    id: "doubt-clearing",
    title: "Doubt-Clearing Sessions",
    description: "Open Q&A format where students can ask any questions and get instant expert answers.",
    icon: MessageCircleQuestionIcon,
    features: [
      "Open Q&A format",
      "Instant expert answers",
      "Peer learning",
      "Flexible topics"
    ],
    duration: "1 hour",
    frequency: "Daily",
    preview: "/simulation.svg",
    stats: {
      students: "4,100+",
      rating: "4.7/5",
      completion: "92%"
    }
  }
];

export default function LiveClassesVariety() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col gap-8 sm:gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
          <Badge variant="outline" className="border-brand/20 bg-brand/10 text-brand">
            <SparklesIcon className="mr-2 h-3 w-3" />
            Class Variety
          </Badge>
          <h2 className="text-balance text-center text-3xl font-semibold sm:text-5xl">
            Classes Designed for Every Learning Need
          </h2>
          <p className="text-md max-w-[720px] text-balance text-center font-medium text-muted-foreground sm:text-xl">
            From comprehensive exam prep to quick doubt-clearing sessions, find the perfect class format that matches your learning style and schedule.
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <Tabs
            defaultValue="exam-prep"
            className="flex flex-col items-start gap-6 lg:grid lg:grid-cols-3 lg:gap-8"
          >
            {/* Tab List */}
            <TabsList className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-1">
              {classTypes.map((classType) => {
                const IconComponent = classType.icon;
                return (
                  <TabsTrigger
                    key={classType.id}
                    value={classType.id}
                    className="flex w-full flex-col gap-3 p-4 h-auto text-left"
                  >
                    <div className="flex items-start gap-3 w-full">
                      <div className="p-2 rounded-lg bg-brand/10">
                        <IconComponent className="h-5 w-5 text-brand" />
                      </div>
                      <div className="flex flex-col gap-1 flex-1">
                        <h3 className="font-semibold text-sm md:text-base">
                          {classType.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {classType.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground w-full">
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        {classType.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        {classType.frequency}
                      </span>
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Tab Content */}
            {classTypes.map((classType) => (
              <TabsContent
                key={classType.id}
                value={classType.id}
                className="lg:col-span-2 space-y-6"
              >
                {/* Preview Image */}
                <div className="aspect-[16/9] relative">
                  <MockupFrame size="small">
                    <Mockup type="responsive">
                      <Image
                        src={classType.preview}
                        alt={`${classType.title} preview`}
                        width={1248}
                        height={765}
                        className="object-cover"
                      />
                    </Mockup>
                  </MockupFrame>
                  <Glow variant="center" />
                </div>

                {/* Class Details */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Features */}
                  <Card className="p-6">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-brand" />
                      What You&apos;ll Get
                    </h4>
                    <ul className="space-y-3">
                      {classType.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-sm">
                          <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {/* Stats */}
                  <Card className="p-6">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <UsersIcon className="h-4 w-4 text-brand" />
                      Class Statistics
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Students Enrolled</span>
                        <span className="font-semibold text-brand">{classType.stats.students}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Average Rating</span>
                        <span className="font-semibold text-brand">{classType.stats.rating}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Completion Rate</span>
                        <span className="font-semibold text-brand">{classType.stats.completion}</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="flex-1">
                    <PlayIcon className="mr-2 h-4 w-4" />
                    Join {classType.title}
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    View Schedule
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Can&apos;t decide? Start with our most popular format
          </p>
          <Button size="lg" variant="glow">
            Try Exam Prep Series Free
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}