import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { JournalPreview } from "@/components/sections/journal-preview";

export const metadata: Metadata = {
  title: "Journal",
  description: "Premium SEO content and buying guidance for wellness procurement.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <PageShell
      eyebrow="Journal"
      title="Editorial content that earns search visibility and trust."
      description="The journal supports high-intent search queries with practical, premium guidance for buyers."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Journal", href: "/journal" }]}
    >
      <JournalPreview />
    </PageShell>
  );
}