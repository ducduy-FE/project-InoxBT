import lozad from "lozad";
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
			},
		},
	});
	new Swiper(".swiper-detail", {
		modules: [Navigation, Autoplay],
		loop: true,
		centeredSlides: true, // đặt slide active ở giữa
		slidesPerView: 1.5, // 👈 cho “peek” 1.5 slide
		spaceBetween: 20, // khoảng giữa các slide
		navigation: {
			nextEl: ".swiper-detail .btn-next",
			prevEl: ".swiper-detail .btn-prev",
		},
		autoplay: {
			delay: 400000000,
			disableOnInteraction: false,
		},
		breakpoints: {
			0: { slidesPerView: 1, spaceBetween: 12 }, // nhỏ: chỉ thấy 1 gần đầy
			768: { slidesPerView: 1.2, spaceBetween: 16 },
			1024: { slidesPerView: 1.5, spaceBetween: 20 }, // desktop: thấy 1.5
			1400: { slidesPerView: 1.5, spaceBetween: 20 }, // nếu muốn thấy hơn 1/2
		},
		// event: thêm class cho slide active => phóng to/opacity
		on: {
			init(swiper) {
				updateActiveClass(swiper);
			},
			slideChangeTransitionEnd(swiper) {
				updateActiveClass(swiper);
			},
		},
	});

	function updateActiveClass(swiper) {
		swiper.slides.forEach((s) => {
			s.classList.remove("scale-100", "opacity-100");
			s.classList.add("scale-90", "opacity-80");
		});
		const active = swiper.slides[swiper.activeIndex];
		if (active) {
			active.classList.remove("scale-90", "opacity-80");
			active.classList.add("scale-100", "opacity-100");
		}
	}
	new Swiper(".section-detail-2 .swiper-install", {
		modules: [Navigation, Pagination, Autoplay],
		slidesPerView: 4,
		spaceBetween: 40,
		loop: false,
		autoplay: {
			delay: 40000000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-install .btn-next",
			prevEl: ".swiper-install .btn-prev",
		},
		pagination: {
			el: ".swiper-install .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: { slidesPerView: 1.2 },
			768: { slidesPerView: 2 },
			1200: { slidesPerView: 3 },
			1500: { slidesPerView: 4 },
		},
	});
}
