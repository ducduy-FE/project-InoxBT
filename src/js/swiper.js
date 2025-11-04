import Swiper from "swiper";
import {
  Autoplay,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";

/**
 * @param swiperInit
 */
export function swiperInit() {
  new Swiper(".section-home-banner", {
    effect: "fade",
    loop: true,
    modules: [Pagination, Navigation, Autoplay, EffectFade], // ⚡ modules khai báo ở đây
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".section-home-banner .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `
        <div class=" ${className}">
          <div class=' img-ratio ratio:pt-[150_150] img-pagination'>
            <img src="./img/1.jpg" alt="" class="object-cover"/>
          </div>
        </div>`;
      },
    },
    navigation: {
      nextEl: ".section-home-banner .btn-next",
      prevEl: ".section-home-banner .btn-prev",
    },
    breakpoints: {
      0: {
        // 🔹 Khi màn hình < 490px
        pagination: {
          el: ".section-home-banner .swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            // Dấu chấm đơn giản
            return `<span class="${className}"></span>`;
          },
        },
      },
      490: {
        // 🔹 Khi màn hình >= 490px (dùng lại ảnh)
        pagination: {
          el: ".section-home-banner .swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `
            <div class="${className}">
              <div class='img-ratio ratio:pt-[150_150] img-pagination'>
                <img src="./img/1.jpg" alt="" class="object-cover"/>
              </div>
            </div>`;
          },
        },
      },
    },
  });
  new Swiper(".swiper-service", {
    loop: true,
    // autoplay: {
    //   delay: 3500,
    // },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    modules: [Pagination, Navigation, Autoplay], // ⚡ modules khai báo ở đây
  });
  new Swiper(".swiper-product", {
    spaceBetween: 24,
    breakpoints: {
      0: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3.5,
      },
      1200: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: ".btn-navigation-next",
      prevEl: ".btn-navigation-prev",
    },
    modules: [Navigation],
  });
  new Swiper(".swiper-section-6", {
    spaceBetween: 24,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 3,
      }
    },
  });
}
