// TODO must refactor this into vanilla js and remove all min.js files
// noinspection JSUnresolvedFunction,JSJQueryEfficiency

function initializeContentMobileTabs() {
	$('.content__mobile-tabs-menu li').each( function() {
		$(this).attr('data-value', $(this).text().toLowerCase());
	});

	$('.content__mobile-tabs-menu li').on('click', function() {
		const text = $(this).text();
		const item = $(this);
		const id = item.closest('.content__mobile-tabs').attr('id');
		$('#'+id).find('.content__mobile-tabs-btn input').val(text);
	});
}
function initializeSimpleCarousel() {
	$('.home__bg').simpleCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		mouseDrag: false,
		touchDrag: false,
		items: 1,
		dots: false,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 0,
	});
	$('.home__bg .item').each( function() {
		if ($(this).attr("data-bg")){
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'center center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover',
			});
		}
	});
	$('.home__carousel').simpleCarousel({
		mouseDrag: false,
		touchDrag: false,
		dots: false,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 30,
		responsive : {
			0 : {
				items: 2,
			},
			576 : {
				items: 2,
			},
			768 : {
				items: 3,
			},
			992 : {
				items: 4,
			},
			1200 : {
				items: 4,
			},
		}
	});
	$('.home__nav--next').on('click', function() {
		$('.home__carousel, .home__bg').trigger('next.owl.carousel');
	});
	$('.home__nav--prev').on('click', function() {
		$('.home__carousel, .home__bg').trigger('prev.owl.carousel');
	});
	$(window).on('resize', function() {
		const itemHeight = $('.home__bg').height();
		$('.home__bg .item').css("height", itemHeight + "px");
	});
	$(window).trigger('resize');
}
function initializeBurgerButton() {
	$('.header__btn').on('click', function() {
		$(this).toggleClass('header__btn--active');
		$('.header__nav').toggleClass('header__nav--active');
		$('.body').toggleClass('body--active');
		const headerSearchBtn = $('.header__search-btn');

		if (headerSearchBtn.hasClass('active')) {
			headerSearchBtn.toggleClass('active');
			$('.header__search').toggleClass('header__search--active');
		}
	});
}
function initializeSearchButton() {
	$('.header__search-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.header__search').toggleClass('header__search--active');

		if ($('.header__btn').hasClass('header__btn--active')) {
			$('.header__btn').toggleClass('header__btn--active');
			$('.header__nav').toggleClass('header__nav--active');
			$('.body').toggleClass('body--active');
		}
	});
}
function initializeFiltering() {
	$('.filter__item-menu li').each( function() {
		$(this).attr('data-value', $(this).text().toLowerCase());
	});

	$('.filter__item-menu li').on('click', function() {
		const text = $(this).text();
		const item = $(this);
		const id = item.closest('.filter__item').attr('id');
		$('#'+id).find('.filter__item-btn input').val(text);
	});
}
function initializeSimpleScrollbar() {
	$('.scrollbar-dropdown').mCustomScrollbar({
		axis: "y",
		scrollbarPosition: "outside",
		theme: "custom-bar"
	});

	$('.accordion').mCustomScrollbar({
		axis: "y",
		scrollbarPosition: "outside",
		theme: "custom-bar2"
	});
}
function initializePlayer() {
	if ($('#player').length) {
		new Plyr('#player');
	}
}


document.addEventListener('DOMContentLoaded',  () => {
	initializeContentMobileTabs();
	initializeSimpleCarousel();
	initializeBurgerButton();
	initializeSearchButton();
	initializePlayer();
	initializeSimpleScrollbar();
	initializeFiltering();
})