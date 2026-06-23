import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Trust"
          title="Proof that the brand is built for premium commercial work."
          description="Testimonials are kept short and specific so they read as evidence rather than marketing copy."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background/70">
              <CardContent className="space-y-5 p-6 md:p-7">
                <p className="text-base leading-8 text-foreground/90">“{testimonial.quote}”</p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.context}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}