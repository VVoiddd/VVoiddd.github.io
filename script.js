document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.box');

    // Apply the 'show' class to each box to trigger the fade-in animation
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('show');
        }, index * 200); // Stagger animation for a smoother effect
    });
});
