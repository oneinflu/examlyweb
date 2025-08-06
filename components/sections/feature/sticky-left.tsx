"use client";

import { Section } from "../../ui/section";
import Image from "next/image";
import Glow from "../../ui/glow";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FeatureStickyLeftProps {
  title?: string;
  description?: string[];
  imageSrc?: string;
  imageAlt?: string;
  course?: string;
}

export default function FeatureStickyLeft({
 
  imageSrc,
  imageAlt = "Feature image",
  course = "CMA",
}: FeatureStickyLeftProps) {
  const { resolvedTheme } = useTheme();
  let src = imageSrc;

  if (!src) {
    switch (resolvedTheme) {
      case "light":
        src = "/mobile-app-light.png";
        break;
      case "dark":
        src = "/mobile-app-dark.png";
        break;
      default:
        src = "/mobile-app-dark.png";
        break;
    }
  }

  return (
    <Section className="relative max-md:mb-16 max-md:overflow-hidden max-md:border-b">
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-12 md:flex-row md:items-start lg:gap-24">
         <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="left-0 top-32 flex w-full flex-col items-start gap-4 py-4 text-left sm:gap-8 md:sticky md:py-12 md:w-1/2">
          <h1 className="relative z-10 inline-block max-w-[920px] text-balance bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-semibold text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight dark:to-muted-foreground">
            Smartest Prep<br />for {course}®
          </h1>
          <div className="text-md relative z-10 flex max-w-[620px] flex-col gap-4 text-balance font-medium text-muted-foreground sm:text-lg">
            <p>Our {course} Review materials are updated annually and aligned to the Certified Management Accountant ({course}®) Exam Content Specification Outlines to ensure you study exactly what you need to know on exam day.</p>
          </div>
          <div className="flex gap-4 mt-4">
            <Button variant="default" className="rounded-full px-6" asChild>
              <a href="#">Try it for free</a>
            </Button>
            <Button variant="outline" className="rounded-full px-6" asChild>
              <a href="#">View Comparison</a>
            </Button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full md:w-3/4">
          <div className="relative">
            <Image
              src={src}
              alt={imageAlt}
              width={900}
              height={600}
              className="relative z-10 rounded-lg shadow-xl"
            />
            <Glow variant="center" className="opacity-30" />
          </div>
        </motion.div>
        
        
      </div>
    </Section>
  );
}
