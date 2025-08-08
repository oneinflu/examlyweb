"use client";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { 
  StarIcon,
  GraduationCapIcon,
  ClockIcon,
  ArrowRightIcon,
  AwardIcon,
  BookOpenIcon,
  UsersIcon,
  SparklesIcon
} from "lucide-react";

type Instructor = {
  id: string;
  name: string;
  title: string;
  qualifications: string[];
  yearsOfTeaching: number;
  teachingPhilosophy: string;
  rating: number;
  totalReviews: number;
  image: string;
  specialties: string[];
  achievements: string[];
  studentsCount: number;
};

const instructors: Instructor[] = [
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "CPA, MBA Finance",
    qualifications: ["CPA", "MBA Finance", "PhD Accounting"],
    yearsOfTeaching: 12,
    teachingPhilosophy: "Making complex accounting concepts simple through real-world examples and interactive learning.",
    rating: 4.9,
    totalReviews: 847,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    specialties: ["Financial Accounting", "Audit", "Tax Planning"],
    achievements: ["Top 1% Instructor", "Excellence in Teaching Award"],
    studentsCount: 3200
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    title: "CMA, Senior Finance Director",
    qualifications: ["CMA", "MBA", "15+ years industry experience"],
    yearsOfTeaching: 8,
    teachingPhilosophy: "Bridging the gap between academic theory and practical industry application for career success.",
    rating: 4.8,
    totalReviews: 623,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    specialties: ["Management Accounting", "Financial Analysis", "Strategic Planning"],
    achievements: ["Industry Expert", "Student Choice Award"],
    studentsCount: 2800
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    title: "EA, Tax Specialist",
    qualifications: ["Enrolled Agent", "MS Taxation", "IRS Experience"],
    yearsOfTeaching: 10,
    teachingPhilosophy: "Demystifying tax law through step-by-step guidance and practical case studies.",
    rating: 4.9,
    totalReviews: 756,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    specialties: ["Tax Preparation", "Tax Law", "IRS Procedures"],
    achievements: ["Tax Expert of the Year", "Perfect Score Rate"],
    studentsCount: 2400
  },
  {
    id: "david-thompson",
    name: "Prof. David Thompson",
    title: "CPA, Academic Director",
    qualifications: ["CPA", "PhD", "20+ years academia"],
    yearsOfTeaching: 15,
    teachingPhilosophy: "Fostering critical thinking and analytical skills for long-term professional success.",
    rating: 4.8,
    totalReviews: 934,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    specialties: ["Advanced Accounting", "Research Methods", "Ethics"],
    achievements: ["Distinguished Professor", "Research Excellence"],
    studentsCount: 4100
  }
];

function StarRating({ rating, totalReviews }: { rating: number; totalReviews: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : i < rating
                ? "fill-yellow-400/50 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-medium">{rating}</span>
      <span className="text-xs text-muted-foreground">({totalReviews} reviews)</span>
    </div>
  );
}

function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 group">
      {/* Header with Image and Basic Info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <Avatar className="h-16 w-16">
            <Image
              src={instructor.image}
              alt={instructor.name}
              width={64}
              height={64}
              className="object-cover"
            />
          </Avatar>
          <div className="absolute -bottom-1 -right-1 bg-brand text-white rounded-full p-1">
            <AwardIcon className="h-3 w-3" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{instructor.name}</h3>
          <p className="text-brand font-medium text-sm mb-2">{instructor.title}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <ClockIcon className="h-3 w-3" />
              {instructor.yearsOfTeaching} years
            </span>
            <span className="flex items-center gap-1">
              <UsersIcon className="h-3 w-3" />
              {instructor.studentsCount.toLocaleString()} students
            </span>
          </div>
        </div>
      </div>

      {/* Qualifications */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {instructor.qualifications.map((qual, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {qual}
            </Badge>
          ))}
        </div>
      </div>

      {/* Teaching Philosophy */}
      <div className="mb-4 flex-1">
        <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
          <BookOpenIcon className="h-4 w-4 text-brand" />
          Teaching Philosophy
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          &quot;{instructor.teachingPhilosophy}&quot;
        </p>
      </div>

      {/* Specialties */}
      <div className="mb-4">
        <h4 className="font-medium text-sm mb-2">Specialties</h4>
        <div className="flex flex-wrap gap-1">
          {instructor.specialties.map((specialty, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={instructor.rating} totalReviews={instructor.totalReviews} />
      </div>

      {/* Achievements */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {instructor.achievements.map((achievement, index) => (
            <Badge key={index} className="text-xs bg-brand/10 text-brand border-brand/20">
              <SparklesIcon className="h-3 w-3 mr-1" />
              {achievement}
            </Badge>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Button 
        variant="outline" 
        className="w-full group-hover:bg-brand group-hover:text-white transition-colors"
      >
        Meet Your Instructor
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </Card>
  );
}

export default function InstructorSpotlight() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col gap-8 sm:gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
          <Badge variant="outline" className="border-brand/20 bg-brand/10 text-brand">
            <GraduationCapIcon className="mr-2 h-3 w-3" />
            Instructor Spotlight
          </Badge>
          <h2 className="text-balance text-center text-3xl font-semibold sm:text-5xl">
            Learn from Industry-Leading Experts
          </h2>
          <p className="text-md max-w-[720px] text-balance text-center font-medium text-muted-foreground sm:text-xl">
            Our instructors combine deep academic knowledge with real-world experience to provide you with the highest quality education and practical insights.
          </p>
        </div>

        {/* Instructor Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-brand mb-2">45+</div>
            <div className="text-sm text-muted-foreground">Expert Instructors</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-brand mb-2">4.8</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-brand mb-2">12,500+</div>
            <div className="text-sm text-muted-foreground">Students Taught</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-brand mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Pass Rate</div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">Ready to Learn from the Best?</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of students who have achieved their certification goals with our expert instructors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Browse All Instructors
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Teaching Credentials
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}