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
      title="The Mahadev Enterprises Journal"
      description="Read professional perspectives on Pilates equipment selection, studio layout design, and wellness industry procurement standards."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Journal", href: "/journal" }]}
    >
      <JournalPreview />
    </PageShell>
  );
}