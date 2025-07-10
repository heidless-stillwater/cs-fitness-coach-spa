import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero" className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
                Transform Your Body,
              </h1>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                 Elevate Your Life.
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Welcome to Achieve Fitness. We combine personalized training with cutting-edge AI to create workout and nutrition plans that are as unique as you are. Ready to unlock your potential?
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#workout-generator">
                <Button size="lg">Start Your Journey</Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x600.png"
            alt="Person exercising"
            data-ai-hint="fitness workout"
            width={600}
            height={600}
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
