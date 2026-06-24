import Image from "next/image";
import Link from "next/link";

import { contactPoints, navigation, site } from "@/data/site";
import { CatalogueLink } from "@/components/catalogue-link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/80">
      <div className="container py-16 md:py-20">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,rgba(176,138,87,0.18),rgba(246,242,235,0.78))] shadow-haze">
            <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-border/70 bg-background/80 shadow-soft">
                <Image src="/logo.png" alt="Mahadev Enterprises logo" width={80} height={80} className="h-full w-full object-contain p-2" />
              </div>
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Mahadev Enterprises</p>
                <p className="max-w-xl text-balance text-2xl leading-tight md:text-4xl">
                  Premium Pilates equipment and wellness studio solutions from Rishikesh.
                </p>
                <p className="max-w-lg text-sm leading-7 text-muted-foreground md:text-base">{site.description}</p>
                <CatalogueLink />
                <div className="flex flex-wrap gap-4 text-sm text-foreground/80">
                  <Link href={site.instagram} target="_blank" rel="noreferrer" className="transition hover:text-brand-brass">
                    Instagram
                  </Link>
                  <Link href={site.whatsapp} target="_blank" rel="noreferrer" className="transition hover:text-brand-brass">
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-background/70 shadow-haze">
            <div className="relative aspect-[16/10] min-h-[240px]">
              <Image
                src="/footer/footer-sunrise.jpg.png"
                alt="Sunrise over the mountains near Rishikesh"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08),rgba(17,17,17,0.38))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">Rishikesh sunrise</p>
                <p className="mt-2 max-w-sm text-lg leading-7 text-white md:text-xl">
                  A calm, premium visual close to the brand story and the landscape it comes from.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4 xl:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Brand links</p>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground md:text-base">
              Use the logo and sunrise visual together to anchor the footer in the brand identity and local geography.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Navigation</p>
            <div className="grid gap-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-foreground/80 transition hover:text-brand-brass">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <div className="grid gap-3 text-sm text-foreground/80">
              {contactPoints.map((point) => (
                <Link key={point.label} href={point.href} className="transition hover:text-brand-brass">
                  <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">{point.label}</span>
                  {point.value}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Mahadev Enterprises</p>
          <p>{site.address}</p>
        </div>
      </div>
    </footer>
  );
}