import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { LOCATIONS } from "@/lib/locations";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Locations | Pilates Studio Installations India",
  description: "Browse our Pilates equipment supply networks and custom studio installation locations across India. Insured shipping from our Rishikesh factory.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndexPage() {
  const cities = Object.values(LOCATIONS)
    .filter((loc) => loc.type === "city")
    .map((city) => ({
      href: city.url,
      name: city.displayName,
      state: city.state,
    }));

  const states = Object.values(LOCATIONS)
    .filter((loc) => loc.type === "state")
    .map((state) => ({
      href: state.url,
      name: state.displayName,
    }));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Locations", url: `${site.url}/locations` },
        ]}
      />

      <PageShell
        eyebrow="Distribution Network"
        title="Regional Supply & Installations"
        description="Mahadev Enterprises manufactures and delivers commercial-grade Pilates reformers, Cadillac tables, barrels, and chairs to boutique fitness studios, wellness resorts, and premium residences across India."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
        ]}
      >
        <section className="relative py-14 md:py-20">
          <div className="glow-orb left-[10%] top-[10%] h-[350px] w-[350px] bg-brand-brass/5" />
          <div className="container space-y-12">
            
            {/* Cities Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif md:text-3xl text-foreground border-b border-border/40 pb-3">
                Key Cities Served
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cities.map((city) => (
                  <Card key={city.href} className="hover:-translate-y-1 transition-all duration-300 bg-card/60 border-border/40 hover:border-brand-brass/50 group">
                    <CardContent className="p-5 flex flex-col justify-between h-full">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass mb-1">
                          {city.state}
                        </p>
                        <h3 className="text-lg font-serif text-foreground group-hover:text-brand-brass transition-colors">
                          {city.name}
                        </h3>
                      </div>
                      <Link
                        href={city.href}
                        className="text-xs text-muted-foreground hover:text-brand-brass font-medium underline mt-4 block"
                      >
                        Explore local solutions →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* States Section */}
            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-serif md:text-3xl text-foreground border-b border-border/40 pb-3">
                States & Union Territories
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {states.map((state) => (
                  <Card key={state.href} className="hover:-translate-y-1 transition-all duration-300 bg-card/60 border-border/40 hover:border-brand-brass/50 group">
                    <CardContent className="p-5 flex flex-col justify-between h-full">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass mb-1">
                          India
                        </p>
                        <h3 className="text-lg font-serif text-foreground group-hover:text-brand-brass transition-colors">
                          {state.name}
                        </h3>
                      </div>
                      <Link
                        href={state.href}
                        className="text-xs text-muted-foreground hover:text-brand-brass font-medium underline mt-4 block"
                      >
                        View state solutions →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </section>
      </PageShell>
    </>
  );
}
