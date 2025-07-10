import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { WorkoutGenerator } from "@/components/sections/WorkoutGenerator";
import { NutritionAssistant } from "@/components/sections/NutritionAssistant";
import { Testimonials } from "@/components/sections/Testimonials";
import { ResourceLibrary } from "@/components/sections/ResourceLibrary";
import { Contact } from "@/components/sections/Contact";
import { ResponsiveAccordion } from "@/components/layout/ResponsiveAccordion";
import { Dumbbell, Salad, Star, Library, Phone } from "lucide-react";

export default function Home() {
  const accordionItems = [
    {
      value: "workout-generator",
      trigger: (
        <div className="flex items-center gap-3">
            <Dumbbell className="h-5 w-5 text-primary" />
            Create Your Personalized Workout
        </div>
      ),
      content: <WorkoutGenerator />,
    },
    {
      value: "nutrition-assistant",
      trigger: (
        <div className="flex items-center gap-3">
            <Salad className="h-5 w-5 text-primary" />
            Fuel Your Body, Achieve Your Goals
        </div>
      ),
      content: <NutritionAssistant />,
    },
    {
      value: "testimonials",
      trigger: (
        <div className="flex items-center gap-3">
            <Star className="h-5 w-5 text-primary" />
            Success Stories from Our Members
        </div>
       ),
      content: <Testimonials />,
    },
    {
      value: "resources",
      trigger: (
        <div className="flex items-center gap-3">
            <Library className="h-5 w-5 text-primary" />
            Knowledge is Power
        </div>
      ),
      content: <ResourceLibrary />,
    },
    {
      value: "contact",
      trigger: (
        <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            Get in Touch
        </div>
      ),
      content: <Contact />,
    },
  ];


  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ResponsiveAccordion items={accordionItems} />
      </main>
      <Footer />
    </div>
  );
}
