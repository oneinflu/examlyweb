"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence, easeOut, easeIn } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight, 
  ArrowRight, 
  BarChart3, 
  Sparkles, 
  Smartphone, 
  Users, 
  BookOpen, 
  CheckCircle, 
  Download, 
  WifiOff, 
  Wifi, 
  Target, 
  TrendingUp, 
  Clock, 
  Play, 
  MessageCircle, 
  Video, 
  Star, 
  User, 
  Timer, 
  FileText, 
  PenTool
} from "lucide-react";

interface CoreFeaturesProps {
  className?: string;
  title?: string;
}

export default function CoreFeatures({ 
  className = "", 
  title = "Core Features" 
}: CoreFeaturesProps) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  
  // Interactive element states
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isOffline, setIsOffline] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [examProgress, setExamProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [animatedValues, setAnimatedValues] = useState({
    overallScore: 0,
    weakAreas: 0,
    studyTime: 0,
    improvement: 0
  });
  
  // Mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-rotate tabs every 5 seconds
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [mounted]);
  
  // Exam progress animation
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setExamProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 5;
      });
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, [mounted]);
  
  // Download progress animation
  useEffect(() => {
    if (!mounted) return;
    
    const downloadCycle = () => {
      // Reset states
      setDownloadProgress(0);
      setIsOffline(false);
      setIsSyncing(false);
      
      // Start download
      const downloadInterval = setInterval(() => {
        setDownloadProgress(prev => {
          if (prev >= 100) {
            clearInterval(downloadInterval);
            // Go offline after download completes
            setTimeout(() => {
              setIsOffline(true);
              // Start syncing after being offline
              setTimeout(() => {
                setIsOffline(false);
                setIsSyncing(true);
                // Reset cycle
                setTimeout(() => {
                  setIsSyncing(false);
                  downloadCycle();
                }, 3000);
              }, 3000);
            }, 2000);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    };
    
    // Start the cycle
    downloadCycle();
  }, [mounted]);
  
  // Analytics animation
  useEffect(() => {
    if (!mounted) return;
    
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedValues({
          overallScore: Math.floor(progress * 87),
          weakAreas: Math.floor(progress * 3),
          studyTime: Math.floor(progress * 24),
          improvement: Math.floor(progress * 15)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [mounted, activeTab]);

  // Features data
  const features = [
    {
      title: "Personalized Learning Paths",
      description: "Our adaptive AI analyzes your strengths and weaknesses to create tailored study schedules that evolve as you progress. Focus your efforts where they matter most with personalized recommendations that adapt to your learning style and pace.",
      color: "bg-brand/5",
      hoverColor: "bg-brand/10",
      borderColor: "border-brand/20",
      textColor: "text-brand",
      gradientFrom: "from-brand/10",
      gradientTo: "to-brand/0",
      icon: <Sparkles className="w-6 h-6" />,
      link: "/feature/personalized-learning"
    },
    {
      title: "Exam Simulations",
      description: "Experience authentic, timed tests that replicate the real exam environment with our comprehensive simulation platform. Practice with MCQs, essays, and task-based questions designed to match the format and difficulty of your certification exam, with instant feedback to accelerate your learning.",
      color: "bg-brand-fire/5",
      hoverColor: "bg-brand-fire/10",
      borderColor: "border-brand-fire/20",
      textColor: "text-brand-fire",
      gradientFrom: "from-brand-fire/10",
      gradientTo: "to-brand-fire/0",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/feature/exam-simulation"
    },
    {
      title: "Offline Access Anywhere",
      description: "Study on your terms, no internet required. Download materials, practice questions, and even full simulated exams for offline use on any device. Keep your study schedule consistent whether you're commuting, traveling, or in areas with limited connectivity.",
      color: "bg-brand-ultraviolet/5",
      hoverColor: "bg-brand-ultraviolet/10",
      borderColor: "border-brand-ultraviolet/20",
      textColor: "text-brand-ultraviolet",
      gradientFrom: "from-brand-ultraviolet/10",
      gradientTo: "to-brand-ultraviolet/0",
      icon: <Smartphone className="w-6 h-6" />,
      link: "/feature/offline-access"
    },
    {
      title: "Self-Assessment & Analytics",
      description: "Gain deep insights that drive smarter study decisions with our comprehensive analytics dashboard. Track your progress, identify knowledge gaps, and receive AI-powered recommendations to optimize your study strategy and maximize your exam readiness.",
      color: "bg-brand-emerald/5",
      hoverColor: "bg-brand-emerald/10",
      borderColor: "border-brand-emerald/20",
      textColor: "text-brand-emerald",
      gradientFrom: "from-brand-emerald/10",
      gradientTo: "to-brand-emerald/0",
      icon: <Users className="w-6 h-6" />,
      link: "/feature/self-assessment"
    }
  ];

  // Downloadable items for offline access
  const downloadableItems = [
    { icon: BookOpen, label: "Course Materials", size: "2.4 GB" },
    { icon: PenTool, label: "Mock Tests", size: "850 MB" },
    { icon: FileText, label: "Study Notes", size: "1.2 GB" }
  ];

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

  const tabVariants = {
    inactive: { scale: 0.95, opacity: 0.7 },
    active: { scale: 1, opacity: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: easeOut }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: { duration: 0.3, ease: easeIn }
    }
  };

  // Render interactive elements based on active tab
  const renderInteractiveElement = () => {
    switch (activeTab) {
      case 0: // Personalized Learning
        return (
          <div className="h-full flex items-center justify-center p-6">
            <div className="space-y-6 w-full max-w-md">
              {/* Progress Dashboard */}
              <div className="p-6 rounded-xl bg-muted/30 border border-border/30 relative overflow-hidden">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand-emerald/5 animate-pulse" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-brand" />
                      <h3 className="text-lg font-semibold">Your Learning Path</h3>
                    </div>
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Personalized
                    </Badge>
                  </div>

                  {/* Animated Score Meters */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-brand mb-1">
                        {animatedValues.overallScore}%
                      </div>
                      <div className="text-sm text-muted-foreground">Overall Progress</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-orange-500 mb-1">
                        {animatedValues.weakAreas}
                      </div>
                      <div className="text-sm text-muted-foreground">Focus Areas</div>
                    </div>
                  </div>

                  {/* Subject Progress */}
                  <div className="space-y-3">
                    {[
                      { name: "Financial Accounting", score: 92, trend: "up" },
                      { name: "Regulation", score: 78, trend: "up" },
                      { name: "Business Environment", score: 65, trend: "down" }
                    ].map((subject, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          {subject.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold">{subject.score}%</span>
                          <TrendingUp 
                            className={`w-4 h-4 ${
                              subject.trend === 'up' ? 'text-green-500' : 'text-red-500'
                            }`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Recommended Next Steps */}
              <div className="p-4 rounded-xl bg-brand/5 border border-brand/20">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-brand" />
                  <span className="text-brand">Recommended Next Steps</span>
                </h4>
                <div className="space-y-2">
                  {[
                    "Complete Business Environment Module 3",
                    "Review Regulation Practice Test",
                    "Schedule Live Class on Tax Calculations"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                        {i + 1}
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 1: // Exam Simulations
        return (
          <div className="h-full flex items-center justify-center p-6">
            <div className="w-full max-w-md">
              <div className="bg-muted/30 rounded-xl p-4 border">
                <div className="space-y-4">
                  {/* Exam Header with Timer */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">CPA Simulation</div>
                    <div className="flex items-center gap-2 bg-red-50 dark:bg-red-950/20 px-2 py-1 rounded border border-red-200 dark:border-red-800">
                      <Timer className="w-3 h-3 text-red-600" />
                      <span className="text-xs font-mono text-red-600 font-bold">
                        {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </span>
                    </div>
                  </div>
                  
                  {/* Question Progress */}
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">Question 15 of 25</div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-fire rounded-full transition-all duration-1000" 
                        style={{ width: `${examProgress}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Mock Question */}
                  <div className="space-y-3">
                    <div className="text-sm leading-relaxed">
                      Calculate the depreciation expense using the double-declining balance method...
                    </div>
                    
                    {/* Answer Options */}
                    <div className="space-y-2">
                      {['A', 'B', 'C', 'D'].map((option, i) => (
                        <div 
                          key={option} 
                          className={`p-2 rounded border text-xs cursor-pointer transition-colors ${
                            i === 1 
                              ? 'bg-brand-fire/10 border-brand-fire/30' 
                              : 'border-border hover:bg-accent'
                          }`}
                        >
                          <span className="font-semibold">{option}.</span> Option {option}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Exam Stats */}
                  <div className="mt-4 p-2 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2">
                      <Target className="w-3 h-3 text-blue-600" />
                      <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
                        92% Accuracy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 2: // Offline Access
        return (
          <div className="h-full flex items-center justify-center p-6">
            <div className="w-full max-w-md">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Offline Learning Demo</h3>
                <div className="flex items-center gap-2">
                  {isOffline ? (
                    <>
                      <WifiOff className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-600 font-medium">Offline</span>
                    </>
                  ) : (
                    <>
                      <Wifi className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">Online</span>
                    </>
                  )}
                </div>
              </div>

              {/* Download Progress */}
              {downloadProgress < 100 && !isOffline && !isSyncing && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Downloading content...</span>
                    <span className="text-sm text-gray-600">{downloadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-brand-ultraviolet h-2 rounded-full transition-all duration-200"
                      style={{ width: `${downloadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Downloadable Content */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-medium text-gray-900">Available for Download:</h4>
                {downloadableItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                        downloadProgress === 100 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-4 h-4 text-brand-ultraviolet" />
                        <span className="text-sm font-medium text-gray-900">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600">{item.size}</span>
                        {downloadProgress === 100 && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sync Status */}
              {isSyncing && (
                <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                  </motion.div>
                  <span className="text-sm font-medium text-blue-700">Syncing progress when back online...</span>
                </div>
              )}

              {/* Study Status */}
              {isOffline && !isSyncing && (
                <div className="flex items-center justify-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <BookOpen className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-green-700">Studying offline - progress saved locally</span>
                </div>
              )}
            </div>
          </div>
        );
        
      case 3: // Self-Assessment & Analytics
        return (
          <div className="h-full flex items-center justify-center p-6">
            <div className="space-y-6 w-full max-w-md">
              {/* Progress Dashboard Card */}
              <div className="p-6 glass-2 border border-brand-emerald/20 relative overflow-hidden rounded-xl bg-brand-emerald/5">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/5 via-transparent to-brand-emerald/5 animate-pulse" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-brand-emerald" />
                      <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
                    </div>
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Updated
                    </Badge>
                  </div>

                  {/* Animated Score Meters */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-brand-emerald mb-1">
                        {animatedValues.overallScore}%
                      </div>
                      <div className="text-sm text-muted-foreground">Overall Score</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-orange-500 mb-1">
                        {animatedValues.improvement}%
                      </div>
                      <div className="text-sm text-muted-foreground">Improvement</div>
                    </div>
                  </div>

                  {/* Subject Progress */}
                  <div className="space-y-3">
                    {[
                      { name: "Financial Accounting", score: 92, trend: "up" },
                      { name: "Regulation", score: 78, trend: "up" },
                      { name: "Business Environment", score: 65, trend: "down" },
                      { name: "Auditing", score: 88, trend: "up" }
                    ].map((subject, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          {subject.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold">{subject.score}%</span>
                          <TrendingUp 
                            className={`w-4 h-4 ${
                              subject.trend === 'up' ? 'text-green-500' : 'text-red-500'
                            }`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Real-time Analytics Card */}
              <div className="p-4 rounded-xl bg-muted/30 border border-muted/50">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-brand-emerald" />
                  <h4 className="font-semibold">Real-time Analytics</h4>
                  <Badge variant="outline" className="text-xs bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald">
                    Live
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-lg font-bold text-brand-emerald">
                      {animatedValues.studyTime}h
                    </div>
                    <div className="text-xs text-muted-foreground">Study Time This Week</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-500">
                      +{animatedValues.improvement}%
                    </div>
                    <div className="text-xs text-muted-foreground">Score Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Section className={`py-16 overflow-hidden ${className}`}>
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
              Discover how our platform transforms your exam preparation experience with these powerful features.
            </p>
          </motion.div>
        )}
        
        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-8 space-x-2 sm:space-x-4"
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.button
              key={`tab-${index}`}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${feature.textColor} ${activeTab === index ? feature.hoverColor : 'bg-transparent'}`}
              variants={itemVariants}
              animate={activeTab === index ? "active" : "inactive"}
              onClick={() => setActiveTab(index)}
            >
              <motion.div 
                className="flex items-center space-x-2"
                variants={tabVariants}
              >
                <span className={`${activeTab === index ? 'opacity-100' : 'opacity-70'}`}>
                  {feature.icon}
                </span>
                <span className={`font-medium ${activeTab === index ? 'opacity-100' : 'opacity-70'} hidden sm:inline`}>
                  {feature.title.split(' ')[0]}
                </span>
              </motion.div>
              {activeTab === index && (
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-current"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Feature Content */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeTab}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0"
            >
              <Card 
                className={`overflow-hidden border h-full ${features[activeTab].borderColor} ${features[activeTab].color} transition-all duration-500 hover:shadow-lg`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Interactive Elements - Left side on desktop, top on mobile */}
                  <div className="relative h-64 lg:h-auto overflow-hidden bg-muted rounded-l-xl">
                    {/* Animated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${features[activeTab].gradientFrom} ${features[activeTab].gradientTo} opacity-30`}></div>
                    
                    {/* Interactive elements based on feature type */}
                    {renderInteractiveElement()}
                    
                    {/* Animated decorative elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <motion.div 
                        className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-foreground/5"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          repeatType: "reverse" 
                        }}
                      />
                      <motion.div 
                        className="absolute left-1/4 bottom-1/4 w-24 h-24 rounded-full bg-foreground/5"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 1
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Feature Content - Right side on desktop, bottom on mobile */}
                  <CardContent className="p-8 flex flex-col justify-center relative">
                    {/* Animated icon */}
                    <motion.div 
                      className={`mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center ${features[activeTab].color} ${features[activeTab].textColor}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{ 
                          duration: 6, 
                          repeat: Infinity,
                          repeatType: "loop" 
                        }}
                      >
                        {features[activeTab].icon}
                      </motion.div>
                    </motion.div>
                    
                    <motion.h3 
                      className={`text-2xl font-bold mb-4 ${features[activeTab].textColor}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {features[activeTab].title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-muted-foreground mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {features[activeTab].description}
                    </motion.p>
                    
                    <motion.div 
                      className="mt-auto"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Button 
                        variant="ghost" 
                        className={`group ${features[activeTab].textColor} hover:${features[activeTab].hoverColor} hover:bg-transparent p-0`}
                        asChild
                      >
                        <Link href={features[activeTab].link}>
                          <span>Learn More</span>
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut" 
                            }}
                            className="inline-block ml-1"
                          >
                            <ArrowRight className="inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </motion.span>
                        </Link>
                      </Button>
                    </motion.div>
                    
                    {/* Decorative elements */}
                    <div className="absolute bottom-4 right-4 opacity-10">
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                          scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                        }}
                        className="w-32 h-32"
                      >
                        {features[activeTab].icon}
                      </motion.div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Feature Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {features.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeTab ? features[index].textColor : 'bg-muted'}`}
              onClick={() => setActiveTab(index)}
              aria-label={`View feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}