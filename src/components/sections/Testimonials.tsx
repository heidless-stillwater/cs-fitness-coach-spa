import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Marathon Runner",
    avatar: "SL",
    image: "https://placehold.co/100x100.png",
    imageHint: "woman smiling",
    quote: "Achieve Fitness transformed my training. The AI-generated workouts pushed my limits perfectly, and the nutrition advice was a game-changer for my performance.",
  },
  {
    name: "Mike T.",
    role: "Busy Professional",
    avatar: "MT",
    image: "https://placehold.co/100x100.png",
    imageHint: "man professional",
    quote: "I never had time for the gym. The personalized home workout plans fit my schedule and equipment. I've lost 20lbs and feel more energetic than ever!",
  },
  {
    name: "Jessica P.",
    role: "New Mom",
    avatar: "JP",
    image: "https://placehold.co/100x100.png",
    imageHint: "woman happy",
    quote: "Getting back in shape post-pregnancy was daunting. The AI's gradual progression and supportive resources made it feel achievable and safe. I'm so grateful!",
  },
    {
    name: "David C.",
    role: "Fitness Enthusiast",
    avatar: "DC",
    image: "https://placehold.co/100x100.png",
    imageHint: "man fitness",
    quote: "I was stuck in a plateau for months. The variety and intelligence of the workout plans from Achieve Fitness helped me break through and hit new personal records.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories from Our Members</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Don't just take our word for it. Here's what our community is saying.
          </p>
        </div>
        <div className="mt-12">
            <Carousel
                opts={{ align: "start", loop: true, }}
                className="w-full max-w-4xl mx-auto"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                        <div className="p-1">
                        <Card className="h-full bg-card">
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                                <p className="text-base text-muted-foreground italic">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4 pt-4">
                                    <Avatar>
                                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
