type AnalyticsValue = string | number | boolean | null | undefined;

type AnalyticsParams = Record<string, AnalyticsValue>;

import { hasMarketingConsent } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

function cleanParams(params: AnalyticsParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== null && value !== undefined)
  ) as Record<string, string | number | boolean>;
}

function buildEventId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `evt_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

async function sendServerSideMetaEvent(
  eventName: string,
  params: AnalyticsParams,
  options: { metaStandardEvent?: string; metaCustomEvent?: string }
) {
  if (typeof window === "undefined" || !hasMarketingConsent()) return;

  const payload = {
    eventName,
    eventId: buildEventId(),
    eventSourceUrl: window.location.href,
    params: cleanParams(params),
    metaEventName: options.metaStandardEvent || options.metaCustomEvent || eventName,
    userAgent: navigator.userAgent,
  };

  try {
    await fetch("/api/meta-conversions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    // Ignore server-side forwarding failures so client tracking still works.
  }
}

export function pushDataLayerEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !hasMarketingConsent()) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...cleanParams(params) });
}

export function trackGtagEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !hasMarketingConsent() || typeof window.gtag !== "function") return;

  window.gtag("event", eventName, cleanParams(params));
}

export function trackMetaStandardEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !hasMarketingConsent() || typeof window.fbq !== "function") return;

  window.fbq("track", eventName, cleanParams(params));
}

export function trackMetaCustomEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !hasMarketingConsent() || typeof window.fbq !== "function") return;

  window.fbq("trackCustom", eventName, cleanParams(params));
}

export function trackBusinessAction(
  eventName: string,
  params: AnalyticsParams = {},
  options: { metaStandardEvent?: string; metaCustomEvent?: string } = {}
) {
  if (typeof window === "undefined" || !hasMarketingConsent()) return;

  pushDataLayerEvent(eventName, params);
  trackGtagEvent(eventName, params);

  if (options.metaStandardEvent) {
    trackMetaStandardEvent(options.metaStandardEvent, params);
  }

  if (options.metaCustomEvent) {
    trackMetaCustomEvent(options.metaCustomEvent, params);
  }

  void sendServerSideMetaEvent(eventName, params, options);
}
