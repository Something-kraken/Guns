// ===============================
// HOPE - Main Script
// ===============================

const enterScreen = document.getElementById("enter-screen");
const music = document.getElementById("bg-music");

// Click to Enter
enterScreen.addEventListener("click", () => {

    // Fade out enter screen
    enterScreen.classList.add("hide");

    // Start music from 1:45 (105 seconds)
    music.currentTime = 105;

    music.play().catch(() => {
        console.log("Autoplay blocked.");
    });

});

// -------------------------------
// Snow Effect
// -------------------------------

const snow = document.getElementById("snow");

for (let i = 0; i < 120; i++) {

    let flake = document.createElement("span");

    flake.className = "flake";

    flake.style.left = Math.random() * 100 + "%";

    flake.style.animationDelay = Math.random() * 10 + "s";

    flake.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    snow.appendChild(flake);

}

// -------------------------------
// Title Glow Animation
// -------------------------------

const title = document.querySelector(".title");

setInterval(() => {

    title.classList.toggle("pulse");

}, 2000);

// -------------------------------
// Discord Card Hover
// -------------------------------

const card = document.querySelector(".discord-card");

card.addEventListener("mouseenter", () => {

    card.classList.add("active");

});

card.addEventListener("mouseleave", () => {

    card.classList.remove("active");

});

// -------------------------------
// Disable Right Click
// -------------------------------

document.addEventListener("contextmenu", e => {

    e.preventDefault();

});

// -------------------------------
// Disable Ctrl+Shift+I
// -------------------------------

document.onkeydown = function(e){

    if(
        e.keyCode==123 ||
        (e.ctrlKey && e.shiftKey && e.key=="I")
    ){

        return false;

    }

};
