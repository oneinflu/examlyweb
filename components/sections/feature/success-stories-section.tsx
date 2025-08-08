"use client";

import { useState } from "react";
import { Section } from "../../ui/section";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Badge } from "../../ui/badge";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { ChevronLeft, ChevronRight, Star, TrendingUp, Target, Users } from "lucide-react";

interface StudentTestimonial {
  id: string;
  name: string;
  examType: string;
  scoreImprovement: string;
  previousScore?: number;
  finalScore: number;
  text: string;
  image: string;
  studyDuration: string;
}

interface DataProof {
  metric: string;
  value: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
}

const studentTestimonials: StudentTestimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    examType: "CA Foundation",
    scoreImprovement: "+35%",
    previousScore: 45,
    finalScore: 80,
    text: "Examly's Learning Path helped me identify my weak areas and create a focused study plan. The AI-driven recommendations were spot-on, and I could see my progress improving week by week.",
    image: "/avatars/priya.jpg",
    studyDuration: "4 months"
  },
  {
    id: "2",
    name: "Rahul Patel",
    examType: "CPA",
    scoreImprovement: "+42%",
    previousScore: 58,
    finalScore: 100,
    text: "The structured approach and adaptive scheduling made all the difference. I went from struggling with mock tests to scoring 100% in my final exam. The Learning Path feature is a game-changer.",
    image: "/avatars/rahul.jpg",
    studyDuration: "6 months"
  },
  {
    id: "3",
    name: "Anita Kumar",
    examType: "ACCA",
    scoreImprovement: "+28%",
    previousScore: 62,
    finalScore: 90,
    text: "What impressed me most was how the platform adapted to my learning style. The weekly plans were realistic, and the progress tracking kept me motivated throughout my preparation journey.",
    image: "/avatars/anita.jpg",
    studyDuration: "5 months"
  },
  {
    id: "4",
    name: "Vikram Singh",
    examType: "FRM",
    scoreImprovement: "+38%",
    previousScore: 52,
    finalScore: 90,
    text: "The AI-powered difficulty analysis helped me focus on the right topics at the right time. I cleared my FRM exam on the first attempt with a score I never thought was possible.",
    image: "/avatars/vikram.jpg",
    studyDuration: "7 months"
  }
];

const dataProofMetrics: DataProof[] = [
  {
    metric: "30%",
    value: "More Syllabus",
    description: "Students complete 30% more syllabus using Learning Path",
    icon: Target
  },
  {
    metric: "20%",
    value: "Higher Scores",
    description: "Average score improvement in mock tests",
    icon: TrendingUp
  },
  {
    metric: "85%",
    value: "First Attempt",
    description: "Success rate for students using our platform",
    icon: Star
  },
  {
    metric: "10K+",
    value: "Success Stories",
    description: "Students who achieved their exam goals",
    icon: Users
  }
];

export default function SuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % studentTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + studentTestimonials.length) % studentTestimonials.length);
  };

  const currentTestimonial = studentTestimonials[currentIndex];

  return (
    <Section className="py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Success Stories & Proof
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real students, real results. See how our Learning Path feature has transformed exam preparation for thousands of students.
          </p>
        </div>

        {/* Data Proof Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {dataProofMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="p-6 text-center glass-2 border-0 hover:glass-3 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-brand/10">
                    <IconComponent className="h-6 w-6 text-brand" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-brand mb-2">{metric.metric}</div>
                <div className="font-semibold mb-2">{metric.value}</div>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Student Testimonial Carousel */}
        <Card className="p-8 glass-2 border-0">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Student Photo and Info */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <Avatar className="h-24 w-24 mx-auto lg:mx-0 mb-4">
                <AvatarImage src={currentTestimonial.image} />
                <AvatarFallback className="text-xl">
                  {currentTestimonial.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg mb-1">{currentTestimonial.name}</h3>
              <Badge variant="secondary" className="mb-2">
                {currentTestimonial.examType}
              </Badge>
              <div className="text-sm text-muted-foreground">
                Study Duration: {currentTestimonial.studyDuration}
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1">
              {/* Score Improvement */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Score Improvement:</span>
                  <span className="text-2xl font-bold text-brand-emerald">
                    {currentTestimonial.scoreImprovement}
                  </span>
                </div>
                {currentTestimonial.previousScore && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">From</span>
                    <span className="font-semibold">{currentTestimonial.previousScore}%</span>
                    <span className="text-muted-foreground">to</span>
                    <span className="font-semibold text-brand-emerald">{currentTestimonial.finalScore}%</span>
                  </div>
                )}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg leading-relaxed mb-6">
                &ldquo;{currentTestimonial.text}&rdquo;
              </blockquote>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {studentTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-brand' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {currentIndex + 1} of {studentTestimonials.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    className="rounded-full w-10 h-10 p-0"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={nextTestimonial}
                    className="rounded-full w-10 h-10 p-0"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Join thousands of successful students who transformed their exam preparation
          </p>
          <Button size="lg" className="bg-brand hover:bg-brand/90">
            Start Your Success Story
          </Button>
        </div>
      </div>
    </Section>
  );
}