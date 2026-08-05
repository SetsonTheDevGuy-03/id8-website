import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";

export function ContactCta() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="rounded-[2rem] border border-[#10b981]/25 bg-[#10b981]/10 p-8 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#10b981]">
            Start a Project
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">
            Let&apos;s build something serious.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
            Tell us what you are building, what you need, and when you need it.
            We will help turn the idea into a clear next step.
          </p>
          <ButtonLink href="mailto:hello@id8tech.com" className="mt-8">
            Start the Conversation
            <ArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
