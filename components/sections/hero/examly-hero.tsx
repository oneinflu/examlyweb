import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function ExamlyHero() {
  return (
    <Section className="py-20 lg:py-32 relative overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/newbg.png"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      
      <div className="container max-w-container  mx-auto relative z-10">
        {/* Title Section - 8 columns with 4 blank */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <h1 className="text-primary  text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
              Ace Your CPA, CMA, ACCA, and EA Exams with Examly
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              At Examly, we redefine how professionals prepare for global certifications like CPA, CMA, ACCA, and EA. With expert-led content, cutting-edge learning tools, and proven success strategies, we ensure you achieve your career goals faster and smarter.
            </p>
          </div>
          {/* Remaining 4 columns left blank */}
        </div>
        
        {/* 5-7 Column Grid Layout */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Statistics Card - 5 columns - Fixed Height */}
          <div className="col-span-12 lg:col-span-5">
            <Card className="h-[300px] p-6 text-white relative overflow-hidden rounded-3xl border-slate-600/30">
              {/* Background Image */}
              <Image
                src="/newbg.png"
                alt="Background"
                fill
                className="object-cover"
              />
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Top section with 3M+ */}
                <div className="space-y-3">
                  <div className="text-5xl lg:text-6xl font-bold text-white leading-none">
                    3M<span className="text-yellow-400">+</span>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed max-w-[200px]">
                    CPA candidates who have prepared with Examly.
                  </p>
                </div>
                
                {/* Bottom section with avatars */}
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <Avatar className="w-10 h-10 border-2 border-white">
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="User 1" />
                      <AvatarFallback className="bg-blue-500 text-white font-semibold text-sm">JD</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-10 h-10 border-2 border-white">
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="User 2" />
                      <AvatarFallback className="bg-purple-500 text-white font-semibold text-sm">AM</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-10 h-10 border-2 border-white">
                      <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="User 3" />
                      <AvatarFallback className="bg-green-500 text-white font-semibold text-sm">SK</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-10 h-10 border-2 border-white">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User 4" />
                      <AvatarFallback className="bg-orange-500 text-white font-semibold text-sm">MR</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-slate-800 text-lg font-bold">
                    +
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Why Choose Examly Video Section - 7 columns */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              {/* Background Image */}
              <Image
                src="/why.png"
                alt="Students studying together"
                fill
                className="object-cover"
              />
              
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/50" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center tracking-wider">
                  WHY CHOOSE EXAMLY
                </h2>
              </div>
              
              {/* Play Button - Bottom Right */}
              <div className="absolute bottom-6 right-6 z-20">
                <Button 
                  size="icon" 
                  className="rounded-full w-16 h-16 bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg 
                    className="w-8 h-8 ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}