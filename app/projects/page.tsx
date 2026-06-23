import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project stories and commercial fit-out examples for Mahadev Enterprises.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Commercial wellness projects presented with clarity and restraint."
      description="This section will showcase hospitality, studio, and retreat applications to support trust and conversion."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }]}
    >
      <section className="py-10 md:py-20">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            ["Pilates studio rollout", "A premium reformer and accessory package for a boutique movement space."],
            ["Luxury retreat supply", "A calm wellness set prepared for a high-end retreat centre."],
            ["Hospitality suite", "Guest-facing wellness equipment with polished procurement support."],
          ].map(([title, copy]) => (
            <Card key={title}>
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Case study</p>
                <p className="mt-4 text-2xl">{title}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}