import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { products } from "@/data/site";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ProductGrid({ layout = "scroll" }: { layout?: "scroll" | "grid" }) {
  const containerClass = layout === "scroll"
    ? "flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory md:grid md:grid-cols-2 xl:grid-cols-3 md:overflow-x-visible md:pb-0"
    : "grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3";

  const cardClass = layout === "scroll"
    ? "luxury-card group flex flex-col justify-between w-[85vw] shrink-0 snap-center md:w-auto md:shrink"
    : "luxury-card group flex flex-col justify-between w-full";

  return (
    <section className="relative py-20 md:py-28">
      {/* Decorative ambient glowing light orb */}
      <div className="glow-orb left-[5%] top-[15%] h-[400px] w-[400px] bg-brand-brass/5" />

      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Featured Products"
          title="Precision-crafted equipment for the modern studio."
          description="Explore our flagship range of professional Pilates reformers, Cadillac frames, and alignment tools built to withstand rigorous daily commercial use."
        />

        <div className={containerClass}>
          {products.slice(0, 6).map((product, index) => (
            <ScrollReveal
              key={product.slug}
              className={cardClass}
              delay={index * 0.08}
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border/60 bg-secondary/10">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4 transition duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6 md:p-8 space-y-5">
                  <div className="space-y-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">
                      {product.model} · {product.category}
                    </p>
                    <h3 className="text-2xl font-serif text-foreground leading-tight">{product.title}</h3>
                  </div>

                  <p className="text-sm leading-6 text-muted-foreground">{product.summary}</p>
                  
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-brand-brass/75 font-semibold">Ideal for:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {product.idealFor.slice(0, 2).join(" · ")}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {product.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-brand-brass/25 bg-brand-brass/5 px-2.5 py-0.5 text-[10px] text-brand-brass font-medium whitespace-nowrap"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0">
                <Button asChild variant="outline" className="w-full rounded-full transition-all duration-300 hover:bg-brand-brass hover:text-white hover:border-brand-brass">
                  <Link href={`/products/${product.slug}`}>View Details</Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}