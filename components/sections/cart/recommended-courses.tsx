/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Course {
  id: string;
  name: string;
  description: string;
  price: number;
}

export function RecommendedCourses() {
  const recommendedCourses: Course[] = [
    {
      id: "cma-complete",
      name: "CMA Complete Course",
      description: "Comprehensive CMA exam preparation",
      price: 999
    },
    {
      id: "cpa-essential",
      name: "CPA Essential Package",
      description: "Essential CPA exam materials",
      price: 899
    },
    {
      id: "ea-premium",
      name: "EA Premium Bundle",
      description: "Premium EA exam preparation package",
      price: 799
    }
  ];

  const [addedItems, setAddedItems] = useState<string[]>([]);

  useEffect(() => {
    const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
    const addedNames = guestCart.map((item: any) => item.name);
    setAddedItems(addedNames);
  }, []);

  const handleAddToCart = (course: Course) => {
    const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
    
    // Check if item is already in cart
    if (addedItems.includes(course.name)) {
      return;
    }
    
    const newItem = {
      name: course.name,
      price: course.price,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem("guestCart", JSON.stringify([...guestCart, newItem]));
    setAddedItems([...addedItems, course.name]);
    window.dispatchEvent(new CustomEvent("cartUpdated"));
    toast.success("Added to cart");
  };

  return (
    <section className="mt-12 py-8 border-t">
      <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
      <div className="grid grid-flow-col auto-cols-[280px] gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        {recommendedCourses.map((course) => (
          <Card 
            key={course.id} 
            className="h-[200px] flex flex-col justify-between bg-card hover:bg-card/80 transition-colors"
          >
            <div className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{course.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{course.description}</p>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-medium">${course.price}</span>
                <Button
                  onClick={() => handleAddToCart(course)}
                  variant={addedItems.includes(course.name) ? "default" : "outline"}
                  size="sm"
                  className={addedItems.includes(course.name) ? "bg-primary text-primary-foreground cursor-default" : "hover:bg-primary hover:text-primary-foreground"}
                  disabled={addedItems.includes(course.name)}
                >
                  {addedItems.includes(course.name) ? "Added to cart" : "Add to Cart"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}