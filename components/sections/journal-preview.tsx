import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { journalPosts } from "@/data/site";

export function JournalPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Journal"
          title="SEO content with authority, not filler."
          description="Articles are positioned as premium buying guidance and trust-building content for commercial wellness procurement."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {journalPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col justify-between gap-6 p-6 md:p-7">
              <CardContent className="space-y-4 p-0">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{post.date}</p>
                <h3 className="text-2xl leading-tight">{post.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{post.summary}</p>
              </CardContent>
              <Button asChild variant="ghost" className="w-fit px-0">
                <Link href={`/journal/${post.slug}`}>Read article</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}