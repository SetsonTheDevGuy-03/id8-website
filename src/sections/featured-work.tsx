"use client";

import { useState } from "react";
import { ArrowUpRight, Calendar, Layers, ListChecks } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  // Exclude the Expo summit since it gets its own dedicated visual panel
  const featuredList = projects.filter((p) => p.slug !== "invest-in-africa-expo-2026");
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <Section id="work" className="relative overflow-hidden border-b border-white/5">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 -z-10 size-[32rem] rounded-full bg-[#10b981]/3 blur-[120px] pointer-events-none" />

      <SectionHeading
        eyebrow="Proof & Case Studies"
        title="Serious systems built for real operations."
        description="Our portfolio highlights real-world B2B systems, modern websites, travel booking hubs, and future fintech app prototypes designed to solve operational problems."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredList.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05} className="h-full">
            <GlassCard
              className="flex flex-col justify-between h-full overflow-hidden border-white/5 bg-[#030706]/60 hover:border-[#10b981]/25 p-6 group hover:bg-[#06120d]/40 transition duration-300"
              onClick={() => setActiveProject(activeProject === project.slug ? null : project.slug)}
            >
              <div>
                {/* Category & Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#10b981] bg-[#10b981]/5 px-2.5 py-1 rounded-md border border-[#10b981]/10">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white group-hover:text-[#10b981] transition duration-200">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-xs leading-5 text-white/55">
                  {project.summary}
                </p>

                {/* Click to expand details indicator */}
                <button 
                  className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#10b981]/80 hover:text-[#10b981] transition flex items-center gap-1 focus:outline-none"
                  aria-expanded={activeProject === project.slug}
                >
                  {activeProject === project.slug ? "Hide Challenge & Stack" : "Show Challenge & Stack"}
                  <ArrowUpRight className={`size-3 transition-transform duration-300 ${activeProject === project.slug ? "rotate-45" : ""}`} />
                </button>

                {/* Expanded Details */}
                {activeProject === project.slug && (
                  <div className="mt-5 pt-4 border-t border-white/5 space-y-4 animate-fade-in text-left">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/35 flex items-center gap-1.5">
                        <Layers className="size-3 text-[#10b981]" /> The Challenge
                      </p>
                      <p className="mt-1 text-[11px] leading-4 text-white/70">{project.challenge}</p>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/35 flex items-center gap-1.5">
                        <ListChecks className="size-3 text-[#10b981]" /> Deliverables
                      </p>
                      <ul className="mt-1 space-y-1">
                        {project.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="text-[11px] text-white/60 flex items-center gap-1.5">
                            <span className="size-1 rounded-full bg-[#10b981]" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-white/35">Timeline</p>
                        <p className="text-[10px] font-semibold text-white/85 flex items-center gap-1 mt-0.5">
                          <Calendar className="size-3 text-[#10b981]" /> {project.timeline}
                        </p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-white/35">Stack Used</p>
                        <p className="text-[10px] font-semibold text-white/85 mt-0.5 truncate" title={project.stack?.join(", ")}>
                          {project.stack?.slice(0, 3).join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button Link */}
              <div className="mt-8 border-t border-white/5 pt-4.5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 group-hover:text-white transition">
                  {project.tags.slice(0, 2).join(" . ")}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#10b981] group-hover:text-[#10b981] transition">
                  {project.ctaText}
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
