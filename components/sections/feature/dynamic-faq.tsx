"use client";

import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion-raised";
import { HelpCircle, CheckCircle, Clock, Wifi, RefreshCw, BookOpen, Calendar, Target, Monitor, Play, BarChart3, Shield, Download, Smartphone, HardDrive } from "lucide-react";

interface DynamicFAQProps {
  featureType?: 'learning-path' | 'exam-simulation' | 'self-assessment' | 'offline-access';
  title?: string;
  subtitle?: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  category: 'flexibility' | 'features' | 'technical' | 'planning';
}

// Learning Path FAQ Items
const learningPathFAQs: FAQItem[] = [
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

// Exam Simulation FAQ Items
const examSimulationFAQs: FAQItem[] = [
  {
    id: "real-exam-like",
    question: "Are these simulations exactly like the real exam?",
    answer: "Yes! Our simulations mirror the official exam interface, timing, question formats, and navigation. We continuously update our platform to match the latest exam software versions used by AICPA, IMA, and other certification bodies. You'll experience the exact same environment on test day.",
    icon: Monitor,
    category: 'features'
  },
  {
    id: "answer-explanations",
    question: "Do I get explanations for answers?",
    answer: "Absolutely! Every question comes with detailed explanations for both correct and incorrect answers. You'll understand not just what the right answer is, but why other options are wrong. This helps reinforce learning and prevents similar mistakes in the future.",
    icon: BookOpen,
    category: 'features'
  },
  {
    id: "pause-timed-test",
    question: "Can I pause a timed test?",
    answer: "In practice mode, yes! You can pause and resume your session anytime. However, in 'Real Exam Mode', pausing is disabled to simulate actual exam conditions where breaks are only allowed during designated break periods. This helps you build the stamina needed for the real exam.",
    icon: Play,
    category: 'technical'
  },
  {
    id: "current-syllabus",
    question: "Are questions updated to current syllabus?",
    answer: "Yes! Our question bank is continuously updated to reflect the latest syllabus changes, FASB updates, tax law modifications, and regulatory changes. We have a dedicated team that reviews and updates content quarterly to ensure 100% alignment with current exam requirements.",
    icon: RefreshCw,
    category: 'technical'
  },
  {
    id: "performance-analytics",
    question: "How detailed are the performance reports?",
    answer: "Very detailed! You'll get comprehensive analytics including time spent per question, topic-wise performance, difficulty-level analysis, comparison with other test-takers, and personalized recommendations for improvement. Our AI identifies your weak areas and suggests targeted practice.",
    icon: BarChart3,
    category: 'features'
  },
  {
    id: "unlimited-attempts",
    question: "Can I take unlimited practice tests?",
    answer: "Yes! Take as many simulations as you need to build confidence. Each attempt generates fresh questions from our extensive database, so you won't see repeated questions. The more you practice, the better prepared you'll be for the real exam.",
    icon: Target,
    category: 'flexibility'
  },
  {
    id: "exam-day-readiness",
    question: "How do I know when I'm ready for the real exam?",
    answer: "Our AI-powered readiness score analyzes your performance across multiple simulations, considering accuracy, timing, consistency, and improvement trends. When you consistently score above the passing threshold with proper time management, you'll receive a 'Exam Ready' certification.",
    icon: Shield,
    category: 'planning'
  },
  {
    id: "technical-issues",
    question: "What if I experience technical issues during a test?",
    answer: "Our platform includes auto-save functionality that preserves your progress every 30 seconds. If you experience any technical issues, you can resume exactly where you left off. We also provide 24/7 technical support during your simulation sessions.",
    icon: Wifi,
    category: 'technical'
  }
];

const categoryColors = {
  flexibility: 'text-brand-emerald',
  features: 'text-brand',
  technical: 'text-brand-fire',
  planning: 'text-brand-ultraviolet'  // Changed to use theme color
};

const categoryLabels = {
  flexibility: 'Flexibility',
  features: 'Features',
  technical: 'Technical',
  planning: 'Planning'
};

// Self Assessment FAQ Items
const selfAssessmentFAQs: FAQItem[] = [
  {
    id: "assessment-accuracy",
    question: "How accurate are the self-assessments?",
    answer: "Our self-assessments are designed with precision to accurately gauge your knowledge level. They use adaptive questioning technology that adjusts difficulty based on your responses, providing a highly accurate measurement of your proficiency across different topics and subtopics.",
    icon: Target,
    category: 'technical'
  },
  {
    id: "personalized-feedback",
    question: "What kind of feedback will I receive?",
    answer: "You'll receive comprehensive feedback including topic-by-topic breakdown of strengths and weaknesses, comparison with industry benchmarks, personalized study recommendations, and predicted exam performance. Our AI analyzes not just correct/incorrect answers but also your response patterns and time management.",
    icon: BarChart3,
    category: 'features'
  },
  {
    id: "assessment-frequency",
    question: "How often should I take self-assessments?",
    answer: "We recommend taking a comprehensive self-assessment at the beginning of your study journey, followed by topic-specific assessments every 2-3 weeks. In the final month before your exam, weekly assessments help fine-tune your preparation and build confidence in your readiness.",
    icon: Calendar,
    category: 'planning'
  },
  {
    id: "time-required",
    question: "How long does a self-assessment take?",
    answer: "Our assessments are designed to be efficient yet thorough. Mini-assessments for specific topics take 15-30 minutes, while comprehensive assessments covering all exam areas take 1-2 hours. The adaptive technology ensures you spend time only on questions that provide meaningful insights about your knowledge level.",
    icon: Clock,
    category: 'technical'
  },
  {
    id: "compare-progress",
    question: "Can I compare my progress over time?",
    answer: "Absolutely! Our platform maintains a detailed history of all your assessments, allowing you to track improvements across topics and subtopics. Visual progress charts show your knowledge growth over time, helping you visualize your journey and stay motivated as you see tangible improvement.",
    icon: RefreshCw,
    category: 'features'
  },
  {
    id: "customize-assessments",
    question: "Can I customize my self-assessments?",
    answer: "Yes! You can create custom assessments focused on specific topics, difficulty levels, or question formats. This is particularly useful when you want to test yourself on challenging areas or simulate specific sections of your upcoming exam. The system will still provide the same detailed analytics for these custom assessments.",
    icon: Target,
    category: 'flexibility'
  },
  {
    id: "assessment-integration",
    question: "How do assessments integrate with my study plan?",
    answer: "Seamlessly! Assessment results automatically update your personalized study plan, adjusting topic priorities and time allocations based on your performance. Weak areas are flagged for additional practice, while strong areas may receive less focus. This creates a continuously optimized learning path tailored to your evolving needs.",
    icon: BookOpen,
    category: 'features'
  },
  {
    id: "offline-assessments",
    question: "Can I take assessments offline?",
    answer: "Yes! You can download assessment modules for offline completion. While offline, you'll still get question-by-question feedback, but the comprehensive analytics and study plan integration will update once you reconnect to the internet. This ensures you can continue your preparation regardless of internet availability.",
    icon: Wifi,
    category: 'technical'
  }
];

// Offline Access FAQ Items
const offlineAccessFAQs: FAQItem[] = [
  {
    id: "download-entire-course",
    question: "Can I download an entire course at once?",
    answer: "Yes! You can download entire courses including all video lectures, reading materials, practice questions, and mock tests. Simply select the course and choose 'Download All' to get everything offline. Downloads are optimized for storage efficiency and can be managed through your device settings.",
    icon: Download,
    category: 'features'
  },
  {
    id: "mock-tests-offline",
    question: "Do mock tests work offline?",
    answer: "Absolutely! All mock tests and practice questions work perfectly offline. You can take full-length simulations, practice quizzes, and review detailed explanations without any internet connection. Your progress and scores are automatically synced when you reconnect to the internet.",
    icon: Monitor,
    category: 'features'
  },
  {
    id: "progress-device-lost",
    question: "Will I lose progress if my device is lost?",
    answer: "No, your progress is completely safe! All your study progress, scores, bookmarks, and notes are automatically backed up to the cloud whenever you're connected to the internet. If you lose your device, simply log in on a new device and all your data will be restored.",
    icon: Shield,
    category: 'technical'
  },
  {
    id: "mobile-desktop-availability",
    question: "Is offline available for both mobile & desktop?",
    answer: "Yes! Offline access works seamlessly across all platforms - iOS, Android, Windows, and Mac. You can download content on your phone for studying on-the-go and access the same materials on your desktop at home. All progress syncs automatically across devices.",
    icon: Smartphone,
    category: 'technical'
  },
  {
    id: "storage-space-required",
    question: "How much storage space do I need?",
    answer: "Storage requirements vary by course, but typically range from 2-8GB per complete course. Video lectures use the most space, while text materials and practice questions are very lightweight. You can selectively download specific topics or chapters to manage storage efficiently.",
    icon: HardDrive,
    category: 'technical'
  },
  {
    id: "offline-duration-limit",
    question: "Is there a time limit for offline access?",
    answer: "No time limits! Once downloaded, your content remains accessible offline indefinitely as long as your subscription is active. When you reconnect to the internet, the app will check for any content updates and sync your progress, but you can study offline for weeks or months if needed.",
    icon: Clock,
    category: 'flexibility'
  },
  {
    id: "content-updates-offline",
    question: "How do I get content updates while offline?",
    answer: "Content updates are automatically downloaded when you connect to the internet. The app intelligently updates only the changed portions to save bandwidth and storage. You'll receive notifications about important updates like new practice questions or syllabus changes when you're back online.",
    icon: RefreshCw,
    category: 'technical'
  },
  {
    id: "selective-download-options",
    question: "Can I choose what to download?",
    answer: "Absolutely! You have complete control over what to download. Choose specific chapters, topics, question banks, or video lectures. You can download by exam section, difficulty level, or content type. This flexibility helps you optimize storage space and download only what you need for your current study focus.",
    icon: Target,
    category: 'flexibility'
  }
];

export default function DynamicFAQ({ 
  featureType = 'learning-path',
  title,
  subtitle
}: DynamicFAQProps) {
  // Determine which FAQ items to use based on feature type
  const getFAQItems = () => {
    switch (featureType) {
      case 'exam-simulation':
        return examSimulationFAQs;
      case 'offline-access':
        return offlineAccessFAQs;
      case 'self-assessment':
        return selfAssessmentFAQs;
      case 'learning-path':
      default:
        return learningPathFAQs;
    }
  };

  // Get feature-specific content
  const getFeatureContent = () => {
    switch (featureType) {
      case 'exam-simulation':
        return {
          title: title || "Frequently Asked Questions",
          subtitle: subtitle || "Got questions about Exam Simulation? We've got answers. Remove all doubts before starting your realistic exam practice.",
          ctaTitle: "Ready to start practicing?",
          ctaDescription: "Experience the most realistic exam environment and build the confidence you need to succeed on test day.",
          primaryButton: "Start Free Simulation",
          secondaryButton: "View Demo"
        };
      case 'offline-access':
        return {
          title: title || "Frequently Asked Questions",
          subtitle: subtitle || "Got questions about Offline Access? We've got answers. Study anywhere, anytime without worrying about internet connectivity.",
          ctaTitle: "Ready to study offline?",
          ctaDescription: "Download your courses and start studying anywhere, anytime. Never let poor internet connection interrupt your exam preparation.",
          primaryButton: "Start Downloading",
          secondaryButton: "Learn More"
        };
      case 'self-assessment':
        return {
          title: title || "Frequently Asked Questions",
          subtitle: subtitle || "Got questions about Self-Assessment? We've got answers. Learn how our assessment tools can help identify your strengths and weaknesses.",
          ctaTitle: "Ready to assess your knowledge?",
          ctaDescription: "Take a comprehensive self-assessment today and get personalized insights to optimize your study strategy.",
          primaryButton: "Start Free Assessment",
          secondaryButton: "Learn More"
        };
      case 'learning-path':
      default:
        return {
          title: title || "Frequently Asked Questions",
          subtitle: subtitle || "Got questions about Learning Path? We've got answers. Remove all doubts before starting your smart exam preparation journey.",
          ctaTitle: "Still have questions?",
          ctaDescription: "Our support team is here to help you make the most of your Learning Path experience. Get personalized answers to your specific preparation needs.",
          primaryButton: "Contact Support",
          secondaryButton: "Schedule Demo"
        };
    }
  };

  const faqItems = getFAQItems();
  const content = getFeatureContent();

  return (
    <Section className="py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-8 w-8 text-brand" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {content.title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle}
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
            <h3 className="text-2xl font-bold mb-4">{content.ctaTitle}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {content.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-brand hover:bg-brand/90 text-white rounded-lg font-semibold transition-colors">
                {content.primaryButton}
              </button>
              <button className="px-8 py-3 border border-muted-foreground/20 hover:bg-muted/50 rounded-lg font-semibold transition-colors">
                {content.secondaryButton}
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
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-fire mb-2">2M+</div>
            <div className="text-sm text-muted-foreground">Questions Answered</div>
          </div>
        </div>
      </div>
    </Section>
  );
}