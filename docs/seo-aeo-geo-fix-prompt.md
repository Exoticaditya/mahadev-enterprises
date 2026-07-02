# AI Agent Prompt: Technical SEO, AEO & GEO Audit + Fix
**Target site:** https://mahadeventerprisesindia.com/
**Stack:** Next.js (confirm in codebase)

Paste everything below into your AI coding agent (Claude Code, Cursor, etc.) with repo access.

---

## ROLE

You are a senior technical SEO engineer working directly in this Next.js codebase. Your job is to audit and fix every issue below, verify each fix works in a production build (not just dev mode), and produce a written summary of every change made, every file touched, and every remaining manual action the human needs to take (e.g., actions inside Google Search Console that can't be done from code).

Do not guess at fixes. If something requires information you don't have (API keys, GSC access, business NAP details, image assets), stop and list exactly what you need instead of inventing placeholder values.

---

## TASK 1 — Google Search Console Verification (Critical, blocking indexing diagnosis)

1. Search the codebase for any Google Search Console verification meta tag, currently containing a placeholder like `TODO: Add Google verification code from Search Console`.
2. Locate the file where site metadata is defined (in Next.js App Router this is typically `app/layout.tsx` inside the `metadata` export, under `verification.google`).
3. Do NOT invent a verification code. Output clear instructions for the human to:
   - Log into Google Search Console → Settings → Ownership Verification
   - Retrieve the real meta tag verification code (or note if verification is already done via DNS/HTML file/Google Analytics — in which case this meta tag should be removed entirely, not left as a broken placeholder)
4. Add a `{{GSC_VERIFICATION_CODE}}` placeholder variable in the code (env variable, e.g. `NEXT_PUBLIC_GSC_VERIFICATION`) so the human can drop the real code in without touching code again.
5. Confirm there is only ONE verification method active (having a broken meta tag AND a valid DNS record can sometimes cause confusion — flag this if found).

## TASK 2 — Favicon & App Icons (Confirmed broken — no icon tags found in `<head>`)

1. Check for the existence of `favicon.ico`, `icon.png`, or `icon.svg` in `/app` (Next.js 13+ App Router auto-detects these) or `/public`.
2. If missing, generate/request a square 512x512 source logo from the human if not already in `/public`.
3. Implement the full modern icon set:
   - `/app/favicon.ico` (or `/public/favicon.ico`)
   - `/app/icon.png` (32x32, 16x16 variants OR let Next.js auto-generate from one source)
   - `apple-icon.png` (180x180) for iOS home screen
   - `site.webmanifest` with proper `name`, `short_name`, `icons` array, `theme_color`, `background_color`
4. Confirm Next.js is correctly auto-injecting the `<link rel="icon">`, `<link rel="apple-touch-icon">`, and `<link rel="manifest">` tags — verify by building the app (`next build && next start`) and inspecting the rendered `<head>` HTML directly, not just dev mode.
5. Clear any CDN/edge cache after deploy (note this as a manual step if using Vercel/Cloudflare) and confirm `https://mahadeventerprisesindia.com/favicon.ico` returns a 200 with correct image content-type, not a 404.

## TASK 3 — robots.txt & sitemap.xml

1. Locate or create `robots.txt` (via `/app/robots.ts` in Next.js App Router or static `/public/robots.txt`).
2. Ensure it contains:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://mahadeventerprisesindia.com/sitemap.xml
   ```
3. Confirm no unintended `Disallow` rules are blocking product, journal, or location pages.
4. Locate or create `sitemap.xml` (via `/app/sitemap.ts` dynamic generation is preferred so it auto-updates as pages are added). It must include EVERY indexable URL: homepage, all product pages, all journal/blog posts, all location/city pages, projects page, about, contact.
5. Ensure each sitemap entry has accurate `lastModified` dates pulled from actual content data, not hardcoded.
6. Output the final sitemap URL and a reminder for the human to manually submit it in GSC → Sitemaps if not already done.

## TASK 4 — Structured Data (Schema.org) for AEO/GEO

Implement JSON-LD structured data using Next.js `<script type="application/ld+json">` in the relevant layout/page files:

1. **Organization schema** (global, in root layout) — name, logo, url, sameAs (social profiles), contactPoint.
2. **LocalBusiness / ManufacturingBusiness schema** (homepage) — name, address, geo coordinates for Rishikesh, telephone, priceRange, areaServed (list the cities already targeted in location pages).
3. **Product schema** on every product page — name, image, description, sku/model number, brand, offers (price if available, priceCurrency, availability), aggregateRating/review if real reviews exist (never fabricate ratings).
4. **FAQPage schema** on every page containing an FAQ block — question/answer pairs must exactly match the visible on-page text (Google penalizes mismatched schema).
5. **BreadcrumbList schema** on all inner pages (products, journal, locations) reflecting the actual navigation hierarchy.
6. **Article schema** on Journal/blog posts — headline, datePublished, dateModified, author, image.
7. After implementation, validate every page type using Google's Rich Results Test and Schema.org Validator (list this as a manual verification step with the URLs to test).

## TASK 5 — AI Discovery / AEO / GEO Optimization

1. Audit the existing "AI Search Summary" block — ensure every major page (products, location pages, journal posts) has a similar concise, fact-dense, plain-language summary block near the top of the page (40-80 words) that directly answers "what is this, who is it for, key specs/differentiators" — written for extraction by AI answer engines (ChatGPT, Perplexity, Google AI Overviews), not just humans.
2. Ensure heading hierarchy (H1 → H2 → H3) is logical and each page has exactly one H1 containing the primary keyword.
3. Ensure FAQ answers are fully present in the initial server-rendered HTML (not hidden behind client-side-only JS accordions with no content until clicked) — AI crawlers and some search bots don't reliably execute interaction events.
4. Add an `/llms.txt` file at the site root (emerging standard some AI crawlers check) summarizing what the site/business does and linking to key pages, in plain markdown.
5. Confirm every page has a unique, descriptive `<title>` (50-60 chars) and `<meta name="description">` (140-160 chars) containing the target keyword naturally — audit for duplicates across pages.

## TASK 6 — Core Technical Health Checks

1. Run a Lighthouse/PageSpeed Insights audit (mobile + desktop) on homepage and one product page. Report Core Web Vitals scores (LCP, INP, CLS). Fix any easy wins found (unoptimized images, missing `next/image` usage, render-blocking scripts, missing `width`/`height` on images causing layout shift).
2. Confirm all images use descriptive, keyword-relevant `alt` text (not filenames or empty strings).
3. Confirm canonical tags are self-referencing and correct on every page (no cross-page canonical errors).
4. Confirm the site is fully mobile-responsive (test at 375px width minimum).
5. Confirm internal linking: every product/location/journal page should link to at least 2-3 other relevant pages on the site (helps crawl discovery and topical relevance).
6. Check for and fix any broken links (404s) or redirect chains.

## TASK 7 — Indexing Acceleration (Manual actions for the human, not code)

Output this as a checklist for the human to execute in Google Search Console after deployment:
- [ ] Verify property ownership using the real code from Task 1
- [ ] Submit sitemap.xml in GSC → Sitemaps
- [ ] Use URL Inspection tool → Request Indexing on: homepage, all product pages, top 3 location pages
- [ ] Set up/verify Google Business Profile for the Rishikesh location and link it
- [ ] Build 5-10 initial backlinks/citations (industry directories, Google Business Profile, relevant B2B directories, local Rishikesh business listings) — this materially affects trust/crawl frequency for new domains

---

## DELIVERABLE FORMAT

When done, provide:
1. A list of every file created or modified, with a one-line description of the change.
2. A list of anything you could NOT fix due to missing information/assets, with exactly what's needed from the human.
3. The manual GSC/off-site checklist from Task 7, unchecked, for the human to work through.
4. Confirmation that `next build` runs successfully with zero new errors/warnings introduced.

---

## IMPORTANT CONSTRAINTS

- Do not fabricate business data (addresses, phone numbers, ratings, reviews, prices) anywhere, including in schema markup. Use real data from the existing site content only, or leave a clearly marked placeholder for the human to fill in.
- Do not remove or break any existing working functionality while making these changes.
- Prioritize fixes in this order: Task 1 → Task 2 → Task 3 → Task 4 → Task 5 → Task 6, since indexing depends on 1-3 first.
