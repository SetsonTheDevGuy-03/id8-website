"use client";

import { motion } from "framer-motion";
import { Bot, Code, Cpu, Landmark, Megaphone, Search, Shapes, Sparkles } from "lucide-react";

const capabilities = [
  { label: "Software Systems", icon: Code },
  { label: "AI Workflows", icon: Bot },
  { label: "Modern Websites", icon: Sparkles },
  { label: "Market Research", icon: Search },
  { label: "Digital Marketing", icon: Megaphone },
  { label: "Event Digital Partner", icon: Cpu },
  { label: "FinTech UX Concepts", icon: Landmark },
  { label: "Brand Identity Design", icon: Shapes },
];

export function TrustStrip() {
  // Duplicate list to make infinite loop effect work cleanly
  const doubleList = [...capabilities, ...capabilities];

  return (
    <section className="relative py-6 overflow-hidden border-y border-white/5 bg-[#030706]">
      {/* Decorative side blurs for gradient fading effect */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#030706] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#030706] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-10">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-16 items-center"
        >
          {doubleList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2.5">
                <Icon className="size-4 text-[#10b981]/60" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">
                  {item.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
