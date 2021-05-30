(function ($) {
 "use strict";	

	$(function() {

		if($('.wp-admin').length>0){ return; }
		kenzapMarqueue($);
	});
})(jQuery);

function kenzapMarqueue($){

	$('.marquee').show();
	$('.marquee').marquee({
		startVisible: true,
		duplicated: true,
		gap: '50'
	});
}