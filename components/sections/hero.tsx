import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CatalogueLink } from "@/components/catalogue-link";
import { site, stats, trustSignals } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 -mt-20 isolate">
      {/* Background Video/Image with Translucent Blur Overlay */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster="/hero/hero-desktop.webp"
        >
          <source src="/videos/hero-loop.webm" type="video/webm" />
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[3px]" />
      </div>

      <div className="container grid gap-14 pb-24 pt-10 md:pb-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
        <div className="max-w-4xl space-y-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Rishikesh, India · Wellness supply</p>
          <h1 className="max-w-4xl text-balance text-5xl font-serif leading-[1.05] tracking-tight md:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Premium Pilates equipment and wellness products for studios that expect more.
          </h1>
          <p className="max-w-2xl text-balance text-lg leading-8 text-muted-foreground md:text-xl">
            Mahadev Enterprises designs and supplies studio-grade reformers, custom strength tools, and commercial wellness solutions. Engineered for durability, refined for modern spaces, and trusted by leading studios worldwide.
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

        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 shadow-haze backdrop-blur-md">
            <div className="relative aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/3] overflow-hidden">
              <Image
                src={site.heroImages.desktop}
                alt="Mahadev Enterprises Pilates studio reformer"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
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
      </div>
    </section>
  );
}