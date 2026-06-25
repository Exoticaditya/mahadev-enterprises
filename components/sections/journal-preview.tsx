import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { journalPosts } from "@/data/site";

export function JournalPreview() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Decorative background glow orb */}
      <div className="glow-orb left-[15%] top-[10%] h-[350px] w-[350px] bg-brand-brass/5" />

      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Journal"
          title="Insights from the Journal"
          description="Read our latest guides on model selection, spatial design tips for wellness studios, and key standards for commercial procurement."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {journalPosts.map((post) => (
            <div
              key={post.slug}
              className="luxury-card group flex flex-col justify-between p-6 md:p-8"
            >
              <div className="space-y-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-brass">{post.date}</p>
                <h3 className="text-2xl font-serif text-foreground leading-tight">{post.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{post.summary}</p>
              </div>

              <div className="mt-8">
                <Button asChild variant="ghost" className="w-fit px-0 text-brand-brass hover:text-brand-brass/80 hover:bg-transparent group/btn">
                  <Link href={`/journal/${post.slug}`} className="flex items-center gap-1.5 font-medium text-sm">
                    <span>Read article</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}