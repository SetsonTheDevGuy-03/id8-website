"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { About } from "@/sections/about";
import { Founder } from "@/sections/founder";
import { Process } from "@/sections/process";
import { Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-grow pt-16">
        {/* Background Decorative Mesh Orbs */}
        <div className="mesh-circle c1 top-[20%] right-[-100px] opacity-15" />
        <div className="mesh-circle c2 top-[70%] left-[-150px] opacity-10" />

        {/* Premium About Header */}
        <section className="relative pt-20 pb-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-mono mb-6 animate-pulse">
              <Sparkles className="size-3.5" />
              <span>Studio &amp; Team</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6">
              Our Vision, Philosophy &amp; <br />
              <span className="bg-gradient-to-r from-[#10b981] via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Systems Engineering Studio
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto font-sans text-slate-350 text-base sm:text-lg leading-relaxed">
              We are a team of product engineers, designers, and system architects building high-stakes digital experiences, custom software platforms, and AI automations.
            </p>
          </div>
        </section>

        {/* About Components */}
        <About />
        <Founder />
        <Process />
      </main>
      <SiteFooter />
    </>
  );
}
