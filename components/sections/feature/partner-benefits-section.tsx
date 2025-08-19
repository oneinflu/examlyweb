/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
  Users, 
  Clock, 
  HeadphonesIcon, 
  Megaphone, 
  CreditCard,
  Building2,
  ArrowRightIcon,
  SparklesIcon,
  TrendingUpIcon,
  ShieldCheck
} from "lucide-react";

type Benefit = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  stat?: string;
};

const partnerBenefits: Benefit[] = [
  {
    icon: Users,
    title: "Increase Student Retention",
    description: "Better engagement leads to higher student satisfaction and loyalty",
    color: "text-brand-fire",
    bgColor: "bg-brand-fire/10",
    borderColor: "border-brand-fire/20"
  },
  {
    icon: Clock,
    title: "Save Admin Time",
    description: "Automated workflows reduce administrative overhead",
    color: "text-brand-emerald",
    bgColor: "bg-brand-emerald/10",
    borderColor: "border-brand-emerald/20",
    stat: "30%+"
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support & Training",
    description: "Dedicated team to help you get the most out of the platform",
    color: "text-brand",
    bgColor: "bg-brand/10",
    borderColor: "border-brand/20"
  },
  {
    icon: Megaphone,
    title: "Marketing Resources",
    description: "Access exclusive partner marketing materials and campaigns",
    color: "text-brand-ultraviolet",
    bgColor: "bg-brand-ultraviolet/10",
    borderColor: "border-brand-ultraviolet/20"
  },
  {
    icon: CreditCard,
    title: "Flexible Pricing & Plans",
    description: "Scalable options that grow with your coaching institute",
    color: "text-brand-ember",
    bgColor: "bg-brand-ember/10",
    borderColor: "border-brand-ember/20"
  },
  {
    icon: ShieldCheck,
    title: "Data Security & Compliance",
    description: "Enterprise-grade protection for your institute and student data",
    color: "text-brand-electro",
    bgColor: "bg-brand-electro/10",
    borderColor: "border-brand-electro/20"
  }
];

export default function PartnerBenefitsSection() {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  return (
    <Section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-brand/5 to-background" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-fire/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-emerald/10 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 bg-brand/10 border-brand/20 text-brand">
            <Building2 className="w-4 h-4 mr-2" />
            Partner Benefits
          </Badge>
          <h2 className="text-balance text-3xl font-semibold sm:text-5xl mb-6">
            Beyond Features — <span className="text-brand">Business Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our partner program and experience these tangible benefits for your coaching institute
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {partnerBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isHovered = hoveredBenefit === index;
            
            return (
              <Card 
                key={index}
                className={cn(
                  "group relative p-6 transition-all duration-500 cursor-pointer border-2 overflow-hidden",
                  isHovered ? benefit.borderColor : "border-border/50",
                  isHovered ? "shadow-lg" : "shadow-sm"
                )}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                {/* Icon */}
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
                  benefit.bgColor,
                  isHovered ? "scale-110" : ""
                )}>
                  <Icon className={cn("w-6 h-6", benefit.color)} />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className={cn(
                    "text-xl font-semibold transition-colors duration-300 flex items-center gap-2",
                    isHovered ? benefit.color : "text-foreground"
                  )}>
                    {benefit.title}
                    {benefit.stat && (
                      <Badge className={cn(
                        "ml-2 transition-all duration-300",
                        isHovered ? benefit.bgColor : "bg-muted",
                        isHovered ? benefit.color : "text-muted-foreground"
                      )}>
                        {benefit.stat}
                      </Badge>
                    )}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Remove the Learn More Link section */}
                                
                {/* Animated border */}
                <div className={cn(
                  "absolute inset-0 rounded-lg border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  benefit.borderColor
                )} />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-brand/10 via-brand-emerald/10 to-brand-fire/10 border-brand/20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center">
                <TrendingUpIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-brand mb-1">
                  Ready to grow your coaching business?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Join our partner program today and experience these benefits firsthand
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}