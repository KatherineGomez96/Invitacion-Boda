// Contador regresivo
document.addEventListener('DOMContentLoaded', () => {
    const timer = document.getElementById('timer');
    const eventDate = new Date('YYYY-MM-DDTHH:MM:SS');

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

        timer.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
