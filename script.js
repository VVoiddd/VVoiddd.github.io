document.addEventListener("DOMContentLoaded", () => {
    const tools = document.querySelectorAll('.tool');

    // Apply the 'show' class to each tool to trigger the fade-in animation
    tools.forEach((tool, index) => {
        setTimeout(() => {
            tool.classList.add('show');
        }, index * 200); // Stagger animation for a smoother effect
    });
});
