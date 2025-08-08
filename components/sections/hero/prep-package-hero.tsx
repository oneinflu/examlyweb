"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { CheckIcon, ArrowRightIcon, PlayIcon, TrendingUpIcon, BrainIcon, ClockIcon, TargetIcon, SparklesIcon, ZapIcon } from "lucide-react";

interface PrepPackageHeroProps {
  course: string;
  packageType: string;
}

export default function PrepPackageHero({ course, packageType }: PrepPackageHeroProps) {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [animatedProgress, setAnimatedProgress] = useState([0, 0, 0, 0]);
  const [floatingElements, setFloatingElements] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [studyStreak, setStudyStreak] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const targetProgress = [85, 72, 94, 68];
  const subjects = ['Financial Reporting', 'Audit & Attestation', 'Regulation', 'Business Environment'];

  // Animate progress bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(targetProgress);
      setFloatingElements(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Update time every second for real-time feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setStudyStreak(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('product-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    { text: "AI-powered adaptive scheduling that learns your pace", icon: BrainIcon },
    { text: "Real-time progress tracking with predictive analytics", icon: TrendingUpIcon },
    { text: "Priority-based study recommendations", icon: TargetIcon },
    { text: "Personalized milestone celebrations", icon: SparklesIcon }
  ];

  const recommendations = [
    { text: "Focus on Regulation - 2 hours today", priority: "high", time: "2h" },
    { text: "Review Financial Reporting concepts", priority: "medium", time: "1h" },
    { text: "Take practice test tomorrow", priority: "low", time: "3h" }
  ];

  return (
    <Section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements && [
          { top: '10%', left: '5%', delay: '0s' },
          { top: '60%', left: '90%', delay: '2s' },
          { top: '30%', left: '80%', delay: '4s' },
          { top: '80%', left: '10%', delay: '6s' }
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              top: pos.top,
              left: pos.left,
              animationDelay: pos.delay,
              animation: `float 6s ease-in-out infinite ${pos.delay}`
            }}
          />
        ))}
      </div>

      <div className="container max-w-container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Interactive Dashboard */}
          <div 
            className="relative transform transition-all duration-500 hover:scale-[1.02]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Card className="p-8 bg-gradient-to-br from-background via-background to-primary/5 border-2 border-muted/30 rounded-2xl shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Floating Sparkles */}
              {isHovered && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <SparklesIcon 
                      key={i}
                      className="absolute w-4 h-4 text-primary/30 animate-ping"
                      style={{
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Dashboard Header with Live Time */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground font-mono">
                    {currentTime.toLocaleTimeString()}
                  </span>
                </div>
              </div>

              {/* Live Study Streak */}
              <div className="mb-6 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                <div className="flex items-center gap-2">
                  <ZapIcon className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    Study Streak: {Math.floor(studyStreak / 10)} days
                  </span>
                  <Badge variant="outline" className="text-xs bg-green-500/10 border-green-500/20">
                    {course.toUpperCase()} {packageType}
                  </Badge>
                </div>
              </div>

              {/* Enhanced Progress Timeline */}
              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUpIcon className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Learning Progress</h3>
                </div>
                
                <div className="space-y-4">
                  {subjects.map((subject, index) => (
                    <div key={index} className="relative group">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground font-medium">{subject}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-foreground">{targetProgress[index]}%</span>
                          {targetProgress[index] > 80 && (
                            <CheckIcon className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-3 rounded-full transition-all duration-2000 ease-out relative overflow-hidden ${
                              targetProgress[index] > 90 ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                              targetProgress[index] > 75 ? 'bg-gradient-to-r from-blue-400 to-purple-500' :
                              'bg-gradient-to-r from-orange-400 to-red-500'
                            }`}
                            style={{ 
                              width: `${animatedProgress[index]}%`,
                              transitionDelay: `${index * 200}ms`
                            }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                          </div>
                        </div>
                        {/* Floating percentage on hover */}
                        <div className="absolute -top-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="bg-foreground text-background text-xs px-2 py-1 rounded shadow-lg">
                            {targetProgress[index]}% Complete
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced AI Recommendations */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <BrainIcon className="w-5 h-5 text-primary" />
                  <h4 className="text-md font-medium">AI Recommendations</h4>
                  <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20">
                    Live
                  </Badge>
                </div>
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                        activeHotspot === index 
                          ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20 scale-[1.02]' 
                          : 'bg-muted/30 border-muted hover:bg-muted/50 hover:border-muted-foreground/30'
                      }`}
                      onMouseEnter={() => setActiveHotspot(index)}
                      onMouseLeave={() => setActiveHotspot(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            activeHotspot === index ? 'bg-primary shadow-lg shadow-primary/50' : 
                            rec.priority === 'high' ? 'bg-red-500' :
                            rec.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                          }`} />
                          <span className="text-sm font-medium">{rec.text}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">{rec.time}</Badge>
                          {activeHotspot === index && (
                            <ArrowRightIcon className="w-4 h-4 text-primary animate-pulse" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Enhanced Benefits Content */}
          <div className="space-y-8">
            {/* Animated Headline */}
            <div className="space-y-4">
              <Badge variant="outline" className="mb-4 animate-bounce">
                <SparklesIcon className="w-3 h-3 mr-1" />
                Personalized Learning Experience
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="inline-block animate-fade-in-up">Your Success,</span>
                <br />
                <span className="text-primary inline-block animate-fade-in-up animation-delay-200">
                  Perfectly Scheduled
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-400">
                Experience the power of AI-driven personalized scheduling that adapts to your learning style, 
                pace, and goals for maximum exam success.
              </p>
            </div>

            {/* Enhanced Bullet Points with Icons */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/30 transition-all duration-200 group animate-fade-in-up"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors duration-200">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-200">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Pro Tip Box with Animation */}
            <Card className="p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-purple-500/5 border-primary/20 relative overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0">
                  <Badge className="bg-primary/10 text-primary border-primary/20 animate-pulse">
                    💡 Pro Tip
                  </Badge>
                </div>
                <div className="space-y-3">
                  <p className="font-medium">Students using our adaptive scheduling see:</p>
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div className="text-center group/stat">
                      <div className="text-3xl font-bold text-primary group-hover/stat:scale-110 transition-transform duration-200">
                        40%
                      </div>
                      <div className="text-muted-foreground">Faster completion</div>
                    </div>
                    <div className="text-center group/stat">
                      <div className="text-3xl font-bold text-primary group-hover/stat:scale-110 transition-transform duration-200">
                        85%
                      </div>
                      <div className="text-muted-foreground">Higher pass rates</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Enhanced Micro CTA */}
            <div className="flex items-center gap-4">
              <Button 
                onClick={scrollToDemo} 
                className="flex items-center gap-2 group hover:shadow-lg hover:shadow-primary/20 transition-all duration-200"
              >
                <PlayIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                Watch Product Demo
              </Button>
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground group"
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </Section>
  );
}