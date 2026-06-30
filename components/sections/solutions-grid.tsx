import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { solutions } from "@/data/site";
import { ScrollReveal } from "@/components/scroll-reveal";

export function SolutionsGrid() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Decorative localized glow orb for solutions section */}
      <div className="glow-orb right-[10%] top-[20%] h-[350px] w-[350px] bg-brand-brass/5" />

      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Solutions"
          title="Tailored wellness solutions for every commercial space."
          description="From boutique Pilates studios and premium retreat centers to luxury hospitality wellness suites, we design and supply spaces that inspire your clients."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution, index) => (
            <ScrollReveal
              key={solution.slug}
              className="luxury-card group flex flex-col justify-between"
              delay={index * 0.08}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-secondary/20">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6 md:p-7 space-y-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">Use case</p>
                    <h3 className="text-2xl font-serif text-foreground leading-tight">{solution.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{solution.summary}</p>
                  
                  <div className="space-y-1.5 pt-2">
                    {solution.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-brand-brass font-bold leading-none mt-0.5">•</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-7 pt-0">
                <Button asChild variant="outline" className="w-full rounded-full transition-all duration-300 hover:bg-brand-brass hover:text-white hover:border-brand-brass">
                  <Link href={`/solutions/${solution.slug}`}>Explore</Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}