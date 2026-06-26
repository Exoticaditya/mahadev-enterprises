import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { PageShell } from "@/components/page-shell";
import { ProductGrid } from "@/components/sections/product-grid";
import { ContactForm } from "@/components/sections/contact-form";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products, site } from "@/data/site";
import {
  getLocationData,
  locationCities,
  locationStates,
} from "@/lib/location-data";

export function generateStaticParams() {
  const cityParams = Object.keys(locationCities).map((city) => ({
    location: `pilates-equipment-${city}`,
  }));

  const stateParams = Object.keys(locationStates).map((state) => ({
    location: `pilates-equipment-${state}`,
  }));

  return [...cityParams, ...stateParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const data = getLocationData(location);

  if (!data) {
    return { title: "Not Found" };
  }

  const title = `Pilates Equipment ${data.name} | Studio-Grade Reformers`;
  const description = `Buy premium maple & aluminium Pilates reformers, Cadillac tables & Wunda chairs in ${data.name}. Pan-India delivery from Rishikesh. Request bulk pricing today.`;

  return {
    title,
    description,
    alternates: { canonical: `/${location}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/${location}`,
      images: [{ url: site.socialImage, width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const data = getLocationData(location);

  if (!data) {
    notFound();
  }

  const faqs = [
    {
      question: `Do you deliver studio-grade Pilates equipment to ${data.name}?`,
      answer: `Yes, Mahadev Enterprises provides insured pan-India delivery. Shipments to ${data.name} typically take ${data.deliveryDays} to arrive safely.`,
    },
    {
      question: `What materials are used in your reformers shipped to ${data.name}?`,
      answer: `Our premium reformers are crafted from imported seasoned North American Maple wood or aircraft-grade anodized aluminium. All hardware is premium stainless steel with calibrated piano-wire springs for uniform resistance.`,
    },
    {
      question: `Can I customize the upholstery color for my studio in ${data.name}?`,
      answer: `Absolutely. We offer customized premium antibacterial leather upholstery colors to align with your brand identity or interior design requirements.`,
    },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} id={`faq-schema-${location}`} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Locations", url: `${site.url}/locations` },
          { name: data.name, url: `${site.url}/${location}` },
        ]}
      />

      <PageShell
        eyebrow="Regional Partner"
        title={`Pilates Equipment & Studio Solutions in ${data.name}`}
        description={`Direct-from-manufacturer Pilates reformers, Cadillac tables, barrels, and chairs. Engineered in Rishikesh, built for commercial longevity, and delivered to ${data.name}.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: data.name, href: `/${location}` },
        ]}
      >
        {/* Local Market Context */}
        <section className="relative py-14 md:py-20 border-b border-border/20">
          <div className="glow-orb right-[-10%] top-[10%] h-[350px] w-[350px] bg-brand-brass/5" />
          <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">
                Market Analysis
              </span>
              <h2 className="text-3xl font-serif md:text-5xl text-foreground">
                Serving the Wellness Community in {data.name}
              </h2>
              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                {data.marketInsight} As a manufacturer, we bypass intermediary costs, offering premium-grade materials (imported North American maple wood, aircraft-grade anodized aluminium, and high-tensile carbon steel piano-wire springs) at competitive direct pricing.
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                Whether you are setting up a commercial boutique Pilates studio in a local wellness hub or curating a private reformer suite in your residence, our team provides consultation on spatial layouts, customization (upholstery colors, handles, wood stains), and delivery timelines.
              </p>
            </div>

            <Card className="bg-card/40 backdrop-blur-sm border-border/60">
              <CardContent className="p-6 md:p-8 space-y-6">
                <h3 className="text-xl font-serif text-foreground">
                  Regional Logistics Profile
                </h3>
                <div className="space-y-4 divide-y divide-border/30 text-sm">
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Region:</span>
                    <span className="font-medium text-foreground capitalize">
                      {data.region} India
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Logistics Window:</span>
                    <span className="font-medium text-foreground">
                      {data.deliveryDays} (Insured transit)
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Primary Focus:</span>
                    <span className="font-medium text-foreground text-right max-w-[200px]">
                      {data.industryFocus}
                    </span>
                  </div>
                  <div className="space-y-2 py-2">
                    <span className="text-muted-foreground block">
                      Local Distribution Hubs:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {data.localHubs.map((hub) => (
                        <span
                          key={hub}
                          className="rounded-full bg-muted/80 border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {hub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Products */}
        <ProductGrid />

        {/* Local FAQ & Inquiry Section */}
        <section className="relative py-20 md:py-28 border-t border-border/20 bg-secondary/10">
          <div className="glow-orb left-[-5%] bottom-[10%] h-[400px] w-[400px] bg-brand-sage/5" />
          <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">
                  Frequently Asked Questions
                </span>
                <h2 className="text-3xl font-serif md:text-5xl text-foreground">
                  Equipment Enquiries in {data.name}
                </h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="space-y-2">
                    <h4 className="text-lg font-serif text-foreground">
                      {faq.question}
                    </h4>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="enquire">
              <ContactForm />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
