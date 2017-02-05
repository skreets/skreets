$(document).ready(function(){

	var a=Math.round(Math.random() * 3);
	if(a==2)
	$('#bg').addClass('four');
	if(a==1)
	$('#bg').addClass('two');
	if(a==3)
	$('#bg').addClass('three');

	$('.portfolio-modal').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll',
		tLoading: '<span class="fa fa-circle-o-notch fa-spin fa-3x fa-fw" style="opacity: .5;"></span>',
		modal: true,
	});
	$(document).on('click', '.modal-close', function(e) {
		$('.modal-portfolio_bg, .modal-portfolio-content').removeClass('active');
		setTimeout(function() {
			e.preventDefault();
			$.magnificPopup.close();
		}, 450)
	});

	// Tooltip
	$('.tooltip').tooltipster({
		contentAsHTML: true,
	});

	$('.tooltip-left').tooltipster({
		position: 'left',
		contentAsHTML: true,
	});

	$('.tooltip-right').tooltipster({
		position: 'right',
		contentAsHTML: true,
	});

	$('.tooltip-top-right').tooltipster({
		position: 'top-right',
		contentAsHTML: true,
	});

	$('.tooltip-top-left').tooltipster({
		position: 'top-left',
		contentAsHTML: true,
	});

	$('.tooltip-bottom').tooltipster({
		position: 'bottom',
		contentAsHTML: true,
	});

	$('.tooltip-bottom_left').tooltipster({
		position: 'bottom-left',
		contentAsHTML: true,
	});

	$('.tooltip-bottom_right').tooltipster({
		position: 'bottom-right',
		contentAsHTML: true,
	});

	// Show phone
	$('.js-phone').click(function(){
		$(this).text('+7(968)079-9365');
	});

});