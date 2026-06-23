import type { Metadata } from "next";

import { ProductGrid } from "@/components/sections/product-grid";
import { ProductHighlights } from "@/components/sections/product-highlights";
import { PageShell } from "@/components/page-shell";
import { products, site } from "@/data/site";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Products",
  description: "Premium Pilates equipment, yoga props, and wellness products for studios and commercial spaces.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
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
        description="The product catalogue is structured to make evaluation easy for buyers who care about material quality, studio fit, and long-term reliability."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]}
      >
        <ProductGrid />
        <ProductHighlights />
      </PageShell>
    </>
  );
}