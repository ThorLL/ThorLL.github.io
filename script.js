const nav = document.querySelector("nav");

const handleNavToggle = () => {
    nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

const container = document.querySelector('main');
const sections = document.querySelectorAll('section');
const dots = document.querySelectorAll('.scroll-dot');

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.dataset.toggled = i === index ? "true" : "false";
    });
}

// Update dots on scroll
container.addEventListener('scroll', () => {
    const index = Math.round(container.scrollTop / container.clientHeight);
    updateDots(index);
});