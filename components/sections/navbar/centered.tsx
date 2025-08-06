/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import Navigation from "../../ui/navigation";
import { Button, type ButtonProps } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import LaunchUI from "../../logos/launch-ui";
import Link from "next/link";



interface NavbarActionProps {
  text: string;
  href: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
  logo = <LaunchUI />,
  name = "Examly",
  homeUrl = "/",
  actions = [
    {
      text: "Try for free",
      href: "#",
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <header className={cn("absolute top-0 z-50 w-full p-2", className)}>
        <div className="mx-auto max-w-container">
          <NavbarComponent className="p-2">
            <NavbarLeft>
              
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold"
                 passHref
              >
                
                {logo}
               
              </Link>
            </NavbarLeft>
            <NavbarRight>
              {actions.map((action, index) =>
                action.isButton ? (
                  <Button
                    key={index}
                    variant={action.variant || "default"}
                    asChild
                  >
                    <a href={action.href}>
                      {action.icon}
                      {action.text}
                      {action.iconRight}
                    </a>
                  </Button>
                ) : (
                  <a
                    key={index}
                    href={action.href}
                    className="hidden text-sm md:block"
                  >
                    {action.text}
                  </a>
                ),
              )}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="size-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="grid gap-6 text-lg font-medium">
                    <a
                      href={homeUrl}
                      className="flex items-center gap-2 text-xl font-bold"
                    >
                      <span>{name}</span>
                    </a>
                    
                    {/* Exam Prep Section */}
                    <div className="space-y-4">
                      <button 
                        onClick={() => toggleSection('examPrep')} 
                        className="flex items-center justify-between w-full font-semibold"
                      >
                        <span>Exam Prep</span>
                        <span className="text-sm">{openSection === 'examPrep' ? '−' : '+'}</span>
                      </button>
                      {openSection === 'examPrep' && (
                        <div className="grid gap-3 pl-3">
                          <a href="/cma" className="text-muted-foreground hover:text-foreground">
                            CMA Exam Prep
                          </a>
                          <a href="/cpa" className="text-muted-foreground hover:text-foreground">
                            CPA Exam Prep
                          </a>
                          <a href="/ea" className="text-muted-foreground hover:text-foreground">
                            EA Exam Prep
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Features Section */}
                    <div className="space-y-4">
                      <button 
                        onClick={() => toggleSection('features')} 
                        className="flex items-center justify-between w-full font-semibold"
                      >
                        <span>Features</span>
                        <span className="text-sm">{openSection === 'features' ? '−' : '+'}</span>
                      </button>
                      {openSection === 'features' && (
                        <div className="grid gap-3 pl-3">
                          <a href="/feature/personalized-learning" className="text-muted-foreground hover:text-foreground">
                            Personalized Learning Paths
                          </a>
                          <a href="/feature/exam-simulation" className="text-muted-foreground hover:text-foreground">
                            Real Exam Simulations
                          </a>
                          <a href="/feature/live-classes" className="text-muted-foreground hover:text-foreground">
                            Live Expert-Led Classes
                          </a>
                          <a href="/feature/self-assessment" className="text-muted-foreground hover:text-foreground">
                            Self-Assessment & Analytics
                          </a>
                          <a href="/feature/learning-community" className="text-muted-foreground hover:text-foreground">
                            Engaged Learning Community
                          </a>
                          <a href="/feature/offline-access" className="text-muted-foreground hover:text-foreground">
                            Offline Access Anywhere
                          </a>
                        </div>
                      )}
                    </div>

                    <a href="/" className="text-muted-foreground hover:text-foreground">
                      Resources
                    </a>
                    <a href="/become-partner" className="text-muted-foreground hover:text-foreground">
                      Become a Partner
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </NavbarRight>
          </NavbarComponent>
        </div>
      </header>
      {showNavigation && (
        <div className="max-w-container sticky top-0 z-50 mx-auto hidden items-center justify-center p-3 md:flex">
          <NavbarComponent className="bg-background/30 border-border dark:border-border/15 rounded-xl border p-1 backdrop-blur-lg">
            {customNavigation || <Navigation />}
          </NavbarComponent>
        </div>
      )}
    </>
  );
}
