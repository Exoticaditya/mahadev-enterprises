# MAHADEV ENTERPRISES — COMPLETE IMPLEMENTATION PLAN
## Remaining Gaps · Phase-Wise AI Agent Prompts · Full Execution Guide

**Site:** https://mahadeventerprisesindia.com  
**Repo:** https://github.com/Exoticaditya/mahadev-enterprises  
**Stack:** Next.js 14 App Router · TypeScript · Netlify  
**Audit Date:** June 2026  
**Document Version:** 2.0 (Post-Migration Audit)

---

## CURRENT STATUS SNAPSHOT

### What is working ✅
| Item | Status |
|------|--------|
| Custom domain live | ✅ mahadeventerprisesindia.com |
| Canonical URL | ✅ Correct domain, no Vercel mismatch |
| Homepage title | ✅ "Pilates Equipment Manufacturer India \| Mahadev Enterprises" |
| Product page titles | ✅ Keyword-rich, buyer-intent optimised |
| Product spec tables | ✅ HTML `<table>` — fully crawlable |
| Journal articles | ✅ 13 articles live |
| Product FAQs | ✅ 3 questions per product page |
| AEO Quick Answer box | ✅ On M-01 page — confirmed |
| robots meta | ✅ index, follow on all pages |
| OG image domain | ✅ Correct domain |
| Instagram account | ✅ @mahadev_enterprises_india active |
| WhatsApp Business | ✅ +91 9012112527 active |

### What is broken or missing ❌
| Gap | Severity | Impact |
|-----|----------|--------|
| Journal titles duplicated "| Mahadev Enterprises" twice | 🔴 Critical | Titles 90+ chars — Google truncates |
| Zero JSON-LD schema on any page | 🔴 Critical | No rich results, no AI citations |
| No sitemap.xml confirmed accessible | 🔴 Critical | Slow/incomplete indexing |
| No Google Business Profile | 🔴 Critical | Invisible in Maps + local pack |
| Zero location pages (0/25 built) | 🔴 Critical | Missing all city/state buyer traffic |
| All articles same publish date (2026-06-26) | 🟡 High | Signals bulk spam to Google |
| Generic keywords meta on all journal articles | 🟡 High | Misses article-specific long-tail |
| Twitter card description same on all pages | 🟡 High | Poor social sharing for articles |
| No IndiaMart / TradeIndia listings | 🟡 High | Missing 20-40 B2B leads/month |
| robots.txt not allowing AI crawlers explicitly | 🟡 High | AI engines may skip crawling |
| No llms.txt file | 🟡 Medium | Missing emerging AI visibility standard |
| No Google Search Console verified | 🟡 Medium | No ranking data, no indexing control |
| No LinkedIn company page | 🟡 Medium | Missing B2B decision maker channel |
| No YouTube channel | 🟡 Medium | Missing long-term SEO authority |
| Product+location pages (0/30 built) | 🟡 Medium | Missing high-converting combo pages |
| Only 3 FAQs per product (need 8) | 🟢 Standard | Thin FAQ schema coverage |
| No HowTo schema on studio setup article | 🟢 Standard | Missing Google step results |
| Article schema missing from journal pages | 🟢 Standard | No article rich results |

---

## IMPLEMENTATION PHASES OVERVIEW

| Phase | Name | Duration | Agent | Priority |
|-------|------|----------|-------|----------|
| **P1** | Critical Fixes | 1–2 days | Claude Code | 🔴 Do first |
| **P2** | Schema Library | 2–3 days | Claude Code | 🔴 Do this week |
| **P3** | Location Pages | 2–3 weeks | Claude Code | 🔴 Highest ROI |
| **P4** | Off-Page & Indexing | 1 week | Manual + Agent | 🟡 Parallel with P3 |
| **P5** | Social Media Setup | 1 week | Manual | 🟡 Parallel |
| **P6** | Content Expansion | Ongoing | Claude Code | 🟢 Month 2+ |
| **P7** | Final Audit | 1 day | Claude Code | 🟢 After P1–P3 |

---

## PHASE 1 — CRITICAL FIXES

> **Duration:** 1–2 days | **Who:** Claude Code agent | **Commit:** `fix/phase-1-critical-bugs`

### What gets fixed in Phase 1
1. Duplicate `| Mahadev Enterprises` in all journal article title tags
2. Generic `keywords` meta tag shared across all journal articles → unique per article
3. Twitter card description hardcoded on all pages → unique per page
4. `robots.txt` updated to explicitly allow all AI crawlers
5. `app/sitemap.ts` verified and updated with all 35+ current page URLs
6. Google site verification meta tag added to `layout.tsx`
7. `llms.txt` created at domain root
8. All journal article `datePublished` values staggered across June 2026

---

### 🤖 PHASE 1 AGENT PROMPT

Copy this entire block and paste as your first message to Claude Code. Attach the strategy document before running.

