"use client";

import { useState } from "react";
import { ArrowUpRight, Beaker, Bot, Code2, Compass, Layers3, Terminal } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const labProducts = [
  {
    name: "P1 Travel App",
    category: "FinTech UX",
    desc: "A travel billing wallet mockup connecting local merchant splits and API payment rails.",
    icon: Compass,
  },
  {
    name: "ID8 Client Portal",
    category: "Operations",
    desc: "A secure workspace dashboard for client communications, roadmap timelines, and briefs sharing.",
    icon: Terminal,
  },
  {
    name: "AI Ops Assistant",
    category: "Automation",
    desc: "Fine-tuning business assistant layers connecting internal directories to intelligent chat interfaces.",
    icon: Bot,
  },
  {
    name: "Research Intelligence Board",
    category: "Intelligence",
    desc: "Market data trackers mapping B2B regional sector shifts and competitor digital footprints.",
    icon: Code2,
  },
];

export function LabsTeaser() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <Section id="labs" className="relative overflow-hidden border-b border-white/5 bg-[#06120d]/10">
      {/* Decorative gradient radial glows */}
      <div className="absolute top-1/2 left-3/4 -z-10 size-[32rem] rounded-full bg-[#8b5cf6]/3 blur-[120px] pointer-events-none" />

      <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 items-center">
        {/* Left Column: Heading and roadmap */}
        <Reveal>
          <div className="flex flex-col items-start text-left">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/6 text-[10px] font-bold uppercase tracking-wider text-[#8b5cf6] mb-6">
              <Beaker className="size-3.5" />
              ID8 Labs / Product Incubation
            </span>

            <SectionHeading
              eyebrow="R&D Ecosystem"
              title="Client services today. Product innovation tomorrow."
              description="ID8 does not only build for others. We run an active research and development laboratory — testing, designing, and compiling internal software platforms for tourism, fintech, and automated workflow operations."
            />
            
            <p className="mt-5 text-sm leading-7 text-white/55">
              By testing internal products under <strong>ID8 Labs</strong>, we solve our own business challenges first before taking those frameworks, code blocks, and lessons directly to our client platforms. This ensures every MVP or system we build for you is field-tested, robust, and mature.
            </p>

            {/* Labs teaser CTA */}
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#8b5cf6]/25 hover:border-[#8b5cf6]/40 transition duration-300 shadow-[0_0_20px_rgba(167,139,250,0.15)]"
            >
              Collaborate on R&D
              <ArrowUpRight className="size-4 text-[#8b5cf6]" />
            </a>
          </div>
        </Reveal>

        {/* Right Column: Labs dashboard simulation */}
        <Reveal delay={0.15}>
          <div className="rounded-[2.25rem] border border-white/10 bg-[#030706]/95 p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute inset-1 rounded-[2.1rem] bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            {/* simulated terminal header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Terminal className="size-4 text-[#8b5cf6]" />
                <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-white/40">
                  labs-pipeline.sh
                </span>
              </div>
              <span className="text-[9px] font-mono text-white/35">Compiled v1.0.4</span>
            </div>

            {/* Grid of Lab Cards */}
            <div className="grid gap-3.5 text-left">
              {labProducts.map((p) => {
                const Icon = p.icon;
                const isHovered = hoveredProduct === p.name;
                
                return (
                  <div
                    key={p.name}
                    onMouseEnter={() => setHoveredProduct(p.name)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    className={`rounded-2xl border p-4.5 transition-all duration-300 cursor-default ${
                      isHovered
                        ? "border-[#8b5cf6]/40 bg-[#8b5cf6]/5 shadow-lg"
                        : "border-white/5 bg-white/[0.01]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`rounded-xl border p-2.5 transition-colors shrink-0 ${
                        isHovered ? "bg-[#8b5cf6] text-[#030706] border-transparent" : "bg-white/2 border-white/5 text-[#8b5cf6]"
                      }`}>
                        <Icon className="size-4.5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white tracking-wide">
                            {p.name}
                          </h4>
                          <span className="rounded bg-white/5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/45">
                            {p.category}
                          </span>
                        </div>
                        <p className="mt-2 text-xs leading-5 text-white/50">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
