"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { 
  Calendar, 
  Clock, 
  PhoneCall, 
  Mail, 
  Building2, 
  ArrowRight,
  CheckCircle,
  CalendarClock
} from "lucide-react";

export default function PartnerDemoScheduler() {
  const pathname = usePathname();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    institute: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log("Form submitted:", formState);
    setSubmitted(true);
  };

  return (
    <Section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-brand-electro/5 to-background" />
      <div className="absolute top-20 right-10 w-20 h-20 bg-brand-electro/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand/10 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="container mx-auto max-w-container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 bg-brand-electro/10 border-brand-electro/20 text-brand-electro">
            <CalendarClock className="w-4 h-4 mr-2" />
            Live Demo Scheduler
          </Badge>
          <h2 className="text-balance text-3xl font-semibold sm:text-5xl mb-6">
            See <span className="text-brand-electro">Examly</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {pathname === "/become-reseller/"
              ? "Connect with our reseller team and discover how Examly can expand your business reach"
              : pathname === "/become-institute-partner/"
                ? "Speak with our institute success team and see how Examly can enhance your educational offerings"
                : "Talk to our partner success team and see how Examly can transform your coaching"}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Form */}
          <Card className="p-6 md:p-8 border-2 border-brand-electro/20 shadow-lg overflow-hidden relative">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto bg-brand-emerald/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-brand-emerald" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Request Received!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest. Our partner success team will contact you shortly to schedule your personalized demo.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="border-brand-electro/50 text-brand-electro hover:bg-brand-electro/10"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-input focus-visible:ring-brand-electro"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="border-input focus-visible:ring-brand-electro"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="border-input focus-visible:ring-brand-electro"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="institute" className="text-sm font-medium text-foreground">
                      Institute Name
                    </label>
                    <Input
                      id="institute"
                      name="institute"
                      value={formState.institute}
                      onChange={handleChange}
                      placeholder="Your Coaching Institute"
                      required
                      className="border-input focus-visible:ring-brand-electro"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="preferredDate" className="text-sm font-medium text-foreground">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formState.preferredDate}
                        onChange={handleChange}
                        className="border-input focus-visible:ring-brand-electro pl-10"
                      />
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="preferredTime" className="text-sm font-medium text-foreground">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <Input
                        id="preferredTime"
                        name="preferredTime"
                        type="time"
                        value={formState.preferredTime}
                        onChange={handleChange}
                        className="border-input focus-visible:ring-brand-electro pl-10"
                      />
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your specific requirements or questions"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electro focus-visible:ring-offset-2"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-brand-electro/90 text-white"
                >
                  Schedule My Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            )}
            
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand-electro rounded-full animate-pulse" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-brand rounded-full animate-pulse delay-500" />
          </Card>
          
          {/* Right column - Info */}
          <div className="space-y-8">
            <div className="bg-brand/5 border border-brand/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand" />
                Why Schedule a Demo?
              </h3>
              
              <ul className="space-y-4">
                {[
                  "See the complete partner dashboard in action",
                  "Get personalized answers to your specific questions",
                  "Learn how other coaching institutes are succeeding with Examly",
                  "Discover integration options with your existing systems"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-brand"></div>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-brand-electro/5 border border-brand-electro/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-brand-electro" />
                Contact Us Directly
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-electro/10 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-brand-electro" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us at</p>
                    <p className="font-medium">(855) 925-3699</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-electro/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-electro" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us at</p>
                    <p className="font-medium">
                      {pathname === "/become-reseller/"
                        ? "resellers@myexamly.com"
                        : pathname === "/become-institute-partner/"
                          ? "institutes@myexamly.com"
                          : "partners@myexamly.com"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}