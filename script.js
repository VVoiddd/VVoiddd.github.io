document.addEventListener("DOMContentLoaded", function() {
    const themeButtons = document.querySelectorAll(".theme-btn");

    // Handle theme change
    themeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const selectedTheme = button.getAttribute("data-theme");
            setTheme(selectedTheme);
            saveThemePreference(selectedTheme);
        });
    });

    // Set the theme with a smooth transition
    function setTheme(theme) {
        document.body.classList.remove("dark", "light", "blue");
        document.body.classList.add(theme);
    }

    // Save the theme preference to localStorage
    function saveThemePreference(theme) {
        localStorage.setItem("theme", theme);
    }

    // Load the saved theme from localStorage
    function loadSavedTheme() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme("dark"); // Default to dark theme
        }
    }

    // Load saved theme on page load
    loadSavedTheme();
});
