/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Navbar from "@/components/sections/navbar/centered";
import FooterSection from "@/components/sections/footer/5-columns";
import { Section } from "@/components/ui/section";
import { CartHeader } from "@/components/sections/cart/cart-header";
import { CheckoutProgress } from "@/components/sections/cart/checkout-progress";
import { CartItemsList } from "@/components/sections/cart/cart-items-list";
import { useEffect, useState } from "react";
import { OrderSummary } from "@/components/sections/cart/order-summary";
import { RecommendedCourses } from "@/components/sections/cart/recommended-courses";
import { TrustAssurance } from "@/components/sections/cart/trust-assurance";

export default function CartPage() {
  const [subtotal, setSubtotal] = useState(0);

  const calculateSubtotal = () => {
    const cart = localStorage.getItem('guestCart');
    if (cart) {
      const cartItems = JSON.parse(cart);
      const total = cartItems.reduce((sum: number, item: any) => {
        const price = typeof item.price === 'string' 
          ? parseFloat(item.price.replace(/[^0-9.]/g, '')) 
          : item.price;
        return sum + price;
      }, 0);
      setSubtotal(total);
    }
  };

  useEffect(() => {
    calculateSubtotal();
    // Add event listener for cart updates
    window.addEventListener('cartUpdated', calculateSubtotal);
    return () => window.removeEventListener('cartUpdated', calculateSubtotal);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Section className="py-12">
          <div className="container mx-auto max-w-5xl px-4 space-y-8">
            <div className="space-y-6">
              <CartHeader />
              <CheckoutProgress currentStep="cart" />
            </div>
            
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <CartItemsList />
              </div>
              <aside className="mt-8 lg:mt-0 lg:col-span-5">
                <div className="space-y-6 sticky top-4">
                
                  <OrderSummary 
                    subtotal={subtotal}
                    tax={subtotal * 0.1} // Example: 10% tax
                  />
                </div>
              </aside>
            </div>

            
          </div>
        </Section>
      </main>
      <FooterSection />
    </div>
  );
}