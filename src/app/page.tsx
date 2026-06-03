"use client";

import { useState, useRef } from "react";
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
import { Founder } from "@/sections/founder";
import { LabsTeaser } from "@/sections/labs-teaser";
import { Contact } from "@/sections/contact";

export default function Home() {
  const [selectedCartServices, setSelectedCartServices] = useState<string[]>([]);
  
  const handleToggleCartService = (serviceTitle: string) => {
    setSelectedCartServices((prev) => {
      if (prev.includes(serviceTitle)) {
        return prev.filter((item) => item !== serviceTitle);
      } else {
        return [...prev, serviceTitle];
      }
    });
  };

  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-grow">
        {/* Frosted Glass Background Mesh Blur Orbs */}
        <div className="mesh-circle c1 top-[-80px] right-[-100px] opacity-25" />
        <div className="mesh-circle c2 top-[22%] left-[-150px] opacity-20" />
        <div className="mesh-circle c1 top-[48%] right-[-150px] opacity-20" />
        <div className="mesh-circle c2 top-[72%] left-[-150px] opacity-25" />
        <div className="mesh-circle c1 top-[90%] right-[-100px] opacity-20" />

        {/* Stage 1: Entrances & Core Pillars */}
        <Hero />
        <TrustStrip />
        <WhatWeDo />
        
        {/* Stage 2: Service Details & Pipelines */}
        <ServicesOverview 
          selectedCartServices={selectedCartServices} 
          onToggleCartService={handleToggleCartService} 
        />
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
        <Founder />
        <LabsTeaser />
        <Contact 
          selectedCartServices={selectedCartServices}
          onToggleCartService={handleToggleCartService}
        />
      </main>
      <SiteFooter />
    </>
  );
}
