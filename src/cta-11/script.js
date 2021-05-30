(function ($) {
 "use strict";	

	$(function() {

		if($('.wp-admin').length>0){ return; }
		$('.kenzap .kpacc2 .toggle').click(function(e) {

			e.preventDefault();
			var $this = $(this);
			if ($this.next().hasClass('show')) {
				$this.next().removeClass('show');
				$this.next().slideUp(350);
				$this.removeClass('active');
			} else {
				$this.parent().parent().find('li .inner.show').slideUp(350);
				$this.parent().parent().find('li .inner').removeClass('show');
				
				$this.next().slideDown(350);
				$this.next().toggleClass('show');
				$this.parent().parent().find('li .toggle').removeClass('active');
				$this.addClass('active');
			}  
	  	});
	});
})(jQuery);