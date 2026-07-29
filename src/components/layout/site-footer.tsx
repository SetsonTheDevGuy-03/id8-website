import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navigation } from "@/data/navigation";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#06120d]/30 py-16 sm:py-24 overflow-hidden">
      {/* Decorative radial blur in footer background */}
      <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-[#10b981]/3 blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Logo & Founding Brief */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="text-xl font-bold tracking-[-0.04em] text-white flex items-center gap-2.5 group">
              <div className="relative size-6 shrink-0 transition duration-300 group-hover:scale-110">
                <img
                  src="/id8-logo-transparent.svg"
                  alt="ID8 Technologies Logo"
                  className="w-full h-full object-contain invert"
                />
              </div>
              <span>
                ID8 <span className="text-emerald-400 font-medium">Technologies</span>
              </span>
            </Link>
            <p className="text-sm leading-6 text-white/55">
              Namibia-born digital systems and product engineering studio. Designing and building high-stakes software, AI automations, and modern web platforms.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://linkedin.com/company/id8-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-blue-400 hover:border-blue-500/30 bg-white/3 transition duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://github.com/id8-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-blue-400 hover:border-blue-500/30 bg-white/3 transition duration-200"
                aria-label="GitHub Account"
              >
                <Github className="size-4" />
              </a>
              <a
                href="https://twitter.com/id8_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-blue-400 hover:border-blue-500/30 bg-white/3 transition duration-200"
                aria-label="Twitter Account"
              >
                <Twitter className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Sitemap</h4>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/60 hover:text-blue-400 transition duration-150"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-sm text-white/60 hover:text-blue-400 transition duration-150 flex items-center gap-1"
              >
                Start a Project <ArrowUpRight className="size-3" />
              </Link>
            </nav>
          </div>

          {/* Strategic Pillars */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Capabilities</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <span className="hover:text-white transition">Software & Business Systems</span>
              <span className="hover:text-white transition">Websites & Digital Presence</span>
              <span className="hover:text-white transition">AI Automation & Workflows</span>
              <span className="hover:text-white transition">Product Design & MVP Sprints</span>
              <span className="hover:text-white transition">Brand Identity & Design</span>
            </div>
          </div>

          {/* Contact Details & Location */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact & Office</h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <p className="leading-6">
                Windhoek, Namibia <br />
                <span className="text-white/45 text-xs uppercase tracking-wide">Building for Africa & Beyond</span>
              </p>
              <div className="flex flex-col gap-1.5 mt-2">
                <a
                  href="mailto:hello@id8technologies.com"
                  className="hover:text-[#10b981] transition duration-150 font-medium"
                >
                  hello@id8technologies.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col gap-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {currentYear} ID8 Technologies. All rights reserved.</p>
          <p>Built in Namibia. Designed for Africa and beyond.</p>
        </div>
      </Container>
    </footer>
  );
}
