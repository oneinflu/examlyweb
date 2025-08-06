"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "../../ui/carousel";
import { Section } from "../../ui/section";
import Image from "next/image";
import Glow from "../../ui/glow";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";

// Define the slides for the carousel with different background colors
const dashboardSlides = [
  {
    title: "Study Dashboard",
    description: "Track your progress and follow your personalized study plan",
    image: "/look1.svg",
    bgFrom: "from-blue-50",
    bgTo: "to-indigo-50",
    darkBgFrom: "dark:from-blue-950/20",
    darkBgTo: "dark:to-indigo-950/20",
  },
  {
    title: "Exam Simulations",
    description: "Practice with real exam-like conditions and questions",
    image: "/look2.svg",
    bgFrom: "from-emerald-50",
    bgTo: "to-teal-50",
    darkBgFrom: "dark:from-emerald-950/20",
    darkBgTo: "dark:to-teal-950/20",
  },
  {
    title: "Study Calendar",
    description: "Plan your study sessions and stay on track",
    image: "/look3.svg",
    bgFrom: "from-amber-50",
    bgTo: "to-orange-50",
    darkBgFrom: "dark:from-amber-950/20",
    darkBgTo: "dark:to-orange-950/20",
  },
];

export default function DashboardCarousel() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = React.useState<any>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const isLastSlide = current === count - 1;
  

  return (
    <Section className="w-full overflow-hidden">
      <div className="mx-auto flex max-w-container flex-col gap-6 sm:gap-12">
        <h2 className="text-balance text-left text-3xl font-semibold sm:text-5xl">
          Take a closer look.
        </h2>
        <div className="relative w-full max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: false, // Disable loop
              dragFree: true, // Enable free dragging
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {dashboardSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="flex flex-col gap-4">
                      <div 
                        className={`relative w-full overflow-hidden rounded-lg bg-gradient-to-b ${slide.bgFrom} ${slide.bgTo} ${slide.darkBgFrom} ${slide.darkBgTo} p-6 pb-0`}
                      >
                        <div className="relative z-10">
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            width={1340}
                            height={820}
                            className="w-full rounded-lg rounded-b-none object-cover shadow-xl"
                            draggable="false" // Prevent image dragging to improve carousel dragging
                          />
                        </div>
                        <Glow
                          variant="center"
                          className="scale-[2] opacity-20"
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold">{slide.title}</h3>
                        <p className="text-muted-foreground">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Position navigation buttons at the right edge */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-10">
              <Button
                onClick={() => api?.scrollPrev()}
                disabled={!api?.canScrollPrev()}
                className={`h-12 w-12 rounded-full flex items-center justify-center ${isLastSlide ? 'bg-black text-white' : 'bg-white text-black'} border border-gray-200`}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => api?.scrollNext()}
                disabled={!api?.canScrollNext()}
                className="h-12 w-12 rounded-full flex items-center justify-center bg-black text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Carousel>
        </div>
      </div>
    </Section>
  );
}