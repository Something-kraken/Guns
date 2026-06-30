// ===============================
// FLY V2 - Main Script
// ===============================

const enterScreen = document.getElementById("enter-screen");
const music = document.getElementById("bg-music");
const card = document.querySelector(".discord-card");
const title = document.querySelector(".title");

// ===============================
// Click to Enter
// ===============================

enterScreen.addEventListener("click", () => {

    enterScreen.classList.add("hide");

    music.currentTime = 105;

    music.play().catch(() => {
        console.log("Autoplay blocked.");
    });

});

// ===============================
// Snow Effect
// ===============================

const snow = document.getElementById("snow");

for(let i = 0; i < 120; i++){

    const flake = document.createElement("span");

    flake.className = "flake";

    flake.style.left = Math.random() * 100 + "%";

    flake.style.animationDelay =
        Math.random() * 10 + "s";

    flake.style.animationDuration =
        (6 + Math.random() * 8) + "s";

    flake.style.opacity =
        0.2 + Math.random() * 0.8;

    flake.style.transform =
        `scale(${0.5 + Math.random()})`;

    snow.appendChild(flake);

}

// ===============================
// Title Glow
// ===============================

setInterval(() => {

    title.classList.toggle("pulse");

}, 3000);

// ===============================
// Floating Profile Card
// ===============================

let angle = 0;

setInterval(() => {

    angle += 0.03;

    if(!card.matches(":hover")){

        card.style.transform =
            `translateY(${Math.sin(angle) * 6}px)`;

    }

},16);

// ===============================
// 3D Card Tilt
// ===============================

card.addEventListener("mousemove",(e)=>{

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY =
        (x - rect.width / 2) / 18;

    const rotateX =
        -(y - rect.height / 2) / 18;

    card.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(${Math.sin(angle) * 6}px)
    `;

});

card.addEventListener("mouseleave",()=>{

    card.style.transform =
        `translateY(${Math.sin(angle) * 6}px)`;

});

// ===============================
// Social Icon Hover
// ===============================

document.querySelectorAll(".icons a").forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform =
            "translateY(-7px) scale(1.08)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform =
            "translateY(0px) scale(1)";

    });

});