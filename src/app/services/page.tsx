"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ServicesOverview } from "@/sections/services-overview";
import { ResearchMarketing } from "@/sections/research-marketing";
import { EngagementModels } from "@/sections/engagement-models";
import { Sparkles, Layers, ShieldCheck } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-grow pt-16">
        {/* Background Decorative Mesh Orbs */}
        <div className="mesh-circle c1 top-[10%] right-[-100px] opacity-15" />
        <div className="mesh-circle c2 top-[50%] left-[-150px] opacity-10" />

        {/* Premium Services Header */}
        <section className="relative pt-8 pb-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-mono mb-6 animate-pulse">
              <Sparkles className="size-3.5" />
              <span>Full-Stack Capabilities</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6">
              Our Capabilities &amp; <br />
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Systems Engineering
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto font-sans text-slate-350 text-base sm:text-lg leading-relaxed">
              We design, build, and optimize custom software solutions, intelligence pipelines, and brand identities. Select options to configure your estimate.
            </p>
          </div>
        </section>

        {/* Services Components */}
        <ServicesOverview />
        <ResearchMarketing />
        <EngagementModels />
      </main>
      <SiteFooter />
    </>
  );
}
