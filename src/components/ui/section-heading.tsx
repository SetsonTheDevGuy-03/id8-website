import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
