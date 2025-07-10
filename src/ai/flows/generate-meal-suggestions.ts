// This file is machine-generated - edit with caution!

'use server';

/**
 * @fileOverview Provides tailored meal suggestions and nutritional guidance based on user input.
 *
 * - generateMealSuggestions - A function that generates meal suggestions.
 * - MealSuggestionsInput - The input type for the generateMealSuggestions function.
 * - MealSuggestionsOutput - The return type for the generateMealSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MealSuggestionsInputSchema = z.object({
  dietaryPreferences: z
    .string()
    .describe('The user\'s dietary preferences, e.g., vegetarian, vegan, pescatarian.'),
  dietaryRestrictions: z
    .string()
    .describe('Any dietary restrictions the user has, e.g., gluten-free, lactose intolerant.'),
  fitnessGoals: z
    .string()
    .describe('The user\'s fitness goals, e.g., weight loss, muscle gain, general health.'),
});
export type MealSuggestionsInput = z.infer<typeof MealSuggestionsInputSchema>;

const MealSuggestionsOutputSchema = z.object({
  mealSuggestions: z
    .string()
    .describe(
      'A list of meal suggestions tailored to the user\'s dietary preferences, restrictions, and fitness goals.'
    ),
  nutritionalGuidance: z
    .string()
    .describe(
      'Nutritional guidance and tips to help the user improve their diet and support their fitness journey.'
    ),
});
export type MealSuggestionsOutput = z.infer<typeof MealSuggestionsOutputSchema>;

export async function generateMealSuggestions(
  input: MealSuggestionsInput
): Promise<MealSuggestionsOutput> {
  return generateMealSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'mealSuggestionsPrompt',
  input: {schema: MealSuggestionsInputSchema},
  output: {schema: MealSuggestionsOutputSchema},
  prompt: `You are an AI nutrition assistant. Generate meal suggestions and nutritional guidance based on the user's input.

Dietary Preferences: {{{dietaryPreferences}}}
Dietary Restrictions: {{{dietaryRestrictions}}}
Fitness Goals: {{{fitnessGoals}}}

Provide meal suggestions and nutritional guidance tailored to the user's preferences, restrictions, and goals.
`,
});

const generateMealSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateMealSuggestionsFlow',
    inputSchema: MealSuggestionsInputSchema,
    outputSchema: MealSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
