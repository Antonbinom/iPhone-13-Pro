const tabsFunc = () => {
	const tabs = document.querySelectorAll('.card-detail__change'); // получаем все элементы с классом card-detail__change
	const tabsTitle = document.querySelector('.card-details__title');
	const tabsPrice = document.querySelector('.card-details__price');
	const tabsImage = document.querySelector('.card__image_item');
	const tabsOptions = [{
			name: 'Graphite',
			memory: '64',
			price: 69000,
			image: 'img/iPhone-graphite.webp'
		},
		{
			name: 'Silver',
			memory: '128',
			price: 79000,
			image: 'img/iPhone-silver.webp'
		},
		{
			name: 'Sierra Blue',
			memory: '256',
			price: 99000,
			image: 'img/iPhone-sierra_blue.webp'
		}
	];

	const changeContent = (index) => {
		tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
		tabsPrice.textContent = `${tabsOptions[index].price}₽`;

		tabsImage.setAttribute('src', tabsOptions[index].image);
	};

	function changeActive(indexTab) { // функция по вкл/выкл класс active
		tabs.forEach((tab, index) => { // перебираем все элементы с классом card-detail__change
			tab.classList.remove('active'); // удаляем класс active у элемента на который нажали
			if (index === indexTab) { // если индекс элемента равен параметру функции, то...
				tab.classList.add('active'); // добавляем элементу класс active
			}
		});
		changeContent(indexTab);
	}

	tabs.forEach((tab, index) => { // перебираем все элементы с классом card-detail__change
		tab.addEventListener('click', () => { // при клике на один из элементов
			changeActive(index); // выполняем функцию changeActive и передаем параметр index в функцию changeActive
		});
	});

	changeContent(0);
};

tabsFunc();