import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { JsonLd } from "@/components/json-ld";
import { solutions, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Commercial wellness solutions for studios, hospitality, retreat, and design-led buyers.",
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
        title="Built around the people who actually buy wellness equipment."
        description="Each solution page is tuned to a buyer segment so the site can speak clearly to procurement, design, and hospitality needs."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }]}
      >
        <SolutionsGrid />
      </PageShell>
    </>
  );
}