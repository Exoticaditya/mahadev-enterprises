import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/sections/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { contactPoints } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mahadev Enterprises for catalogue requests, project enquiries, and commercial procurement.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Get in Touch with Our Procurement Team"
      description="Contact us directly to request custom pricing, discuss volume discounts, or arrange a private consultation for your wellness studio or project."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
    >
      <section className="py-10 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {contactPoints.map((point) => (
              <Card key={point.label}>
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{point.label}</p>
                  <p className="mt-3 text-lg">{point.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}