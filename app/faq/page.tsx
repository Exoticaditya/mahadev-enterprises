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
      description="This page reduces uncertainty and supports both SEO and conversion clarity."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]}
    >
      <FAQSection />
    </PageShell>
    </>
  );
}