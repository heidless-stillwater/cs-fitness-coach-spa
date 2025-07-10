'use client';

import React from 'react';
import { useBreakpoint } from '@/hooks/use-breakpoint';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type AccordionItemData = {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
};

type ResponsiveAccordionProps = {
  items: AccordionItemData[];
};

export function ResponsiveAccordion({ items }: ResponsiveAccordionProps) {
  const isMobile = useBreakpoint(1500);

  if (isMobile === undefined) {
    // Render nothing or a loader on the server/initial client render
    // to avoid hydration mismatch.
    return null; 
  }

  if (isMobile) {
    return (
      <div className="container mx-auto px-4 md:px-6 my-8">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }

  return (
    <>
      {items.map((item) => (
        <React.Fragment key={item.value}>
            {item.content}
        </React.Fragment>
      ))}
    </>
  );
}
