"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LabsTeaser } from "@/sections/labs-teaser";
import { Sparkles, Terminal, Code2, Bot, Layers, Cpu, Database } from "lucide-react";

const pipelineStages = [
  {
    stage: "Stage 01: Hypothesis",
    title: "Problem Identification & Architecture Mockup",
    desc: "We analyze bottlenecks in high-frequency business systems—ranging from automated invoicing to multi-party splits in Tourism operations. We define API schemas and sketch high-fidelity UI flows.",
    icon: Code2,
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
  },
  {
    stage: "Stage 02: Incubation",
    title: "Internal Sandbox Prototyping",
    desc: "We compile functional MVPs deployed in closed sandboxes. Here, our engineers dogfood the products, benchmark query latency, stress-test automation triggers, and iron out UI friction.",
    icon: Cpu,
    color: "text-[#8b5cf6] border-[#8b5cf6]/20 bg-[#8b5cf6]/5",
  },
  {
    stage: "Stage 03: Battle-Testing",
    title: "Field Deployment & Production Integration",
    desc: "Once a library or microservice proves stable, we extract its core patterns and design tokens. These field-tested modules are then integrated into client platforms to deliver instant stability.",
    icon: Database,
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  },
];

export default function LabsPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-grow pt-16">
        {/* Background Decorative Mesh Orbs */}
        <div className="mesh-circle c1 top-[15%] right-[-100px] opacity-15" />
        <div className="mesh-circle c2 top-[60%] left-[-150px] opacity-10" />

        {/* Premium Labs Header */}
        <section className="relative pt-20 pb-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/5 text-[#8b5cf6] text-xs font-mono mb-6 animate-pulse">
              <Sparkles className="size-3.5" />
              <span>R&amp;D Incubation Studio</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6">
              ID8 Labs: Designing the <br />
              <span className="bg-gradient-to-r from-[#8b5cf6] via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                Next-Gen Infrastructures
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto font-sans text-slate-350 text-base sm:text-lg leading-relaxed">
              We compile internal prototypes to address automation bottlenecks, payment routing difficulties, and fintech split logic. Read our current logs below.
            </p>
          </div>
        </section>

        {/* Main Labs Grid & Terminal */}
        <LabsTeaser />

        {/* Incubation Process Detail */}
        <section className="py-20 relative overflow-hidden subtle-grid">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold">
                Our Incubation Methodology
              </span>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-white">
                How we move from research concepts to client value.
              </h2>
              <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                By developing and owning our core product stack, we possess a unique technical depth. Every library, webhook, and custom AI agent we deploy is thoroughly battle-tested.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pipelineStages.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <div key={idx} className="glass border border-white/5 bg-white/[0.01] p-8 rounded-[24px] hover:border-[#8b5cf6]/30 transition-all text-left">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block font-bold mb-4">
                      {stage.stage}
                    </span>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-6 ${stage.color}`}>
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display font-medium text-lg text-white mb-3">
                      {stage.title}
                    </h3>
                    <p className="font-sans text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
