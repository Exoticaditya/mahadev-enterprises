import Link from "next/link";
import Image from "next/image";
import { site, products } from "@/data/site";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { localBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, Download, MapPin, CheckCircle } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export interface LocationPageTemplateProps {
  slug: string;
  type: 'city' | 'state';
  displayName: string;
  state: string;
  studioCount: number;
  demandLevel: string;
  tier: string;
  url: string;
  nearbyAreas: string[];
  seo: {
    title: string;
    description: string;
    h1: string;
    h2s: string[];
    keywords: string[];
  };
  content: {
    introText: string;
    whyChooseUs: string;
    deliveryInfo: string;
    localContext: string;
  };
  faqs: Array<{ question: string; answer: string }>;
}

export default function LocationPageTemplate({
  slug,
  type,
  displayName,
  state,
  studioCount,
  demandLevel,
  tier,
  url,
  nearbyAreas,
  seo,
  content,
  faqs,
}: LocationPageTemplateProps) {
  
  // Overridden LocalBusiness Schema for this specific location
  const localBusinessOverride = {
    ...localBusinessSchema,
    url: `https://mahadeventerprisesindia.com${url}`,
    areaServed: [displayName, ...nearbyAreas],
  };

  const formattedWhatsAppUrl = `https://wa.me/919012112527?text=Hi%20Mahadev%20Enterprises,%20I%20am%20enquiring%20about%20Pilates%20equipment%20delivery%20in%20${encodeURIComponent(displayName)}.`;

  return (
    <>
      {/* Dynamic Schema Injections */}
      <FAQSchema faqs={faqs} id={`faq-schema-${slug}`} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Locations", url: `${site.url}/locations` },
          { name: displayName, url: `${site.url}${url}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessOverride) }}
      />

      <PageShell
        eyebrow={type === 'city' ? "City Partner" : "State Partner"}
        title={seo.h1}
        description={content.introText}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: displayName, href: url },
        ]}
      >
        {/* WhatsApp CTA in Hero area */}
        <div className="container pb-10">
          <Button asChild size="lg" className="rounded-full bg-brand-brass hover:bg-brand-brass/90 text-white font-medium px-8 transition duration-300">
            <Link href={formattedWhatsAppUrl} target="_blank" rel="noopener noreferrer">
              Get a Quote for {displayName} Delivery
            </Link>
          </Button>
        </div>

        {/* 2. TRUST BAR: 4 stats in a row */}
        <section className="relative py-10 bg-card/20 border-y border-border/30 backdrop-blur-sm">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <p className="text-3xl font-serif text-brand-brass font-bold">{studioCount}+</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Studios Served Nearby</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-serif text-brand-brass font-bold">{type === 'city' ? '7-14' : '4-10'} Days</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Insured Delivery Window</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-serif text-brand-brass font-bold">3 Years</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Structural Frame Warranty</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-serif text-brand-brass font-bold">Direct</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Manufacturer Pricing</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHY CHOOSE US */}
        <section className="relative py-20 border-b border-border/20">
          <div className="glow-orb left-[-10%] top-[10%] h-[350px] w-[350px] bg-brand-brass/5" />
          <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">
                {seo.h2s[0]}
              </span>
              <h2 className="text-3xl font-serif md:text-5xl text-foreground">
                Premium Pilates Manufacturing Meets Direct Value
              </h2>
              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                {content.whyChooseUs}
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-brand-brass shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">North American Hard Maple Wood</h4>
                    <p className="text-sm text-muted-foreground mt-1">Sustainably sourced, kiln-dried seasoned hardwood that prevents warping under continuous commercial B2B loads.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-brand-brass shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Up to 45% Price Advantage</h4>
                    <p className="text-sm text-muted-foreground mt-1">By selling direct from our Rishikesh workshop to {displayName} buyers, we eliminate middleman commissions and import duties.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-brand-brass shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Comprehensive Client Support</h4>
                    <p className="text-sm text-muted-foreground mt-1">From initial layout planning to video assembly calls, our B2B team supports your studio&apos;s operational success.</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card/40 backdrop-blur-sm border-border/60 overflow-hidden shadow-soft">
              <div className="relative aspect-[4/3] bg-secondary/20">
                <Image
                  src="/solutions/pilates-studio.webp"
                  alt={`Pilates Studio Setup in ${displayName}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
              </div>
              <CardContent className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl font-serif text-foreground">B2B Studio Setup Consultation</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  Our tapovan-based design consultants provide custom spatial mappings and branding adjustments (upholstery tones, wood finishes) to ensure your equipment fits your design schema.
                </p>
                <Button asChild className="w-full rounded-full mt-2">
                  <Link href="/contact">Request Studio Layout Call</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 4. PRODUCTS GRID: Show all 11 products with city CTAs */}
        <section className="relative py-20 md:py-28 bg-secondary/5">
          <div className="glow-orb right-[-10%] top-[15%] h-[450px] w-[450px] bg-brand-sage/5" />
          <div className="container space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">{seo.h2s[1] || "Available Models"}</span>
              <h2 className="text-3xl font-serif md:text-5xl text-foreground">
                Pilates Equipment Available for {displayName} Delivery
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Explore our full line of studio-grade wooden and metal apparatus. Every model is built to order in Rishikesh and shipped with full transit insurance.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => {
                const productWaUrl = `https://wa.me/919012112527?text=Hi%20Mahadev%20Enterprises,%20I%20am%20interested%20in%20enquiring%20about%20the%20${encodeURIComponent(product.title)}%20(Model%20${product.model})%20for%20delivery%20to%20${encodeURIComponent(displayName)}.`;
                return (
                  <div key={product.slug} className="luxury-card group flex flex-col justify-between">
                    <div>
                      <div className="relative aspect-[4/3] overflow-hidden border-b border-border/60 bg-secondary/20">
                        <Image
                          src={product.image}
                          alt={`${product.title} in ${displayName}`}
                          fill
                          className="object-cover transition duration-700 ease-out group-hover:scale-105"
                          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-wider text-brand-brass">
                            {product.model} · {product.category}
                          </p>
                          <h3 className="text-xl font-serif text-foreground leading-tight mt-1">{product.title}</h3>
                        </div>
                        <p className="text-xs leading-5 text-muted-foreground">{product.summary}</p>
                        <div className="space-y-1 text-xs text-muted-foreground/80">
                          <p>Dimensions: {product.dimensions}</p>
                          <p>Weight: {product.weight}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-0 space-y-2">
                      <Button asChild className="w-full rounded-full bg-brand-brass hover:bg-brand-brass/90 text-white font-medium transition duration-300">
                        <Link href={productWaUrl} target="_blank" rel="noopener noreferrer">
                          Enquire for {displayName} Delivery
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full rounded-full">
                        <Link href={`/products/${product.slug}`}>Product Details</Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. DELIVERY COVERAGE & AREAS */}
        <section className="relative py-20 border-t border-border/20">
          <div className="container grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">
                {seo.h2s[3] || "Logistics & Coverage"}
              </span>
              <h2 className="text-3xl font-serif md:text-5xl text-foreground">
                Insured Subregional Delivery Coverage
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                {content.deliveryInfo}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Local Distribution Hubs & Suburbs Served:</h4>
                <div className="flex flex-wrap gap-2 pt-2">
                  {nearbyAreas.map((area) => (
                    <span key={area} className="rounded-full bg-muted/80 border border-border px-3 py-1 text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-brand-brass" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. LOCAL MARKET CONTEXT */}
            <div className="space-y-6 lg:border-l lg:border-border/40 lg:pl-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">Market Insight</span>
              <h2 className="text-3xl font-serif md:text-5xl text-foreground">
                The {displayName} Pilates Ecosystem
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                {content.localContext}
              </p>
              <div className="p-6 rounded-[1.5rem] border border-border/50 bg-card/40 space-y-2">
                <h4 className="font-serif text-lg text-foreground">Market Demand Status</h4>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Local Demand Intensity:</span>
                  <span className="font-semibold text-brand-brass">{demandLevel}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-border/30 pt-2 mt-2">
                  <span className="text-muted-foreground">Nearby Studio Count:</span>
                  <span className="font-semibold text-foreground">{studioCount}+ active spaces</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ SECTION: Accordion & FAQSchema */}
        <section className="relative py-20 md:py-28 border-t border-border/20 bg-secondary/5">
          <div className="glow-orb left-[-5%] bottom-[10%] h-[350px] w-[350px] bg-brand-clay/5" />
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">Support Desk</span>
              <h2 className="text-3xl font-serif md:text-5xl text-foreground">
                Frequently Asked Questions — Pilates Equipment in {displayName}
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Clear answers regarding transport costs, custom stain options, warranties, and regional setup details for commercial B2B buyers.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full luxury-card px-6 md:px-8 bg-card/50">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={faq.question} className="border-b border-border/40 last:border-b-0">
                  <AccordionTrigger className="text-left text-base font-medium py-5 transition duration-300 hover:text-brand-brass hover:no-underline [&[data-state=open]]:text-brand-brass">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 8. CTA BLOCK */}
        <section className="relative py-20 md:py-28 border-t border-border/20 text-center">
          <div className="glow-orb right-[10%] bottom-[10%] h-[400px] w-[400px] bg-brand-brass/5" />
          <div className="container max-w-4xl space-y-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brass">Ready to Begin?</span>
            <h2 className="text-4xl font-serif md:text-6xl text-foreground">
              Ready to Equip Your {displayName} Studio?
            </h2>
            <p className="text-base leading-8 text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Get direct factory quote, request material catalog, or schedule a virtual live demo with our Tapovan-Rishikesh workshop engineers.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full bg-brand-brass hover:bg-brand-brass/90 text-white font-medium px-8 transition duration-300">
                <Link href={formattedWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link href="/contact">
                  Send Email Enquiry
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-8 text-brand-brass font-medium">
                <a href={site.catalogueHref} download>
                  <Download className="h-4 w-4 mr-2" /> Download Catalogue
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-muted-foreground divide-x divide-border/60">
              <div className="flex items-center gap-2 pl-4 first:pl-0">
                <Phone className="h-4 w-4 text-brand-brass" />
                <span>+91 90121 12527</span>
              </div>
              <div className="flex items-center gap-2 pl-4">
                <Mail className="h-4 w-4 text-brand-brass" />
                <span>indiamahadeventerprises@gmail.com</span>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
