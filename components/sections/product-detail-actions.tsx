"use client";

import React, { useState } from "react";
import { useCart } from "@/components/providers/cart-context";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ShoppingBag } from "lucide-react";

interface Product {
  slug: string;
  model: string;
  title: string;
  category: string;
  image: string;
}

export function ProductDetailActions({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [woodFinish, setWoodFinish] = useState("Premium Maple wood");
  const [upholsteryColor, setUpholsteryColor] = useState("Charcoal Black");
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.slug,
      type: "product",
      title: product.title,
      model: product.model,
      image: product.image,
      woodFinish,
      upholsteryColor,
      quantity: 1,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const woodFinishes = ["Premium Maple wood", "Warm Rubberwood"];
  const upholsteryColors = ["Charcoal Black", "Studio Sage", "Ivory White", "Tan Brown", "Custom Shade"];

  return (
    <div className="space-y-6 pt-4 border-t border-border/30">
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Wood Finish Selector */}
        <div className="space-y-2">
          <Label htmlFor="wood-finish" className="text-xs font-semibold uppercase tracking-wider text-brand-brass">
            Wood Finish
          </Label>
          <select
            id="wood-finish"
            value={woodFinish}
            onChange={(e) => setWoodFinish(e.target.value)}
            className="w-full h-10 px-3 rounded-xl border border-border/40 bg-background/50 hover:bg-muted text-sm focus:border-brand-brass focus:ring-1 focus:ring-brand-brass outline-none cursor-pointer"
          >
            {woodFinishes.map((finish) => (
              <option key={finish} value={finish} className="bg-background text-foreground">
                {finish}
              </option>
            ))}
          </select>
        </div>

        {/* Upholstery Color Selector */}
        <div className="space-y-2">
          <Label htmlFor="upholstery-color" className="text-xs font-semibold uppercase tracking-wider text-brand-brass">
            Upholstery Color
          </Label>
          <select
            id="upholstery-color"
            value={upholsteryColor}
            onChange={(e) => setUpholsteryColor(e.target.value)}
            className="w-full h-10 px-3 rounded-xl border border-border/40 bg-background/50 hover:bg-muted text-sm focus:border-brand-brass focus:ring-1 focus:ring-brand-brass outline-none cursor-pointer"
          >
            {upholsteryColors.map((color) => (
              <option key={color} value={color} className="bg-background text-foreground">
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row pt-2">
        <Button
          onClick={handleAddToCart}
          size="lg"
          className="rounded-full shadow-glow font-medium flex items-center justify-center gap-2 group transition-transform hover:-translate-y-0.5"
        >
          <ShoppingBag className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
          <span>{added ? "Added to Quote ✓" : "Add to Quote Cart"}</span>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <a href="/catalogue/mahadev-enterprises-catalogue.pdf" download>
            Download Catalogue
          </a>
        </Button>
      </div>
    </div>
  );
}