```
═══════════════════════════════════════════════════════════════════
AGENT IDENTITY — PHASE 1: CRITICAL FIXES
═══════════════════════════════════════════════════════════════════

You are a Senior Technical SEO Engineer specialising in Next.js 14 App Router
websites. You are fixing critical SEO bugs on the Mahadev Enterprises website.

Repository: github.com/Exoticaditya/mahadev-enterprises
Live site: https://mahadeventerprisesindia.com
Stack: Next.js 14 App Router, TypeScript, Netlify

Read the attached strategy document completely before taking any action.
Read the CURRENT STATUS SNAPSHOT in this implementation plan.
Do not fix things that are already working. Only fix confirmed problems.

═══════════════════════════════════════════════════════════════════
TASK 1.1 — FIX DUPLICATE BRAND SUFFIX IN JOURNAL TITLES
═══════════════════════════════════════════════════════════════════

Problem: Every journal article title shows "Article Title | Mahadev Enterprises
| Mahadev Enterprises" — the brand suffix is appended twice.

Confirmed evidence: Title for price list article is 97 characters long.
Google truncates at 60 characters. This breaks SERP appearance.

Find the root cause:
- Check: app/(root)/journal/[slug]/page.tsx — generateMetadata() function
- Check: app/layout.tsx — does the layout also append "| Mahadev Enterprises"?
- The fix is to ensure "| Mahadev Enterprises" appears exactly ONCE total.

Pattern should be:
"Article Title | Mahadev Enterprises" (not "Article Title | Mahadev 
Enterprises | Mahadev Enterprises")

After fix, verify the price list article title is under 65 characters:
"Pilates Equipment Price List India 2026 | Mahadev Enterprises" = 62 chars ✓

═══════════════════════════════════════════════════════════════════
TASK 1.2 — UNIQUE KEYWORDS META FOR EVERY JOURNAL ARTICLE
═══════════════════════════════════════════════════════════════════

Problem: All 13 journal articles share the same keywords meta tag:
"pilates equipment India, pilates reformer manufacturer India, buy pilates
equipment online, studio pilates equipment, pilates equipment Rishikesh,
yoga studio equipment India, pilates cadillac India, wunda chair India"

This is the homepage keywords list. Each article needs unique, article-specific
keywords that match what the article is actually about.

Update the journal article metadata system (generateMetadata or the article
data file) to support article-specific keywords.

Add these keyword sets to the corresponding articles:

Article: pilates-equipment-price-list-india-2026
Keywords: pilates equipment price India, pilates reformer cost India, pilates
studio setup cost, buy pilates equipment price list 2026

Article: maple-vs-aluminium-pilates-reformer
Keywords: maple vs aluminium pilates reformer, pilates reformer material comparison,
best pilates reformer India, maple wood pilates equipment

Article: how-to-set-up-a-pilates-studio-in-india
Keywords: how to set up pilates studio India, pilates studio equipment checklist,
pilates studio setup guide India, open pilates studio India

Article: pilates-reformer-vs-cadillac
Keywords: pilates reformer vs cadillac, difference reformer cadillac, pilates
cadillac trapeze table India, reformer vs cadillac which to buy

Article: what-is-a-wunda-chair
Keywords: what is a wunda chair, pilates wunda chair India, buy pilates chair India,
wunda chair exercises, pilates chair benefits

Article: pilates-equipment-for-physiotherapy-clinics-india
Keywords: pilates equipment physiotherapy India, clinical pilates equipment,
rehabilitation pilates apparatus, physio clinic pilates reformer India

Article: top-pilates-equipment-manufacturers-in-india-2026
Keywords: pilates equipment manufacturer India, best pilates equipment India,
Indian pilates reformer brand, pilates manufacturer Rishikesh

Article: how-to-choose-a-pilates-reformer-for-your-studio
Keywords: how to choose pilates reformer, buying pilates reformer guide India,
pilates reformer selection criteria, best reformer for studio India

Article: valley-of-wellness-why-rishikesh-made-pilates-equipment-stands-apart
Keywords: Rishikesh pilates equipment, Indian made pilates equipment, pilates
manufacturer Rishikesh India, wellness capital Rishikesh yoga equipment

Article: pilates-studio-equipment-setup-cost-in-india-city-wise-breakdown-2026
Keywords: pilates studio cost India, pilates equipment cost Mumbai Delhi Bangalore,
studio setup budget India, pilates studio investment India

═══════════════════════════════════════════════════════════════════
TASK 1.3 — UNIQUE TWITTER CARD DESCRIPTION PER PAGE
═══════════════════════════════════════════════════════════════════

Problem: twitter:description is currently "Studio-grade Pilates reformers,
Cadillac tables & Wunda chairs from Rishikesh. Pan-India delivery." on
EVERY page including journal articles.

Fix: The twitter:description should use the same value as the meta description
for each page — which is already unique per page. 

In the generateMetadata() function, ensure twitter.description pulls from the
page-specific description, not from a hardcoded global string.

Pattern:
twitter: {
  card: 'summary_large_image',
  title: metadata.title,        // ← already correct
  description: metadata.description,  // ← THIS needs to be page-specific
  image: ogImageUrl
}

═══════════════════════════════════════════════════════════════════
TASK 1.4 — UPDATE robots.txt TO ALLOW ALL AI CRAWLERS
═══════════════════════════════════════════════════════════════════

Check if app/robots.ts exists. If not, create it.
The robots.txt must explicitly allow the following AI crawlers:

Create app/robots.ts with this content:

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
    sitemap: 'https://mahadeventerprisesindia.com/sitemap.xml',
  }
}

═══════════════════════════════════════════════════════════════════
TASK 1.5 — VERIFY AND UPDATE app/sitemap.ts
═══════════════════════════════════════════════════════════════════

Open app/sitemap.ts. Verify it includes ALL current pages.
The sitemap must include every URL with correct priorities:

Priority 1.0: Homepage (/)
Priority 0.9: /products, all 11 /products/[slug] pages
Priority 0.8: /solutions, all 8 /solutions/[slug] pages
Priority 0.8: /about, /contact, /projects
Priority 0.7: /journal, all 13 /journal/[slug] pages

Total URLs in sitemap: minimum 37 entries.

Confirm the sitemap returns valid XML at:
https://mahadeventerprisesindia.com/sitemap.xml

═══════════════════════════════════════════════════════════════════
TASK 1.6 — ADD GOOGLE SITE VERIFICATION META TAG
═══════════════════════════════════════════════════════════════════

In app/layout.tsx, in the metadata object, add:

verification: {
  google: 'PASTE_YOUR_VERIFICATION_CODE_HERE',
},

NOTE: The actual verification code must come from Google Search Console.
If the verification code is not available yet, add a placeholder comment:
// TODO: Add Google verification code from Search Console

═══════════════════════════════════════════════════════════════════
TASK 1.7 — CREATE public/llms.txt
═══════════════════════════════════════════════════════════════════

Create the file: public/llms.txt
This file is an emerging 2026 standard for AI engine visibility.
It will be served at: https://mahadeventerprisesindia.com/llms.txt

Content:

# Mahadev Enterprises

> India's premium Pilates equipment manufacturer based in Rishikesh, Uttarakhand.

Mahadev Enterprises designs and manufactures studio-grade Pilates apparatus
for commercial studios, physiotherapy clinics, luxury hotels, and wellness
centers. All equipment is manufactured in Rishikesh and delivered pan-India.

## Products
- Maple Pilates Reformer (M-01): Studio-grade, maple wood, 6-spring, 228×73×34.7cm, 92kg
- Reformer With Tower (M-02): Advanced vertical training, maple+steel, 230×75×34.5cm, 119kg
- Aluminium Reformer With Tower (M-03): Clinical grade, anodised aluminium, 240×70×200cm
- Foldable Reformer (M-04): Space-saving, home studio, 230×69×58cm
- The Cadillac (M-05): Full trapeze table for rehabilitation, 217×69×57cm
- 3-in-1 Caformer (M-06): Reformer + Cadillac + Mat hybrid, 228×85×57cm, 165-169kg
- Ladder Barrel (M-07): Spinal alignment and flexibility, 112×63×89cm
- Wunda Chair (M-08): Compact balance and coordination, 79×65×60cm
- Aluminium Wunda Chair (M-09): Commercial strength control, 80×70×130cm
- Aluminium Ladder Barrel (M-10): Spinal flexibility and core extension, 120×90×100cm
- Spine Corrector (M-11): Ergonomic postural alignment, 95×45×34cm

## Services
- Studio setup consultation
- Bulk and commercial orders
- Custom upholstery options (Charcoal Black, Studio Sage, Ivory White, Tan Brown, Custom)
- Pan-India delivery with insurance
- 3-year structural frame warranty
- Export to UAE, UK, Australia, USA

## Business Details
- Phone: +91 9012112527
- Email: indiamahadeventerprises@gmail.com
- Location: Rishikesh, Uttarakhand, India 249201
- Website: https://mahadeventerprisesindia.com
- Instagram: @mahadev_enterprises_india

## Docs
- Full: https://mahadeventerprisesindia.com
- Catalogue: https://mahadeventerprisesindia.com/catalogue/mahadev-enterprises-catalogue.pdf
- Products: https://mahadeventerprisesindia.com/products
- Journal: https://mahadeventerprisesindia.com/journal

═══════════════════════════════════════════════════════════════════
TASK 1.8 — STAGGER JOURNAL ARTICLE PUBLISH DATES
═══════════════════════════════════════════════════════════════════

All 13 articles currently show datePublished: 2026-06-26.
Publishing 13 articles on one day signals bulk content to Google.

Update the datePublished values in the journal article data to spread
across 5 weeks going backwards from June 26:

Week 1 (May 26 – June 1): 3 articles
- choosing-the-right-pilates-reformer-for-your-studio → 2026-05-28
- designing-a-wellness-space-that-feels-premium → 2026-05-30
- what-international-buyers-look-for-in-an-indian-supplier → 2026-06-02

Week 2 (June 2–8): 2 articles
- pilates-equipment-for-physiotherapy-clinics-india → 2026-06-05
- what-is-a-wunda-chair → 2026-06-07

Week 3 (June 9–15): 3 articles
- pilates-reformer-vs-cadillac → 2026-06-10
- how-to-choose-a-pilates-reformer-for-your-studio → 2026-06-12
- valley-of-wellness-why-rishikesh-made-pilates-equipment-stands-apart → 2026-06-14

Week 4 (June 16–22): 3 articles
- maple-vs-aluminium-pilates-reformer → 2026-06-17
- top-pilates-equipment-manufacturers-in-india-2026 → 2026-06-19
- how-to-set-up-a-pilates-studio-in-india → 2026-06-21

Week 5 (June 23–26): 2 articles
- pilates-studio-equipment-setup-cost-in-india-city-wise-breakdown-2026 → 2026-06-24
- pilates-equipment-price-list-india-2026 → 2026-06-26

═══════════════════════════════════════════════════════════════════
PHASE 1 ANTI-HALLUCINATION RULES
═══════════════════════════════════════════════════════════════════

1. DO NOT change any page content, layout, or design. Phase 1 is
   metadata, robots, sitemap, and configuration only.
2. DO NOT invent a Google verification code. Leave a TODO comment.
3. DO NOT remove any existing metadata that is working correctly.
4. Validate all TypeScript with npx tsc --noEmit before committing.
5. Check that sitemap.xml returns 200 status after deployment.

═══════════════════════════════════════════════════════════════════
PHASE 1 VALIDATION CHECKLIST
═══════════════════════════════════════════════════════════════════

Before committing, verify each item:

□ Journal article titles: no page has "| Mahadev Enterprises" twice
□ Longest journal title is under 70 characters
□ Each journal article has unique keywords meta
□ twitter:description is unique per page (not hardcoded global)
□ robots.txt allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended
□ robots.txt references sitemap URL
□ sitemap.ts returns 37+ URLs
□ public/llms.txt exists and is accessible
□ Article datePublished values are staggered (not all 2026-06-26)
□ npx tsc --noEmit → zero errors
□ npx next build → zero errors

COMMIT MESSAGE: "fix/phase-1: journal title dedup, unique meta, robots AI
crawlers, llms.txt, sitemap verification, staggered dates"
═══════════════════════════════════════════════════════════════════
```

