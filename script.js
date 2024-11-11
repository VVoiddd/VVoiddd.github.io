document.addEventListener("DOMContentLoaded", function() {
    const settingsBtn = document.getElementById("settings-btn");
    const settingsSidebar = document.getElementById("settings-sidebar");
    const themeOptions = document.querySelectorAll(".theme-option");

    // Open/Close the settings sidebar
    settingsBtn.addEventListener("click", function() {
        settingsSidebar.classList.toggle("open");
    });

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
        document.body.style.transition = "background-color 0.5s, color 0.5s"; // Smooth transition
        if (theme === "dark") {
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "#ffffff";
        } else if (theme === "light") {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
        } else if (theme === "blue") {
            document.body.style.backgroundColor = "#001f3d";
            document.body.style.color = "#ffffff";
        } else if (theme === "green") {
            document.body.style.backgroundColor = "#2e8b57";
            document.body.style.color = "#ffffff";
        } else if (theme === "red") {
            document.body.style.backgroundColor = "#b22222";
            document.body.style.color = "#ffffff";
        } else if (theme === "purple") {
            document.body.style.backgroundColor = "#800080";
            document.body.style.color = "#ffffff";
        } else if (theme === "yellow") {
            document.body.style.backgroundColor = "#ffcc00";
            document.body.style.color = "#000000";
        } else if (theme === "orange") {
            document.body.style.backgroundColor = "#ff6600";
            document.body.style.color = "#ffffff";
        } else if (theme === "pink") {
            document.body.style.backgroundColor = "#ff66b2";
            document.body.style.color = "#ffffff";
        } else if (theme === "gray") {
            document.body.style.backgroundColor = "#808080";
            document.body.style.color = "#000000";
        } else if (theme === "teal") {
            document.body.style.backgroundColor = "#008080";
            document.body.style.color = "#ffffff";
        } else if (theme === "indigo") {
            document.body.style.backgroundColor = "#4b0082";
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
