import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { JsonLd } from "@/components/json-ld";
import { solutions, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Pilates Studio Solutions India | Equipment for Every Space",
  description: "Complete Pilates studio solutions for yoga studios, hotels, resorts, retreat centres, physiotherapy clinics & wellness brands. Custom equipment packages from Rishikesh.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Solutions",
          url: `${site.url}/solutions`,
          mainEntity: solutions.map((solution) => ({
            "@type": "Service",
            name: solution.title,
            description: solution.summary,
          })),
        }}
      />
      <PageShell
        eyebrow="Solutions"
        title="Premium spatial solutions for commercial wellness brands."
        description="We partner with boutique studios, leading hospitality groups, luxury retreat centers, and interior designers to supply tailored, high-performance wellness environments."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }]}
      >
        <SolutionsGrid />
      </PageShell>
    </>
  );
}