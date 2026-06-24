"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquare, Send, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { services } from "@/data/services";

import { useCart } from "@/context/CartContext";

export function Contact() {
  const { selectedCartServices, toggleCartService } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    budgetRange: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const budgetOptions = [
    "Under N$3,500",
    "N$3,500 â€“ N$7,500",
    "N$7,500 â€“ N$15,000",
    "N$15,000 â€“ N$35,000",
    "N$35,000+",
    "Not sure yet"
  ];

  const timelineOptions = [
    "Urgent (less than 2 weeks)",
    "2 â€“ 4 weeks",
    "1 â€“ 2 months",
    "2+ months / Long-term",
    "Flexible"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const payload = {
        ...formData,
        services: selectedCartServices,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitStatus("success");
      } else {
        console.error("Contact submit failed", await res.text());
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="relative overflow-hidden pt-20 pb-28">
      {/* Background visual glows */}
      <div className="absolute top-1/2 left-1/2 -z-10 size-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 -z-10 size-[25rem] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 items-start">
        {/* Left Column:æˆ˜ç•¥ CTA */}
        <Reveal>
          <div className="flex flex-col items-start text-left">
            <SectionHeading
              eyebrow="Consultation-First"
              title="Let's build something serious."
              description="Tell us what you are building, what bottlenecks your business suffers from, and when you need to launch. We will help you scope the project and draft a clear roadmap."
            />
            
            <p className="mt-5 text-sm leading-7 text-white/55">
              Once you submit this inquiry request, our product engineering team will review it and reply within 24 hours to schedule a diagnostic strategy call.
            </p>

            {/* Direct Channels Cards */}
            <div className="mt-10 flex flex-col gap-4 w-full">
              <a
                href="https://wa.me/264812345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.01] p-4.5 hover:border-emerald-500/25 hover:bg-emerald-500/5 transition duration-300"
              >
                <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
                  <MessageSquare className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">Direct WhatsApp</h4>
                  <p className="text-xs text-white/50 mt-0.5">Quick strategy chat: +264 81 234 5678</p>
                </div>
              </a>

              <a
                href="mailto:hello@id8technologies.com"
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.01] p-4.5 hover:border-blue-500/25 hover:bg-blue-500/5 transition duration-300"
              >
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <Send className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">Direct Email</h4>
                  <p className="text-xs text-white/50 mt-0.5">General briefs: hello@id8technologies.com</p>
                </div>
              </a>
            </div>

            {/* Local Namibia reference */}
            <p className="mt-8 text-xs font-mono text-white/35">
              Based in Namibia. Serving ambitious teams across Africa and beyond.
            </p>
          </div>
        </Reveal>

        {/* Right Column: Dynamic Form Block */}
        <Reveal delay={0.15}>
          <GlassCard className="p-6 sm:p-8 border-white/10 bg-[#020204]/40 shadow-2xl relative text-left">
            <div className="absolute inset-1 rounded-[1.85rem] bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            {submitStatus === "success" ? (
              <div className="py-12 px-4 text-center animate-fade-in relative z-10">
                <div className="mx-auto size-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
                  Request Submitted Successfully!
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/60 max-w-md mx-auto">
                  Thank you for reaching out. We have logged your project criteria. Our lead engineer will review the brief and contact you within 24 hours to schedule a discovery call.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 cursor-pointer"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="border-b border-white/5 pb-4 mb-4 flex items-center gap-2 text-emerald-400">
                  <Sparkles className="size-4 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-white/40">
                    Lead Specification Panel
                  </span>
                </div>

                {/* Dynamic Cart Synchronizer (Selected Capabilities selection) */}
                <div className="space-y-3.5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 block font-bold">
                    Select Capabilities Required (Estimator Cart)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service, idx) => {
                      const isSelected = selectedCartServices.includes(service.title);
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => toggleCartService(service.title)}
                          className={`px-3 py-1.5 rounded-lg font-display text-xs font-medium border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                              : "bg-white/[0.02] text-white/60 border-white/10 hover:border-white/25 hover:text-white"
                          }`}
                        >
                          {service.title}
                        </button>
                      );
                    })}
                  </div>
                  <span className="font-sans text-[10px] text-white/40 block italic mt-1">
                    *Tip: Adding capabilities pre-hydrates estimator briefs for accurate review times.
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mt-2">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1.5 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Setson Nangolo"
                      className="w-full rounded-xl border border-white/10 bg-[#050508]/60 px-4 py-3 text-xs text-white placeholder-white/20 focus:border-emerald-500/50 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1.5 font-mono">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Tourism Portal Ltd"
                      className="w-full rounded-xl border border-white/10 bg-[#050508]/60 px-4 py-3 text-xs text-white placeholder-white/20 focus:border-emerald-500/50 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1.5 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="briefs@company.com"
                      className="w-full rounded-xl border border-white/10 bg-[#050508]/60 px-4 py-3 text-xs text-white placeholder-white/20 focus:border-emerald-500/50 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1.5 font-mono">
                      WhatsApp Number
                    </label>
                    <input
                      type="text"
                      id="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="e.g. +264 81..."
                      className="w-full rounded-xl border border-white/10 bg-[#050508]/60 px-4 py-3 text-xs text-white placeholder-white/20 focus:border-emerald-500/50 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="budgetRange" className="block text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1.5 font-mono">
                      Estimated Budget
                    </label>
                    <select
                      id="budgetRange"
                      required
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#050508]/65 px-4 py-3 text-xs text-white focus:border-emerald-500/50 focus:outline-none transition appearance-none cursor-pointer"
                      style={{ backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.4)%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E')", backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat" }}
                    >
                      <option value="" disabled className="bg-[#050508]">Select Budget...</option>
                      {budgetOptions.map(opt => (
                        <option key={opt} value={opt} className="bg-[#050508]">{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1.5 font-mono">
                      Target Timeline
                    </label>
                    <select
                      id="timeline"
                      required
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#050508]/65 px-4 py-3 text-xs text-white focus:border-emerald-500/50 focus:outline-none transition appearance-none cursor-pointer"
                      style={{ backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.4)%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E')", backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat" }}
                    >
                      <option value="" disabled className="bg-[#050508]">Select Timeline...</option>
                      {timelineOptions.map(opt => (
                        <option key={opt} value={opt} className="bg-[#050508]">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1.5 font-mono">
                    Project Description / Brief
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe what systems or features you are looking to design, build, or automate..."
                    className="w-full rounded-xl border border-white/10 bg-[#050508]/60 px-4 py-3 text-xs text-white placeholder-white/20 focus:border-emerald-500/50 focus:outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 py-4 text-xs font-bold uppercase tracking-wider text-white hover:from-emerald-400 hover:to-blue-400 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(16,185,129,0.2)] cursor-pointer"
                >
                  {isSubmitting ? (
                    "Filing Request..."
                  ) : (
                    <>
                      Submit Project Request
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
