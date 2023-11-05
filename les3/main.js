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