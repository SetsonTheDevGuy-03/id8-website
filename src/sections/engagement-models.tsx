"use client";

import { CheckCircle2, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { engagementModels } from "@/data/engagement-models";

export function EngagementModels() {
  return (
    <Section id="pricing" className="relative overflow-hidden border-b border-white/5">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 left-2/3 -z-10 size-[32rem] rounded-full bg-[#10b981]/3 blur-[120px] pointer-events-none" />

      <SectionHeading
        eyebrow="Engagement Models"
        title="Bespoke engineering. Transparent pricing architecture."
        description="We imitate the pricing models of elite global digital studios: public starter tiers for clear work and consultation-based scopes for custom product platforms and AI builds."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {engagementModels.map((model, index) => {
          const isFeatured = model.badge === "Most Popular";
          return (
            <Reveal key={model.title} delay={index * 0.05} className="h-full">
              <GlassCard
                className={`flex flex-col justify-between h-full p-6.5 relative overflow-hidden border ${
                  isFeatured
                    ? "border-[#10b981]/30 bg-gradient-to-b from-[#06120d]/50 to-[#030706]/90 shadow-[0_0_50px_rgba(114,240,168,0.1)]"
                    : "border-white/5 bg-[#030706]/60 hover:border-[#10b981]/20"
                } transition duration-300 group`}
              >
                {/* Glow overlay for popular tier */}
                {isFeatured && (
                  <div className="absolute top-0 right-0 size-24 bg-gradient-to-bl from-[#10b981]/10 to-transparent pointer-events-none" />
                )}

                <div>
                  {/* Badge & Price Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#10b981]/80 font-mono">
                      {model.priceRange}
                    </span>
                    {model.badge && (
                      <span className="rounded-full bg-[#10b981]/10 border border-[#10b981]/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#10b981]">
                        {model.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-white group-hover:text-[#10b981] transition duration-200">
                    {model.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-5 text-white/55">
                    {model.description}
                  </p>

                  {/* Features Checklist */}
                  <ul className="mt-6 space-y-2.5 border-t border-white/5 pt-5 text-left">
                    {model.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-white/75 font-medium">
                        <CheckCircle2 className="size-4 shrink-0 text-[#10b981] mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action Button */}
                <div className="mt-10 pt-4.5 border-t border-white/5">
                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center gap-1.5 rounded-full w-full py-3.5 text-xs font-bold uppercase tracking-wider transition duration-300 ${
                      isFeatured
                        ? "bg-[#10b981] text-[#030706] hover:bg-[#10b981]"
                        : "bg-white/5 text-white border border-white/10 hover:border-[#10b981]/35 hover:bg-white/10"
                    }`}
                  >
                    Select Package
                    <MessageSquare className="size-3.5" />
                  </a>
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
