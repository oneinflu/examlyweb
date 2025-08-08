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
  Zap
} from "lucide-react";

export default function LearningPathCTA() {
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
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Transform Your Preparation?
            </Badge>
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Start Your{" "}
              <span className="bg-gradient-to-r from-brand via-brand-emerald to-brand-fire bg-clip-text text-transparent">
                Personalized Learning Path
              </span>{" "}
              Today
            </h2>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who&apos;ve transformed their exam preparation with AI-powered learning paths. Your success story starts here.
            </p>
            
            {/* CTA Button */}
            <div className="mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand to-brand-emerald hover:from-brand/90 hover:to-brand-emerald/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Build My Plan in 2 Minutes
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="p-1.5 rounded-full bg-green-500/10">
                  <CreditCard className="w-4 h-4 text-green-500" />
                </div>
                <span>No credit card required</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="p-1.5 rounded-full bg-blue-500/10">
                  <Clock className="w-4 h-4 text-blue-500" />
                </div>
                <span>Cancel anytime</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="p-1.5 rounded-full bg-purple-500/10">
                  <Shield className="w-4 h-4 text-purple-500" />
                </div>
                <span>Secure & private</span>
              </div>
            </div>
            
            {/* Additional Trust Elements */}
            <div className="mt-8 pt-8 border-t border-muted-foreground/10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-emerald" />
                  <span>Trusted by 50,000+ students</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-emerald" />
                  <span>92% success rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-emerald" />
                  <span>24/7 support included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-brand mb-2">2 min</div>
            <div className="text-sm text-muted-foreground">Setup Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-brand-emerald mb-2">30%</div>
            <div className="text-sm text-muted-foreground">Faster Preparation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-brand-fire mb-2">Free</div>
            <div className="text-sm text-muted-foreground">Trial Period</div>
          </div>
        </div>
      </div>
    </Section>
  );
}