import { JsonLd } from "@/components/json-ld";
import { products, site } from "@/data/site";

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rishikesh",
          addressCountry: "IN",
        },
      }}
    />
  );
}

export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: site.name,
        url: site.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rishikesh",
          addressRegion: "Uttarakhand",
          addressCountry: "IN",
        },
        telephone: site.phone,
      }}
    />
  );
}

export function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}

export function ProductSchema({ slug }: { slug: string }) {
  const product = products.find((item) => item.slug === slug);

  if (!product) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        description: product.description,
        brand: { "@type": "Brand", name: site.name },
        manufacturer: { "@type": "Organization", name: site.name },
        category: product.category,
      }}
    />
  );
}
