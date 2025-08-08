import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";
import { cn } from "@/lib/utils";

// FAQ item type definition
type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'features' | 'support';
};

// Category styling configuration
const categoryConfig = {
  general: {
    color: 'text-blue-500',
    label: 'General',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30'
  },
  pricing: {
    color: 'text-emerald-500',
    label: 'Pricing',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30'
  },
  features: {
    color: 'text-amber-500',
    label: 'Features',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30'
  },
  support: {
    color: 'text-purple-500',
    label: 'Support',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30'
  },
};

// FAQ items data
const faqItems: FAQItem[] = [
  {
    id: "what-is-examly",
    question: "What is Examly and how does it work?",
    answer: "Examly is an advanced exam preparation platform designed to help you study efficiently and effectively. Our platform combines adaptive learning technology with comprehensive study materials to create a personalized learning experience tailored to your specific needs and goals.",
    category: 'general'
  },
  {
    id: "study-materials",
    question: "What study materials are included?",
    answer: "Our platform includes comprehensive lecture notes, practice questions, mock exams, flashcards, and video tutorials. All materials are regularly updated to reflect the latest exam patterns and requirements, ensuring you're always studying the most relevant content.",
    category: 'features'
  },
  {
    id: "pricing-plans",
    question: "How much does Examly cost?",
    answer: "Examly offers flexible pricing plans starting from $29/month. We also offer course-specific packages and annual subscriptions at discounted rates. Check our pricing page for detailed information about each plan and the features included.",
    category: 'pricing'
  },
  {
    id: "refund-policy",
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee for all new subscriptions. If you're not satisfied with our service, you can request a full refund within the first week of your subscription. For course-specific packages, special terms may apply.",
    category: 'pricing'
  },
  {
    id: "mobile-access",
    question: "Can I access Examly on mobile devices?",
    answer: "Yes! Examly is fully responsive and works on all devices including smartphones and tablets. We also offer dedicated mobile apps for iOS and Android, allowing you to study on the go, even without an internet connection.",
    category: 'features'
  },
  {
    id: "technical-support",
    question: "How can I get technical support?",
    answer: "Our support team is available 24/7 via live chat and email. For technical issues, you can also use the help center in your dashboard or schedule a call with our technical team for more complex problems.",
    category: 'support'
  },
];

export default function MinimalisticFAQ() {
  return (
    <Section className="py-16">
      <div className="mx-auto max-w-container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our platform and services
          </p>
        </div>

        {/* Category filters - optional for mobile view */}
        <div className="hidden sm:flex justify-center gap-3 mb-8">
          {Object.entries(categoryConfig).map(([key, config]) => (
            <div 
              key={key} 
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium",
                config.bgColor,
                config.color
              )}
            >
              {config.label}
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="border border-border/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center text-left">
                    <span className="font-medium">{item.question}</span>
                    <div 
                      className={cn(
                        "ml-3 text-xs px-2 py-0.5 rounded-full",
                        categoryConfig[item.category].bgColor,
                        categoryConfig[item.category].color
                      )}
                    >
                      {categoryConfig[item.category].label}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button className="px-6 py-2 bg-brand hover:bg-brand/90 text-white rounded-lg font-medium transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </Section>
  );
}