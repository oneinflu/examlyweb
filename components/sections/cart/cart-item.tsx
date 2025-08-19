"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, Crown, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Import CartItemType from cart-items-list
import { CartItemType } from "./cart-items-list";

interface CartItemProps {
  id: string;
  name: string;
  course: string;
  price: number;
  originalPrice?: number;
  type: "essential" | "pro" | "premium";
  onRemove: (id: string) => CartItemType | undefined;
  onUndo: (removedItem: CartItemType) => void;
}

const typeConfig = {
  essential: {
    icon: Star,
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  pro: {
    icon: Crown,
    bgColor: "bg-primary/20",
    iconColor: "text-primary"
  },
  premium: {
    icon: Sparkles,
    bgColor: "bg-primary/30",
    iconColor: "text-primary"
  }
};

export function CartItem({
  id,
  name,
  price,
  type = "essential",
  onRemove,
  onUndo,
}: CartItemProps) {
  const [isRemoving, setIsRemoving] = useState(false);
  const { icon: TypeIcon, bgColor, iconColor } = typeConfig[type];

  const handleRemove = () => {
    setIsRemoving(true);
    const removedItem = onRemove(id);
    if (removedItem) {
      toast("Item removed", {
        description: "Click here to undo",
        action: {
          label: "Undo",
          onClick: () => {
            setIsRemoving(false);
            onUndo(removedItem);
          },
        },
      });
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-xl border border-border/50 bg-card hover:bg-muted/50 hover:border-primary/20 transition-all ${isRemoving ? 'opacity-50' : ''}`}>
      <div className="p-6 flex gap-6">
        <div className={`relative h-16 w-16 flex-shrink-0 rounded-xl ${bgColor} flex items-center justify-center group-hover:scale-105 transition-transform ring-1 ring-primary/5`}>
          <TypeIcon className={`h-6 w-6 ${iconColor}`} />
        </div>

        <div className="flex flex-1 flex-col min-w-0">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-medium truncate hover:text-primary transition-colors">{name}</h3>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 -mr-2"
              onClick={handleRemove}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              QTY: 1
            </div>
            <span className="text-lg font-semibold text-primary">
              ${(price || 0).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}