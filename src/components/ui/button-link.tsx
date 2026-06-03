import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

const styles = {
  primary:
    "bg-[#72f0a8] text-[#030706] hover:bg-[#d9ff73] focus-visible:outline-[#72f0a8]",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-[#72f0a8]/40 hover:bg-white/10 focus-visible:outline-white",
  ghost:
    "text-[#72f0a8] hover:text-[#d9ff73] focus-visible:outline-[#72f0a8]",
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}
