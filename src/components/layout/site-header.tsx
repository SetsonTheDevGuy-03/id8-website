"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/ui/container";

import { useCart } from "@/context/CartContext";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { selectedCartServices } = useCart();

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
          className="text-lg font-bold tracking-[-0.04em] text-white flex items-center gap-2.5 group"
        >
          <div className="relative size-6 shrink-0 transition duration-300 group-hover:scale-110">
            <Image
              src="/images/id8_cube_hero.png"
              alt="ID8 Logo Cube"
              fill
              className="object-contain"
            />
          </div>
          <span>
            ID8 <span className="text-blue-400 font-medium">Technologies</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-[#10b981] transition duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/15 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition duration-300 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:border-blue-500/50"
          >
            Contact us
            {selectedCartServices.length > 0 && (
              <span className="px-1.5 py-0.5 text-[9px] font-black bg-white rounded-full text-black">
                {selectedCartServices.length}
              </span>
            )}
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
                className="text-lg font-medium text-white/80 hover:text-[#10b981] transition duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/35 bg-blue-500/10 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-blue-500/20 transition duration-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              Contact us
              {selectedCartServices.length > 0 && (
                <span className="px-1.5 py-0.5 text-[10px] font-black bg-white rounded-full text-black">
                  {selectedCartServices.length}
                </span>
              )}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
