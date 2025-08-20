/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname } from "next/navigation";
import { Section } from "@/components/ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion-raised";
import { HelpCircle, Package, Sliders, Shield, HeadphonesIcon, ArrowUpCircle, BookOpen, Box, CalendarDays } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ComponentType<any>;
  category: 'onboarding' | 'customization' | 'security' | 'support' | 'plans' | 'resources' | 'inventory' | 'schedule';
}

const faqsByType: Record<string, FAQItem[]> = {
  "/become-reseller/": [
    {
      id: "inventory",
      question: "How does inventory management work?",
      answer: "Our inventory management system helps you track educational materials in real-time. You can monitor stock levels, set up automated alerts for low inventory, and generate detailed reports on resource distribution. The system integrates seamlessly with our order processing to ensure efficient fulfillment.",
      icon: Box,
      category: 'inventory'
    },
    {
      id: "schedule",
      question: "How flexible is the class scheduling?",
      answer: "The class scheduling system is highly flexible, featuring drag-and-drop calendar management, automated student notifications, and recurring class setup. You can easily manage multiple batches, handle schedule changes, and sync with popular calendar applications.",
      icon: CalendarDays,
      category: 'schedule'
    },
    {
      id: "support",
      question: "What reseller support do you provide?",
      answer: "Resellers receive dedicated support including sales training, marketing materials, and technical assistance. You'll have a dedicated Reseller Success Manager and access to 24/7 priority support for critical issues.",
      icon: HeadphonesIcon,
      category: 'support'
    },
    {
      id: "onboarding",
      question: "How does reseller onboarding work?",
      answer: "Our reseller onboarding includes comprehensive training on inventory management, sales processes, and platform features. We provide step-by-step guidance for setting up your reseller account and integrating with your existing systems.",
      icon: Package,
      category: 'onboarding'
    }
  ],
  "/become-partner/": [
    {
      id: "customization",
      question: "Can I customize content and assessments?",
      answer: "Yes! As a content partner, you have full control over content customization. Create custom assessments, modify existing content, and develop unique learning paths tailored to your expertise and teaching methodology.",
      icon: Sliders,
      category: 'customization'
    },
    {
      id: "security",
      question: "How is my content protected?",
      answer: "We implement robust content protection measures including DRM, watermarking, and access controls. Your intellectual property is secured with industry-leading encryption and you retain full rights to your content.",
      icon: Shield,
      category: 'security'
    },
    {
      id: "support",
      question: "What support do content partners receive?",
      answer: "Content partners get specialized support for content creation, publishing, and monetization. Our team assists with content strategy, quality assurance, and technical implementation.",
      icon: HeadphonesIcon,
      category: 'support'
    },
    {
      id: "resources",
      question: "What content creation tools are available?",
      answer: "We provide a suite of content creation tools including rich media editors, assessment builders, and content analytics. You'll also have access to best practice guides and regular training sessions.",
      icon: BookOpen,
      category: 'resources'
    }
  ],
  "/become-institute-partner/": [
    {
      id: "customization",
      question: "How can I customize the learning experience?",
      answer: "Institutes can fully customize the learning environment including branding, course structure, and assessment methods. Create custom learning paths, configure automated grading, and design institute-specific reports.",
      icon: Sliders,
      category: 'customization'
    },
    {
      id: "security",
      question: "How secure is student data?",
      answer: "We maintain the highest standards of data security with end-to-end encryption, regular security audits, and strict access controls. All student data is protected in compliance with educational privacy regulations.",
      icon: Shield,
      category: 'security'
    },
    {
      id: "support",
      question: "What institute support is available?",
      answer: "Institutes receive comprehensive support including dedicated account management, technical assistance, and faculty training. We provide regular check-ins and priority support for all institute-related queries.",
      icon: HeadphonesIcon,
      category: 'support'
    },
    {
      id: "plans",
      question: "Can we scale our institute plan?",
      answer: "Yes, our institute plans are designed to scale with your growth. Easily upgrade to accommodate more students, add new features, or expand to multiple locations while maintaining seamless operations.",
      icon: ArrowUpCircle,
      category: 'plans'
    }
  ]
};

const categoryColors = {
  onboarding: 'text-brand-fire',
  customization: 'text-brand-emerald',
  security: 'text-brand-electro',
  support: 'text-brand-ultraviolet',
  plans: 'text-brand-ember',
  resources: 'text-brand-holo',
  inventory: 'text-brand-fire',
  schedule: 'text-brand-emerald'
};

const categoryLabels = {
  onboarding: 'Onboarding',
  customization: 'Customization',
  security: 'Security',
  support: 'Support',
  plans: 'Plans',
  resources: 'Resources',
  inventory: 'Inventory',
  schedule: 'Schedule'
};

export default function PartnerFAQSection() {
  const pathname = usePathname();
  const cleanPathname = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const faqs = faqsByType[cleanPathname] || faqsByType["/become-partner/"];
  
  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midPoint);
  const rightColumnFaqs = faqs.slice(midPoint);

  return (
    <Section className="py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-8 w-8 text-brand-electro" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {cleanPathname === "/become-reseller/" ? "Reseller FAQ" :
               cleanPathname === "/become-institute-partner/" ? "Institute Partner FAQ" :
               "Content Partner FAQ"}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {cleanPathname === "/become-reseller/" ? "Common questions about becoming an Examly reseller" :
             cleanPathname === "/become-institute-partner/" ? "Common questions about becoming an institute partner" :
             "Common questions about becoming a content partner"}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {leftColumnFaqs.map((item) => {
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
                {rightColumnFaqs.map((item) => {
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
      </div>
    </Section>
  );
}