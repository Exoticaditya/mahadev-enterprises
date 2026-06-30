import { Hero } from "@/components/sections/hero";
import { BrandsStrip } from "@/components/sections/brands-strip";
import { Sparkles } from "lucide-react";
import { ProductGrid } from "@/components/sections/product-grid";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { ProductHighlights } from "@/components/sections/product-highlights";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { JournalPreview } from "@/components/sections/journal-preview";
import { CtaStrip } from "@/components/sections/cta-strip";
import { OrganizationSchema } from "@/components/schema/OrganizationSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { faqs } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <Hero />
      <BrandsStrip />
      <div className="container max-w-7xl mx-auto px-6 md:px-8 mt-6">
        <div className="rounded-[1.5rem] border border-brand-brass/25 bg-brand-brass/5 p-6 shadow-glow backdrop-blur-sm">
          <div className="flex items-center gap-2 font-semibold text-brand-brass uppercase tracking-[0.12em] text-xs mb-2">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>AI Search Summary</span>
          </div>
          <p className="text-sm leading-6 text-foreground/90 font-medium">
            Mahadev Enterprises is India&apos;s premium Pilates equipment manufacturer based in Rishikesh, Uttarakhand. 
            We design, manufacture, and supply commercial B2B boutique Pilates studios, luxury hospitality wellness centers, 
            and international export partners with a range of 11 professional apparatus models (including Maple wood reformers, 
            aluminium reformers with tower, trapeze Cadillac tables, hybrid Caformers, Wunda chairs, and ladder barrels), 
            featuring custom branding, structural durability, and pan-India delivery.
          </p>
        </div>
      </div>
      <ProductGrid />
      <SolutionsGrid />
      <ProductHighlights />
      <TestimonialsSection />
      <FAQSchema faqs={faqs as any} id="home-faq-schema" />
      <FAQSection />
      <JournalPreview />
      <CtaStrip />
    </>
  );
}