// Global Vars
//
//
// GITHUB Opdracht 3 - Detailweergave
// Alle buttons van met data-target worden opgehaald
document.querySelectorAll("button[data-target]").forEach(el => {

    //Click-event listener wordt toegevoegd
    el.addEventListener("click", ev => {

        //Alle divs met de class worden opgehaald met info uit de gekozen steden.
        let divs = document.getElementsByClassName("infoClass");
        //Als er op de buttons geklikt word, haal de inhoud van de divs weg.
        for (let div of divs) {
            div.style = "display: none;";
        }

        //Als er op een button wordt geklikt, dan wordt de bijbehorende data met de div er bij gehaald en getoont
        document.getElementById(el.getAttribute("data-target")).style = "display: block;";
    });
});

//Local Storage Favorite
const toggleBtn = document.getElementById("toggle-btn");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
    toggleBtn.classList.remove("dark-mode-toggle");
    toggleBtn.classList.add("dark-mode-toggle-no");
    localStorage.setItem("dark-mode", "enabled");
    console.log("favorited")
};

const disableDarkMode = () => {
    toggleBtn.classList.remove("dark-mode-toggle-no");
    toggleBtn.classList.add("dark-mode-toggle");
    localStorage.setItem("dark-mode", "disabled");
    console.log("un-favorited")
};

// set state of darkMode on page load
if (darkMode === "enabled") {
    enableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
    // update darkMode when clicked
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});









