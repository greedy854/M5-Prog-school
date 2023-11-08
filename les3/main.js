const dancing = document.getElementById("js--dancing")
const lato = document.getElementById("js--lato")
const merriweather = document.getElementById("js--merriweather")
const input = document.getElementById("js--input")

input.oninput = function(event){
    dancing.innerText = event.target.value;
    lato.innerText = event.target.value;
    merriweather.innerText = event.target.value;
} 

const hearts = document.getElementsByClassName("heart");
for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(){
        for(let i = 0; i < hearts.length; i++){
            hearts[i].children[0].classList = "fa-regular fa-heart heart__logo";
        }
        hearts[i].children[0].classList = "fa-solid fa-heart heart__logo";
    }
}

const darkMode = document.getElementById("toggle--js");
const header = document.querySelector(".header");
const showcase = document.querySelectorAll(".showcase");

darkMode.checked = false;

darkMode.onchange = function () {
    if (darkMode.checked === true) {
        console.log("aan");
        for (const element of showcase) {
            element.style.backgroundColor = "gray";
            element.style.color = "#fbf8f1";
        }
        header.style.backgroundColor = "gray";
        element.style.color = "#fbf8f1";
    } else {
        console.log("uit");
        for (const element of showcase) {
            element.style.backgroundColor = "#fbf8f1";
            element.style.color = "initial";
        }
        header.style.backgroundColor = "#fbf8f1";
        element.style.color = "initial";
    }
};