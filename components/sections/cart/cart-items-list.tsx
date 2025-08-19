/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { CartItem } from "./cart-item";

export interface CartItemType {
  id: string;
  name: string;
  course: string;
  price: number;
  originalPrice?: number;
  quantity: number;
}

export function CartItemsList() {
  const [items, setItems] = useState<CartItemType[]>([]);

  // Add function to load cart items
  const loadCartItems = () => {
    const cart = localStorage.getItem('guestCart');
    if (cart) {
      const cartItems = JSON.parse(cart);
      setItems(cartItems.map((item: any, index: number) => ({
        id: `${index}-${item.addedAt}`,
        name: item.name,
        course: item.course,
        price: parseFloat(item.price),
        quantity: 1
      })));
    }
  };

  useEffect(() => {
    loadCartItems();
    // Add event listener for cart updates
    window.addEventListener('cartUpdated', loadCartItems);
    return () => window.removeEventListener('cartUpdated', loadCartItems);
  }, []);

  const handleRemove = (id: string) => {
    const removedItem = items.find(item => item.id === id);
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    
    // Update localStorage
    const cart = localStorage.getItem('guestCart');
    if (cart) {
      const cartItems = JSON.parse(cart);
      const updatedCart = cartItems.filter((item: any) => 
        `${cartItems.indexOf(item)}-${item.addedAt}` !== id
      );
      localStorage.setItem('guestCart', JSON.stringify(updatedCart));
    }
    
    // Dispatch event for cart count update
    window.dispatchEvent(new Event('cartUpdated'));
    
    return removedItem; // Return removed item for undo
  };

  const handleUndo = (removedItem: CartItemType) => {
    const cart = localStorage.getItem('guestCart');
    const cartItems = cart ? JSON.parse(cart) : [];
    
    // Add item back to localStorage
    cartItems.push({
      name: removedItem.name,
      course: removedItem.course,
      price: removedItem.price,
      addedAt: removedItem.id.split('-')[1] // Get original addedAt timestamp
    });
    
    localStorage.setItem('guestCart', JSON.stringify(cartItems));
    loadCartItems(); // Reload items
    window.dispatchEvent(new Event('cartUpdated'));
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="divide-y">
      {items.map(item => (
        <CartItem
          type={"essential"}
          key={item.id}
          {...item}
          onRemove={handleRemove}
          onUndo={handleUndo}
        />
      ))}    
    </div>
  );
}