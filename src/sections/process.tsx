"use client";

import { useState } from "react";
import { ArrowRight, HelpCircle, Layers3 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { processSteps } from "@/data/process";

export function Process() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <Section id="process" className="relative overflow-hidden border-b border-white/5">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/3 left-1/3 -z-10 size-[32rem] rounded-full bg-[#10b981]/3 blur-[120px] pointer-events-none" />

      <SectionHeading
        eyebrow="Delivery Pipeline"
        title="A clear process from scattered ideas to successful launch."
        description="We follow a systematic digital systems engineering lifecycle. We don't guess, we research; we don't rush, we build securely."
      />

      {/* Desktop Horizontal Navigator */}
      <div className="mt-16 hidden lg:flex items-center justify-between border-b border-white/10 pb-6 relative">
        <div className="absolute bottom-[-1px] left-0 h-[2px] bg-gradient-to-r from-[#10b981] to-[#10b981] transition-all duration-300" 
             style={{ 
               width: "14.28%", 
               transform: `translateX(${(activeStep - 1) * 100}%)` 
             }} 
        />
        {processSteps.map((step) => (
          <button
            key={step.step}
            onClick={() => setActiveStep(step.step)}
            className={`w-full text-center pb-3 text-xs font-bold uppercase tracking-wider transition duration-200 focus:outline-none ${
              activeStep === step.step ? "text-[#10b981]" : "text-white/40 hover:text-white"
            }`}
          >
            <span className="font-mono mr-1">0{step.step}.</span>
            {step.title}
          </button>
        ))}
      </div>

      {/* Desktop Detailed Card View */}
      <div className="mt-8 hidden lg:block">
        {processSteps.map((step) => {
          if (step.step !== activeStep) return null;
          return (
            <Reveal key={step.step} className="animate-fade-in">
              <GlassCard className="p-8 border-[#10b981]/20 bg-[#06120d]/40 flex gap-8 items-start text-left">
                <div className="size-16 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-xl font-bold font-mono text-[#10b981] shrink-0">
                  0{step.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    {step.title}
                    <span className="text-xs uppercase font-mono tracking-widest text-[#10b981]/80 font-bold bg-[#10b981]/5 px-2 py-0.5 border border-[#10b981]/10 rounded">
                      Active Stage
                    </span>
                  </h3>
                  <p className="mt-4 text-base leading-7 text-white/70 max-w-4xl">
                    {step.description}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      {/* Mobile Stacked Timeline View */}
      <div className="mt-12 flex flex-col gap-6 lg:hidden">
        {processSteps.map((step) => (
          <Reveal key={step.step} delay={step.step * 0.05} className="text-left">
            <div className="flex gap-4 items-start">
              {/* Circular Number Column */}
              <div className="flex flex-col items-center">
                <div className="size-9 rounded-full bg-[#06120d] border border-white/10 flex items-center justify-center text-xs font-bold font-mono text-[#10b981] shrink-0">
                  0{step.step}
                </div>
                {step.step < 7 && (
                  <div className="w-[1px] h-20 bg-white/10 mt-2" />
                )}
              </div>
              
              {/* Description Column */}
              <div className="flex-1 pt-1.5">
                <h4 className="text-base font-bold text-white tracking-wide">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs leading-5 text-white/55">
                  {step.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
