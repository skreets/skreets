$(document).ready(function(){

	$(window).on('scroll', function() {
	if ($(window).scrollTop() > 270) $('header').addClass('fixed');
		else $('header').removeClass('fixed');
	});

	$('body').on('click', '.burger', function(){
		$(this).toggleClass('active');
		$('header').toggleClass('active');
		$('header nav').toggleClass('active');
	});

	// Detach Browsersync element
	setTimeout(function() {
		$('div[style="position: static;"]').addClass('detach');
		$('#yinfo-badge, .detach').detach();
	}, 100);

	$('body').click(function(){
		$('div[style="position: static;"]').addClass('detach');
		$('#yinfo-badge, .detach').detach();
	});

});