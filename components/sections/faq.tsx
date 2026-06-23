import { SectionHeading } from "@/components/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export function FAQSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="FAQ"
          title="Clear answers for serious buyers."
          description="The site removes procurement uncertainty by answering the questions that matter before a sales conversation begins."
        />
        <Accordion type="single" collapsible className="w-full rounded-[2rem] border border-border/70 bg-card/60 px-6 shadow-soft">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}