import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function Section({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cn("py-20 sm:py-28", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
