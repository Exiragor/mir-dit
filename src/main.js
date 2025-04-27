import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '#swiper-arrow-right',
    prevEl: '#swiper-arrow-left',
  },
  modules: [Navigation],
});

// Мобильное меню toggle
const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Раскрытие подменю в мобильной версии
const dropdowns = document.querySelectorAll(
  ".mobile-menu li > a:not(:only-child)"
);

dropdowns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const submenu = item.nextElementSibling;

    // Закрываем все открытые подменю, кроме текущего
    document.querySelectorAll(".mobile-menu ul ul").forEach((menu) => {
      if (menu !== submenu) {
        menu.classList.add("hidden");
      }
    });

    // Переключаем текущее подменю
    if (submenu) {
      submenu.classList.toggle("hidden");
      e.preventDefault();
    }
  });
});
