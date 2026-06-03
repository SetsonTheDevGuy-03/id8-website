import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  ...props
}: ComponentPropsWithoutRef<"article">) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#72f0a8]/35 hover:bg-white/[0.08]",
        className,
      )}
      {...props}
    />
  );
}
