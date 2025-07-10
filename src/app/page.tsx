import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ResponsiveAccordion } from "@/components/layout/ResponsiveAccordion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ResponsiveAccordion />
      </main>
      <Footer />
    </div>
  );
}
