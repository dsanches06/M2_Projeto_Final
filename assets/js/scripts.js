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

/* MODAL DE RESERVAS - corrigido */
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("reservationModal");
    const menuBtn = document.getElementById("openReservation");
    const span = document.querySelector(".close");

    if (!modal || !menuBtn || !span) return; // evita erros se os elementos não existirem

    // Abrir modal ao clicar no botão
    menuBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Fechar modal ao clicar no X
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fechar modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

/* GALERIA: abrir imagem em nova aba (opcional) */
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    window.open(img.src, '_blank'); // abre imagem em nova aba
  });
});

/* CAROUSEL */
const items = document.querySelectorAll(".carousel .item");
let current = 0;

function nextSlide() {
  items[current].style.display = "none";
  current = (current + 1) % items.length;
  items[current].style.display = "block";
}
