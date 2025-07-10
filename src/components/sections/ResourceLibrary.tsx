import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "The Top 5 Myths About Cardio Debunked",
    description: "Discover the truth about cardiovascular exercise and how to optimize your routine for maximum results.",
    image: "https://placehold.co/600x400.png",
    imageHint: "person running",
    link: "#",
  },
  {
    title: "Nutrition 101: A Beginner's Guide to Macronutrients",
    description: "Learn about proteins, carbs, and fats, and how to balance them for your specific fitness goals.",
    image: "https://placehold.co/600x400.png",
    imageHint: "healthy food",
    link: "#",
  },
  {
    title: "Mind Over Matter: The Psychology of Sticking to Your Fitness Plan",
    description: "Explore mental strategies to build discipline, stay motivated, and make your fitness journey a lifelong habit.",
    image: "https://placehold.co/600x400.png",
    imageHint: "person meditating",
    link: "#",
  },
];


export function ResourceLibrary() {
  return (
    <section id="resources" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Knowledge is Power</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore our curated library of articles to enhance your fitness, nutrition, and wellness journey.
                </p>
            </div>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {articles.map((article, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                    src={article.image}
                    alt={article.title}
                    data-ai-hint={article.imageHint}
                    width={600}
                    height={400}
                    className="aspect-video w-full object-cover"
                />
                <CardHeader>
                    <CardTitle className="font-headline">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <CardDescription>{article.description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <Link href={article.link} className="w-full">
                        <Button variant="outline" className="w-full">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
