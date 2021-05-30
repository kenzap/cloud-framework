(function ($) {
 "use strict";

 	$(function() {
		$('.kenzap .kp-tabs-1 .kptab a').click(function(){

			$(this).parent().parent().find('li').removeClass('active');
			$(this).parent().addClass('active');
			$(this).parent().parent().parent().parent().parent().find('.tab-content').hide();

			var activeTab = $(this).attr('href');
			$(activeTab).fadeIn();

			return false;
		});
	});
	
})(jQuery);