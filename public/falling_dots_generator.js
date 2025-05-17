const container = document.querySelector('.falling-dots-container');
const numberOfDots = 200; 
for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    const randomX = Math.random() * 100;
    const randomDelay = Math.random() * 5;
    const randomDuration = 10 + Math.random() * 5;
    const randomSize = 1.2 + Math.random() * 4.5;
    const randomOpacity = 0.5 + Math.random() * 0.9;

    dot.style.left = `${randomX}vw`;
    dot.style.top = `-${Math.random() * 20}vh`;
    dot.style.animationDelay = `${randomDelay}s`;
    dot.style.animationDuration = `${randomDuration}s`;
    dot.style.width = `${randomSize}px`;
    dot.style.height = `${randomSize}px`;
    dot.style.opacity = randomOpacity;

    container.appendChild(dot);
}