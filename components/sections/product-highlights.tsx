import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { products } from "@/data/site";

export function ProductHighlights() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Local decorative ambient light glow */}
      <div className="glow-orb right-[5%] bottom-[15%] h-[350px] w-[350px] bg-brand-sage/5" />

      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Catalog overview"
          title="Essential tools for spinal alignment and strength."
          description="Complement your reformer setup with our secondary apparatus—engineered for targeted flexibility, posture correction, and compact studio layouts."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {products.slice(6).map((product) => (
            <div
              key={product.slug}
              className="luxury-card flex flex-col justify-between p-6 md:p-8"
            >
              <div className="space-y-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">
                  {product.model} · {product.category}
                </p>
                <h3 className="text-3xl font-serif text-foreground leading-tight">{product.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{product.summary}</p>
                
                <div className="space-y-1 border-t border-border/30 pt-4">
                  <p className="text-[10px] uppercase tracking-wider text-brand-brass/75 font-semibold">Ideal for:</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {product.idealFor.slice(0, 2).join(" · ")}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild variant="outline" className="rounded-full transition-all duration-300 hover:bg-brand-brass hover:text-white hover:border-brand-brass">
                  <Link href={`/products/${product.slug}`}>View details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}