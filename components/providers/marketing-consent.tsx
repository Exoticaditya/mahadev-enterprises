"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { AnalyticsScripts } from "@/components/providers/analytics-scripts";
import { cn } from "@/lib/utils";
import {
  readMarketingConsent,
  writeMarketingConsent,
} from "@/lib/consent";

type ConsentState = "accepted" | "declined" | null;

export function MarketingConsent({ pixelId }: { pixelId: string }) {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setConsent(readMarketingConsent());
  }, []);

  useEffect(() => {
    writeMarketingConsent(consent);
  }, [consent]);

  const acceptMarketingCookies = () => {
    setConsent("accepted");
    setSettingsOpen(false);
  };

  const declineMarketingCookies = () => {
    setConsent("declined");
    setSettingsOpen(false);
  };

  const resetConsent = () => {
    setConsent(null);
    setSettingsOpen(false);
    writeMarketingConsent(null);
  };

  return (
    <>
      {consent === "accepted" ? (
        <AnalyticsScripts pixelId={pixelId} />
      ) : null}

      {consent === null ? (
        <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-4xl rounded-3xl border border-white/10 bg-brand-forest/95 px-5 py-4 text-white shadow-2xl backdrop-blur-xl md:bottom-6 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-brass">Marketing consent</p>
              <p className="max-w-2xl text-sm leading-6 text-white/80">
                We use Meta Pixel and Google analytics tools to measure campaign performance. Accept marketing cookies to load them, decline to keep analytics disabled, or open settings to review your choice later.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setSettingsOpen(true)}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Manage settings
              </button>
              <button
                type="button"
                onClick={declineMarketingCookies}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={acceptMarketingCookies}
                className="rounded-full bg-brand-brass px-4 py-2 text-sm font-semibold text-brand-forest transition hover:bg-brand-brass/90"
              >
                Accept marketing cookies
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {settingsOpen ? (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/45 p-4 md:items-center">
          <div className="w-full max-w-2xl rounded-[2rem] border border-border/60 bg-background p-6 shadow-2xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-brass">Cookie preferences</p>
                <h2 className="text-2xl font-serif text-foreground">Manage marketing consent</h2>
                <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                  Marketing cookies control Meta Pixel and analytics scripts that help us measure catalogue interest, enquiry activity, and campaign performance.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Essential cookies</p>
                  <p className="text-sm text-muted-foreground">Required for site preferences and core functionality.</p>
                </div>
                <span className="rounded-full bg-brand-brass/15 px-3 py-1 text-xs font-medium text-brand-brass">Always on</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-border/60 pt-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Marketing cookies</p>
                  <p className="text-sm text-muted-foreground">Enable Meta Pixel and analytics tracking for ads and measurement.</p>
                </div>
                <button
                  type="button"
                  onClick={consent === "accepted" ? declineMarketingCookies : acceptMarketingCookies}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    consent === "accepted"
                      ? "bg-brand-forest text-white hover:bg-brand-forest/90"
                      : "bg-brand-brass text-brand-forest hover:bg-brand-brass/90"
                  )}
                >
                  {consent === "accepted" ? "Disable" : "Enable"}
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <Link href="/privacy-policy" className="text-sm font-medium text-brand-brass hover:underline">
                Review privacy policy
              </Link>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={resetConsent}
                  className="rounded-full border border-border/70 px-4 py-2 text-sm font-medium text-foreground transition hover:border-brand-brass hover:text-brand-brass"
                >
                  Reset choice
                </button>
                <button
                  type="button"
                  onClick={declineMarketingCookies}
                  className="rounded-full border border-border/70 px-4 py-2 text-sm font-medium text-foreground transition hover:border-brand-brass hover:text-brand-brass"
                >
                  Decline all
                </button>
                <button
                  type="button"
                  onClick={acceptMarketingCookies}
                  className="rounded-full bg-brand-brass px-4 py-2 text-sm font-semibold text-brand-forest transition hover:bg-brand-brass/90"
                >
                  Save and accept
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : consent !== null ? (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="fixed bottom-4 right-4 z-50 rounded-full border border-white/15 bg-brand-forest/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-xl transition hover:border-brand-brass hover:text-brand-brass md:bottom-6 md:right-6"
        >
          Cookie settings
        </button>
      ) : null}
    </>
  );
}