( function( $ ) {
    'use strict';

	// init masonry
	$(document).ready(function(){
		kenzapB3($);
	});

}( jQuery ) );

function kenzapB3($){
	var $container = $(".kenzap-blog-4 .grid");
	$container.imagesLoaded(function () {
		$container.fadeTo("fast",1);
		$container.masonry({
			itemSelector: '.blog-item',
			columnWidth: '.grid-sizer',
			percentPosition: true,
			horizontalOrder: true
		});
	});
}