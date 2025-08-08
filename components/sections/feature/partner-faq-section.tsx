"use client";

import { Section } from "@/components/ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion-raised";
import { HelpCircle, Package, Sliders, Shield, HeadphonesIcon, ArrowUpCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  category: 'onboarding' | 'customization' | 'security' | 'support' | 'plans' | 'resources';
}

// Partner FAQ Items
const partnerFAQs: FAQItem[] = [
  {
    id: "onboarding",
    question: "What does onboarding include?",
    answer: "Our comprehensive onboarding process includes dedicated setup assistance, staff training sessions, data migration support, and a personalized implementation plan. We'll guide you through every step from initial account setup to your first student cohort launch. Our team will work closely with yours to ensure a smooth transition and quick time-to-value.",
    icon: Package,
    category: 'onboarding'
  },
  {
    id: "customization",
    question: "Can I customize homework & reports?",
    answer: "Absolutely! Examly offers extensive customization options for both homework assignments and performance reports. You can tailor assignments to match your teaching methodology, adjust difficulty levels, set custom deadlines, and even create branded report templates. Our platform allows you to configure automated reports with the metrics that matter most to your coaching business.",
    icon: Sliders,
    category: 'customization'
  },
  {
    id: "security",
    question: "How secure is student data?",
    answer: "We take data security extremely seriously. Examly employs industry-leading encryption standards, regular security audits, and strict access controls to protect all student information. We're fully compliant with relevant data protection regulations and maintain a comprehensive data retention policy. Your students' data is never shared with third parties without explicit consent.",
    icon: Shield,
    category: 'security'
  },
  {
    id: "support",
    question: "What support do partners get?",
    answer: "Partners receive priority access to our dedicated support team via multiple channels including email, chat, and scheduled calls. You'll be assigned a dedicated Partner Success Manager who provides regular check-ins, performance reviews, and strategic guidance. We also offer extended technical support hours and emergency assistance for critical issues.",
    icon: HeadphonesIcon,
    category: 'support'
  },
  {
    id: "plans",
    question: "How easy is it to upgrade plans?",
    answer: "Upgrading your plan is seamless and can be done at any time through your partner dashboard. When you upgrade, new features and capacity increases are instantly available. We offer flexible billing options including monthly, quarterly, or annual payment schedules with discounts for longer commitments. There's no downtime during upgrades, and your existing data and configurations remain intact.",
    icon: ArrowUpCircle,
    category: 'plans'
  },
  {
    id: "resources",
    question: "What learning resources are available?",
    answer: "We provide a comprehensive library of learning resources for partners including video tutorials, detailed documentation, best practice guides, and regular webinars. Our Partner Knowledge Base contains searchable articles on all platform features, and we offer customized training sessions for your team. Additionally, you'll have access to our partner community forum to share experiences with other coaching centers.",
    icon: BookOpen,
    category: 'resources'
  },
];

const categoryColors = {
  onboarding: 'text-brand-fire',
  customization: 'text-brand-emerald',
  security: 'text-brand-electro',
  support: 'text-brand-ultraviolet',
  plans: 'text-brand-ember',
  resources: 'text-brand-holo'
};

const categoryLabels = {
  onboarding: 'Onboarding',
  customization: 'Customization',
  security: 'Security',
  support: 'Support',
  plans: 'Plans',
  resources: 'Resources'
};

export default function PartnerFAQSection() {
  return (
    <Section className="py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-8 w-8 text-brand-electro" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Partner FAQ
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about becoming an Examly partner
          </p>
        </div>

        {/* FAQ Content - Two Column Layout for Desktop */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {partnerFAQs.slice(0, 3).map((item) => {
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
                {partnerFAQs.slice(3, 6).map((item) => {
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
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Have more questions about partnering with Examly?
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Contact Our Partner Team
          </Button>
        </div>
      </div>
    </Section>
  );
}