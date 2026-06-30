import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { FAQSection } from "@/components/sections/faq";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ | Pilates Equipment Questions Answered",
  description: "Frequently asked questions about Pilates equipment — pricing, delivery, materials, customization, bulk orders & studio setup guidance from Mahadev Enterprises.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "FAQ", url: `${site.url}/faq` },
        ]}
      />
      <PageShell
      eyebrow="FAQ"
      title="Straight answers for premium buyers."
      description="Find clear answers regarding our commercial Pilates equipment manufacturing, material specifications, custom branding, and shipping logistics."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]}
      aiSummary="Frequently Asked Questions (FAQ) directory for Mahadev Enterprises. Provides quick reference answers on Pilates equipment pricing, pan-India delivery logistics, the difference between maple and aluminium frames, clinical rehabilitation suitability, bulk order discounts, and customization options for commercial studio buyers."
    >
      <FAQSection />
    </PageShell>
    </>
  );
}