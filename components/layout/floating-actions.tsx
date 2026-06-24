"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { site } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <div className="group relative flex items-center justify-center">
        <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 rounded-lg bg-card border border-border/70 px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-soft transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 whitespace-nowrap hidden md:block">
          Chat on WhatsApp
        </span>
        <Link
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#20ba5a]"
          aria-label="Contact us on WhatsApp"
        >
          {/* Subtle pulse effect */}
          <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/40 animate-ping" style={{ animationDuration: "2s" }} />
          <MessageCircle className="h-6 w-6 fill-current" />
        </Link>
      </div>
    </div>
  );
}