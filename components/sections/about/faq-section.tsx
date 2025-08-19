"use client";

import { Section } from "@/components/ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion-raised";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  return (
    <Section className="py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Examly
          </p>
        </div>

        {/* FAQ Content - Two Column Layout for Desktop */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="what-is-examly" className="border-0">
                  <AccordionTrigger className="glass-2 hover:glass-3 border-0 text-left">
                    What is Examly and how does it work?
                  </AccordionTrigger>
                  <AccordionContent>
                    Examly is an innovative online learning platform that combines AI-powered study tools, comprehensive course materials, and personalized coaching to help students prepare for professional exams. Our platform adapts to your learning style and pace, providing targeted practice questions and real-time feedback.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="study-materials" className="border-0">
                  <AccordionTrigger className="glass-2 hover:glass-3 border-0 text-left">
                    What study materials are included?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our study materials include comprehensive textbooks, video lectures, practice questions, mock exams, flashcards, and performance analytics. All content is regularly updated to reflect the latest exam patterns and requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="success-rate" className="border-0">
                  <AccordionTrigger className="glass-2 hover:glass-3 border-0 text-left">
                    What is Examly&apos;s student success rate?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our students consistently achieve pass rates significantly above the national average. Over 85% of our students pass their exams on the first attempt, thanks to our comprehensive preparation system and personalized learning approach.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="support" className="border-0">
                  <AccordionTrigger className="glass-2 hover:glass-3 border-0 text-left">
                    What kind of support do students receive?
                  </AccordionTrigger>
                  <AccordionContent>
                    Students receive 24/7 access to our support team, regular check-ins with course mentors, live doubt-clearing sessions, and a community forum where they can interact with peers and instructors.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="course-access" className="border-0">
                  <AccordionTrigger className="glass-2 hover:glass-3 border-0 text-left">
                    How long do I have access to the courses?
                  </AccordionTrigger>
                  <AccordionContent>
                    Course access varies by package, ranging from 12 to 24 months. Our Ultimate package includes extended access until you pass your exam, ensuring you have the support you need for as long as you need it.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-options" className="border-0">
                  <AccordionTrigger className="glass-2 hover:glass-3 border-0 text-left">
                    What payment options are available?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer flexible payment options including one-time payments and monthly installments. We also provide special discounts for early birds and group enrollments. All major credit cards and digital payment methods are accepted.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="updates" className="border-0">
                  <AccordionTrigger className="glass-2 hover:glass-3 border-0 text-left">
                    How often is the content updated?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our content is continuously updated to reflect the latest exam patterns, regulatory changes, and industry developments. We also incorporate student feedback and performance data to enhance our study materials regularly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="refund-policy" className="border-0">
                  <AccordionTrigger className="glass-2 hover:glass-3 border-0 text-left">
                    What is your refund policy?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a 7-day money-back guarantee for all our courses. If you&apos;re not satisfied with our platform, you can request a full refund within the first week of purchase, no questions asked.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}