



$(document).ready(function() {
	
	document.querySelector('.theme-mode').addEventListener('click', (event) => {
		event.preventDefault();
		if(localStorage.getItem('theme') == 'dark') {
			localStorage.removeItem('theme') == 'dark'
		} else {
			localStorage.setItem('theme', 'dark') 
		}
		addDarkClassToHTML();
	});
	function addDarkClassToHTML() {
	try {
		if(localStorage.getItem('theme') == 'dark') {
			 document.querySelector('html').classList.add('dark'); 
		}
	   else {
		document.querySelector('html').classList.remove('dark'); 
	   }
	} catch (err) { }
	}
	addDarkClassToHTML();

	


    $('.portfolio__slider').slick({
        Infinity: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrow: true,
		
    });
	
	$(".portfolio__item").on("init", function(event, slick){
		$(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
	});
	
	$(".portfolio__slider").on("afterChange", function(event, slick, currentSlide){
		$(".count").text ( parseInt   (   slick.currentSlide + 1) + ' / ' +  slick.slideCount);
	});
	$(".page-article-item_image-slider").slick({
		slidesToShow: 1,
		arrows: true
	});
    
	$(function () {
		$('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true
		});
		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	});
	
   
	$('.form__mask').mask('+7 (999) 999-99-99');
	

	  
const getId = (link) => link.getAttribute('href').replace('#', '');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				document.querySelectorAll('.menu__nav-link').forEach((link)=> {
					link.classList.toggle(
						'active', 
						getId(link) === entry.target.id
					);
				});
			}
		});
	}, { 
		threshold: 0.7,
	
	});
	document.querySelectorAll('.section').forEach(
		(section)=> observer.observe(section),
	);

	document.querySelector('.menu__list').addEventListener('click', (event) => {
		if (event.target.classList.contains('menu__nav-link')) {
			event.preventDefault();
			
			const id = event.target.getAttribute('href').replace('#', '');
			window.scrollTo({
				top: document.getElementById(id).offsetTop,
				behavior: 'smooth',
			});
		}
	});

});
    


jQuery(function($) {
	
	$.mask.definitions['H']='[012]';
	$.mask.definitions['M']='[012345]';
	$('#eITDbegintime').mask('H9:M9' + "   " + '(По Мск)');
	$('#eITDendtime').mask('H9:M9');

});