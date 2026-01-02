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
  } else {
    carousel.style.padding = "6rem 1rem";
  }
}

/* MODAL DE RESERVAS */
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("reservationModal");
  const menuBtn = document.getElementById("openReservation");
  const span = document.querySelector(".close");

  if (!modal || !menuBtn || !span) return; // evita erros se os elementos não existirem

  // Abrir modal ao clicar no botão
  menuBtn.onclick = function () {
    modal.style.display = "block";
  }

  // Fechar modal ao clicar no X
  span.onclick = function () {
    modal.style.display = "none";
  }

  // Fechar modal ao clicar fora dele
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});

/* CAROUSEL */
const items = document.querySelectorAll(".carousel .item");
let current = 0;

function nextSlide() {
  items[current].style.display = "none";
  current = (current + 1) % items.length;
  items[current].style.display = "block";
}

/* CARTA: Toggle abre e fecha a carta */
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.carta-section');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    // Se já está visível, fecha
    if (window.getComputedStyle(targetSection).display !== 'none') {
      targetSection.style.display = 'none';
    } else {
      // Fecha todas as outras seções
      sections.forEach(sec => sec.style.display = 'none');
      // Abre a seção clicada
      targetSection.style.display = 'block';
      // Scroll suave até a seção
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// NAVBAR MOBILE TOGGLE
// =========================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-left');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


/*************************************************** */
//Interatividade (JavaScript) para receber dados preenchidos no form

function enviarForm(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const data = document.getElementById("data").value;
  const reservationTime = document.getElementById("reservationTime").value;
  const guests = document.getElementById("guests").value;

  //mostra o banner
  document.querySelector(".banner-info").style.display = "flex";
  document.querySelector(".banner-info-p").firstElementChild.innerHTML =
    `Obrigado ${nome} , a sua reserva foi agendada para ${data} às ${reservationTime}.
    Estaremos a sua espera.`;
}

/*************************************************************/
//fechar banner, depois de clicar em cima
const banner_info = document.querySelector(".banner-info");
banner_info.addEventListener("click", () => {
  //fecha o banner
  banner_info.style.display = "none";
  //limpa o formulario
  document.getElementById("reservation-form").reset();
});
