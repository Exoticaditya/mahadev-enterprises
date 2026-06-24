import Image from "next/image";
import Link from "next/link";

import { contactPoints, navigation, site } from "@/data/site";
import { CatalogueLink } from "@/components/catalogue-link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footer/footer-sunrise.jpg"
          alt="Sunrise over the mountains near Rishikesh"
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-brand-forest/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-forest via-transparent to-black/20" />
      </div>

      <div className="container py-16 md:py-24">
        {/* Brand Header Section */}
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start border-b border-white/10 pb-12">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-white/95 shadow-soft">
            <Image src="/logo.png" alt="Mahadev Enterprises logo" width={80} height={80} className="h-full w-full object-contain p-2" />
          </div>
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-brass">Mahadev Enterprises</p>
            <p className="max-w-xl text-balance text-3xl leading-tight md:text-5xl font-serif text-white">
              Premium Pilates equipment and wellness studio solutions from Rishikesh.
            </p>
            <p className="max-w-2xl text-sm leading-7 text-white/80 md:text-base">
              Rooted in the calm strength and spiritual heritage of Rishikesh, we design and manufacture Pilates apparatus that balances structural integrity with design-led precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <CatalogueLink className="bg-white/10 text-white border-white/20 hover:border-white hover:text-white hover:bg-white/20" />
              <div className="flex items-center gap-4 text-sm text-white/80 ml-2">
                <Link href={site.instagram} target="_blank" rel="noreferrer" className="transition hover:text-brand-brass">
                  Instagram
                </Link>
                <span className="text-white/20">•</span>
                <Link href={site.whatsapp} target="_blank" rel="noreferrer" className="transition hover:text-brand-brass">
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        <div className="mt-12 grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4 xl:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-brass">Brand Philosophy</p>
            <p className="max-w-lg text-sm leading-7 text-white/70">
              We believe wellness spaces should inspire peace and focus. Our studio reformers and props are crafted using sustainable materials and engineering excellence to ensure reliable performance for commercial B2B buyers.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-brass">Navigation</p>
            <div className="grid gap-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/80 transition hover:text-brand-brass">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-brass">Contact</p>
            <div className="grid gap-3 text-sm text-white/80">
              {contactPoints.map((point) => (
                <Link key={point.label} href={point.href} className="transition hover:text-brand-brass">
                  <span className="block text-xs uppercase tracking-[0.16em] text-white/50">{point.label}</span>
                  {point.value}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.18em] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Mahadev Enterprises</p>
          <p>{site.address}</p>
        </div>
      </div>
    </footer>
  );
}