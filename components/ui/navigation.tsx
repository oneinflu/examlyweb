"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import LaunchUI from "../logos/launch-ui";
import { Handshake } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Personalized Learning Paths",
    href: "/feature/personalized-learning",
    description:
      "AI-powered schedules tailored to your strengths and exam goals.",
  },
  {
    title: "Real Exam Simulations",
    href: "/feature/exam-simulation",
    description:
      "Mock tests that replicate the real exam experience for confidence.",
  },
  
  {
    title: "Self-Assessment & Analytics",
    href: "/feature/self-assessment",
    description: "Track progress with detailed reports and performance insights.",
  },
  
  {
    title: "Offline Access Anywhere",
    href: "/feature/offline-access",
    description:
      "Download classes and notes to study anytime, anywhere, even without the internet.",
  },
];

export default function Navigation() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
           <NavigationMenuItem>
          <NavigationMenuLink href="/why-examly" className={navigationMenuTriggerStyle()}>
            Why Examly
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Exam Prep</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/30 to-muted/10 p-6 no-underline outline-none focus:shadow-md"
                    href=""
                  >
                    <LaunchUI />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Examly
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Examly is a smart exam prep platform with adaptive tests and real-time insights.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              
              <ListItem href="/cma" title="CMA Exam Prep">
                Ace the CMA exam with smart, focused prep.
              </ListItem>
              <ListItem href="/cpa" title="CPA Exam Prep">
                Ace the CPA exam with smart, focused prep.
              </ListItem>
              <ListItem href="/ea" title="EA Exam Prep">
                Ace the EA exam with smart, focused prep.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       <NavigationMenuItem>
  <NavigationMenuTrigger>Solutions For</NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/30 to-muted/10 p-6 no-underline outline-none focus:shadow-md"
            href=""
          >
           <div className="flex items-center justify-center">
                      <Handshake className="h-12 w-12 text-brand animate-bounce" />
                    </div>
            <div className="mb-2 mt-4 text-lg font-medium">
              Solutions
            </div>
            <p className="text-sm leading-tight text-muted-foreground">
              Tailored solutions for different types of partners and institutions.
            </p>
          </a>
        </NavigationMenuLink>
      </li>
      <ListItem
        title="For Resellers"
        href="/become-reseller"
      >
        Partner with us to resell our exam prep solutions
      </ListItem>
      <ListItem
        title="For Partners"
        href="/become-partner"
      >
        Collaborate to create and deliver exam content
      </ListItem>
      <ListItem
        title="For Institutes"
        href="/become-institute-partner"
      >
        Empower your students with our exam prep platform
      </ListItem>
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>
      
      
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
