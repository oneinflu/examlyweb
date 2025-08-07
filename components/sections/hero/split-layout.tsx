"use client";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import Glow from "../../ui/glow";
import Image from "next/image";

import { ArrowRightIcon } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { useTheme } from "next-themes";

export default function SplitLayoutHero() {
 const { resolvedTheme } = useTheme();
  let sectionSrc: string;
  let contentSrc: string;
  let customizeSrc: string;

  switch (resolvedTheme) {
    case "light":
      sectionSrc = "/home.png";
      contentSrc = "/prep.png";
      customizeSrc = "/calender.png";
      break;
    case "dark":
     sectionSrc = "/home.png";
      contentSrc = "/prep.png";
      customizeSrc = "/calender.png";
      break;
    default:
      sectionSrc = "/home.png";
      contentSrc = "/prep.png";
      customizeSrc = "/calender.png";
      break;
  }
  
  return (
    <Section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Content - Animate from left */}
          <div className="flex flex-col justify-center space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-primary text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Stay ahead of the 
                  curve
               
                with our forward-thinking
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Examly is built for modern learners who demand flexibility, affordability,
                and smarter study tools. With 3M+ CPA candidates already trusting
                Examly, we&rsquo;re not just another prep provider – we&rsquo;re your edge to
                outperform the competition.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-8">
                Explore Features
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                View Comparison
              </Button>
            </div>
          </div>

          {/* Right Content - Animate from right */}
          <div className="relative flex flex-col space-y-6 animate-slide-in-right">
            {/* Top Row: Square Image and Square Statistics Card */}
            <div className="grid grid-cols-2 gap-4">
              {/* Square Profile Image with Growth Icon */}
              <div className="relative aspect-square">
                <div className="relative h-full w-full rounded-2xl overflow-hidden ">
                  <Image
                    src="/one.svg"
                    alt="Student preparing for CPA exam"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Growth Icon Overlay */}
               
              </div>

              {/* Square Statistics Card */}
              <div className="aspect-square rounded-2xl bg-amber-50 dark:bg-amber-950/20 p-6 shadow-lg border flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-7xl font-bold text-primary dark:text-primary leading-none">3M+</div>
                  <div className="text-sm text-muted-foreground leading-tight">
                    CPA candidates who have prepared with Examly.
                  </div>
                </div>
                
                {/* Progress bar at bottom */}
                <div className="relative">
                  <div className="h-2 bg-primary/40 rounded-full w-full">
                    <div className="h-2 bg-primary rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Full Width Animated Graph Card */}
            <div className="relative rounded-2xl overflow-hidden col-span-2 shadow-xl">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/bg.png"
                  alt="Background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              
              {/* Content */}
              <div className="relative text-white flex items-end justify-between min-h-[120px]">
                {/* Left side - Text content */}
                <div className="space-y-3 flex-1 max-w-md p-6 pb-8">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="h-1 w-8 bg-white/60"></div>
                    Let&rsquo;s move forward in life
                  </div>
                  <h3 className="text-white text-2xl font-bold leading-tight">
                    Drive your career forward, not your expenses.
                  </h3>
                </div>
                
                {/* Right side - Three bars with right margin */}
                <div className="flex items-end h-full mr-6">
                  <div className="bg-slate-100 w-12 h-12 flex-shrink-0"></div>
                  <div className="bg-yellow-400 w-12 h-16 flex-shrink-0"></div>
                  <div className="bg-teal-500 w-12 h-20 flex-shrink-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
         {/* <div className="group relative sm:px-24 mt-60">
          <div className="relative left-[-24%] z-10 h-[24px]   transition-all delay-200 duration-700 ease-in-out group-hover:left-[-32%] group-hover:rotate-[-12deg] group-hover:skew-y-6">
            <MockupFrame
              className="animate-appear opacity-0 shadow-mockup delay-500"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={sectionSrc}
                  alt="Launch UI app screenshot"
                  width={1248}
                  height={765}
                />
              </Mockup>
            </MockupFrame>
          </div>
          <div className="relative z-10 h-[24px]  transition-all delay-200 duration-700 ease-in-out group-hover:rotate-[-12deg] group-hover:skew-y-6">
            <MockupFrame
              className="animate-appear opacity-0 shadow-mockup delay-1000"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={customizeSrc}
                  alt="Launch UI app screenshot"
                  width={1248}
                  height={765}
                />
              </Mockup>
            </MockupFrame>
          </div>
          <div className=" relative left-[32%] z-10  transition-all delay-200 duration-700 ease-in-out group-hover:left-[48%] group-hover:rotate-[-12deg] group-hover:skew-y-6">
            <MockupFrame
              className="animate-appear opacity-0 shadow-mockup delay-1500"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={contentSrc}
                  alt="Launch UI app screenshot"
                  width={1248}
                  height={765}
                />
              </Mockup>
            </MockupFrame>
          </div>
        </div> */}
        <Glow
          variant="center"
          className="mt-32 animate-appear-zoom opacity-0 delay-2000 lg:-mt-12"
        />
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <Glow variant="center" className="opacity-80" />
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.2s both;
        }
      `}</style>
    </Section>
  );
}