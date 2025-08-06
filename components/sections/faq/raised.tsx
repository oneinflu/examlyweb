import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion-raised";
import Link from "next/link";

export default function FAQ() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-12">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What makes Examly different from other exam prep providers?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                Examly offers AI-driven personalized study plans, real-time exam simulations, expert-led classes, and affordable pricing—up to 40% less than traditional providers like Becker.
              </p>
             
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Does Examly provide study material for all exam sections?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[600px] text-muted-foreground">
                No-code tools lock you into their ecosystem with recurring fees
                and limited control. They often come with performance issues and
                make it difficult to integrate with your product.
              </p>
              
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I access classes offline?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Launch UI stands out with premium design quality and delightful
                touches of custom animations and illustrations.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                All components are carefully crafted to help position your
                product as a professional tool, avoiding the generic template
                look.
              </p>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                Unlike many libraries that rely on outdated CSS practices and
                old dependencies, Launch UI is built with modern technologies
                and best practices in mind.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              How are doubt-solving sessions conducted?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                The basic version of Launch UI is open-source and free forever,
                under a do-whatever-you-want license.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                The pro version that contains more components and options is a
                one-time purchase that gives you lifetime access to all current
                and future content. Use it for unlimited personal and commercial
                projects - no recurring fees or restrictions.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                For complete details about licensing and usage rights, check out{" "}
                <Link href="/pricing" className="text-foreground underline">
                  the pricing page
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

        
        </Accordion>
      </div>
    </Section>
  );
}
