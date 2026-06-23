import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CatalogueLink } from "@/components/catalogue-link";
import { stats, trustSignals } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20">
      <div className="container grid gap-14 pb-24 pt-10 md:pb-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
        <div className="max-w-4xl space-y-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Rishikesh, India · Wellness supply</p>
          <h1 className="max-w-4xl text-balance text-6xl leading-[0.92] md:text-7xl xl:text-[6.5rem]">
            Premium Pilates equipment and wellness products for studios that expect more.
          </h1>
          <p className="max-w-2xl text-balance text-lg leading-8 text-muted-foreground md:text-xl">
            Mahadev Enterprises supplies studio-grade reformers, compact strength tools, and commercial wellness solutions with a calm, editorial presentation built to convert serious buyers.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Enquire Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <CatalogueLink />
          </div>
          <div className="flex flex-wrap gap-3 pt-3">
            {trustSignals.map((signal) => (
              <span key={signal} className="rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur-md">
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-haze backdrop-blur-md md:p-8">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5">
                <p className="text-3xl font-semibold tracking-tight text-brand-brass">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[1.5rem] border border-border/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0.42))] p-5 dark:bg-[linear-gradient(180deg,rgba(19,21,20,0.88),rgba(19,21,20,0.62))]">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Positioning</p>
            <p className="mt-3 text-2xl leading-tight">Luxury wellness supply with commercial discipline.</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">Built for buyers who need product credibility, graceful presentation, and a frictionless enquiry path.</p>
          </div>
        </div>
      </div>
    </section>
  );
}