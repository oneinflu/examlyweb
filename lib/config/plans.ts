import { ReactNode } from "react";
import { User, Users } from "lucide-react";

export type Plan = {
  name: string;
  description: string;
  icon?: ReactNode;
  price: string;
  cta: {
    variant: "outline" | "default" | "glow";
    label: string;
    href: string;
  };
  features: string[];
  featured: boolean;
  classes?: string;
};

export type CourseConfig = {
  name: string;
  fullName: string;
  plans: Plan[];
};

type IconProps = {
  className?: string;
};

export const courseConfigs: Record<string, CourseConfig> = {
  cma: {
    name: "CMA",
    fullName: "Certified Management Accountant",
    plans: [
      {
        name: "Essential CMA Review",
        description: "Self-paced CMA Exam Prep course with comprehensive learning material and platform access.",
        price: "$1,599.00",
        cta: {
          variant: "outline",
          label: "Learn More",
          href: "/cma/prep/essential",
        },
        features: [
          "CMA Part 1 & 2 HD video lectures",
          "Digital eBooks & concept notes",
          "Performance analytics dashboard",
          "Chapter-wise practice questions",
          "24-month course access",
        ],
        featured: false,
        classes: "glass-1 to-transparent dark:glass-2 hidden lg:flex",
      },
      {
        name: "Pro CMA Review",
        description: "Advanced CMA Exam Prep with live classes, mentorship, and extended access till you're confident.",
      
        price: "$1,799.00",
        cta: {
          variant: "default",
          label: "Learn More",
          href: "/cma/prep/pro",
        },
        features: [
          "Everything in Essential Plan",
          "Live weekly doubt-clearing sessions",
          "Study planner & milestone tracking",
          "Mock tests & detailed performance reviews",
          "48-month course access",
        ],
        featured: true,
        classes: "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
      },
      {
        name: "Ultimate CMA QBank",
        description: "Master the CMA exam with our exhaustive Question Bank designed to simulate real exam scenarios.",
       
        price: "$1,299.00",
        cta: {
          variant: "glow",
          label: "Learn More",
          href: "/cma/qbank",
        },
        features: [
          "3,000+ exam-style MCQs & essays",
          "Topic-wise & full-length mock tests",
          "Detailed solutions & explanations",
          "Performance reports & analytics",
          "Access till you pass guarantee",
        ],
        featured: false,
        classes: "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
      },
    ],
  },
  cpa: {
    name: "CPA",
    fullName: "Certified Public Accountant",
    plans: [
      {
        name: "Essential CPA Review",
        description: "Self-paced CPA Exam Prep course with comprehensive learning material and platform access.",
        price: "$1,599.00",
        cta: {
          variant: "outline",
          label: "Learn More",
          href: "/cpa/prep/essential",
        },
        features: [
          "CPA FAR, AUD, REG & BEC video lectures",
          "Digital eBooks & concept notes",
          "Performance analytics dashboard",
          "Chapter-wise practice questions",
          "24-month course access",
        ],
        featured: false,
        classes: "glass-1 to-transparent dark:glass-2 hidden lg:flex",
      },
      {
        name: "Pro CPA Review",
        description: "Advanced CPA Exam Prep with live classes, mentorship, and extended access till you're confident.",
       
        price: "$1,799.00",
        cta: {
          variant: "default",
          label: "Learn More",
          href: "/cpa/prep/pro",
        },
        features: [
          "Everything in Essential Plan",
          "Live weekly doubt-clearing sessions",
          "Study planner & milestone tracking",
          "Mock tests & detailed performance reviews",
          "48-month course access",
        ],
        featured: true,
        classes: "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
      },
      {
        name: "Ultimate CPA QBank",
        description: "Master the CPA exam with our exhaustive Question Bank designed to simulate real exam scenarios.",
       
        price: "$1,299.00",
        cta: {
          variant: "glow",
          label: "Learn More",
          href: "/cpa/qbank",
        },
        features: [
          "5,000+ exam-style MCQs & simulations",
          "Topic-wise & full-length mock tests",
          "Detailed solutions & explanations",
          "Performance reports & analytics",
          "Access till you pass guarantee",
        ],
        featured: false,
        classes: "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
      },
    ],
  },
  ea: {
    name: "EA",
    fullName: "Enrolled Agent",
    plans: [
      {
        name: "Essential EA Review",
        description: "Self-paced EA Exam Prep course with comprehensive learning material and platform access.",
        price: "$1,399.00",
        cta: {
          variant: "outline",
          label: "Learn More",
          href: "/ea/prep/essential",
        },
        features: [
          "EA Parts 1, 2 & 3 HD video lectures",
          "Digital eBooks & concept notes",
          "Performance analytics dashboard",
          "Chapter-wise practice questions",
          "24-month course access",
        ],
        featured: false,
        classes: "glass-1 to-transparent dark:glass-2 hidden lg:flex",
      },
      {
        name: "Pro EA Review",
        description: "Advanced EA Exam Prep with live classes, mentorship, and extended access till you're confident.",
      
        price: "$1,599.00",
        cta: {
          variant: "default",
          label: "Learn More",
          href: "/ea/prep/pro",
        },
        features: [
          "Everything in Essential Plan",
          "Live weekly doubt-clearing sessions",
          "Study planner & milestone tracking",
          "Mock tests & detailed performance reviews",
          "48-month course access",
        ],
        featured: true,
        classes: "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
      },
      {
        name: "Ultimate EA QBank",
        description: "Master the EA exam with our exhaustive Question Bank designed to simulate real exam scenarios.",
      
        price: "$1,099.00",
        cta: {
          variant: "glow",
          label: "Learn More",
          href: "/ea/qbank",
        },
        features: [
          "2,500+ exam-style MCQs & simulations",
          "Topic-wise & full-length mock tests",
          "Detailed solutions & explanations",
          "Performance reports & analytics",
          "Access till you pass guarantee",
        ],
        featured: false,
        classes: "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
      },
    ],
  },
};