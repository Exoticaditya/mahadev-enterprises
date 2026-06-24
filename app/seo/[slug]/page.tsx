import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { seoLandingPages, site } from "@/data/site";
import { JsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = seoLandingPages.find((item) => item.slug === slug);
  if (!page) return { title: "SEO page" };

  return {
    title: page.title,
    description: page.summary,
    alternates: { canonical: `/seo/${page.slug}` },
  };
}

export default async function SeoLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = seoLandingPages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: page.title,
          description: page.summary,
          url: `${site.url}/seo/${page.slug}`,
        }}
      />
      <section className="pt-14 md:pt-20">
        <div className="container space-y-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "SEO", href: "/seo" }, { label: page.title, href: `/seo/${page.slug}` }]} />
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Specialized Supply</p>
              <h1 className="text-balance text-5xl leading-[0.95] md:text-7xl">{page.title}</h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{page.summary}</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contact">Enquire now</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/products">Browse products</Link>
                </Button>
              </div>
            </div>
            <Card className="bg-background/70">
              <CardContent className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">B2B Supply & Customization</p>
                <p className="text-sm leading-7 text-muted-foreground">
                  We specialize in custom orders, wood staining options, and international shipping configurations to meet the specific requirements of commercial projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}