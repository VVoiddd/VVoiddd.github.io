document.addEventListener('DOMContentLoaded', () => {
    const snowToggle = document.getElementById('snow-toggle');

    // Toggle snow effect
    snowToggle.addEventListener('change', () => {
        const snowfall = document.getElementById('snowfall');
        if (snowfall) {
            snowfall.style.display = snowToggle.checked ? 'block' : 'none';
        }
    });

    // Apply dark mode and white pulse effect
    document.body.classList.add('dark-mode');
    const elementsToPulse = document.querySelectorAll('header, section');
    elementsToPulse.forEach(el => {
        el.classList.add('white-pulse');
    });
});
