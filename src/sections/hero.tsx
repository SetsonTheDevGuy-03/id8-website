"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Code2, Bot, Rocket, Users, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";
import Image from "next/image";

const words = ["mobile app", "AI systems", "websites", "fintech tools", "brand platform"];

const cardData = [
  {
    title: "AI, Data & Automation",
    desc: "Intelligent systems that learn, adapt, and scale.",
    icon: Sparkles,
    color: "from-blue-500/20 to-indigo-500/5 text-blue-400 border-blue-500/20",
    href: "/services",
  },
  {
    title: "Software Development",
    desc: "Robust, scalable, and secure software solutions.",
    icon: Code2,
    color: "from-cyan-500/20 to-blue-500/5 text-cyan-400 border-cyan-500/20",
    href: "/services",
  },
  {
    title: "Product Design & MVPs",
    desc: "Human-centered design that validates and scales.",
    icon: Rocket,
    color: "from-purple-500/20 to-indigo-500/5 text-purple-400 border-purple-500/20",
    href: "/services",
  },
  {
    title: "Expert IT Teams",
    desc: "On-demand talent to accelerate your goals.",
    icon: Users,
    color: "from-emerald-500/20 to-teal-500/5 text-emerald-400 border-emerald-500/20",
    href: "/about",
  },
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => fullWord.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between pt-24 pb-12 sm:pt-28 md:pt-32 overflow-hidden bg-[#020204]">
      {/* Dynamic Background Swirling Glows */}
      <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      {/* Far Left Scroll Indicator (Desktop Only) */}
      <div className="hidden lg:flex absolute left-8 top-1/3 bottom-12 flex-col items-center justify-between pointer-events-none select-none z-20">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-white/40">
          <span className="text-[10px] font-mono">&#9906;</span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase rotate-90 my-24 origin-center">
          Scroll
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
        {/* Left Column: Heading and CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6 md:space-y-8">
          <Reveal>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.15]">
              Build your <br />
              <span className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-[#10b981] min-w-[280px]">
                {currentText}
                <span className="absolute -right-1.5 top-0 bottom-0 w-[2px] bg-cyan-400 animate-pulse" />
              </span>{" "}
              <br />
              with strategy, <br />
              design, and execution.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-sans text-slate-350 text-base md:text-lg leading-relaxed max-w-xl">
              Premium software engineering and digital innovation company delivering AI systems, websites, apps, and fintech solutions that drive real business impact.
            </p>
          </Reveal>

          {/* Call-to-actions */}
          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:brightness-110 active:scale-95 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.35)]"
              >
                Book a call
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-white/25 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all"
              >
                View our work
              </Link>
            </div>
          </Reveal>

          {/* Social Proof Star Review Stripe */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5 w-full">
              <span className="font-sans text-xs text-white/50">Trusted by leaders worldwide</span>
              
              {/* Overlay Avatars */}
              <div className="flex -space-x-2.5">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop&q=80",
                ].map((src, i) => (
                  <div key={i} className="relative w-7 h-7 rounded-full border border-slate-900 overflow-hidden bg-slate-800">
                    <img src={src} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Star details */}
              <div className="flex items-center gap-1.5 ml-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3 fill-current" />
                  ))}
                </div>
                <span className="font-mono text-xs text-white font-bold">4.9</span>
                <span className="font-sans text-[10px] text-white/40">from 120+ reviews</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Stunning ID8 Glowing Cube Visual */}
        <div className="lg:col-span-6 flex items-center justify-center relative select-none">
          <Reveal delay={0.25}>
            <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[500px] md:h-[500px]">
              {/* Circular swirling cosmic light-trails */}
              <div className="absolute inset-0 border border-blue-500/10 rounded-full animate-[spin_25s_linear_infinite]" />
              <div className="absolute inset-8 border border-dashed border-cyan-500/15 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-16 border border-dotted border-indigo-500/20 rounded-full animate-[spin_18s_linear_infinite]" />

              {/* Floating ID8 Tech Cube Asset */}
              <div className="absolute inset-4 sm:inset-12 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px]"
                >
                  <Image
                    src="/images/id8_cube_hero.png"
                    alt="ID8 glowing cube"
                    fill
                    priority
                    className="object-contain drop-shadow-[0_0_60px_rgba(59,130,246,0.4)]"
                  />
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom Core Pillars Grid Overlay */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mt-12 md:mt-16 relative z-10">
        <Reveal delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardData.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Link
                  key={idx}
                  href={card.href}
                  className={`group relative glass border border-white/5 bg-gradient-to-br ${card.color} p-5 rounded-[20px] transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.04] text-left flex items-start justify-between`}
                >
                  <div className="space-y-2.5">
                    <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center bg-white/[0.02] text-current shrink-0">
                      <Icon className="size-4.5 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-sm text-white tracking-wide">
                        {card.title}
                      </h4>
                      <p className="font-sans text-xs text-white/50 mt-1 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  <span className="text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-xs font-bold leading-none select-none">
                    &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
