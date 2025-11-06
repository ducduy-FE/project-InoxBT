document.addEventListener('DOMContentLoaded', function () {
	const countUpOptions = {
		duration: 2,
		suffix: '+',
		useGrouping: false
	};

	const count1 = new countUp.CountUp('countup-1', 1000, countUpOptions);
	const count2 = new countUp.CountUp('countup-2', 41, countUpOptions);

	let hasAnimated = true; // chỉ chạy 1 lần

	const section = document.querySelector('.section-intro-2');

	// Dùng Intersection Observer để phát hiện khi section xuất hiện
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting && !hasAnimated) {
				hasAnimated = true; // tránh chạy lại khi scroll nhiều lần

				if (!count1.error) count1.start();
				else console.error(count1.error);

				if (!count2.error) count2.start();
				else console.error(count2.error);

				// Sau khi chạy xong có thể ngắt observer
				observer.disconnect();
			}
		});
	}, { threshold: 0.4 }); // chỉ cần 40% section xuất hiện là chạy

	observer.observe(section);
});
