import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { JournalPreview } from "@/components/sections/journal-preview";

export const metadata: Metadata = {
  title: "Pilates Equipment Journal | Guides & Industry Insights",
  description: "Expert guides on Pilates equipment selection, studio setup, material comparisons & industry insights from India's leading Pilates equipment manufacturer.",
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