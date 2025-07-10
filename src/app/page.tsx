import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { WorkoutGenerator } from "@/components/sections/WorkoutGenerator";
import { NutritionAssistant } from "@/components/sections/NutritionAssistant";
import { Testimonials } from "@/components/sections/Testimonials";
import { ResourceLibrary } from "@/components/sections/ResourceLibrary";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <WorkoutGenerator />
        <NutritionAssistant />
        <Testimonials />
        <ResourceLibrary />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
