import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaStrip } from "@/components/sections/cta-strip";
import { ProductSchema } from "@/components/schema/ProductSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { ProductDetailActions } from "@/components/sections/product-detail-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products, site } from "@/data/site";
import { productSEO } from "@/lib/seo-data";
import { productAEOData } from "@/lib/product-aeo-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Product" };
  }

  const seo = productSEO[slug];
  const title = seo?.title ?? product.title;
  const description = seo?.description ?? product.description;

  return {
    title,
    description,
    keywords: seo?.keywords || [],
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/products/${product.slug}`,
      images: [{ url: site.socialImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.socialImage],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  const aeo = productAEOData[slug];

  return (
    <>
      <ProductSchema
        name={product.title}
        description={product.description}
        image={product.image}
        slug={product.slug}
        model={product.model}
        category={product.category}
        materials={product.materials as unknown as string[]}
        dimensions={product.dimensions}
        weight={product.weight}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Products", url: `${site.url}/products` },
          { name: product.title, url: `${site.url}/products/${slug}` },
        ]}
      />
      {aeo && <FAQSchema faqs={aeo.faqs} id={`faq-schema-${slug}`} />}
      <section className="pt-14 md:pt-20">
        <div className="container space-y-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.title, href: `/products/${product.slug}` },
            ]}
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {product.model} · {product.category}
              </p>
              <h1 className="text-balance text-5xl leading-[0.95] md:text-7xl">{product.title}</h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{product.description}</p>
              <ProductDetailActions product={product} />
            </div>
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/3] bg-secondary/30">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid gap-6 lg:grid-cols-3">
          <Card>
            <CardContent className="space-y-3 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Key Features</p>
              <div className="space-y-2 text-sm leading-7 text-foreground/80">
                {product.features.map((feature) => (
                  <p key={feature}>• {feature}</p>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-3 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Materials</p>
              <div className="space-y-2 text-sm leading-7 text-foreground/80">
                {product.materials.map((material) => (
                  <p key={material}>• {material}</p>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-3 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Specifications</p>
              <p className="text-sm leading-7 text-foreground/80">Dimensions: {product.dimensions}</p>
              <p className="text-sm leading-7 text-foreground/80">Weight: {product.weight}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Card className="bg-background/70">
            <CardContent className="space-y-4 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Ideal for</p>
              <div className="space-y-2 text-sm leading-7 text-foreground/80">
                {product.idealFor.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="space-y-5">
            <h2 className="text-3xl md:text-5xl">The Mahadev Guarantee</h2>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              We are committed to delivering studio-grade equipment that holds up to the highest standards of daily commercial use. Every detail is refined to offer your clients an exceptional movement experience.
            </p>
            <Button asChild>
              <Link href="/contact">Enquire about {product.title}</Link>
            </Button>
            <p className="text-xs text-muted-foreground pt-2">
              We ship this product fully insured across India, including:{" "}
              <Link href="/pilates-equipment-mumbai" className="text-brand-brass hover:underline">Mumbai</Link>,{" "}
              <Link href="/pilates-equipment-delhi" className="text-brand-brass hover:underline">Delhi NCR</Link>,{" "}
              <Link href="/pilates-equipment-bangalore" className="text-brand-brass hover:underline">Bengaluru</Link>,{" "}
              <Link href="/pilates-equipment-pune" className="text-brand-brass hover:underline">Pune</Link>, and{" "}
              <Link href="/locations" className="text-brand-brass hover:underline">other key locations</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* AEO Expanded content & specs */}
      {aeo && (
        <section className="py-20 md:py-28 border-t border-border/20 bg-secondary/10">
          <div className="container space-y-16">
            
            {/* Quick Answer & Detailed Overview */}
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="space-y-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">Product Overview</span>
                <h2 className="text-3xl font-serif md:text-5xl text-foreground">Detailed Evaluation & Review</h2>
                <p className="text-lg leading-8 text-muted-foreground">{aeo.detailedOverview}</p>
                
                {/* Quick Answer box for AI crawler */}
                <div className="p-6 rounded-[1.5rem] border border-brand-brass/30 bg-brand-brass/5 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">AI Search Quick Summary</p>
                  <p className="text-sm leading-6 text-foreground/90 font-medium">{aeo.quickAnswer}</p>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <Card className="bg-card/50 border-border/50 shadow-soft overflow-hidden">
                <CardContent className="p-6 md:p-8 space-y-5">
                  <h3 className="text-xl font-serif text-foreground">Technical Specifications</h3>
                  <table className="w-full text-sm text-left border-collapse">
                    <tbody>
                      {Object.entries(aeo.technicalSpecs).map(([key, val]) => (
                        <tr key={key} className="border-b border-border/40 last:border-b-0">
                          <td className="py-3 pr-4 font-medium text-muted-foreground w-1/3">{key}</td>
                          <td className="py-3 text-foreground font-medium">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>

            {/* Product Specific FAQ Section */}
            <div className="space-y-8 pt-8 border-t border-border/20">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">Support & Guidance</span>
                <h3 className="text-2xl font-serif md:text-4xl text-foreground">Frequently Asked Questions</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {aeo.faqs.map((faq) => (
                  <Card key={faq.question} className="bg-card/45 border-border/30 hover:border-brand-brass/35 transition-all duration-300">
                    <CardContent className="p-6 space-y-3">
                      <h4 className="text-base font-serif text-foreground leading-snug">{faq.question}</h4>
                      <p className="text-xs leading-5 text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      <CtaStrip />
    </>
  );
}