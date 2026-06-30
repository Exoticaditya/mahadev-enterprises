"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { navigation, site, products } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div className="space-y-8 pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigation</p>
          <div className="grid gap-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              
              if (item.label === "Products") {
                return (
                  <div key={item.href} className="space-y-2">
                    <div className="flex w-full items-center justify-between text-2xl font-medium transition">
                      <Link
                        href="/products"
                        onClick={() => setOpen(false)}
                        className={`hover:text-brand-brass ${isActive ? "text-brand-brass" : "text-foreground"}`}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setProductsOpen(!productsOpen)}
                        className="p-2 text-muted-foreground hover:text-brand-brass"
                        aria-label="Toggle products submenu"
                      >
                        <svg
                          className={`h-5 w-5 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {productsOpen && (
                      <div className="grid gap-2 pl-4 border-l border-brand-brass/25 py-1">
                        {products.map((prod) => (
                          <Link
                            key={prod.slug}
                            href={`/products/${prod.slug}`}
                            onClick={() => setOpen(false)}
                            className="text-sm font-medium text-muted-foreground hover:text-brand-brass py-1 block"
                          >
                            {prod.title}
                          </Link>
                        ))}
                        <Link
                          href="/products#accessories"
                          onClick={() => setOpen(false)}
                          className="text-sm font-semibold text-brand-brass hover:underline py-1 block border-t border-border/20 mt-1 pt-1"
                        >
                          Studio Accessories & Spares →
                        </Link>
                        <Link
                          href="/products"
                          onClick={() => setOpen(false)}
                          className="text-xs font-semibold text-brand-brass/80 hover:underline py-1 block"
                        >
                          View All 11 Models →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-2xl font-medium transition hover:text-brand-brass ${
                    isActive ? "text-brand-brass font-semibold" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center justify-end border-t border-border/60 pt-6">
            <ThemeToggle />
          </div>
        </div>
        <Button asChild size="lg" className="w-full" onClick={() => setOpen(false)}>
          <Link href="/contact">Enquire Now</Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}