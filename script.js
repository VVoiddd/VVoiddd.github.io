document.addEventListener("DOMContentLoaded", function() {
    const settingsBtn = document.getElementById("settings-btn");
    const settingsSidebar = document.getElementById("settings-sidebar");
    const themeOptions = document.querySelectorAll(".theme-option");
    const layoutOptions = document.querySelectorAll(".layout-option");

    // Open/Close the settings sidebar
    settingsBtn.addEventListener("click", function() {
        settingsSidebar.classList.toggle("open");
        settingsBtn.classList.toggle("open");  // Ensure the settings button moves with the sidebar
    });

    // Handle theme change
    themeOptions.forEach(option => {
        option.addEventListener("click", function() {
            const selectedTheme = option.getAttribute("data-theme");
            setTheme(selectedTheme);
            saveThemePreference(selectedTheme);
        });
    });

    // Handle layout change
    layoutOptions.forEach(option => {
        option.addEventListener("click", function() {
            const selectedLayout = option.getAttribute("data-layout");
            setLayout(selectedLayout);
        });
    });

    // Set the theme (based on selection or saved preference)
    function setTheme(theme) {
        document.body.style.transition = "background-color 0.5s, color 0.5s"; // Smooth transition
        switch(theme) {
            case "dark":
                document.body.style.backgroundColor = "#121212";
                document.body.style.color = "#ffffff";
                break;
            case "light":
                document.body.style.backgroundColor = "#ffffff";
                document.body.style.color = "#000000";
                break;
            case "blue":
                document.body.style.backgroundColor = "#001f3d";
                document.body.style.color = "#ffffff";
                break;
            case "green":
                document.body.style.backgroundColor = "#2e8b57";
                document.body.style.color = "#ffffff";
                break;
            case "red":
                document.body.style.backgroundColor = "#b22222";
                document.body.style.color = "#ffffff";
                break;
            case "purple":
                document.body.style.backgroundColor = "#800080";
                document.body.style.color = "#ffffff";
                break;
            case "yellow":
                document.body.style.backgroundColor = "#ffcc00";
                document.body.style.color = "#000000";
                break;
            case "orange":
                document.body.style.backgroundColor = "#ff6600";
                document.body.style.color = "#ffffff";
                break;
            case "pink":
                document.body.style.backgroundColor = "#ff66b2";
                document.body.style.color = "#ffffff";
                break;
            case "gray":
                document.body.style.backgroundColor = "#808080";
                document.body.style.color = "#000000";
                break;
            case "teal":
                document.body.style.backgroundColor = "#008080";
                document.body.style.color = "#ffffff";
                break;
            case "indigo":
                document.body.style.backgroundColor = "#4b0082";
                document.body.style.color = "#ffffff";
                break;
            default:
                document.body.style.backgroundColor = "#121212";
                document.body.style.color = "#ffffff";
        }
    }

    // Set the layout (based on selection)
    function setLayout(layout) {
        document.body.classList.remove("default", "compact", "extended");
        document.body.classList.add(layout);

        // Adjust layouts for the page
        const container = document.querySelector('.container');
        if (layout === "compact") {
            container.style.maxWidth = "400px";
        } else if (layout === "extended") {
            container.style.maxWidth = "800px";
        } else {
            container.style.maxWidth = "600px";
        }
    }

    // Save the theme preference to localStorage
    function saveThemePreference(theme) {
        localStorage.setItem("theme", theme);
    }

    // Save the layout preference to localStorage
    function saveLayoutPreference(layout) {
        localStorage.setItem("layout", layout);
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

    // Load the saved layout from localStorage
    function loadSavedLayout() {
        const savedLayout = localStorage.getItem("layout");
        if (savedLayout) {
            setLayout(savedLayout);
        } else {
            setLayout("default"); // Default to default layout
        }
    }

    // Load saved theme and layout on page load
    loadSavedTheme();
    loadSavedLayout();
});
