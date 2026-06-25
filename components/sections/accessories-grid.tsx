"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { accessories } from "@/data/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { useCart } from "@/components/providers/cart-context";

export function AccessoriesGrid() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Studio Accessories", "Reformer Spare Parts"];

  const filteredAccessories = accessories.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchLower) ||
      item.summary.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower) ||
      item.materials.some((m) => m.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 md:py-28" id="accessories">
      <div className="container space-y-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Parts & Support"
            title="Apparatus accessories and precision spare parts."
            description="Procure official replacement springs, carriages, frames, and studio accessories. High-specification components manufactured to original design tolerances."
            className="max-w-3xl"
          />

          {/* Live Search Input */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search parts (e.g. spring, maple)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border/60 bg-card/45 py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition duration-300 placeholder:text-muted-foreground/60 focus:border-brand-brass focus:ring-1 focus:ring-brand-brass"
            />
          </div>
        </div>

        {/* Category Selection Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-border/40 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-brand-brass text-white shadow-soft"
                  : "border border-border/50 bg-card/30 text-muted-foreground hover:border-brand-brass hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid list of Accessories */}
        {filteredAccessories.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAccessories.map((item) => (
              <div
                key={item.slug}
                className="luxury-card flex flex-col justify-between p-6 md:p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border border-brand-brass/35 bg-brand-brass/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-brand-brass">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>

                  <div className="space-y-2 border-t border-border/30 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">
                        Materials:
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.materials.join(" · ")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.features.slice(0, 2).map((feat) => (
                      <span
                        key={feat}
                        className="rounded-full bg-muted/60 px-2.5 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={() =>
                      addToCart({
                        id: item.slug,
                        type: "accessory",
                        title: item.title,
                        quantity: 1,
                      })
                    }
                    size="sm"
                    variant="outline"
                    className="rounded-full hover:bg-brand-brass hover:text-white"
                  >
                    Add to Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="luxury-card flex flex-col items-center justify-center p-12 text-center">
            <p className="text-lg text-muted-foreground">No accessories or spare parts match your query.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-sm font-medium text-brand-brass hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
