"use client";

import { useEffect } from "react";

export function WebMcpProvider() {
  useEffect(() => {
    // Check if WebMCP API is supported by the client browser/agent environment
    if (typeof window !== "undefined" && "modelContext" in navigator) {
      try {
        const nav = navigator as any;
        nav.modelContext.provideContext({
          tools: [
            {
              name: "list_products",
              description: "List all professional B2B Pilates equipment models manufactured by Mahadev Enterprises.",
              inputSchema: { type: "object", properties: {} },
              execute: async () => {
                return {
                  products: [
                    { name: "Pilates Reformer (M-01)", slug: "pilates-reformer" },
                    { name: "Reformer With Tower (M-02)", slug: "reformer-with-tower" },
                    { name: "Aluminium Reformer With Tower (M-03)", slug: "aluminium-reformer-with-tower" },
                    { name: "Foldable Reformer (M-04)", slug: "foldable-reformer" },
                    { name: "The Cadillac (M-05)", slug: "the-cadillac" },
                    { name: "3-In-1 Caformer (M-06)", slug: "3-in-1-caformer" },
                    { name: "Ladder Barrel (M-07)", slug: "ladder-barrel" },
                    { name: "Wunda Chair (M-08)", slug: "wunda-chair" },
                    { name: "Aluminium Wunda Chair (M-09)", slug: "aluminium-wunda-chair" },
                    { name: "Aluminium Ladder Barrel (M-10)", slug: "aluminium-ladder-barrel" },
                    { name: "Spine Corrector (M-11)", slug: "spine-corrector" },
                  ],
                };
              },
            },
            {
              name: "get_contact_info",
              description: "Get primary B2B sales and engineering inquiry channels.",
              inputSchema: { type: "object", properties: {} },
              execute: async () => {
                return {
                  phone: "+91 90121 12527",
                  email: "support@mahadeventerprisesindia.com",
                  whatsapp: "https://wa.me/919012112527",
                  location: "Rishikesh, Uttarakhand, India 249201",
                };
              },
            },
          ],
        });
        console.log("WebMCP tools registered successfully.");
      } catch (err) {
        console.warn("Failed to register WebMCP context:", err);
      }
    }
  }, []);

  return null;
}
