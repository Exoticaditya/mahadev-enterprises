"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { trackBusinessAction } from "@/lib/analytics";

type TrackingLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  eventName: string;
  metaStandardEvent?: string;
  metaCustomEvent?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  ariaLabel?: string;
};

export function TrackingLink({
  href,
  children,
  className,
  eventName,
  metaStandardEvent,
  metaCustomEvent,
  target,
  rel,
  download,
  ariaLabel,
}: TrackingLinkProps) {
  const handleClick = () => {
    trackBusinessAction(eventName, { href }, { metaStandardEvent, metaCustomEvent });
  };

  if (target || download || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
        download={download}
        aria-label={ariaLabel}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </Link>
  );
}