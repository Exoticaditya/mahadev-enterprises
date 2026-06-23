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
        <div className="prose prose-neutral max-w-3xl dark:prose-invert">
          <p>This is a placeholder legal page for the production build and will be finalized with legal review before launch.</p>
        </div>
      </section>
    </PageShell>
  );
}