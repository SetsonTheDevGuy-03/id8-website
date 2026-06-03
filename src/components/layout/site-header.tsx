"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "border-white/10 bg-[#030706]/85 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between gap-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-[-0.04em] text-white flex items-center gap-2 group"
        >
          <span className="inline-block size-3.5 rounded-sm bg-gradient-to-tr from-[#72f0a8] to-[#d9ff73] transition duration-300 group-hover:rotate-45" />
          <span>
            ID8 <span className="text-[#72f0a8] font-medium">Technologies</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-[#72f0a8] transition duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#72f0a8] px-4.5 py-2 text-xs font-bold uppercase tracking-wider text-[#030706] hover:bg-[#d9ff73] transition duration-300 shadow-[0_0_20px_rgba(114,240,168,0.2)] hover:shadow-[0_0_25px_rgba(217,255,115,0.4)]"
          >
            Start a Project
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white/80 hover:text-white md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-[#030706]/98 backdrop-blur-md md:hidden animate-fade-in">
          <nav className="flex flex-col gap-6 p-8 border-t border-white/5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-[#72f0a8] transition duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#72f0a8] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#030706] hover:bg-[#d9ff73] transition duration-300"
            >
              Start a Project
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
