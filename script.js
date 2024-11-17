document.addEventListener("DOMContentLoaded", function () {
    const themeButtons = document.querySelectorAll(".theme-btn");

    themeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedTheme = button.getAttribute("data-theme");
            setTheme(selectedTheme);
            saveThemePreference(selectedTheme);
        });
    });

    function setTheme(theme) {
        // Remove all existing theme classes
        document.body.classList.remove(
            "dark", "light", "blue", "red", "green", "purple",
            "ocean", "sunset", "forest", "cyberpunk", "space", "vintage"
        );
        
        // Add the selected theme class
        document.body.classList.add(theme);
    }

    function saveThemePreference(theme) {
        // Save the selected theme in localStorage
        localStorage.setItem("theme", theme);
    }

    function loadSavedTheme() {
        // Load the saved theme from localStorage (if any)
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            // Default to dark theme if no theme is saved
            setTheme("dark");
        }
    }

    loadSavedTheme(); // Load the saved theme on page load
});
