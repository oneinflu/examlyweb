"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PartnerFinalCTA() {
  return (
    <Section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-brand-fire/5 to-background" />
      <div className="absolute top-20 right-10 w-20 h-20 bg-brand-fire/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand/10 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Content */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-6 bg-brand-fire/10 border-brand-fire/20 text-brand-fire">
            <Sparkles className="w-4 h-4 mr-2" />
            Join Our Partner Network
          </Badge>
          
          <h2 className="text-balance text-3xl font-semibold sm:text-5xl mb-8">
            Ready to revolutionize your <span className="text-brand-fire">coaching business</span>? Join Examly Partners today.
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg h-auto"
            >
              Become a Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-brand-fire/50 text-brand-fire hover:bg-brand-fire/10 px-8 py-6 text-lg h-auto"
            >
              Request Demo
            </Button>
          </div>
          
          {/* Microcopy */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald mr-2"></div>
              <span>No setup fees</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-fire mr-2"></div>
              <span>Cancel anytime</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-electro mr-2"></div>
              <span>Trusted by hundreds of coaching institutes</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}