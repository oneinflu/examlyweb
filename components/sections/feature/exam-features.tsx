"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, 
  ChevronLeft,
  ArrowRight, 
  BookOpen, 
  FileText, 
  PenTool,
  BarChart3, 
  Sparkles, 
  Smartphone, 
  Users, 
  CheckCircle, 
  Target,
  TrendingUp,
  Clock,
  Play,
  Download,
  Video
} from "lucide-react";

type ExamType = "CMA" | "CPA" | "EA";

interface ExamFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  preview: React.ReactNode;
  color: string;
  hoverColor: string;
  borderColor: string;
  textColor: string;
  gradientFrom: string;
  gradientTo: string;
}

interface ExamFeaturesProps {
  examType: ExamType;
  className?: string;
  title?: string;
}

export default function ExamFeatures({ 
  examType, 
  className = "", 
  title = "Key Exam Features" 
}: ExamFeaturesProps) {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  
  // Mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Define exam-specific feature content
  const examFeatures: Record<ExamType, ExamFeature[]> = {
    CMA: [
      {
        title: "Learning Paths",
        description: "Specialized paths for Financial Management and Strategic Planning with expert-guided content progression.",
        icon: <BookOpen className="w-6 h-6" />,
        preview: <LearningPathPreview examType="CMA" />,
        color: "bg-brand/5",
        hoverColor: "bg-brand/10",
        borderColor: "border-brand/20",
        textColor: "text-brand",
        gradientFrom: "from-brand/10",
        gradientTo: "to-brand/0"
      },
      {
        title: "Exam Simulations",
        description: "Practice with MCQs and essay questions in a format that mirrors the actual CMA exam, including task-based simulations.",
        icon: <PenTool className="w-6 h-6" />,
        preview: <ExamSimulationPreview examType="CMA" />,
        color: "bg-brand-fire/5",
        hoverColor: "bg-brand-fire/10",
        borderColor: "border-brand-fire/20",
        textColor: "text-brand-fire",
        gradientFrom: "from-brand-fire/10",
        gradientTo: "to-brand-fire/0"
      },
      {
        title: "Analytics & Self-Assessment",
        description: "Track topic mastery and readiness scores with detailed performance analytics for each CMA exam section.",
        icon: <BarChart3 className="w-6 h-6" />,
        preview: <AnalyticsPreview examType="CMA" />,
        color: "bg-brand-emerald/5",
        hoverColor: "bg-brand-emerald/10",
        borderColor: "border-brand-emerald/20",
        textColor: "text-brand-emerald",
        gradientFrom: "from-brand-emerald/10",
        gradientTo: "to-brand-emerald/0"
      },
      {
        title: "Offline Access",
        description: "Download video lectures and practice tests for studying without internet connection, perfect for on-the-go preparation.",
        icon: <Download className="w-6 h-6" />,
        preview: <OfflineAccessPreview examType="CMA" />,
        color: "bg-brand-amber/5",
        hoverColor: "bg-brand-amber/10",
        borderColor: "border-brand-amber/20",
        textColor: "text-brand-amber",
        gradientFrom: "from-brand-amber/10",
        gradientTo: "to-brand-amber/0"
      }
    ],
    CPA: [
      {
        title: "Learning Paths",
        description: "Specialized paths for Audit & Assurance and Business Environment with structured progression through all CPA exam sections.",
        icon: <BookOpen className="w-6 h-6" />,
        preview: <LearningPathPreview examType="CPA" />,
        color: "bg-brand/5",
        hoverColor: "bg-brand/10",
        borderColor: "border-brand/20",
        textColor: "text-brand",
        gradientFrom: "from-brand/10",
        gradientTo: "to-brand/0"
      },
      {
        title: "Exam Simulations",
        description: "Practice with MCQs and task-based simulations that mirror the actual CPA exam format and difficulty level.",
        icon: <PenTool className="w-6 h-6" />,
        preview: <ExamSimulationPreview examType="CPA" />,
        color: "bg-brand-fire/5",
        hoverColor: "bg-brand-fire/10",
        borderColor: "border-brand-fire/20",
        textColor: "text-brand-fire",
        gradientFrom: "from-brand-fire/10",
        gradientTo: "to-brand-fire/0"
      },
      {
        title: "Analytics & Self-Assessment",
        description: "Real-time performance dashboards tracking your progress across all four CPA exam sections with detailed analytics.",
        icon: <BarChart3 className="w-6 h-6" />,
        preview: <AnalyticsPreview examType="CPA" />,
        color: "bg-brand-emerald/5",
        hoverColor: "bg-brand-emerald/10",
        borderColor: "border-brand-emerald/20",
        textColor: "text-brand-emerald",
        gradientFrom: "from-brand-emerald/10",
        gradientTo: "to-brand-emerald/0"
      },
      {
        title: "Offline Access",
        description: "Full content available offline including video lectures, practice questions, and simulations for all CPA exam sections.",
        icon: <Download className="w-6 h-6" />,
        preview: <OfflineAccessPreview examType="CPA" />,
        color: "bg-brand-amber/5",
        hoverColor: "bg-brand-amber/10",
        borderColor: "border-brand-amber/20",
        textColor: "text-brand-amber",
        gradientFrom: "from-brand-amber/10",
        gradientTo: "to-brand-amber/0"
      }
    ],
    EA: [
      {
        title: "Learning Paths",
        description: "Specialized paths for Tax Law and Representation with comprehensive coverage of all EA exam requirements.",
        icon: <BookOpen className="w-6 h-6" />,
        preview: <LearningPathPreview examType="EA" />,
        color: "bg-brand/5",
        hoverColor: "bg-brand/10",
        borderColor: "border-brand/20",
        textColor: "text-brand",
        gradientFrom: "from-brand/10",
        gradientTo: "to-brand/0"
      },
      {
        title: "Exam Simulations",
        description: "Practice with multiple-choice tax-focused questions that mirror the actual EA exam format and difficulty level.",
        icon: <PenTool className="w-6 h-6" />,
        preview: <ExamSimulationPreview examType="EA" />,
        color: "bg-brand-fire/5",
        hoverColor: "bg-brand-fire/10",
        borderColor: "border-brand-fire/20",
        textColor: "text-brand-fire",
        gradientFrom: "from-brand-fire/10",
        gradientTo: "to-brand-fire/0"
      },
      {
        title: "Analytics & Self-Assessment",
        description: "Tax topic proficiency tracking and score insights with detailed performance analytics for each EA exam section.",
        icon: <BarChart3 className="w-6 h-6" />,
        preview: <AnalyticsPreview examType="EA" />,
        color: "bg-brand-emerald/5",
        hoverColor: "bg-brand-emerald/10",
        borderColor: "border-brand-emerald/20",
        textColor: "text-brand-emerald",
        gradientFrom: "from-brand-emerald/10",
        gradientTo: "to-brand-emerald/0"
      },
      {
        title: "Offline Access",
        description: "Offline access to tax prep materials including video lectures, practice questions, and tax reference guides.",
        icon: <Download className="w-6 h-6" />,
        preview: <OfflineAccessPreview examType="EA" />,
        color: "bg-brand-amber/5",
        hoverColor: "bg-brand-amber/10",
        borderColor: "border-brand-amber/20",
        textColor: "text-brand-amber",
        gradientFrom: "from-brand-amber/10",
        gradientTo: "to-brand-amber/0"
      }
    ]
  };

  const features = examFeatures[examType];

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

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  return (
    <Section className={`py-16 overflow-hidden ${className}`}>
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the specialized features designed to help you master the {examType} exam and achieve certification success.
          </p>
        </motion.div>
        
        {/* Desktop: Grid Layout - Changed to 4 columns */}
        <motion.div 
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={`feature-${index}`}
              variants={itemVariants}
              className="h-full"
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <Card 
                className={`overflow-hidden border h-full ${feature.borderColor} ${feature.color} transition-all duration-300 ${isHovering === index ? 'shadow-lg transform -translate-y-1' : ''}`}
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Feature Icon */}
                  <div className={`mb-4 p-3 rounded-full w-12 h-12 flex items-center justify-center ${feature.color} ${feature.textColor}`}>
                    {feature.icon}
                  </div>
                  
                  {/* Feature Title */}
                  <h3 className={`text-xl font-bold mb-2 ${feature.textColor}`}>
                    {feature.title}
                  </h3>
                  
                  {/* Feature Description */}
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {feature.description}
                  </p>
                  
                  {/* Preview Area */}
                  <div className="mt-auto mb-4 bg-muted/30 rounded-lg p-3 h-32 overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} opacity-30`}></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      {feature.preview}
                    </div>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="mt-auto">
                    <Button 
                      variant="ghost" 
                      className={`group ${feature.textColor} hover:${feature.hoverColor} hover:bg-transparent p-0 w-full justify-between`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile: Carousel Layout */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-feature-${activeIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card 
                  className={`overflow-hidden border ${features[activeIndex].borderColor} ${features[activeIndex].color}`}
                >
                  <div className="p-6 flex flex-col">
                    {/* Feature Icon */}
                    <div className={`mb-4 p-3 rounded-full w-12 h-12 flex items-center justify-center ${features[activeIndex].color} ${features[activeIndex].textColor}`}>
                      {features[activeIndex].icon}
                    </div>
                    
                    {/* Feature Title */}
                    <h3 className={`text-xl font-bold mb-2 ${features[activeIndex].textColor}`}>
                      {features[activeIndex].title}
                    </h3>
                    
                    {/* Feature Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {features[activeIndex].description}
                    </p>
                    
                    {/* Preview Area */}
                    <div className="mt-2 mb-4 bg-muted/30 rounded-lg p-3 h-32 overflow-hidden relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${features[activeIndex].gradientFrom} ${features[activeIndex].gradientTo} opacity-30`}></div>
                      <div className="relative z-10 h-full flex items-center justify-center">
                        {features[activeIndex].preview}
                      </div>
                    </div>
                    
                    {/* Learn More Link */}
                    <div className="mt-auto">
                      <Button 
                        variant="ghost" 
                        className={`group ${features[activeIndex].textColor} hover:${features[activeIndex].hoverColor} hover:bg-transparent p-0 w-full justify-between`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-between mt-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-1 items-center">
              {features.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? features[index].textColor : 'bg-muted'}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View feature ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Preview Components for each feature type
function LearningPathPreview({ examType }: { examType: ExamType }) {
  const pathContent: Record<ExamType, { topics: string[] }> = {
    CMA: {
      topics: ['Financial Management', 'Strategic Planning', 'Cost Analysis']
    },
    CPA: {
      topics: ['Audit & Assurance', 'Business Environment', 'Financial Accounting']
    },
    EA: {
      topics: ['Tax Law', 'Representation', 'Tax Preparation']
    }
  };
  
  const content = pathContent[examType];
  
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="space-y-2 w-full">
        {content.topics.map((topic, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center text-brand text-xs">
              {index + 1}
            </div>
            <div className="h-1 flex-grow bg-brand/20 rounded-full overflow-hidden">
              <div className="h-full bg-brand rounded-full" style={{ width: `${100 - index * 20}%` }} />
            </div>
            <span className="text-xs font-medium truncate">{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExamSimulationPreview({ examType }: { examType: ExamType }) {
  const simulationContent: Record<ExamType, { type: string, progress: number }> = {
    CMA: {
      type: 'MCQs + Essay',
      progress: 65
    },
    CPA: {
      type: 'MCQs + Task-based',
      progress: 72
    },
    EA: {
      type: 'Tax-focused MCQs',
      progress: 58
    }
  };
  
  const content = simulationContent[examType];
  
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="space-y-3 w-full">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium">{content.type}</span>
          <span className="text-brand-fire font-bold">{content.progress}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-fire rounded-full transition-all duration-1000" 
            style={{ width: `${content.progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Question 15/25</span>
          <span>Time: 12:45</span>
        </div>
      </div>
    </div>
  );
}

function LiveClassPreview({ examType }: { examType: ExamType }) {
  const classContent: Record<ExamType, { topic: string, instructor: string }> = {
    CMA: {
      topic: 'Cost Management',
      instructor: 'Dr. Sarah Chen'
    },
    CPA: {
      topic: 'Audit Procedures',
      instructor: 'Prof. Michael Davis'
    },
    EA: {
      topic: 'Tax Representation',
      instructor: 'James Wilson, EA'
    }
  };
  
  const content = classContent[examType];
  
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="relative w-full rounded-md overflow-hidden bg-black/80 p-3 text-white">
        <div className="absolute top-2 right-2 bg-red-500 rounded-full w-2 h-2 animate-pulse"></div>
        <div className="flex items-center gap-2 mb-2">
          <Play className="w-4 h-4" />
          <span className="text-xs font-medium truncate">{content.topic}</span>
        </div>
        <div className="text-xs opacity-80 flex items-center gap-1">
          <Users className="w-3 h-3" />
          <span>{content.instructor}</span>
        </div>
        <div className="absolute bottom-2 right-2">
          <div className="bg-brand-ultraviolet/80 rounded-full w-6 h-6 flex items-center justify-center">
            <Video className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsPreview({ examType }: { examType: ExamType }) {
  const analyticsContent: Record<ExamType, { score: number, areas: { name: string, score: number, trend: 'up' | 'down' }[] }> = {
    CMA: {
      score: 78,
      areas: [
        { name: 'Financial Planning', score: 85, trend: 'up' },
        { name: 'Cost Management', score: 72, trend: 'down' }
      ]
    },
    CPA: {
      score: 82,
      areas: [
        { name: 'Auditing', score: 88, trend: 'up' },
        { name: 'Regulation', score: 76, trend: 'down' }
      ]
    },
    EA: {
      score: 75,
      areas: [
        { name: 'Individual Tax', score: 82, trend: 'up' },
        { name: 'Business Tax', score: 68, trend: 'down' }
      ]
    }
  };
  
  const content = analyticsContent[examType];
  
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="space-y-2 w-full">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium">Overall Readiness</span>
          <span className="text-xs font-bold text-brand-emerald">{content.score}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-brand-emerald rounded-full" 
            style={{ width: `${content.score}%` }}
          />
        </div>
        {content.areas.map((area, index) => (
          <div key={index} className="flex items-center justify-between text-xs">
            <span className="truncate">{area.name}</span>
            <div className="flex items-center gap-1">
              <span>{area.score}%</span>
              <TrendingUp 
                className={`w-3 h-3 ${area.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OfflineAccessPreview({ examType }: { examType: ExamType }) {
  const offlineContent: Record<ExamType, { items: { name: string, size: string, downloaded: boolean }[] }> = {
    CMA: {
      items: [
        { name: 'Video Lectures', size: '1.2 GB', downloaded: true },
        { name: 'Practice Tests', size: '450 MB', downloaded: false }
      ]
    },
    CPA: {
      items: [
        { name: 'Study Materials', size: '2.1 GB', downloaded: true },
        { name: 'Simulations', size: '850 MB', downloaded: true }
      ]
    },
    EA: {
      items: [
        { name: 'Tax References', size: '1.5 GB', downloaded: true },
        { name: 'Practice Exams', size: '620 MB', downloaded: false }
      ]
    }
  };
  
  const content = offlineContent[examType];
  
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="space-y-2 w-full">
        {content.items.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-xs p-1 rounded bg-muted/50">
            <div className="flex items-center gap-1">
              <Download className="w-3 h-3 text-brand-amber" />
              <span className="font-medium truncate">{item.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>{item.size}</span>
              {item.downloaded && <CheckCircle className="w-3 h-3 text-green-500" />}
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between text-xs mt-1">
          <span>Offline Mode</span>
          <div className="w-8 h-4 bg-brand-amber/20 rounded-full relative">
            <div className="absolute inset-y-0 left-0 w-4 h-4 bg-brand-amber rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}