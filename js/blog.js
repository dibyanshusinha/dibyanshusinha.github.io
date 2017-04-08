$(window).on('load', function () {
	$("#load-cover").hide();
});
$("#about-author-open").click(function () {
	$("#about-author").addClass('scale-in');
});
$("#about-author-close").click(function () {
	$("#about-author").removeClass('scale-in');
});
$(".button-collapse").sideNav();
$('.pushpin-nav').pushpin({
	top: 150
});
$('.modal').modal();

/*Mix it up search*/
var containerEl = document.querySelector('.posts');
var inputSearch = document.querySelector('[data-ref="input-search"]');
var keyupTimeout;
var mixer = mixitup(containerEl, {
	animation: {
		animateResizeTargets: true
	},
	callbacks: {
		onMixClick: function () {
			// Reset the search if a filter is clicked

			if (this.matches('[data-filter]')) {
				inputSearch.value = '';
			}
		}
	}
});
inputSearch.addEventListener('keyup', function () {
	var searchValue;

	if (inputSearch.value.length < 3) {
		// If the input value is less than 3 characters, don't send

		searchValue = '';
	} else {
		searchValue = inputSearch.value.toLowerCase().trim();
	}

	// Very basic throttling to prevent mixer thrashing. Only search
	// once 350ms has passed since the last keyup event

	clearTimeout(keyupTimeout);

	keyupTimeout = setTimeout(function () {
		filterByString(searchValue);
	}, 350);
});

function filterByString(searchValue) {
	if (searchValue) {

		mixer.filter('[data-keyWords*="' + searchValue + '"]');
	} else {

		mixer.filter('all');
	}
}
