import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface FreeTrial {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FreeTrialModal({ open, onOpenChange }: FreeTrial) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "CPA" // Default value
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Close modal after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onOpenChange(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "CPA"
      });
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Start Your Free Trial</DialogTitle>
              <DialogDescription>
                Fill out the form below to begin your learning journey.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="course" className="text-sm font-medium">Select Course</label>
                <select
                  id="course"
                  className="w-full px-3 py-2 border rounded-md"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  required
                >
                  <option value="CPA">CPA</option>
                  <option value="CMA">CMA</option>
                  <option value="EA">EA</option>
                </select>
              </div>
              <Button type="submit" className="w-full mt-6">
                Start Free Trial
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
            </div>
            <DialogTitle className="text-2xl font-bold text-green-500 mb-2">
              Success!
            </DialogTitle>
            <DialogDescription className="text-lg">
              Thank you for your interest! We have sent the credentials to your email. Please check your inbox.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}