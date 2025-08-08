/* eslint-disable @next/next/no-html-link-for-pages */
import Navbar from "@/components/sections/navbar/centered";
import FooterSection from "@/components/sections/footer/5-columns";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check, X, AlertTriangle, Link } from "lucide-react";

export default function WhyExamly() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10 border-primary/20 text-primary">
              Why Choose Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Examly Is Your Best Choice
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              We&apos;ve reimagined exam preparation with cutting-edge technology and expert-led content to help you succeed on your first attempt.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Mission Section */}
      <Section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Examly, we believe that exam preparation should be personalized, efficient, and effective. Our mission is to empower accounting and finance professionals to achieve certification success through innovative learning technology.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We&apos;re committed to providing the most comprehensive and up-to-date study materials for CPA, CMA, and EA exams, designed by industry experts who understand what it takes to pass.
              </p>
              <Button size="lg" className="mt-4">Explore Our Courses</Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image 
                src="/why.png" 
                alt="Examly Mission" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Key Benefits Section */}
      <Section className="py-16">
        <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our unique approach combines technology, expertise, and personalization to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-all">
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Learning</h3>
              <p className="text-muted-foreground">
                Our adaptive learning system identifies your strengths and weaknesses to create a personalized study plan that evolves as you progress.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-all">
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-presentation"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert-Led Content</h3>
              <p className="text-muted-foreground">
                All our materials are created by industry professionals with decades of experience in accounting, finance, and exam preparation.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-all">
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Realistic Simulations</h3>
              <p className="text-muted-foreground">
                Practice with exam simulations that mirror the actual test environment, including timing, format, and question types.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-all">
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
              <p className="text-muted-foreground">
                Track your progress with comprehensive performance metrics that show exactly where you need to focus your study time.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Comparison Table Section */}
      <Section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10 border-primary/20 text-primary">
              Comparison
            </Badge>
            <h2 className="text-3xl font-bold mb-4">How We Compare</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See why Examly stands out from other exam preparation providers
            </p>
          </div>
          
          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-xl border border-border/50 bg-card shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="p-4 text-left font-semibold text-lg">Feature / Benefit</th>
                  <th className="p-4 text-center font-semibold text-lg bg-primary/5 border-x border-border/50">
                    <div className="flex flex-col items-center">
                      <span className="text-primary">Examly</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-semibold text-lg">
                    <div className="flex flex-col items-center">
                      <span>Becker</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-semibold text-lg">
                    <div className="flex flex-col items-center">
                      <span>Gleim</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-semibold text-lg">
                    <div className="flex flex-col items-center">
                      <span>UWorld</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Pricing Row */}
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Pricing</td>
                  <td className="p-4 text-center bg-primary/5 border-x border-border/50">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="mt-1 text-sm text-green-600 dark:text-green-400 font-medium">Best value, flexible plans</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/30">
                        <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">High upfront costs</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Moderate pricing</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/30">
                        <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Premium pricing</span>
                    </div>
                  </td>
                </tr>
                
                {/* Personalized Learning Paths Row */}
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Personalized Learning Paths</td>
                  <td className="p-4 text-center bg-primary/5 border-x border-border/50">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="mt-1 text-sm text-green-600 dark:text-green-400 font-medium">AI-driven & adaptive</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/30">
                        <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Static, less flexible</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Limited customization</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Some adaptive features</span>
                    </div>
                  </td>
                </tr>
                
                {/* Exam Simulations Row */}
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Exam Simulations</td>
                  <td className="p-4 text-center bg-primary/5 border-x border-border/50">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="mt-1 text-sm text-green-600 dark:text-green-400 font-medium">Full-length, realistic, task-based + essay</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/30">
                        <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Basic simulations, no essays</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Good but limited essay prep</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Strong MCQ focus</span>
                    </div>
                  </td>
                </tr>
                
                {/* Live Expert-Led Classes Row */}
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Live Expert-Led Classes</td>
                  <td className="p-4 text-center bg-primary/5 border-x border-border/50">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="mt-1 text-sm text-green-600 dark:text-green-400 font-medium">Included, interactive & frequent</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/30">
                        <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Extra cost, limited sessions</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Few live classes</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/30">
                        <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Mostly self-study</span>
                    </div>
                  </td>
                </tr>
                
                {/* Offline Access Row */}
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Offline Access Anywhere</td>
                  <td className="p-4 text-center bg-primary/5 border-x border-border/50">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="mt-1 text-sm text-green-600 dark:text-green-400 font-medium">Full offline mode on mobile</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/30">
                        <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">No offline support</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Partial offline content</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Limited offline</span>
                    </div>
                  </td>
                </tr>
                
                {/* Self-Assessment Row */}
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Self-Assessment & Analytics</td>
                  <td className="p-4 text-center bg-primary/5 border-x border-border/50">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="mt-1 text-sm text-green-600 dark:text-green-400 font-medium">Deep insights & AI recommendations</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Basic reports</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Reports with limited insights</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Good analytics, no AI</span>
                    </div>
                  </td>
                </tr>
                
                {/* Customer Support Row */}
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Customer Support</td>
                  <td className="p-4 text-center bg-primary/5 border-x border-border/50">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="mt-1 text-sm text-green-600 dark:text-green-400 font-medium">24/7 live chat & phone support</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Business hours only</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Email support</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/30">
                        <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">Limited live support</span>
                    </div>
                  </td>
                </tr>
                
                {/* Money-Back Guarantee Row */}
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Money-Back Guarantee</td>
                  <td className="p-4 text-center bg-primary/5 border-x border-border/50">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="mt-1 text-sm text-green-600 dark:text-green-400 font-medium">30-day full refund</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/30">
                        <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">14-day limited refund</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">30-day refund</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/30">
                        <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="mt-1 text-sm text-muted-foreground">7-day refund</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              See Our Plans
            </Button>
          </div>
        </div>
      </Section>
      
      {/* Success Stories Section */}
      <Section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of professionals who have achieved certification success with Examly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-semibold">Jennifer S.</h4>
                  <p className="text-sm text-muted-foreground">CPA, Passed on first attempt</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                &quot;Examly&apos;s adaptive learning system helped me focus on my weak areas and saved me countless hours of study time. I passed all four CPA exams on my first try!&quot;
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl mr-4">
                  MR
                </div>
                <div>
                  <h4 className="font-semibold">Michael R.</h4>
                  <p className="text-sm text-muted-foreground">CMA, Passed both parts</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                &quot;The realistic exam simulations were game-changers for me. They prepared me mentally and technically for the actual CMA exam environment.&quot;
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl mr-4">
                  AT
                </div>
                <div>
                  <h4 className="font-semibold">Alicia T.</h4>
                  <p className="text-sm text-muted-foreground">EA, Passed all three parts</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                &quot;As a working professional, I needed flexibility. Examly&apos;s mobile app allowed me to study anywhere, anytime, and the expert-led content made complex tax concepts easy to understand.&quot;
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="py-16">
        <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join thousands of successful candidates who have passed their exams with Examly&apos;s comprehensive preparation programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                
                  <a className="btn btn-primary btn-lg" href="/cpa">Explore CPA Prep </a>
                
              </Button>
              <Button size="lg" variant="outline" asChild>
                 <a className="btn btn-info btn-lg" href="/cma">Explore CMA Prep </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                 <a className="btn btn-info btn-lg" href="/ea">Explore EA Prep </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>
      
      <FooterSection />
    </>
  );
}