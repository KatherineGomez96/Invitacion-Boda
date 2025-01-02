/* assets/js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const countdown = document.getElementById('timer');
    const eventDate = new Date('YYYY-MM-DDTHH:MM:SS');
    
    const updateCountdown = () => {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            countdown.textContent = "¡Es hoy!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdown.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos.`;
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
