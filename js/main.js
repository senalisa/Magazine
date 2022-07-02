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

//LOCAL STORAGE FAVORITE
let changes = document.getElementsByClassName('changeColor')
let boxes = document.getElementsByClassName('box').length;

function save() {
    for(let i = 1; i <= boxes; i++){
        let checkbox = document.getElementById(String(i));
        localStorage.setItem("checkbox" + String(i), checkbox.checked);

        checkbox.oninput = function(){
            //this is called when it changes
            if(checkbox.checked){
              //it is checked
              console.log("checked");

            }else{
              //it isn't checked
              console.log("not");
            }
          }
    }
}

//for loading
for(let i = 1; i <= boxes; i++){
    if(localStorage.length > 0){
        let checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
        document.getElementById(String(i)).checked = checked;
        console.log("loaded favorites")
    }
}
window.addEventListener('change', save);









