import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/layout/section";
import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

export function PageShell({
  eyebrow,
  title,
  description,
  breadcrumbs,
  aiSummary,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: { label: string; href: string }[];
  aiSummary?: string;
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
          
          {aiSummary && (
            <div className="mt-8 max-w-3xl rounded-[1.5rem] border border-brand-brass/25 bg-brand-brass/5 p-6 shadow-glow backdrop-blur-sm">
              <div className="flex items-center gap-2 font-semibold text-brand-brass uppercase tracking-[0.12em] text-xs mb-2">
                <Sparkles className="h-4 w-4 animate-pulse" />
                <span>AI Search Summary</span>
              </div>
              <p className="text-sm leading-6 text-foreground/90 font-medium">{aiSummary}</p>
            </div>
          )}
        </div>
      </Section>
      {children}
    </>
  );
}