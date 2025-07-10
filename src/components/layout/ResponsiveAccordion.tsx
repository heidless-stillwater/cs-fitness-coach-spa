'use client';

import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { WorkoutGenerator } from "@/components/sections/WorkoutGenerator";
import { NutritionAssistant } from "@/components/sections/NutritionAssistant";
import { Testimonials } from "@/components/sections/Testimonials";
import { ResourceLibrary } from "@/components/sections/ResourceLibrary";
import { Contact } from "@/components/sections/Contact";

const sections = [
  { id: 'hero', title: 'Home', Component: Hero },
  { id: 'features', title: 'Features', Component: Features },
  { id: 'workout-generator', title: 'Workout AI', Component: WorkoutGenerator },
  { id: 'nutrition-assistant', title: 'Nutrition AI', Component: NutritionAssistant },
  { id: 'testimonials', title: 'Testimonials', Component: Testimonials },
  { id: 'resources', title: 'Resources', Component: ResourceLibrary },
  { id: 'contact', title: 'Contact', Component: Contact },
];

export function ResponsiveAccordion() {
  const [isClient, setIsClient] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkSize = () => {
      setIsMobileView(window.innerWidth < 1000);
    };
    window.addEventListener('resize', checkSize);
    checkSize();
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  if (!isClient) {
    // Render nothing or a loader on the server to avoid hydration mismatch
    return null;
  }

  if (isMobileView) {
    return (
      <Accordion type="single" collapsible className="w-full">
        {sections.map(({ id, title, Component }) => (
          <AccordionItem value={id} key={id}>
            <AccordionTrigger className="px-4 text-lg font-semibold hover:no-underline">{title}</AccordionTrigger>
            <AccordionContent>
              <Component />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return (
    <>
      <Hero />
      <Features />
      <WorkoutGenerator />
      <NutritionAssistant />
      <Testimonials />
      <ResourceLibrary />
      <Contact />
    </>
  );
}
