jQuery(document).ready(function($) {

	$('.product-slick').slick({
		prevArrow: '<button class="slick-arrow-left"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button class="slick-arrow-right"><i class="fas fa-chevron-right"></i></button>'
	});

	$('.contact-button-wrap button').click(function() {
		$('html, body').animate({
			scrollTop: $('.contact').position().top
		}, 300, function() {
			$('.contact-info-wrap').addClass('animated pulse');
			setTimeout(function() {
				$('.contact-info-wrap').removeClass('animated pulse');
			}, 800);
		});
	});

});
