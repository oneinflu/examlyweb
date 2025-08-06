import { notFound } from "next/navigation";
import Navbar from "@/components/sections/navbar/centered";
import FooterSection from "@/components/sections/footer/5-columns";
import Hero from "@/components/sections/hero/default";
import FeatureStickyLeft from "@/components/sections/feature/sticky-left";
import FeatureStickyRight from "@/components/sections/feature/sticky-right";
import ExamlyFAQ from "@/components/sections/faq/examly";
import ExamlyCTA from "@/components/sections/cta/examly";

// Define valid feature slugs
const validFeatureSlugs = [
  "exam-simulation",
  "personalized-learning",
  "live-classes",
  "self-assessment",
  "learning-community",
  "offline-access"
];

// Enhanced feature content with detailed sections
const featureContent = {
  "exam-simulation": {
    hero: {
      title: "Master Your Exam with Real-World Simulations",
      description: "Experience the most realistic exam environment with our advanced simulation technology. Practice under exam-like conditions and build the confidence you need to succeed.",
      image: "/macbook.png"
    },
    sections: [
      {
        title: "Authentic Exam Experience",
        description: ["Timer that mirrors actual exam conditions", "Questions formatted exactly like the real test"],
        image: "/prep.png"
      },
      {
        title: "Performance Analytics",
        description: ["Detailed score breakdowns", "Question-by-question analysis"],
        image: "/calender.png"
      },
      {
        title: "Adaptive Question Bank",
        description: ["Questions that adjust to your skill level", "Focus on your weak areas"],
        image: "/exam.png"
      }
    ]
  },
  "personalized-learning": {
    hero: {
      title: "AI-Powered Learning Paths Just for You",
      description: "Your journey to success, perfectly tailored to your learning style, schedule, and goals. Let our AI create your optimal study plan.",
      image: "/plan.jpg"
    },
    sections: [
      {
        title: "Smart Study Scheduling",
        description: ["AI-generated study plans", "Automatic schedule adjustments based on progress"],
        image: "/calender.png"
      },
      {
        title: "Progress Tracking",
        description: ["Visual progress indicators", "Milestone achievements"],
        image: "/prep.png"
      },
      {
        title: "Personalized Content",
        description: ["Custom-picked practice questions", "Targeted review materials"],
        image: "/plan.jpg"
      }
    ]
  },
  "live-classes": {
    hero: {
      title: "Interactive Live Classes with Expert Instructors",
      description: "Join our dynamic live sessions where expert instructors break down complex topics and answer your questions in real-time.",
      image: "/home.png"
    },
    sections: [
      {
        title: "Expert-Led Sessions",
        description: ["Learn from industry professionals", "Interactive Q&A sessions"],
        image: "/prep.png"
      },
      {
        title: "Real-Time Interaction",
        description: ["Live doubt clearing", "Collaborative learning environment"],
        image: "/calender.png"
      },
      {
        title: "Recorded Sessions",
        description: ["Watch missed classes anytime", "Revision-friendly recordings"],
        image: "/exam.png"
      }
    ]
  },
  "self-assessment": {
    hero: {
      title: "Track Your Progress with Smart Self-Assessment",
      description: "Evaluate your understanding with our comprehensive self-assessment tools. Get instant feedback and detailed performance analytics.",
      image: "/macbook.png"
    },
    sections: [
      {
        title: "Instant Feedback",
        description: ["Detailed explanations for each answer", "Performance improvement tips"],
        image: "/prep.png"
      },
      {
        title: "Progress Analytics",
        description: ["Visual progress tracking", "Strength and weakness analysis"],
        image: "/calender.png"
      },
      {
        title: "Custom Practice Sets",
        description: ["Topic-wise practice questions", "Difficulty-based challenges"],
        image: "/exam.png"
      }
    ]
  },
  "learning-community": {
    hero: {
      title: "Join a Vibrant Learning Community",
      description: "Connect with fellow learners, share knowledge, and grow together in our active learning community.",
      image: "/bg.png"
    },
    sections: [
      {
        title: "Discussion Forums",
        description: ["Topic-wise discussions", "Peer-to-peer learning"],
        image: "/look1.svg"
      },
      {
        title: "Study Groups",
        description: ["Form study circles", "Collaborative problem solving"],
        image: "/look2.svg"
      },
      {
        title: "Resource Sharing",
        description: ["Share study materials", "Exchange learning tips"],
        image: "/look3.svg"
      }
    ]
  },
  "offline-access": {
    hero: {
      title: "Learn Anytime, Anywhere with Offline Access",
      description: "Download your study materials and access them without internet. Never let connectivity issues interrupt your learning.",
      image: "/offline.svg"
    },
    sections: [
      {
        title: "Downloadable Content",
        description: ["Save lessons for offline use", "Access materials anywhere"],
        image: "/file.svg"
      },
      {
        title: "Sync Progress",
        description: ["Auto-sync when online", "Never lose your progress"],
        image: "/globe.svg"
      },
      {
        title: "Mobile Friendly",
        description: ["Optimized for all devices", "Seamless learning experience"],
        image: "/ios.png"
      }
    ]
  }
};

type FeatureParams = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function FeaturePage({ params }: FeatureParams) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!validFeatureSlugs.includes(slug)) {
    notFound();
  }

  const content = featureContent[slug as keyof typeof featureContent];

  return (
    <>
      <Navbar />
      <Hero 
        title={content.hero.title}
        description={content.hero.description}
        image={content.hero.image} />
      {content.sections.map((section, index) => {
        const Component = index % 2 === 0 ? FeatureStickyLeft : FeatureStickyRight;
        return (
          <Component
            key={section.title}
            title={section.title}
            description={section.description}
            imageSrc={section.image}
            imageAlt={section.title}
          />
        );
      })}
      <ExamlyFAQ />
      <ExamlyCTA />
      <FooterSection />
    </>
  );
}