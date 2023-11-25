document.addEventListener('DOMContentLoaded', () => {
    const snowToggle = document.getElementById('snow-toggle');
    const rgbToggle = document.getElementById('rgb-toggle');
    const colorPicker = document.getElementById('color-picker');
    let isRgbEnabled = true;

    // Toggle snow effect
    snowToggle.addEventListener('change', () => {
        const snowfall = document.getElementById('snowfall');
        if (snowfall) {
            snowfall.style.display = snowToggle.checked ? 'block' : 'none';
        }
    });

    // Toggle RGB glow
    rgbToggle.addEventListener('click', () => {
        isRgbEnabled = !isRgbEnabled;
        document.body.classList.toggle('rgb-glow', isRgbEnabled);
        colorPicker.style.display = isRgbEnabled ? 'none' : 'block';

        // Reset to purple glow if RGB is turned off
        const elementsToColor = document.querySelectorAll('header, section');
        if (!isRgbEnabled) {
            elementsToColor.forEach(el => {
                el.style.borderImage = '';
                el.style.border = '3px solid #5e0f80'; // Default purple border
            });
        } else {
            elementsToColor.forEach(el => {
                el.style.border = '';
            });
        }
    });

    // Apply selected color when RGB is disabled
    colorPicker.addEventListener('input', () => {
        if (!isRgbEnabled) {
            document.querySelectorAll('header, section').forEach(el => {
                el.style.border = `3px solid ${colorPicker.value}`;
            });
        }
    });
});
