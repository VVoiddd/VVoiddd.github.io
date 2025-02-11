document.addEventListener("DOMContentLoaded", () => {
    const cheatSheetContainer = document.getElementById("cheatSheet");
    const searchInput = document.getElementById("search");
    const darkModeToggle = document.getElementById("darkModeToggle");

    let darkMode = localStorage.getItem("darkMode") === "enabled";
    if (darkMode) document.body.classList.add("dark-mode");

    darkModeToggle.addEventListener("click", () => {
        darkMode = !darkMode;
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
    });

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(category => {
                const categorySection = document.createElement("section");
                categorySection.classList.add("category");

                const categoryTitle = document.createElement("h2");
                categoryTitle.textContent = category;
                categorySection.appendChild(categoryTitle);

                const categoryItems = document.createElement("div");
                categoryItems.classList.add("category-items");

                data[category].forEach(item => {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.innerHTML = `<h3>${item.name}</h3><p>🧂 ${item.spice}</p>`;
                    categoryItems.appendChild(card);
                });

                categorySection.appendChild(categoryItems);
                cheatSheetContainer.appendChild(categorySection);
            });
        });

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll(".card").forEach(card => {
            const name = card.querySelector("h3").textContent.toLowerCase();
            card.style.display = name.includes(query) ? "block" : "none";
        });
    });
});
