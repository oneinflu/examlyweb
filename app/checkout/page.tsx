/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { CheckoutForm } from "@/components/sections/checkout/checkout-form";
import { PaymentForm } from "@/components/sections/checkout/payment-form";
import Navbar from "@/components/sections/navbar/centered";
import FooterSection from "@/components/sections/footer/5-columns";
import { CheckoutProgress } from "@/components/sections/cart/checkout-progress";

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<'checkout' | 'payment'>('checkout');

  const handleContinueToPayment = () => {
    setCurrentStep('payment');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Section className="py-12">
          <div className="container mx-auto max-w-5xl px-4 space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight">
                {currentStep === 'checkout' ? 'Checkout Details' : 'Payment Information'}
              </h1>
              <CheckoutProgress currentStep={currentStep} />
            </div>
            
            <div className="w-full">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                {currentStep === 'checkout' ? (
                  <CheckoutForm onContinue={handleContinueToPayment} />
                ) : (
                  <PaymentForm />
                )}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <FooterSection />
    </div>
  );
}