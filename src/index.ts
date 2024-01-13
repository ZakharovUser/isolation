import { Swiper } from "swiper";
import { Pagination, Autoplay, EffectFade, Navigation, EffectCreative } from "swiper/modules";

createPromoSlider(document.querySelector(".promo-swiper"));
createWorksSlider(document.querySelector(".works-swiper"));

/* Promo slider */
function createPromoSlider(element: Element | null) {
  if (!element) return null;

  return new Swiper(element as HTMLElement, {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true,
    },
    modules: [Pagination, Autoplay, EffectFade],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletActiveClass: "promo-swiper__bullet_active",
    },
  });
}

/* Works slider */
function createWorksSlider(element: Element | null) {
  if (!element) return null;

  return new Swiper(element as HTMLElement, {
    loop: true,
    modules: [Navigation, EffectCreative],
    effect: "creative",
    centeredSlides: true,
    creativeEffect: {
      perspective: true,
      limitProgress: 2,
      shadowPerProgress: true,
      next: {
        translate: ["calc(115%)", 0, "-250px"],
      },
      prev: {
        translate: ["calc(-115%)", 0, "-250px"],
      },
    },
    slidesPerView: 1.5,
    navigation: {
      nextEl: ".works-swiper-navigation__next-slide",
      prevEl: ".works-swiper-navigation__prev-slide",
    },
  });
}
