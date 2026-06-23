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
        <div className="prose prose-neutral max-w-3xl dark:prose-invert">
          <p>This is a placeholder legal page for the production build and will be finalized with legal review before launch.</p>
        </div>
      </section>
    </PageShell>
  );
}