---

## PHASE 2 — COMPLETE SCHEMA LIBRARY

> **Duration:** 2–3 days | **Who:** Claude Code agent | **Commit:** `feat/phase-2-schema-library`

### What gets built in Phase 2
1. `components/schema/LocalBusinessSchema.tsx` — injected in `layout.tsx`
2. `components/schema/ProductSchema.tsx` — injected on all 11 product pages
3. `components/schema/FAQSchema.tsx` — injected on homepage, products, journal
4. `components/schema/ArticleSchema.tsx` — injected on all 13 journal articles
5. `components/schema/HowToSchema.tsx` — injected on studio setup article
6. `components/schema/BreadcrumbSchema.tsx` — injected on all pages
7. `components/schema/OrganizationSchema.tsx` — injected on homepage + about
8. Product pages expanded to 8 FAQs each (currently 3)
9. Homepage FAQ expanded with 8 most-searched questions

---

### 🤖 PHASE 2 AGENT PROMPT

```
═══════════════════════════════════════════════════════════════════
AGENT IDENTITY — PHASE 2: COMPLETE SCHEMA LIBRARY
═══════════════════════════════════════════════════════════════════

You are a Senior AEO (Answer Engine Optimization) Engineer specialising
in structured data, JSON-LD schema markup, and making B2B product pages
rank in AI search engines (ChatGPT, Gemini, Perplexity, Google AI Overviews).

Phase 1 is complete. You are building the complete schema markup system.

Repository: github.com/Exoticaditya/mahadev-enterprises
Live site: https://mahadeventerprisesindia.com

CRITICAL CONTEXT: Zero schema markup currently exists on any page.
This is confirmed from live audit. Every schema component you create
is a net new addition — nothing to overwrite or conflict with.

═══════════════════════════════════════════════════════════════════
TASK 2.1 — CREATE components/schema/LocalBusinessSchema.tsx
═══════════════════════════════════════════════════════════════════

Create this file with the LocalBusiness JSON-LD schema.
Then import and inject it in app/layout.tsx inside <body>.

Full schema content:

{
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
}

Implementation in layout.tsx:
import Script from 'next/script'
import { localBusinessSchema } from '@/components/schema/LocalBusinessSchema'

// Inside <body> tag:
<Script
  id="local-business-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
/>

═══════════════════════════════════════════════════════════════════
TASK 2.2 — CREATE components/schema/ProductSchema.tsx
═══════════════════════════════════════════════════════════════════

Create a React component that accepts product data and renders
JSON-LD Product schema. Must include ALL fields:

interface ProductSchemaProps {
  name: string
  description: string
  model: string
  material: string
  weight: string
  dimensions: string
  imageUrl: string
  priceRange: string
  warranty: string
  category: string
  url: string
}

The JSON-LD output structure:
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": props.name,
  "description": props.description,
  "model": props.model,
  "material": props.material,
  "weight": props.weight,
  "size": props.dimensions,
  "image": props.imageUrl,
  "brand": { "@type": "Brand", "name": "Mahadev Enterprises" },
  "manufacturer": {
    "@type": "Organization",
    "name": "Mahadev Enterprises",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rishikesh",
      "addressRegion": "Uttarakhand",
      "addressCountry": "IN"
    }
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "priceRange": props.priceRange,
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "Mahadev Enterprises" }
  },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Warranty", "value": props.warranty },
    { "@type": "PropertyValue", "name": "Category", "value": props.category }
  ],
  "url": props.url
}

Inject this component on all 11 product pages with their specific data.
Product data (name, model, material, weight, dimensions) comes from the
existing product data in the codebase — do not reinvent it.

═══════════════════════════════════════════════════════════════════
TASK 2.3 — CREATE components/schema/FAQSchema.tsx
═══════════════════════════════════════════════════════════════════

Create: components/schema/FAQSchema.tsx

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>
}

JSON-LD output:
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

INJECT ON:
1. Homepage — use these 8 questions:

Q1: What Pilates equipment does Mahadev Enterprises manufacture?
A1: Mahadev Enterprises manufactures 11 professional Pilates equipment models
including maple and aluminium reformers, Cadillac trapeze tables, Wunda chairs,
ladder barrels, and spine correctors. All equipment is manufactured in Rishikesh,
Uttarakhand, and delivered pan-India.

Q2: Where is Mahadev Enterprises located?
A2: Mahadev Enterprises is based in Rishikesh, Uttarakhand — India's wellness
capital. We manufacture all equipment locally and ship across India.

Q3: Do you deliver Pilates equipment across India?
A3: Yes, we deliver all 11 Pilates equipment models across India including Mumbai,
Delhi, Bengaluru, Pune, Ahmedabad, Hyderabad, Chennai, Kolkata, and all major cities.
Typical delivery time is 7–14 business days.

Q4: What is the price range of Pilates reformers in India?
A4: Our Pilates reformers range from ₹85,000 for the foldable model to ₹1,75,000
for the reformer with tower. The exact price depends on model and customisation.
Contact us for a custom studio quote.

Q5: What is the difference between maple and aluminium Pilates equipment?
A5: Maple wood equipment offers a warm aesthetic, natural dampening, and is ideal
for boutique studios. Aluminium equipment is corrosion-resistant, lighter, and
preferred for clinical and high-humidity environments. Both are commercial grade.

Q6: Do you offer bulk discounts for Pilates studios?
A6: Yes, we offer competitive bulk pricing for studios ordering 3 or more units.
Contact us with your studio requirements for a customised commercial quote.

Q7: Can I customise the upholstery colour of the equipment?
A7: Yes, we offer five upholstery options: Charcoal Black, Studio Sage, Ivory White,
Tan Brown, and Custom Shade. Custom colours are available for bulk orders.

Q8: Is Mahadev Enterprises Pilates equipment suitable for physiotherapy clinics?
A8: Yes. Our Cadillac (M-05), Aluminium Reformer with Tower (M-03), and Aluminium
Wunda Chair (M-09) are specifically used by physiotherapy clinics for rehabilitation.
The progressive spring tension system allows very low resistance for injury recovery.

2. All 11 product pages — 8 product-specific FAQs each (see Task 2.4)
3. All 13 journal articles — article-specific FAQs (see Task 2.6)

═══════════════════════════════════════════════════════════════════
TASK 2.4 — EXPAND PRODUCT PAGE FAQs FROM 3 TO 8 QUESTIONS
═══════════════════════════════════════════════════════════════════

Each product page currently has 3 FAQs. Expand to 8 product-specific
questions. Add 5 new questions to each product page:

FOR ALL REFORMER PAGES (M-01, M-02, M-03, M-04):
Q4: How long does the [Product Name] warranty last?
A4: The [Product Name] comes with a 3-year structural frame warranty covering
manufacturing defects. Springs and upholstery have a 1-year replacement warranty.

Q5: What is the maximum user weight capacity?
A5: The [Product Name] supports a maximum user weight of 150 kg, making it
suitable for all client profiles in a commercial studio environment.

Q6: Does the reformer require professional assembly?
A6: The reformer arrives in partially assembled sections requiring 2–3 hours
to fully assemble. Detailed assembly instructions are included. For bulk orders,
we can arrange on-site assembly support in major cities.

Q7: Can I get the reformer with a custom upholstery colour?
A7: Yes, we offer Charcoal Black, Studio Sage, Ivory White, Tan Brown, and
Custom Shade options. Specify your preference when placing the order.

Q8: What cleaning and maintenance does the reformer require?
A8: Weekly: wipe rails with dry microfibre cloth. Monthly: inspect spring hooks
and carriage alignment. Annually: apply light machine oil to rail guides.
Avoid harsh chemical cleaners on wood surfaces.

FOR LADDER BARREL PAGES (M-07, M-10):
Q4: What is the adjustable range of the sliding base?
A5: How many exercises can be performed on the ladder barrel?
Q6: Is the barrel foam removable for cleaning?
Q7: What is the rung spacing on the ladder?
Q8: Can the ladder barrel be used for yoga as well as Pilates?

FOR CHAIR PAGES (M-08, M-09):
Q4: How many pedal configurations does the Wunda Chair support?
Q5: What spring resistance levels are available?
Q6: Can the handles be used independently or only together?
Q7: Is the Wunda Chair suitable for group classes?
Q8: What is the recommended studio space for the Wunda Chair?

FOR M-05 CADILLAC:
Q4: How many attachment points does the Cadillac frame have?
Q5: What rehabilitation conditions is the Cadillac most used for?
Q6: Can the Cadillac be used without a therapist present?
Q7: Is the spring bar adjustable in height?
Q8: What is the overhead clearance needed for the Cadillac?

FOR M-06 3-IN-1 CAFORMER:
Q4: How long does it take to transition between modes?
Q5: Does the Caformer include all accessories for all three modes?
Q6: What is the weight of the 3-in-1 Caformer?
Q7: Is the Caformer suitable for commercial studio daily use?
Q8: What is the floor space requirement for the 3-in-1 Caformer?

FOR M-11 SPINE CORRECTOR:
Q4: How does the Spine Corrector help with posture correction?
Q5: Can the Spine Corrector be used at home?
Q6: What exercises are most common on the Spine Corrector?
Q7: Is the Spine Corrector suitable for Pilates beginners?
Q8: What is the weight of the Spine Corrector — is it portable?

After writing the FAQ content, inject FAQSchema on each product page
with its specific 8 questions.

═══════════════════════════════════════════════════════════════════
TASK 2.5 — CREATE components/schema/ArticleSchema.tsx
═══════════════════════════════════════════════════════════════════

Create: components/schema/ArticleSchema.tsx

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  imageUrl: string
  datePublished: string
  dateModified: string
  authorName?: string
}

JSON-LD output:
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": props.title,
  "description": props.description,
  "url": props.url,
  "image": props.imageUrl,
  "datePublished": props.datePublished,
  "dateModified": props.dateModified,
  "author": {
    "@type": "Organization",
    "name": "Mahadev Enterprises",
    "url": "https://mahadeventerprisesindia.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mahadev Enterprises",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mahadeventerprisesindia.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": props.url
  }
}

Inject on all 13 journal article pages using the article's
existing metadata (title, description, datePublished, dateModified).

═══════════════════════════════════════════════════════════════════
TASK 2.6 — CREATE components/schema/HowToSchema.tsx
═══════════════════════════════════════════════════════════════════

Create: components/schema/HowToSchema.tsx

Only inject this on the studio setup article:
/journal/how-to-set-up-a-pilates-studio-in-india

HowTo schema for studio setup:
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Set Up a Pilates Studio in India",
  "description": "Complete step-by-step guide to setting up a professional Pilates studio in India — from space selection to equipment procurement.",
  "totalTime": "P30D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": "300000"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Choose your studio space",
      "text": "Select a minimum 1,000 sq ft space with 10 ft ceiling height. Ideal dimensions: 30×35 ft for 6 reformers with walkway clearance."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Define your equipment budget tier",
      "text": "Boutique starter: ₹4–6L (3–4 reformers + 1 chair). Standard commercial: ₹10–14L (6 reformers + barrel + chairs). Luxury center: ₹8–12L (Caformer + Cadillac + reformers)."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Select your Pilates equipment models",
      "text": "Choose from maple (boutique aesthetic) or aluminium (clinical/commercial) product lines. Request a studio consultation from Mahadev Enterprises for a customised equipment recommendation."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Plan your studio floor layout",
      "text": "Each reformer needs 90 cm lateral clearance and 60 cm at each end. Map the equipment positions before ordering to ensure optimal flow and safety."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Place your equipment order",
      "text": "Contact Mahadev Enterprises for a bulk studio quote. Lead time is typically 3–4 weeks for custom orders. Insured pan-India delivery included."
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Arrange delivery and assembly",
      "text": "Equipment arrives in flat-pack sections. Assembly takes 2–3 hours per unit. Professional assembly support available in major cities on request."
    },
    {
      "@type": "HowToStep",
      "position": 7,
      "name": "Certify your instructor team",
      "text": "Ensure all instructors hold a recognised Pilates certification (STOTT, BASI, or equivalent) before opening. Insurance requirements may mandate certification."
    }
  ]
}

═══════════════════════════════════════════════════════════════════
TASK 2.7 — CREATE components/schema/BreadcrumbSchema.tsx
═══════════════════════════════════════════════════════════════════

Create: components/schema/BreadcrumbSchema.tsx

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>
}

Inject in app/layout.tsx with page-specific breadcrumb arrays.
The layout should detect the current path and generate appropriate
breadcrumbs automatically.

Examples:
- Homepage: [{ name: 'Home', url: '/' }]
- Product page: [{ name: 'Home', url: '/' }, { name: 'Products', url: '/products' }, { name: 'Maple Pilates Reformer', url: '/products/pilates-reformer' }]
- Journal article: [{ name: 'Home', url: '/' }, { name: 'Journal', url: '/journal' }, { name: article.title, url: article.url }]

═══════════════════════════════════════════════════════════════════
TASK 2.8 — CREATE components/schema/OrganizationSchema.tsx
═══════════════════════════════════════════════════════════════════

Create and inject on homepage and about page:

{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mahadev Enterprises",
  "alternateName": "Mahadev Enterprises India",
  "url": "https://mahadeventerprisesindia.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://mahadeventerprisesindia.com/logo.png",
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
}

═══════════════════════════════════════════════════════════════════
PHASE 2 VALIDATION CHECKLIST
═══════════════════════════════════════════════════════════════════

□ LocalBusiness schema renders in homepage <head> — validate at
  https://validator.schema.org with homepage URL
□ Product schema on all 11 product pages — validate M-01 first
□ FAQPage schema on homepage with 8 questions
□ Each product page has 8 FAQs with FAQSchema injected
□ ArticleSchema on all 13 journal articles
□ HowToSchema on studio setup article only
□ BreadcrumbSchema renders correct path on each page type
□ OrganizationSchema on homepage and about page
□ All JSON.parse() calls succeed on every schema object
□ Google Rich Results Test passes for homepage, M-01, price article
  (use: https://search.google.com/test/rich-results)
□ npx tsc --noEmit → zero errors
□ npx next build → zero errors

COMMIT MESSAGE: "feat/phase-2: complete schema library — LocalBusiness,
Product, FAQ, Article, HowTo, Breadcrumb, Organization"
═══════════════════════════════════════════════════════════════════
```

