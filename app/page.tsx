import { Hero } from "@/components/sections/hero";
import { BrandsStrip } from "@/components/sections/brands-strip";
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