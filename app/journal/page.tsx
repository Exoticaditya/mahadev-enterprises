import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { JournalPreview } from "@/components/sections/journal-preview";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Pilates Equipment Journal | Guides & Industry Insights",
  description: "Expert guides on Pilates equipment selection, studio setup, material comparisons & industry insights from India's leading Pilates equipment manufacturer.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Journal", url: `${site.url}/journal` },
        ]}
      />
      <PageShell
      eyebrow="Journal"
      title="The Mahadev Enterprises Journal"
      description="Read professional perspectives on Pilates equipment selection, studio layout design, and wellness industry procurement standards."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Journal", href: "/journal" }]}
      aiSummary="The Mahadev Enterprises Journal provides educational guides, commercial price lists, and technical evaluations for Pilates equipment. Features in-depth comparison articles (such as maple wood vs. aluminium frames), studio space planning tutorials, setup cost estimators, and expert tips for wellness studio procurement in India."
    >
      <JournalPreview />
    </PageShell>
    </>
  );
}