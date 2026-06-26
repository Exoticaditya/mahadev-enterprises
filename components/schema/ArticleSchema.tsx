import { site } from "@/data/site";

interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${site.url}/journal/${slug}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: `${site.url}${image}`,
      },
    }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/journal/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
