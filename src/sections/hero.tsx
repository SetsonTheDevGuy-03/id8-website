"use client";

import { ArrowRight, Bot, Code, Cpu, Landmark, Layers3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32 bg-grid">
      {/* Visual background glows */}
      <div className="absolute top-1/4 left-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#72f0a8]/8 blur-[100px]" />
      
      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Hero Content */}
        <Reveal>
          <div className="flex flex-col items-start">
            <Badge className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-[#72f0a8]/20 bg-[#72f0a8]/6 text-xs font-bold uppercase tracking-wider text-[#72f0a8]">
              <Sparkles className="size-3" />
              Namibia-born Digital Systems Studio
            </Badge>
            
            <h1 className="mt-8 text-4xl font-extrabold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              Build smarter <br className="hidden sm:inline" />
              <span className="text-gradient-green">digital systems</span> <br />
              for tomorrow.
            </h1>
            
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              ID8 Technologies designs, builds, automates, researches, markets, and launches websites, software platforms, AI workflows, brand systems, and product experiences for Africa&apos;s next generation of businesses.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 w-full sm:w-auto sm:flex-row">
              <ButtonLink href="#contact" className="px-7 py-3.5 text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(114,240,168,0.25)]">
                Start a Project
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink href="#work" variant="secondary" className="px-7 py-3.5 text-sm uppercase tracking-wider">
                Explore Our Work
              </ButtonLink>
            </div>

            {/* Quick strategic links strip */}
            <div className="mt-12 w-full border-t border-white/5 pt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Studio Focus</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60 font-medium">
                <span>Software</span>
                <span className="text-white/20">•</span>
                <span>AI Systems</span>
                <span className="text-white/20">•</span>
                <span>Websites</span>
                <span className="text-white/20">•</span>
                <span>Strategy</span>
                <span className="text-white/20">•</span>
                <span>Event Digital</span>
                <span className="text-white/20">•</span>
                <span>FinTech</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Interactive Mockup Visual */}
        <Reveal delay={0.2} className="relative">
          <div className="relative mx-auto flex aspect-square max-w-[420px] items-center justify-center sm:max-w-[450px]">
            {/* Pulsing orbit rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[#72f0a8]/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-dotted border-[#22d3ee]/10"
            />

            {/* Center glowing 3D cube card wrapper */}
            <div className="relative z-10 flex size-56 items-center justify-center rounded-[3rem] border border-[#72f0a8]/25 bg-[#030706]/80 p-8 shadow-[0_0_80px_rgba(114,240,168,0.15)] backdrop-blur-xl">
              <div className="absolute inset-1 rounded-[2.75rem] bg-gradient-to-tr from-[#72f0a8]/5 to-transparent pointer-events-none" />
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 180, 360],
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
                className="flex size-36 items-center justify-center rounded-[2.25rem] border border-white/10 bg-[#06120d]/60 shadow-2xl backdrop-blur-xl"
              >
                <Layers3 aria-hidden="true" className="size-16 text-[#72f0a8]" />
              </motion.div>
            </div>

            {/* Floating Mini Technology Cards */}
            {/* 1. AI Automation */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute -top-4 -left-6 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#030706]/75 px-4 py-2.5 shadow-xl backdrop-blur-md"
            >
              <div className="rounded-lg bg-[#a78bfa]/10 p-1.5 text-[#a78bfa]">
                <Bot className="size-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">AI Workflows</p>
                <p className="text-xs font-semibold text-white">Active Automations</p>
              </div>
            </motion.div>

            {/* 2. Web Platforms */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/4 -right-12 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#030706]/75 px-4 py-2.5 shadow-xl backdrop-blur-md"
            >
              <div className="rounded-lg bg-[#72f0a8]/10 p-1.5 text-[#72f0a8]">
                <Code className="size-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#72f0a8]">Web Platforms</p>
                <p className="text-xs font-semibold text-white">Scale Architectures</p>
              </div>
            </motion.div>

            {/* 3. FinTech APIs */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-6 -left-8 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#030706]/75 px-4 py-2.5 shadow-xl backdrop-blur-md"
            >
              <div className="rounded-lg bg-[#22d3ee]/10 p-1.5 text-[#22d3ee]">
                <Landmark className="size-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">FinTech APIs</p>
                <p className="text-xs font-semibold text-white">Secure Payments</p>
              </div>
            </motion.div>

            {/* 4. Strategic Growth */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
              className="absolute -bottom-2 -right-4 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#030706]/75 px-4 py-2.5 shadow-xl backdrop-blur-md"
            >
              <div className="rounded-lg bg-[#d9ff73]/10 p-1.5 text-[#d9ff73]">
                <Cpu className="size-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#d9ff73]">Custom Systems</p>
                <p className="text-xs font-semibold text-white">Operational Scale</p>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
