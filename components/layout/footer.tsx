import Link from "next/link";

import { contactPoints, navigation, site } from "@/data/site";
import { CatalogueLink } from "@/components/catalogue-link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/80">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4 xl:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Mahadev Enterprises</p>
            <p className="max-w-xl text-balance text-2xl leading-tight md:text-4xl">
              Premium Pilates equipment and wellness studio solutions from Rishikesh.
            </p>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground md:text-base">{site.description}</p>
            <CatalogueLink />
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