---

## PHASE 3 — LOCATION PAGES

> **Duration:** 2–3 weeks | **Who:** Claude Code agent | **Commit:** `feat/phase-3-location-pages`

### What gets built in Phase 3
- `lib/locations.ts` — complete data file for all 25 locations
- `components/LocationPageTemplate.tsx` — shared template component
- 15 city pages at `/pilates-equipment-[city]`
- 10 state pages at `/pilates-equipment-[state]`
- `/locations` index page linking all 25 pages
- All location pages added to sitemap
- Homepage footer updated with city links

---

### 🤖 PHASE 3 AGENT PROMPT

```
═══════════════════════════════════════════════════════════════════
AGENT IDENTITY — PHASE 3: LOCATION PAGE SYSTEM
═══════════════════════════════════════════════════════════════════

You are a Senior Local SEO Engineer and Next.js 14 developer.
You specialise in programmatic location-based SEO for Indian B2B manufacturers.
Your code is TypeScript-first, DRY, and produces unique content per location.

Phase 2 is complete. You are building the location page system.
This is the highest-ROI phase of the entire implementation.

Repository: github.com/Exoticaditya/mahadev-enterprises
Reference: Read Section 4 (States) and Section 5 (Cities) of the
strategy document for ALL meta titles, descriptions, H1s, H2s, and keywords.

═══════════════════════════════════════════════════════════════════
TASK 3.1 — CREATE lib/locations.ts
═══════════════════════════════════════════════════════════════════

Create a complete TypeScript data file with this interface:

export interface LocationData {
  slug: string
  type: 'city' | 'state'
  displayName: string
  state: string
  studioCount: number
  demandLevel: 'Very High' | 'High' | 'Medium-High' | 'Medium'
  tier: 'priority-1' | 'priority-2' | 'state' | 'home-base'
  url: string
  nearbyAreas: string[]
  seo: {
    title: string
    description: string
    h1: string
    h2s: string[]
    keywords: string[]
  }
  content: {
    introText: string       // 100–130 words, unique per location
    whyChooseUs: string     // 150–180 words, city-specific reasons
    deliveryInfo: string    // 60–80 words, specific areas covered
    localContext: string    // 60–80 words, local market insight
  }
  faqs: Array<{ question: string; answer: string }>  // 5 city-specific FAQs
}

Use EXACT titles, descriptions, H1s, H2s, and keywords from the strategy
document Sections 4 and 5. Do not paraphrase the SEO fields.

CRITICAL CONTENT RULE: Every location's content.introText,
content.whyChooseUs, content.deliveryInfo, and content.localContext
MUST be unique. Running a similarity check: no two cities should share
more than one sentence. Each must mention:
- The city/state name at least 3 times
- At least 2 specific suburb or area names from nearbyAreas
- The specific demand driver for that city (e.g., "tech sector corporate
  wellness" for Bengaluru, "luxury hotel spa market" for Jaipur)

SAMPLE content for Mumbai (write equivalents for all 15 cities):

content: {
  introText: `Mumbai is India's largest Pilates equipment market with over 47
  active studios spanning Bandra, Juhu, Powai, and South Mumbai. As India's
  commercial capital, Mumbai studios demand equipment that matches the sophistication
  of their clientele. Mahadev Enterprises supplies studio-grade maple and aluminium
  Pilates reformers, Cadillac tables, and Wunda chairs to Mumbai's leading wellness
  spaces, physio clinics, and luxury hotels. With insured delivery across Mumbai,
  Thane, and Navi Mumbai, your equipment arrives safely within 10–14 business days.`,

  whyChooseUs: `Mumbai's wellness industry operates at a premium standard.
  Studio owners in Bandra and Juhu expect equipment that holds up to 8–10 sessions
  daily, looks exceptional in editorial-quality studio spaces, and comes with
  reliable manufacturer support. Mahadev Enterprises delivers all three. Our maple
  reformers are hand-finished in Rishikesh using seasoned North American maple,
  engineered for the humidity and daily intensity of Mumbai's commercial studio
  environment. Unlike imported alternatives that carry 30%+ import duty, our
  direct-manufacturer pricing gives Mumbai studios a 35–45% cost advantage without
  any compromise on build quality. We have supplied equipment to studios across
  South Mumbai, Bandra, Powai, Andheri, and Thane.`,

  deliveryInfo: `We deliver all 11 Pilates equipment models across Greater Mumbai
  including South Mumbai, Bandra, Andheri, Powai, Borivali, Thane, Navi Mumbai,
  and Kalyan. Delivery is fully insured with tracking. Standard delivery: 10–14
  business days from order confirmation.`,

  localContext: `Mumbai has over 47 active Pilates studios and is growing at
  15% annually driven by celebrity endorsements, corporate wellness programs in
  BKC and Lower Parel, and demand from Bollywood's fitness culture. The city
  represents the largest single market for premium Pilates equipment in India.`
}

SAMPLE FAQs for Mumbai (write city-specific equivalents for all):
[
  { question: "Do you deliver Pilates equipment to Mumbai?",
    answer: "Yes, we deliver all 11 equipment models across Greater Mumbai including South Mumbai, Bandra, Andheri, Powai, Thane, Navi Mumbai and surrounding areas. Standard delivery is 10–14 business days from order. Delivery is fully insured." },
  { question: "What is the price of a Pilates reformer in Mumbai?",
    answer: "Our reformers range from ₹85,000 (foldable model) to ₹1,75,000 (reformer with tower). We offer competitive bulk pricing for Mumbai studios ordering 3+ units. Contact us for a customised Mumbai studio quote." },
  { question: "Do you offer installation in Mumbai?",
    answer: "Yes, for bulk orders above 3 units in Mumbai, we can arrange professional assembly support. For individual orders, detailed assembly guides are provided and our team is available for remote video call assistance." },
  { question: "What Pilates equipment do Mumbai studios typically buy?",
    answer: "Most Mumbai boutique studios start with 4–6 Maple Reformers (M-01) for group classes. Physio clinics often add the Cadillac (M-05) or Aluminium Reformer with Tower (M-03). Contact us for a free studio setup consultation." },
  { question: "Can I visit a showroom to see the equipment before buying in Mumbai?",
    answer: "We do not have a Mumbai showroom, but we offer virtual product demos via video call and can send material samples. For large orders above ₹5L, we can arrange an in-person consultation in Mumbai on request." }
]

═══════════════════════════════════════════════════════════════════
TASK 3.2 — CREATE components/LocationPageTemplate.tsx
═══════════════════════════════════════════════════════════════════

Create a shared React component used by all 25 location pages.
It accepts LocationData as props and renders a full SEO-optimised page.

Page sections (in this exact order):
1. HERO: H1 tag (from seo.h1) + location badge (city, state, studio count)
   + intro text (from content.introText) + "Get a Quote" WhatsApp CTA button
   
2. TRUST BAR: 4 stats in a row:
   - "[studioCount]+ studios served nearby"
   - "Pan-India delivery — [7-14] days"
   - "3-year frame warranty"
   - "Direct manufacturer pricing"

3. WHY CHOOSE US: H2 (from seo.h2s[0]) + content.whyChooseUs text + 3 bullet
   points highlighting: material quality, pricing advantage, support

4. PRODUCTS GRID: H2 "Pilates Equipment Available for [city] Delivery"
   Show all 11 products in a grid with name, model number, key feature,
   and a "Enquire for [city] Delivery" CTA button per product.
   Link each product to its /products/[slug] page.

5. DELIVERY COVERAGE: H2 (from seo.h2s[3]) + content.deliveryInfo
   + a list of specific areas/suburbs from nearbyAreas array

6. LOCAL MARKET CONTEXT: H2 "The [city] Pilates Market"
   + content.localContext text

7. FAQ SECTION: H2 "Frequently Asked Questions — Pilates Equipment in [city]"
   + 5 Q&A pairs from faqs array (using <details><summary> or accordion)
   + FAQSchema injected with these 5 questions

8. CTA BLOCK: H2 "Ready to Equip Your [city] Studio?"
   + WhatsApp link + phone + email + "Download Catalogue" button

SCHEMA to inject in this component:
- FAQSchema (city-specific 5 questions)
- BreadcrumbSchema (Home > city page)
- LocalBusiness with overridden areaServed for this specific city

═══════════════════════════════════════════════════════════════════
TASK 3.3 — GENERATE ALL 15 CITY PAGE FILES
═══════════════════════════════════════════════════════════════════

For each city slug, create: app/pilates-equipment-[slug]/page.tsx

Cities to create (in priority order):
1. mumbai → app/pilates-equipment-mumbai/page.tsx
2. delhi → app/pilates-equipment-delhi/page.tsx
3. bangalore → app/pilates-equipment-bangalore/page.tsx
4. pune → app/pilates-equipment-pune/page.tsx
5. ahmedabad → app/pilates-equipment-ahmedabad/page.tsx
6. hyderabad → app/pilates-equipment-hyderabad/page.tsx
7. chennai → app/pilates-equipment-chennai/page.tsx
8. kolkata → app/pilates-equipment-kolkata/page.tsx
9. jaipur → app/pilates-equipment-jaipur/page.tsx
10. gurgaon → app/pilates-equipment-gurgaon/page.tsx
11. rishikesh → app/pilates-equipment-rishikesh/page.tsx
12. chandigarh → app/pilates-equipment-chandigarh/page.tsx
13. surat → app/pilates-equipment-surat/page.tsx
14. noida → app/pilates-equipment-noida/page.tsx
15. navi-mumbai-thane → app/pilates-equipment-navi-mumbai-thane/page.tsx

Each page.tsx follows this exact pattern:

import { LOCATIONS } from '@/lib/locations'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import { Metadata } from 'next'

const data = LOCATIONS['mumbai']  // replace slug per page

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  keywords: data.seo.keywords,
  alternates: {
    canonical: `https://mahadeventerprisesindia.com${data.url}`
  },
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    url: `https://mahadeventerprisesindia.com${data.url}`,
    locale: 'en_IN',
    type: 'website'
  }
}

