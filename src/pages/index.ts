import { Swiper } from "swiper";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

/* Promo slider */

const promoSlider = document.querySelector(".promo-swiper") as HTMLElement;

new Swiper(promoSlider, {
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
