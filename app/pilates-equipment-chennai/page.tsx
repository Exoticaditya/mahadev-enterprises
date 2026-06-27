import { LOCATIONS } from "@/lib/locations";
import LocationPageTemplate from "@/components/LocationPageTemplate";
import type { Metadata } from "next";

const data = LOCATIONS["chennai"];

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  keywords: data.seo.keywords,
  alternates: {
    canonical: `${data.url}`,
  },
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    url: `https://mahadeventerprisesindia.com${data.url}`,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://mahadeventerprisesindia.com/social/og-home.svg",
        width: 1200,
        height: 630,
        alt: data.seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: data.seo.title,
    description: data.seo.description,
    images: ["https://mahadeventerprisesindia.com/social/og-home.svg"],
  },
};

export default function ChennaiPage() {
  return <LocationPageTemplate {...data} />;
}
