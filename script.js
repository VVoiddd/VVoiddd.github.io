document.addEventListener("DOMContentLoaded", function() {
    // Get the tooltip element
    const tooltip = document.getElementById("tooltip");

    // Check if the tooltip element exists
    if (!tooltip) {
        console.error("Tooltip element not found!");
        return;
    }

    // Get all buttons
    const buttons = document.querySelectorAll(".social-btn");

    // Show tooltip on hover over buttons
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function(event) {
            let message = "";

            // Define different messages for each button
            if (button.id === "twitch-btn") {
                message = "Visit my Twitch channel where I stream mainly gaming like Kick!";
            } else if (button.id === "kick-btn") {
                message = "Check out my Kick streams for gaming and other shenanigans!";
            } else if (button.id === "github-btn") {
                message = "View my GitHub for open-source projects and contributions.";
            }

            showTooltip(event, message);
        });

        // Hide tooltip when mouse leaves the button
        button.addEventListener("mouseleave", function() {
            hideTooltip();
        });
    });

    // Tooltip function to show the message
    function showTooltip(event, message) {
        tooltip.textContent = message;
        tooltip.style.display = "block";
        tooltip.style.left = `${event.pageX + 10}px`; // Add some offset for better positioning
        tooltip.style.top = `${event.pageY + 10}px`;
    }

    // Hide tooltip function
    function hideTooltip() {
        tooltip.style.display = "none";
    }
});