export default function MumbaiPage() {
  return <LocationPageTemplate {...data} />
}

═══════════════════════════════════════════════════════════════════
TASK 3.4 — GENERATE ALL 10 STATE PAGE FILES
═══════════════════════════════════════════════════════════════════

Same pattern as city pages but type === 'state'.

States to create:
1. app/pilates-equipment-maharashtra/page.tsx
2. app/pilates-equipment-karnataka/page.tsx
3. app/pilates-equipment-delhi-ncr/page.tsx
4. app/pilates-equipment-gujarat/page.tsx
5. app/pilates-equipment-tamil-nadu/page.tsx
6. app/pilates-equipment-telangana/page.tsx
7. app/pilates-equipment-uttarakhand/page.tsx
8. app/pilates-equipment-west-bengal/page.tsx
9. app/pilates-equipment-rajasthan/page.tsx
10. app/pilates-equipment-punjab-haryana/page.tsx

State pages additionally link to all city pages within that state.
Maharashtra page → links to Mumbai, Pune, Thane/Navi Mumbai pages.
Gujarat page → links to Ahmedabad, Surat pages.

═══════════════════════════════════════════════════════════════════
TASK 3.5 — CREATE app/locations/page.tsx (INDEX)
═══════════════════════════════════════════════════════════════════

