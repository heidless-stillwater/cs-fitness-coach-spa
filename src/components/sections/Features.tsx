import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dumbbell, BrainCircuit, Apple, Users } from "lucide-react";

const features = [
  {
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    title: "AI Workout Generator",
    description: "Get workout plans tailored to your goals, fitness level, and available equipment. Our AI adapts to your progress.",
  },
  {
    icon: <Apple className="h-10 w-10 text-primary" />,
    title: "AI Nutrition Assistant",
    description: "Receive personalized meal suggestions and nutritional guidance that align with your dietary needs and fitness journey.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Expert-Led Resources",
    description: "Access a rich library of articles and guides on fitness, nutrition, and wellness to support your path to a healthier life.",
  },
    {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Modern & Responsive",
    description: "Enjoy a seamless and engaging experience on any device, ensuring your fitness journey is always at your fingertips.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">Key Features</div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Achieve Fitness?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're not just another fitness app. We're your personal AI-powered partner in achieving a healthier, stronger you.
                </p>
            </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <div className="grid gap-1">
                    <CardTitle className="font-headline">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
