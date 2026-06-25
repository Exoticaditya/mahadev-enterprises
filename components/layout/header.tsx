"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { navigation, site } from "@/data/site";
import { CatalogueLink } from "@/components/catalogue-link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useCart } from "@/components/providers/cart-context";
import { CartDrawer } from "@/components/layout/cart-drawer";

export function Header() {
  const { cartCount, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/55 backdrop-blur-3xl shadow-glass transition-all duration-300">
      <div className="container flex h-24 items-center justify-between gap-4">
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
          <ThemeToggle />
          
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 hover:bg-muted transition-colors shadow-soft"
            aria-label="Open quote cart"
          >
            <ShoppingBag className="h-5 w-5 text-foreground" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-brass text-[10px] font-bold text-white shadow-soft">
                {cartCount}
              </span>
            )}
          </button>

          <CatalogueLink />
          <Button asChild size="sm">
            <Link href="/contact">Enquire Now</Link>
          </Button>
        </div>
 
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 hover:bg-muted transition-colors shadow-soft"
            aria-label="Open quote cart"
          >
            <ShoppingBag className="h-5 w-5 text-foreground" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-brass text-[10px] font-bold text-white shadow-soft">
                {cartCount}
              </span>
            )}
          </button>
          <MobileNav />
        </div>
      </div>
      <CartDrawer />
    </header>
  );
}