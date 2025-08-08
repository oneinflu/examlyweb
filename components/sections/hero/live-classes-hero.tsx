"use client";

import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Card } from "../../ui/card";
import { 
  Play, 
  Calendar, 
  Users, 
  Star, 
  MessageCircle, 
  Video,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Clock,
  Zap,
  SparklesIcon,
  TrendingUp,
  Target,
  Mic,
  Camera,
  Share2,
  User,
  Award,
  GraduationCap
} from "lucide-react";
import { useState, useEffect } from "react";

export default function LiveClassesHero() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [liveStudents, setLiveStudents] = useState(247);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle through demo states
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Update time and student count
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setLiveStudents(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const demoStates = [
    {
      title: "Interactive Problem Solving",
      instructor: "CA Priya Sharma",
      topic: "Advanced Financial Analysis",
      students: 156,
      duration: "45 min",
      status: "LIVE NOW",
      experience: "15+ Years",
      rating: "4.9"
    },
    {
      title: "Doubt Clearing Session",
      instructor: "Prof. Rajesh Kumar",
      topic: "Cost Accounting Fundamentals",
      students: 203,
      duration: "30 min",
      status: "STARTING SOON",
      experience: "12+ Years",
      rating: "4.8"
    },
    {
      title: "Exam Strategy Workshop",
      instructor: "CA Meera Patel",
      topic: "CA Final Preparation Tips",
      students: 189,
      duration: "60 min",
      status: "LIVE NOW",
      experience: "18+ Years",
      rating: "4.9"
    }
  ];

  return (
    <Section className="relative overflow-hidden py-16 lg:py-24">
      {/* Enhanced Background with Brand Colors */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-brand-emerald/15 to-brand-fire/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--brand)/0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,hsl(var(--brand-emerald)/0.15),transparent_50%)]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Live Indicator Badge */}
            <div className="flex items-center justify-center lg:justify-start">
              <Badge className="bg-brand-fire/10 border-brand-fire/30 text-brand-fire px-4 py-2 text-sm font-semibold backdrop-blur-sm animate-pulse">
                <div className="w-2 h-2 bg-brand-fire rounded-full mr-2 animate-ping" />
                <Video className="w-4 h-4 mr-2 text-brand-fire" />
                {liveStudents} Students Learning Live
              </Badge>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
                Master Your Exams with{" "}
                <span className="text-brand font-black">
                  Live Expert Classes
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-foreground/80 leading-relaxed font-medium max-w-2xl">
                Join interactive live classes with certified instructors. Get instant doubt resolution, personalized guidance, and study with peers in real-time.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand hover:bg-brand/90 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform text-white" />
                Join Live Class Now
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform text-white" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-brand/50 hover:border-brand hover:bg-brand/10 text-brand px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 group backdrop-blur-sm"
              >
                <Calendar className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform text-brand" />
                View Class Schedule
              </Button>
            </div>
            
            {/* Trust Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl bg-brand/10 backdrop-blur-sm border border-brand/20">
                <div className="p-2 rounded-lg bg-brand/20">
                  <Users className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand">500+ Experts</div>
                  <div className="text-xs text-brand/70">Certified Faculty</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl bg-brand-emerald/10 backdrop-blur-sm border border-brand-emerald/20">
                <div className="p-2 rounded-lg bg-brand-emerald/20">
                  <Star className="w-5 h-5 text-brand-emerald fill-current" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-emerald">4.9/5 Rating</div>
                  <div className="text-xs text-brand-emerald/70">Student Reviews</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl bg-brand-fire/10 backdrop-blur-sm border border-brand-fire/20">
                <div className="p-2 rounded-lg bg-brand-fire/20">
                  <CheckCircle className="w-5 h-5 text-brand-fire" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-fire">95% Success</div>
                  <div className="text-xs text-brand-fire/70">Pass Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Visual - Live Class Demo with Tutor */}
          <div 
            className="relative transform transition-all duration-500 hover:scale-[1.02]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Demo Card */}
            <Card className="relative overflow-hidden bg-background/90 backdrop-blur-xl border-2 border-border/50 shadow-2xl rounded-3xl p-6">
              {/* Live Class Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-fire rounded-full border-2 border-background animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      {demoStates[activeDemo].title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {demoStates[activeDemo].instructor}
                    </p>
                  </div>
                </div>
                
                <Badge className="bg-brand-fire text-white px-3 py-1 text-xs font-bold animate-pulse">
                  {demoStates[activeDemo].status}
                </Badge>
              </div>
              
              {/* Tutor Profile Section */}
              <div className="mb-6 p-4 rounded-2xl bg-muted/30 border border-border/30">
                <div className="flex items-center gap-4">
                  {/* Tutor Avatar */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center border-2 border-brand/30">
                      <User className="w-8 h-8 text-brand" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-brand-emerald rounded-full border-2 border-background flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  {/* Tutor Info */}
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-lg">
                      {demoStates[activeDemo].instructor}
                    </h4>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Award className="w-4 h-4 text-brand-emerald" />
                        <span>{demoStates[activeDemo].experience}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{demoStates[activeDemo].rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-sm">
                      <GraduationCap className="w-4 h-4 text-brand" />
                      <span className="text-brand font-medium">{demoStates[activeDemo].topic}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Live Class Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 rounded-xl bg-brand/10">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-brand" />
                  </div>
                  <div className="text-lg font-bold text-brand">{demoStates[activeDemo].students}</div>
                  <div className="text-xs text-brand/70">Students</div>
                </div>
                
                <div className="text-center p-3 rounded-xl bg-brand-emerald/10">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-brand-emerald" />
                  </div>
                  <div className="text-lg font-bold text-brand-emerald">{demoStates[activeDemo].duration}</div>
                  <div className="text-xs text-brand-emerald/70">Duration</div>
                </div>
                
                <div className="text-center p-3 rounded-xl bg-brand-fire/10">
                  <div className="flex items-center justify-center mb-2">
                    <Target className="w-5 h-5 text-brand-fire" />
                  </div>
                  <div className="text-lg font-bold text-brand-fire">LIVE</div>
                  <div className="text-xs text-brand-fire/70">Status</div>
                </div>
              </div>
              
              {/* Live Controls */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/30">
                <div className="flex items-center gap-2">
                  <Button size="sm" className="bg-brand/20 hover:bg-brand/30 text-brand backdrop-blur-sm">
                    <Mic className="w-4 h-4 text-brand" />
                  </Button>
                  <Button size="sm" className="bg-brand/20 hover:bg-brand/30 text-brand backdrop-blur-sm">
                    <Camera className="w-4 h-4 text-brand" />
                  </Button>
                  <Button size="sm" className="bg-brand/20 hover:bg-brand/30 text-brand backdrop-blur-sm">
                    <Share2 className="w-4 h-4 text-brand" />
                  </Button>
                </div>
                
                <div className="text-foreground text-sm font-medium bg-background/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
              
              {/* Interactive Chat */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <MessageCircle className="w-4 h-4 text-brand" />
                  Live Chat
                </div>
                
                <div className="space-y-2 max-h-20 overflow-hidden">
                  {[
                    { name: "Priya", message: "Great explanation of the concept!" },
                    { name: "Rahul", message: "Can you repeat the formula?" },
                    { name: "Sneha", message: "This is very helpful, thank you!" }
                  ].map((chat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-brand font-bold">
                        {chat.name[0]}
                      </div>
                      <div>
                        <span className="font-medium text-foreground">{chat.name}:</span>
                        <span className="text-muted-foreground ml-1">{chat.message}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            {/* Floating Elements */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <SparklesIcon 
                    key={i}
                    className="absolute w-4 h-4 text-brand/60 animate-ping"
                    style={{
                      top: `${Math.random() * 80 + 10}%`,
                      left: `${Math.random() * 80 + 10}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}