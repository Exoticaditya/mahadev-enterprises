import Link from "next/link";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function CatalogueLink({ className }: { className?: string }) {
  return (
    <Link
      href="/catalogue/mahadev-enterprises-catalogue.pdf"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md transition hover:border-brand-brass hover:text-brand-brass",
        className,
      )}
      target="_blank"
      rel="noreferrer"
    >
      <Download className="h-4 w-4" />
      Download Catalogue
    </Link>
  );
}