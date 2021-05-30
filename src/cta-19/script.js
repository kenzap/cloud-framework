(function ($) {
 "use strict";

 	$(function() {
	 	kenzapBanner2($);
	});
	
})(jQuery);

function kenzapBanner2($){

	$('.kenzap .kp-bn2 .count-down').each(function() {

		var $countdown = $( this ), finalDate = $(this).attr('data-time'), year = $(this).data('year'), month = $(this).data('month'), day = $(this).data('day'), minute = $(this).data('minute'), hour = $(this).data('hour'), second = $(this).data('second');

		finalDate = finalDate.replace("T", " ");
		finalDate = finalDate.replace("-", "/");
		finalDate = finalDate.replace("-", "/");

		var year = $countdown.data('year'), month = $countdown.data('month'), day = $countdown.data('day'), minute = $countdown.data('minute'), hour = $countdown.data('hour'), second = $countdown.data('second');
		var yeart = $countdown.data('yeart'), montht = $countdown.data('montht'), dayt = $countdown.data('dayt'), minutet = $countdown.data('minutet'), hourt = $countdown.data('hourt'), secondt = $countdown.data('secondt');
		
		var temp = '';

		if(year){temp += '<li>%Y <span>'+yeart+'</span></li>';}
		if(month){temp += '<li>%m <span>'+montht+'</span></li>';}
		if(day){temp += '<li>%D <span>'+dayt+'</span></li>';}
		if(hour){temp += '<li>%H <span>'+hourt+'</span></li>';}
		if(minute){temp += '<li>%M <span>'+minutet+'</span></li>';}
		if(second){temp += '<li>%S <span>'+secondt+'</span></li>';}

		$countdown.countdown(finalDate, function(event) {
			var $this = $countdown.html(event.strftime(temp));
		});
	});
}