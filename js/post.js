$(".button-collapse").sideNav();
$('.modal').modal();
/*$('.codeblocks .tabs').tabs({
	'swipeable': true
});*/
Prism.plugins.NormalizeWhitespace.setDefaults({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true
	/*'break-lines': 80,
	'indent': 2,
	'remove-initial-line-feed': false,
	'tabs-to-spaces': 4,
	'spaces-to-tabs': 4*/
});
Prism.plugins.toolbar.registerButton('select-code', function (env) {
	var button = document.createElement('button');
	button.innerHTML = 'Select Code';

	button.addEventListener('click', function () {
		// Source: http://stackoverflow.com/a/11128179/2757940
		if (document.body.createTextRange) { // ms
			var range = document.body.createTextRange();
			range.moveToElementText(env.element);
			range.select();
		} else if (window.getSelection) { // moz, opera, webkit
			var selection = window.getSelection();
			var range = document.createRange();
			range.selectNodeContents(env.element);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	});

	return button;
});
/**
 *  DISQUS CONFIGURATION*/

var disqus_config = function () {
	this.page.url = PAGE_URL; // Put the current url
	this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique id for the  blog
	this.page.title = 'a unique small title for each page where Disqus is present';
};

(function () { // DON'T EDIT BELOW THIS LINE
	var d = document,
		s = d.createElement('script');
	s.src = 'https://webappdeveloper.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
})();
