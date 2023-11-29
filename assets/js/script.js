// ========================= NAV TOGGLE ========================= //
const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close");

if(navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  })
}

if(navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
}

// ========================= BRAND SWIPER ========================= //
var brandSwiper = new Swiper(".brand-swiper", {
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    450: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  }
})

// ========================= SCROLL HEADER ========================= //
function scrollHeader() {
  const header = document.getElementById('header');
  if(this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

// ========================= ANIME SWIPER ========================= //

var brandSwiper = new Swiper(".anime-swiper", {
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  }
})
