( function( $ ) {
    'use strict';

    $(function() {

        var $container = $( ".kenzap .kenzap-gallery-8 .kp-list");
		$container.imagesLoaded(function () {

            const $gallery = $container.isotope( {
                layoutMode: 'packery',
                itemSelector: '.kp-item',
                percentPosition: true,
                packery: {
                    columnWidth: '.grid-sizer',
                },
            } );

            $( '.kenzap .kenzap-gallery-8 a' ).on( 'click', function() {
                if ( $( this ).hasClass( 'filter' ) ) {
                    const filterValue = $( this ).attr( 'data-filter' );
                    $gallery.isotope( { filter: filterValue } );
                    $( '.kp-filter li a' ).removeClass( 'active' );
                    $( this ).addClass( 'active' );
                    return false;
                }

                if ( $( this ).hasClass( 'gallery-link' ) ) {
                    $( this ).parents( '.gallery-box' ).find( '.kp-img a' ).trigger( 'click' );
                    return false;
                }
            } );

            $( '.kenzap .kenzap-gallery-8 [data-fancybox="gallery"]' ).fancybox( {
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
                parentEl: '.kenzap .kenzap-gallery-8',
            } );
        });
    });

}( jQuery ) );
