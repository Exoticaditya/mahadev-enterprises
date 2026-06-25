import { SectionHeading } from "@/components/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export function FAQSection() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Decorative ambient lighting */}
      <div className="glow-orb left-[10%] bottom-[10%] h-[350px] w-[350px] bg-brand-clay/5" />

      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Find key information on bulk ordering, custom branding options, material specifications, and our international export processes."
        />
        <Accordion type="single" collapsible className="w-full luxury-card px-6 md:px-8">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={faq.question} className="border-b border-border/40 last:border-b-0">
              <AccordionTrigger className="text-left text-base font-medium py-5 transition duration-300 hover:text-brand-brass hover:no-underline [&[data-state=open]]:text-brand-brass">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-7 text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}