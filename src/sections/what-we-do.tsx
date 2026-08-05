"use client";

import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const supportingPoints = [
  "We design premium digital presence that builds immediate business credibility.",
  "We build custom software systems that streamline your business operations.",
  "We leverage practical AI automation workflows to eliminate repetitive admin tasks.",
  "We align research and digital marketing so your business grows with strict direction.",
  "We engineer corporate branding and live event digital systems that present professionally.",
  "We architect products, web platforms, and fintech-ready concepts built to scale.",
];

export function WhatWeDo() {
  return (
    <Section id="about-studio" className="relative overflow-hidden border-b border-white/5">
      {/* Decorative radial glows */}
      <div className="absolute top-1/2 -right-48 -z-10 size-[30rem] rounded-full bg-[#3b82f6]/3 blur-[100px] pointer-events-none" />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-center">
        {/* Left Column: Heading and values statement */}
        <Reveal>
          <div className="flex flex-col items-start text-left">
            <SectionHeading
              eyebrow="What ID8 Does"
              title="One studio for strategy, design, technology, marketing, and systems."
              description="Modern business systems should never be isolated projects. A business may start with a sleek website, then expand into lead generation, workflow automation, custom client dashboards, and eventual software platforms."
            />
            
            <p className="mt-4 text-sm leading-7 text-white/55">
              ID8 Technologies acts as your long-term product engineering partner — helping you build exactly what your business needs today, while structuring the codebase and data systems so you can scale tomorrow without costly rebuilds.
            </p>

            {/* Micro strategic credentials block */}
            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
              <GlassCard className="p-4 border-white/5 hover:border-[#10b981]/20 bg-white/2">
                <p className="text-xl font-bold text-white tracking-tight">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-white/45 mt-1 font-semibold">Custom Codebase</p>
              </GlassCard>
              <GlassCard className="p-4 border-white/5 hover:border-[#3b82f6]/20 bg-white/2">
                <p className="text-xl font-bold text-white tracking-tight">Africa-First</p>
                <p className="text-[10px] uppercase tracking-wider text-white/45 mt-1 font-semibold">Namibian Studio</p>
              </GlassCard>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Checklist points as glass list items */}
        <div className="flex flex-col gap-3.5">
          {supportingPoints.map((point, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4.5 hover:border-white/10 hover:bg-white/[0.04] transition duration-200">
                <CheckCircle2 className="size-5 shrink-0 text-[#10b981] mt-0.5" />
                <p className="text-sm leading-6 text-white/75 font-medium">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
