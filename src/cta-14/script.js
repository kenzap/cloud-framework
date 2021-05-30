(function ($) {
 "use strict";	

	$(function() {

		beforeAfter($);
	});
})(jQuery);

function beforeAfter($){

	$('.kenzap .kpinf9.kp-left .ba-slider').beforeAfter();
	$('.kenzap .kpinf9.kp-right .ba-slider').beforeAfter();
	$('.kenzap .kp-img').animate({
		opacity:1
	}, 700);
}