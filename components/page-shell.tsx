import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/layout/section";
import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: { label: string; href: string }[];
  children?: ReactNode;
}) {
  return (
    <>
      <Section className="relative overflow-hidden pt-32 md:pt-40 -mt-20 isolate border-b border-border/30">
        <div className="container space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">{eyebrow}</p>
          <h1 className="max-w-4xl text-balance text-5xl leading-[1.05] font-serif md:text-6xl lg:text-7xl">{title}</h1>
          <p className="max-w-3xl text-balance text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
        </div>
      </Section>
      {children}
    </>
  );
}