// Contador regresivo
document.addEventListener('DOMContentLoaded', () => {
    const timer = document.getElementById('timer');
    const eventDate = new Date('2025-11-22T21:00:00');

    function updateCountdown() {
        const now = new Date();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            timer.textContent = "¡Es hoy!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        timer.textContent = `${days} días | ${hours} horas | ${minutes} minutos | ${seconds} segundos`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
let currentIndex = 0;

function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}
