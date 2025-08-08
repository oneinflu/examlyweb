"use client";

import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  CreditCard,
  Sparkles,
  CheckCircle,
  Zap,
  Target,
  BookOpen,
  Award,
  BarChart3,
  BrainCircuit,
  Gauge
} from "lucide-react";

interface DynamicCTAProps {
  featureType: string;
}

const ctaContent = {
  "personalized-learning": {
    badge: {
      icon: Sparkles,
      text: "Ready to Transform Your Preparation?"
    },
    headline: "Start Your Personalized Learning Path Today",
    subheadline: "Join thousands of students who've transformed their exam preparation with AI-powered learning paths. Your success story starts here.",
    button: {
      icon: Zap,
      text: "Build My Plan in 2 Minutes"
    },
    trustBadges: [
      { icon: CreditCard, text: "No credit card required", color: "green" },
      { icon: Clock, text: "Cancel anytime", color: "blue" },
      { icon: Shield, text: "Secure & private", color: "purple" }
    ],
    additionalTrust: [
      "Trusted by 50,000+ students",
      "92% success rate",
      "24/7 support included"
    ],
    stats: [
      { value: "2 min", label: "Setup Time" },
      { value: "30%", label: "Faster Preparation" },
      { value: "Free", label: "Trial Period" }
    ]
  },
  "exam-simulation": {
    badge: {
      icon: Target,
      text: "Ready for the Real Thing?"
    },
    headline: "Your First Exam Shouldn't Be the Real One.",
    subheadline: "Experience authentic exam conditions with our simulation platform. Build confidence, identify gaps, and master the format before exam day.",
    button: {
      icon: BookOpen,
      text: "Take a Free Practice Exam Now"
    },
    trustBadges: [
      { icon: Award, text: "Official format replication", color: "green" },
      { icon: CreditCard, text: "No credit card required", color: "blue" },
      { icon: CheckCircle, text: "Latest syllabus updated", color: "purple" }
    ],
    additionalTrust: [
      "Used by 25,000+ exam candidates",
      "95% format accuracy",
      "Real-time performance analytics"
    ],
    stats: [
      { value: "5 min", label: "Quick Start" },
      { value: "95%", label: "Format Accuracy" },
      { value: "Free", label: "Practice Tests" }
    ]
  },
  "self-assessment": {
    badge: {
      icon: BrainCircuit,
      text: "Know Where You Stand"
    },
    headline: "Discover Your Strengths and Weaknesses",
    subheadline: "Our AI-powered assessment tools analyze your performance to identify knowledge gaps and create a personalized improvement plan tailored to your needs.",
    button: {
      icon: Gauge,
      text: "Take Your Free Assessment Now"
    },
    trustBadges: [
      { icon: BarChart3, text: "Detailed analytics", color: "green" },
      { icon: Clock, text: "15-minute assessment", color: "blue" },
      { icon: Shield, text: "Private results", color: "purple" }
    ],
    additionalTrust: [
      "Used by 30,000+ students",
      "85% improvement rate",
      "Personalized feedback"
    ],
    stats: [
      { value: "15 min", label: "Assessment Time" },
      { value: "25%", label: "Study Time Saved" },
      { value: "100%", label: "Personalized" }
    ]
  }
};

export default function DynamicCTA({ featureType }: DynamicCTAProps) {
  const content = ctaContent[featureType as keyof typeof ctaContent] || ctaContent["personalized-learning"];
  const BadgeIcon = content.badge.icon;
  const ButtonIcon = content.button.icon;

  return (
    <Section className="py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4">
        {/* Main CTA Container */}
        <div className="relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-brand-emerald/10 to-brand-fire/20 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80 rounded-3xl" />
          
          {/* Content */}
          <div className="relative glass-2 rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            {/* Badge */}
            <Badge variant="outline" className="mb-6 bg-brand/10 border-brand/20 text-brand px-4 py-2">
              <BadgeIcon className="w-4 h-4 mr-2" />
              {content.badge.text}
            </Badge>
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {featureType === "exam-simulation" ? (
                content.headline
              ) : (
                <>
                  Start Your{" "}
                  <span className="bg-gradient-to-r from-brand via-brand-emerald to-brand-fire bg-clip-text text-transparent">
                    Personalized Learning Path
                  </span>{" "}
                  Today
                </>
              )}
            </h2>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {content.subheadline}
            </p>
            
            {/* CTA Button */}
            <div className="mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand to-brand-emerald hover:from-brand/90 hover:to-brand-emerald/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <ButtonIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                {content.button.text}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              {content.trustBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                const colorClasses = {
                  green: "bg-green-500/10 text-green-500",
                  blue: "bg-blue-500/10 text-blue-500",
                  purple: "bg-purple-500/10 text-purple-500"
                };
                
                return (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className={`p-1.5 rounded-full ${colorClasses[badge.color as keyof typeof colorClasses]}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Additional Trust Elements */}
            <div className="mt-8 pt-8 border-t border-muted-foreground/10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                {content.additionalTrust.map((trust, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-emerald" />
                    <span>{trust}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {content.stats.map((stat, index) => {
            const colors = ["text-brand", "text-brand-emerald", "text-brand-fire"];
            return (
              <div key={index} className="text-center">
                <div className={`text-2xl sm:text-3xl font-bold ${colors[index]} mb-2`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}