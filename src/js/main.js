import AOS from "aos";
import lozad from "lozad";
import "../../plugins/Tabslet/jquery.tabslet.min"
import {
	setBackgroundElement,
	detectCloseElement,
	buttonToTop,
	clickScrollToDiv,
	appendCaptchaASP,
	menuSpy,
	stickElementToEdge,
	countUpInit,
	ToggleItem

} from "./helper";
import { header } from "./header";
import { tabsletInit } from "./tabslet";
import { swiperInit } from "./swiper";
import "./filter-img.js";
$(document).ready(function () {
	setBackgroundElement();
	stickElementToEdge();
	menuSpy();
	header.init();
	tabsletInit();
	swiperInit();
	countUpInit()
	ToggleItem()
});
// document.querySelectorAll('.qa-drop').forEach((item) => {
// 	item.addEventListener('click', () => {
// 		// Nếu đang active thì bỏ active, nếu chưa thì thêm
// 		item.classList.toggle('active');

// 		const border_b = item.querySelector('.liner-border-b');
// 		const icon = item.querySelector('i');
// 		const submenu = item.querySelector('.supmenu');

// 		// Toggle border bottom cho h3
// 		border_b.classList.toggle('active');

// 		// Toggle icon plus/minus
// 		if (icon.classList.contains('fa-plus')) {
// 			icon.classList.replace('fa-plus', 'fa-minus');
// 		} else {
// 			icon.classList.replace('fa-minus', 'fa-plus');
// 		}

// 		// Hiện/ẩn submenu
// 		submenu.classList.toggle('hidden');
// 	});
// });
/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

window.lozad = observer.observe();