Create an "All Locations" index page that:
- Lists all 15 cities in a grid with name, state, demand level, link
- Lists all 10 states in a grid with name, city count, link
- Has its own metadata: "Pilates Equipment Delivery Across India | All Cities & States | Mahadev Enterprises"
- Links to all 25 location pages

═══════════════════════════════════════════════════════════════════
TASK 3.6 — INTERNAL LINKING UPDATES
═══════════════════════════════════════════════════════════════════

After creating all location pages, update these existing pages:

1. Homepage footer: Add "We deliver across India" section with links to
   6 Tier-1 city pages (Mumbai, Delhi, Bengaluru, Pune, Ahmedabad, Hyderabad)
   and a "View all locations →" link to /locations

2. Each product page: Add below the main content:
   "Available for delivery across India — Mumbai · Delhi · Bengaluru · Pune
   · Ahmedabad · Hyderabad · [View all cities]"
   Link each city name to its location page.

3. Contact page: Add a grid of served cities with links to location pages.

4. Update sitemap.ts: Add all 26 new URLs (15 cities + 10 states + 1 index)
   with priority 0.8 and changeFreq 'monthly'.

═══════════════════════════════════════════════════════════════════
PHASE 3 ANTI-HALLUCINATION RULES
═══════════════════════════════════════════════════════════════════

1. Use EXACT titles, descriptions, H1s from the strategy document.
   Do not paraphrase or rewrite these SEO fields.

2. UNIQUE CONTENT: Run a self-check — read the introText for Mumbai, then
   Delhi, then Bengaluru. Each must mention different local districts,
   different demand drivers, different market characteristics.

3. STUDIO COUNTS: Use only the counts from the strategy document:
   Mumbai 47, Bengaluru 59, Delhi 38, Pune 30, Ahmedabad 22,
   Hyderabad 28, Chennai 25, Kolkata 20, Jaipur 15, Gurgaon 22,
   Rishikesh 18, Chandigarh 14, Surat 18, Noida 16, Thane 14.

4. PRICES: Never state a single exact price. Always use ranges:
   "₹85,000 to ₹1,75,000 depending on model."

5. ORPHAN PREVENTION: Every new page must be linked FROM at least
   two existing pages before the commit. Check the locations index
   page and homepage footer both link to each new city page.

═══════════════════════════════════════════════════════════════════
PHASE 3 VALIDATION CHECKLIST
═══════════════════════════════════════════════════════════════════

□ 15 city page files created in correct App Router directories
□ 10 state page files created
□ /app/locations/page.tsx created with links to all 25 pages
□ lib/locations.ts has all 25 location records
□ No two city pages share identical sentences in content blocks
□ Each page has unique H1, 4 H2s, 800+ words of content
□ Each page has 5 unique city-specific FAQs
□ FAQSchema injected on every location page
□ BreadcrumbSchema injected on every location page
□ All 26 new URLs added to sitemap.ts
□ Homepage footer links to 6 city pages
□ Product pages link to 6 city pages each
□ npx tsc --noEmit → zero errors
□ npx next build → zero errors

