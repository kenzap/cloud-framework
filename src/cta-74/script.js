( function( $ ) {
    'use strict';

	$(function() {

		const images = parseInt($( '.kbc1 .kenzap-container').data('images'));
		
		$(".kbc1 .kenzap-container").show();
		$(".kbc1 .owl-carousel").owlCarousel({
			autoplay: true,
			loop: true,
			margin: 10,
			responsive: {
				0:{
					items:1,
					dots: true,
					nav: true
				}, 
				500: {
					items: Math.round(images * 500/1200),
				},
				768: {
					items: Math.round(images * 768/1200),
				},
				991: {
					items: Math.round(images * 991/1200),
				},
				1200: {
					items: images,
				},
			}
		});	
	});

}( jQuery ) );