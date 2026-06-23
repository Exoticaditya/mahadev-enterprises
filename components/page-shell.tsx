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
      <Section className="pt-14 md:pt-20">
        <div className="container space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
          <h1 className="max-w-4xl text-balance text-5xl leading-[0.95] md:text-7xl">{title}</h1>
          <p className="max-w-3xl text-balance text-lg leading-8 text-muted-foreground md:text-xl">{description}</p>
        </div>
      </Section>
      {children}
    </>
  );
}