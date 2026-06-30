"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 24,
  x = 0,
  scale = 0.98,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Premium luxury ease curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
