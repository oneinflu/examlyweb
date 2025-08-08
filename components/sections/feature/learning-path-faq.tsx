"use client";

import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion-raised";
import { HelpCircle, CheckCircle, Clock, Wifi, RefreshCw, BookOpen, Calendar, Target } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  category: 'flexibility' | 'features' | 'technical' | 'planning';
}

const faqItems: FAQItem[] = [
  {
    id: "change-plan",
    question: "Can I change my plan after starting?",
    answer: "Absolutely! Your Learning Path is fully adaptive. You can modify your study schedule, change target exam dates, adjust daily study hours, or even switch focus areas at any time. The AI will automatically recalculate your plan to accommodate these changes while ensuring you stay on track for your goals.",
    icon: RefreshCw,
    category: 'flexibility'
  },
  {
    id: "multiple-subjects",
    question: "Does it work for multiple subjects?",
    answer: "Yes! The Learning Path feature supports multi-subject preparation. You can create separate learning paths for different exams (CPA, CMA, ACCA, EA) or manage multiple subjects within a single exam. The AI intelligently balances your time across subjects based on their weightage, your proficiency levels, and exam dates.",
    icon: BookOpen,
    category: 'features'
  },
  {
    id: "missed-days",
    question: "What if I can't study on some days?",
    answer: "Life happens, and we've got you covered! When you miss study days, the Learning Path automatically redistributes your remaining topics across available days. You can mark days as unavailable (holidays, work commitments, etc.) and the AI will adjust your schedule accordingly without compromising your exam preparation quality.",
    icon: Calendar,
    category: 'flexibility'
  },
  {
    id: "offline-access",
    question: "Is it available offline?",
    answer: "Yes! You can download your weekly study plans, reading materials, and practice questions for offline access. While the AI-powered adaptive features require internet connectivity for real-time updates, all your core study content remains accessible even without an internet connection.",
    icon: Wifi,
    category: 'technical'
  },
  {
    id: "progress-tracking",
    question: "How does progress tracking work?",
    answer: "The Learning Path provides comprehensive progress tracking with visual dashboards showing completion rates, time spent per topic, mock test scores, and weak area improvements. You'll get weekly progress reports and milestone celebrations to keep you motivated throughout your preparation journey.",
    icon: Target,
    category: 'features'
  },
  {
    id: "study-time",
    question: "What if I have limited study time?",
    answer: "The AI optimizes your learning path based on your available time. Whether you have 1 hour or 8 hours daily, it prioritizes high-impact topics, uses efficient study techniques, and focuses on your weak areas first. You'll get maximum results even with minimal time investment.",
    icon: Clock,
    category: 'planning'
  },
  {
    id: "difficulty-levels",
    question: "Can it adapt to my learning pace?",
    answer: "Absolutely! The Learning Path continuously analyzes your performance in practice tests, time spent on topics, and comprehension levels. It automatically adjusts the difficulty progression, allocates more time to challenging concepts, and accelerates through topics you've mastered.",
    icon: CheckCircle,
    category: 'features'
  },
  {
    id: "exam-changes",
    question: "What if my exam date changes?",
    answer: "No problem! Simply update your exam date in the system, and the AI will instantly recalculate your entire learning path. It will adjust the intensity, redistribute topics, and ensure you're still fully prepared for your new exam date without any stress or manual replanning.",
    icon: RefreshCw,
    category: 'flexibility'
  }
];

const categoryColors = {
  flexibility: 'text-brand-emerald',
  features: 'text-brand',
  technical: 'text-brand-fire',
  planning: 'text-purple-500'
};

const categoryLabels = {
  flexibility: 'Flexibility',
  features: 'Features',
  technical: 'Technical',
  planning: 'Planning'
};

export default function LearningPathFAQ() {
  return (
    <Section className="py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-8 w-8 text-brand" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions about Learning Path? We&apos;ve got answers. Remove all doubts before starting your smart exam preparation journey.
          </p>
        </div>

        {/* FAQ Content - Two Column Layout for Desktop */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.slice(0, 4).map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <AccordionItem key={item.id} value={item.id} className="border-0">
                      <AccordionTrigger className="glass-2 hover:glass-3 border-0 text-left">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full bg-muted/50`}>
                            <IconComponent className={`h-5 w-5 ${categoryColors[item.category]}`} />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-lg">{item.question}</div>
                            <div className="text-xs text-muted-foreground mt-1 capitalize">
                              {categoryLabels[item.category]}
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4">
                        <div className="pl-14">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.slice(4, 8).map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <AccordionItem key={item.id} value={item.id} className="border-0">
                      <AccordionTrigger className="glass-2 hover:glass-3 border-0 text-left">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full bg-muted/50`}>
                            <IconComponent className={`h-5 w-5 ${categoryColors[item.category]}`} />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-lg">{item.question}</div>
                            <div className="text-xs text-muted-foreground mt-1 capitalize">
                              {categoryLabels[item.category]}
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4">
                        <div className="pl-14">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand/10 via-brand-emerald/10 to-brand-fire/10 rounded-2xl p-8 glass-2">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our support team is here to help you make the most of your Learning Path experience. Get personalized answers to your specific preparation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-brand hover:bg-brand/90 text-white rounded-lg font-semibold transition-colors">
                Contact Support
              </button>
              <button className="px-8 py-3 border border-muted-foreground/20 hover:bg-muted/50 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-emerald mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Question Resolution Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-fire mb-2">&lt;2hrs</div>
            <div className="text-sm text-muted-foreground">Average Response Time</div>
          </div>
        </div>
      </div>
    </Section>
  );
}