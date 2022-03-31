const accordFunc = () => {
	const charItems = document.querySelectorAll('.characteristics__item');

	charItems.forEach(item => {
		const charBtn = item.querySelector('.characteristics__title');
		const charContent = item.querySelector('.characteristics__description');
		charBtn.addEventListener('click', () => {
			if (charContent.classList.contains('open')) {
				charContent.style.height = '';
			} else {
				charContent.style.height = charContent.scrollHeight + 'px';
			}
			charBtn.classList.toggle('active');
			charContent.classList.toggle('open');
		});
	});
};
accordFunc();