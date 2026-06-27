import { site } from "@/data/site";

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  slug: string;
  model: string;
  category: string;
  materials: string[];
  dimensions?: string;
  weight?: string;
  priceRange?: string;
  warranty?: string;
}

export function ProductSchema({
  name,
  description,
  image,
  slug,
  model,
  category,
  materials,
  dimensions,
  weight,
  priceRange,
  warranty,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${name} ${model}`,
    description,
    image: `${site.url}${image}`,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    url: `${site.url}/products/${slug}`,
    category,
    material: materials.join(", "),
    ...(weight && { weight: { "@type": "QuantitativeValue", value: weight } }),
    ...(dimensions && { size: dimensions }),
    offers: {
      "@type": "Offer",
      priceRange: priceRange ?? "₹85,000 to ₹1,75,000",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: {
        "@type": "Organization",
        name: "Mahadev Enterprises",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Model Number",
        value: model,
      },
      {
        "@type": "PropertyValue",
        name: "Warranty",
        value: warranty ?? "3-year structural frame warranty",
      },
      {
        "@type": "PropertyValue",
        name: "Category",
        value: category,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
