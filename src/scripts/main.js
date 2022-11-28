import { loadCarousel, daysUntilNextDodo } from './utils.js';
import { createHeart } from './hearts.js';
import floating from './floating.js';
import Confetti from './confetti.min.js';

document.addEventListener('DOMContentLoaded', async () => {
    const overlay = document.querySelector('.loading-overlay');

    const [days, event] = await daysUntilNextDodo();

    overlay.classList.add('hidden');
    loadCarousel();
    await new Promise(resolve => setTimeout(resolve, 2000));



    const daysContainer = document.querySelector('.days');

    // animate days decrement from 100 to days
    for (let i = 100; i >= days; i--) {
        daysContainer.innerHTML = i;
        await new Promise(resolve => setTimeout(resolve, 50 + (100 - i) - i));
    }

    let confetti = new Confetti("days");
    confetti.draw()

    const text = document.querySelector('.text');
    text.classList.add('visible');

    const subtext = document.querySelector('.subtext');
    subtext.innerHTML = event;
    subtext.classList.add('visible');

    const credits = document.querySelector('.credits');
    credits.classList.add('visible');

    const hearts = ["💖", "💘", "💓", "💕", "💛", "💙", "💜", "💚", "💗", "💝", "💞", "💟"]
    floating({
        content: hearts[Math.floor(Math.random() * hearts.length)],
        number: days,
        size: 2
    })
});
