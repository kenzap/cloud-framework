( function( $ ) {
 'use strict';

 	$(function() {

		kenzapIsotope($);
	});
}( jQuery ) );

function kenzapIsotope($){

	setTimeout(function(){
		var $container = $( ".kenzap .kenzap-gallery-5 .kp-list");
		$container.imagesLoaded(function () {

			
			var iso = $container.data('isotope')
			if ( iso ) {$container.isotope( 'destroy' );}
			$container.isotope( {
				layoutMode: 'packery',
				itemSelector: '.kp-iitem',
				percentPosition: true,
				packery: {
					horizontalOrder: true,
				},
			} );

			$container.fadeTo( "normal", 1 );

			$( '.kenzap .kenzap-gallery-5 [data-fancybox="gallery"]' ).fancybox( {
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
				parentEl: '.kenzap .kenzap-gallery-5',
			} );
		});
	},100);

}