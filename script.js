const indexswiper = new Swiper(".indexSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  //add navitagion om bredare än 900px?
  breakpoints: {
    200: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    450: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    900: {
      slidesPerView: 3.5,
      spaceBetween: 0,
    },
    1350: {
      slidesPerView: 4.5,
      spaceBetween: 0,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
