"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import LaunchUI from "../../logos/launch-ui";
import Navigation from "../../ui/navigation";
import { Navbar as NavbarComponent, NavbarLeft, NavbarRight } from "../../ui/navbar";

interface NavItem {
  label: string;
  href: string;
  items?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

const navigationItems: NavItem[] = [
  {
    label: "Exam Prep",
    href: "#",
    items: [
      {
        label: "CMA Exam Prep",
        href: "/cma",
        description: "Comprehensive CMA exam preparation",
      },
      {
        label: "CPA Exam Prep",
        href: "/cpa",
        description: "Complete CPA study materials",
      },
      {
        label: "EA Exam Prep",
        href: "/ea",
        description: "Enrolled Agent certification preparation",
      },
    ],
  },
  {
    label: "Features",
    href: "#",
    items: [
      {
        label: "Personalized Learning Paths",
        href: "/feature/personalized-learning",
        description: "Tailored study plans for your success",
      },
      {
        label: "Real Exam Simulations",
        href: "/feature/exam-simulation",
        description: "Practice with exam-like questions",
      },
      {
        label: "Self-Assessment & Analytics",
        href: "/feature/self-assessment",
        description: "Track your progress and performance",
      },
      {
        label: "Offline Access Anywhere",
        href: "/feature/offline-access",
        description: "Study without internet connection",
      },
    ],
  },
  {
    label: "Why Examly",
    href: "/why-examly",
  },
  {
    label: "Become a Partner",
    href: "/become-partner",
  },
];

export function NewHeader() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <header className="absolute top-0 z-50 w-full p-2">
        <div className="mx-auto max-w-container">
          <NavbarComponent className="p-2">
            <NavbarLeft>
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold transition-opacity hover:opacity-80"
              >
                <LaunchUI className="h-8 w-auto" />
                <span>Examly</span>
              </Link>
            </NavbarLeft>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 mx-6">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      openDropdown === item.label
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>

                  {item.items && openDropdown === item.label && (
                    <div className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 rounded-xl border bg-background/80 p-4 shadow-lg backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-200">
                      <div className="grid gap-4">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block space-y-1 rounded-lg p-3 transition-colors hover:bg-muted/50"
                          >
                            <div className="font-medium">{subItem.label}</div>
                            {subItem.description && (
                              <div className="text-sm text-muted-foreground">
                                {subItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <NavbarRight>
              <Button variant="outline" size="icon" asChild>
                <Link href="/cart">
                  <ShoppingCart className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                className="transition-transform hover:scale-105"
                asChild
              >
                <Link href="#">Try for free</Link>
              </Button>

              {/* Mobile Menu */}
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
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                      <span>Examly</span>
                    </Link>

                    {/* Exam Prep Section */}
                    <div className="space-y-4">
                      <button
                        onClick={() => toggleSection('examPrep')}
                        className="flex items-center justify-between w-full font-semibold transition-colors hover:text-foreground"
                      >
                        <span>Exam Prep</span>
                        <span className="text-sm transition-transform duration-200"
                          style={{
                            transform: openSection === 'examPrep' ? 'rotate(0deg)' : 'rotate(90deg)'
                          }}
                        >
                          →
                        </span>
                      </button>
                      <div
                        className={cn(
                          "grid gap-3 pl-3 transition-all duration-200",
                          openSection === 'examPrep' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
                        )}
                      >
                        {navigationItems[0].items?.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Features Section */}
                    <div className="space-y-4">
                      <button
                        onClick={() => toggleSection('features')}
                        className="flex items-center justify-between w-full font-semibold transition-colors hover:text-foreground"
                      >
                        <span>Features</span>
                        <span className="text-sm transition-transform duration-200"
                          style={{
                            transform: openSection === 'features' ? 'rotate(0deg)' : 'rotate(90deg)'
                          }}
                        >
                          →
                        </span>
                      </button>
                      <div
                        className={cn(
                          "grid gap-3 pl-3 transition-all duration-200",
                          openSection === 'features' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
                        )}
                      >
                        {navigationItems[1].items?.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/why-examly"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Why Examly
                    </Link>
                    <Link
                      href="/become-partner"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Become a Partner
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </NavbarRight>
          </NavbarComponent>
        </div>
      </header>

      {/* Secondary Navigation */}
      <div className="max-w-container sticky top-0 z-50 mx-auto hidden items-center justify-center p-3 md:flex">
        <NavbarComponent className="bg-background/30 border-border dark:border-border/15 rounded-xl border p-1 backdrop-blur-lg">
          <Navigation />
        </NavbarComponent>
      </div>
    </>
  );
}