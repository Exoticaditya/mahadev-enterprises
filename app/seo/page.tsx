import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { seoLandingPages } from "@/data/site";

export const metadata: Metadata = {
  title: "SEO Landing Pages",
  description: "Commercial SEO landing pages for Mahadev Enterprises.",
  alternates: { canonical: "/seo" },
};

export default function SeoIndexPage() {
  return (
    <PageShell
      eyebrow="SEO"
      title="High-intent landing pages built for discovery."
      description="These pages support premium commercial search targets and guide the user directly to product and enquiry flows."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "SEO", href: "/seo" }]}
    >
      <section className="py-10 md:py-20">
        <div className="container grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {seoLandingPages.map((page) => (
            <Card key={page.slug}>
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Landing page</p>
                <Link href={`/seo/${page.slug}`} className="mt-4 block text-2xl transition hover:text-brand-brass">
                  {page.title}
                </Link>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{page.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}