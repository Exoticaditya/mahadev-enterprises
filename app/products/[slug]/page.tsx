import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaStrip } from "@/components/sections/cta-strip";
import { ProductSchema } from "@/components/sections/product-schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products, site } from "@/data/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Product" };
  }

  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.title,
      description: product.description,
      url: `${site.url}/products/${product.slug}`,
      images: [{ url: site.socialImage, width: 1200, height: 630, alt: product.title }],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  return (
    <>
      <ProductSchema slug={product.slug} />
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
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contact">Request Pricing</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/catalogue/mahadev-enterprises-catalogue.pdf">Download Catalogue</Link>
                </Button>
              </div>
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
          </div>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}