COMMIT MESSAGE: "feat/phase-3: 25 location pages — 15 cities + 10 states
+ locations index + internal linking system"
═══════════════════════════════════════════════════════════════════
```

---

## PHASE 4 — OFF-PAGE & INDEXING (Manual + Agent)

> **Duration:** 1 week | **Who:** You (manual) + agent for code | **Run parallel with Phase 3**

### Step-by-step manual actions

#### 4.1 Google Search Console Setup
1. Go to **search.google.com/search-console/welcome**
2. Click "Add property" → Enter `https://mahadeventerprisesindia.com`
3. Choose "HTML tag" verification → copy the meta content code
4. Add to `app/layout.tsx`: `verification: { google: 'YOUR_CODE_HERE' }`
5. Deploy → click "Verify" in Search Console
6. Go to Sitemaps → Enter `sitemap.xml` → Submit
7. URL Inspection → Request indexing for:
   - Day 1: `/`, `/products`, `/products/pilates-reformer`, `/products/the-cadillac`, `/products/reformer-with-tower`, `/products/aluminium-reformer-with-tower`, `/products/foldable-reformer`, `/products/3-in-1-caformer`
   - Day 2: `/products/ladder-barrel`, `/products/wunda-chair`, `/products/aluminium-wunda-chair`, `/products/aluminium-ladder-barrel`, `/products/spine-corrector`
   - Day 3: `/journal/pilates-equipment-price-list-india-2026`, `/journal/how-to-set-up-a-pilates-studio-in-india`, `/journal/maple-vs-aluminium-pilates-reformer`
   - Day 4: Remaining journal articles
   - Day 5+: All location pages as they go live

#### 4.2 Bing Webmaster Tools
1. Go to **bing.com/webmasters**
2. Sign in with Microsoft account
3. Add site: `https://mahadeventerprisesindia.com`
4. Import from Google Search Console (easiest method)
5. Submit sitemap: `https://mahadeventerprisesindia.com/sitemap.xml`

**Why:** Bing powers Perplexity, DuckDuckGo, and Microsoft Copilot AI answers.

#### 4.3 Google Business Profile
1. Go to **business.google.com** → Create profile
2. Business name: `Mahadev Enterprises — Pilates Equipment`
3. Category: `Exercise Equipment Store` (primary)
4. Additional category: `Sports Equipment Manufacturer`
5. Address: Rishikesh, Uttarakhand 249201
6. Phone: +91 9012112527
7. Website: https://mahadeventerprisesindia.com
8. Verify via phone call or postcard
9. **After verification:**
   - Add all 11 products with photos and descriptions
   - Add 30+ product and studio photos
   - Set service area: all 15 target cities
   - Write 750-char business description with keywords
   - Add business hours: Mon–Sat 9 AM–6 PM
   - Post first update: "New product catalogue available"

#### 4.4 IndiaMart Premium Listing
1. Go to **seller.indiamart.com** → Register as seller
2. Business category: `Pilates Equipment`, `Exercise Equipment`, `Physiotherapy Equipment`
3. Add all 11 products with:
   - Full specs (dimensions, weight, material)
   - Price ranges (never exact prices — use "Get Quote")
   - Minimum order quantity: 1 unit
   - High-quality product images (use website images)
4. Set response time badge target: under 1 hour
5. Consider IndiaMart Premium (~₹25,000/year) for top placement
6. Also list on **TradeIndia.com** and **Justdial.com** (free)

#### 4.5 Schema Validation
After Phase 2 is deployed, validate all schema:
1. **Google Rich Results Test:** https://search.google.com/test/rich-results
   - Test: Homepage, M-01 product page, price list article, studio setup article
2. **Schema.org Validator:** https://validator.schema.org
   - Paste each schema JSON to confirm validity

---

## PHASE 5 — SOCIAL MEDIA SETUP (Manual)

> **Duration:** 1 week | **Who:** You (manual) | **Run parallel with Phase 3**

### 5.1 Instagram Optimisation (Account exists)
Update @mahadev_enterprises_india profile:

| Field | Value |
|-------|-------|
| Name | Mahadev Enterprises \| Pilates Equipment India |
| Bio line 1 | Premium Pilates Equipment Manufacturer |
| Bio line 2 | Studio-grade reformers \| Made in Rishikesh |
| Bio line 3 | Pan-India delivery \| DM for studio quotes 👇 |
| Link in bio | https://mahadeventerprisesindia.com |
| Category | Exercise Equipment Store |
| Contact button | WhatsApp: +91 9012112527 |

**Create 5 Highlights:**
- Products (all 11 models)
- Studio Setups (before/after)
- Reviews (client testimonials)
- Delivery (packaging, dispatch process)
- About Us (Rishikesh, team, factory)

### 5.2 LinkedIn Company Page (Create new)
1. Go to linkedin.com/company/setup/new
2. Name: `Mahadev Enterprises`
3. Tagline: `Premium Pilates Equipment Manufacturer | Rishikesh, India`
4. Industry: `Wellness & Fitness Services`
5. Company size: `2–10 employees`
6. Website: https://mahadeventerprisesindia.com
7. Logo: upload company logo
8. Cover image: best product/studio photo
9. About section (2000 chars): Full brand story + product range + target buyers
10. Hashtags to follow: #PilatesIndia #WellnessIndia #FitnessEquipment #PhysiotherapyIndia

**First 5 LinkedIn posts:**
1. Company launch announcement with product range
2. "Why Indian studios are choosing locally-manufactured Pilates equipment"
3. M-01 Maple Reformer product spotlight with full specs
4. "Studio setup cost guide India 2026" (link to journal article)
5. M-05 Cadillac rehabilitation use cases for physio clinics

### 5.3 YouTube Channel (Create new)
1. Create channel: `Mahadev Enterprises — Pilates Equipment India`
2. Channel description: Full brand story + product range
3. Upload schedule: 1 video per week for first 4 weeks

**First 4 videos to create:**
1. **M-01 Full Product Demo** (5–7 min): Unboxing, assembly, exercises, specs comparison
2. **Maple vs Aluminium Pilates Reformer** (4–5 min): Side-by-side comparison, India climate factors
3. **Pilates Studio Setup Time-lapse** (3 min): Equipment setup in a real studio space
4. **How to Choose a Pilates Reformer** (5 min): 7 criteria, buyer guide

**YouTube SEO for each video:**
- Title: exact match to high-search queries
- Description: 500+ words with product links
- Tags: 15 relevant tags
- Embed each video on the matching website page

### 5.4 Weekly Social Media Schedule
| Day | Platform | Content Type |
|-----|----------|-------------|
| Monday | Instagram | Product reel (60s) |
| Tuesday | LinkedIn | Industry insight or product spotlight |
| Wednesday | Instagram | Educational carousel (5–8 slides) |
| Thursday | LinkedIn | B2B case study or testimonial |
| Friday | Instagram | Behind-the-scenes story / factory content |
| Saturday | Instagram | Testimonial card or quote |
| Sunday | WhatsApp Status | Product highlight or new article |

---

## PHASE 6 — CONTENT EXPANSION (Ongoing, Month 2+)

> **Duration:** Ongoing | **Who:** Claude Code agent | **1–2 articles per month**

### 🤖 PHASE 6 AGENT PROMPT

