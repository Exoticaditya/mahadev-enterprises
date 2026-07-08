"use client";

import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { TrackingLink } from "@/components/tracking-link";

export function CatalogueLink({ className }: { className?: string }) {
  return (
    <TrackingLink
      href="/catalogue/mahadev-enterprises-catalogue.pdf"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md transition hover:border-brand-brass hover:text-brand-brass",
        className,
      )}
      target="_blank"
      rel="noreferrer"
      download
      eventName="download_catalogue"
      metaCustomEvent="CatalogueDownload"
    >
      <Download className="h-4 w-4" />
      Download Catalogue
    </TrackingLink>
  );
}