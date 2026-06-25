import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import { site } from "@/data/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { LenisProvider } from "@/components/layout/lenis-provider";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { CartProvider } from "@/components/providers/cart-context";

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
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [
      {
        url: site.socialImage,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <ThemeProvider>
          <CartProvider>
            <LenisProvider>
              <div className="relative min-h-screen overflow-hidden text-foreground">
                {/* Global Background Video (Subtly visible behind everything on all pages) */}
                <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden select-none">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-[0.08] dark:opacity-[0.12]"
                    poster="/hero/hero-desktop.jpg"
                  >
                    <source src="/videos/hero-loop.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* Ambient Glow Orbs for Depth & Luxury Aesthetics */}
                <div className="glow-orb left-[-10%] top-[15%] h-[400px] w-[400px] bg-brand-brass/10 dark:bg-brand-brass/5" />
                <div className="glow-orb right-[-15%] top-[45%] h-[500px] w-[500px] bg-brand-sage/10 dark:bg-brand-sage/5" />
                <div className="glow-orb left-[-5%] top-[75%] h-[450px] w-[450px] bg-brand-clay/10 dark:bg-brand-clay/5" />

                <Header />
                <main>{children}</main>
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
