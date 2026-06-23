import { Hero } from "@/components/sections/hero";
import { BrandsStrip } from "@/components/sections/brands-strip";
import { ProductGrid } from "@/components/sections/product-grid";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { ProductHighlights } from "@/components/sections/product-highlights";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { JournalPreview } from "@/components/sections/journal-preview";
import { CtaStrip } from "@/components/sections/cta-strip";
import { FAQSchema, LocalBusinessSchema, OrganizationSchema } from "@/components/sections/product-schema";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <Hero />
      <BrandsStrip />
      <ProductGrid />
      <SolutionsGrid />
      <ProductHighlights />
      <TestimonialsSection />
      <FAQSchema
        items={[
          { question: "Do you work with bulk and commercial orders?", answer: "Yes. The site is structured for studio, hospitality, retreat, and international buyers who require reliable commercial supply." },
          { question: "Can I request a catalogue or product list?", answer: "Yes. The catalogue download is available throughout the site and the enquiry form can be used to request a curated proposal." },
        ]}
      />
      <FAQSection />
      <JournalPreview />
      <CtaStrip />
    </>
  );
}