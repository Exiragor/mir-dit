import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper styles
import "swiper/css";

const swiper = new Swiper("#main-swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: "#swiper-arrow-right",
    prevEl: "#swiper-arrow-left",
  },
  modules: [Navigation],

  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1600: {
      slidesPerView: "auto",
    },
  },
});

// Мобильное меню toggle
const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn?.addEventListener("click", () => {
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


// Конфигурация элементов, которые нужно превращать в Swiper на мобильных
const swiperConfig = [
  {
    element: '.licenses__slider',         // Основной элемент (получит класс swiper)
    wrapper: '.licenses__slider > div',  // Внутренний элемент (получит класс swiper-wrapper)
    breakpoint: 1024,            // Брейкпоинт для этого элемента
    swiperConfig: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".licenses__arrow--next",
        prevEl: ".licenses__arrow--prev",
      },
      modules: [Navigation],
    },
  },

  {
    element: '.business-model__slider',         // Основной элемент (получит класс swiper)
    wrapper: '.business-model__slider > div',  // Внутренний элемент (получит класс swiper-wrapper)
    breakpoint: 768,            // Брейкпоинт для этого элемента
    swiperConfig: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".business-model__arrow--next",
        prevEl: ".business-model__arrow--prev",
      },
      modules: [Navigation],
    },
  },
];

const swipersMap = new Map();

function toggleSwiperClasses() {
  swiperConfig.forEach(config => {
    const element = document.querySelector(config.element);
    if (!element) return;

    const wrapper = element.querySelector(config.wrapper);
    if (!wrapper) return;

    if (window.innerWidth < config.breakpoint) {
      element.classList.add('swiper');
      wrapper.classList.add('swiper-wrapper');
      swipersMap.set(config.element, new Swiper(config.element, config.swiperConfig));
    } else {
      
      if (swipersMap.has(config.element)) {
        swipersMap.get(config.element).destroy();
        swipersMap.delete(config.element);
      }
      element.classList.remove('swiper');
      wrapper.classList.remove('swiper-wrapper');
    }
  });
}

// Функция для оптимизации обработки события resize
function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', toggleSwiperClasses);

// Обработка изменения размера окна
window.addEventListener('resize', debounce(toggleSwiperClasses));

// Дополнительный вызов для случаев, когда страница загружается уже с нужным размером
window.addEventListener('load', toggleSwiperClasses);