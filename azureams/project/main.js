let btn = document.getElementById("btn")
let jumpscare = document.getElementsByClassName("jumpscare")
let audio = document.getElementById("scream")
// function toggleBtn(){
//     btn.classList.toggle("active")
//     jumpscare[0].classList.toggle("on")
// }


console.log(jumpscare[0]);
btn.addEventListener("click", function() {
    btn.classList.toggle("active")
    if(jumpscare[0].style.display === "none") {
        jumpscare[0].style.display = "block";
        audio.play()

    } else {
        jumpscare[0].style.display = "none"
    }
})