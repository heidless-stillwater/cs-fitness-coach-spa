// use server'

/**
 * @fileOverview Generates a personalized workout plan based on user input.
 *
 * - generateWorkoutPlan - A function that generates the workout plan.
 * - GenerateWorkoutPlanInput - The input type for the generateWorkoutPlan function.
 * - GenerateWorkoutPlanOutput - The return type for the generateWorkoutPlan function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWorkoutPlanInputSchema = z.object({
  fitnessGoals: z
    .string()
    .describe('Your fitness goals (e.g., lose weight, build muscle, improve endurance).'),
  currentFitnessLevel: z
    .string()
    .describe('Your current fitness level (e.g., beginner, intermediate, advanced).'),
  availableEquipment: z
    .string()
    .describe('The equipment you have available (e.g., dumbbells, resistance bands, gym access).'),
  workoutDuration: z
    .string()
    .describe('Desired workout duration in minutes'),
  workoutFrequency: z
    .string()
    .describe('Desired workout frequency (e.g. 3 times a week)'),
});

export type GenerateWorkoutPlanInput = z.infer<typeof GenerateWorkoutPlanInputSchema>;

const GenerateWorkoutPlanOutputSchema = z.object({
  workoutPlan: z.string().describe('A personalized workout plan based on the input parameters.'),
});

export type GenerateWorkoutPlanOutput = z.infer<typeof GenerateWorkoutPlanOutputSchema>;

export async function generateWorkoutPlan(
  input: GenerateWorkoutPlanInput
): Promise<GenerateWorkoutPlanOutput> {
  return generateWorkoutPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWorkoutPlanPrompt',
  input: {schema: GenerateWorkoutPlanInputSchema},
  output: {schema: GenerateWorkoutPlanOutputSchema},
  prompt: `You are a personal trainer. Generate a workout plan based on the user's fitness goals, current fitness level, available equipment, workout duration and frequency.

Fitness Goals: {{{fitnessGoals}}}
Current Fitness Level: {{{currentFitnessLevel}}}
Available Equipment: {{{availableEquipment}}}
Workout Duration: {{{workoutDuration}}}
Workout Frequency: {{{workoutFrequency}}}

Workout Plan:`,
});

const generateWorkoutPlanFlow = ai.defineFlow(
  {
    name: 'generateWorkoutPlanFlow',
    inputSchema: GenerateWorkoutPlanInputSchema,
    outputSchema: GenerateWorkoutPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
