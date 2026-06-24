"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navigation, site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div className="space-y-8 pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigation</p>
          <div className="grid gap-4">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-2xl font-medium transition hover:text-brand-brass">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-3 border-t border-border/60 pt-6">
            <Link href={site.instagram} target="_blank" rel="noreferrer" className="text-lg font-medium transition hover:text-brand-brass">
              Instagram
            </Link>
          </div>
        </div>
        <Button asChild size="lg" className="w-full">
          <Link href="/contact">Enquire Now</Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}