( function( $ ) {
 'use strict';

 	$(function() {
		$( '.kenzap .kenzap-gallery-5 .kp-list' ).isotope( {
			layoutMode: 'packery',
			itemSelector: '.kp-item',
			percentPosition: true,
			packery: {
				horizontalOrder: true,
			},
		} );

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
}( jQuery ) );
