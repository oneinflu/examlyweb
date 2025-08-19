/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect, useState, useRef } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MissionStorytelling() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect values
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  // Mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section className="py-16 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Image */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] lg:h-[600px]"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              alt="Diverse professionals engaged in collaborative learning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase">Our Community</span>
              <h3 className="text-white text-2xl font-bold mt-2">Empowering Every Learner</h3>
            </div>
          </motion.div>

          {/* Right column - Mission & Vision text */}
          <motion.div 
            className="flex flex-col space-y-6"
            style={{ y: textY }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h4 className="text-brand font-semibold mb-2 tracking-wide uppercase text-sm">Our Mission</h4>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Transforming Exam Preparation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Examly, we believe that success in professional exams should be accessible to everyone, regardless of background or learning style. Our mission is to empower learners with personalized, AI-driven tools that adapt to individual needs and transform the way professionals prepare for career-defining exams.
              </p>
              <p className="text-lg text-muted-foreground">
                We&apos;re committed to breaking down barriers to professional advancement by combining cutting-edge technology with expert guidance, creating a learning experience that&apos;s not just effective, but engaging and tailored to each person&apos;s journey.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-brand-fire font-semibold mb-2 tracking-wide uppercase text-sm">Our Vision</h4>
              <p className="text-lg text-muted-foreground mb-6">
                We envision a world where every ambitious professional has the tools and support they need to excel in their certification exams and advance their careers with confidence and competence.
              </p>
              <Button variant="outline" size="lg" className="mt-2" asChild>
                <a href="/about">Learn About Our Story</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}