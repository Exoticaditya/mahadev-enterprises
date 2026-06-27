import { site } from "@/data/site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mahadev Enterprises",
  "description": "Premium Pilates equipment manufacturer and supplier in India. Studio-grade reformers, Cadillac tables, Wunda chairs, ladder barrels and accessories. Pan-India delivery from Rishikesh, Uttarakhand.",
  "url": "https://mahadeventerprisesindia.com",
  "telephone": "+919012112527",
  "email": "indiamahadeventerprises@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rishikesh",
    "addressLocality": "Rishikesh",
    "addressRegion": "Uttarakhand",
    "postalCode": "249201",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.0869",
    "longitude": "78.2676"
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "₹₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Bank Transfer, UPI, Cheque, NEFT",
  "areaServed": [
    "Mumbai", "Delhi", "Bengaluru", "Pune", "Ahmedabad",
    "Hyderabad", "Chennai", "Kolkata", "Jaipur", "Rishikesh",
    "Gurgaon", "Noida", "Chandigarh", "Surat", "India"
  ],
  "sameAs": [
    "https://www.instagram.com/mahadev_enterprises_india",
    "https://wa.me/919012112527"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pilates Equipment Catalogue",
    "itemListElement": [
      {"@type":"Offer","itemOffered":{"@type":"Product","name":"Maple Pilates Reformer M-01"}},
      {"@type":"Offer","itemOffered":{"@type":"Product","name":"Reformer With Tower M-02"}},
      {"@type":"Offer","itemOffered":{"@type":"Product","name":"Aluminium Reformer With Tower M-03"}},
      {"@type":"Offer","itemOffered":{"@type":"Product","name":"Foldable Reformer M-04"}},
      {"@type":"Offer","itemOffered":{"@type":"Product","name":"The Cadillac M-05"}},
      {"@type":"Offer","itemOffered":{"@type":"Product","name":"3-in-1 Caformer M-06"}},
      {"@type":"Offer","itemOffered":{"@type":"Product","name":"Ladder Barrel M-07"}},
      {"@type":"Offer","itemOffered":{"@type":"Product","name":"Wunda Chair M-08"}},
      {"@type":"Offer","itemOffered":{"@type":"Product","name":"Aluminium Wunda Chair M-09"}},
      {"@type":"Offer","itemOffered":{"@type":"Product","name":"Aluminium Ladder Barrel M-10"}},
      {"@type":"Offer","itemOffered":{"@type":"Product","name":"Spine Corrector M-11"}}
    ]
  }
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
