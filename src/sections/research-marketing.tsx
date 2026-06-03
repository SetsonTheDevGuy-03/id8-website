"use client";

import { BarChart3, LineChart, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const pipelineStages = [
  "Research",
  "Positioning",
  "Campaign Strategy",
  "Website/Funnel",
  "Lead Capture",
  "Reporting",
  "Optimization",
];

function SearchIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z"
      />
    </svg>
  );
}

const strategyCards = [
  {
    title: "Market Research",
    description: "Understand your audience, regional competitor profiles, and market gaps before launching.",
    icon: SearchIcon,
  },
  {
    title: "Digital Audits",
    description: "Review your web platforms, social assets, and digital operational tools to fix weak spots.",
    icon: ShieldAlert,
  },
  {
    title: "Campaign Strategy",
    description: "Plan social calendars, ad systems, and brand messages around specific business objectives.",
    icon: Sparkles,
  },
  {
    title: "Lead Funnels",
    description: "Turn traffic into paying clients using landing pages, WhatsApp flows, and quick reply systems.",
    icon: TrendingUp,
  },
  {
    title: "Reporting & Insights",
    description: "Track performance using simple analytics dashboards that show what campaigns are working.",
    icon: BarChart3,
  },
];

export function ResearchMarketing() {
  return (
    <Section id="strategy" className="relative overflow-hidden border-b border-white/5">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-3/4 -z-10 size-[32rem] rounded-full bg-[#fdba74]/3 blur-[120px] pointer-events-none" />

      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 items-center">
        {/* Left Column: Heading and pipeline */}
        <Reveal>
          <div className="flex flex-col items-start text-left">
            <SectionHeading
              eyebrow="Research + Marketing"
              title="From market intelligence to measurable campaigns."
              description="Beautiful websites fall flat without structured strategy behind them. ID8 Technologies acts as an intelligence partner: mapping your market, auditing competitors, launching growth campaigns, and capturing leads."
            />
            
            <p className="mt-4 text-sm leading-7 text-white/55">
              We connect your market research directly with campaign actions, turning user attention into strategic qualified leads while measuring conversion performance.
            </p>

            {/* Pipeline visual diagram */}
            <div className="mt-10 w-full">
              <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-5">
                Our Digital Growth Pipeline
              </p>
              
              <div className="flex flex-col gap-3.5 pl-4 border-l border-[#fdba74]/20 relative">
                {pipelineStages.map((stage, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    {/* Ring Indicator */}
                    <div className="absolute left-[-4.5px] size-2 rounded-full border border-[#fdba74] bg-[#030706] transition duration-300 group-hover:scale-125" />
                    
                    <span className="text-xs text-white/35 font-mono">0{idx + 1}</span>
                    <span className="text-xs font-semibold tracking-wide text-white/80 group-hover:text-[#fdba74] transition duration-200">
                      {stage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Dashboard-style glass panel with strategy cards */}
        <Reveal delay={0.15}>
          <div className="rounded-[2rem] border border-white/10 bg-[#06120d]/40 p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute inset-1 rounded-[1.85rem] bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-red-500" />
                <span className="size-2 rounded-full bg-yellow-500" />
                <span className="size-2 rounded-full bg-green-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2 font-mono">
                  growth-dashboard.json
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#fdba74]">
                <LineChart className="size-4 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider font-mono">Real-time indicators</span>
              </div>
            </div>

            {/* List of cards */}
            <div className="flex flex-col gap-4">
              {strategyCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <GlassCard
                    key={index}
                    className="p-4 border-white/5 hover:border-[#fdba74]/20 hover:bg-white/[0.04] transition-all flex items-start gap-4"
                  >
                    <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3 text-[#fdba74] shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        {card.title}
                      </h4>
                      <p className="mt-1 text-xs leading-5 text-white/55">
                        {card.description}
                      </p>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
            
            {/* Interactive growth stats visual */}
            <div className="mt-6 border-t border-white/5 pt-5 grid grid-cols-3 gap-2.5 text-center">
              <div className="rounded-xl bg-white/[0.02] p-3 border border-white/5">
                <p className="text-sm font-bold text-[#72f0a8]">+$14k</p>
                <p className="text-[9px] uppercase tracking-wider text-white/40 mt-1 font-mono">Campaign Spend</p>
              </div>
              <div className="rounded-xl bg-white/[0.02] p-3 border border-white/5">
                <p className="text-sm font-bold text-[#22d3ee]">4.8%</p>
                <p className="text-[9px] uppercase tracking-wider text-white/40 mt-1 font-mono">Conversion CTR</p>
              </div>
              <div className="rounded-xl bg-white/[0.02] p-3 border border-white/5">
                <p className="text-sm font-bold text-[#fdba74]">+$32.5k</p>
                <p className="text-[9px] uppercase tracking-wider text-white/40 mt-1 font-mono">Attributed ROI</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
