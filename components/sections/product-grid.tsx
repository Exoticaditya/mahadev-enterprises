import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/data/site";

export function ProductGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Featured Products"
          title="Studio-grade equipment with a calm, premium presentation."
          description="The catalogue is organized around actual buying intent so product exploration remains fast, elegant, and commercially useful."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <Card key={product.slug} className="overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-haze">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border/60 bg-secondary/30">
                <Image src="/catalogue/product-placeholder.svg" alt={product.title} fill className="object-cover transition duration-500 hover:scale-[1.03]" />
              </div>
              <CardHeader>
                <CardDescription>{product.model} · {product.category}</CardDescription>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-7 text-muted-foreground">{product.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      {feature}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/products/${product.slug}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}