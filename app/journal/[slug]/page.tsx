import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { journalPosts, site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);
  if (!post) return { title: "Journal article" };

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/journal/${post.slug}` },
  };
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.summary,
          author: { "@type": "Organization", name: site.name },
        }}
      />
      <section className="pt-14 md:pt-20">
        <div className="container space-y-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/journal" }, { label: post.title, href: `/journal/${post.slug}` }]} />
          <article className="max-w-4xl space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{post.date}</p>
            <h1 className="text-balance text-5xl leading-[0.95] md:text-7xl">{post.title}</h1>
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">{post.summary}</p>
            <Card>
              <CardContent className="space-y-5 p-6 md:p-8">
                <p className="text-sm leading-7 text-muted-foreground">
                  For detailed guidance on product dimensions, wood frame selections, or customized branding options for your Pilates studio, connect with our product specialists today.
                </p>
                <Button asChild>
                  <Link href="/contact">Ask a question</Link>
                </Button>
              </CardContent>
            </Card>
          </article>
        </div>
      </section>
    </>
  );
}