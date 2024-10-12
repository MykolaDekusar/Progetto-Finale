// Check the user's preference on page load
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}
const button = document.getElementById("darkModeToggle");

function updateButtonText() {
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Attiva light mode";
    } else {
        button.textContent = "Attiva dark mode";
    }
}

button.addEventListener("click", () => {
    toggleDarkMode();
    updateButtonText();
});

// Update button text on page load
updateButtonText();

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save the user's preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}
