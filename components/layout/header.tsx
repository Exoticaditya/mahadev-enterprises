import Image from "next/image";
import Link from "next/link";

import { navigation, site } from "@/data/site";
import { CatalogueLink } from "@/components/catalogue-link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-background/80 shadow-soft">
            <Image src="/logo.png" alt="Mahadev Enterprises logo" width={44} height={44} className="h-full w-full object-contain p-1" priority />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Mahadev Enterprises</p>
            <p className="text-xs text-muted-foreground">Premium Pilates and wellness supply</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <CatalogueLink />
          <Link href={site.instagram} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition hover:text-brand-brass">
            Instagram
          </Link>
          <Button asChild size="sm">
            <Link href="/contact">Enquire Now</Link>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}