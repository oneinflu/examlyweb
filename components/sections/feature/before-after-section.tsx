"use client";

import { Section } from "../../ui/section";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { X, Check, AlertTriangle, Target, Calendar, TrendingUp, Shield } from "lucide-react";

interface ComparisonItem {
  id: string;
  without: {
    title: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: React.ComponentType<any>;
    color: string;
  };
  with: {
    title: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: React.ComponentType<any>;
    color: string;
  };
}

const comparisons: ComparisonItem[] = [
  {
    id: "coverage",
    without: {
      title: "Missed Topics",
      description: "Random study approach leads to gaps in syllabus coverage and important topics being overlooked",
      icon: X,
      color: "text-[#CEAE2D]"
    },
    with: {
      title: "100% Syllabus Coverage",
      description: "AI-powered curriculum mapping ensures every topic is covered systematically with proper weightage",
      icon: Target,
      color: "text-brand-emerald"
    }
  },
  {
    id: "revision",
    without: {
      title: "No Time for Revision",
      description: "Poor time management leaves no buffer for revision, leading to cramming before exams",
      icon: AlertTriangle,
      color: "text-[#CEAE2D]"
    },
    with: {
      title: "Strategic Revision Days",
      description: "Built-in revision cycles with spaced repetition ensure concepts are reinforced at optimal intervals",
      icon: Calendar,
      color: "text-brand-emerald"
    }
  },
  {
    id: "scores",
    without: {
      title: "Low Mock Scores",
      description: "Inconsistent preparation leads to poor performance in practice tests and low confidence",
      icon: X,
      color: "text-[#CEAE2D]"
    },
    with: {
      title: "Gradual Score Improvement",
      description: "Structured learning path shows measurable progress with each mock test, building momentum",
      icon: TrendingUp,
      color: "text-brand-emerald"
    }
  },
  {
    id: "confidence",
    without: {
      title: "Stress Before Exams",
      description: "Uncertainty about preparation level creates anxiety and affects exam day performance",
      icon: AlertTriangle,
      color: "text-[#CEAE2D]"
    },
    with: {
      title: "Clear, Confident Plan",
      description: "Complete visibility into progress and readiness creates calm confidence for exam success",
      icon: Shield,
      color: "text-brand-emerald"
    }
  }
];

export default function BeforeAfterSection() {
  return (
    <Section className="py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Before vs After: The Learning Path Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the dramatic transformation in your exam preparation journey with our AI-powered Learning Path feature.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-8">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 text-sm px-4 py-2 text-[#CEAE2D]">
                Without Learning Path
              </Badge>
              <h3 className="text-xl font-semibold text-muted-foreground">
                Traditional Study Approach
              </h3>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="mb-4 text-sm px-4 py-2 bg-brand-emerald hover:bg-brand-emerald/90">
                With Learning Path
              </Badge>
              <h3 className="text-xl font-semibold">
                AI-Powered Smart Preparation
              </h3>
            </div>
          </div>

          {/* Comparison Items */}
          {comparisons.map((comparison, index) => {
            const WithoutIcon = comparison.without.icon;
            const WithIcon = comparison.with.icon;
            
            return (
              <div key={comparison.id} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Without Learning Path */}
                <Card className="p-6 glass-2 border-[#CEAE2D]/20 hover:glass-3 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-full bg-[#CEAE2D]/10 dark:bg-[#CEAE2D]/5">
                        <WithoutIcon className={`h-6 w-6 ${comparison.without.color}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 text-[#CEAE2D] dark:text-[#CEAE2D]/80">
                        {comparison.without.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {comparison.without.description}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* With Learning Path */}
                <Card className="p-6 glass-2 border-emerald-200/20 hover:glass-3 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-full bg-emerald-50 dark:bg-emerald-950/20">
                        <WithIcon className={`h-6 w-6 ${comparison.with.color}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 text-emerald-600 dark:text-emerald-400">
                        {comparison.with.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {comparison.with.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Visual Separator */}
        <div className="flex items-center justify-center my-12">
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#CEAE2D]/30 to-transparent w-24"></div>
            <div className="text-2xl font-bold text-muted-foreground">VS</div>
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent w-24"></div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="p-6 text-center glass-2 border-0">
            <div className="text-3xl font-bold text-[#CEAE2D] mb-2">65%</div>
            <div className="text-sm text-muted-foreground">
              Students struggle without structured plans
            </div>
          </Card>
          <Card className="p-6 text-center glass-2 border-0 ring-2 ring-brand/20">
            <div className="text-3xl font-bold text-brand-emerald mb-2">92%</div>
            <div className="text-sm text-muted-foreground">
              Success rate with Learning Path
            </div>
          </Card>
          <Card className="p-6 text-center glass-2 border-0">
            <div className="text-3xl font-bold text-brand mb-2">3x</div>
            <div className="text-sm text-muted-foreground">
              Faster preparation with AI guidance
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Transform your exam preparation from chaotic to systematic
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-brand hover:bg-brand/90 text-white rounded-lg font-semibold transition-colors">
              Start Your Learning Path
            </button>
            <button className="px-8 py-3 border border-muted-foreground/20 hover:bg-muted/50 rounded-lg font-semibold transition-colors">
              See Demo
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}