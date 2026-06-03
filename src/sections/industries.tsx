"use client";

import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <Section id="industries" className="relative overflow-hidden border-b border-white/5 bg-[#030706]">
      {/* Decorative radial gradients */}
      <div className="absolute top-1/2 -left-48 -z-10 size-[30rem] rounded-full bg-[#10b981]/3 blur-[100px] pointer-events-none" />

      <SectionHeading
        eyebrow="Target Verticals"
        title="Built for businesses ready to modernize."
        description="We combine engineering discipline, business intelligence, and design strategy to serve a diverse group of regional and national organizations in Namibia."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {industries.map((ind, index) => {
          const Icon = ind.icon;
          return (
            <Reveal key={ind.title} delay={index * 0.04} className="h-full">
              <GlassCard className="h-full p-6 border-white/5 bg-[#06120d]/20 hover:border-[#10b981]/25 transition duration-300 flex flex-col justify-start text-left group">
                <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3 text-[#10b981] shrink-0 w-fit group-hover:bg-[#10b981] group-hover:text-[#030706] transition duration-300">
                  <Icon className="size-5" />
                </div>
                
                <h3 className="mt-6 text-base font-bold text-white tracking-wide">
                  {ind.title}
                </h3>
                
                <p className="mt-3.5 text-xs leading-5 text-white/55">
                  {ind.description}
                </p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
