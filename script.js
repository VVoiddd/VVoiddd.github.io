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

    // Set the theme based on selection or saved preference
    function setTheme(theme) {
        if (theme === "dark") {
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "#ffffff";
        } else if (theme === "light") {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
        } else if (theme === "blue") {
            document.body.style.backgroundColor = "#001f3d";
            document.body.style.color = "#ffffff";
        }
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
