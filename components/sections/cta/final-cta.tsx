import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";

export default function FinalCTA() {
  return (
    <Section className="py-16 sm:py-20">
      <div className="mx-auto max-w-container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand/10 via-brand-emerald/20 to-brand-fire/10 px-6 py-16 sm:px-12 sm:py-20">
          {/* Subtle glow effects */}
          <div className="absolute -top-24 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 h-[300px] w-[500px] rounded-full bg-brand-fire/10 blur-3xl" />
          
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            {/* Headline */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Join 50,000+ Professionals Preparing with Examly
            </h2>
            
            {/* Spacer */}
            <div className="mt-8"></div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
              {/* Primary CTA */}
              <Button 
                size="lg" 
                className={cn(
                  "w-full sm:w-auto px-8 py-6 h-auto text-base font-semibold",
                  "bg-brand hover:bg-brand/90 text-white",
                  "shadow-lg hover:shadow-xl transition-all duration-300",
                  "rounded-xl"
                )}
              >
                Start Your Free Trial
              </Button>
              
              {/* Secondary CTA */}
              <Button 
                variant="outline" 
                size="lg" 
                className={cn(
                  "w-full sm:w-auto px-8 py-6 h-auto text-base font-semibold",
                  "border-2 border-muted-foreground/20 hover:bg-muted/50",
                  "rounded-xl"
                )}
              >
                Schedule a Demo
              </Button>
            </div>
            
            {/* Microcopy */}
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}