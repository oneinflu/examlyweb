"use client";

import { useEffect, useState } from "react";

export function CartHeader() {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem('guestCart');
    const cartItems = cart ? JSON.parse(cart) : [];
    setCartItemCount(cartItems.length);
  }, []);

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">
        Your Cart {cartItemCount > 0 && (
          <span className="text-muted-foreground">({cartItemCount} {cartItemCount === 1 ? 'Item' : 'Items'})</span>
        )}
      </h1>
    </div>
  );
}