import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { site } from "@/data/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { LenisProvider } from "@/components/layout/lenis-provider";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { CartProvider } from "@/components/providers/cart-context";
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { PageTransition } from "@/components/layout/page-transition";
import { WebMcpProvider } from "@/components/webmcp-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pilates Equipment Manufacturer India | Mahadev Enterprises",
    template: `%s | Mahadev Enterprises`,
  },
  description:
    "India's premium Pilates equipment manufacturer in Rishikesh. Buy studio-grade maple & aluminium reformers, Cadillac tables, Wunda chairs & accessories. Pan-India delivery. Get a quote.",
  keywords: [
    "pilates equipment India",
    "pilates reformer manufacturer India",
    "buy pilates equipment online",
    "studio pilates equipment",
    "pilates equipment Rishikesh",
    "yoga studio equipment India",
    "pilates cadillac India",
    "wunda chair India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "Mahadev Enterprises",
    title: "India's Premium Pilates Equipment Manufacturer | Mahadev Enterprises",
    description:
      "Studio-grade Pilates reformers, Cadillac tables & Wunda chairs from Rishikesh. Pan-India delivery.",
    locale: "en_IN",
    images: [
      {
        url: site.socialImage,
        width: 1200,
        height: 630,
        alt: "Mahadev Enterprises — Premium Pilates Equipment Manufacturer India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Equipment Manufacturer India | Mahadev Enterprises",
    description:
      "Studio-grade Pilates reformers, Cadillac tables & Wunda chairs from Rishikesh. Pan-India delivery.",
    images: [site.socialImage],
  },
  verification: {
    google: "TODO: Add Google verification code from Search Console",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-48D8HG2V8Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-48D8HG2V8Y');
          `}
        </Script>

        <ThemeProvider>
          <CartProvider>
            <LenisProvider>
              <div className="relative min-h-screen overflow-hidden text-foreground">
                {/* Global Background Video (Subtly visible behind everything on all pages, optimized for all viewports) */}
                <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden select-none">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-[0.12] dark:opacity-[0.16]"
                    poster="/hero/hero-desktop.webp"
                  >
                    <source src="/videos/hero-loop.webm" type="video/webm" />
                    <source src="/videos/hero-loop.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* Ambient Glow Orbs for Depth & Luxury Aesthetics */}
                <div className="glow-orb left-[-10%] top-[15%] h-[400px] w-[400px] bg-brand-brass/10 dark:bg-brand-brass/5" />
                <div className="glow-orb right-[-15%] top-[45%] h-[500px] w-[500px] bg-brand-sage/10 dark:bg-brand-sage/5" />
                <div className="glow-orb left-[-5%] top-[75%] h-[450px] w-[450px] bg-brand-clay/10 dark:bg-brand-clay/5" />

                <LocalBusinessSchema />
                
                {/* VideoObject Schema for Search Engines / AI crawlers */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "VideoObject",
                      "name": "Mahadev Enterprises Pilates Reformer Loop",
                      "description": "Studio-grade Pilates reformers, Cadillacs, and alignment tools manufactured by Mahadev Enterprises in Rishikesh, India.",
                      "thumbnailUrl": "https://mahadeventerprisesindia.com/hero/hero-desktop.webp",
                      "uploadDate": "2026-07-01T00:00:00Z",
                      "contentUrl": "https://mahadeventerprisesindia.com/videos/hero-loop.mp4"
                    })
                  }}
                />

                <Header />
                <WebMcpProvider />
                <main>
                  <PageTransition>{children}</PageTransition>
                </main>
                <Footer />
                <FloatingActions />
              </div>
            </LenisProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
