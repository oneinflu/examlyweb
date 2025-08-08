/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";

// Learning Path Components
import PrepPackageHero from "@/components/sections/hero/prep-package-hero";
import ProblemSection from "@/components/sections/feature/problem-section";
import LearningPathSection from "@/components/sections/feature/learning-path-section";
import BenefitsSection from "@/components/sections/feature/benefits-section";
import DemoCarousel from "@/components/sections/feature/demo-carousel";
import SuccessStoriesSection from "@/components/sections/feature/success-stories-section";
import BeforeAfterSection from "@/components/sections/feature/before-after-section";
import DynamicFAQ from "@/components/sections/feature/dynamic-faq";

// Exam Simulation Components
import ExamSimulationHero from "@/components/sections/hero/exam-simulation-hero";
import ExamSimulationProblem from "@/components/sections/feature/exam-simulation-problem";
import HowSimulationWorks from "@/components/sections/feature/how-simulation-works";
import ExamFormatsSection from "@/components/sections/feature/exam-formats-section";
import FullLengthTests from "@/components/sections/feature/full-length-tests";
import DynamicCTA from "@/components/sections/feature/dynamic-cta";

// Live Classes Components
import LiveClassesHero from "@/components/sections/hero/live-classes-hero";
import LiveClassesProblem from "@/components/sections/feature/live-classes-problem";
import LiveClassesProcess from "@/components/sections/feature/live-classes-process";
import LiveClassroomFeatures from "@/components/sections/feature/live-classroom-features";
import LiveClassesVariety from "@/components/sections/feature/live-classes-variety";
import InstructorSpotlight from "@/components/sections/feature/instructor-spotlight";
import Navbar from "@/components/sections/navbar/centered";
import FooterSection from "@/components/sections/footer/5-columns";
import OfflineAccessHero from "@/components/sections/hero/offline-access-hero";
import OfflineAccessProblem from "@/components/sections/feature/offline-access-problem";
import { OfflineAccessSync } from "@/components/sections/feature/offline-access-sync";

import SelfAssessmentHero from "@/components/sections/hero/self-assessment-hero";
import SelfAssessmentProblem from "@/components/sections/feature/self-assessment-problem";
import AnalyticsOverview from "@/components/sections/feature/analytics-overview";
import AiInsightsStrip from "@/components/sections/feature/ai-insights-strip";


// Define valid feature slugs
const validFeatureSlugs = [
  "exam-simulation",
  "personalized-learning",
  "live-classes",
  "self-assessment",
  "learning-community",
  "offline-access"
];

// ADD THIS FUNCTION - Required for static export
export async function generateStaticParams() {
  return validFeatureSlugs.map((slug) => ({
    slug: slug,
  }));
}


// Add proper typing for the component mapping
type ComponentMapping = {
  component: React.ComponentType<any>;
  props?: Record<string, any>;
};

type FeatureLayout = {
  components: ComponentMapping[];
};

const featureLayouts: Record<string, FeatureLayout> = {
  "personalized-learning": {
    components: [
      { component: PrepPackageHero, props: { course: "cpa", packageType: "pro" } },
      { component: ProblemSection, props: {} },
      { component: LearningPathSection, props: {} },
      { component: BenefitsSection, props: { featureType: 'learning-path' } },
      { component: DemoCarousel, props: {} },
      { component: SuccessStoriesSection, props: {} },
      { component: BeforeAfterSection, props: {} },
      { component: DynamicFAQ, props: { featureType: 'learning-path' } },
      { component: DynamicCTA, props: { featureType: "learning-path" } }
    ]
  },
  "exam-simulation": {
    components: [
      { component: ExamSimulationHero, props: {} },
      { component: ExamSimulationProblem, props: {} },
      { component: HowSimulationWorks, props: {} },
      { component: ExamFormatsSection, props: {} },
      { component: FullLengthTests, props: {} },
      { component: BenefitsSection, props: { featureType: 'exam-simulation' } },
      { component: DynamicFAQ, props: { featureType: 'exam-simulation' } },
      { component: DynamicCTA, props: { featureType: "exam-simulation" } }
    ]
  },
  "live-classes": {
    components: [
      { component: LiveClassesHero, props: {} },
      { component: LiveClassesProblem, props: {} },
      { component: LiveClassesProcess, props: {} },
      { component: BenefitsSection, props: { featureType: 'live-classes' } },
      { component: LiveClassroomFeatures, props: {} },
      { component: LiveClassesVariety, props: {} },
      { component: InstructorSpotlight, props: {} },
      { component: DynamicFAQ, props: { featureType: 'live-classes' } },
      { component: DynamicCTA, props: { featureType: "live-classes" } }
    ]
  },
  "self-assessment": {
    components: [
      { component: SelfAssessmentHero, props: {} },
     { component: SelfAssessmentProblem, props: {} },
      { component: AnalyticsOverview, props: {} },
      { component: AiInsightsStrip, props: {} },
   
      
      { component: DynamicFAQ, props: { featureType: 'self-assessment' } },
      { component: DynamicCTA, props: { featureType: "self-assessment" } }
    ]
  },
  "learning-community": {
    components: [
      { component: ExamSimulationHero, props: {} },
      { component: ExamSimulationProblem, props: {} },
      { component: HowSimulationWorks, props: {} },
      { component: ExamFormatsSection, props: {} },
      { component: FullLengthTests, props: {} },
      { component: BenefitsSection, props: { featureType: 'learning-community' } },
      { component: DynamicFAQ, props: { featureType: 'learning-community' } },
      { component: DynamicCTA, props: { featureType: "learning-community" } }
    ]
  },
  "offline-access": {
    components: [
      { component: OfflineAccessHero, props: {} },
      { component: OfflineAccessProblem, props: {} },
      { component: OfflineAccessSync, props: {} },
      
     
      { component: DynamicFAQ, props: { featureType: 'offline-access' } },
    
    ]
  }
};

// Main page component
export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Check if the slug is valid
  if (!validFeatureSlugs.includes(slug)) {
    notFound();
  }
  
  // Get the layout for this feature
  const layout = featureLayouts[slug];
  
  if (!layout) {
    notFound();
  }
  
  return (
    <><Navbar /><main className="min-h-screen">
      {layout.components.map((item, index) => {
        const Component = item.component;
        return <Component key={index} {...item.props} />;
      })}
    </main>
    <FooterSection />
    </>
  );
}

