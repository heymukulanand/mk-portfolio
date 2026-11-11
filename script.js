
// Find the theme button on the webpage
const themeButton = document.getElementById("theme-toggle");

// Listen for a click on the button
themeButton.addEventListener("click", function () {

    // Check which theme is currently active
    const currentTheme = document.body.getAttribute("data-theme");

    // Switch between dark and light themes
    if (currentTheme === "light") {

        document.body.removeAttribute("data-theme");
        themeButton.textContent = "☀️ Light mode";

    } else {

        document.body.setAttribute("data-theme", "light");
        themeButton.textContent = "🌙 Dark mode";

    }

});
