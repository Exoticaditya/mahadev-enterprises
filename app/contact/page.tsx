import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Instagram } from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/sections/contact-form";
import { site } from "@/data/site";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Mahadev Enterprises | Get a Quote Today",
  description: "Contact Mahadev Enterprises for Pilates equipment enquiries. WhatsApp +91 90121 12527. Email indiamahadeventerprises@gmail.com. Pan-India delivery from Rishikesh.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: site.url },
          { name: "Contact", url: `${site.url}/contact` },
        ]}
      />
      <PageShell
      eyebrow="Contact"
      title="Get in Touch with Our Procurement Team"
      description="Contact us directly to request custom pricing, discuss volume discounts, or arrange a private consultation for your wellness studio or project."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
    >
      <section className="relative py-10 md:py-20">
        <div className="glow-orb left-[-5%] top-[15%] h-[350px] w-[350px] bg-brand-brass/5" />
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {/* Phone Card */}
            <Link
              href="tel:+919012112527"
              className="luxury-card flex items-center gap-5 p-6 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-soft text-brand-brass transition-colors duration-300 group-hover:bg-brand-brass group-hover:text-white group-hover:border-brand-brass shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">Phone Number</p>
                <p className="mt-1 text-lg font-serif text-foreground">{site.phone}</p>
              </div>
            </Link>

            {/* Email Card */}
            <Link
              href={`mailto:${site.email}`}
              className="luxury-card flex items-center gap-5 p-6 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-soft text-brand-brass transition-colors duration-300 group-hover:bg-brand-brass group-hover:text-white group-hover:border-brand-brass shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">Email Address</p>
                <p className="mt-1 text-lg font-serif text-foreground truncate">{site.email}</p>
              </div>
            </Link>

            {/* WhatsApp Card */}
            <Link
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="luxury-card flex items-center gap-5 p-6 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-soft text-brand-brass transition-colors duration-300 group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366] shrink-0">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">WhatsApp Chat</p>
                <p className="mt-1 text-lg font-serif text-foreground">Chat on WhatsApp</p>
              </div>
            </Link>

            {/* Instagram Card */}
            <Link
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="luxury-card flex items-center gap-5 p-6 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-soft text-brand-brass transition-colors duration-300 group-hover:bg-[#E1306C] group-hover:text-white group-hover:border-[#E1306C] shrink-0">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">Instagram Profile</p>
                <p className="mt-1 text-lg font-serif text-foreground truncate">@mahadev_enterprises_india</p>
              </div>
            </Link>

            {/* Delivery Locations Info */}
            <div className="luxury-card p-6 space-y-3">
              <h4 className="font-serif text-lg text-foreground">We Deliver Pan-India</h4>
              <p className="text-xs leading-5 text-muted-foreground">
                We manufacture in Rishikesh and deliver fully insured to all major locations including Mumbai, Delhi NCR, Bengaluru, Pune, Ahmedabad, Hyderabad, and <Link href="/locations" className="text-brand-brass underline font-medium">20+ other locations</Link>.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
    </>
  );
}