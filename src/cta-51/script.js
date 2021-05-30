( function( $ ) {
    'use strict';

    $(function() {

        const images = parseInt($( '.kenzap .kenzap-gallery-3 .kenzap-container').data('images'));
        const gallery_lg = $( '.kenzap .kenzap-gallery-3 .kp-list' ).owlCarousel( {
            autoplay: false,
            loop: false,
            margin: 0,
            dots: false,
            mouseDrag: true,
            slideBy: 1,
            nav: false,
            responsive: {
                0: {
                    items: 1,
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
            },
        } );

        $( '.kenzap .kenzap-gallery-3 span' ).on( 'click', function() {
            if ( $( this ).hasClass( 'gallery-next' ) ) {
                gallery_lg.trigger( 'next.owl.carousel' );
                // gallery_md.trigger( 'next.owl.carousel' );
                // gallery_sm.trigger( 'next.owl.carousel' );
                // gallery_xs.trigger( 'next.owl.carousel' );
            }

            if ( $( this ).hasClass( 'gallery-prev' ) ) {
                gallery_lg.trigger( 'prev.owl.carousel' );
                // gallery_md.trigger( 'prev.owl.carousel' );
                // gallery_sm.trigger( 'prev.owl.carousel' );
                // gallery_xs.trigger( 'prev.owl.carousel' );
            }

            if ( $( this ).hasClass( 'gallery-link' ) ) {
                $( this ).parents( '.gallery-box' ).find( '.kp-img a' ).trigger( 'click' );
                return false;
            }
        } );

        $( '.kenzap .kenzap-gallery-3 [data-fancybox="gallery"]' ).fancybox( {
            idleTime: 0,
            thumbs: {
                autoStart: true,
                axis: 'x',
            },
            buttons: [
                'zoom',
                'fullScreen',
                'close',
            ],
            parentEl: '.kenzap .kenzap-gallery-3',
        } );

    });
}( jQuery ) );
