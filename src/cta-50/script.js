( function( $ ) {
    'use strict';

    $(function() {

        var $container = $( ".kenzap .kenzap-gallery-2 .kp-list");
		$container.imagesLoaded(function () {

            const $gallery = $container.isotope( {
                layoutMode: 'packery',
                itemSelector: '.kp-item',
                percentPosition: true,
                packery: {
                    columnWidth: '.grid-sizer',
                },
            } );

            $( '.kenzap .kenzap-gallery-2 a' ).on( 'click', function() {
                if ( $( this ).hasClass( 'filter' ) ) {
                    const filterValue = $( this ).attr( 'data-filter' );
                    $gallery.isotope( { filter: filterValue } );
                    $( '.kp-filter li a' ).removeClass( 'active' );
                    $( this ).addClass( 'active' );
                    return false;
                }
            } );

            $( '.kenzap .gal2__filterItem' ).on( 'click', function() {
                $( this ).parent().parent().parent().find( '[data-fancybox="gallery"]' ).click();
            } );

            $( ".kenzap .kenzap-gallery-2" ).each(function() {

                var cont = this.id; 
                $( '.kenzap .kenzap-gallery-2 [data-fancybox="gallery"]' ).fancybox( {
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
                    parentEl: ".kenzap .kenzap-gallery-2",
                } );
            } );
        });
    });
}( jQuery ) );