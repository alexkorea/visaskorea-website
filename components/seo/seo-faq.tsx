"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "./json-ld";
import { generateFAQSchema, type FAQItem } from "@/lib/seo";

interface SEOFAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

/**
 * SEO-optimized FAQ component with structured data
 */
export function SEOFAQ({ items, title, className = "" }: SEOFAQProps) {
  return (
    <section className={className} aria-labelledby={title ? "faq-title" : undefined}>
      {/* Structured Data */}
      <JsonLd data={generateFAQSchema(items)} />

      {/* Visual FAQ */}
      {title && (
        <h2
          id="faq-title"
          className="mb-6 text-2xl font-bold tracking-tight"
        >
          {title}
        </h2>
      )}
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
