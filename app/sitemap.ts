import type { MetadataRoute } from "next";

import { journalPosts, products, solutions, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site.url}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/solutions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/journal`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${site.url}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Product pages
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${site.url}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Solution pages
  const solutionPages: MetadataRoute.Sitemap = solutions.map((solution) => ({
    url: `${site.url}/solutions/${solution.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Journal/blog articles
  const journalPages: MetadataRoute.Sitemap = journalPosts.map((post) => ({
    url: `${site.url}/journal/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Location pages (will be populated when location pages are created)
  const locationCities = [
    "mumbai", "delhi", "bangalore", "pune", "ahmedabad", "hyderabad",
    "chennai", "kolkata", "jaipur", "rishikesh", "gurgaon", "chandigarh",
    "surat", "noida", "navi-mumbai-thane",
  ];
  const locationStates = [
    "maharashtra", "karnataka", "delhi-ncr", "gujarat", "tamil-nadu",
    "telangana", "uttarakhand", "west-bengal", "rajasthan", "punjab-haryana",
  ];

  const locationPages: MetadataRoute.Sitemap = [
    ...locationCities.map((city) => ({
      url: `${site.url}/pilates-equipment-${city}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...locationStates.map((state) => ({
      url: `${site.url}/pilates-equipment-${state}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${site.url}/locations`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  return [
    ...corePages,
    ...productPages,
    ...solutionPages,
    ...journalPages,
    ...locationPages,
  ];
}