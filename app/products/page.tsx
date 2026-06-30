import type { Metadata } from "next";

import { ProductGrid } from "@/components/sections/product-grid";
import { ProductHighlights } from "@/components/sections/product-highlights";
import { AccessoriesGrid } from "@/components/sections/accessories-grid";
import { PageShell } from "@/components/page-shell";
import { products, site } from "@/data/site";
import { JsonLd } from "@/components/json-ld";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Buy Pilates Equipment Online India | All 11 Models",
  description: "Browse all 11 studio-grade Pilates equipment models — maple & aluminium reformers, Cadillac tables, Wunda chairs, ladder barrels, spine correctors. Manufacturer prices.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Products", url: `${site.url}/products` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Products",
          url: `${site.url}/products`,
          mainEntity: products.map((product) => ({
            "@type": "Product",
            name: product.title,
            description: product.summary,
          })),
        }}
      />
      <PageShell
        eyebrow="Catalogue"
        title="A focused product range built for premium wellness environments."
        description="Explore our curated selection of professional Pilates reformers, Cadillac frames, and spatial wellness props engineered for high-performance studios, hotels, and luxury retreats."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]}
        aiSummary="Browse the complete catalog of 11 commercial-grade Pilates equipment models by Mahadev Enterprises. Features studio-grade Maple reformers, stainless steel towers, Cadillac tables, hybrid Caformers, Wunda chairs, spine correctors, and specialized alignment props handcrafted in Rishikesh and shipped across India."
      >
        <ProductGrid layout="grid" />
        <ProductHighlights />
        <AccessoriesGrid />
      </PageShell>
    </>
  );
}