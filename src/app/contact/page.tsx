"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Contact } from "@/sections/contact";
import { Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-grow pt-16">
        {/* Background Decorative Mesh Orbs */}
        <div className="mesh-circle c1 top-[10%] right-[-100px] opacity-15" />
        <div className="mesh-circle c2 top-[40%] left-[-150px] opacity-10" />

        {/* Contact Header */}
        <section className="relative pt-20 pb-4 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-mono mb-6 animate-pulse">
              <Sparkles className="size-3.5" />
              <span>Project Scoping Workspace</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6">
              Start Your Systems Project &amp; <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                Establish Scope
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto font-sans text-slate-350 text-base sm:text-lg leading-relaxed">
              Use our interactive estimator panel below to add capabilities. Once submitted, we will design a robust roadmap during our discovery session.
            </p>
          </div>
        </section>

        {/* Interactive Contact Form Section */}
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
