import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[#10b981]/25 bg-[#10b981]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#10b981]",
        className,
      )}
      {...props}
    />
  );
}
