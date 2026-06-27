import * as fs from "fs";
import * as path from "path";

const projectRoot = path.join(__dirname, "..");

function log(msg: string, success: boolean = true) {
  const icon = success ? "✓" : "✗";
  console.log(`${icon} ${msg}`);
}

function runAudit() {
  console.log("=== STARTING AUTOMATED SEO AUDIT ===\n");
  let hasErrors = false;

  // 1. Verify sitemap.ts counts
  try {
    const sitemapContent = fs.readFileSync(
      path.join(projectRoot, "app", "sitemap.ts"),
      "utf-8"
    );
    const hasCities = sitemapContent.includes("locationCities");
    const hasStates = sitemapContent.includes("locationStates");
    if (hasCities && hasStates) {
      log("sitemap.ts: Contains locationCities and locationStates lists.");
    } else {
      log("sitemap.ts: Missing location lists.", false);
      hasErrors = true;
    }
  } catch (err) {
    log(`sitemap.ts audit failed: ${(err as Error).message}`, false);
    hasErrors = true;
  }

  // 2. Scan robots.ts crawl rules
  try {
    const robotsContent = fs.readFileSync(
      path.join(projectRoot, "app", "robots.ts"),
      "utf-8"
    );
    const allowsAI = robotsContent.includes("userAgent: \"*\"") || robotsContent.includes("userAgent: [");
    if (allowsAI) {
      log("robots.ts: Crawl rules successfully defined for user agents.");
    } else {
      log("robots.ts: Custom user agents check failed.", false);
      hasErrors = true;
    }
  } catch (err) {
    log(`robots.ts audit failed: ${(err as Error).message}`, false);
    hasErrors = true;
  }

  // 3. Verify public/llms.txt existence and structure
  try {
    const llmsPath = path.join(projectRoot, "public", "llms.txt");
    if (fs.existsSync(llmsPath)) {
      const content = fs.readFileSync(llmsPath, "utf-8");
      if (content.includes("# Mahadev Enterprises")) {
        log("public/llms.txt: Exists and contains correct header structure.");
      } else {
        log("public/llms.txt: Content header verification failed.", false);
        hasErrors = true;
      }
    } else {
      log("public/llms.txt: File does not exist.", false);
      hasErrors = true;
    }
  } catch (err) {
    log(`llms.txt audit failed: ${(err as Error).message}`, false);
    hasErrors = true;
  }

  // 4. Verify components/schema/OrganizationSchema.tsx & LocalBusinessSchema.tsx
  const schemasToCheck = [
    "LocalBusinessSchema.tsx",
    "OrganizationSchema.tsx",
    "BreadcrumbSchema.tsx",
    "FAQSchema.tsx",
    "ProductSchema.tsx",
  ];
  schemasToCheck.forEach((schema) => {
    try {
      const schemaPath = path.join(projectRoot, "components", "schema", schema);
      if (fs.existsSync(schemaPath)) {
        const content = fs.readFileSync(schemaPath, "utf-8");
        if (content.includes("application/ld+json")) {
          log(`components/schema/${schema}: Exists and renders application/ld+json schema.`);
        } else {
          log(`components/schema/${schema}: Renders but missing ld+json script tag.`, false);
          hasErrors = true;
        }
      } else {
        log(`components/schema/${schema}: File does not exist.`, false);
        hasErrors = true;
      }
    } catch (err) {
      log(`Schema ${schema} audit failed: ${(err as Error).message}`, false);
      hasErrors = true;
    }
  });

  // 5. Verify physical location page creation
  const locationKeys = [
    "mumbai", "delhi", "bangalore", "pune", "ahmedabad", "hyderabad",
    "chennai", "kolkata", "jaipur", "rishikesh", "gurgaon", "chandigarh",
    "surat", "noida", "navi-mumbai-thane", "maharashtra", "karnataka",
    "delhi-ncr", "gujarat", "tamil-nadu", "telangana", "uttarakhand",
    "west-bengal", "rajasthan", "punjab-haryana"
  ];
  let missingPagesCount = 0;
  locationKeys.forEach((key) => {
    const pagePath = path.join(projectRoot, "app", `pilates-equipment-${key}`, "page.tsx");
    if (!fs.existsSync(pagePath)) {
      missingPagesCount++;
    }
  });
  if (missingPagesCount === 0) {
    log(`Location Pages: All ${locationKeys.length} physical page files successfully created.`);
  } else {
    log(`Location Pages: ${missingPagesCount} pages are missing.`, false);
    hasErrors = true;
  }

  // 6. Verify duplicate title check in layout metadata
  try {
    const layoutContent = fs.readFileSync(
      path.join(projectRoot, "app", "layout.tsx"),
      "utf-8"
    );
    const journalContent = fs.readFileSync(
      path.join(projectRoot, "app", "journal", "[slug]", "page.tsx"),
      "utf-8"
    );
    const hasBrandSuffixInJournal = journalContent.includes("| Mahadev Enterprises") || journalContent.includes("| ${site.name}");
    if (!hasBrandSuffixInJournal) {
      log("Journal Page Title: Correctly avoids manual brand suffix to prevent double suffix.");
    } else {
      log("Journal Page Title: Contains manual brand suffix which may cause duplicates.", false);
      hasErrors = true;
    }
  } catch (err) {
    log(`Layout/Journal Title audit failed: ${(err as Error).message}`, false);
    hasErrors = true;
  }

  console.log("\n=== AUDIT COMPLETE ===");
  if (hasErrors) {
    console.log("Status: FAILED. Please review error logs above.");
    process.exit(1);
  } else {
    console.log("Status: PASSED. All SEO configuration checks passed successfully!");
    process.exit(0);
  }
}

runAudit();
