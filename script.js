
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiperMovie', {
        speed: 400,
        spaceBetween: 100,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // When window width is <= 767px
            767: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            // When window width is <= 991px
            991: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // When window width is <= 1199px
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});
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
