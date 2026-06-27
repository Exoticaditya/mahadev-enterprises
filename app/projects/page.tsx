import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Projects | Pilates Studio Installations India",
  description: "View our Pilates equipment installations across India. Studio setups, resort wellness spaces & rehabilitation centres equipped by Mahadev Enterprises.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Projects", url: `${site.url}/projects` },
        ]}
      />
      <PageShell
      eyebrow="Projects"
      title="Our Featured Project Collaborations"
      description="Explore a selection of our premium custom installations for leading boutique Pilates studios, luxury wellness resorts, and holistic retreat centers."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }]}
    >
      {/* 1. Case Studies Grid */}
      <section className="relative py-14 md:py-20">
        <div className="glow-orb left-[-5%] top-[10%] h-[350px] w-[350px] bg-brand-sage/5" />
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            [
              "CoreBalance Studio, Mumbai",
              "A full studio rollout featuring custom maple reformers and spinal alignment apparatus, optimized for high-frequency daily classes.",
              ["Maple Reformers (M-01)", "Ladder Barrels (M-07)", "Wunda Chairs (M-08)", "Reformer Springs"]
            ],
            [
              "Ananda Heritage Resort, Rishikesh",
              "Bespoke manufacturing of custom-branded studio apparatus and organic yoga accessories, tailored for luxury resort retreat programs.",
              ["Reformer with Tower (M-02)", "Spine Correctors (M-11)", "Props Kits", "Custom Upholstery"]
            ],
            [
              "Rostova Design Group, Dubai",
              "End-to-end supply of aerospace-grade aluminium reformer platforms and overhead trapeze tables for a luxury residential penthouse gym project.",
              ["Aluminium Reformer (M-03)", "The Cadillac (M-05)", "3-In-1 Caformer (M-06)", "Silent Pulleys"]
            ],
          ].map(([title, copy, tags]) => (
            <div key={title as string} className="luxury-card p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">Case study</span>
                <h3 className="text-2xl font-serif text-foreground leading-tight">{title as string}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{copyName(copy)}</p>
                
                <div className="space-y-2 border-t border-border/30 pt-4">
                  <p className="text-[10px] uppercase tracking-wider text-brand-brass/75 font-semibold">Equipment Supplied:</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(tags as string[]).map((tag) => (
                      <span key={tag} className="rounded-full bg-muted/70 px-2.5 py-0.5 text-[10px] text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Custom Project CTA Banner */}
      <section className="relative py-16 md:py-24 bg-card/25 border-t border-border/40 backdrop-blur-sm">
        <div className="glow-orb right-[-10%] bottom-[10%] h-[400px] w-[400px] bg-brand-brass/5" />
        <div className="container max-w-4xl text-center space-y-6">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">Custom Fit-Outs</span>
          <h2 className="text-3xl font-serif md:text-5xl text-foreground">Planning a commercial wellness space?</h2>
          <p className="text-sm leading-7 text-muted-foreground md:text-base max-w-2xl mx-auto">
            Our Rishikesh design consultants work directly with studio owners, architects, and hospitality directors to specify apparatus sizes, arrange spatial layouts, and manufacture custom-branded upholstery packages.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact?subject=Commercial Project Consultation">
                Request Project Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
    </>
  );
}

// Helper to cast unknown type to string cleanly
function copyName(val: unknown): string {
  return val as string;
}