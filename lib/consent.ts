export type MarketingConsentState = "accepted" | "declined" | null;

export const MARKETING_CONSENT_KEY = "mahadev_marketing_consent";

export function readMarketingConsent(): MarketingConsentState {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(MARKETING_CONSENT_KEY);
    return stored === "accepted" || stored === "declined" ? stored : null;
  } catch {
    return null;
  }
}

export function writeMarketingConsent(state: MarketingConsentState) {
  if (typeof window === "undefined") return;

  try {
    if (state === null) {
      localStorage.removeItem(MARKETING_CONSENT_KEY);
      return;
    }

    localStorage.setItem(MARKETING_CONSENT_KEY, state);
  } catch {
    // Ignore storage failures in restrictive browser modes.
  }
}

export function hasMarketingConsent() {
  return readMarketingConsent() === "accepted";
}