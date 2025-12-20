/* script para menu responsivo */
const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");
const carousel = document.querySelector(".carousel");

// Ao clicar no botão, liga/desliga a classe 'aberto'
btn.addEventListener("click", () => {
    addClassList(menu);
    toogleSlideMenu(menu);
});

function addClassList(element) {
    element.classList.toggle("aberto");
}

function toogleSlideMenu(element) {
    if (element.classList.contains('aberto')) {
        carousel.style.padding = "7rem 1rem";
    }
    else {
        carousel.style.padding = "1rem";
    }
}
