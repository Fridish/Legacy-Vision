document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiperMovie', {
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

    function checkViewportWidth() {
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

        // Adjust this value based on the resolution at which you want to disable Swiper
        var disableWidth = 768;

        if (viewportWidth <= disableWidth) {
            // Disable Swiper
            swiper.destroy();
        } else {
            // Enable Swiper
            swiper = new Swiper('.swiperMovie', {
                // Swiper options go here
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
        }
    }

    // Initial check
    checkViewportWidth();

    // Check on window resize
    window.addEventListener('resize', checkViewportWidth);
});

const indexswiper = new Swiper(".indexSwiper", {
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiperMovie", {
    speed: 400,
    spaceBetween: 100,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
const indexSwiper = new Swiper(".indexSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  breakpoints: {
    200: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    520: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1350: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
  },
});
