"use client";

import { User, Cpu, Code2, Lightbulb, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function Founder() {
  const skills = [
    { name: "Computer Science", category: "Core" },
    { name: "Software Development", category: "Core" },
    { name: "Fintech Systems", category: "Specialty" },
    { name: "AI Automation", category: "Specialty" },
    { name: "UI/UX Architecture", category: "Design" },
    { name: "Product Strategy", category: "Business" },
  ];

  const focusAreas = [
    {
      icon: Cpu,
      title: "Intelligent Automation",
      desc: "Replacing repetitive business operations with resilient, API-driven workflows and AI agents."
    },
    {
      icon: Code2,
      title: "Fintech Systems",
      desc: "Architecting friction-free billing, digital ledgers, and secure integration gateways for retail and services."
    },
    {
      icon: Lightbulb,
      title: "Tactical UI/UX",
      desc: "Shaping interactive structures that prioritize high-density layout balance, user intent, and speed."
    }
  ];

  return (
    <Section id="founder" className="relative overflow-hidden subtle-grid border-t border-white/5">
      {/* Decorative colored glow nodes */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse" />

      <Container>
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section title */}
          <Reveal>
            <div className="space-y-4 mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-[#10b981] flex items-center gap-1.5 font-bold">
                <User className="w-4 h-4 text-[#10b981]" />
                Leadership Profile
              </span>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
                Founder &amp; CEO
              </h2>
              <div className="h-[2px] w-12 bg-emerald-500 rounded" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Founder Digital Badge & Focus tags (Col 5) */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              
              <Reveal delay={0.1}>
                {/* Elegant Founder Profile Card */}
                <div className="glass border border-white/10 p-8 rounded-[28px] relative overflow-hidden shadow-2xl group">
                  {/* Subtle top decoration */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 to-blue-500" />
                  <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
                  
                  <div className="space-y-6 relative z-10">
                    
                    {/* Visual Avatar Placeholder & Basic info */}
                    <div className="flex items-center gap-6">
                      <div className="relative shrink-0">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-blue-500 p-[1.5px] shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                          <div className="w-full h-full rounded-[14px] bg-[#0d0d12] flex items-center justify-center">
                            <span className="font-display font-bold text-2xl tracking-tight text-emerald-400">
                              SN
                            </span>
                          </div>
                        </div>
                        {/* Pulsing indicator */}
                        <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#050508]"></span>
                        </span>
                      </div>
                      
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                          Technical Founder &amp; Architect
                        </span>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                          Setson Tangi Neumbo
                        </h3>
                        <p className="text-xs text-white/60">
                          Software Developer &amp; Entrepreneur
                        </p>
                      </div>
                    </div>

                    {/* Specific metrics about Setson */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/10">
                      <div className="text-left space-y-1">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 block font-bold">Base Location</span>
                        <span className="font-display font-medium text-xs sm:text-sm text-white/80 block">Windhoek, Namibia</span>
                      </div>
                      <div className="text-left space-y-1">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 block font-bold">Age</span>
                        <span className="font-display font-medium text-xs sm:text-sm text-white/80 block">25 Years Old</span>
                      </div>
                    </div>

                    {/* Narrative highlight quote box */}
                    <div className="p-4.5 rounded-2xl bg-white/[0.02] border border-white/5 text-left relative overflow-hidden italic text-xs leading-relaxed text-white/70">
                      <div className="font-display text-emerald-400 text-3xl absolute -left-1 -top-1 font-serif opacity-30 select-none">&ldquo;</div>
                      <p className="relative z-10 pl-4">
                        To help African businesses design, build, automate, and launch the digital systems they need to grow confidently in a modern economy.
                      </p>
                    </div>

                    {/* Skill tags list */}
                    <div className="space-y-3">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 font-bold block">
                        Focus Competencies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 text-[10px] sm:text-xs text-white/70 transition-colors hover:border-emerald-500/20 hover:text-white"
                          >
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                {/* Inquire widget */}
                <div className="glass border border-white/10 p-6 rounded-[24px] space-y-4 text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 font-bold block">
                    Direct Collaboration
                  </span>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Setson reviews early-stage project structures and business automation frameworks directly to design robust execution strategies.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 hover:text-blue-400 hover:underline transition-all cursor-pointer"
                  >
                    <span>Structure your project brief</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </Reveal>

            </div>

            {/* Right Column - Briefing narrative (Col 7) */}
            <div className="lg:col-span-7 space-y-10">
              
              <Reveal delay={0.15}>
                {/* The professional narrative blocks */}
                <div className="space-y-6 text-white/70 text-sm sm:text-base leading-relaxed">
                  
                  <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-emerald-400 first-letter:mr-3 first-letter:float-left">
                    Setson Tangi Neumbo is a 25-year-old Namibian software developer, digital systems builder, designer, and entrepreneur with a strong passion for technology, artificial intelligence, financial systems, digital transformation, and African innovation.
                  </p>
                  
                  <p>
                    As the Founder and CEO of ID8 Technologies, Setson leads the company&apos;s vision, product direction, design strategy, and technical development. His work sits at the intersection of software engineering, product design, AI automation, branding, fintech systems, and business problem-solving.
                  </p>
                  
                  <p>
                    ID8 Technologies was founded from his belief that modern African businesses do not only need better websites or better designs â€” they need <strong className="text-white">better digital systems</strong>. Many companies still operate with scattered tools, manual workflows, weak online presence, poor customer journeys, and limited access to intelligent digital infrastructure. Setson created ID8 to help close that gap.
                  </p>
                  
                  <p>
                    With a background in Computer Science and Software Development, Setson combines technical thinking with creative execution. He is able to move between strategy, design, code, business operations, branding, and product development, allowing him to understand both the technical and human side of digital transformation.
                  </p>

                  <blockquote className="p-5 rounded-2xl bg-emerald-500/[0.03] border-l-4 border-emerald-500 pl-6 text-white/90 text-sm sm:text-[15px] italic leading-relaxed my-8 font-display">
                    &ldquo;African businesses deserve technical infrastructure that stands on equal footing with the top global benchmark platforms. We don&apos;t build temporary toys; we deploy systems styled for operational confidence.&rdquo;
                  </blockquote>

                  <p>
                    His experience includes building websites, digital brand systems, business visuals, event digital assets, startup concepts, software prototypes, and AI-assisted workflows for businesses, events, tourism companies, and emerging ventures. He has also worked across web development, UI/UX design, content systems, digital marketing, business process planning, and product strategy.
                  </p>
                  
                  <p>
                    Setson&apos;s long-term vision is to build ID8 Technologies into one of Namibia&apos;s leading technology companies â€” a company capable of serving businesses locally while building scalable digital products for Africa and beyond. His focus areas include fintech, AI automation, API-driven platforms, tourism technology, business systems, and software products that solve real market problems.
                  </p>

                  <p>
                    Beyond client services, Setson is also building toward <strong className="text-white">ID8 Labs</strong>, the company&apos;s future innovation layer focused on internal products, SaaS tools, fintech prototypes, AI business assistants, event technology, and digital platforms for African businesses.
                  </p>
                  
                  <p>
                    As a young founder, Setson brings energy, adaptability, creativity, and a builder&apos;s mindset to every project. His leadership style is hands-on: he is involved in understanding the real operational problem, shaping the strategy, designing the core experience, guiding the technology, and ensuring that the final product feels practical, professional, and future-ready.
                  </p>

                </div>
              </Reveal>

              <Reveal delay={0.2}>
                {/* Tactical focus milestones row */}
                <div className="space-y-6 pt-8 border-t border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#10b981] font-bold block">
                    Setson&apos;s Core Engineering Targets
                  </span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {focusAreas.map((area, idx) => {
                      const AreaIcon = area.icon;
                      return (
                        <div 
                          key={idx} 
                          className="glass border border-white/5 p-5 rounded-2xl hover:border-emerald-500/20 transition-all space-y-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <AreaIcon className="w-4 h-4" />
                          </div>
                          <h4 className="font-display font-semibold text-sm text-white">{area.title}</h4>
                          <p className="text-xs text-white/60 leading-relaxed text-left">
                            {area.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}
