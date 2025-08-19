"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Check } from "lucide-react";
import Link from "next/link";

export function CheckoutForm({ onContinue }: { onContinue: () => void }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: ""
  });
  const [validation, setValidation] = useState({
    firstName: false,
    lastName: false,
    email: false,
    country: false,
    phone: false
  });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "firstName":
      case "lastName":
      case "country":
        return value.length >= 2;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "phone":
        return /^[0-9]{10}$/.test(value);
      default:
        return false;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setValidation(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!Object.values(validation).every(Boolean)) {
      toast.error("Please fill all fields correctly");
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onContinue(); // This will navigate to payment page
    }, 1000);
  };

  return (
    <div className="bg-card border rounded-lg p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Customer Information</h2>
        <Link href="/sign-in" className="text-sm text-primary hover:underline">
          Already have an account? Sign In
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">First Name</label>
            <div className="relative">
              <Input 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="John"
                required
                className="pr-10"
                autoComplete="given-name"
              />
              {validation.firstName && (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Last Name</label>
            <div className="relative">
              <Input 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Doe"
                required
                className="pr-10"
                autoComplete="family-name"
              />
              {validation.lastName && (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address</label>
          <div className="relative">
            <Input 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              required
              className="pr-10"
              autoComplete="email"
            />
            {validation.email && (
              <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Country</label>
          <div className="relative">
            <Input 
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Your Country"
              required
              className="pr-10"
              autoComplete="country-name"
            />
            {validation.country && (
              <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Phone Number</label>
          <div className="relative">
            <Input 
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="1234567890"
              required
              className="pr-10"
              autoComplete="tel"
            />
            {validation.phone && (
              <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
            )}
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          size="lg"
          disabled={loading || !Object.values(validation).every(Boolean)}
        >
          {loading ? (
            <>
              <span className="mr-2">Processing</span>
              <div className="h-4 w-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
            </>
          ) : (
            "Continue to Payment"
          )}
        </Button>
      </form>
    </div>
  );
}