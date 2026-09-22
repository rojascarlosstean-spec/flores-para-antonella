document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const garden = document.getElementById("garden");
    const flowerButton = document.getElementById("flowerButton");

    const openLetter = document.getElementById("openLetter");
    const closeLetter = document.getElementById("closeLetter");
    const letterOverlay = document.getElementById("letterOverlay");


    /* =========================
       CAMBIAR DE ESCENA
    ========================= */

    flowerButton.addEventListener("click", () => {

        intro.classList.add("hidden");

        setTimeout(() => {
            garden.classList.add("visible");
        }, 800);

    });


    /* =========================
       ABRIR CARTA
    ========================= */

    openLetter.addEventListener("click", () => {

        letterOverlay.classList.add("visible");

    });


    /* =========================
       CERRAR CARTA
    ========================= */

    closeLetter.addEventListener("click", () => {

        letterOverlay.classList.remove("visible");

    });


    /* =========================
       CERRAR AL HACER CLICK FUERA
    ========================= */

    letterOverlay.addEventListener("click", (event) => {

        if (event.target === letterOverlay) {

            letterOverlay.classList.remove("visible");

        }

    });


    /* =========================
       ESC PARA CERRAR
    ========================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            letterOverlay.classList.remove("visible");

        }

    });


    /* =========================
       CREAR FLORES DEL CAMPO
    ========================= */

    const flowersContainer = document.querySelector(".flowers");

    for (let i = 0; i < 45; i++) {

        const flower = document.createElement("div");

        flower.innerHTML = "🌻";

        flower.style.position = "absolute";
        flower.style.left = Math.random() * 100 + "%";
        flower.style.bottom = Math.random() * 80 + "%";
        flower.style.fontSize = (10 + Math.random() * 18) + "px";
        flower.style.opacity = 0.35 + Math.random() * 0.5;

        flowersContainer.appendChild(flower);

    }


    /* =========================
       CREAR LUCIÉRNAGAS
    ========================= */

    const fireflies = document.querySelector(".fireflies");

    for (let i = 0; i < 25; i++) {

        const firefly = document.createElement("div");

        firefly.style.position = "absolute";
        firefly.style.width = "4px";
        firefly.style.height = "4px";
        firefly.style.borderRadius = "50%";
        firefly.style.background = "#fde68a";

        firefly.style.left = Math.random() * 100 + "%";
        firefly.style.top = 35 + Math.random() * 55 + "%";

        firefly.style.boxShadow =
            "0 0 10px 3px rgba(253, 230, 138, 0.6)";

        firefly.style.animation =
            `fireflyMove ${3 + Math.random() * 5}s ease-in-out infinite`;

        firefly.style.animationDelay =
            Math.random() * 5 + "s";

        fireflies.appendChild(firefly);

    }


    /* =========================
       CREAR ESTRELLAS
    ========================= */

    const stars = document.querySelectorAll(".stars");

    stars.forEach((starContainer) => {

        for (let i = 0; i < 35; i++) {

            const star = document.createElement("span");

            star.style.position = "absolute";
            star.style.width = "2px";
            star.style.height = "2px";
            star.style.borderRadius = "50%";
            star.style.background = "white";

            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 70 + "%";

            star.style.opacity = Math.random();

            starContainer.appendChild(star);

        }

    });


    /* =========================
       CREAR PÉTALOS
    ========================= */

    const petals = document.querySelector(".petals");

    for (let i = 0; i < 15; i++) {

        const petal = document.createElement("div");

        petal.innerHTML = "🌼";

        petal.style.position = "absolute";
        petal.style.left = Math.random() * 100 + "%";
        petal.style.top = "-20px";
        petal.style.fontSize = "12px";
        petal.style.opacity = "0.4";

        petal.style.animation =
            `fallPetal ${8 + Math.random() * 8}s linear infinite`;

        petal.style.animationDelay =
            Math.random() * 10 + "s";

        petals.appendChild(petal);

    }

});


/* =========================
   ANIMACIONES
========================= */

const style = document.createElement("style");

style.innerHTML = `

@keyframes fireflyMove {

    0% {
        transform: translate(0, 0);
        opacity: 0.2;
    }

    50% {
        transform: translate(
            ${Math.random() * 60 - 30}px,
            ${Math.random() * 60 - 30}px
        );
        opacity: 1;
    }

    100% {
        transform: translate(0, 0);
        opacity: 0.2;
    }

}


@keyframes fallPetal {

    0% {
        transform: translateY(-20px) rotate(0deg);
        opacity: 0;
    }

    10% {
        opacity: 0.5;
    }

    90% {
        opacity: 0.5;
    }

    100% {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
    }

}

`;

document.head.appendChild(style);
