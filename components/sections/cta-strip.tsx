import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaStrip() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,rgba(176,138,87,0.18),rgba(255,255,255,0.55))] px-8 py-12 shadow-haze dark:bg-[linear-gradient(135deg,rgba(176,138,87,0.18),rgba(19,21,20,0.85))] md:px-12 md:py-16">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Next step</p>
            <h2 className="text-4xl leading-tight md:text-6xl">Request the catalogue or speak to the team.</h2>
            <p className="text-balance text-base leading-7 text-muted-foreground md:text-lg">
              Every enquiry route is designed to feel calm, direct, and commercially serious.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/catalogue/mahadev-enterprises-catalogue.pdf">Download Catalogue</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}