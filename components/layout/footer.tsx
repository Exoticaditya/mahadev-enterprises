import Image from "next/image";
import Link from "next/link";
import { Instagram, Phone, Mail } from "lucide-react";

import { contactPoints, navigation, site } from "@/data/site";
import { CatalogueLink } from "@/components/catalogue-link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 text-white overflow-hidden isolate">
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
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16 border-b border-white/10 pb-12">
          <div className="flex h-36 w-36 items-center justify-center overflow-hidden shrink-0">
            <Image src="/logo.png" alt="Mahadev Enterprises logo" width={144} height={144} className="h-full w-full object-contain" />
          </div>
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-brass">Mahadev Enterprises</p>
            <p className="max-w-xl text-balance text-3xl leading-tight md:text-5xl font-serif text-white">
              Premium Pilates equipment and wellness studio solutions from Rishikesh.
            </p>
            <p className="max-w-2xl text-sm leading-7 text-white/80 md:text-base">
              Rooted in the calm strength and spiritual heritage of Rishikesh, we design and manufacture Pilates apparatus that balances structural integrity with design-led precision.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <CatalogueLink className="bg-white/10 text-white border-white/20 hover:border-white hover:text-white hover:bg-white/20" />
              <div className="flex items-center gap-3">
                <Link
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition duration-300 hover:border-white hover:text-white hover:bg-white/15 hover:scale-105 active:scale-95"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition duration-300 hover:border-white hover:text-white hover:bg-white/15 hover:scale-105 active:scale-95"
                  aria-label="Chat on WhatsApp"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        <div className="mt-12 grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-brass">Brand Philosophy</p>
            <p className="max-w-lg text-sm leading-7 text-white/70">
              We believe wellness spaces should inspire peace and focus. Our studio reformers and props are crafted using sustainable materials and engineering excellence to ensure reliable performance for commercial B2B buyers.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-brass">Served Locations</p>
            <div className="grid gap-3">
              <Link href="/pilates-equipment-mumbai" className="text-sm text-white/80 transition hover:text-brand-brass">
                Mumbai
              </Link>
              <Link href="/pilates-equipment-delhi" className="text-sm text-white/80 transition hover:text-brand-brass">
                Delhi
              </Link>
              <Link href="/pilates-equipment-bangalore" className="text-sm text-white/80 transition hover:text-brand-brass">
                Bengaluru
              </Link>
              <Link href="/pilates-equipment-pune" className="text-sm text-white/80 transition hover:text-brand-brass">
                Pune
              </Link>
              <Link href="/pilates-equipment-rishikesh" className="text-sm text-white/80 transition hover:text-brand-brass">
                Rishikesh
              </Link>
              <Link href="/locations" className="text-sm text-brand-brass transition hover:underline">
                All 25 Locations →
              </Link>
            </div>
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
            <div className="grid gap-4 text-sm text-white/80">
              <Link href="tel:+919012112527" className="flex items-center gap-3 transition hover:text-brand-brass group">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition duration-300 group-hover:border-brand-brass group-hover:text-brand-brass">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/40">Phone</span>
                  <span className="text-sm font-medium">+91 90121 12527</span>
                </div>
              </Link>

              <Link href={`mailto:${site.email}`} className="flex items-center gap-3 transition hover:text-brand-brass group">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition duration-300 group-hover:border-brand-brass group-hover:text-brand-brass">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/40">Email</span>
                  <span className="text-sm font-medium">{site.email}</span>
                </div>
              </Link>

              <Link href={site.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-brand-brass group">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition duration-300 group-hover:border-brand-brass group-hover:text-brand-brass">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/40">WhatsApp</span>
                  <span className="text-sm font-medium">Chat on WhatsApp</span>
                </div>
              </Link>

              <Link href={site.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-brand-brass group">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition duration-300 group-hover:border-brand-brass group-hover:text-brand-brass">
                  <Instagram className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/40">Instagram</span>
                  <span className="text-sm font-medium">@mahadev_enterprises_india</span>
                </div>
              </Link>
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