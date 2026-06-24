import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "The story, positioning, and commercial credibility of Mahadev Enterprises.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
      <PageShell
        eyebrow="About"
        title="A premium Indian supplier focused on craftsmanship, design, and longevity."
        description="Mahadev Enterprises is dedicated to designing and manufacturing professional-grade Pilates reformers, yoga props, and custom wellness solutions that elevate boutique spaces."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
      >
        <section className="py-10 md:py-20">
          <div className="container grid gap-6 lg:grid-cols-3">
            {[
              ["Vision", "To elevate global wellness spaces with high-precision Pilates and yoga apparatus that balances functional reliability and luxury design."],
              ["Commitment", "To maintain the highest standards of materials, craftsmanship, and export-ready client service for our B2B partners worldwide."],
              ["Base", "Located in Rishikesh, India—serving premium domestic and international wellness demand with reliable logistics."],
            ].map(([title, copy]) => (
            <Card key={title}>
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
                <p className="mt-4 text-lg leading-8">{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}