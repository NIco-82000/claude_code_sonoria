'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export interface FAQ {
  question: string
  answer: string
}

interface FAQItemProps {
  faqs: FAQ[]
}

export function FAQItem({ faqs }: FAQItemProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger className="text-left text-lg font-semibold">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
