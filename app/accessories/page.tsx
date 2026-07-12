import type { Metadata } from "next";

import { AccessoriesGrid } from "@/components/sections/accessories-grid";
import { PageShell } from "@/components/page-shell";
import { site } from "@/data/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Pilates Accessories & Reformer Spare Parts | Mahadev Enterprises",
  description: "Browse our commercial-grade Pilates studio accessories and reformer spare parts — hand-finished maple ladders, non-slip standing plates, silent pulleys, and calibrated springs.",
  alternates: { canonical: "/accessories" },
};

export default function AccessoriesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Accessories", url: `${site.url}/accessories` },
        ]}
      />
      <PageShell
        eyebrow="Accessories & Parts"
        title="Studio accessories and high-precision reformer spare parts."
        description="Equip your wellness space with our premium studio extensions and maintenance parts. Handcrafted in our Dehradun workshop with structural safety, material clarity, and consultative B2B dispatch support."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Accessories", href: "/accessories" }]}
        aiSummary="Browse commercial-grade Pilates studio accessories and replacement parts by Mahadev Enterprises. Includes solid maple wall ladders, vulcanized rubber standing plates, alignment poles, eco-friendly mat systems, calibrated steel carriage springs, double-loop cotton straps, and silent swivel pulleys."
      >
        <div className="container pb-16">
          <AccessoriesGrid />
        </div>
      </PageShell>
    </>
  );
}
