"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Card className="overflow-hidden border-border/70 bg-card/70 shadow-haze">
      <CardHeader>
        <CardTitle className="text-3xl">Start your enquiry</CardTitle>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="rounded-[1.5rem] border border-brand-brass/30 bg-brand-brass/10 p-6 text-sm leading-7 text-foreground/90">
            Thank you. Your enquiry has been received. The team will review your request and respond with the next steps.
          </div>
        ) : (
          <form
            className="grid gap-5"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="grid gap-2 md:grid-cols-2 md:gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+91 ..." />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Project details</Label>
              <Textarea id="message" placeholder="Tell us about your studio, hospitality, or export requirement." />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Enquiry
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}