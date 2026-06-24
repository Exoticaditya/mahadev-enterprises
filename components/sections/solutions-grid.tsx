import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { solutions } from "@/data/site";

export function SolutionsGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Solutions"
          title="Built around the way premium buyers actually purchase."
          description="Each solution page speaks to a distinct audience so the site can convert studio founders, hospitality buyers, and specifiers without diluting the message."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution) => (
            <Card key={solution.slug} className="transition duration-300 hover:-translate-y-1 hover:shadow-haze">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-secondary/30">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-[1.03]"
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <CardHeader>
                <CardDescription>Use case</CardDescription>
                <CardTitle className="text-2xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-sm leading-7 text-muted-foreground">{solution.summary}</p>
                <div className="space-y-2 text-sm text-foreground/80">
                  {solution.benefits.map((benefit) => (
                    <p key={benefit}>• {benefit}</p>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/solutions/${solution.slug}`}>Explore</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}