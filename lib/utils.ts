import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { journalContentData } from "./journal-content-data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getReadingTime(slug: string): string {
  const article = journalContentData[slug];
  if (!article || !article.htmlContent) return "3 min read";
  const wordsPerMinute = 200;
  const cleanText = article.htmlContent.replace(/<\/?[^>]+(>|$)/g, "");
  const words = cleanText.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}