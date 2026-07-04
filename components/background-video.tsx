"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function BackgroundVideo() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden select-none">
      {mounted && isDesktop ? (
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
