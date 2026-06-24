"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 md:bottom-6 md:right-6">
      <Button asChild className="shadow-glow">
        <Link href={site.whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle className="h-4 w-4" />
          WhatsApp {site.phone}
        </Link>
      </Button>
    </div>
  );
}