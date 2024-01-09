// import { Swiper } from "swiper";
// import { EffectCreative } from "swiper/modules";
// import { SwiperOptions } from "swiper/types";
//
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
//
// const domSwiper = document.querySelector(".swiper") as HTMLElement;
// const slidersCount = document.querySelectorAll(".posters-slider .swiper-slide").length;
//
// const calcX = () => {
//   const parentWidth = domSwiper.parentElement?.offsetWidth ?? 0;
//   const currentWidth = domSwiper.offsetWidth;
//
//   let t = (parentWidth - (parentWidth - currentWidth) / 2) / currentWidth;
//
//   return (t = Math.max(t, 1)), 100 * t + "%";
// };

// const swiperOptions: SwiperOptions = {
//   modules: [EffectCreative],
//   effect: "creative",
//   speed: 600,
//   resistanceRatio: 0,
//   grabCursor: true,
//   parallax: true,
//   initialSlide: slidersCount,
//   creativeEffect: {
//     limitProgress: 2,
//     perspective: !0,
//     shadowPerProgress: !0,
//     prev: {
//       shadow: !0,
//       translate: ["-15%", 0, -200],
//     },
//     next: {
//       translate: [calcX(), 0, 0],
//     },
//   },
// };

// const swiper = new Swiper(domSwiper, swiperOptions);

// window.addEventListener("resize", () => {
//   if (swiper && !swiper.destroyed) {
//     const next = swiper.params.creativeEffect?.next;
//
//     if (next) {
//       next.translate = [calcX(), 0, 0];
//
//       swiper.params.resizeObserver && void 0 !== window.ResizeObserver && swiper.update();
//     }
//   }
// });
