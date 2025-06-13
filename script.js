document.addEventListener("DOMContentLoaded", function () {
    const fotoContainer = document.querySelector(".foto-card-container");
    const leftFoto = document.querySelector(".arrow-foto-left");
    const rightFoto = document.querySelector(".arrow-foto-right");

    leftFoto.addEventListener("click", () => {
        fotoContainer.scrollBy({ left: -350, behavior: "smooth" });
    });

    rightFoto.addEventListener("click", () => {
        fotoContainer.scrollBy({ left: 350, behavior: "smooth" });
    });
});
