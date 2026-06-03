"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquare, Send, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    serviceNeeded: "",
    budgetRange: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Console log form details as a placeholder until Supabase integration is wired up
      console.log("Form submission data:", formData);
    }, 1200);
  };

  return (
    <Section id="contact" className="relative overflow-hidden pt-20 pb-28">
      {/* Background visual glows */}
      <div className="absolute top-1/2 left-1/2 -z-10 size-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#72f0a8]/3 blur-[120px] pointer-events-none" />

      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 items-start">
        {/* Left Column:战略 CTA */}
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
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.01] p-4.5 hover:border-[#72f0a8]/25 hover:bg-[#72f0a8]/4 transition duration-300"
              >
                <div className="rounded-xl bg-[#72f0a8]/10 p-3 text-[#72f0a8]">
                  <MessageSquare className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">Direct WhatsApp</h4>
                  <p className="text-xs text-white/50 mt-0.5">Quick strategy chat: +264 81 234 5678</p>
                </div>
              </a>

              <a
                href="mailto:hello@id8technologies.com"
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.01] p-4.5 hover:border-[#22d3ee]/25 hover:bg-[#22d3ee]/4 transition duration-300"
              >
                <div className="rounded-xl bg-[#22d3ee]/10 p-3 text-[#22d3ee]">
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
          <GlassCard className="p-6 sm:p-8 border-white/10 bg-[#06120d]/40 shadow-2xl relative text-left">
            <div className="absolute inset-1 rounded-[1.85rem] bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            {submitStatus === "success" ? (
              <div className="py-12 px-4 text-center animate-fade-in">
                <div className="mx-auto size-16 rounded-full bg-[#72f0a8]/10 border border-[#72f0a8]/20 flex items-center justify-center text-[#72f0a8]">
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
                  className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-white/5 pb-4 mb-4 flex items-center gap-2 text-[#72f0a8]">
                  <Sparkles className="size-4 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-white/40">
                    Project Request Form
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
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
                      placeholder="e.g. Windhoek Founder"
                      className="w-full rounded-xl border border-white/10 bg-[#030706]/60 px-4 py-3 text-xs text-white placeholder-white/20 focus:border-[#72f0a8]/50 focus:outline-none transition"
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
                      className="w-full rounded-xl border border-white/10 bg-[#030706]/60 px-4 py-3 text-xs text-white placeholder-white/20 focus:border-[#72f0a8]/50 focus:outline-none transition"
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
                      className="w-full rounded-xl border border-white/10 bg-[#030706]/60 px-4 py-3 text-xs text-white placeholder-white/20 focus:border-[#72f0a8]/50 focus:outline-none transition"
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
                      className="w-full rounded-xl border border-white/10 bg-[#030706]/60 px-4 py-3 text-xs text-white placeholder-white/20 focus:border-[#72f0a8]/50 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceNeeded" className="block text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1.5 font-mono">
                    Service Needed
                  </label>
                  <select
                    id="serviceNeeded"
                    required
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#030706]/65 px-4 py-3 text-xs text-white focus:border-[#72f0a8]/50 focus:outline-none transition appearance-none"
                    style={{ backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.4)%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E')", backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat" }}
                  >
                    <option value="" disabled className="bg-[#030706]">Select Service...</option>
                    <option value="Website" className="bg-[#030706]">Website & Digital Presence</option>
                    <option value="Software System" className="bg-[#030706]">Software & Business Systems</option>
                    <option value="AI Automation" className="bg-[#030706]">AI Workflow Automation</option>
                    <option value="Product/MVP" className="bg-[#030706]">Product Design & MVP Sprint</option>
                    <option value="Branding" className="bg-[#030706]">Brand Identity & Graphic Assets</option>
                    <option value="Marketing" className="bg-[#030706]">Digital Marketing & Funnels</option>
                    <option value="Research" className="bg-[#030706]">Market Strategy & Competitor Research</option>
                    <option value="Event Digital Package" className="bg-[#030706]">Event Digital Partner Package</option>
                    <option value="FinTech/Product Concept" className="bg-[#030706]">Fintech Solutions Prototype</option>
                    <option value="Other" className="bg-[#030706]">Other / Custom Venture</option>
                  </select>
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
                      className="w-full rounded-xl border border-white/10 bg-[#030706]/65 px-4 py-3 text-xs text-white focus:border-[#72f0a8]/50 focus:outline-none transition appearance-none"
                      style={{ backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.4)%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E')", backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat" }}
                    >
                      <option value="" disabled className="bg-[#030706]">Select Budget...</option>
                      <option value="Under N$3,500" className="bg-[#030706]">Under N$3,500</option>
                      <option value="N$3,500 - N$7,500" className="bg-[#030706]">N$3,500 – N$7,500</option>
                      <option value="N$7,500 - N$15,000" className="bg-[#030706]">N$7,500 – N$15,000</option>
                      <option value="N$15,000 - N$35,000" className="bg-[#030706]">N$15,000 – N$35,000</option>
                      <option value="N$35,000+" className="bg-[#030706]">N$35,000+</option>
                      <option value="Not sure yet" className="bg-[#030706]">Not sure / Flexible</option>
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
                      className="w-full rounded-xl border border-white/10 bg-[#030706]/65 px-4 py-3 text-xs text-white focus:border-[#72f0a8]/50 focus:outline-none transition appearance-none"
                      style={{ backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.4)%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E')", backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat" }}
                    >
                      <option value="" disabled className="bg-[#030706]">Select Timeline...</option>
                      <option value="Urgent" className="bg-[#030706]">Urgent (less than 2 weeks)</option>
                      <option value="2-4 weeks" className="bg-[#030706]">2 – 4 weeks</option>
                      <option value="1-2 months" className="bg-[#030706]">1 – 2 months</option>
                      <option value="2+ months" className="bg-[#030706]">2+ months / Long-term</option>
                      <option value="Flexible" className="bg-[#030706]">Flexible</option>
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
                    className="w-full rounded-xl border border-white/10 bg-[#030706]/60 px-4 py-3 text-xs text-white placeholder-white/20 focus:border-[#72f0a8]/50 focus:outline-none transition resize-none"
                  />
                </div>

                {/* Optional brief upload placeholder */}
                <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.01] p-4 text-center">
                  <span className="text-[10px] text-white/35 font-mono">
                    Drag and drop brief or RFP files (Optional Visual Placeholder)
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#72f0a8] py-4 text-xs font-bold uppercase tracking-wider text-[#030706] hover:bg-[#d9ff73] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(114,240,168,0.2)] hover:shadow-[0_0_25px_rgba(217,255,115,0.4)]"
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
