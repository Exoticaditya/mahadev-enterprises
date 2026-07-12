"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function BackgroundVideo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden select-none">
      {mounted ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-[0.12] dark:opacity-[0.16]"
          poster="/hero/hero-desktop.webp"
        >
          <source src="/videos/hero-loop.webm" type="video/webm" />
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
          <track kind="captions" src="" label="No captions" default />
        </video>
      ) : (
        <Image
          src="/hero/hero-desktop.webp"
          alt="Decorative Background"
          fill
          className="object-cover opacity-[0.12] dark:opacity-[0.16]"
          priority
          sizes="100vw"
        />
      )}
    </div>
  );
}
