"use client";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { 
  EyeOff, 
  RotateCcw, 
  MapPin,
  Lightbulb,
  BarChart3,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Eye,
  Sparkles,
  Gauge,
  Route,
  Play
} from "lucide-react";

export default function SelfAssessmentProblem() {
  const [animationStep, setAnimationStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimationStep(prev => {
          if (prev >= 3) {
            clearInterval(interval);
            return 3;
          }
          return prev + 1;
        });
      }, 1500);
    }, 1000);

    // Auto-cycle through features
    const featureTimer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(featureTimer);
    };
  }, []);

  const problemCards = [
    {
      icon: EyeOff,
      title: "Blind Study Sessions",
      description: "Hours spent without knowing if you're improving",
      stat: "73%",
      statLabel: "waste study time"
    },
    {
      icon: RotateCcw,
      title: "Repeated Mistakes",
      description: "Same errors appearing in every practice test",
      stat: "68%",
      statLabel: "repeat errors"
    },
    {
      icon: MapPin,
      title: "No Clear Direction",
      description: "Uncertain about next steps and priorities",
      stat: "81%",
      statLabel: "feel lost"
    }
  ];

  const solutionFeatures = [
    {
      icon: Gauge,
      title: "Real-Time Analytics",
      description: "Instant performance insights after every question",
      details: "Track accuracy, speed, and improvement trends in real-time",
      stats: ["95% accuracy tracking", "Sub-second analysis", "Live progress updates"]
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Smart analysis identifies your unique learning patterns",
      details: "Machine learning algorithms pinpoint exactly where you need focus",
      stats: ["Pattern recognition", "Weakness detection", "Strength mapping"]
    },
    {
      icon: Route,
      title: "Personalized Roadmaps",
      description: "Custom study plans tailored to your specific needs",
      details: "Dynamic pathways that adapt as you improve and grow",
      stats: ["Custom pathways", "Adaptive planning", "Goal tracking"]
    }
  ];

  return (
    <Section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Lightbulb className="w-4 h-4 mr-2" />
            The Assessment Revolution
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Why Guess When You Can{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Measure?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform your study approach from guesswork to precision with intelligent self-assessment.
          </p>
        </div>

        {/* Problem Cards - Diagonal Layout */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            The Study Struggle is <span className="text-[#CEAE2D]">Real</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {problemCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 border-0 bg-gradient-to-br from-[#CEAE2D]/10 to-[#CEAE2D]/5 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    transform: `translateY(${index * 20}px) rotate(${(index - 1) * 2}deg)`,
                    transformOrigin: 'center'
                  }}
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-[#CEAE2D]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#CEAE2D]/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-[#CEAE2D]" />
                    </div>
                    <h4 className="text-xl font-bold">{card.title}</h4>
                    <p className="text-muted-foreground">{card.description}</p>
                    <div className="pt-4 border-t border-border">
                      <div className="text-3xl font-bold text-[#CEAE2D] mb-1">{card.stat}</div>
                      <div className="text-sm text-muted-foreground">{card.statLabel}</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Transformation Arrow */}
       

        {/* Solution - Interactive Feature Showcase */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Your <span className="text-primary">Smart Study Assistant</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three powerful features that revolutionize how you learn and improve
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Feature Navigation */}
            <div className="space-y-6">
              {solutionFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                const isActive = activeFeature === index;
                
                return (
                  <Card 
                    key={index}
                    className={`p-6 border-0 cursor-pointer transition-all duration-500 ${
                      isActive 
                        ? 'bg-primary/10 scale-105 shadow-2xl border-primary/20' 
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary text-primary-foreground flex-shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground mb-3">{feature.description}</p>
                        {isActive && (
                          <div className="space-y-2 animate-fade-in">
                            <p className="text-sm font-medium text-primary">{feature.details}</p>
                            <div className="flex flex-wrap gap-2">
                              {feature.stats.map((stat, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  <Sparkles className="w-3 h-3 mr-1" />
                                  {stat}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {isActive && (
                        <Play className="w-5 h-5 text-primary animate-pulse" />
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Right: Dynamic Visual Demo */}
            <div className="relative">
              <Card className="p-8 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm min-h-[500px] flex items-center justify-center">
                <div className="text-center space-y-6 w-full">
                  {/* Feature Demo Content */}
                  {activeFeature === 0 && (
                    <div className="animate-fade-in space-y-6">
                      <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center">
                        <Gauge className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <h4 className="text-2xl font-bold">Live Performance Dashboard</h4>
                      
                      {/* Mock Analytics */}
                      <div className="space-y-4 max-w-sm mx-auto">
                        {[
                          { label: 'Current Session', value: 87 },
                          { label: 'Weekly Average', value: 73 },
                          { label: 'Improvement Rate', value: 94 }
                        ].map((metric, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{metric.label}</span>
                              <span className="font-bold">{metric.value}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full transition-all duration-2000 ease-out"
                                style={{ width: `${metric.value}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeFeature === 1 && (
                    <div className="animate-fade-in space-y-6">
                      <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center">
                        <Brain className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <h4 className="text-2xl font-bold">AI Learning Analysis</h4>
                      
                      {/* Mock AI Insights */}
                      <div className="space-y-4 max-w-sm mx-auto">
                        {[
                          { insight: 'Strong in Financial Concepts', confidence: 92, status: 'good' },
                          { insight: 'Focus on Regulation Rules', confidence: 68, status: 'medium' },
                          { insight: 'Audit Procedures Need Work', confidence: 45, status: 'needs-work' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                            <div className={`w-3 h-3 rounded-full ${
                              item.status === 'good' ? 'bg-primary' : 
                              item.status === 'medium' ? 'bg-muted-foreground' : 'bg-destructive'
                            }`} />
                            <div className="flex-1 text-left">
                              <div className="text-sm font-medium">{item.insight}</div>
                              <div className="text-xs text-muted-foreground">{item.confidence}% confidence</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeFeature === 2 && (
                    <div className="animate-fade-in space-y-6">
                      <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center">
                        <Route className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <h4 className="text-2xl font-bold">Your Personal Roadmap</h4>
                      
                      {/* Mock Roadmap */}
                      <div className="space-y-3 max-w-sm mx-auto">
                        {[
                          { step: 'Master Regulation Basics', status: 'current', priority: 'High' },
                          { step: 'Practice Audit Scenarios', status: 'next', priority: 'Medium' },
                          { step: 'Review Financial Analysis', status: 'future', priority: 'Low' }
                        ].map((step, idx) => (
                          <div key={idx} className={`p-3 rounded-lg border-l-4 ${
                            step.status === 'current' ? 'border-primary bg-primary/10' :
                            step.status === 'next' ? 'border-muted-foreground bg-muted/30' :
                            'border-muted bg-muted/10'
                          }`}>
                            <div className="text-sm font-medium text-left">{step.step}</div>
                            <div className="text-xs text-muted-foreground text-left">{step.priority} Priority</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
              
              {/* Feature Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {solutionFeatures.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeFeature === index ? 'bg-primary scale-125' : 'bg-muted hover:bg-muted-foreground/50'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  />
                ))}
              </div>
            </div> 
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <Card className="inline-block p-8 border-0 bg-primary/10 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-primary" />
              <div>
                <h4 className="text-xl font-bold mb-2">Ready to Study Smarter?</h4>
                <p className="text-muted-foreground">Join thousands who&apos;ve transformed their learning approach</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
            </div>
          </Card>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </Section>
  );
}