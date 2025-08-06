import { Section } from "../../ui/section";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon, MinusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={className} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "text-md mb-3 flex flex-1 items-center justify-between rounded-lg px-4 py-4 text-left font-medium shadow-md transition-all hover:text-accent-foreground group",
        className,
      )}
      {...props}
    >
      {children}
      <div className="rounded-full bg-input/30 p-2 dark:bg-muted/50 group-data-[state=open]:bg-[#002E2E] group-data-[state=open]:text-white">
        <PlusIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:hidden" />
        <MinusIcon className="h-4 w-4 shrink-0 text-white transition-transform duration-200 hidden group-data-[state=open]:block" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-4 pb-5 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export default function ExamlyFAQ() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col md:flex-row md:items-start gap-12">
          <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold sm:text-5xl mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-md max-w-[580px] text-muted-foreground">
            As a leading exam preparation platform, we are dedicated to providing comprehensive study resources and expert guidance to help students achieve their CPA, CMA, ACCA, and EA goals.
          </p>
        </div>
        <div className="md:w-1/2">
          <Accordion type="single" collapsible className="w-full">
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
                  Yes, Examly provides comprehensive study materials for all exam sections, including practice questions, video lectures, and detailed explanations to help you master every topic.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I access classes offline?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[580px] text-muted-foreground">
                  Yes, Examly allows you to download lectures and study materials for offline access, ensuring you can continue your exam preparation even without an internet connection.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                How are doubt-solving sessions conducted?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[580px] text-muted-foreground">
                  Doubt-solving sessions are conducted through live interactive webinars with expert instructors who address your specific questions and provide detailed explanations to help clarify complex concepts.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
      
      </div>
    </Section>
  );
}