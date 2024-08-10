document.addEventListener("DOMContentLoaded", () => {
    const tools = document.querySelectorAll('.tool');
    tools.forEach((tool, index) => {
        setTimeout(() => {
            tool.classList.add('show');
        }, index * 200);
    });
});
