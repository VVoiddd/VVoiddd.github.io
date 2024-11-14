document.addEventListener("DOMContentLoaded", function() {
    const themeOptions = document.querySelectorAll(".theme-option");

    // Handle theme change
    themeOptions.forEach(option => {
        option.addEventListener("click", function() {
            const selectedTheme = option.getAttribute("data-theme");
            setTheme(selectedTheme);
            saveThemePreference(selectedTheme);
        });
    });

    // Set the theme (based on selection or saved preference)
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
