"use client";

import { ArrowRight, CheckCircle2, Shield, Zap, Globe } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "6+", label: "Industries Served" },
  { value: "100%", label: "Custom Built" },
];

const proofPoints = [
  "Invest in Africa Trade Expo 2026 — Official Digital Partner",
  "NowNow Tours & Safaris — Tourism Platform",
  "DTS Football Club — Digital Identity",
  "Coding Kids Robotics — Programme Systems",
];

const capabilities = [
  {
    icon: Globe,
    label: "Websites & Digital Presence",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Shield,
    label: "Software & Business Systems",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Zap,
    label: "AI Automation & Workflows",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden bg-[#020204]">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-emerald-500/8 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/6 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-emerald-900/10 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — Main content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-8">

            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-widest">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Windhoek, Namibia · Est. 2024
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl tracking-tight text-white leading-[1.1]">
                Digital systems
                <br />
                engineered for{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                  African business
                </span>
                <br />
                that means it.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-lg">
                ID8 Technologies designs and builds websites, software platforms, AI automations, and brand systems for organisations that need to operate with precision, speed, and confidence.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] active:scale-95"
                >
                  Start a Project
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/6 hover:border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </Reveal>

            {/* Stats row */}
            <Reveal delay={0.2}>
              <div className="flex items-center gap-8 pt-2 border-t border-white/5 w-full">
                {stats.map((s) => (
                  <div key={s.label} className="text-left">
                    <p className="font-display font-bold text-2xl text-white tracking-tight">{s.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Proof strip */}
            <Reveal delay={0.25}>
              <div className="space-y-2.5 w-full">
                <p className="text-[10px] uppercase tracking-widest text-white/35 font-mono font-bold">Trusted by</p>
                <div className="flex flex-col gap-1.5">
                  {proofPoints.map((p, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="size-3 text-emerald-500 shrink-0" />
                      <span className="text-xs text-white/55">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — Founder + capability panel */}
          <div className="lg:col-span-6 relative">
            <Reveal delay={0.15}>
              <div className="relative">

                {/* Main founder photo */}
                <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:max-w-none border border-emerald-500/20 shadow-[0_0_80px_rgba(16,185,129,0.15)]">
                  {/* Dark overlay to blend white studio background */}
                  <div className="absolute inset-0 bg-[#020204]/40 z-10 mix-blend-multiply" />
                  {/* Bottom gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-[#020204]/20 to-[#020204]/10 z-[11]" />
                  {/* Emerald top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-500 z-20" />
                  <Image
                    src="/images/founderA.jpg"
                    alt="Setson Neumbo — Founder & CEO, ID8 Technologies"
                    fill
                    priority
                    className="object-cover object-top"
                  />

                  {/* Bottom overlay info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <p className="font-display font-bold text-white text-base leading-tight">
                      Setson Tangi Neumbo
                    </p>
                    <p className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mt-1">
                      Founder & CEO, ID8 Technologies
                    </p>
                    <p className="text-xs text-white/50 mt-2 leading-relaxed">
                      Computer Science · Systems Builder · Namibia
                    </p>
                  </div>
                </div>

                {/* Floating capability tags */}
                <div className="absolute -left-4 top-8 space-y-2.5 hidden lg:flex flex-col">
                  {capabilities.map((cap) => {
                    const Icon = cap.icon;
                    return (
                      <div
                        key={cap.label}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border backdrop-blur-md bg-[#020204]/80 ${cap.bg} text-[10px] font-bold uppercase tracking-wide ${cap.color} shadow-lg`}
                      >
                        <Icon className="size-3 shrink-0" />
                        <span className="whitespace-nowrap">{cap.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Floating availability badge */}
                <div className="absolute -right-2 top-6 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl border border-emerald-500/20 bg-[#020204]/90 backdrop-blur-md shadow-lg">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider whitespace-nowrap">
                    Taking New Projects
                  </span>
                </div>

                {/* WhatsApp quick contact */}
                <a
                  href="https://wa.me/264818073643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -right-2 bottom-24 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-[#020204]/90 backdrop-blur-md hover:border-emerald-500/30 transition-colors shadow-lg group"
                >
                  <div className="size-5 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <svg className="size-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white/70 group-hover:text-white transition-colors uppercase tracking-wider whitespace-nowrap">
                    WhatsApp Us
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
