$(document).ready(function () {

	/* ----------------------------------------------------------- */
	/*  2. Experience SLider(Owl Carousel)
	/* ----------------------------------------------------------- */

	var owl = $("#owl-carousel");
	owl.owlCarousel({
		items: 4, //4 items above 1024px browser width
		itemsDesktop: [1200, 3], //3 items between 1024px and 901px
		itemsDesktopSmall: [900, 2], // betweem 900px and 601px
		itemsTablet: [600, 1], //1 items between 600 and 0
		itemsMobile: 1 // itemsMobile disabled - inherit from itemsTablet option
	});
	// Slide Navigation
	jQuery(".next").click(function () {
		owl.trigger('owl.next');
	});

	jQuery(".prev").click(function () {
		owl.trigger('owl.prev');
	});



	/* ----------------------------------------------------------- */
	/*  4. PORTFOLIO SLIDER
	/* ----------------------------------------------------------- */

	var containerEl = document.querySelector('#portfolio-list');
	var mixer = mixitup(containerEl, {
		selectors: {
        control: '[data-mixitup-control]'
    },
		load: {
			sort: 'place:asc'
		},
		animation: {
			animateResizeTargets: true
		}
	});


	/* ----------------------------------------------------------- */
	/*  6. TESTIMONIAL SLIDER (Owl Carousel)
	/* ----------------------------------------------------------- */


	var owl2 = $("#owl-carousel2");
	owl2.owlCarousel({
		items: 2, //4 items above 1024px browser width
		itemsDesktop: [1200, 2], //3 items between 1024px and 901px
		itemsDesktopSmall: [992, 2], // betweem 900px and 601px
		itemsTablet: [768, 1], //1 items between 600 and 0
		itemsMobile: 1 // itemsMobile disabled - inherit from itemsTablet option
	});
	// Custom Navigation Events
	$(".next2").click(function () {
		owl2.trigger('owl.next');
	});
	$(".prev2").click(function () {
		owl2.trigger('owl.prev');
	});



	// Smooth Scroll
	$(function () {
		// This will select everything with the class smoothScroll
		// This should prevent problems with carousel, scrollspy, etc...
		$('.smoothScroll').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000); // The number here represents the speed of the scroll in milliseconds
					return false;
				}
			}
		});
	});

	// card click and reveals
	$(function () {
		$('.activator').click(function () {
			var location = $(this).parent().parent().parent();
			$('.card-reveal', location).slideToggle("slow");
		});

		$('.card-reveal .close').click(function () {
			var location = $(this).parent().parent().parent();
			$('.card-reveal', location).slideToggle("slow");
		});
	});

	$('.testimonial-content').height($('.testimonial-content').height());

});


$(window).on('load', function () {
	$("#load-cover").hide();
});
