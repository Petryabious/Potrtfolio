const navIcon = document.querySelector('.nav-icon');
const pageTopWrapper = document.querySelector('.page-top__wrapper');
const delay = document.querySelector('.page__top-delay');

const navLinks = document.querySelectorAll('.nav-mobile__list a');

const body = document.body;

// создаем событие бургер меню
navIcon.addEventListener ('click', function() {
    this.classList.toggle('nav-icon--active');
    pageTopWrapper.classList.toggle('page-top__wrapper--active');
    delay.classList.toggle('page__top-delay--active');
    body.classList.toggle('lock');
})

navLinks.forEach(function(item){
    item.addEventListener('click', function () { 
        pageTopWrapper.classList.remove('page-top__wrapper--active');
        navIcon.classList.remove('nav-icon--active');
        delay.classList.remove('page__top-delay--active');
        body.classList.remove('lock');
     })
})
// кнопка подняться наверх
const btnBack =document.querySelector('#backtop');

btnBack.style.opacity = 0;

document.addEventListener('scroll', function(){
    if (window.pageYOffset > 500) {
        btnBack.style.opacity = 1;
    } else {
        btnBack.style.opacity = 0;
    }
});


//  создание placeholder у input
const formItems = document.querySelectorAll('.form__input');


formItems.forEach(item=>{
    const placeholder = item.previousElementSibling;
    item.addEventListener('focus', function(){
        placeholder.classList.add('active');
    })

    item.addEventListener('blur', function(){
        if (item.value.length > 0) {
            placeholder.classList.add('active');
        } else {
            placeholder.classList.remove('active');
        }
    })
})





$(document).ready(function () {


    //FORM VALIDATE
	$('.form').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			
			message: {
				required: true
			}
		},
		messages: {
			email: {
				required: 'Введите email',
				email: 'отсутсвует символ @'
			},
			
			message: {
				required: 'Поле не должно быть пустым'
			}
		},
		submitHandler: function (form) {
			ajaxFormSubmit();
		}

	});

	//*************************************************** */
	// Функция AJAX запрса на сервер

	function ajaxFormSubmit() {

		let string = $(".form").serialize(); // Соханяем данные введенные в форму в строку.

		//Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "./php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$(".form").slideUp(800);
				$('#answer').html(html);
			}
		});
		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;
	}



});



const portfolioObjects = [
	{
		title:'Сайт Форест тревел',
		describe:'Верстка многостраничного сайта. Сверстан учебный сайт по макету фигма. Использованы html/css, flex. Сделана мобильная адаптация, по принципу desctop-first. Количество страниц 4',
		stack:'HTML5‚ CSS3',
		image:'forest-travel',
		gitHub:'https://github.com/Petryabious/forest-travel',
		gitHubPages:'https://petryabious.github.io/forest-travel/'
	},
	{
		title:'Сайт приложения “Юнит”',
		describe:'Верстка лендинга. Сверстан учебный сайт по макету фигма. Использованы html/css, flex, препроцессор scss. Сделана мобильная адаптация, по принципу desctop-first. Добавлены js скрипты: мобильная навигация, поиск по сайту, слайдер. Использована методология BEM.',
		stack:'HTML5‚ CSS3, JS, SCSS',
		image:'unit',
		gitHub:'https://github.com/Petryabious/Unit',
		gitHubPages:'https://petryabious.github.io/Unit/'
	},
	{
		title:'Сайт NFT',
		describe:'Верстка лендинга. Сверстан сайт по макету фигма. Использованы html/css, flex. Сделана мобильная адаптация, по принципу desctop-first. Добавлены js скрипты: 2 слайдера(использован slick slider). Использована методология BEM.',
		stack:'HTML5‚ CSS3, JS',
		image:'nft',
		gitHub:'https://github.com/Petryabious/nft',
		gitHubPages:'https://petryabious.github.io/nft/'
	},
	{
		title:'Сайт Artificial Intelligence',
		describe:'Верстка лендинга. Сверстан сайт по макету фигма. Использованы html/css, flex. Сделана мобильная адаптация, по принципу desctop-first. Добавлены js скрипты: мобильная навигация, слайдер(использован slick slider). Использована методология BEM.',
		stack:'HTML5‚ CSS3, JS',
		image:'AL',
		gitHub:'https://github.com/Petryabious/AL',
		gitHubPages:'https://petryabious.github.io/AL/'
	},
	{
		title:'Сайт LaslesVPN',
		describe:'Верстка лендинга. Сверстан сайт по макету фигма. Использованы html/css, flex, препроцессор scss. Сделана мобильная адаптация, по принципу desctop-first. Добавлены js скрипты: мобильная навигация, слайдер(использован owl carousel 2). Использована методология BEM.',
		stack:'HTML5‚ CSS3, JS, SCSS',
		image:'vpn',
		gitHub:'https://github.com/Petryabious/Leslyvpn',
		gitHubPages:'https://petryabious.github.io/Leslyvpn/'
	},
	{
		title:'Сайт Cалон красоты',
		describe:'Верстка лендинга. Сверстан сайт по макету фигма. Использованы html/css, flex, grid, препроцессор scss. Сделана мобильная адаптация, по принципу desctop-first. Добавлены js скрипты: мобильная навигация, слайдер, табы, аккордеон, модальные окна. Использована методология BEM.',
		stack:'HTML5‚ CSS3, JS, SCSS',
		image:'beautySalon',
		gitHub:'https://github.com/Petryabious/beautySalon',
		gitHubPages:'https://petryabious.github.io/beautySalon/'
	}
]




const modal = document.querySelector('[data-modal]');
const modalContent = document.getElementById('modal-content');
const modalInfo = document.getElementById('modal-info');

const portfolioItems = document.querySelectorAll('[data-portfolio-item]');
const btnClose = document.querySelector('[data-btn-close]');




function addClassHidden(){
	modal.classList.add('modal-portfolio_hidden');
	body.classList.remove('lock');
	
}


btnClose.addEventListener('click', addClassHidden);
modal.addEventListener('click', addClassHidden);


function displayData(number){
	const currentItem = portfolioObjects[number];
	const markup = `<div class="modal-portfolio__links">
						<a target="_blank" class = "button-link" href="${currentItem.gitHub}">Репозитории</a>
						<a target="_blank" class = "button-link" href="${currentItem.gitHubPages}">GitHubPages</a>
					</div>

					<div class="modal-portfolio__img">
						<img src="./img/portfolio/${currentItem.image}.jpg" alt="${currentItem.title}">
					</div>

					<div class="modal-portfolio__desc">
						<div class="modal-portfolio__title">${currentItem.title}</div>
						<p class="modal-portfolio__text">
						${currentItem.describe}
						</p>
						<div class="modal-portfolio__stack">
							Технологии: <span>${currentItem.stack}, </span>
						</div>
					</div>`;


	modalInfo.insertAdjacentHTML('beforeend', markup);
}

function clearData(){
	modalInfo.innerHTML = '';
}


portfolioItems.forEach(portfolio =>{
	portfolio.addEventListener('click', function(){
		clearData();
		modal.classList.remove('modal-portfolio_hidden');
		body.classList.add('lock');

		displayData(portfolio.dataset.portfolioItem);

		modalContent.addEventListener('click', function(event){
			event.stopPropagation();
		});
	})
})