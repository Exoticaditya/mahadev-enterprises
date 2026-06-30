import { site } from "@/data/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mahadev Enterprises",
  "alternateName": "Mahadev Enterprises India",
  "url": "https://mahadeventerprisesindia.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://mahadeventerprisesindia.com/logo.webp",
    "width": 512,
    "height": 512
  },
  "description": "India's premium Pilates equipment manufacturer in Rishikesh, Uttarakhand. Studio-grade reformers, Cadillac tables, Wunda chairs for commercial studios and wellness centers.",
  "foundingLocation": {
    "@type": "Place",
    "name": "Rishikesh, Uttarakhand, India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+919012112527",
    "contactType": "sales",
    "availableLanguage": ["English", "Hindi"],
    "contactOption": "TollFree",
    "areaServed": "IN"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rishikesh",
    "addressRegion": "Uttarakhand",
    "postalCode": "249201",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.instagram.com/mahadev_enterprises_india",
    "https://wa.me/919012112527"
  ]
};

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
