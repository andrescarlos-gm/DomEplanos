// Carousel.Js
const slidesContainer = document.querySelector(".slides-container");
const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
	slidesContainer.scrollLeft += slideWidth * 2;
});

prevButton.addEventListener("click", () => {
	slidesContainer.scrollLeft -= slideWidth * 2;
});

// Función para simular el clic en el botón next
function clickNextButton() {
	nextButton.click();
}

// Variable para almacenar el temporizador
let timer;

// Crear un Intersection Observer para observar el carrusel
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Si el carrusel es visible en el viewport
    if (entry.isIntersecting) {
      // Iniciar el temporizador después de 4 segundos
      timer = setTimeout(() => {
        clickNextButton();
        // Detener el temporizador después de mover el carrusel
        clearTimeout(timer);
      }, 3000); // 4 segundos
      // Dejar de observar el carrusel después de moverlo
      observer.unobserve(entry.target);
    }
  });
});

// Observar el carrusel
observer.observe(slidesContainer);


  

// Cerrar menu hamburguesa al clickear en un elemento

const menuItems = document.querySelectorAll('.menu li a');
const toggler = document.querySelector('.toggler');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
	toggler.checked = false;
  });
});

// Inicializacion de animate on scroll (AOS)
AOS.init();
