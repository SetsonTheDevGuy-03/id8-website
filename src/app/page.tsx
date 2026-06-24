"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/sections/hero";
import { TrustStrip } from "@/sections/trust-strip";
import { WhatWeDo } from "@/sections/what-we-do";
import { FeaturedWork } from "@/sections/featured-work";
import { LabsTeaser } from "@/sections/labs-teaser";
import { Sparkles, ArrowRight, Layers, Beaker, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
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

        {/* Hero, trust signals, and core overview */}
        <Hero />
        <TrustStrip />
        <WhatWeDo />

        {/* Feature Teaser 1: Capabilities Overview */}
        <section className="py-20 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6 text-left">
                <span className="font-mono text-xs uppercase tracking-widest text-[#10b981] flex items-center gap-1.5 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Ecosystem Capabilities
                </span>
                <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
                  Intelligent systems custom engineered to scale.
                </h2>
                <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                  We bridge the gap between simple landing structures and sophisticated workflow engines. Add capabilities to customize your estimate dynamically.
                </p>
                <div className="pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-[#10b981] border border-emerald-500/20 hover:bg-[#10b981]/15 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Configure Custom Estimate
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass border border-white/5 p-6 rounded-[20px] text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 block font-bold mb-2">01 / BRAND &amp; CODE</span>
                  <h3 className="font-display font-medium text-white text-base mb-2">Digital Presence</h3>
                  <p className="font-sans text-slate-400 text-xs leading-relaxed">Sleek, high-performance interfaces built to convey premium authority.</p>
                </div>
                <div className="glass border border-white/5 p-6 rounded-[20px] text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 block font-bold mb-2">02 / OPERATIONS</span>
                  <h3 className="font-display font-medium text-white text-base mb-2">Product Platforms</h3>
                  <p className="font-sans text-slate-400 text-xs leading-relaxed">Highly responsive web apps, booking flows, and SaaS layouts.</p>
                </div>
                <div className="glass border border-white/5 p-6 rounded-[20px] text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 block font-bold mb-2">03 / AI AGENTS</span>
                  <h3 className="font-display font-medium text-white text-base mb-2">Workflow Automation</h3>
                  <p className="font-sans text-slate-400 text-xs leading-relaxed">Seamless background synchronization, indexing, and chat automation.</p>
                </div>
                <div className="glass border border-white/5 p-6 rounded-[20px] text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 block font-bold mb-2">04 / STRATEGY</span>
                  <h3 className="font-display font-medium text-white text-base mb-2">Consultation First</h3>
                  <p className="font-sans text-slate-400 text-xs leading-relaxed">Defining system scope, roadmap briefs, and direct rate sheets.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Studies Showcase */}
        <FeaturedWork />
        <div className="text-center pb-20">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition"
          >
            Browse All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Labs Incubations Showcase */}
        <LabsTeaser />

        {/* Global CTA Section */}
        <section className="py-24 relative overflow-hidden subtle-grid">
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div className="glass border border-emerald-500/20 bg-emerald-500/[0.03] p-12 sm:p-16 rounded-[32px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
              
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-4">
                Ready to establish scope?
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white mb-6">
                Let&apos;s build something serious.
              </h2>
              <p className="max-w-xl mx-auto font-sans text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Tell us what you are building, what bottlenecks your operations face, and select services in our estimator to draft a clear roadmap.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                >
                  Start Scoping Brief
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all"
                >
                  Learn About Our Studio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
