import type { MetadataRoute } from "next";

import { journalPosts, products, seoLandingPages, site, solutions } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/products",
    "/solutions",
    "/projects",
    "/journal",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms",
    ...products.map((product) => `/products/${product.slug}`),
    ...solutions.map((solution) => `/solutions/${solution.slug}`),
    ...journalPosts.map((post) => `/journal/${post.slug}`),
    ...seoLandingPages.map((page) => `/seo/${page.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}