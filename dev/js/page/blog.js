$(document).ready(function(){

	$('#onePhoto').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: 'Не удалось загрузить изображение.'
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});

	$('#onePhoto_two').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: 'Не удалось загрузить изображение.'
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});

	$('#onePhoto_three').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: 'Не удалось загрузить изображение.'
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});

	$('#onePhoto_gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: 'Не удалось загрузить изображение.'
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});

	// $('.mobile .blog-page #table').mCustomScrollbar({
	// 	theme: 'dark-thin',
	// 	axis: 'x',
	// 	mouseWheel: false,
	// });

	// Animation
	setTimeout(function() {
		$('.head').addClass('active');
	}, 250);

	setTimeout(function() {
		$('h1').addClass('active');
	}, 550);

	setTimeout(function() {
		$('.post').addClass('active');
	}, 850);

	setTimeout(function() {
		$('.content').addClass('active');
	}, 850);

	setTimeout(function() {
		$('.content-img').addClass('active');
	}, 850);

	setTimeout(function() {
		$('.content-blockquote').addClass('active');
	}, 850);

	setTimeout(function() {
		$('.content-quote').addClass('active');
	}, 850);

	setTimeout(function() {
		$('.paginator').addClass('active');
	}, 1050);

});