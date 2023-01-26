// import dummy prompts
import { surpriseMePrompts } from '../constants';

// function to get a random prompt, will be used later in the create page, when clicking the "surprise me" button
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt)
    return randomPrompt
}