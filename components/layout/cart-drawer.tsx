"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";

import { useCart } from "@/components/providers/cart-context";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CartDrawer() {
  const { cart, isOpen, setIsOpen, updateQuantity, removeFromCart, clearCart } = useCart();
  const [step, setStep] = useState<"cart" | "checkout">("cart");
  const [name, setName] = useState("");
  const [studio, setStudio] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    // Compile cart items text
    let itemsText = "";
    cart.forEach((item, index) => {
      itemsText += `${index + 1}. *${item.title}* ${item.model ? `(${item.model})` : ""} x ${item.quantity}\n`;
      if (item.type === "product") {
        if (item.woodFinish) itemsText += `   - Wood Finish: ${item.woodFinish}\n`;
        if (item.upholsteryColor) itemsText += `   - Upholstery Color: ${item.upholsteryColor}\n`;
      }
      itemsText += "\n";
    });

    // Compile full WhatsApp message
    const message = `*Mahadev Enterprises - B2B Quote Request*\n` +
      `-------------------------------------------\n\n` +
      `*Client Details:*\n` +
      `• Name: ${name || "Not specified"}\n` +
      `• Studio/Company: ${studio || "Not specified"}\n` +
      `• Delivery Location: ${location || "Not specified"}\n\n` +
      `*Requested Items:*\n` +
      `${itemsText}` +
      (notes ? `*Additional Notes:*\n${notes}\n\n` : "") +
      `_Enquiry sent from Mahadev Enterprises web portal._`;

    // WhatsApp phone number (Mahadev Enterprises)
    const phoneNumber = "919012112527";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp URL
    window.open(whatsappUrl, "_blank");

    // Reset form, clear cart and return to Step 1
    setName("");
    setStudio("");
    setLocation("");
    setNotes("");
    clearCart();
    setStep("cart");
    setIsOpen(false);
  };

  // Reset step to 'cart' when the drawer closes
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => setStep("cart"), 300);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent className="flex w-full flex-col p-0 sm:max-w-lg bg-background/85 backdrop-blur-2xl border-l border-border/40 shadow-glass">
        <div className="p-6 border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-brass/10 text-brand-brass">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                {step === "cart" ? "Your Quote Cart" : "Request B2B Quote"}
              </h2>
              <p className="text-xs text-muted-foreground">
                {step === "cart" 
                  ? "Compile items to send a direct quote request on WhatsApp" 
                  : "Enter details to generate your customized proposal"}
              </p>
            </div>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center p-8 space-y-4">
            <ShoppingBag className="h-12 w-12 text-muted-foreground/40 stroke-[1.5]" />
            <p className="text-center font-serif text-lg text-muted-foreground">Your quote cart is empty</p>
            <p className="text-center text-xs text-muted-foreground max-w-xs">
              Explore our reformers and accessories to start building your customized studio proposal.
            </p>
            <Button onClick={() => setIsOpen(false)} variant="outline" className="rounded-full">
              Continue Browsing
            </Button>
          </div>
        ) : step === "cart" ? (
          <>
            {/* Step 1: Cart Items List */}
            <ScrollArea className="flex-1 px-6">
              <div className="divide-y divide-border/30">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.woodFinish || ""}-${item.upholsteryColor || ""}`} className="flex py-6 gap-4 animate-fadeIn">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-border/40 bg-secondary/10">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted text-[10px] text-muted-foreground font-semibold">
                          Prop
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="space-y-1">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-serif text-base text-foreground leading-snug">{item.title}</h4>
                          <button
                            onClick={() => removeFromCart(item.id, item.woodFinish, item.upholsteryColor)}
                            className="text-muted-foreground/60 hover:text-destructive transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        {item.model && (
                          <p className="text-[10px] font-semibold text-brand-brass uppercase tracking-wider">
                            Model {item.model}
                          </p>
                        )}
                        {item.type === "product" && (item.woodFinish || item.upholsteryColor) && (
                          <div className="flex flex-wrap gap-x-2 gap-y-1 pt-1 text-[10px] text-muted-foreground">
                            {item.woodFinish && (
                              <span className="rounded bg-muted/60 px-1.5 py-0.5 border border-border/20">
                                Finish: {item.woodFinish.split(" ")[0]}
                              </span>
                            )}
                            {item.upholsteryColor && (
                              <span className="rounded bg-muted/60 px-1.5 py-0.5 border border-border/20">
                                Upholstery: {item.upholsteryColor}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-border/50 rounded-full bg-background/50 overflow-hidden px-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.woodFinish, item.upholsteryColor)}
                            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium text-foreground">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.woodFinish, item.upholsteryColor)}
                            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border/30 bg-muted/30 p-6 space-y-3">
              <Button 
                onClick={() => setStep("checkout")} 
                className="w-full h-11 rounded-full font-medium tracking-wide shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Proceed to Enquiry
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => setIsOpen(false)}
                className="w-full text-xs text-muted-foreground hover:text-foreground"
              >
                Continue Browsing & Add More Items
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Step 2: Checkout Form */}
            <div className="px-6 pt-4">
              <button 
                onClick={() => setStep("cart")} 
                className="text-xs text-brand-brass hover:underline flex items-center gap-1 font-medium transition-colors hover:text-brand-brass/80"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to Quote list</span>
              </button>
            </div>

            <ScrollArea className="flex-1 px-6">
              <form onSubmit={handleCheckout} className="py-4 space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-semibold text-brand-brass uppercase tracking-wider">Recipient: Mahadev Enterprises</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Provide your contact details so we can estimate shipping and custom manufacturing options from Rishikesh.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="checkout-name" className="text-xs font-medium">Your Name</Label>
                    <Input
                      id="checkout-name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-10 rounded-xl bg-background/60 border-border/40 text-sm focus:border-brand-brass focus:ring-brand-brass"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="checkout-studio" className="text-xs font-medium">Studio / Company Name</Label>
                    <Input
                      id="checkout-studio"
                      required
                      placeholder="e.g. CoreBalance Pilates"
                      value={studio}
                      onChange={(e) => setStudio(e.target.value)}
                      className="h-10 rounded-xl bg-background/60 border-border/40 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="checkout-location" className="text-xs font-medium">Delivery Location / City</Label>
                  <Input
                    id="checkout-location"
                    required
                    placeholder="e.g. Mumbai, India or Dubai, UAE"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="h-10 rounded-xl bg-background/60 border-border/40 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="checkout-notes" className="text-xs font-medium">Custom Requests / Notes</Label>
                  <Textarea
                    id="checkout-notes"
                    placeholder="e.g. Custom upholstery shades, delivery timeline questions, or accessory specifications..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className="rounded-xl bg-background/60 border-border/40 text-sm resize-none"
                  />
                </div>

                <div className="pt-4 space-y-4">
                  <Button type="submit" className="w-full h-11 rounded-full font-medium tracking-wide shadow-glow transition-transform hover:-translate-y-0.5">
                    Send WhatsApp Enquiry
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    Handcrafted in Rishikesh · Standard dispatch: 4–6 weeks · Shipping quotes are calculated upon enquiry submission
                  </p>
                </div>
              </form>
            </ScrollArea>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
