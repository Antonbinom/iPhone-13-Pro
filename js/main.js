const links = document.querySelectorAll('a');

seamless.polyfill();
links.forEach((element) => {
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

// ===================================
// const array = [1, 2, 3, 4, 5, 6, 7];

// for (i = 0; i < array.length; i++) {
// 	console.log(i);
// }
// array.forEach((elem) => { // цикл foreach гораздо лаконичнее и элегантнее чем цикл for, но в тоже время немного медленнее
// 	console.log(elem);
// });