```
═══════════════════════════════════════════════════════════════════
AGENT IDENTITY — PHASE 6: ONGOING CONTENT EXPANSION
═══════════════════════════════════════════════════════════════════

You are a Senior SEO Content Strategist for Mahadev Enterprises.
You write authoritative, E-E-A-T compliant content for the journal section.

Repository: github.com/Exoticaditya/mahadev-enterprises
Journal path: app/(root)/journal/[slug]/

Each article you write must:
1. Start with a "Quick Answer" box (50-60 words directly answering the title)
2. Include a Table of Contents linking to all H2 sections
3. Have HTML <table> tags for any comparative data
4. Have 6–10 FAQs at the bottom with FAQSchema injected
5. Include ArticleSchema with correct datePublished
6. Internally link to 3 product pages and 2 location pages
7. End with a strong CTA linking to /contact

E-E-A-T signals to include in every article:
- Experience: "Based on supplying [X]+ studios across India..."
- Expertise: Specific technical data (spring tension, wood species, material specs)
- Authority: "Mahadev Enterprises, Rishikesh" — consistent brand attribution
- Trust: Contact details, WhatsApp link, response time promise

Anti-hallucination rules:
- Never state exact single prices — always use ranges
- Never cite statistics not in the strategy document
- Never name competing Indian brands directly
- Never claim medical benefits — use "supports rehabilitation"
- Set datePublished to today's date

Next articles to write (in priority order):
1. "Pilates Equipment for Hotels and Resorts India — Buyer's Guide" 
   (keywords: pilates equipment hotel India, wellness suite pilates)
2. "Corporate Wellness Pilates Equipment India — Office Setup Guide"
   (keywords: corporate wellness pilates India, office gym pilates equipment)
3. "Pilates Equipment Maintenance Guide India — Complete Care Manual"
   (keywords: pilates equipment maintenance India, reformer care guide)
4. "Export Pilates Equipment from India — International Buyer's Guide"
   (keywords: export pilates equipment India, buy pilates India export)
═══════════════════════════════════════════════════════════════════
```

---

## PHASE 7 — FINAL AUDIT

> **Duration:** 1 day | **Who:** Claude Code agent | **Run after P1–P3 complete**

### 🤖 PHASE 7 AGENT PROMPT

```
═══════════════════════════════════════════════════════════════════
AGENT IDENTITY — PHASE 7: FINAL SEO AUDIT
═══════════════════════════════════════════════════════════════════

You are a Senior Technical SEO Auditor for Mahadev Enterprises.
Phases 1–3 are complete. Run a comprehensive automated audit and
produce a final report.

Repository: github.com/Exoticaditya/mahadev-enterprises

═══════════════════════════════════════════════════════════════════
TASK 7.1 — CREATE scripts/seo-audit.ts
═══════════════════════════════════════════════════════════════════

Create an automated audit script that checks every page for:

interface PageAuditResult {
  url: string
  passed: string[]
  failed: string[]
  warnings: string[]
}

Checks to run on every page:
□ Canonical URL matches page URL exactly
□ Title tag: unique, 50–65 characters
□ Title tag: no double "| Mahadev Enterprises"
□ Meta description: unique, 140–155 characters
□ H1 tag: exactly one per page
□ H2 tags: minimum 2 per page
□ Word count: minimum 800 for product/location, 1500 for journal
□ Images: every <Image> has non-empty alt attribute
□ JSON-LD schema: valid and parseable (LocalBusiness, Product, FAQ, Article)
□ Internal links: minimum 3 links to other pages
□ FAQ section: present on product and location pages
□ No duplicate titles across pages
□ datePublished: not all same date for journal articles
□ Keywords meta: unique per journal article
□ AI crawler bots: allowed in robots.txt

Run the audit and save to: /reports/final-seo-audit.json

═══════════════════════════════════════════════════════════════════
TASK 7.2 — FIX ALL AUDIT FAILURES
═══════════════════════════════════════════════════════════════════

Run the audit script. Fix every item in the "failed" array.
Re-run until zero failures remain.
Document all warnings in a separate warnings.md file.

═══════════════════════════════════════════════════════════════════
TASK 7.3 — GENERATE /reports/final-delivery-report.md
═══════════════════════════════════════════════════════════════════

Create a final delivery report with:
1. Total pages created (by type)
2. Schema types implemented (checklist)
3. Location pages live (list)
4. Total word count across all pages
5. Internal link count (inbound per page)
6. Sitemap URL count
7. Audit results summary
8. 12-month SEO projection
9. Monthly maintenance checklist

COMMIT MESSAGE: "audit/phase-7: final SEO audit — zero failures, full report"
═══════════════════════════════════════════════════════════════════
```

---

## MASTER EXECUTION CHECKLIST

Copy this and tick off as you complete each item:

### Phase 1 — Critical Fixes
- [ ] Journal title deduplication fixed
- [ ] Unique keywords meta on all 13 articles
- [ ] Unique twitter:description per page
- [ ] robots.txt allows all AI crawlers
- [ ] sitemap.ts has 37+ URLs
- [ ] Google verification meta added
- [ ] public/llms.txt created
- [ ] Article publish dates staggered

### Phase 2 — Schema Library
- [ ] LocalBusinessSchema on homepage
- [ ] ProductSchema on all 11 products
- [ ] FAQSchema on homepage (8 questions)
- [ ] FAQSchema on all 11 products (8 questions each)
- [ ] ArticleSchema on all 13 journal articles
- [ ] HowToSchema on studio setup article
- [ ] BreadcrumbSchema on all pages
- [ ] OrganizationSchema on homepage + about
- [ ] Rich Results Test passed for all schema types

### Phase 3 — Location Pages
- [ ] lib/locations.ts created (25 records)
- [ ] LocationPageTemplate.tsx created
- [ ] All 15 city pages created
- [ ] All 10 state pages created
- [ ] /locations index page created
- [ ] Internal linking updated (homepage + products)
- [ ] All 26 URLs added to sitemap

### Phase 4 — Off-Page & Indexing
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google Search Console
- [ ] Manual indexing requested for all key pages
- [ ] Bing Webmaster Tools set up
- [ ] Google Business Profile created and verified
- [ ] Products added to GBP (all 11)
- [ ] IndiaMart listing created
- [ ] TradeIndia listing created
- [ ] Schema validated with Rich Results Test

### Phase 5 — Social Media
- [ ] Instagram bio updated
- [ ] Instagram Highlights created (5)
- [ ] LinkedIn Company Page created
- [ ] LinkedIn first 5 posts published
- [ ] YouTube channel created
- [ ] First 2 product videos uploaded
- [ ] WhatsApp Business broadcast lists set up

### Phase 6 — Ongoing
- [ ] 1 new journal article published (Month 2)
- [ ] 1 new journal article published (Month 3)
- [ ] GBP posts: 2–3 per week
- [ ] Google review requests sent monthly
- [ ] Monthly Search Console ranking report

### Phase 7 — Final Audit
- [ ] seo-audit.ts script created and run
- [ ] Zero failures in audit report
- [ ] final-delivery-report.md committed

---

## KPI TARGETS — 12-MONTH ROADMAP

| Metric | Month 1 | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|----------|
| Organic visitors/month | 50–100 | 200–400 | 600–1,000 | 1,500–3,000 |
| "Pilates equipment India" rank | Not ranked | Page 4–5 | Page 2–3 | Page 1 |
| City page rankings | Not ranked | Page 3–4 | Page 1–2 | Position 1–3 |
| Google Business Profile views | 50–100 | 300–500 | 800–1,200 | 2,000–3,500 |
| GBP calls/month | 5–10 | 20–30 | 50–70 | 100–150 |
| Google reviews | 0–5 | 15–25 | 40–60 | 80–120 |
| Instagram followers | 500 | 2,000 | 5,000 | 12,000+ |
| Instagram enquiries/month | 5–10 | 20–30 | 40–60 | 80–120 |
| LinkedIn followers | 0 | 200 | 500 | 1,500+ |
| Total monthly leads | 10–20 | 30–50 | 70–100 | 150–250 |
| Revenue from digital | ₹5–10L | ₹15–25L | ₹35–50L | ₹80–120L |
| AI citations (ChatGPT/Gemini) | 0 | 2–5 | 10–20 | 30–50 |

---

*Document: Mahadev_Implementation_Plan.md*  
*Version: 2.0 — Post-Migration Audit*  
*Created: June 2026*  
*Repository: github.com/Exoticaditya/mahadev-enterprises*  
*Site: https://mahadeventerprisesindia.com*  
*Contact: indiamahadeventerprises@gmail.com | +91 9012112527*
