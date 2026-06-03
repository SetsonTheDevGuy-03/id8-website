import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[#72f0a8]/25 bg-[#72f0a8]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#72f0a8]",
        className,
      )}
      {...props}
    />
  );
}
