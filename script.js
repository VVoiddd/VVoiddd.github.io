// Show tooltip on hover over buttons
document.getElementById("twitch-btn").addEventListener("mouseenter", function() {
    showTooltip("Visit my Twitch channel where I stream mainly gaming like Kick!.");
});
document.getElementById("kick-btn").addEventListener("mouseenter", function() {
    showTooltip("Check out my Kick streams for gaming and other shenanigans!");
});
document.getElementById("github-btn").addEventListener("mouseenter", function() {
    showTooltip("View my GitHub for open-source projects and contributions.");
});

document.querySelectorAll(".social-btn").forEach(button => {
    button.addEventListener("mouseleave", function() {
        hideTooltip();
    });
});

function showTooltip(message) {
    const tooltip = document.getElementById("tooltip");
    tooltip.textContent = message;
    tooltip.style.display = "block";
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
}

function hideTooltip() {
    const tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}
