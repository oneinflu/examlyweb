import { ArrowRightIcon } from "lucide-react";
import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import Link from "next/link";

export default function FeaturesGrid() {
  return (
    <Section className="relative w-full overflow-hidden">
      <div className="relative">
        <div className="mx-auto flex max-w-container flex-col gap-8 sm:gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column - Title */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
                Our Features that Drive Success
              </h2>
            </div>
            
            {/* Right column - Paragraph and Button */}
            <div className="flex flex-col gap-4">
              <p className="text-md font-medium text-muted-foreground sm:text-xl">
                We are the leading platform for CPA, CMA, ACCA, and EA exam preparation. We offer a complete range of learning tools to help students master concepts, practice effectively, and achieve top exam scores.
              </p>
              
              <div className="mt-2">
                <Button variant="outline" className="group flex items-center gap-2">
                  See more
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Feature 1 - Personalized Learning Paths */}
            <Link href="/feature/personalized-learning" className="block">
              <div className="flex flex-col gap-4 p-6 bg-card rounded-xl border border-border/50 opacity-0 animate-appear delay-100 transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <h3 className="text-xl font-semibold">Personalized Learning Paths</h3>
                <p className="text-muted-foreground">
                  AI-powered schedules tailored to your strengths and exam goals.
                </p>
                <div className="mt-auto pt-4">
                  <Button variant="ghost" className="group flex items-center gap-2 p-0 h-auto">
                    <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Feature 2 - Real Exam Simulations & Mock Tests */}
            <Link href="/feature/exam-simulation" className="block">
              <div className="flex flex-col gap-4 p-6 bg-card rounded-xl border border-border/50 opacity-0 animate-appear delay-200 transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <h3 className="text-xl font-semibold">Real Exam Simulations & Mock Tests</h3>
                <p className="text-muted-foreground">
                  Mock tests that replicate the real exam experience for confidence.
                </p>
                <div className="mt-auto pt-4">
                  <Button variant="ghost" className="group flex items-center gap-2 p-0 h-auto">
                    <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Feature 3 - Live Expert-Led Classes */}
            <Link href="/feature/live-classes" className="block">
              <div className="flex flex-col gap-4 p-6 bg-card rounded-xl border border-border/50 opacity-0 animate-appear delay-300 transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                <h3 className="text-xl font-semibold">Live Expert-Led Classes</h3>
                <p className="text-muted-foreground">
                  Interactive sessions with industry mentors for deep learning.
                </p>
                <div className="mt-auto pt-4">
                  <Button variant="ghost" className="group flex items-center gap-2 p-0 h-auto">
                    <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Feature 4 - Self-Assessment & Performance Analytics */}
            <Link href="/feature/self-assessment" className="block">
              <div className="flex flex-col gap-4 p-6 bg-card rounded-xl border border-border/50 opacity-0 animate-appear delay-400 transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <h3 className="text-xl font-semibold">Self-Assessment & Performance Analytics</h3>
                <p className="text-muted-foreground">
                  Track progress with detailed reports and performance insights.
                </p>
                <div className="mt-auto pt-4">
                  <Button variant="ghost" className="group flex items-center gap-2 p-0 h-auto">
                    <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Feature 5 - Engaged Learning Community */}
            <Link href="/feature/learning-community" className="block">
              <div className="flex flex-col gap-4 p-6 bg-card rounded-xl border border-border/50 opacity-0 animate-appear delay-500 transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                <h3 className="text-xl font-semibold">Engaged Learning Community</h3>
                <p className="text-muted-foreground">
                  Collaborate, share strategies, and stay motivated with peers.
                </p>
                <div className="mt-auto pt-4">
                  <Button variant="ghost" className="group flex items-center gap-2 p-0 h-auto">
                    <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Feature 6 - Offline Access Anywhere */}
            <Link href="/feature/offline-access" className="block">
              <div className="flex flex-col gap-4 p-6 bg-card rounded-xl border border-border/50 opacity-0 animate-appear delay-600 transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                <h3 className="text-xl font-semibold">Offline Access Anywhere</h3>
                <p className="text-muted-foreground">
                  Download classes and notes to study anytime, anywhere, even without the internet.
                </p>
                <div className="mt-auto pt-4">
                  <Button variant="ghost" className="group flex items-center gap-2 p-0 h-auto">
                    <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}