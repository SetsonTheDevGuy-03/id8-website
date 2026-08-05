"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FeaturedWork } from "@/sections/featured-work";
import { ExpoCaseStudy } from "@/sections/expo-case-study";
import { Industries } from "@/sections/industries";
import { Sparkles } from "lucide-react";

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-grow pt-16">
        {/* Background Decorative Mesh Orbs */}
        <div className="mesh-circle c2 top-[15%] left-[-100px] opacity-15" />
        <div className="mesh-circle c1 top-[60%] right-[-150px] opacity-10" />

        {/* Premium Work Header */}
        <section className="relative pt-8 pb-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-mono mb-6 animate-pulse">
              <Sparkles className="size-3.5" />
              <span>Case Studies &amp; Projects</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6">
              Proven Digital Systems &amp; <br />
              <span className="bg-gradient-to-r from-blue-400 via-[#10b981] to-emerald-500 bg-clip-text text-transparent">
                High-Stakes Products
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto font-sans text-slate-350 text-base sm:text-lg leading-relaxed">
              Explore how we engineer solutions that drive growth, streamline operations, and deliver flawless user experiences for leading organizations.
            </p>
          </div>
        </section>

        {/* Work Components */}
        <FeaturedWork />
        <ExpoCaseStudy />
        <Industries />
      </main>
      <SiteFooter />
    </>
  );
}
