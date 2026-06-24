"use client";

import { Award, CalendarDays, CheckCircle2, Cpu, Sparkles, Trophy, Users } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";

const deliverables = [
  "Event visual asset systems & holding screens",
  "High-volume speaker & panel slide graphics",
  "Sponsor & partner media visibility layouts",
  "Gala award holding slides & presenter screens",
  "Rapid post-event thank-you & social media recaps",
];

export function ExpoCaseStudy() {
  return (
    <Section id="expo-case-study" className="relative overflow-hidden border-b border-white/5 bg-[#06120d]/20">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -z-10 size-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10b981]/4 blur-[130px] pointer-events-none" />

      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16 items-center">
        {/* Left Column: Case Study Text Details */}
        <Reveal>
          <div className="flex flex-col items-start text-left">
            <Badge className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-[#10b981]/20 bg-[#10b981]/6 text-xs font-bold uppercase tracking-wider text-[#10b981]">
              <Trophy className="size-3 text-[#10b981]" />
              Featured Event Partnership
            </Badge>

            <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.045em] text-white sm:text-5xl leading-[1.1]">
              Invest in Africa <br className="hidden sm:inline" />
              Trade Expo & Business Summit 2026
            </h2>

            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-[#10b981]">
              Event Digital Partner Â· Brand Systems Â· Social Content Â· Screen Visuals
            </p>

            <p className="mt-5 text-sm leading-7 text-white/70">
              ID8 Technologies supported the summit as a dedicated design and digital partner â€” ensuring seamless, professional, and high-volume visual communication across a fast-paced three-day summit.
            </p>

            <div className="mt-6 space-y-4 border-t border-white/5 pt-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">The Challenge</p>
                <p className="mt-1.5 text-xs leading-6 text-white/60">
                  The event required absolute consistency and high-speed delivery of digital assets for speakers, panels, corporate sponsors, gala ceremonies, and rapid social recap content.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 font-semibold">ID8 Deliverables</p>
                <ul className="mt-2.5 space-y-2">
                  {deliverables.map((del, index) => (
                    <li key={index} className="flex items-center gap-3 text-xs text-white/75 font-medium">
                      <CheckCircle2 className="size-4 shrink-0 text-[#10b981]" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 w-full mt-8">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                <p className="text-lg font-bold text-white tracking-tight">3 Days</p>
                <p className="text-[9px] uppercase tracking-wider text-white/40 font-medium">Live Summit</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                <p className="text-lg font-bold text-white tracking-tight">100%</p>
                <p className="text-[9px] uppercase tracking-wider text-white/40 font-medium">Visual Clarity</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                <p className="text-lg font-bold text-white tracking-tight">Multi-Rep</p>
                <p className="text-[9px] uppercase tracking-wider text-white/40 font-medium">Sponsors Served</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Event Speaker Screen Mockup */}
        <Reveal delay={0.2} className="relative">
          <div className="rounded-2xl border border-white/10 bg-[#030706]/90 p-5 shadow-2xl relative">
            <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            {/* Simulated holding screen header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-5 text-[10px] font-mono text-white/40 uppercase tracking-widest">
              <span>Main Stage Presenter Screen</span>
              <span className="flex items-center gap-1 text-[#10b981]">
                <span className="size-1.5 rounded-full bg-[#10b981] animate-ping" />
                Live Broadcast
              </span>
            </div>

            {/* Simulated event speaker card */}
            <div className="rounded-2xl border border-[#10b981]/20 bg-gradient-to-br from-[#06120d] to-[#030706] p-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 size-24 bg-[#10b981]/3 rounded-bl-full pointer-events-none" />

              <p className="text-[9px] font-bold uppercase tracking-widest text-[#10b981] flex items-center gap-1">
                <Sparkles className="size-3" /> Panel Session
              </p>
              <h3 className="mt-3 text-lg font-bold text-white tracking-tight leading-tight">
                Shaping Tomorrow: The Next Generation of African Technology & Infrastructure
              </h3>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="size-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 font-semibold font-mono text-xs">
                  A
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Windhoek Panelist</p>
                  <p className="text-[10px] text-white/50">Director of Infrastructure Systems</p>
                </div>
              </div>

              {/* Event details ticker */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-white/40">
                <span className="flex items-center gap-1">
                  <CalendarDays className="size-3 text-[#10b981]" /> Day 02
                </span>
                <span className="flex items-center gap-1">
                  <Users className="size-3 text-[#10b981]" /> Stage A
                </span>
                <span className="flex items-center gap-1">
                  <Cpu className="size-3 text-[#10b981]" /> ID8 Digital
                </span>
              </div>
            </div>

            {/* Small dynamic holding deck mockups */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-left">
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/35">Award holding</p>
                <div className="mt-2 flex items-center gap-2">
                  <Award className="size-4 text-[#10b981]" />
                  <span className="text-[10px] font-semibold text-white/80">Best Strategic Venture</span>
                </div>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-left">
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/35">Partner placements</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="size-4 rounded-sm bg-gradient-to-tr from-[#10b981] to-[#10b981]" />
                  <span className="text-[10px] font-semibold text-white/80">Premium Sponsor Pack</span>
                </div>
              </div>
            </div>

            {/* Event testimonial note */}
            <div className="mt-4 rounded-xl bg-[#10b981]/5 border border-[#10b981]/10 p-3.5 text-left">
              <p className="text-[11px] leading-5 text-white/70 italic">
                &ldquo;ID8 delivered visually stunning graphics and screen layouts under extremely tight summit timelines. A highly reliable digital partner.&rdquo;
              </p>
              <p className="text-[9px] uppercase tracking-wider text-[#10b981] font-bold mt-2 font-mono">
                â€” summit media team review
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
