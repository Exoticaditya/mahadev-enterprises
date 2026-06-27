import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { solutions, site } from "@/data/site";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) return { title: "Solution" };

  return {
    title: solution.title,
    description: solution.summary,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: {
      title: solution.title,
      description: solution.summary,
      url: `${site.url}/solutions/${solution.slug}`,
      images: [{ url: site.socialImage, width: 1200, height: 630, alt: solution.title }],
    },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Solutions", url: `${site.url}/solutions` },
          { name: solution.title, url: `${site.url}/solutions/${solution.slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: solution.title,
          description: solution.summary,
          provider: { "@type": "Organization", name: site.name },
        }}
      />
      <section className="pt-14 md:pt-20">
        <div className="container space-y-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: solution.title, href: `/solutions/${solution.slug}` },
            ]}
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Buyer solution</p>
              <h1 className="text-balance text-5xl leading-[0.95] md:text-7xl">{solution.title}</h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{solution.summary}</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contact">Start a Project</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/products">View Products</Link>
                </Button>
              </div>
            </div>
            <Card className="bg-background/70">
              <CardContent className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Benefits</p>
                <div className="space-y-2 text-sm leading-7 text-foreground/80">
                  {solution.benefits.map((benefit) => (
                    <p key={benefit}>• {benefit}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}