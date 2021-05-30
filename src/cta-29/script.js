jQuery( document ).ready( function() {
    "use strict";
    
    jQuery( '.kenzap .kenzap-timeline-4 .kenzap-lg-carousel' ).owlCarousel( {
        autoplay: false,
        loop: false,
        margin: 0,
        dots: false,
        mouseDrag: true,
        slideBy: 1,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            609: {
                items: 2,
            },
            768: {
                items: 3,
            },
            991: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    } );

    jQuery( '.kenzap .kenzap-timeline-4 .kenzap-md-carousel' ).owlCarousel( {
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
                items: 2,
            },
            609: {
                items: 2,
            },
            768: {
                items: 3,
            },
            991: {
                items: 4,
            },
        },
    } );

    jQuery( '.kenzap .kenzap-timeline-4 .kenzap-sm-carousel' ).owlCarousel( {
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
                items: 2,
            },
            609: {
                items: 2,
            },
        },
    } );

    jQuery( '.kenzap .kenzap-timeline-4 .kenzap-xs-carousel' ).owlCarousel( {
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

