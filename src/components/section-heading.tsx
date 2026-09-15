import { cn } from "@/lib/utils";

export function SectionHeading({
  number,
  kicker,
  title,
  className,
}: {
  number: string;
  kicker: string;
  title: string;
  className?: string;
}) {
  return (
    <header className={cn("mb-10 md:mb-12", className)}>
      <p className="mb-3 font-sans text-kicker font-medium uppercase tracking-kicker text-subtle">
        {number} — {kicker}
      </p>
      <h2 className="font-display text-section italic leading-none tracking-display text-fg text-balance">
        {title}
      </h2>
    </header>
  );
}
