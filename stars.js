
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 150;

const setup = () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stars = [];

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,

            size: Math.random() * 2,
            speed: Math.random() * 0.2,
        })
    }
};

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

        ctx.fillStyle = Math.random() > 0.98 ? '#97ce4c' : '#ffffff';
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width; 
        }
    });
    requestAnimationFrame(draw);
}
window.addEventListener('resize', setup);

const textElement = document.getElementById('typewriter');
const name = 'Pablo Páez';
let index = 0;

const typeWriter = () => {
    if (index < name.length) {
        textElement.textContent += name.charAt(index);
        index++;
        setTimeout(typeWriter, 150); 
    }
}

window.onload = () => {
    setup();
    draw();
    typeWriter();
}


const portal = document.querySelector('.portal');

const dimensiones = [
    "https://paezpablo.github.io/Proyectos-JS/01-Tinder-Swipe/",
    "https://paezpablo.github.io/Proyectos-JS/07-BlackJack/"
];

if (portal) {
    portal.style.cursor = 'pointer';

    portal.addEventListener('click', () => {
        portal.style.transform = 'scale(1.5) rotate(180deg)';
        portal.style.opacity = '0';
        portal.style.filter = 'brightness(2)';

        const randomProject = dimensiones[Math.floor(Math.random() * dimensiones.length)];

        setTimeout(() => {
            window.open(randomProject, '_blank');

            portal.style.transform = 'scale(1) rotate(0deg)';
            portal.style.opacity = '1';
            portal.style.filter = 'brightness(1)';
        },400)
    })
}