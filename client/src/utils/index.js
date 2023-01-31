// import file saver library, to download the image
import FileSaver from  'file-saver';

// import dummy prompts
import { surpriseMePrompts } from '../constants';

// function to get a random prompt, will be used later in the create page, when clicking the "surprise me" button
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt)
    return randomPrompt
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}