"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import { navigation, site, products } from "@/data/site";
import { CatalogueLink } from "@/components/catalogue-link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useCart } from "@/components/providers/cart-context";
import { CartDrawer } from "@/components/layout/cart-drawer";

export function Header() {
  const { cartCount, setIsOpen } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setScrolled(currentScrollY > 20);

      // Always show at the top
      if (currentScrollY <= 20) {
        setVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 120) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }
      
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-500 ease-in-out ${
        scrolled
          ? "border-border/40 bg-background/60 backdrop-blur-3xl shadow-glass"
          : "border-border/20 bg-background/40 backdrop-blur-xl"
      } ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className={`container flex items-center justify-between gap-4 transition-all duration-500 ease-in-out ${scrolled ? "h-20" : "h-26"}`}>
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-background/80 shadow-soft">
            <Image src="/logo.webp" alt="Mahadev Enterprises logo" width={44} height={44} className="h-full w-full object-contain p-1" priority />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Mahadev Enterprises</p>
            <p className="text-xs text-muted-foreground">Premium Pilates and wellness supply</p>
          </div>
        </Link>
 
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            
            if (item.label === "Products") {
              return (
                <div key={item.href} className="relative group py-2">
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors duration-300 flex items-center gap-1 ${
                      isActive ? "text-brand-brass font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[550px] rounded-[1.5rem] border border-border/70 bg-background/95 p-6 shadow-glass backdrop-blur-3xl opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto grid grid-cols-2 gap-3 z-50">
                    <div className="col-span-2 border-b border-border/40 pb-2 mb-1">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">Explore Our Pilates Range</p>
                    </div>
                    {products.map((prod) => (
                      <Link
                        key={prod.slug}
                        href={`/products/${prod.slug}`}
                        className="flex flex-col gap-1 p-2 rounded-xl hover:bg-brand-brass/5 border border-transparent hover:border-brand-brass/10 transition-all duration-200"
                      >
                        <span className="text-xs font-semibold text-foreground transition-colors hover:text-brand-brass">{prod.title}</span>
                        <span className="text-[10px] text-muted-foreground line-clamp-1">{prod.summary}</span>
                      </Link>
                    ))}
                    <div className="col-span-2 pt-2 border-t border-border/40 flex justify-end">
                      <Link href="/products" className="text-xs font-semibold text-brand-brass hover:underline flex items-center gap-1">
                        <span>View All 11 Models</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-300 ${
                  isActive ? "text-brand-brass font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
 
        <div className="hidden items-center gap-3 lg:flex">
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
 
        <div className="flex items-center gap-3 lg:hidden">
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