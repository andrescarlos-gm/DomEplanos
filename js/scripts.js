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