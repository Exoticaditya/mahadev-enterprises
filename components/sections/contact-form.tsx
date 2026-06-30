"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      _subject: "New B2B Website Enquiry - Mahadev Enterprises",
      _captcha: "false",
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/support@mahadeventerprisesindia.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      console.error(err);
      setError("We encountered an issue submitting your enquiry. Please try again or contact us directly at support@mahadeventerprisesindia.com");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="overflow-hidden border-border/70 bg-card/70 shadow-haze">
      <CardHeader>
        <CardTitle className="text-3xl">Start your enquiry</CardTitle>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="rounded-[1.5rem] border border-brand-brass/30 bg-brand-brass/10 p-6 text-sm leading-7 text-foreground/90 animate-fade-in">
            Thank you. Your enquiry has been received. The team will review your request and respond with the next steps shortly.
          </div>
        ) : (
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="grid gap-2 md:grid-cols-2 md:gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" placeholder="+91 ..." required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Project details</Label>
              <Textarea id="message" name="message" placeholder="Tell us about your studio, hospitality, or export requirement." required />
            </div>
            
            {error && (
              <p className="text-sm font-medium text-destructive-foreground bg-destructive/15 border border-destructive/25 rounded-xl p-3">
                {error}
              </p>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={submitting}>
              {submitting ? "Sending Enquiry..." : "Send Enquiry"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}