'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateMealSuggestions, type MealSuggestionsInput, type MealSuggestionsOutput } from '@/ai/flows/generate-meal-suggestions';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles, UtensilsCrossed, Salad } from 'lucide-react';

const mealSuggestionsSchema = z.object({
  dietaryPreferences: z.string().min(3, { message: "Please specify your dietary preferences." }),
  dietaryRestrictions: z.string().min(3, { message: "Please specify your dietary restrictions (or type 'none')." }),
  fitnessGoals: z.string().min(3, { message: "Please specify your fitness goals." }),
});

export function NutritionAssistant() {
  const [result, setResult] = useState<MealSuggestionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<MealSuggestionsInput>({
    resolver: zodResolver(mealSuggestionsSchema),
    defaultValues: {
      dietaryPreferences: '',
      dietaryRestrictions: '',
      fitnessGoals: '',
    },
  });

  const onSubmit: SubmitHandler<MealSuggestionsInput> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const suggestions = await generateMealSuggestions(data);
      setResult(suggestions);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error Generating Suggestions",
        description: "There was an issue creating your meal plan. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section id="nutrition-assistant" className="w-full bg-card">
      <div className="container mx-auto grid max-w-4xl gap-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fuel Your Body, <span className="text-primary">Achieve Your Goals</span></h2>
          <p className="text-muted-foreground md:text-xl">
            Get intelligent meal suggestions and nutritional guidance from our AI assistant.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Your Nutrition Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="dietaryPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dietary Preferences</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Vegetarian, low-carb, high-protein" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="dietaryRestrictions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dietary Restrictions</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Gluten-free, lactose intolerant, none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fitnessGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fitness Goals</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Support muscle gain, aid in weight loss" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Get Meal Ideas
                      </>
                    )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        {isLoading && (
            <div className="flex justify-center items-center rounded-lg border p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="ml-4 text-muted-foreground">Our AI chef is cooking up some ideas...</p>
            </div>
        )}

        {result && (
          <Card className="bg-accent text-accent-foreground">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <Sparkles className="text-primary" /> Your AI Nutrition Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-headline text-xl font-semibold mb-2 flex items-center gap-2"><Salad className="h-5 w-5 text-primary"/>Meal Suggestions</h3>
                <div className="prose prose-sm max-w-none text-accent-foreground whitespace-pre-wrap">
                  {result.mealSuggestions}
                </div>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold mb-2 flex items-center gap-2"><UtensilsCrossed className="h-5 w-5 text-primary"/>Nutritional Guidance</h3>
                <div className="prose prose-sm max-w-none text-accent-foreground whitespace-pre-wrap">
                  {result.nutritionalGuidance}
                </div>
              </div>
            </CardContent>
             <CardFooter>
                <CardDescription className="text-accent-foreground/80">
                    This is a suggestion. Consult with a healthcare professional for personalized medical advice.
                </CardDescription>
             </CardFooter>
          </Card>
        )}
      </div>
    </section>
  );
}
