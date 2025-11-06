import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
import { detectCloseElement } from "./helper";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
	scrollActive: function () {
		let height = $("header").height();
		if ($(window).scrollTop() > height) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	},
	mobile() {
		$(".header-hambuger").on("click", function () {
			$(this).toggleClass("header-hamburger-active");
			$("body").toggleClass("isOpenMenu");
		});
		$(document).on("click", ".dropdown-toggle", function (e) {
			e.preventDefault();
			const $parent = $(this).closest(".dropdown");
			const $menu = $parent.find(".dropdown-menu");

			if ($parent.hasClass("open")) {
				// Đóng dropdown hiện tại
				$menu.stop(true, true).slideUp(250);
				$parent.removeClass("open");
			} else {
				// Đóng các dropdown khác (nếu chỉ muốn 1 mở)
				$parent
					.siblings(".dropdown")
					.removeClass("open")
					.find(".dropdown-menu")
					.slideUp(250);

				// Mở dropdown được click
				$menu.stop(true, true).slideDown(250);
				$parent.addClass("open");
			}
		});
	},

	initVariable: function () {
		const height = $("header").height();
		document.documentElement.style.setProperty(
			"--header-height",
			`${height}px`
		);
	},
	changeLaguage() {
		const toggle = document.getElementById("langToggle");
		const menu = document.getElementById("langMenu");
		const label = toggle.querySelector("span");
		const items = menu.querySelectorAll(".langHeader");

		// Mở / đóng dropdown
		toggle.addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			menu.classList.toggle("hidden");
		});

		// Ngăn click trong menu bị đóng
		menu.addEventListener("click", (e) => e.stopPropagation());

		// Khi click chọn ngôn ngữ
		items.forEach((item) => {
			item.addEventListener("click", () => {
				const selected = item.textContent.trim();
				label.textContent = selected;
				menu.classList.add("hidden");
			});
		});

		// Click ra ngoài thì đóng menu
		document.addEventListener("click", () => {
			if (!menu.classList.contains("hidden")) menu.classList.add("hidden");
		});
	},
	animateSearch() {
		const icon = document.getElementById("searchIcon");
		const input = document.getElementById("searchInput");
		const box = document.getElementById("searchBox");

		if (!icon || !input || !box) return;

		let isMobile = window.innerWidth < 1200;

		const showSearch = () => {
			input.classList.remove("hidden");
			input.focus();
		};

		const hideSearch = () => {
			input.classList.add("hidden");
		};

		const toggleSearch = (e) => {
			e.stopPropagation();
			input.classList.toggle("hidden");
			if (!input.classList.contains("hidden")) {
				input.focus();
			}
		};

		// Gắn sự kiện click icon
		const addEvents = () => {
			// Xóa trước để tránh gắn trùng khi resize
			icon.removeEventListener("click", toggleSearch);
			document.removeEventListener("click", handleOutsideClick);

			if (isMobile) {
				icon.addEventListener("click", toggleSearch);
				document.addEventListener("click", handleOutsideClick);
				hideSearch();
			} else {
				showSearch();
			}
		};

		const handleOutsideClick = (e) => {
			if (!e.target.closest("#searchBox")) {
				hideSearch();
			}
		};

		// Khi resize → kiểm tra lại màn hình
		window.addEventListener("resize", () => {
			const newIsMobile = window.innerWidth < 1200;
			if (newIsMobile !== isMobile) {
				isMobile = newIsMobile;
				addEvents();
			}
		});

		// Khởi tạo ban đầu
		addEvents();
	},
	dropdownHeader() {
		const toggle = $("#steelToggle");
		const dropdown = $("#steelDropdown");
		const togglehref = $("#steelToggle .item-navbar");

		toggle.on("click", function (e) {
			e.stopPropagation();
			dropdown.toggleClass("hidden");
			togglehref.toggleClass("active");
		});

		$(document).on("click", function (e) {
			if (!$(e.target).closest("#steelDropdown, #steelToggle").length) {
				dropdown.addClass("hidden");
				togglehref.removeClass("active");
			}
		});
	},
	init: function () {
		headerSearch();
		header.scrollActive();
		header.mobile();
		header.initVariable();
		header.changeLaguage();
		header.animateSearch();
		header.dropdownHeader();
	},
};
document.addEventListener(
	"scroll",
	function (e) {
		header.scrollActive();
	},
	true
);
