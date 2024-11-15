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
        document.body.classList.remove("dark", "light", "blue", "red", "green", "purple");
        document.body.classList.add(theme);
    }

    function saveThemePreference(theme) {
        localStorage.setItem("theme", theme);
    }

    function loadSavedTheme() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme("dark");
        }
    }

    loadSavedTheme();
});
