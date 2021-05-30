jQuery( document ).ready( function() {
	"use strict";
	
    jQuery( '.kenzap .kenzap-timeline-3 .kenzap-lg-carousel' ).owlCarousel( {
		autoplay: false,
		loop: false,
		margin: 0,
		dots: false,
		mouseDrag: false,
		slideBy: 1,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			609: {
				items: 2,
			},
			768: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1200: {
				items: 4,
			},
			1300: {
				items: 4,
			},
			1400: {
				items: 4,
			},
			1500: {
				items: 5,
			},
		},
	} );

    jQuery( '.kenzap .kenzap-timeline-3 .kenzap-md-carousel' ).owlCarousel( {
			autoplay: false,
			loop: false,
			margin: 0,
			dots: false,
			mouseDrag: false,
			slideBy: 1,
			nav: true,
			responsive: {
				0: {
					items: 1,
				},
				500: {
					items: 1,
				},
				609: {
					items: 2,
				},
				768: {
					items: 2,
				},
				991: {
					items: 3,
				},
			},
		} );

    jQuery( '.kenzap .kenzap-timeline-3 .kenzap-sm-carousel' ).owlCarousel( {
			autoplay: false,
			loop: false,
			margin: 0,
			dots: false,
			mouseDrag: false,
			slideBy: 1,
			nav: true,
			responsive: {
				0: {
					items: 1,
				},
				500: {
					items: 1,
				},
				609: {
					items: 2,
				},
			},
		} );

    jQuery( '.kenzap .kenzap-timeline-3 .kenzap-xs-carousel' ).owlCarousel( {
			autoplay: false,
			loop: false,
			margin: 0,
			dots: false,
			mouseDrag: false,
			slideBy: 1,
			nav: true,
			responsive: {
				0: {
					items: 1,
				},
			},
		} );
} );

