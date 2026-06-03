"use client";

import { Award, Compass, Heart, Shield } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const coreValues = [
  {
    title: "Systems, Not Templates",
    description: "We avoid generic, bloated visual themes. We engineer lightweight, fast, secure React systems custom-tailored to solve business bottlenecks.",
    icon: Compass,
  },
  {
    title: "Full Intellectual Property",
    description: "We guarantee complete ownership, code transfers, domain handovers, and strict data privacy protections upon project signoff.",
    icon: Shield,
  },
  {
    title: "100% Local Outcomes",
    description: "Namibia-born studio building software tailored to the structural constraints and opportunities of regional African markets.",
    icon: Award,
  },
  {
    title: "Human Partnership First",
    description: "No robotic tickets or fake scale. You collaborate directly with senior product engineers committed to your systems success.",
    icon: Heart,
  },
];

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden border-b border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -z-10 size-[32rem] rounded-full bg-[#10b981]/3 blur-[120px] pointer-events-none" />

      <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20 items-center">
        {/* Left Column: Heading and founding story */}
        <Reveal>
          <div className="flex flex-col items-start text-left">
            <SectionHeading
              eyebrow="Founder-Led & Dedicated"
              title="Built in Namibia. Designed for Africa's next business generation."
              description="ID8 Technologies was established on the firm belief that modern African enterprises do not only need generic visual templates â€” they need integrated, high-performance digital systems."
            />
            
            <p className="mt-5 text-sm leading-7 text-white/60">
              Too many scaling businesses operate with scattered tools, unsecure databases, manual operations, and blind marketing campaigns. ID8 closes this execution gap by connecting brand design, custom software engineering, AI workflow integration, and strategic research into one unified studio.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/60">
              We are founder-led, technically rigorous, and structured for organizations that want to operate with absolute clarity, confidence, and efficiency.
            </p>

            {/* windhoek coordinate badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/5 bg-white/[0.01] text-[10px] font-mono uppercase tracking-wider text-white/45">
              <span className="size-1.5 rounded-full bg-[#10b981]" />
              <span>Windhoek Headquarters Â· Latitude -22.5609, Longitude 17.0658</span>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Values grid */}
        <div className="grid gap-4 sm:grid-cols-2 text-left">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <Reveal key={val.title} delay={idx * 0.05} className="h-full">
                <GlassCard className="h-full p-5 border-white/5 bg-[#06120d]/20 hover:border-[#10b981]/20 transition duration-300 flex flex-col justify-start">
                  <div className="rounded-xl bg-[#10b981]/5 border border-[#10b981]/10 p-2.5 text-[#10b981] w-fit shrink-0">
                    <Icon className="size-4.5" />
                  </div>
                  <h4 className="mt-4 text-sm font-bold text-white tracking-wide">
                    {val.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-white/50">
                    {val.description}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
