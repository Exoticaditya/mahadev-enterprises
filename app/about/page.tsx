import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About Mahadev Enterprises | Pilates Equipment Manufacturer",
  description: "Mahadev Enterprises is India's premium Pilates equipment manufacturer based in Rishikesh, Uttarakhand. Studio-grade reformers, Cadillacs & wellness solutions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title="A premium Indian supplier focused on craftsmanship, design, and longevity."
      description="Mahadev Enterprises is dedicated to designing and manufacturing professional-grade Pilates reformers, yoga props, and custom wellness solutions that elevate boutique spaces."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
    >
      {/* 1. Core Brand Pillars */}
      <section className="relative py-14 md:py-20">
        <div className="glow-orb left-[-5%] top-[10%] h-[350px] w-[350px] bg-brand-brass/5" />
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            ["Vision", "To elevate global wellness spaces with high-precision Pilates and yoga apparatus that balances functional reliability and luxury design."],
            ["Commitment", "To maintain the highest standards of materials, craftsmanship, and export-ready client service for our B2B partners worldwide."],
            ["Origin", "Based in Rishikesh, India—serving premium domestic and international wellness demand with reliable logistics and custom branding."],
          ].map(([title, copy]) => (
            <div key={title} className="luxury-card p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">{title}</span>
                <p className="text-lg font-serif leading-8 text-foreground">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Craftsmanship & Materials Specification */}
      <section className="relative py-20 bg-card/25 border-y border-border/40 backdrop-blur-sm">
        <div className="glow-orb right-[-10%] top-[15%] h-[400px] w-[400px] bg-brand-sage/5" />
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Engineering Integrity"
              title="Built for commercial durability. Finished for B2B luxury."
              description="Every reformer, Cadillac, and alignment tool is manufactured utilizing high-spec raw materials selected to withstand rigorous daily studio usage while matching premium interior standards."
            />
            <div className="grid gap-4 sm:grid-cols-2 pt-4">
              <div className="border-l-2 border-brand-brass pl-4">
                <h4 className="text-3xl font-serif">100%</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Quality Inspection</p>
              </div>
              <div className="border-l-2 border-brand-brass pl-4">
                <h4 className="text-3xl font-serif">Maple & Alu</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Core Material Base</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ["Solid Maple & Rubberwood", "Hand-selected solid timbers, kiln-dried to prevent warping under load, and finished with clear protective scratch-resistant varnish."],
              ["Anodized Aerospace Aluminium", "Precision extruded aluminium runner rails constructed to sub-millimeter tolerances for a completely silent, friction-free glide."],
              ["Calibrated Piano Wire Springs", "High-tensile carbon steel springs wound and calibrated for progressive resistance curves, ensuring uniform tension and safety."],
              ["Antibacterial Leather Upholstery", "Double-stitched commercial vinyl upholstery formulated to resist sweat, sanitizers, and high daily client turnovers."]
            ].map(([title, desc]) => (
              <div key={title} className="luxury-card p-6 md:p-7 space-y-3">
                <h4 className="text-lg font-serif text-foreground leading-snug">{title}</h4>
                <p className="text-xs leading-5 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Rishikesh Heritage */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="glow-orb left-[20%] bottom-[10%] h-[450px] w-[450px] bg-brand-clay/5" />
        <div className="container max-w-4xl text-center space-y-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">Rishikesh Design Heritage</span>
          <h2 className="text-4xl font-serif md:text-5xl lg:text-6xl text-foreground">
            Where holistic focus meets industrial precision.
          </h2>
          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            Rooted in the spiritual strength and natural serenity of Rishikesh, India—the world capital of yoga—our manufacturing workshop blends mindful design with rigorous mechanical standards. We believe wellness equipment should be structurally silent and visually grounding, allowing practitioners to focus entirely on breath, strength, and posture.
          </p>
        </div>
      </section>
    </PageShell>
  );
}