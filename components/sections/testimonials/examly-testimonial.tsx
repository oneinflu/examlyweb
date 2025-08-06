import { useState } from "react";
import { Section } from "../../ui/section";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Michael Kaizer",
    role: "CEO of Basecamp Corp",
    text: "Examly's structured approach and expert guidance have transformed my preparation. Their AI-driven study plans and real-time simulations made complex topics easy to master. Thanks to their innovative learning methods, I cleared my exam on the first attempt and feel confident in my career growth.",
    image: "/avatars/michael.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Senior Accountant",
    text: "The personalized learning paths and comprehensive practice tests helped me identify my weak areas and focus my study time effectively. Examly's platform made exam preparation engaging and efficient.",
    image: "/avatars/sarah.jpg",
  },
  {
    name: "David Chen",
    role: "Tax Consultant",
    text: "Outstanding platform with excellent content quality. The expert-led sessions and adaptive learning technology made all the difference in my exam success. Highly recommended for serious candidates.",
    image: "/avatars/david.jpg",
  },
];

export default function ExamlyTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section style={{ backgroundColor: '#E8E9E9' }}>
      <div className="mx-auto max-w-container px-4 py-2 max-h-[200px]">
        
        <div className="flex items-start gap-4">
          {/* User Avatar - Left Side */}
          <div className="flex-shrink-0">
            <Avatar className="h-16 w-16">
              <AvatarImage src={currentTestimonial.image} />
              <AvatarFallback>{currentTestimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>

          {/* Testimonial Content - Center */}
          <div className="flex-1 max-h-[200px] flex flex-col justify-between">
            {/* Quote Text */}
            <div className="mb-8">
              <p className="text-lg md:text-xl leading-relaxed text-gray-900 mb-6">
                &apos;{currentTestimonial.text}&apos;
              </p>
              
              {/* Author Info */}
              <div>
                <div className="font-semibold text-gray-900">{currentTestimonial.name}</div>
                <div className="text-sm text-gray-600">{currentTestimonial.role}</div>
              </div>
            </div>

            {/* Pagination Dots - Bottom Left */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-500">
                {String(currentIndex + 1).padStart(2, '0')}/{String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Navigation Arrows - Right Side */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0 border-gray-300 hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0 bg-black hover:bg-gray-800"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}