import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/sections/hero";
import { TrustStrip } from "@/sections/trust-strip";
import { WhatWeDo } from "@/sections/what-we-do";
import { ServicesOverview } from "@/sections/services-overview";
import { ResearchMarketing } from "@/sections/research-marketing";
import { FeaturedWork } from "@/sections/featured-work";
import { ExpoCaseStudy } from "@/sections/expo-case-study";
import { Industries } from "@/sections/industries";
import { Process } from "@/sections/process";
import { EngagementModels } from "@/sections/engagement-models";
import { About } from "@/sections/about";
import { LabsTeaser } from "@/sections/labs-teaser";
import { Contact } from "@/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Stage 1: Entrances & Core Pillars */}
        <Hero />
        <TrustStrip />
        <WhatWeDo />
        
        {/* Stage 2: Service Details & Pipelines */}
        <ServicesOverview />
        <ResearchMarketing />
        
        {/* Stage 3: Project Proof & Event Case Studies */}
        <FeaturedWork />
        <ExpoCaseStudy />
        
        {/* Stage 4: Operations & Scope Tiers */}
        <Industries />
        <Process />
        <EngagementModels />
        
        {/* Stage 5: narratives, Labs, & Lead Conversion */}
        <About />
        <LabsTeaser />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
