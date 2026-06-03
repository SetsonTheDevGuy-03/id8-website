"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { Check, ArrowRight, Sparkles, FolderPlus, Trash2, HeartHandshake, Layers } from "lucide-react";

interface ServicesOverviewProps {
  selectedCartServices: string[];
  onToggleCartService: (serviceTitle: string) => void;
}

export function ServicesOverview({
  selectedCartServices,
  onToggleCartService,
}: ServicesOverviewProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);

  const activeService = services.find((s) => s.id === activeServiceId) || services[0];

  const handleGoToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-transparent relative overflow-hidden subtle-grid">
      {/* Glow asset */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="text-left max-w-2xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Connected Capabilities
            </span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Connected digital services designed for scale.
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              We guide businesses from simple launches to intelligent workflow, branding consistency, and platform builds. Click on any capability to view detailed sub-services, outcomes, and add them to your custom project configuration.
            </p>
          </div>

          {/* Real-time Project estimation cart indicator */}
          <div className="glass border border-white/10 p-5 rounded-[24px] max-w-sm w-full text-left bg-white/[0.02] hover:border-blue-500/30 transition-colors self-start md:self-end">
            <div className="flex items-center gap-2 mb-2 font-display text-sm font-semibold text-white">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Project Estimate Dashboard
            </div>
            <p className="font-sans text-xs text-slate-400 leading-relaxed mb-3">
              Add services to configure a custom brief. We provide starting rates and custom recommendations.
            </p>
            <div className="font-mono text-xs text-emerald-400 font-bold flex justify-between items-center bg-white/[0.04] px-3 py-2 rounded-lg border border-white/10">
              <span>Selected Capabilities:</span>
              <span className="bg-emerald-400 text-black px-1.5 py-0.5 rounded text-[11px] font-extrabold animate-bounce">
                {selectedCartServices.length}
              </span>
            </div>
            {selectedCartServices.length > 0 && (
              <button
                onClick={handleGoToContact}
                className="w-full mt-3 py-2.5 text-center rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-sans text-xs font-semibold hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Assemble Scope & Quote &rarr;
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Services lists tabs (Col 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {services.map((item) => {
              const isActive = activeServiceId === item.id;
              const isSelectedInCart = selectedCartServices.includes(item.title);
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveServiceId(item.id)}
                  className={`relative p-5 rounded-[20px] border text-left transition-all duration-300 focus:outline-none cursor-pointer flex items-center justify-between gap-4 ${
                    isActive
                      ? "glass border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.15)] bg-white/[0.08]"
                      : "glass/40 border-white/5 hover:border-white/10 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#f4fff8]/40 block">
                      {item.category}
                    </span>
                    <span className="font-display font-medium text-base text-white block">
                      {item.title}
                    </span>
                  </div>

                  {/* Indicators (Active / Selected in cart status) */}
                  <div className="flex items-center gap-2 shrink-0">
                    {isSelectedInCart && (
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#10b981]" title="Selected in Estimator">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                    <span className={`w-2 h-2 rounded-full ${isActive ? "bg-emerald-400" : "bg-white/10"}`} />
                  </div>

                  {/* Underlay glow bar on active */}
                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r bg-emerald-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right panel: Active selected Service Details (Col 7) */}
          <div className="lg:col-span-7 glass bg-white/[0.02] p-8 sm:p-10 rounded-[24px] text-left relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 rounded-full bg-blue-500/2 blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Category eyebrow */}
              <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-white/5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#10b981] font-bold block">
                    {activeService.category}
                  </span>
                  <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white mt-1">
                    {activeService.title}
                  </h3>
                </div>

                {/* Add to Cartesian estimate button */}
                <button
                  onClick={() => onToggleCartService(activeService.title)}
                  className={`px-4.5 py-2 rounded-full font-sans text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedCartServices.includes(activeService.title)
                      ? "bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/15"
                      : "bg-emerald-500/10 text-[#10b981] border border-emerald-500/20 hover:bg-[#10b981]/15"
                  }`}
                >
                  {selectedCartServices.includes(activeService.title) ? (
                    <>
                      <Trash2 className="w-3.5 h-3.5" />
                      Omit from Estimate
                    </>
                  ) : (
                    <>
                      <FolderPlus className="w-3.5 h-3.5" />
                      Add to Project Estimate
                    </>
                  )}
                </button>
              </div>

              {/* Core description text */}
              <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeService.summary}
              </p>

              {/* Grid split of details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                
                {/* Specific outputs checklist */}
                <div className="space-y-3.5 text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#f4fff8]/40 block font-bold">
                    Technical Deliverables
                  </span>
                  <ul className="space-y-2.5">
                    {activeService.subServices.map((sub, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct business outcomes or properties */}
                <div className="space-y-3.5 text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#f4fff8]/40 block font-bold">
                    Strategic Business Outcome
                  </span>
                  <ul className="space-y-4">
                    {activeService.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed bg-white/[0.02] border border-white/5 p-2.5 rounded-xl">
                        <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Future Labs integration prompt */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#f4fff8]/40">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Structured delivery timeline: 2 to 6 weeks
                </span>
                <span className="text-emerald-400">Consultation-based rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Future Capabilities Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <span className="font-display font-medium text-sm text-white block">
              Exploring custom banking, checkout UX, metadata indexing or custom APIs?
            </span>
            <span className="font-sans text-xs text-slate-450 block">
              We design specialized billing interfaces, compliance flowsheets (KYC/KYB), and open API schemas inside ID8 Labs.
            </span>
          </div>
          <button
            onClick={handleGoToContact}
            className="px-5 py-2.5 rounded-full font-mono text-xs font-semibold text-emerald-400 border border-emerald-500/25 hover:bg-emerald-500/5 hover:border-emerald-500/50 transition-all shrink-0 cursor-pointer"
          >
            Review Labs Roadmap &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
