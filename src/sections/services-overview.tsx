"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <Section id="services" className="relative overflow-hidden border-b border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/3 left-1/4 -z-10 size-[32rem] rounded-full bg-[#72f0a8]/3 blur-[120px] pointer-events-none" />

      <SectionHeading
        eyebrow="Capabilities & Services"
        title="Connected digital services for businesses ready to grow."
        description="A business may start with a sleek website, then grow into marketing, automation, dashboards, custom software, and full product platforms. ID8 helps clients build at the level they are ready for while keeping the future in mind."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          const accentStyle = service.accentClass || "hover:border-[#72f0a8]/30 border-white/10 hover:text-[#72f0a8]";

          return (
            <Reveal key={service.title} delay={index * 0.04} className="h-full">
              <GlassCard 
                className={`flex flex-col justify-between h-full p-6.5 relative overflow-hidden group shadow-lg ${accentStyle}`}
              >
                {/* Visual card header */}
                <div>
                  <div className="inline-flex rounded-xl bg-white/[0.03] border border-white/5 p-3.5 group-hover:scale-110 transition duration-300">
                    <Icon aria-hidden="true" className="size-6 text-current" />
                  </div>
                  
                  <h3 className="mt-6 text-lg font-bold tracking-tight text-white group-hover:text-inherit transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="mt-3 text-xs leading-5 text-white/55">
                    {service.description}
                  </p>

                  {/* Bullet micro-services */}
                  {service.bullets && (
                    <ul className="mt-5 space-y-2 border-t border-white/5 pt-4">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2 text-[11px] text-white/70">
                          <span className="size-1 rounded-full bg-current opacity-70" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Card footer / arrow indicator */}
                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/35 group-hover:text-white transition duration-200">
                    Inquire Now
                  </span>
                  <div className="rounded-full bg-white/5 border border-white/5 p-1.5 group-hover:bg-current group-hover:text-[#030706] transition duration-300">
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-3.5"
                    />
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
      
      {/* Future Fintech & Labs Strip */}
      <div className="mt-12 text-center">
        <p className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-full border border-white/5 bg-white/[0.01] px-6 py-3 text-xs font-semibold text-white/50">
          <span>Labs Integrations</span>
          <span className="text-white/20">•</span>
          <span>FinTech Rails</span>
          <span className="text-white/20">•</span>
          <span>API Pipelines</span>
          <span className="text-white/20">•</span>
          <span>Custom AI Fine-Tuning</span>
        </p>
      </div>
    </Section>
  );
}
