import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl md:text-5xl">{title}</h2>
      {description ? <p className="text-balance text-base leading-7 text-muted-foreground md:text-lg">{description}</p> : null}
    </div>
  );
}