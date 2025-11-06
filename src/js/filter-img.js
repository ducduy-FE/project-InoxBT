document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.filter-bottom');

	if (buttons.length > 0) {
		buttons[0].classList.add('active');
	}

	buttons.forEach(button => {
		button.addEventListener('click', () => {

			buttons.forEach(btn => {
				btn.classList.remove('active');
			});

			button.classList.add('active');
		});
	});
});