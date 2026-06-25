import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms and Conditions"
      description="Operational terms and commercial conditions will be finalized before launch."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms and Conditions", href: "/terms" }]}
    >
      <section className="container py-10 md:py-20">
        <div className="prose prose-neutral max-w-3xl dark:prose-invert space-y-8 text-foreground/80 leading-7 text-sm md:text-base">
          <div>
            <h3 className="text-xl font-serif text-foreground font-semibold">1. Commercial Enquiries</h3>
            <p className="mt-3">
              This website serves as a commercial product showcase for studio owners, designers, and hospitality directors. Product listings represent technical specifications, and official price quotes are issued only via custom proposals from our procurement team.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-foreground font-semibold">2. Production Timelines and Lead Times</h3>
            <p className="mt-3">
              Because our reformers, Cadillac frames, and apparatus are handcrafted to order using premium Maple wood and anodized aluminium, manufacturing lead times vary based on bulk volume and custom selections. Production timelines begin only after technical drawings are confirmed and partial advance payment is verified.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-foreground font-semibold">3. Material Variances</h3>
            <p className="mt-3">
              We select premium wood stocks for all structures. However, timber is a natural product and minor variations in grain, texture, and natural color are standard, representing the authentic organic quality of our wellness equipment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-foreground font-semibold">4. Shipping, Customs, and Delivery</h3>
            <p className="mt-3">
              We offer export-ready shipping coordination from India to international ports. Freight costs, import clearances, and local duties are the responsibility of the purchaser, unless explicitly covered under custom commercial logistics agreements.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}