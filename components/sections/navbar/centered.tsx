/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, ShoppingCart } from "lucide-react";
import Navigation from "../../ui/navigation";
import { Button, type ButtonProps } from "../../ui/button";
import { Badge } from "../../ui/badge";
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
      text: "",
      href: "/cart",
      isButton: true,
      variant: "outline",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
   
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Update cart count when component mounts and when localStorage changes
    const updateCartCount = () => {
      const cart = localStorage.getItem('guestCart');
      const cartItems = cart ? JSON.parse(cart) : [];
      setCartCount(cartItems.length);
    };

    // Initial count
    updateCartCount();

    // Listen for storage changes
    window.addEventListener('storage', updateCartCount);
    
    // Custom event listener for cart updates
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-container p-2">
          <NavbarComponent className="p-2 flex items-center justify-between">
            <NavbarLeft>
              <Link href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
                {logo}
              </Link>
            </NavbarLeft>
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="bg-background/30 border-border dark:border-border/15 rounded-xl border p-2 backdrop-blur-lg">
                {customNavigation || <Navigation />}
              </div>
            </div>
            <NavbarRight className="flex items-center gap-4">
              {actions.map((action, index) =>
                action.isButton ? (
                  <Link 
                    key={index} 
                    href={action.href} 
                    className="inline-flex relative"
                  >
                    <Button variant={action.variant || "default"}>
                      {action.icon}
                      {action.text}
                      {action.iconRight}
                    </Button>
                    {action.href === '/cart' && cartCount > 0 && (
                      <Badge 
                        variant="default" 
                        className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground font-medium"
                      >
                        {cartCount}
                      </Badge>
                    )}
                  </Link>
                ) : (
                  <Link
                    key={index}
                    href={action.href}
                    className="hidden text-sm md:block"
                  >
                    {action.text}
                  </Link>
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
                <SheetContent side="right" className="!p-0">
                  <nav className="grid gap-6 text-lg font-medium p-6 pt-16">
                    {/* Mobile menu content */}
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
                          <Link href="/cma" className="text-muted-foreground hover:text-foreground">
                            CMA Exam Prep
                          </Link>
                          <Link href="/cpa" className="text-muted-foreground hover:text-foreground">
                            CPA Exam Prep
                          </Link>
                          <Link href="/ea" className="text-muted-foreground hover:text-foreground">
                            EA Exam Prep
                          </Link>
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
                          <Link href="/feature/personalized-learning" className="text-muted-foreground hover:text-foreground">
                            Personalized Learning Paths
                          </Link>
                          <Link href="/feature/exam-simulation" className="text-muted-foreground hover:text-foreground">
                            Real Exam Simulations
                          </Link>
                          <Link href="/feature/self-assessment" className="text-muted-foreground hover:text-foreground">
                            Self-Assessment & Analytics
                          </Link>
                          <Link href="/feature/offline-access" className="text-muted-foreground hover:text-foreground">
                            Offline Access Anywhere
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Solutions For Section */}
                    <div className="space-y-4">
                      <button 
                        onClick={() => toggleSection('solutions')} 
                        className="flex items-center justify-between w-full font-semibold"
                      >
                        <span>Solutions For</span>
                        <span className="text-sm">{openSection === 'solutions' ? '−' : '+'}</span>
                      </button>
                      {openSection === 'solutions' && (
                        <div className="grid gap-3 pl-3">
                          <div className="space-y-1">
                            <Link href="/become-reseller" className="text-muted-foreground hover:text-foreground block font-medium">
                              For Resellers
                            </Link>
                            <p className="text-sm text-muted-foreground">Partner with us to resell our exam prep solutions</p>
                          </div>
                          <div className="space-y-1">
                            <Link href="/become-partner" className="text-muted-foreground hover:text-foreground block font-medium">
                              For Partners
                            </Link>
                            <p className="text-sm text-muted-foreground">Collaborate to create and deliver exam content</p>
                          </div>
                          <div className="space-y-1">
                            <Link href="/become-institute-partner" className="text-muted-foreground hover:text-foreground block font-medium">
                              For Institutes
                            </Link>
                            <p className="text-sm text-muted-foreground">Empower your students with our exam prep platform</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <Link href="/why-examly" className="text-foreground hover:text-foreground">
                      Why Examly
                    </Link>
                 
                  </nav>
                </SheetContent>
              </Sheet>
            </NavbarRight>
          </NavbarComponent>
        </div>
      </div>
      <div className="h-[72px]"></div>
    </>
  );
}
