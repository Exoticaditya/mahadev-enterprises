import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="Mahadev Enterprises respects enquiry privacy and handles data with care."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy-policy" }]}
    >
      <section className="container py-10 md:py-20">
        <div className="prose prose-neutral max-w-3xl dark:prose-invert space-y-8 text-foreground/80 leading-7 text-sm md:text-base">
          <div>
            <h3 className="text-xl font-serif text-foreground font-semibold">1. Information Collection</h3>
            <p className="mt-3">
              We collect information directly from you when you submit a B2B enquiry, download our product catalogue, or contact our procurement team. This information may include your name, studio name, email address, phone number, and commercial procurement requirements.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-foreground font-semibold">2. How We Use Your Data</h3>
            <p className="mt-3">
              The information you provide is used exclusively to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Process and respond to custom pricing and bulk ordering enquiries.</li>
              <li>Provide product consultation and spatial layout advice for your studio projects.</li>
              <li>Coordinate manufacturing, quality inspection, and international export logistics from our Rishikesh facilities.</li>
              <li>Send critical updates regarding product safety, shipping status, and catalogue releases.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif text-foreground font-semibold">3. Data Sharing and Protection</h3>
            <p className="mt-3">
              Mahadev Enterprises does not sell, lease, or share your commercial project details or contact information with third-party advertisers. Data is shared strictly with reliable shipping partners and export coordinators solely to fulfill logistics and customs documentation. We maintain physical and electronic security procedures to safeguard client specification sheets and contact details.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-foreground font-semibold">4. Your Rights</h3>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your commercial details at any time by contacting our procurement office at <a href="mailto:indiamahadeventerprises@gmail.com" className="text-brand-brass hover:underline">indiamahadeventerprises@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}