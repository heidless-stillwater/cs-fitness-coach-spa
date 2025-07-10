'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateWorkoutPlan, type GenerateWorkoutPlanInput, type GenerateWorkoutPlanOutput } from '@/ai/flows/generate-workout-plan';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from 'lucide-react';

const workoutPlanSchema = z.object({
  fitnessGoals: z.string().min(10, { message: "Please describe your fitness goals in more detail." }),
  currentFitnessLevel: z.enum(['beginner', 'intermediate', 'advanced'], { required_error: 'Please select your fitness level.' }),
  availableEquipment: z.string().min(3, { message: "Please list your available equipment (or 'none')." }),
  workoutDuration: z.string().min(2, { message: "Please enter a valid duration." }),
  workoutFrequency: z.string().min(1, { message: "Please enter a valid frequency." }),
});

export function WorkoutGenerator() {
  const [result, setResult] = useState<GenerateWorkoutPlanOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<GenerateWorkoutPlanInput>({
    resolver: zodResolver(workoutPlanSchema),
    defaultValues: {
      fitnessGoals: '',
      currentFitnessLevel: 'beginner',
      availableEquipment: '',
      workoutDuration: '',
      workoutFrequency: '',
    },
  });

  const onSubmit: SubmitHandler<GenerateWorkoutPlanInput> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const plan = await generateWorkoutPlan(data);
      setResult(plan);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error Generating Plan",
        description: "There was an issue creating your workout plan. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section id="workout-generator" className="w-full">
      <div className="container mx-auto grid max-w-4xl gap-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Create Your <span className="text-primary">Personalized</span> Workout</h2>
          <p className="text-muted-foreground md:text-xl">
            Fill out the form below and our AI will generate a workout plan tailored just for you.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Your Fitness Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="fitnessGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fitness Goals</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Lose 10 pounds, build muscle" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="currentFitnessLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Fitness Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="availableEquipment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Available Equipment</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Dumbbells, bands, none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="workoutDuration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Workout Duration (minutes)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 45" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="workoutFrequency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Workout Frequency (per week)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 3" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="md:col-span-2">
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Plan...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Workout Plan
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        {isLoading && (
            <div className="flex justify-center items-center rounded-lg border p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="ml-4 text-muted-foreground">Our AI is crafting your plan...</p>
            </div>
        )}

        {result && (
          <Card className="bg-accent text-accent-foreground">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <Sparkles className="text-primary" /> Your Custom Workout Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none text-accent-foreground whitespace-pre-wrap">
                {result.workoutPlan}
              </div>
            </CardContent>
             <CardFooter>
                <CardDescription className="text-accent-foreground/80">
                    Remember to warm up before each session and cool down afterwards. Listen to your body and adjust as needed.
                </CardDescription>
             </CardFooter>
          </Card>
        )}
      </div>
    </section>
  );
}
