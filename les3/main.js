const dancing = document.getElementById("js--dancing")
const lato = document.getElementById("js--lato")
const merriweather = document.getElementById("js--merriweather")
const input = document.getElementById("js--input")

input.oninput = function(event){
    dancing.innerText = event.target.value;
    lato.innerText = event.target.value;
    merriweather.innerText = event.target.value;
} 