const scrollFunc = () => {
	// const links = document.querySelectorAll('a'); // первый способ
	const links = document.querySelectorAll('.header-menu__item a');
	const linkChar = document.querySelector('.card-details__link-characteristics');
	const arrayLinks = [...links, linkChar];

	seamless.polyfill();
	// links.forEach((element) => { // первый способ
	arrayLinks.forEach((element) => {

		element.addEventListener('click', (event) => {
			event.preventDefault();

			const id = element.getAttribute('href').substring(1);
			const section = document.getElementById(id);

			if (section) {
				seamless.elementScrollIntoView(section, {
					behavior: 'smooth',
					block: 'start'
				});
			} else {
				seamless.elementScrollIntoView(document.querySelector('#characteristics'), {
					behavior: 'smooth',
					block: 'center',
					inline: 'center'
				});
			}
		});
	});
};

scrollFunc();