import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import Image from "next/image";

export default function ExamlyCTA() {
  return (
    <div className="mx-auto max-w-container">
    <Section className="group relative overflow-hidden py-4 md:py-8 rounded-xl" style={{ padding: 0 }}>
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/bg.svg" 
          alt="Background" 
          fill 
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8 py-16 md:py-24">
        <h2 className="text-3xl font-semibold sm:text-5xl text-white opacity-0 animate-appear">
          Examly has no limitations - only possibilities.
        </h2>
        <p className="text-md max-w-[650px] font-medium text-white/80 opacity-0 animate-appear delay-100">
          Step forward into your future with smart learning, expert guidance, and AI-powered prep.
          <br />
          Get started on your success journey with Examly today!
        </p>
        <div className="mt-4 opacity-0 animate-appear delay-200">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-white text-[#002E2E] hover:bg-white/90 rounded-full px-8"
          >
            Try it for free
          </Button>
        </div>
      </div>
    </Section>
    </div>
  );
}