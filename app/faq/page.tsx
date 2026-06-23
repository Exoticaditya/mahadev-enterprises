import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { FAQSection } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Mahadev Enterprises products and enquiry flow.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title="Straight answers for premium buyers."
      description="This page reduces uncertainty and supports both SEO and conversion clarity."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]}
    >
      <FAQSection />
    </PageShell>
  );
}