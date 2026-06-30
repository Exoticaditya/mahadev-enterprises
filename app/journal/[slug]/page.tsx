import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { journalPosts, site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { journalContentData } from "@/lib/journal-content-data";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);
  if (!post) return { title: "Journal Article" };

  return {
    title: post.title,
    description: post.summary,
    keywords: (post as any).keywords || [],
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `${site.url}/journal/${post.slug}`,
      images: [{ url: site.socialImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [site.socialImage],
    },
  };
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const content = journalContentData[slug];

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.summary}
        slug={post.slug}
        datePublished={post.date}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Journal", url: `${site.url}/journal` },
          { name: post.title, url: `${site.url}/journal/${post.slug}` },
        ]}
      />
      {content && content.faqs.length > 0 && (
        <FAQSchema faqs={content.faqs} id={`faq-schema-${slug}`} />
      )}

      <section className="pt-20 lg:pt-28 pb-20 md:pb-28">
        <div className="container max-w-4xl space-y-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Journal", href: "/journal" },
              { label: post.title, href: `/journal/${post.slug}` },
            ]}
          />
          
          <article className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-brass font-semibold">
                Published {post.date}
              </p>
              <h1 className="text-balance text-4xl leading-[1.05] font-serif md:text-5xl lg:text-6xl text-foreground">
                {post.title}
              </h1>
              <p className="text-lg leading-8 text-muted-foreground font-medium border-l-2 border-brand-brass/40 pl-4">
                {post.summary}
              </p>
            </div>

            {/* Main Rich Article Body */}
            {content ? (
              <div
                className="journal-article-body pt-4"
                dangerouslySetInnerHTML={{ __html: content.htmlContent }}
              />
            ) : (
              <p className="text-muted-foreground italic">Article content is currently being drafted.</p>
            )}

            {/* Connect Card */}
            <Card className="bg-card/40 border-border/40 mt-12">
              <CardContent className="space-y-5 p-6 md:p-8">
                <h3 className="text-xl font-serif text-foreground">Sourcing Premium Pilates Equipment?</h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  Mahadev Enterprises manufactures studio-grade, B2B-optimized Pilates reformers, Cadillac tables, barrels, and chairs. We support studio owners, developers, and fitness brands with direct manufacturing consultation, spatial planning, and insured pan-India delivery.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild rounded-full>
                    <Link href="/contact">Enquire Today</Link>
                  </Button>
                  <Button asChild variant="outline" rounded-full>
                    <Link href="/products">Browse Catalogue</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </article>
        </div>
      </section>
    </>
  );
}