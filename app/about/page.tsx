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
      title="A premium Indian supplier focused on wellness, clarity, and trust."
      description="Mahadev Enterprises exists to serve commercial buyers who need elegant presentation and serious product reliability."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
    >
      <section className="py-10 md:py-20">
        <div className="container grid gap-6 lg:grid-cols-3">
          {[
            ["Vision", "Create a refined procurement experience for premium wellness buyers."],
            ["Commitment", "Deliver credible product information, premium visuals, and responsive enquiry handling."],
            ["Base", "Rishikesh, India, with a position that serves domestic and international demand."],
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