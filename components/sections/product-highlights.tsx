import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/site";

export function ProductHighlights() {
  return (
    <section className="py-20 md:py-28">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Catalog overview"
          title="Essential tools for spinal alignment and strength."
          description="Complement your reformer setup with our secondary apparatus—engineered for targeted flexibility, posture correction, and compact studio layouts."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {products.slice(6).map((product) => (
            <Card key={product.slug} className="flex flex-col justify-between gap-6 p-6 md:p-7">
              <CardContent className="space-y-4 p-0">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{product.model} · {product.category}</p>
                <h3 className="text-2xl md:text-3xl">{product.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{product.summary}</p>
              </CardContent>
              <Button asChild variant="outline" className="w-fit">
                <Link href={`/products/${product.slug}`}>View details</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}