"use client";

import Image from "next/image";
import { MapPin, GraduationCap, Zap, ArrowRight, Linkedin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function Founder() {
  const credibilityCards = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "BSc Computer Science",
      sub: "Namibia University of Science & Technology",
    },
    {
      icon: MapPin,
      label: "Based",
      value: "Windhoek, Namibia",
      sub: "Raised in Swakopmund · Africa-focused",
    },
    {
      icon: Zap,
      label: "Approach",
      value: "Systems Thinking",
      sub: "Design · Code · Strategy · AI",
    },
  ];

  return (
    <Section id="founder" className="relative overflow-hidden subtle-grid border-t border-white/5">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/4 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/4 blur-[140px] pointer-events-none" />

      <Container>
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section label */}
          <Reveal>
            <div className="mb-16 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
                About the Founder
              </span>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                The person behind ID8.
              </h2>
              <div className="h-[2px] w-10 bg-emerald-500 rounded" />
            </div>
          </Reveal>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left — Photo + contact */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">

              <Reveal delay={0.1}>
                {/* Founder photo */}
                <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-[#0d0d12] border border-white/8 shadow-2xl">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-500" />

                  <Image
                    src="/images/founderB.jpg"
                    alt="Setson Neumbo — Founder & CEO, ID8 Technologies"
                    fill
                    className="object-cover object-top"
                    priority
                  />

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <p className="font-display font-bold text-white text-lg leading-tight">
                      Setson Tangi Natangwe Neumbo
                    </p>
                    <p className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mt-1">
                      Founder &amp; CEO, ID8 Technologies
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                {/* Contact / social */}
                <div className="glass border border-white/10 p-5 rounded-[20px] space-y-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 font-bold block">
                    Connect
                  </span>
                  <div className="space-y-3">
                    <a
                      href="mailto:founder@id8tech.com"
                      className="flex items-center gap-3 text-xs text-white/60 hover:text-emerald-400 transition-colors group"
                    >
                      <span className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors text-white/40">
                        @
                      </span>
                      founder@id8tech.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/setson-neumbo-3a0306245/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xs text-white/60 hover:text-emerald-400 transition-colors group"
                    >
                      <span className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                        <Linkedin className="w-3 h-3 text-white/40 group-hover:text-emerald-400 transition-colors" />
                      </span>
                      LinkedIn Profile
                      <ArrowRight className="w-3 h-3 ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <a
                  href="#contact"
                  className="block w-full text-center py-3.5 px-5 rounded-[16px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest hover:bg-emerald-500/15 hover:border-emerald-500/40 transition-all"
                >
                  Work with Setson
                </a>
              </Reveal>

            </div>

            {/* Right — Bio */}
            <div className="lg:col-span-8 space-y-10">

              <Reveal delay={0.15}>
                <div className="space-y-5 text-white/70 text-[15px] leading-[1.8]">

                  <p>
                    <strong className="text-white font-semibold">Setson Tangi Natangwe Neumbo</strong> is a Namibian
                    founder, product designer, and systems thinker. A Computer Science graduate from NUST, raised in
                    Swakopmund and now based in Windhoek, his background combines software development, visual design,
                    strategic communication, entrepreneurship, and a deep interest in how technology can make African
                    organisations more capable.
                  </p>

                  <p>
                    His journey started long before ID8 was formally registered — through early product ideas,
                    freelance design work, teaching programming and robotics, building websites, experimenting with
                    fintech concepts, and helping organisations communicate their work more professionally. What emerged
                    from that experience is an approach that does not think in websites, apps, or graphics alone.{" "}
                    <strong className="text-white">It thinks in systems.</strong>
                  </p>

                  <p>
                    Every project at ID8 begins with one question:{" "}
                    <em className="text-white/90 not-italic font-medium">
                      how can this make the person, business, or organisation more capable?
                    </em>
                  </p>

                  <p>
                    That philosophy shaped ID8 into more than a design or software studio. The company sits at the
                    intersection of design, business systems, AI-assisted productivity, fintech thinking, and strategic
                    communication — building digital infrastructure that helps Namibian and African organisations
                    operate with more clarity, professionalism, and intelligence.
                  </p>

                  <p>
                    From websites and event campaigns to publication design, product prototypes, and internal workflow
                    systems, the goal is always the same: create visible proof, document the process, improve the
                    system, and turn every project into a stronger foundation for the next one.
                  </p>

                </div>
              </Reveal>

              {/* Pull quote */}
              <Reveal delay={0.2}>
                <blockquote className="relative pl-6 border-l-[3px] border-emerald-500">
                  <p className="font-display text-lg sm:text-xl text-white/90 italic leading-relaxed">
                    &ldquo;I started ID8 because I believe technology should make people and organisations more
                    capable.&rdquo;
                  </p>
                  <footer className="mt-3 font-mono text-[10px] uppercase tracking-widest text-white/40">
                    — Setson Neumbo, Founder
                  </footer>
                </blockquote>
              </Reveal>

              {/* 3 credibility cards */}
              <Reveal delay={0.25}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {credibilityCards.map((card, idx) => {
                    const CardIcon = card.icon;
                    return (
                      <div
                        key={idx}
                        className="glass border border-white/8 p-5 rounded-[20px] space-y-3 hover:border-emerald-500/20 transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                          <CardIcon className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 font-bold">
                            {card.label}
                          </p>
                          <p className="font-display font-semibold text-sm text-white">{card.value}</p>
                          <p className="text-[11px] text-white/50 leading-snug">{card.sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>

            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
