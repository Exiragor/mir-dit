import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper styles
import "swiper/css";

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


// Конфигурация элементов, которые нужно превращать в Swiper
const swiperConfig = [
  {
    element: '#main-swiper',         // Основной элемент
    wrapper: '#main-swiper > div',   // Внутренний элемент
    breakpoint: {
      min: 361,  // Минимальная ширина (работает от 361px)
      max: Infinity  // Максимальная ширина (до бесконечности)
    },
    swiperConfig: {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: "#swiper-arrow-right",
        prevEl: "#swiper-arrow-left",
      },
      modules: [Navigation],
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: "auto",
        },
      },
    },
  },
  {
    element: '.licenses__slider',
    wrapper: '.licenses__slider > div',
    breakpoint: {
      min: 0,      // Работает от 0px
      max: 1023    // До 1023px
    },
    swiperConfig: {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".licenses__arrow--next",
        prevEl: ".licenses__arrow--prev",
      },
      modules: [Navigation],
    },
  },
  {
    element: '.business-model__slider',
    wrapper: '.business-model__slider > div',
    breakpoint: {
      min: 0,      // Работает от 0px
      max: 767     // До 767px
    },
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

    const windowWidth = window.innerWidth;
    const shouldBeSwiper = windowWidth >= config.breakpoint.min && windowWidth <= config.breakpoint.max;

    if (shouldBeSwiper) {
      // Если нужно активировать Swiper
      if (!swipersMap.has(config.element)) {
        element.classList.add('swiper');
        wrapper.classList.add('swiper-wrapper');
        // Добавляем классы к слайдам
        const slides = wrapper.children;
        for (let i = 0; i < slides.length; i++) {
          slides[i].classList.add('swiper-slide');
        }
        swipersMap.set(config.element, new Swiper(config.element, config.swiperConfig));
      }
    } else {
      element.classList.remove('swiper');
        wrapper.classList.remove('swiper-wrapper');
        // Убираем классы со слайдов
        const slides = wrapper.children;
        for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove('swiper-slide');
        }
      // Если нужно деактивировать Swiper
      if (swipersMap.has(config.element)) {
        swipersMap.get(config.element).destroy();
        swipersMap.delete(config.element);
      }
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

class MobileMenu {
    constructor() {
        this.burgerMenu = document.getElementById('burgerMenu');
        this.mobileNav = document.getElementById('mobileNav');
        this.closeMenu = document.getElementById('closeMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        // Открытие меню
        this.burgerMenu.addEventListener('click', () => {
            this.open();
        });
        
        // Закрытие меню
        this.closeMenu.addEventListener('click', () => {
            this.close();
        });
        
        // Закрытие при клике на ссылку
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.close();
            });
        });
        
        // Закрытие при нажатии Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mobileNav.classList.contains('active')) {
                this.close();
            }
        });
    }
    
    toggleMenu(isOpen) {
        if (isOpen) {
            this.mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            this.mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Метод для программного открытия/закрытия
    open() {
        this.toggleMenu(true);
    }
    
    close() {
        this.toggleMenu(false);
    }
}

// Инициализация меню при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
});

// Активайия табов
document.addEventListener('DOMContentLoaded', function() {
  // Получаем все элементы вкладок и слайдов
  const tabs = document.querySelectorAll('.business-model__tab');
  const slides = document.querySelectorAll('.business-model__slide');
  
  // Функция для активации вкладки и слайда
  function activateTab(tabIndex) {
      // Убираем активный класс со всех вкладок
      tabs.forEach(tab => {
          tab.classList.remove('business-model__tab--active');
      });
      
      // Добавляем активный класс выбранной вкладке
      tabs[tabIndex].classList.add('business-model__tab--active');
      
      // Убираем активный класс со всех слайдов
      slides.forEach(slide => {
          slide.classList.remove('business-model__slide--active');
      });
      
      // Добавляем активный класс выбранному слайду
      slides[tabIndex].classList.add('business-model__slide--active');
  }
  
  // Добавляем обработчики кликов на вкладки
  tabs.forEach((tab, tabIndex) => {
      tab.addEventListener('click', function() {
          activateTab(tabIndex);
      });
  });

  activateTab(3);
});