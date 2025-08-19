"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface OrderSummaryProps {
  subtotal: number;
  discount?: number;
  shippingCost?: number;
  tax?: number;
}

export function OrderSummary({
  subtotal,
  discount = 0,
  shippingCost = 0,
  tax = 0,
}: OrderSummaryProps) {
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(discount);

  const total = subtotal - appliedDiscount + shippingCost + tax;

  const handleApplyPromo = () => {
    if (!promoCode) {
      toast.error("Please enter a promo code");
      return;
    }
    // Here you would typically validate the promo code with your backend
    // For now, we'll simulate a 10% discount
    const newDiscount = subtotal * 0.1;
    setAppliedDiscount(newDiscount);
    toast.success("Promo code applied successfully!");
    setIsPromoOpen(false);
  };

  return (
    <div className="sticky top-24 rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      
      <div className="mt-6 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {appliedDiscount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Discount</span>
            <span className="text-green-600">-${appliedDiscount.toFixed(2)}</span>
          </div>
        )}

        {shippingCost > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="pt-4">
          <button
            onClick={() => setIsPromoOpen(!isPromoOpen)}
            className="flex w-full items-center justify-between text-sm text-muted-foreground hover:text-foreground"
          >
            <span>Add Promo Code</span>
            {isPromoOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          {isPromoOpen && (
            <div className="mt-4 flex gap-2">
              <Input
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleApplyPromo}>Apply</Button>
            </div>
          )}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between">
            <span className="text-base font-medium">Total</span>
            <span className="text-base font-medium">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <Link href="/checkout" className="block w-full">
          <Button className="w-full" size="lg">
            Proceed to Checkout
          </Button>
        </Link>
        <Link href="/" className="block w-full">
          <Button
            variant="outline"
            className="w-full"
            size="lg"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}