import BentoGrid from "@/components/sections/bento-grid/2-rows-top";
import CTA from "@/components/sections/cta/box";
import FAQ from "@/components/sections/faq/raised";
import Feature from "@/components/sections/feature/illustration-top";
import FooterSection from "@/components/sections/footer/5-columns";
import Hero from "@/components/sections/hero/layers";
import Items from "@/components/sections/items/default-brand";
import Logos from "@/components/sections/logos/marquee";
import Navbar from "@/components/sections/navbar/centered";
import { Pricing3ColsSubscription } from "@/components/sections/pricing/3-cols-subscription";
import SocialProof from "@/components/sections/social-proof/marquee-2-rows";
import StatsGridBoxed from "@/components/sections/stats/grid-boxed";
import TabsLeft from "@/components/sections/tabs/left";
import TestimonialsCarousel from "@/components/sections/testimonials/carousel";
import Carousel from "@/components/sections/testimonials/grid";
import { Tabs } from "@/components/ui/tabs";


export default function Home() {
  return (
   <>
   <Navbar />
  
   <Hero />
  
    
   <BentoGrid />
   <Items />
   <Logos />
   <Pricing3ColsSubscription />
   <SocialProof />
   <StatsGridBoxed />
   <TabsLeft />
   <FAQ />
   <FooterSection />

   </>
  );
}
