"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronLeft, 
  Star, 
  TrendingUp, 
  // Remove ChevronRight import
  Award, 
  Users, 
  CheckCircle,
  Quote,
  ChevronRight
} from "lucide-react";

interface SuccessStoriesProps {
  className?: string;
  title?: string;
}

// Define testimonial data structure
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
  longQuote?: string;
  image: string;
  stats: {
    scoreImprovement: string;
    passRate: string;
    studyTime?: string;
  };
  featured?: boolean;
}

export default function SuccessStories({ 
  className = "", 
  title = "Success Stories" 
}: SuccessStoriesProps) {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState<{[key: number]: boolean}>({});
  
  // Mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [mounted]);

  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Navigate to next testimonial
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Handle image load success
  const handleImageLoaded = (index: number) => {
    setImageLoaded(prev => ({
      ...prev,
      [index]: true
    }));
  };

  // Testimonials data with American professionals
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CPA Candidate",
      company: "Big Four Accounting",
      quote: "Examly's personalized learning paths and real-time analytics transformed my CPA exam preparation.",
      longQuote: "Examly's personalized learning paths and real-time analytics transformed my CPA exam preparation. The AI-driven study plans identified my weak areas and helped me focus my efforts where they mattered most. The exam simulations perfectly replicated the real testing environment, which made the actual exam day feel familiar and less stressful.",
      image: "/images/testimonials/sarah-johnson.jpg", // Changed to local path
      stats: {
        scoreImprovement: "24%",
        passRate: "First Attempt",
        studyTime: "30% Less"
      },
      featured: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "MCAT Student",
      company: "Medical School Applicant",
      quote: "The adaptive learning system was a game-changer for my MCAT preparation during my hospital rotations.",
      longQuote: "The adaptive learning system was a game-changer for my MCAT preparation during my hospital rotations. Examly's algorithm adjusted to my learning pace and style, making every study session productive. I was able to improve my practice test scores consistently over just three months of focused study.",
      image: "/images/testimonials/michael-chen.jpg", // Changed to local path
      stats: {
        scoreImprovement: "18%",
        passRate: "95th Percentile",
        studyTime: "25% Less"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Bar Exam Candidate",
      company: "Legal Associates",
      quote: "The practice questions and detailed explanations provided insights that weren't available in standard study materials.",
      longQuote: "The practice questions and detailed explanations provided insights that weren't available in standard study materials. Examly's approach to teaching complex legal concepts made them stick in my memory. The performance analytics helped me track my progress and gave me confidence going into the exam.",
      image: "/images/testimonials/emily-rodriguez.jpg", // Changed to local path
      stats: {
        scoreImprovement: "21%",
        passRate: "First Attempt",
        studyTime: "20% Less"
      },
      featured: true
    },
    {
      id: 4,
      name: "James Wilson",
      role: "GMAT Test-Taker",
      company: "MBA Candidate",
      quote: "The exam simulations were so accurate that the actual GMAT felt like just another practice session.",
      longQuote: "The exam simulations were so accurate that the actual GMAT felt like just another practice session. The time management tools and strategies Examly taught me were invaluable during the actual test. I was able to pace myself perfectly and finish each section with confidence.",
      image: "/images/testimonials/james-wilson.jpg", // Changed to local path
      stats: {
        scoreImprovement: "70 Points",
        passRate: "720 Score",
        studyTime: "15% Less"
      }
    },
    {
      id: 5,
      name: "David Thompson",
      role: "CFA Candidate",
      company: "Investment Firm",
      quote: "The self-assessment tools accurately identified my knowledge gaps and created a study plan that worked.",
      longQuote: "The self-assessment tools accurately identified my knowledge gaps and created a study plan that worked perfectly for my schedule. As a working professional, I needed efficiency in my study approach, and Examly delivered exactly that. The mobile app allowed me to study during my commute and lunch breaks.",
      image: "/images/testimonials/david-thompson.jpg", // Changed to local path
      stats: {
        scoreImprovement: "22%",
        passRate: "Top 10%",
        studyTime: "20% Less"
      }
    }
  ];

  const currentTestimonial = testimonials[activeIndex];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section className={`py-16 overflow-hidden bg-gradient-to-b from-brand-emerald/5 to-brand-ultraviolet/5 ${className}`}>
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        {title && (
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from students who transformed their exam preparation and achieved outstanding results with our platform.
            </p>
          </motion.div>
        )}
        
        {/* Testimonial Slider */}
        <div className="relative min-h-[600px] mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`testimonial-${activeIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Card className="overflow-hidden border border-brand-emerald/20 bg-card/50 backdrop-blur-sm h-full shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Media Section - Left side on desktop, top on mobile */}
                  <div className="relative h-80 lg:h-auto overflow-hidden bg-muted rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/20 to-brand-ultraviolet/20 opacity-60 z-10"></div>
                    
                    {/* Professional Image with loading state */}
                    <div className="relative h-full w-full">
                      {/* Loading skeleton */}
                      {!imageLoaded[activeIndex] && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                      )}
                      
                      {/* Image with onLoad handler */}
                      <img 
                        src={currentTestimonial.image} 
                        alt={currentTestimonial.name} 
                        className={`object-cover h-full w-full transition-opacity duration-300 ${imageLoaded[activeIndex] ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => handleImageLoaded(activeIndex)}
                        onError={(e) => {
                          // Fallback to a default image if the primary image fails to load
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face';
                          handleImageLoaded(activeIndex);
                        }}
                      />
                      
                      {/* Featured Badge */}
                      {currentTestimonial.featured && (
                        <Badge 
                          className="absolute top-4 left-4 bg-brand-emerald text-white border-none z-20"
                          variant="outline"
                        >
                          <Star className="w-3 h-3 mr-1" />
                          Featured Success Story
                        </Badge>
                      )}
                    </div>
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4 flex justify-between z-20">
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-xs text-white/70 mb-1">Score Improvement</div>
                          <div className="flex items-center text-white font-bold">
                            <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
                            {currentTestimonial.stats.scoreImprovement}
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-xs text-white/70 mb-1">Pass Rate</div>
                          <div className="flex items-center text-white font-bold">
                            <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                            {currentTestimonial.stats.passRate}
                          </div>
                        </div>
                        
                        {currentTestimonial.stats.studyTime && (
                          <div className="text-center hidden sm:block">
                            <div className="text-xs text-white/70 mb-1">Study Time</div>
                            <div className="flex items-center text-white font-bold">
                              <Award className="w-3 h-3 mr-1 text-amber-400" />
                              {currentTestimonial.stats.studyTime}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial Content - Right side on desktop, bottom on mobile */}
                  <div className="p-8 flex flex-col justify-between relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-brand-emerald/10">
                      <Quote className="w-24 h-24" />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Testimonial Quote */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <p className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed italic">
                          &quot;{currentTestimonial.longQuote || currentTestimonial.quote}&quot;
                        </p>
                        {/* Author Info */}
                        <div className="flex items-center gap-4 mb-8">
                          <Avatar className="h-12 w-12 border-2 border-brand-emerald/20">
                            <AvatarImage 
                              src={currentTestimonial.image} 
                              alt={currentTestimonial.name} 
                              onError={(e) => {
                                // Fallback for avatar image
                                (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 24 24%22%3E%3Cpath fill%3D%22%23ccc%22 d%3D%22M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z%22%2F%3E%3C%2Fsvg%3E';
                              }}
                            />
                            <AvatarFallback>{currentTestimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold text-foreground">{currentTestimonial.name}</div>
                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                              {currentTestimonial.role}
                              {currentTestimonial.company && (
                                <>
                                  <span className="mx-1">•</span>
                                  <span>{currentTestimonial.company}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mt-auto">
                      {/* Pagination Dots */}
                      <div className="flex items-center gap-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={`dot-${index}`}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex 
                              ? 'bg-brand-emerald w-6' 
                              : 'bg-muted hover:bg-muted-foreground/50'}`}
                            aria-label={`View testimonial ${index + 1}`}
                          />
                        ))}
                        <span className="ml-2 text-xs text-muted-foreground">
                          {String(activeIndex + 1).padStart(2, '0')}/{String(testimonials.length).padStart(2, '0')}
                        </span>
                      </div>
                      
                      {/* Navigation Arrows */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={prevTestimonial}
                          className="rounded-full w-10 h-10 p-0 border-muted-foreground/20"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="default"
                          size="icon"
                          onClick={nextTestimonial}
                          className="rounded-full w-10 h-10 p-0 bg-brand-emerald hover:bg-brand-emerald/90"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* View All Link */}
        <div className="text-center">
        
          <Button 
            variant="outline" 
            className="border-brand-emerald/20 text-brand-emerald hover:bg-brand-emerald/5"
            asChild
          >
            <Link href="/success-stories">
              <span>View All Success Stories</span>
              <Image 
                src="/arrow.svg" 
                alt="Arrow right" 
                width={16} 
                height={16} 
                className="ml-2 h-4 w-4" 
              />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}