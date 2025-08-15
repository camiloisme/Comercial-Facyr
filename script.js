document.addEventListener("DOMContentLoaded", function () {
    const abrir = document.getElementById("abrir");
    const cerrar = document.getElementById("cerrar");
    const nav = document.querySelector(".nav");

    abrir.addEventListener("click", () => {
        nav.classList.add("activo");
});

    cerrar.addEventListener("click", ()=> {
        nav.classList.remove("activo");
    });
});